// Single source of truth for locales and URL shape.
//
// Language used to live in a useState in src/pages/index.jsx, which meant it
// changed no URL: the French, Spanish and Portuguese copy could not be indexed,
// linked, shared, or survive a reload. Roughly three quarters of the translation
// work was invisible. Locale now lives in the path.
//
// English is deliberately UNPREFIXED. Every URL already indexed or linked
// (/dataintegration/, /careers/, …) keeps working untouched and stays canonical
// for English, so this change adds URLs without invalidating any.
//
// Paths are lowercase with a trailing slash because that is what Netlify serves —
// see src/utils/index.ts for the redirect-loop this shape exists to avoid.

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES = ['en', 'fr', 'es', 'pt'];

// Maps to the `lang` attribute and hreflang values. Bare codes rather than
// regional ones (fr, not fr-CA): the copy is not region-specific, and claiming
// a region we do not actually target would be worse than claiming none.
export const LANGUAGE_NAMES = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
};

export function prefixFor(language) {
  return language === DEFAULT_LANGUAGE ? '' : `/${language}`;
}

// Splits "/fr/dataintegration/" into { language: 'fr', slug: 'dataintegration' }.
// An unknown first segment is treated as a slug, not a language, so /nonsense/
// stays a 404 rather than silently becoming an English page.
export function parsePath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  let language = DEFAULT_LANGUAGE;
  if (segments.length && LANGUAGES.includes(segments[0]) && segments[0] !== DEFAULT_LANGUAGE) {
    language = segments.shift();
  }
  return { language, slug: segments.join('/').toLowerCase() };
}

// Page name ("DataIntegration") + language -> path ("/fr/dataintegration/").
export function localizedPath(pageName, language = DEFAULT_LANGUAGE) {
  const prefix = prefixFor(language);
  if (!pageName || pageName === 'Home') return `${prefix}/`;
  return `${prefix}/${pageName.toLowerCase().replace(/ /g, '-')}/`;
}

// Every language variant of one page, for the reciprocal hreflang set.
// Google requires these to be mutually referential: each variant must list all
// of them, including itself, or the cluster is ignored.
export function alternatesFor(pageName) {
  return LANGUAGES.map((language) => ({ language, path: localizedPath(pageName, language) }));
}
