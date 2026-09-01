// Route paths are CamelCase ("/DataIntegration") — that is what the router
// declares, what sitemap.xml lists, and what src/lib/seo.js emits as canonical.
//
// This used to lowercase the page name, so every internal link pointed at
// "/dataintegration" while the sitemap advertised "/DataIntegration". The SPA
// fallback answered 200 to both, so Google was handed two spellings of every
// page with nothing to reconcile them. Emit the canonical casing; netlify.toml
// 301s the old lowercase URLs so existing inbound links keep working.
export function createPageUrl(pageName: string) {
    return '/' + pageName.replace(/ /g, '-');
}
