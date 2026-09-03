// Selected work. Sprint 1 deliverable — see docs/proof-inventory.md.
//
// All three are anonymised by sector and carry NO quantitative outcomes. That is
// deliberate and it is what makes them publishable today: nothing here needs a
// client's permission, because no client is identifiable, and no number is
// claimed. Outcomes are described in kind.
//
// Provenance: this work was delivered during fifteen years at Informatica, most
// recently as Country Manager for Technical Sales in Canada — 300+ customer-facing
// proving engagements for Tier 1 institutions. The site already draws this
// distinction on the About page, and each study repeats it, because a case study
// on a consultancy's own site otherwise reads as that firm's client work.
//
// Adding real PaWa engagements later: set provenance to 'pawa' and drop the note.
// Numbers go in `metrics` with a `basis` saying what was measured.

/**
 * @typedef {Object} CaseStudy
 * @property {string}  slug
 * @property {'anonymous'|'named'} disclosure
 * @property {string}  client        agreed anonymous wording, or company name
 * @property {string}  headline      the page h1 and search title
 * @property {string}  sector
 * @property {{problem:string,intervention:string,outcome:string}} card  compact copy for the homepage proof block
 * @property {'informatica'|'pawa'} provenance  where the work was delivered
 * @property {string}  challenge      the problem, in the client's terms
 * @property {string}  whyItMattered  what was at stake if it went unsolved
 * @property {string}  approach       what was actually done
 * @property {string[]} architecture  the shape of what was built
 * @property {string}  capability     what the client could do afterwards
 * @property {string}  outcome        the result, described in kind
 * @property {{label:string,value:string,basis:string}[]} metrics  empty until approved figures exist
 * @property {string[]} solutions     related capability pages, for cross-linking
 * @property {string=} quote
 * @property {string=} quoteAttribution
 */

/** @type {CaseStudy[]} */
export const CASE_STUDIES = [
  {
    slug: 'entity-resolution-financial-crime',
    headline: 'Entity resolution for financial crime investigations',
    card: {
      problem:
        'Customer records were duplicated across retail, commercial and wealth, and investigations reconciled them by hand.',
      intervention:
        'Fixed the matching problem first: profiled real failure modes, then tuned rules against cases the team already knew the answer to.',
      outcome:
        'A single customer view for financial crime investigations, with lineage back to every contributing source.',
    },
    disclosure: 'anonymous',
    client: 'A Tier 1 North American bank',
    sector: 'Financial Services',
    provenance: 'informatica',
    challenge:
      'The bank could not reliably tell when two customer records were the same person. Retail, commercial and wealth each held their own version of a client, and the financial crime team was reconciling them by hand during investigations.',
    whyItMattered:
      'KYC and AML obligations do not bend to how a bank organises its systems. An investigator who cannot see a whole customer cannot assess that customer, and the gap shows up in exactly the situation where it is least affordable: a regulator asking how a decision was reached.',
    approach:
      'Started with the matching problem rather than the platform. Profiled the real data to find why records failed to match — name conventions across languages, addresses captured to different standards, identifiers held in fields never meant to carry them. Match rules were then tuned against known cases the investigations team already understood, so the results could be judged by people who knew the right answer.',
    architecture: [
      'Profiling pass across the contributing source systems to quantify the real match failure modes',
      'Deterministic rules for identifier matches, probabilistic scoring for the remainder',
      'A mastered customer record with survivorship rules agreed per attribute, not per system',
      'Stewardship queue for the scored middle band, so ambiguous matches go to a person rather than a threshold',
      'Lineage retained from the mastered record back to every contributing source',
    ],
    capability:
      'Investigators could pull a single customer view across lines of business, and could show which source each attribute came from.',
    outcome:
      'Entity resolution moved from a manual reconciliation step inside investigations to a maintained capability the financial crime team could rely on. The lineage back to source meant a match could be explained rather than asserted.',
    metrics: [],
    solutions: ['DataGovernance', 'DataIntegration'],
  },
  {
    slug: 'integration-platform-consolidation',
    headline: 'Consolidating overlapping integration stacks',
    card: {
      problem:
        'Several integration stacks ran side by side after years of acquisitions, with no agreed answer on which pipeline was authoritative.',
      intervention:
        'Inventoried what actually ran, then consolidated in order of business risk rather than technical convenience.',
      outcome:
        'One documented pattern for onboarding a source, and the duplicate routes genuinely retired rather than left running.',
    },
    disclosure: 'anonymous',
    client: 'A North American insurer',
    sector: 'Data Platform & Integration',
    provenance: 'informatica',
    challenge:
      'Years of acquisitions had left the insurer running several integration stacks side by side. The same policy data moved between the same two systems by three different routes, each built by a different team, none of them documented in a way the others trusted.',
    whyItMattered:
      'The cost was not the licences. It was that no one could say with confidence which pipeline was authoritative, so every downstream question about a number turned into an archaeology exercise. Change requests were priced for the risk of breaking something invisible.',
    approach:
      'Mapped what actually ran before proposing what should replace it, including the jobs everyone assumed were dead. Consolidation was sequenced by business risk rather than by technical convenience, so the flows feeding regulatory and financial reporting moved last, once the pattern had been proven on lower-stakes data.',
    architecture: [
      'Full inventory of running integration jobs, with the consumers of each output identified',
      'A single ingestion pattern defined once and applied per source, rather than per project',
      'Parallel run for each migrated flow, with output compared against the pipeline it replaced',
      'Decommissioning treated as a delivery step with its own sign-off, not as cleanup',
    ],
    capability:
      'One documented way to bring a new source in, and one answer to which pipeline owns a given feed.',
    outcome:
      'The duplicate routes were retired rather than left running alongside their replacements, which is the usual failure mode of a consolidation. Onboarding a new source became a known pattern instead of a project.',
    metrics: [],
    solutions: ['DataIntegration', 'PipelineArchitecture'],
  },
  {
    slug: 'governance-regulatory-reporting',
    headline: 'Making regulatory figures explainable',
    card: {
      problem:
        'Regulatory figures were produced on time but their derivation could not always be demonstrated.',
      intervention:
        'Traced each reported measure back to source and captured the owning definition with a named owner.',
      outcome:
        'Provenance questions became a lookup instead of a multi-day investigation.',
    },
    disclosure: 'anonymous',
    client: 'A Canadian financial institution',
    sector: 'Governance & Analytics',
    provenance: 'informatica',
    challenge:
      'Regulatory reporting numbers were produced on time, but the institution could not always demonstrate how a given figure had been derived. Definitions lived in analysts\' heads and in spreadsheet logic that had never been written down.',
    whyItMattered:
      'A report that is correct but unexplainable is a finding waiting to happen. The exposure was not the arithmetic — it was the inability to answer follow-up questions about provenance without pulling senior people off other work for days.',
    approach:
      'Treated definitions as the deliverable rather than the documentation. Each reported measure was traced back through its transformations to source, and the owning business definition was captured with a named owner. Where two areas disagreed on a definition, that disagreement was surfaced and resolved rather than averaged.',
    architecture: [
      'Automated lineage capture from reporting layer through transformation to source system',
      'A business glossary with one accountable owner per term, not a committee',
      'Data quality rules attached to the definitions themselves, so a breach names the owner',
      'Reporting measures linked to their glossary terms, making the derivation path navigable',
    ],
    capability:
      'The institution could show the derivation path for a reported figure without reconstructing it by hand.',
    outcome:
      'Provenance questions became a lookup instead of an investigation. Definitional disagreements between business areas surfaced during the work rather than during a review, which is the cheaper of the two moments to find them.',
    metrics: [],
    solutions: ['DataGovernance', 'AnalyticsEnablement'],
  },
];

// Locale copy. Identity fields — slug, disclosure, provenance, solutions,
// metrics — are NOT language and stay on the entry above, so a translation
// cannot accidentally change which page it is or what kind of proof it claims.
//
// Everything here is our own writing about anonymised engagements, so unlike a
// book title it translates without misrepresenting anything.
import { CASE_STUDY_COPY } from '../content/caseStudyCopy.js';

export const hasCaseStudies = () => CASE_STUDIES.length > 0;

/** One study, in the requested language, falling back to the English copy. */
export const caseStudyBySlug = (slug, language = 'en') => {
  const base = CASE_STUDIES.find((c) => c.slug === slug);
  if (!base) return undefined;
  const copy = CASE_STUDY_COPY[language]?.[slug];
  return copy ? { ...base, ...copy } : base;
};

/** The whole list, localised — used by the index page. */
export const caseStudiesFor = (language = 'en') =>
  CASE_STUDIES.map((c) => caseStudyBySlug(c.slug, language));

/** Homepage proof block shows three. */
export const featuredCaseStudies = () => CASE_STUDIES.slice(0, 3);
