// Case studies. Empty until a client approves one in writing.
//
// Nothing here is a placeholder, and that is deliberate. The fabricated
// testimonials this site shipped in June were placeholder copy that nobody
// replaced — invented quotes attributed to named people at named companies,
// live for months and still in the JS bundle weeks after being pulled from the
// page. A sample case study written "just to show the template" is the same
// object with a different label.
//
// So the array below is empty, and the whole feature is gated on it: with no
// entries there is no index page, no route, no sitemap entry and nothing in the
// nav. Add a real one and the route, canonical, hreflang and sitemap entry all
// appear on the next build.
//
// EVERY entry must carry approval provenance. scripts/check-case-studies.mjs
// fails the build if `approvedBy` or `approvedOn` is missing, or if a metric has
// no `confirmedBy`. You cannot ship a case study here without a record of who
// signed it off — that check is the point of this file, not a formality.

/**
 * @typedef {Object} CaseStudyMetric
 * @property {string} label       what was measured, in the client's words
 * @property {string} value       the figure, exactly as approved
 * @property {string} basis       how it was measured, and over what period
 * @property {string} confirmedBy name and title of the person who confirmed it
 *
 * @typedef {Object} CaseStudy
 * @property {string}  slug          url segment under /case-studies/
 * @property {'named'|'anonymous'} disclosure  which rung of the ask they granted
 * @property {string}  client        company name, or the agreed anonymous wording
 * @property {string}  sector
 * @property {string}  approvedBy    who approved publication
 * @property {string}  approvedOn    ISO date of the written approval
 * @property {string}  challenge     the problem in the client's terms
 * @property {string}  approach      what was actually done
 * @property {string[]} outcomes     results described in kind
 * @property {CaseStudyMetric[]} metrics  figures — omit entirely if none approved
 * @property {string[]} solutions    page names this relates to, for cross-linking
 * @property {string=} quote
 * @property {string=} quoteAttribution
 */

/** @type {CaseStudy[]} */
export const CASE_STUDIES = [];

/** Feature is live only once there is something real to show. */
export const hasCaseStudies = () => CASE_STUDIES.length > 0;

export const caseStudyBySlug = (slug) => CASE_STUDIES.find((c) => c.slug === slug);
