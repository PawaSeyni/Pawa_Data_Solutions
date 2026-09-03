// Proof taxonomy. Sprint 7 §6.
//
// Every proof object on a solution page must be classified before it renders,
// and the classification chooses the disclosure label — the page cannot show a
// proof card without saying what kind of proof it is.
//
// This exists because the six solution pages shipped fabricated client results:
// "Manufacturing Success Story … Up to 70% less data preparation time", and five
// more like it, in four locales. They carried an "Illustrative example" label,
// which was not enough: a representative example may explain scope and
// deliverables, but it may not imply an achieved customer result, and a green
// upward arrow next to a percentage implies exactly that.
//
// The rule §6 states, and this module enforces by construction: a
// `representative` proof has no outcome field to put a number in.

export const PROOF_TYPES = {
  /** Work performed under PaWa Data Solutions. Needs client-approved wording. */
  PAWADATA: 'pawadata',
  /** Work performed by a principal in a previous role. Must say so. */
  PRIOR_EXPERIENCE: 'priorExperience',
  /** A realistic pattern used to explain an approach. Never a result. */
  REPRESENTATIVE: 'representative',
};

/** Translation key for the disclosure each type must render. */
export const DISCLOSURE_KEY = {
  [PROOF_TYPES.PAWADATA]: 'proofDisclosurePawadata',
  [PROOF_TYPES.PRIOR_EXPERIENCE]: 'proofDisclosurePrior',
  [PROOF_TYPES.REPRESENTATIVE]: 'proofDisclosureRepresentative',
};

/** Only these two may carry an outcome. A representative pattern may not. */
export const MAY_CLAIM_OUTCOME = new Set([
  PROOF_TYPES.PAWADATA,
  PROOF_TYPES.PRIOR_EXPERIENCE,
]);

export const canClaimOutcome = (proofType) => MAY_CLAIM_OUTCOME.has(proofType);

/** Unknown or missing type is a failure, not a default — never render unlabelled. */
export const disclosureKeyFor = (proofType) => DISCLOSURE_KEY[proofType] || null;
