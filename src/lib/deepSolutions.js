// Registry of deep solution pages. Sprint 7.
//
// A page is looked up by slug and language. Locale content that has not been
// written yet falls back to English rather than rendering an empty page — but
// the fallback is recorded, not silent: scripts/check-solutions.mjs reports
// which locales are still English so an untranslated page cannot quietly ship
// as if it were finished.

import { IDENTITY as DI_ID, LOCALES as DI } from '../content/dataIntegration.js';
import { IDENTITY as GOV_ID, LOCALES as GOV } from '../content/dataGovernanceMdm.js';
import { IDENTITY as AIR_ID, LOCALES as AIR } from '../content/aiReadiness.js';
import { IDENTITY as PIPE_ID, LOCALES as PIPE } from '../content/pipelineArchitecture.js';
import { IDENTITY as ANL_ID, LOCALES as ANL } from '../content/analyticsEnablement.js';
import { IDENTITY as AUTO_ID, LOCALES as AUTO } from '../content/processAutomation.js';

const REGISTRY = [
  { identity: DI_ID, locales: DI },
  { identity: GOV_ID, locales: GOV },
  { identity: AIR_ID, locales: AIR },
  { identity: PIPE_ID, locales: PIPE },
  { identity: ANL_ID, locales: ANL },
  { identity: AUTO_ID, locales: AUTO },
];

export const DEEP_SLUGS = REGISTRY.map((r) => r.identity.slug);

/** Page names the router should send to DeepSolution instead of their old page. */
export const DEEP_PAGE_NAMES = new Set(REGISTRY.map((r) => r.identity.pageName));

/** Which locales actually have their own copy, per solution. */
export const localeCoverage = () =>
  REGISTRY.map((r) => ({
    slug: r.identity.slug,
    translated: Object.keys(r.locales),
    missing: ['en', 'fr', 'es', 'pt'].filter((l) => !(l in r.locales)),
  }));

export function solutionFor(slug, language = 'en') {
  const entry = REGISTRY.find((r) => r.identity.slug === slug);
  if (!entry) return null;
  const copy = entry.locales[language] || entry.locales.en;
  return { ...entry.identity, ...copy };
}

/** SEO for a deep page, by PAGE NAME (seo.js works in names, not slugs). */
export function deepSeoFor(pageName, language = 'en') {
  const entry = REGISTRY.find((r) => r.identity.pageName === pageName);
  if (!entry) return null;
  const copy = entry.locales[language] || entry.locales.en;
  if (!copy?.seoTitle) return null;
  return { title: copy.seoTitle, description: copy.seoDescription || copy.subhead };
}
