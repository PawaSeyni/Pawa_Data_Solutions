// Fails the build if any createPageUrl('X') names a page that does not exist.
//
// createPageUrl falls back to "/" for an unknown name — it does not throw, does
// not warn, and produces a perfectly valid link to the homepage. So renaming a
// page silently redirects every link to it, and nothing in the build, the
// prerender or a link checker notices: the link returns 200.
//
// That is exactly what happened when Blog became Insights in Sprint 3. The
// footer's Blog link pointed at the homepage on all 92 pages for three sprints.

import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { SLUG_BY_NAME } from '../src/lib/pages.js';

const bad = [];
for (const file of globSync('src/**/*.{jsx,js}')) {
  // Strip comments first. A comment explaining a past mistake will contain the
  // very call it warns about — this checker flagged its own explanatory note in
  // Footer.jsx on the first run.
  const src = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
  for (const m of src.matchAll(/createPageUrl\(\s*['"]([^'"]+)['"]/g)) {
    if (!(m[1] in SLUG_BY_NAME)) {
      bad.push(`${file}: createPageUrl('${m[1]}') — no such page`);
    }
  }
}

if (bad.length) {
  console.error(`\n❌ ${bad.length} link(s) to a page that does not exist:`);
  bad.forEach((b) => console.error('   • ' + b));
  console.error('\n   These would silently render as links to "/".\n');
  process.exit(1);
}
console.log(`Page names: all createPageUrl targets resolve.`);
