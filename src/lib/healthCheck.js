// The Data Health Check, as structured data rather than prose in a component.
//
// The offer already existed — "Book a Data Health Check" is the primary CTA on
// seven pages — but it had no page of its own. Every one of those buttons pointed
// at the homepage contact anchor, so the most-repeated promise on the site was
// the least explained thing on it.
//
// Copy lives in translations.jsx by key; this file holds the structure and the
// icons, so all four locales stay in one place.

import {
  Boxes, GitBranch, Gauge, ShieldCheck, AlertTriangle, ListOrdered,
  FileSearch, ClipboardList, Grid3x3, Target, Route,
} from 'lucide-react';

/** §3 "Who it is for" — the five trigger conditions, verbatim from the brief. */
export const TRIGGERS = [
  'hcTrigger1', 'hcTrigger2', 'hcTrigger3', 'hcTrigger4', 'hcTrigger5',
];

/** §3 "Assessment scope" — the six areas examined. */
export const SCOPE = [
  { icon: Boxes,         key: 'hcScope1' },
  { icon: GitBranch,     key: 'hcScope2' },
  { icon: Gauge,         key: 'hcScope3' },
  { icon: ShieldCheck,   key: 'hcScope4' },
  { icon: AlertTriangle, key: 'hcScope5' },
  { icon: ListOrdered,   key: 'hcScope6' },
];

/** §3 "Deliverables" — what you are handed at the end. */
export const OUTPUTS = [
  { icon: FileSearch,    key: 'hcOutput1' },
  { icon: ClipboardList, key: 'hcOutput2' },
  { icon: Grid3x3,       key: 'hcOutput3' },
  { icon: Target,        key: 'hcOutput4' },
  { icon: Route,         key: 'hcOutput5' },
];

/**
 * The three weeks, so "2–3 weeks" is a shape rather than an assertion.
 * Week 3 is conditional on purpose: the engagement is two to three weeks and
 * saying which part is the variable one is more honest than a range alone.
 */
export const TIMELINE = ['hcWeek1', 'hcWeek2', 'hcWeek3'];

/** §5 requires non-scope to be explicit, not buried in FAQ fine print. */
export const NOT_INCLUDED = ['hcNot1', 'hcNot2', 'hcNot3', 'hcNot4'];

/** §3 FAQ — access, team time, confidentiality, price, what happens after. */
export const FAQ = [
  { q: 'hcFaq1Q', a: 'hcFaq1A' },
  { q: 'hcFaq2Q', a: 'hcFaq2A' },
  { q: 'hcFaq3Q', a: 'hcFaq3A' },
  { q: 'hcFaq4Q', a: 'hcFaq4A' },
  { q: 'hcFaq5Q', a: 'hcFaq5A' },
  { q: 'hcFaq6Q', a: 'hcFaq6A' },
];

/**
 * Illustrative structure of the risk/priority matrix, so a buyer can see the
 * shape of the output without any client's real findings appearing on a public
 * page. Labelled as illustrative on the page itself — §2 asks to show example
 * deliverables without exposing confidential material, and an unlabelled
 * example is how invented content gets mistaken for real content.
 */
export const MATRIX_EXAMPLE = {
  rows: ['hcMatrixHigh', 'hcMatrixMedium', 'hcMatrixLow'],
  cols: ['hcMatrixNow', 'hcMatrixNext', 'hcMatrixLater'],
  cells: [
    ['hcCellA', 'hcCellB', ''],
    ['hcCellC', 'hcCellD', ''],
    ['', 'hcCellE', 'hcCellF'],
  ],
};
