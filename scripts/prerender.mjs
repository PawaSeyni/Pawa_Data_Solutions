// Post-build prerender (static snapshot SSG).
//
// Why a headless snapshot rather than render-to-string: src/components/Seo.jsx
// injects the head (title, description, canonical, OG/Twitter) from a useEffect,
// which never runs during Node render-to-string. A real browser DOES run those
// effects, so snapshotting captures the exact head and body for every route.
//
// Before this existed, all 11 routes shipped the same 4.3 KB shell carrying the
// HOME page's title, description and `<link rel="canonical" href="…/">`. Google
// could eventually render the JS and correct it; LinkedIn, Slack, WhatsApp and
// X never do, so every service page shared on social previewed as the homepage.
//
// Flow: serve dist/ (SPA-style) -> for each URL in sitemap.xml, load it in
// headless Chromium, wait for __PRERENDER_READY__, write dist/<Route>/index.html.
// The client still boots normally over the snapshot, so the site stays a SPA.
//
// Adapted from the same script running on griotmoon.com.

import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// On CI (Netlify) use @sparticuz/chromium — a statically-linked build that runs
// in containers without system Chrome libs. Locally, puppeteer's own Chromium.
const IS_CI = process.env.CI === 'true' || process.env.NETLIFY === 'true';
const { default: puppeteer } = IS_CI
  ? await import('puppeteer-core')
  : await import('puppeteer');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 5098;
const ORIGIN = `http://localhost:${PORT}`;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
};

// Real files are served from disk; every route boots from `shell` — the PRISTINE
// index.html captured before we start writing snapshots. Using the pristine
// shell (not a freshly written snapshot) matters: otherwise one route's baked
// head would leak into the next route's shell.
function createServer(shell) {
  return http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = path.join(DIST, urlPath);
      if (path.extname(urlPath) && existsSync(filePath) && statSync(filePath).isFile()) {
        const data = await readFile(filePath);
        res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream');
        res.end(data);
        return;
      }
      if (path.extname(urlPath)) {
        res.statusCode = 404;
        res.end('not found');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.end(shell);
    } catch (e) {
      res.statusCode = 500;
      res.end(String(e));
    }
  });
}

function routesFromSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

const shell = await readFile(path.join(DIST, 'index.html'), 'utf8');
const server = createServer(shell);
await new Promise((resolve) => server.listen(PORT, resolve));

// sitemap.xml is the single source of truth for which routes exist. If a route
// is added to the router but not the sitemap it will not be prerendered — and
// with the SPA catch-all removed it would 404, which is a loud, findable failure
// rather than a silent soft-404.
const routes = routesFromSitemap(
  await readFile(path.join(DIST, 'sitemap.xml'), 'utf8'),
).filter((r) => !path.extname(r));

console.log(`Prerendering ${routes.length} routes…`);

let launchOpts;
if (IS_CI) {
  const chromium = (await import('@sparticuz/chromium')).default;
  launchOpts = {
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  };
  console.log('CI mode: using @sparticuz/chromium');
} else {
  launchOpts = {
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  };
}

let browser;
try {
  browser = await puppeteer.launch(launchOpts);
} catch (e) {
  console.error(`❌ Prerender could not launch Chrome: ${e.message}`);
  console.error('   Failing the build so the last good deploy stays live.');
  server.close();
  process.exit(1);
}
console.log('Chrome launched OK');

// waitForFunction defaults to requestAnimationFrame, which can starve on
// paint-heavy routes; a plain interval is immune to that.
const POLL = { polling: 500, timeout: 15000 };

async function waitUntilRendered(page, route) {
  try {
    await page.waitForFunction('window.__PRERENDER_READY__ === true', POLL);
  } catch {
    throw new Error(`__PRERENDER_READY__ never fired (route ${route} did not finish rendering)`);
  }
  // Every route except Home is lazy; its Suspense fallback carries
  // data-prerender-loading. Snapshotting before the chunk resolves would ship an
  // empty placeholder div as the page.
  try {
    await page.waitForFunction("!document.querySelector('[data-prerender-loading]')", POLL);
  } catch {
    throw new Error(`lazy chunk never resolved (route ${route} snapshotted as a placeholder)`);
  }
}

// Guards against the exact bug this script exists to fix: a route that silently
// keeps the shell's homepage canonical would look fine in the build log.
// Netlify serves directories with a trailing slash, so compare on a normalized
// form rather than an exact string — otherwise every route fails on the slash.
const norm = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

function assertCanonical(html, route) {
  const m = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!m) throw new Error(`no canonical in snapshot for ${route}`);
  const got = new URL(m[1]).pathname;
  if (norm(got) !== norm(route)) {
    throw new Error(`canonical mismatch for ${route} — snapshot claims ${got}`);
  }
}

// Analytics beacons to abort during prerender. Every build loads all 11 routes
// plus the 404 in headless Chromium; without this they would land in the
// Plausible dashboard as real traffic and quietly inflate the numbers this whole
// step exists to make trustworthy. The snapshot keeps the <script> tag, so real
// visitors are still counted. Keep in sync with the analytics tags in index.html.
const ANALYTICS_HOSTS = ['plausible.io'];

async function blockAnalytics(page) {
  await page.setRequestInterception(true);
  page.on('request', (req) =>
    ANALYTICS_HOSTS.some((h) => req.url().includes(h)) ? req.abort() : req.continue(),
  );
}

async function snapshot(route) {
  const page = await browser.newPage();
  try {
    await blockAnalytics(page);
    await page.goto(ORIGIN + route, { waitUntil: 'load', timeout: 30000 });
    await waitUntilRendered(page, route);
    return await page.content();
  } finally {
    await page.close();
  }
}

// One retry per route before failing the build: a cold run occasionally misses
// the wait window on a lazy chunk, and a single strike would block real deploys
// for a transient. A genuinely broken route fails both attempts.
let ok = 0;
let retried = 0;
const failures = [];

for (const route of routes) {
  try {
    let html;
    try {
      html = await snapshot(route);
    } catch (first) {
      retried++;
      console.warn(`↻ retrying ${route} — ${first.message}`);
      html = await snapshot(route);
    }
    assertCanonical(html, route);
    const outDir = route === '/' ? DIST : path.join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), html);
    ok++;
  } catch (e) {
    failures.push(`${route} — ${e.message}`);
  }
}

// Snapshot the "*" route to dist/404.html. With the SPA catch-all removed,
// Netlify serves this automatically with a real HTTP 404 for unmatched URLs.
try {
  let html;
  try {
    html = await snapshot('/__prerender_not_found__');
  } catch (first) {
    retried++;
    console.warn(`↻ retrying 404.html — ${first.message}`);
    html = await snapshot('/__prerender_not_found__');
  }
  if (!/name="robots"[^>]*noindex/.test(html)) {
    throw new Error('404 snapshot is missing its noindex robots tag');
  }
  await writeFile(path.join(DIST, '404.html'), html);
  console.log('Wrote dist/404.html (NotFound snapshot, noindex).');
} catch (e) {
  failures.push(`404.html — ${e.message}`);
}

await browser.close();
server.close();

console.log(`Prerendered ${ok}/${routes.length} routes${retried ? ` (${retried} needed a retry)` : ''}.`);
if (failures.length) {
  // Prerender is REQUIRED — the SPA fallback that used to serve a working shell
  // for every URL is gone, so a partial prerender must not ship. Fail the build
  // and let the last good deploy stay live.
  console.error('❌ Prerender failed for:\n  ' + failures.join('\n  '));
  process.exit(1);
}
