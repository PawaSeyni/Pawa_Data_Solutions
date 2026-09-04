// Generates public/sitemap.xml from one list of pages × the supported locales.
//
// The sitemap was hand-maintained and drifted twice already: once on casing
// (CamelCase entries while every internal link was lowercase) and once on the
// trailing slash. It is also what scripts/prerender.mjs reads to decide which
// routes to snapshot, so an entry missing here is a route that silently ships
// as a 404. Generating it removes both failure modes.
//
// Each <url> carries the full reciprocal xhtml:link set. Google accepts hreflang
// in the sitemap or in the page head; we emit both, and they must agree.

import { writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// Same table the app uses — importing it is what stops the sitemap drifting
// from the router, which has already happened twice.
import { PAGES } from '../src/lib/pages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://pawadata.com';

const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = ['en', 'fr', 'es', 'pt'];

const prefixFor = (lang) => (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`);

// --- lastmod -----------------------------------------------------------
//
// Google ignores <changefreq> and <priority> entirely. <lastmod> is the one
// field it does read — and only while it stays accurate. Stamping every URL with
// the build time is the classic mistake: it asserts that all 96 pages changed on
// every deploy, Google notices that is false, and it stops trusting the field for
// the whole site. So each page's date comes from the git history of the files
// that actually produce it.
//
// This shipped with no lastmod at all, which is why an external crawl kept
// showing pre-Sprint-7 content: the sitemap gave Google no reason to recrawl
// anything, even though every solution page had been rewritten.

const REPO = path.resolve(__dirname, '..');
const TRANSLATIONS = 'src/components/translations.jsx';

/** Files whose git history genuinely determines a given page's content. */
function sourcesFor(page) {
  const n = page.name;
  if (n.startsWith('CaseStudy') ) return ['src/content/caseStudyCopy.js', 'src/lib/caseStudies.js'];
  if (n.startsWith('Book:'))      return ['src/content/bookCopy.js', 'src/lib/writing.js'];
  const deep = {
    DataIntegration: 'dataIntegration', PipelineArchitecture: 'pipelineArchitecture',
    DataGovernance: 'dataGovernanceMdm', AnalyticsEnablement: 'analyticsEnablement',
    ProcessAutomation: 'processAutomation', AIReadiness: 'aiReadiness',
  }[n];
  if (deep) return [`src/content/${deep}.js`, 'src/pages/DeepSolution.jsx'];
  if (n === 'Insights') return ['src/lib/writing.js', 'src/pages/Insights.jsx'];
  // Everything else takes its copy from translations.jsx plus its own component.
  const comp = `src/pages/${n === 'Home' ? 'Home' : n}.jsx`;
  return [comp, TRANSLATIONS].filter((f) => existsSync(path.join(REPO, f)));
}

let gitWorks = true;
function lastCommitISO(file) {
  if (!gitWorks) return null;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file],
      { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return out || null;
  } catch {
    // Shallow clone or no git in the build image — fall back rather than lie.
    gitWorks = false;
    return null;
  }
}

function lastmodFor(page) {
  const dates = sourcesFor(page)
    .map((f) => lastCommitISO(f) || (existsSync(path.join(REPO, f))
      ? statSync(path.join(REPO, f)).mtime.toISOString() : null))
    .filter(Boolean)
    .sort();
  // Omitting is better than guessing: a wrong lastmod poisons the field sitewide.
  return dates.length ? dates[dates.length - 1].slice(0, 10) : null;
}

function localizedPath(page, language) {
  const prefix = prefixFor(language);
  return page.slug === '' ? `${prefix}/` : `${prefix}/${page.slug}/`;
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
];

for (const page of PAGES) {
  const lastmod = lastmodFor(page);
  for (const language of LANGUAGES) {
    lines.push('  <url>');
    lines.push(`    <loc>${SITE_URL}${localizedPath(page, language)}</loc>`);
    for (const alt of LANGUAGES) {
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL}${localizedPath(page, alt)}"/>`,
      );
    }
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localizedPath(page, DEFAULT_LANGUAGE)}"/>`,
    );
    // lastmod first, per the schema's element order.
    if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push(`    <changefreq>${page.changefreq}</changefreq>`);
    lines.push(`    <priority>${page.priority}</priority>`);
    lines.push('  </url>');
  }
}
lines.push('</urlset>');

const out = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
await writeFile(out, lines.join('\n') + '\n');
console.log(`Wrote ${out} — ${PAGES.length} pages × ${LANGUAGES.length} locales = ${PAGES.length * LANGUAGES.length} URLs.`);
