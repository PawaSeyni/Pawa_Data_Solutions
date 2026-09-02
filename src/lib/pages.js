// The single source of truth for what pages exist and where they live.
//
// Page paths used to be defined in five places — the router, i18n, seo.js, the
// sitemap generator and a hand-kept sitemap.xml. They drifted twice: once on
// casing, once on the trailing slash, and the second time took every service
// page down with an infinite redirect loop. Everything now derives from here.
//
// Plain data with no JSX, so the Node build scripts can import it directly
// rather than keeping a second copy of the same list.
//
// URL shape, learned the hard way (see netlify.toml): Netlify lowercases every
// deployed path and serves directories with a trailing slash. Slugs are
// lowercase and hyphenated to match, and hyphens matter for more than tidiness —
// Google tokenizes "data-integration" as two words and "dataintegration" as one.

/**
 * name        key used by the router, seo.js and the active-nav highlight
 * slug        path segment(s) after any language prefix
 * legacySlug  the path this page shipped at before 2026-09-02, kept so the
 *             generated redirects can point old inbound links at the new home
 * priority    sitemap priority
 * changefreq  sitemap change frequency
 */
export const PAGES = [
  { name: 'Home',                 slug: '',                                legacySlug: null,                 changefreq: 'monthly', priority: '1.0' },

  // The six capability pages now sit under /solutions/. The redesign plan lists
  // both a Solutions and a Services tier; its own SEO section uses only
  // /solutions/<service-slug>, and shipping both would put two pages of ours in
  // competition for one query — 13 pages becoming 52 once translated.
  { name: 'DataIntegration',      slug: 'solutions/data-integration',      legacySlug: 'dataintegration',      changefreq: 'monthly', priority: '0.8' },
  { name: 'PipelineArchitecture', slug: 'solutions/pipeline-architecture', legacySlug: 'pipelinearchitecture', changefreq: 'monthly', priority: '0.8' },
  { name: 'DataGovernance',       slug: 'solutions/data-governance',       legacySlug: 'datagovernance',       changefreq: 'monthly', priority: '0.8' },
  { name: 'AIReadiness',          slug: 'solutions/ai-readiness',          legacySlug: 'aireadiness',          changefreq: 'monthly', priority: '0.8' },
  { name: 'AnalyticsEnablement',  slug: 'solutions/analytics-enablement',  legacySlug: 'analyticsenablement',  changefreq: 'monthly', priority: '0.8' },
  { name: 'ProcessAutomation',    slug: 'solutions/process-automation',    legacySlug: 'processautomation',    changefreq: 'monthly', priority: '0.8' },

  // Workshop and Careers stay top-level. Neither is a solution — one is an
  // offer, the other is hiring — and burying them under /solutions/ would make
  // the nav less honest, not more organised.
  { name: 'Workshop',             slug: 'workshop',                        legacySlug: null,                 changefreq: 'monthly', priority: '0.7' },
  { name: 'Careers',              slug: 'careers',                         legacySlug: null,                 changefreq: 'monthly', priority: '0.7' },

  { name: 'PrivacyPolicy',        slug: 'privacy-policy',                  legacySlug: 'privacypolicy',        changefreq: 'yearly',  priority: '0.3' },
  { name: 'DoNotSellOrShare',     slug: 'do-not-sell',                     legacySlug: 'donotsellorshare',     changefreq: 'yearly',  priority: '0.3' },
];

/** name -> slug, for path building. */
export const SLUG_BY_NAME = Object.fromEntries(PAGES.map((p) => [p.name, p.slug]));

/** slug -> name, for resolving an incoming path back to a page. */
export const NAME_BY_SLUG = Object.fromEntries(PAGES.map((p) => [p.slug, p.name]));

/** Every page that moved, for generating redirects from old inbound links. */
export const MOVED = PAGES.filter((p) => p.legacySlug);
