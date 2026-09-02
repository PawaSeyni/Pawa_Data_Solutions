import { localizedPath, DEFAULT_LANGUAGE } from '@/lib/i18n';

// Builds an internal link for a page in a given locale.
//
// Netlify lowercases every deployed path and serves directories with a trailing
// slash, so "/DataIntegration" is 301'd to "/dataintegration/". That is the
// canonical shape on this host, and links, sitemap and canonical tags all have
// to agree with it or the redirect chain fights itself. (Emitting CamelCase
// looked right locally but looped in production against Netlify's own
// normalization — see netlify.toml.)
//
// The language argument is what keeps a visitor inside their locale as they
// navigate; omitting it falls back to English rather than silently dropping
// them out of French mid-journey, so pass it wherever a locale is in scope.
export function createPageUrl(pageName: string, language: string = DEFAULT_LANGUAGE) {
    return localizedPath(pageName, language);
}
