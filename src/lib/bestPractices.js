// Best practices — the one genuinely new content type this site publishes.
//
// The division of labour, decided before Sprint 3 and unchanged by it:
// papanguer.com owns narrative thought leadership (the essays, canonical there,
// syndicated to LinkedIn). pawadata.com owns practical reference artifacts —
// the checklist you open while doing the work. Those are different objects for
// different moments, so this is not the personal site's content moved across.
//
// Empty on purpose. §7 of the Sprint 3 brief rules out generating content volume
// for its own sake, and a best practice written by an assistant that has never
// run the engagement is exactly that. The template, routing, filtering and
// backlog are all built and tested; what is missing is a practitioner writing
// one. Topics are queued in docs/editorial-backlog.md.
//
// Adding one makes its route, canonical, hreflang, sitemap entry and Insights
// filter appear on the next build with no other file touched.

/**
 * @typedef {Object} BestPractice
 * @property {string}   slug
 * @property {string}   title       problem-led, not topic-led
 * @property {string}   purpose     what this artifact is for, in one sentence
 * @property {string}   audience    who should read it
 * @property {string}   author      a named person — §5 requires one
 * @property {string}   published   ISO date
 * @property {string=}  updated     ISO date, when revised
 * @property {string[]} principles  the rules, stated as claims
 * @property {string[]} guidance    how to apply them
 * @property {string[]} checklist   the artifact a reader actually takes away
 * @property {string[]} pitfalls    what goes wrong, observed not imagined
 * @property {{label:string,href:string}[]} references
 * @property {string[]} solutions   related capability pages
 */

/** @type {BestPractice[]} */
export const BEST_PRACTICES = [];

export const hasBestPractices = () => BEST_PRACTICES.length > 0;

export const bestPracticeBySlug = (slug) => BEST_PRACTICES.find((b) => b.slug === slug);
