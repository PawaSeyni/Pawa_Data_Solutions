// Refreshes the ARTICLES array in src/lib/writing.js from papanguer.com/writing/.
//
// Run it, review the diff, commit. Deliberately NOT part of `npm run build`:
// the build already fails hard on prerender errors, and making deploys depend
// on an external site being reachable would mean papanguer.com going down takes
// pawadata.com's deploys with it. This is a manual, reviewable step.
//
//   npm run sync:writing
//
// It rewrites only the block between the GENERATED markers, so hand-maintained
// content in the same file (PUBLICATIONS) is never touched.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET = path.resolve(__dirname, '..', 'src', 'lib', 'writing.js');
const SOURCE = 'https://papanguer.com/writing/';
const BEGIN = '// --- BEGIN GENERATED: npm run sync:writing ---';
const END = '// --- END GENERATED ---';

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const MONTHS = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
};

function toIso(human) {
  const m = /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/.exec(human);
  if (!m) return null;
  const month = MONTHS[m[2].toLowerCase()];
  if (!month) return null;
  return `${m[3]}-${month}-${String(m[1]).padStart(2, '0')}`;
}

const strip = (html) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

let html;
try {
  const res = await fetch(SOURCE, { headers: { 'User-Agent': 'pawadata-sync' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  html = await res.text();
} catch (e) {
  console.error(`❌ Could not fetch ${SOURCE}: ${e.message}`);
  console.error('   Leaving src/lib/writing.js untouched — stale is better than empty.');
  process.exit(1);
}

// The index renders <ul class="post-list"> with one <li> per article:
//   <div class="post-meta">1 September 2026 · <span class="rt">9 min read</span></div>
//   <h2><a href="/writing/slug/">Title</a></h2>
//   <p>Excerpt</p>
// Parsing the <li> blocks rather than the anchors matters — the anchor sits
// inside the heading, so matching on <a> alone picks up nav links and misses
// every card.
const articles = [];
const listM = /<ul[^>]*class="[^"]*post-list[^"]*"[^>]*>([\s\S]*?)<\/ul>/i.exec(html);
if (listM) {
  for (const item of listM[1].split(/<li[^>]*>/i).slice(1)) {
    const hrefM = /<h[23][^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i.exec(item);
    if (!hrefM) continue;
    const metaM = /<div[^>]*class="[^"]*post-meta[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(item);
    const excerptM = /<p[^>]*>([\s\S]*?)<\/p>/i.exec(item);

    const metaText = metaM ? strip(metaM[1]) : '';
    const iso = toIso(metaText);
    const readM = /(\d+)\s*min/i.exec(metaText);
    if (!iso) continue;

    articles.push({
      title: strip(hrefM[2]),
      date: iso,
      readingTime: readM ? `${readM[1]} min` : '',
      excerpt: excerptM ? strip(excerptM[1]) : '',
      href: new URL(hrefM[1], 'https://papanguer.com').href,
    });
  }
}

if (articles.length === 0) {
  console.error('❌ Parsed 0 articles — papanguer.com/writing markup has probably changed.');
  console.error('   Leaving src/lib/writing.js untouched rather than emptying the page.');
  process.exit(1);
}

articles.sort((a, b) => (a.date < b.date ? 1 : -1));

const block = [
  BEGIN,
  'export const ARTICLES = [',
  ...articles.map((a) =>
    [
      '  {',
      `    title: '${esc(a.title)}',`,
      `    date: '${a.date}',`,
      `    readingTime: '${esc(a.readingTime)}',`,
      `    excerpt: '${esc(a.excerpt)}',`,
      `    href: '${a.href}',`,
      '  },',
    ].join('\n'),
  ),
  '];',
  END,
].join('\n');

const current = await readFile(TARGET, 'utf8');
const start = current.indexOf(BEGIN);
const finish = current.indexOf(END);
if (start === -1 || finish === -1) {
  console.error('❌ Could not find the GENERATED markers in src/lib/writing.js.');
  process.exit(1);
}

const next = current.slice(0, start) + block + current.slice(finish + END.length);
if (next === current) {
  console.log(`No change — ${articles.length} articles, already current.`);
} else {
  await writeFile(TARGET, next);
  console.log(`Updated src/lib/writing.js — ${articles.length} articles, newest ${articles[0].date}.`);
  console.log('Review the diff before committing.');
}
