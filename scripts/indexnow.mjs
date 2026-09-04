// Submits changed URLs to IndexNow (Bing, Yandex, Seznam, Naver).
//
//   npm run indexnow                 # URLs changed in the last two days
//   npm run indexnow -- --dry-run    # show the plan, submit nothing
//   npm run indexnow -- --all        # every URL in the sitemap
//   npm run indexnow -- --force      # resubmit even if unchanged since last run
//   npm run indexnow -- --since=2026-09-01
//
// Google does not participate in IndexNow. For Google the lever is the <lastmod>
// in the sitemap, which gen-sitemap.mjs derives from the git history of each
// page's real content — Google retired its ping endpoint in favour of reading it.
//
// Deliberately NOT part of `npm run build`. The build finishes before the deploy
// is serving, so submitting there announces URLs that are not up yet; if the
// deploy then fails you have invited a crawl of content that never shipped.
//
// Every run appends to docs/indexnow-log.jsonl. That file is the audit trail and
// also the idempotency state: a URL is skipped when it was already submitted at
// its current lastmod, unless --force.

import { readFile, readdir, appendFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const HOST = 'pawadata.com';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const LOG = path.join(REPO, 'docs', 'indexnow-log.jsonl');

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => (args.find((a) => a.startsWith(`--${n}=`)) || '').split('=')[1];
const [all, dryRun, force] = [flag('all'), flag('dry-run'), flag('force')];

const fail = (msg) => { console.error(`\n❌ ${msg}\n`); process.exit(1); };
const pad = (s, n) => String(s).padEnd(n);

// --- key -----------------------------------------------------------------
const pubFiles = await readdir(path.join(REPO, 'public'));
const keyFile = pubFiles.find((f) => /^[a-f0-9]{16,64}\.txt$/.test(f));
if (!keyFile) fail('No IndexNow key file in public/. Expected <hex>.txt containing the key.');
const key = (await readFile(path.join(REPO, 'public', keyFile), 'utf8')).trim();
if (key !== keyFile.replace(/\.txt$/, '')) {
  fail(`${keyFile} does not contain its own key. IndexNow verification would fail silently.`);
}

// --- selection -----------------------------------------------------------
const xml = await readFile(path.join(REPO, 'public', 'sitemap.xml'), 'utf8');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map((m) => ({
    loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
    lastmod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || null,
  }))
  .filter((e) => e.loc);
if (!entries.length) fail('sitemap.xml has no <url> entries — run `npm run gen:sitemap` first.');

// Two days, not "today": a deploy just after midnight UTC would otherwise submit
// nothing for content committed an hour earlier. Overlap is cheap; a miss is not.
const since = opt('since') || new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
const until = new Date().toISOString().slice(0, 10);
let selected = all ? entries : entries.filter((e) => e.lastmod && e.lastmod >= since);

// --- idempotency ---------------------------------------------------------
const alreadySent = new Map();
if (existsSync(LOG)) {
  for (const line of readFileSync(LOG, 'utf8').split('\n').filter(Boolean)) {
    try {
      const r = JSON.parse(line);
      if (r.ok) for (const [u, lm] of Object.entries(r.urls || {})) alreadySent.set(u, lm);
    } catch { /* a corrupt line must not stop a submission */ }
  }
}
const skipped = force ? [] : selected.filter((e) => alreadySent.get(e.loc) === e.lastmod);
if (!force) selected = selected.filter((e) => alreadySent.get(e.loc) !== e.lastmod);

// --- origin preflight ----------------------------------------------------
// Never invite a crawl of a URL that does not serve. Checks host, status and
// that nothing redirects — a redirect here means the sitemap and the origin
// disagree, which is a sitemap bug, not something to hand to a crawler.
async function checkOne(url) {
  try {
    const res = await fetch(url, { method: 'GET', redirect: 'manual' });
    const host = new URL(url).host;
    if (host !== HOST) return { url, ok: false, why: `wrong host ${host}` };
    if (res.status >= 300 && res.status < 400) {
      return { url, ok: false, why: `redirects to ${res.headers.get('location')}` };
    }
    if (res.status !== 200) return { url, ok: false, why: `HTTP ${res.status}` };
    return { url, ok: true };
  } catch (e) {
    return { url, ok: false, why: e.message.slice(0, 60) };
  }
}
async function preflight(urls, limit = 8) {
  const out = [];
  for (let i = 0; i < urls.length; i += limit) {
    out.push(...await Promise.all(urls.slice(i, i + limit).map(checkOne)));
  }
  return out;
}

// --- key reachability ----------------------------------------------------
const keyUrl = `${ORIGIN}/${keyFile}`;
let keyStatus = 'unchecked', keyHops = '-', keyMatches = '-';
try {
  const r = await fetch(keyUrl, { redirect: 'manual' });
  keyStatus = r.status;
  keyHops = r.status >= 300 && r.status < 400 ? 1 : 0;
  keyMatches = r.status === 200 ? ((await r.text()).trim() === key ? 'yes' : 'NO') : '-';
} catch (e) { keyStatus = e.message.slice(0, 40); }

// --- report --------------------------------------------------------------
const byDate = selected.reduce((a, e) => ({ ...a, [e.lastmod || '(none)']: (a[e.lastmod || '(none)'] || 0) + 1 }), {});
const git = (a) => { try { return execFileSync('git', a, { cwd: REPO, encoding: 'utf8' }).trim(); } catch { return 'unknown'; } };
const commit = git(['rev-parse', '--short', 'HEAD']);

console.log('');
console.log(`Window: ${all ? 'all URLs (--all)' : `${since} → ${until} UTC`}`);
console.log(`${selected.length} URL(s) selected${skipped.length ? `, ${skipped.length} skipped (unchanged since last submission)` : ''}`);
if (Object.keys(byDate).length) {
  console.log('');
  for (const [d, n] of Object.entries(byDate).sort()) console.log(`  ${pad(d, 12)}${n} URLs`);
}
console.log('');
console.log(`  ${pad('Key:', 26)}${keyMatches === 'yes' ? 'valid' : `INVALID (${keyMatches})`}`);
console.log(`  ${pad('Key URL:', 26)}${keyStatus}`);
console.log(`  ${pad('Redirects:', 26)}${keyHops}`);

if (!selected.length) {
  console.log(`  ${pad('Submission:', 26)}nothing to send`);
  console.log('');
  process.exit(0);
}

const checks = await preflight(selected.map((e) => e.loc));
const bad = checks.filter((c) => !c.ok);
console.log(`  ${pad('Origin validation:', 26)}${checks.length - bad.length}/${checks.length} OK`);
if (bad.length) {
  console.log('');
  bad.slice(0, 10).forEach((b) => console.log(`    ✗ ${b.url} — ${b.why}`));
  if (bad.length > 10) console.log(`    … and ${bad.length - 10} more`);
}

if (dryRun) {
  console.log(`  ${pad('IndexNow submission:', 26)}not sent (--dry-run)`);
  console.log('');
  process.exit(bad.length ? 1 : 0);
}
if (bad.length) fail(`${bad.length} URL(s) failed origin validation. Nothing submitted.`);
if (keyMatches !== 'yes') fail('Key file is not reachable or does not match. Nothing submitted.');

// --- submit --------------------------------------------------------------
const urlList = selected.map((e) => e.loc);
if (urlList.length > 10000) fail('IndexNow accepts at most 10,000 URLs per request.');

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: keyUrl, urlList }),
});
const ok = res.status === 200 || res.status === 202;
const timestamp = new Date().toISOString();

// Netlify's published deploy, when a local CLI token happens to be present.
let deploy = 'unknown';
try {
  const cfg = JSON.parse(readFileSync(path.join(process.env.HOME, 'Library/Preferences/netlify/config.json'), 'utf8'));
  const token = Object.values(cfg.users)[0].auth.token;
  const site = await (await fetch('https://api.netlify.com/api/v1/sites/b08d9d2e-b510-48ae-8479-2ffce600e54c',
    { headers: { Authorization: `Bearer ${token}` } })).json();
  deploy = site.published_deploy?.id || 'unknown';
} catch { /* optional — never block a submission on it */ }

await appendFile(LOG, JSON.stringify({
  timestamp, commit, deploy, ok, status: res.status,
  window: all ? 'all' : `${since}..${until}`,
  count: urlList.length,
  urlsSha256: createHash('sha256').update(urlList.join('\n')).digest('hex'),
  urls: Object.fromEntries(selected.map((e) => [e.loc, e.lastmod])),
}) + '\n');

console.log('');
console.log(`  ${pad('Deploy:', 26)}${deploy}`);
console.log(`  ${pad('Commit:', 26)}${commit}`);
console.log(`  ${pad('Submitted:', 26)}${urlList.length} URLs`);
console.log(`  ${pad('IndexNow response:', 26)}${res.status}`);
console.log(`  ${pad('Timestamp:', 26)}${timestamp}`);
console.log('');
if (!ok) fail(`IndexNow returned HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
