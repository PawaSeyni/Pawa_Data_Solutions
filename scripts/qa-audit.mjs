// Launch QA. Crawls every URL in the sitemap and checks what a launch actually
// depends on: metadata, canonical/hreflang consistency, heading structure, alt
// text, form labels, link integrity and redirects.
//
// Written as a script rather than a checklist because a checklist is run once and
// a script is run before every launch. Takes a base URL so it works against the
// local dist/ and against production.
//
//   node scripts/qa-audit.mjs https://pawadata.com
//   node scripts/qa-audit.mjs http://localhost:8899

const BASE = (process.argv[2] || 'https://pawadata.com').replace(/\/$/, '');
const LOCAL = BASE.includes('localhost');

const fails = [];
const warns = [];
const fail = (url, msg) => fails.push(`${url} — ${msg}`);
const warn = (url, msg) => warns.push(`${url} — ${msg}`);

const get = async (path, opts = {}) => {
  const res = await fetch(`${BASE}${path}`, { redirect: 'manual', ...opts });
  return res;
};

const text = async (path) => {
  const res = await fetch(`${BASE}${path}`);
  return { status: res.status, html: await res.text() };
};

// --- routes from the sitemap, which is itself generated from pages.js ---------
const smRes = await fetch(`${BASE}/sitemap.xml`);
if (!smRes.ok) {
  console.error(`Cannot read ${BASE}/sitemap.xml (${smRes.status})`);
  process.exit(1);
}
const sitemap = await smRes.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const paths = urls.map((u) => new URL(u).pathname);
console.log(`Auditing ${paths.length} URLs at ${BASE}\n`);

const seenTitles = new Map();
const seenDescs = new Map();

for (const p of paths) {
  const { status, html } = await text(p);
  if (status !== 200) { fail(p, `HTTP ${status}`); continue; }

  // --- metadata ---
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];

  if (!title) fail(p, 'no <title>');
  else {
    if (title.length > 65) warn(p, `title ${title.length} chars: "${title}"`);
    // Book pages SHOULD share a title across locales: the book is a published
    // English product and translating its name would imply an edition that does
    // not exist. Flagging that every run is noise, and noise is how a real
    // duplicate stops being noticed.
    const intentionalDuplicate = /\/insights\/books\//.test(p);
    if (!intentionalDuplicate) {
      if (seenTitles.has(title)) warn(p, `duplicate title with ${seenTitles.get(title)}`);
      else seenTitles.set(title, p);
    }
  }
  if (!desc) fail(p, 'no meta description');
  else {
    if (desc.length > 165) warn(p, `description ${desc.length} chars`);
    if (desc.length < 50) warn(p, `description only ${desc.length} chars`);
    if (seenDescs.has(desc)) warn(p, `duplicate description with ${seenDescs.get(desc)}`);
    else seenDescs.set(desc, p);
  }

  // --- canonical must be self-referential and absolute ---
  if (!canon) fail(p, 'no canonical');
  else if (!LOCAL && new URL(canon).pathname !== p) fail(p, `canonical points to ${new URL(canon).pathname}`);

  // --- exactly one h1 ---
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1s.length === 0) fail(p, 'no <h1>');
  if (h1s.length > 1) fail(p, `${h1s.length} <h1> elements`);

  // --- heading order: no level skipped ---
  const levels = [...html.matchAll(/<h([1-6])[^>]*>/g)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      warn(p, `heading jumps h${levels[i - 1]} -> h${levels[i]}`);
      break;
    }
  }

  // --- hreflang: reciprocal set + x-default ---
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  const langs = alts.map((a) => a[1]);
  if (alts.length) {
    for (const need of ['en', 'fr', 'es', 'pt', 'x-default']) {
      if (!langs.includes(need)) fail(p, `hreflang missing ${need}`);
    }
  }

  // --- html lang matches the locale prefix ---
  const htmlLang = (html.match(/<html lang="([^"]+)"/) || [])[1];
  const expected = /^\/(fr|es|pt)\//.test(p) ? p.split('/')[1] : 'en';
  if (htmlLang !== expected) fail(p, `<html lang="${htmlLang}"> but path implies ${expected}`);

  // --- images need alt ---
  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt=/.test(img[0])) fail(p, `<img> without alt: ${img[0].slice(0, 80)}`);
  }

  // --- noindex should appear only on the 404 ---
  if (/name="robots"[^>]*noindex/.test(html)) fail(p, 'noindex on an indexable page');

  // --- form controls need an accessible name ---
  // The hidden <form hidden> blocks in index.html exist only so Netlify can
  // register field names at deploy time. They are display:none and never
  // reachable, so they are not an accessibility surface.
  const visible = html.replace(/<form\b[^>]*\bhidden\b[^>]*>[\s\S]*?<\/form>/g, '');
  for (const inp of visible.matchAll(/<(input|textarea|select)\b[^>]*>/g)) {
    const tag = inp[0];
    if (/type="(hidden|submit|button)"/.test(tag)) continue;
    // Radix renders a duplicate native <select aria-hidden tabindex="-1"> behind
    // each custom one. It is removed from the accessibility tree by design.
    if (/aria-hidden="true"/.test(tag)) continue;
    // A honeypot wrapped in its own <label> is labelled, just not via for=.
    if (/name="bot-field"/.test(tag)) continue;
    const id = (tag.match(/\sid="([^"]+)"/) || [])[1];
    const labelled = id && new RegExp(`<label[^>]*for="${id}"`).test(visible);
    if (!labelled && !/aria-label|aria-labelledby/.test(tag)) {
      warn(p, `control with no label: ${tag.slice(0, 70)}`);
    }
  }
}

// --- redirects -----------------------------------------------------------
if (!LOCAL) {
  console.log('Checking redirects…');
  // Netlify consumes _redirects at deploy and does not serve it, so read the
  // built copy and test each rule against production.
  const { readFile } = await import('node:fs/promises');
  let redirText = null;
  try { redirText = await readFile(new URL('../dist/_redirects', import.meta.url), 'utf8'); } catch { /* not built */ }
  if (redirText) {
    const rules = (redirText)
      .split('\n')
      .filter((l) => l.trim() && !l.startsWith('#'))
      .map((l) => l.trim().split(/\s+/));
    for (const [from, to, code] of rules) {
      const res = await get(from);
      if (String(res.status) !== String(code)) {
        fail(from, `expected ${code}, got ${res.status}`);
        continue;
      }
      const loc = res.headers.get('location');
      if (loc && new URL(loc, BASE).pathname !== to) {
        fail(from, `redirects to ${new URL(loc, BASE).pathname}, expected ${to}`);
      }
      // a redirect target must not itself redirect
      const hop2 = await get(to);
      if (hop2.status >= 300 && hop2.status < 400) fail(from, `chained redirect: ${to} -> ${hop2.headers.get('location')}`);
    }
    console.log(`  ${rules.length} rules checked`);
  } else {
    warn('/_redirects', 'dist/_redirects not found — run npm run build first');
  }

  // --- 404 behaviour ---
  const nf = await fetch(`${BASE}/definitely-not-a-real-page-xyz/`);
  const nfHtml = await nf.text();
  if (nf.status !== 404) fail('/404 test', `unknown URL returned ${nf.status}, expected 404`);
  if (!/noindex/.test(nfHtml)) fail('/404 test', '404 page is not noindex');

  // --- robots.txt ---
  const rb = await fetch(`${BASE}/robots.txt`);
  if (!rb.ok) fail('/robots.txt', `HTTP ${rb.status}`);
  else {
    const t = await rb.text();
    if (!/Sitemap:/i.test(t)) fail('/robots.txt', 'no Sitemap directive');
    if (/^Disallow: \/$/m.test(t)) fail('/robots.txt', 'disallows the whole site');
  }
}

// --- link integrity ------------------------------------------------------
console.log('Checking links…');
const { html: home } = await text('/');
const internal = new Set();
const external = new Set();
for (const page of ['/', '/about/', '/insights/', '/data-health-check/', '/solutions/', '/case-studies/', '/locations/', '/careers/']) {
  const { html } = await text(page);
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const h = m[1];
    if (h.startsWith('/')) internal.add(h.split('#')[0] || '/');
    else if (h.startsWith('http')) external.add(h);
    else if (h.startsWith('mailto:') || h.startsWith('tel:')) external.add(h);
  }
}
for (const href of internal) {
  if (!href) continue;
  const res = await get(href);
  if (res.status >= 400) fail(href, `internal link ${res.status}`);
}
console.log(`  ${internal.size} internal links checked`);

const checkedExternal = [];
for (const href of external) {
  if (href.startsWith('mailto:') || href.startsWith('tel:')) { checkedExternal.push(`${href} (format only)`); continue; }
  try {
    const res = await fetch(href, { method: 'GET', redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 pawadata-qa' } });
    // LinkedIn answers 999 to anything that is not a browser. It is not a
    // broken link and flagging it every run trains you to ignore the report.
    if (res.status >= 400 && !(res.status === 999 || href.includes('linkedin.com'))) {
      warn(href, `external link ${res.status}`);
    }
    checkedExternal.push(`${href} ${res.status}`);
  } catch (e) {
    warn(href, `external link unreachable: ${e.message}`);
  }
}
console.log(`  ${external.size} external links checked`);

// --- report --------------------------------------------------------------
console.log('\n' + '='.repeat(70));
if (fails.length) {
  console.log(`\n❌ ${fails.length} FAILURES\n`);
  fails.forEach((f) => console.log('  • ' + f));
} else {
  console.log('\n✅ No failures.');
}
if (warns.length) {
  console.log(`\n⚠️  ${warns.length} warnings\n`);
  warns.forEach((w) => console.log('  • ' + w));
}
console.log('\nExternal links:');
checkedExternal.forEach((e) => console.log('  ' + e));
process.exit(fails.length ? 1 : 0);
