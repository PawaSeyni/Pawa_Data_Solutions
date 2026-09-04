// Submits changed URLs to IndexNow (Bing, Yandex, Seznam, Naver).
//
//   npm run indexnow            # URLs whose lastmod is today
//   npm run indexnow -- --all   # every URL in the sitemap
//   npm run indexnow -- --since=2026-09-01
//
// Google does not participate in IndexNow. For Google the lever is the <lastmod>
// field in the sitemap, which scripts/gen-sitemap.mjs derives from git history —
// Google retired its ping endpoint in favour of reading exactly that.
//
// Deliberately NOT part of `npm run build`. The build runs before the deploy is
// live, so submitting there tells search engines to crawl URLs that are not
// serving yet — and if the deploy then fails, you have invited a crawl of
// content that never shipped. Run it after a deploy is confirmed live.
//
// The key file is public on purpose: fetching https://pawadata.com/<key>.txt and
// finding the key inside is how IndexNow verifies you control the domain. It is
// not a secret and belongs in the repo.

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const HOST = 'pawadata.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const all = args.includes('--all');
const sinceArg = (args.find((a) => a.startsWith('--since=')) || '').split('=')[1];
const dryRun = args.includes('--dry-run');

// --- key -----------------------------------------------------------------
const pub = await readdir(path.join(REPO, 'public'));
const keyFile = pub.find((f) => /^[a-f0-9]{16,64}\.txt$/.test(f));
if (!keyFile) {
  console.error('❌ No IndexNow key file in public/. Expected <hex>.txt containing the key.');
  process.exit(1);
}
const key = (await readFile(path.join(REPO, 'public', keyFile), 'utf8')).trim();
if (key !== keyFile.replace(/\.txt$/, '')) {
  console.error(`❌ ${keyFile} does not contain its own key — IndexNow verification would fail.`);
  process.exit(1);
}

// --- which URLs ----------------------------------------------------------
const xml = await readFile(path.join(REPO, 'public', 'sitemap.xml'), 'utf8');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
  lastmod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1],
})).filter((e) => e.loc);

// Two days, not "today": a deploy just after midnight UTC would otherwise submit
// nothing for content committed an hour earlier. Cheap to overlap, costly to miss.
const twoDaysAgo = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
const since = sinceArg || twoDaysAgo;
const urlList = all ? entries.map((e) => e.loc)
  : entries.filter((e) => e.lastmod && e.lastmod >= since).map((e) => e.loc);

if (urlList.length === 0) {
  console.log(`IndexNow: nothing changed on or after ${since} — nothing to submit.`);
  process.exit(0);
}
if (urlList.length > 10000) {
  console.error('❌ IndexNow accepts at most 10,000 URLs per request.');
  process.exit(1);
}

console.log(`IndexNow: ${urlList.length} URL(s)${all ? ' (all)' : ` changed on or after ${since}`}`);
if (dryRun) {
  urlList.slice(0, 10).forEach((u) => console.log('   ' + u));
  if (urlList.length > 10) console.log(`   … and ${urlList.length - 10} more`);
  console.log('Dry run — nothing submitted.');
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});

// 200 accepted, 202 accepted but key still being validated. Both are fine.
if (res.status === 200 || res.status === 202) {
  console.log(`✅ Submitted ${urlList.length} URL(s) — HTTP ${res.status}`);
} else {
  console.error(`❌ IndexNow returned HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  process.exit(1);
}
