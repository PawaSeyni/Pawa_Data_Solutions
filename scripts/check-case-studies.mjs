// Fails the build if a case study is missing its approval provenance.
//
// This site published invented client quotes once. The defence against a repeat
// is not care — care is what failed — it is a check that cannot be skipped. Any
// case study without a named approver and a date, or a metric without someone
// who confirmed it, stops the deploy.
//
// Runs before vite build, so a bad entry never reaches dist/, let alone Netlify.

import { CASE_STUDIES } from '../src/lib/caseStudies.js';

const problems = [];
const seen = new Set();

const REQUIRED = ['slug', 'disclosure', 'client', 'sector', 'approvedBy', 'approvedOn', 'challenge', 'approach'];
const ISO = /^\d{4}-\d{2}-\d{2}$/;

CASE_STUDIES.forEach((c, i) => {
  const where = c.slug ? `"${c.slug}"` : `entry ${i + 1}`;

  for (const field of REQUIRED) {
    if (!c[field] || String(c[field]).trim() === '') {
      problems.push(`${where}: missing required field "${field}"`);
    }
  }

  if (c.approvedOn && !ISO.test(c.approvedOn)) {
    problems.push(`${where}: approvedOn must be YYYY-MM-DD, got "${c.approvedOn}"`);
  }
  if (c.approvedOn && ISO.test(c.approvedOn) && new Date(c.approvedOn) > new Date()) {
    problems.push(`${where}: approvedOn is in the future`);
  }

  if (c.slug) {
    if (seen.has(c.slug)) problems.push(`duplicate slug "${c.slug}"`);
    seen.add(c.slug);
    if (!/^[a-z0-9-]+$/.test(c.slug)) {
      problems.push(`${where}: slug must be lowercase, digits and hyphens only`);
    }
  }

  if (c.disclosure && !['named', 'anonymous'].includes(c.disclosure)) {
    problems.push(`${where}: disclosure must be "named" or "anonymous"`);
  }

  // Every figure needs a person who confirmed it. A metric nobody stands behind
  // is the exact failure this file exists to prevent.
  (c.metrics || []).forEach((m, mi) => {
    const at = `${where} metric ${mi + 1}`;
    for (const field of ['label', 'value', 'basis', 'confirmedBy']) {
      if (!m[field] || String(m[field]).trim() === '') {
        problems.push(`${at}: missing "${field}" — every published figure needs a named person who confirmed it`);
      }
    }
  });

  // A quote attributed to nobody is how the June testimonials happened.
  if (c.quote && !c.quoteAttribution) {
    problems.push(`${where}: has a quote with no attribution`);
  }

  // An "anonymous" case study naming a company defeats the anonymisation.
  if (c.disclosure === 'anonymous' && c.quoteAttribution && /,/.test(c.quoteAttribution)) {
    problems.push(`${where}: anonymous disclosure but the quote attribution names a role and company — widen it`);
  }
});

if (problems.length) {
  console.error(`\n❌ Case study check failed (${problems.length}):`);
  problems.forEach((p) => console.error(`   • ${p}`));
  console.error('\n   Nothing publishes without approval provenance. See src/lib/caseStudies.js.\n');
  process.exit(1);
}

console.log(
  CASE_STUDIES.length === 0
    ? 'Case studies: none yet — index and routes stay unpublished.'
    : `Case studies: ${CASE_STUDIES.length} checked, all carry approval provenance.`,
);
