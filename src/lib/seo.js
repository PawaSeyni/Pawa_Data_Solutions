// Per-page, per-language SEO metadata, applied client-side by <Seo /> and baked
// into every route by scripts/prerender.mjs.
//
// Titles and descriptions are derived from src/components/translations.jsx
// rather than written fresh here. That copy is already professionally translated
// and reviewed; inventing a second, parallel set of French/Spanish/Portuguese
// strings would mean two things to keep in sync and one of them drifting.

import { translations } from '@/components/translations';
import { caseStudyBySlug } from '@/lib/caseStudies';
import { bookBySlug } from '@/lib/writing';
import { bestPracticeBySlug } from '@/lib/bestPractices';
import { deepSeoFor } from '@/lib/deepSolutions';
import { DEFAULT_LANGUAGE, LANGUAGES, localizedPath, alternatesFor } from '@/lib/i18n';

export const SITE_URL = 'https://pawadata.com';
export const SITE_NAME = 'PaWa Data Solutions';

// Google truncates around 60-65 characters. A page whose own headline is long
// gains nothing from a brand suffix that gets cut off mid-word — the domain is
// already shown beside the result. So the suffix is appended only when it fits,
// and the headline is never itself truncated: the page's own words are the part
// worth keeping.
const MAX_TITLE = 65;
export function withBrand(title) {
  const full = `${title} — ${SITE_NAME}`;
  return full.length <= MAX_TITLE ? full : title;
}

// Descriptions are trimmed to ~155 chars: Google truncates around 160, and the
// source strings are body copy, not meta copy.
const MAX_DESCRIPTION = 155;

function trim(text) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= MAX_DESCRIPTION) return clean;
  const cut = clean.slice(0, MAX_DESCRIPTION);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length).replace(/[,;:.]$/, '')}…`;
}

// Which translation keys supply each page's title and description.
const SOURCES = {
  Home:                 { title: null,            desc: 'heroSubtitle' },
  Solutions:            { title: 'solutionsEyebrow', desc: 'solutionsSubtitle' },
  About:                { title: 'aboutEyebrow',  desc: 'aboutIntro' },
  Locations:            { title: 'navLocations',  desc: 'locationsSubtitle' },
  Insights:             { title: 'insightsEyebrow', desc: 'insightsSubtitle' },
  HealthCheck:          { title: 'hcTitle',       desc: 'hcSubtitle' },
  Contact:              { title: 'contactPageTitle', desc: 'contactPageSubtitle' },
  CaseStudies:          { title: 'caseStudiesEyebrow',   desc: 'caseStudiesSubtitle' },
  DataIntegration:      { title: 'service1Title', desc: 'service1Desc' },
  PipelineArchitecture: { title: 'service2Title', desc: 'service2Desc' },
  DataGovernance:       { title: 'service3Title', desc: 'service3Desc' },
  AIReadiness:          { title: 'service4Title', desc: 'service4Desc' },
  AnalyticsEnablement:  { title: 'service5Title', desc: 'service5Desc' },
  ProcessAutomation:    { title: 'service6Title', desc: 'service6Desc' },
  Workshop:             { title: 'workshopHeroTitle', desc: 'workshopHeroSubtitle' },
  Careers:              { title: 'navCareers',    desc: 'careersHeroSubtitle' },
  PrivacyPolicy:        { title: 'footerPrivacy', desc: 'seoPrivacyDesc' },
  DoNotSellOrShare:     { title: 'footerDoNotSell', desc: 'seoDoNotSellDesc' },
  NotFound:             { title: 'notFoundTitle', desc: 'notFoundBody' },
};

// The homepage title is the brand promise, not a page name, so it is the one
// string written per-language here rather than derived.
const HOME_TITLES = {
  en: 'PaWa Data Solutions — Trusted Data, Delivered Fast',
  fr: 'PaWa Data Solutions — Des Données Fiables, Livrées Rapidement',
  es: 'PaWa Data Solutions — Datos Confiables, Entregados Rápido',
  pt: 'PaWa Data Solutions — Dados Confiáveis, Entregues Rápido',
};

export function getSeo(pageName, language = DEFAULT_LANGUAGE) {
  // A deep solution page describes itself: the title follows the search intent
  // (§9 "data integration consulting"), not the nav label, which is what the
  // generic SOURCES table would have produced.
  const deep = deepSeoFor(pageName, language);
  if (deep) {
    const lang = LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    return {
      path: localizedPath(pageName, lang),
      title: withBrand(deep.title),
      description: trim(deep.description),
      noindex: false,
      alternates: alternatesFor(pageName),
    };
  }

  // An individual case study describes itself; its title and description come
  // from the approved entry rather than from a generic template.
  if (pageName?.startsWith('Book:')) {
    const lang = LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    const book = bookBySlug(pageName.slice('Book:'.length), lang);
    if (book) {
      return {
        path: localizedPath(pageName, lang),
        title: withBrand(book.title),
        description: trim(book.thesis),
        noindex: false,
        alternates: alternatesFor(pageName),
      };
    }
  }

  if (pageName?.startsWith('BestPractice:')) {
    const lang = LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    const bp = bestPracticeBySlug(pageName.slice('BestPractice:'.length));
    if (bp) {
      return {
        path: localizedPath(pageName, lang),
        title: withBrand(bp.title),
        description: trim(bp.purpose),
        noindex: false,
        alternates: alternatesFor(pageName),
      };
    }
  }

  if (pageName?.startsWith('CaseStudy:')) {
    const lang = LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    const study = caseStudyBySlug(pageName.slice('CaseStudy:'.length), lang);
    if (study) {
      return {
        path: localizedPath(pageName, lang),
        title: withBrand(study.headline),
        description: trim(study.challenge),
        noindex: false,
        alternates: alternatesFor(pageName),
      };
    }
  }

  const lang = LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  const t = translations[lang];
  const page = SOURCES[pageName] ? pageName : 'Home';
  const source = SOURCES[page];

  const title =
    page === 'Home'
      ? HOME_TITLES[lang]
      : withBrand(t[source.title] || translations[DEFAULT_LANGUAGE][source.title]);

  const description = trim(t[source.desc] || translations[DEFAULT_LANGUAGE][source.desc]);

  return {
    path: localizedPath(page, lang),
    title,
    description,
    // Only the 404 is noindex. It is a real HTTP 404 at the edge; a crawler
    // following a stale link should not bank a thin page on top of it.
    noindex: page === 'NotFound',
    // Reciprocal set, including self — Google drops clusters that are not
    // mutually referential. x-default points at English, the unprefixed default.
    alternates: alternatesFor(page),
  };
}
