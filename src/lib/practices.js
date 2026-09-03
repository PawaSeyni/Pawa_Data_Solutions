// The five practice families. Sprint 8 §3.
//
// Five practices, six pages: Integration & Data Engineering covers both
// /solutions/data-integration and /solutions/pipeline-architecture. That is the
// point of the regrouping — a buyer thinks "my integration is a mess", not
// "I need pipeline architecture as distinct from data integration", and the nav
// should match how the problem is felt rather than how the pages were built.
//
// §4's migration guardrail is respected: no URL is renamed. The practice is a
// navigational grouping over routes that already rank.
//
// `capabilityKeys` are the supporting capabilities shown under each practice in
// the mega-menu and on the homepage card. They come from §3 and §7.

export const PRACTICES = [
  {
    id: 'integration',
    labelKey: 'practiceIntegrationLabel',
    blurbKey: 'practiceIntegrationBlurb',
    capabilityKey: 'practiceIntegrationCaps',
    href: '/solutions/data-integration/',
    // Second page in the same practice. Surfaced in the menu, not a sixth card.
    alsoKey: 'practiceIntegrationAlso',
    alsoHref: '/solutions/pipeline-architecture/',
  },
  {
    id: 'governance',
    labelKey: 'practiceGovernanceLabel',
    blurbKey: 'practiceGovernanceBlurb',
    capabilityKey: 'practiceGovernanceCaps',
    href: '/solutions/data-governance/',
  },
  {
    id: 'analytics',
    labelKey: 'practiceAnalyticsLabel',
    blurbKey: 'practiceAnalyticsBlurb',
    capabilityKey: 'practiceAnalyticsCaps',
    href: '/solutions/analytics-enablement/',
  },
  {
    id: 'automation',
    labelKey: 'practiceAutomationLabel',
    blurbKey: 'practiceAutomationBlurb',
    capabilityKey: 'practiceAutomationCaps',
    href: '/solutions/process-automation/',
  },
  {
    id: 'ai',
    labelKey: 'practiceAiLabel',
    blurbKey: 'practiceAiBlurb',
    capabilityKey: 'practiceAiCaps',
    href: '/solutions/ai-readiness/',
  },
];

/** Which practice a solution route belongs to — used for breadcrumbs (§5). */
export const practiceForRoute = (slug) => {
  const path = `/${slug.replace(/^\/|\/$/g, '')}/`;
  return PRACTICES.find((p) => p.href === path || p.alsoHref === path) || null;
};
