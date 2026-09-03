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

// Cross-locale leakage. Building one locale by copying another and overriding
// "the different bits" leaves whole fields in the wrong language — which is
// worse than an English fallback, because it looks translated. I did exactly
// this while writing the Analytics page: ten Portuguese fields were still
// Spanish. English is the intended fallback, so only non-English pairs are
// compared.
// Only locales that actually HAVE their own copy are compared. Where several
// locales are all falling back to English they are the same object by design,
// and comparing them reports a leak that is really just the fallback.
const coverage = Object.fromEntries(localeCoverage().map((c) => [c.slug, c.translated]));
for (const slug of DEEP_SLUGS) {
  const NON_EN = ['fr', 'es', 'pt'].filter((l) => (coverage[slug] || []).includes(l));
  for (let i = 0; i < NON_EN.length; i++) {
    for (let j = i + 1; j < NON_EN.length; j++) {
      const a = solutionFor(slug, NON_EN[i]);
      const b = solutionFor(slug, NON_EN[j]);
      // Short strings can legitimately coincide between close languages —
      // "Fragmentado → Conectado" is correct in both Spanish and Portuguese, and
      // flagging it trains you to ignore this check. Only substantial matches
      // count as evidence that one locale was copied from another.
      const shared = Object.keys(a).filter((k) => {
        if (['slug', 'pageName', 'category', 'technologies', 'transformation'].includes(k)) return false;
        const av = JSON.stringify(a[k]);
        return av === JSON.stringify(b[k]) && av.length > 60;
      });
      if (shared.length) {
        problems.push(`${slug}: ${NON_EN[i]} and ${NON_EN[j]} share identical ${shared.join(', ')} — one locale was copied from the other`);
      }
    }
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
