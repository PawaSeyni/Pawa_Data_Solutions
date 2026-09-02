// Fails the build if any createPageUrl('X') names a page that does not exist.
//
// createPageUrl falls back to "/" for an unknown name — it does not throw, does
// not warn, and produces a perfectly valid link to the homepage. So renaming a
// page silently redirects every link to it, and nothing in the build, the
// prerender or a link checker notices: the link returns 200.
//
// That is exactly what happened when Blog became Insights in Sprint 3. The
// footer's Blog link pointed at the homepage on all 92 pages for three sprints.

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SLUG_BY_NAME } from '../src/lib/pages.js';

// Hand-rolled walk rather than fs.globSync: globSync arrived in Node 22 and
// Netlify builds this site on Node 20 (netlify.toml pins it). The first version
// of this file used globSync, passed locally on Node 22, and failed the CI build
// with exit code 2 — a build gate that broke the build.
const SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(jsx?|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const bad = [];
for (const file of walk(SRC)) {
  // Strip comments first. A comment explaining a past mistake will contain the
  // very call it warns about — this checker flagged its own explanatory note in
  // Footer.jsx on the first run.
  const src = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
  for (const m of src.matchAll(/createPageUrl\(\s*['"]([^'"]+)['"]/g)) {
    if (!(m[1] in SLUG_BY_NAME)) {
      bad.push(`${path.relative(process.cwd(), file)}: createPageUrl('${m[1]}') — no such page`);
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
