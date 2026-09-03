// Validates every deep solution page before the build. Sprint 7 §13.
//
// The Definition of Done lists things that are easy to half-do and impossible to
// see by eye across four locales: every proof item classified, governance shown
// as a cross-cutting concern on every architecture, a text equivalent for every
// diagram, a contextual entry offer rather than a generic Contact Us, and no
// locale silently falling back to English.

import { validateSolution } from '../src/lib/solutionSchema.js';
import { localeCoverage, solutionFor, DEEP_SLUGS } from '../src/lib/deepSolutions.js';
import { PROOF_TYPES } from '../src/lib/proof.js';

const LANGS = ['en', 'fr', 'es', 'pt'];
const problems = [];
const notes = [];

for (const slug of DEEP_SLUGS) {
  for (const lang of LANGS) {
    const c = solutionFor(slug, lang);
    const where = `${slug} [${lang}]`;
    for (const p of validateSolution(c)) problems.push(`${where}: ${p}`);

    // §6: every proof object classified, and a representative one may not claim
    // an outcome. The renderer already refuses; this catches it at author time.
    (c.proof || []).forEach((pr, i) => {
      if (!Object.values(PROOF_TYPES).includes(pr.proofType)) {
        problems.push(`${where}: proof ${i + 1} has unknown proofType "${pr.proofType}"`);
      }
      if (pr.proofType === PROOF_TYPES.REPRESENTATIVE && /\d+\s*%/.test(pr.outcome || '')) {
        problems.push(`${where}: proof ${i + 1} is representative but its outcome contains a percentage`);
      }
    });

    // §11: the words the brief rules out.
    const banned = ['cutting-edge', 'unlock potential', 'transform your data journey'];
    const blob = JSON.stringify(c).toLowerCase();
    for (const b of banned) if (blob.includes(b)) problems.push(`${where}: uses banned phrase "${b}"`);
  }
}

for (const { slug, missing } of localeCoverage()) {
  if (missing.length) notes.push(`${slug}: ${missing.join(', ')} fall back to English`);
}

if (notes.length) {
  console.log('⚠️  Locale gaps:');
  notes.forEach((n) => console.log('   • ' + n));
}

if (problems.length) {
  console.error(`\n❌ Deep solution check failed (${problems.length}):`);
  problems.forEach((p) => console.error('   • ' + p));
  console.error('');
  process.exit(1);
}

console.log(`Deep solutions: ${DEEP_SLUGS.length} page(s) × ${LANGS.length} locales ok.`);
