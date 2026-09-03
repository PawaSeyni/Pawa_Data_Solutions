// Content model for a deep solution page. Sprint 7 §8.
//
// The point of Sprint 7 is that six pages come from one system rather than six
// bespoke layouts. So a page is DATA — this shape — and DeepSolution.jsx is the
// only renderer. Authoring a new solution page means writing a content object;
// it never means writing JSX.
//
// Copy lives per-locale inside the content object rather than in
// translations.jsx: that file is already 2,400 lines and a deep page adds ~60
// strings, so six of them would double it and bury the shared UI copy.

/**
 * @typedef {Object} DeepSolutionContent
 *
 * Identity
 * @property {string}  slug            must match the page slug in pages.js
 * @property {string}  pageName        the PAGES entry this replaces
 * @property {string}  category        practice pillar (§12B practice architecture)
 * @property {string}  transformation  e.g. "Fragmented → Connected"
 *
 * 01 Hero
 * @property {string}  eyebrow
 * @property {string}  h1
 * @property {string}  subhead
 * @property {{label:string,to:string}} primaryCta   the contextual entry offer
 * @property {{label:string,href:string}} secondaryCta  in-page anchor
 *
 * 02-04 Problem and change
 * @property {string[]} signals          "does this sound familiar" symptoms
 * @property {string[]} consequenceFlow  cause -> consequence chain, in order
 * @property {string}   consequenceNote
 * @property {{before:string,after:string}[]} transformationRows
 *
 * 05-06 Mechanism
 * @property {{title:string,body:string}[]} capabilities
 * @property {{title:string,description:string,layers:{name:string,items:string[]}[],crossCutting:string[]}} architecture
 *
 * 07-08 Outputs
 * @property {string[]} deliverables
 * @property {{step:string,body:string}[]} process
 *
 * 09-11 Trust
 * @property {{proofType:string,title:string,body:string,outcome?:string}[]} proof
 * @property {{group:string,items:string[]}[]} technologies
 * @property {string} practitionerNote
 *
 * 12-14 Content and conversion
 * @property {{label:string,href:string,kind:string}[]} relatedInsights
 * @property {{q:string,a:string}[]} faqs
 * @property {{title:string,body:string,note:string}} entryOffer
 */

/** Section ids, in render order. Used for deep_section_view and in-page anchors. */
export const SECTIONS = [
  'hero', 'signals', 'consequences', 'transformation', 'capabilities',
  'architecture', 'deliverables', 'process', 'proof', 'technologies',
  'practitioner', 'insight', 'faq', 'offer',
];

/**
 * Fails loudly at build time rather than rendering a half-empty page.
 * Called by scripts/check-solutions.mjs.
 */
export function validateSolution(c) {
  const problems = [];
  const need = ['slug', 'pageName', 'category', 'transformation', 'eyebrow', 'h1', 'subhead'];
  for (const f of need) if (!c[f]) problems.push(`missing "${f}"`);

  const lists = {
    signals: 4, consequenceFlow: 3, transformationRows: 5,
    capabilities: 4, deliverables: 5, process: 4, faqs: 5,
  };
  for (const [f, min] of Object.entries(lists)) {
    const n = (c[f] || []).length;
    if (n < min) problems.push(`"${f}" has ${n}, §5 asks for at least ${min}`);
  }

  // §12: every diagram needs a text equivalent, and §12A: governance must appear
  // as a cross-cutting concern on every reference architecture.
  if (!c.architecture?.description) problems.push('architecture has no text equivalent');
  // Locale-aware: "govern" is the English stem only. French is "gouvernance",
  // Spanish "gobernanza". Matching the English stem alone reported the FR and ES
  // pages as missing governance when both had it.
  const cross = (c.architecture?.crossCutting || []).join(' ').toLowerCase();
  const GOVERNANCE_STEMS = ['govern', 'gouvern', 'gobern'];
  if (!GOVERNANCE_STEMS.some((g) => cross.includes(g))) {
    problems.push('architecture crossCutting omits governance (§12A)');
  }

  if (!c.entryOffer?.title) problems.push('no contextual entry offer (§13)');
  if (!(c.relatedInsights || []).length) problems.push('no related insight (§13)');

  return problems;
}
