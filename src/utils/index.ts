// Netlify lowercases every deployed path and serves directories with a trailing
// slash, so "/DataIntegration" is 301'd to "/dataintegration/". That is the
// canonical shape on this host, and links, sitemap and canonical tags all have
// to agree with it or the redirect chain fights itself.
//
// History: this originally lowercased without the slash while the sitemap said
// CamelCase, so Google saw two spellings. Emitting CamelCase instead looked
// right locally but looped in production against Netlify's own normalization.
export function createPageUrl(pageName: string) {
    return '/' + pageName.toLowerCase().replace(/ /g, '-') + '/';
}
