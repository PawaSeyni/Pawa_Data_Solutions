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
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://pawadata.com';

const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = ['en', 'fr', 'es', 'pt'];

// [page name, changefreq, priority] — page name maps to the lowercase slug.
const PAGES = [
  ['Home', 'monthly', '1.0'],
  ['DataIntegration', 'monthly', '0.8'],
  ['PipelineArchitecture', 'monthly', '0.8'],
  ['DataGovernance', 'monthly', '0.8'],
  ['AIReadiness', 'monthly', '0.8'],
  ['AnalyticsEnablement', 'monthly', '0.8'],
  ['ProcessAutomation', 'monthly', '0.8'],
  ['Workshop', 'monthly', '0.7'],
  ['Careers', 'monthly', '0.7'],
  ['PrivacyPolicy', 'yearly', '0.3'],
  ['DoNotSellOrShare', 'yearly', '0.3'],
];

const prefixFor = (lang) => (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`);

function localizedPath(pageName, language) {
  const prefix = prefixFor(language);
  if (pageName === 'Home') return `${prefix}/`;
  return `${prefix}/${pageName.toLowerCase()}/`;
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
];

for (const [page, changefreq, priority] of PAGES) {
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
    lines.push(`    <changefreq>${changefreq}</changefreq>`);
    lines.push(`    <priority>${priority}</priority>`);
    lines.push('  </url>');
  }
}
lines.push('</urlset>');

const out = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
await writeFile(out, lines.join('\n') + '\n');
console.log(`Wrote ${out} — ${PAGES.length} pages × ${LANGUAGES.length} locales = ${PAGES.length * LANGUAGES.length} URLs.`);
