// Sanity check on case studies. Runs before vite build.
//
// Scope is deliberately narrow: the two guardrails the Sprint 1 brief actually
// names (§7) — don't publish invented numbers, and don't break an anonymisation
// promise. Everything else is an editorial judgment call, not a build failure.
//
// This used to demand a named approver, an approval date, and a named confirmer
// on every single figure. That is not how the industry works and it stopped real
// work from shipping, so it is gone. Approval tracking lives in the proof
// inventory (docs/proof-inventory.md), which is where a human can actually keep
// it current.

import { CASE_STUDIES } from '../src/lib/caseStudies.js';

const problems = [];
const seen = new Set();

CASE_STUDIES.forEach((c, i) => {
  const where = c.slug ? `"${c.slug}"` : `entry ${i + 1}`;

  for (const field of ['slug', 'sector', 'challenge', 'approach', 'outcome']) {
    if (!c[field] || String(c[field]).trim() === '') {
      problems.push(`${where}: missing "${field}"`);
    }
  }

  if (c.slug) {
    if (seen.has(c.slug)) problems.push(`duplicate slug "${c.slug}"`);
    seen.add(c.slug);
    if (!/^[a-z0-9-]+$/.test(c.slug)) {
      problems.push(`${where}: slug must be lowercase, digits and hyphens`);
    }
  }

  // Guardrail 1 — a figure has to say where it came from. Not who signed it off;
  // just what it measures, so a number can never appear bare on the page.
  (c.metrics || []).forEach((m, mi) => {
    if (!m.label || !m.value || !m.basis) {
      problems.push(`${where} metric ${mi + 1}: needs label, value and basis (what it measures)`);
    }
  });

  // Guardrail 2 — an anonymous study must not name the client anywhere.
  if (c.disclosure === 'anonymous') {
    const named = [c.client, c.quoteAttribution].filter(Boolean).join(' ');
    if (/\b(Inc|Ltd|LLC|Corp|Bank of|JPMorgan|Scotiabank|CIBC|Manulife|Sun Life)\b/i.test(named)) {
      problems.push(`${where}: marked anonymous but names an organisation — widen the wording`);
    }
  }

  if (c.quote && !c.quoteAttribution) {
    problems.push(`${where}: quote with no attribution`);
  }
});

if (problems.length) {
  console.error(`\n❌ Case study check failed (${problems.length}):`);
  problems.forEach((p) => console.error(`   • ${p}`));
  console.error('');
  process.exit(1);
}

console.log(
  CASE_STUDIES.length === 0
    ? 'Case studies: none yet.'
    : `Case studies: ${CASE_STUDIES.length} ok.`,
);
