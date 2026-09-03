
import { translations } from "@/components/translations";
import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { createPageUrl } from "@/utils";
import { prefixFor } from "@/lib/i18n";
import { PRACTICES } from "@/lib/practices";
import { hasCaseStudies } from "@/lib/caseStudies";

// X ships no lucide glyph, so draw the wordmark directly.
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

// Every url here was opened and confirmed to be our account before being added —
// LinkedIn and Instagram serve a "page not found" body under an HTTP 200, so a
// status check alone will happily wire up a dead link. A link with no url never
// renders, so leaving one null is always safe.
// Watch the LinkedIn slug: /company/pawa is an unrelated farming business and
// /company/pawadata does not exist. Ours is /company/pawa-data-solutions.
//   Instagram: /pawadata is not a live profile

// Every url here was opened and confirmed to be our account before being added —
// LinkedIn and Instagram serve a "page not found" body under an HTTP 200, so a
// status check alone will happily wire up a dead link. A link with no url never
// renders, so leaving one null is always safe.
// Watch the LinkedIn slug: /company/pawa is an unrelated farming business and
// /company/pawadata does not exist. Ours is /company/pawa-data-solutions.
//   Instagram: /pawadata is not a live profile
const SOCIAL_LINKS = [
  { name: "LinkedIn", Icon: Linkedin, url: "https://www.linkedin.com/company/pawa-data-solutions" },
  { name: "X", Icon: XIcon, url: "https://x.com/pawadata" },
  { name: "YouTube", Icon: Youtube, url: "https://www.youtube.com/@Pawadata" },
  { name: "Instagram", Icon: Instagram, url: null },
].filter((s) => s.url);

// Sprint 8 §12. Four columns mirroring the information architecture:
// Practices · PaWa Data Solutions · Start · Utility.
//
// The generic transformation slogan is gone. A footer that shouts "Ready to
// transform your data?" after a page that has already made its case is a second
// conversion attempt at the quietest point on the page, and it read as the kind
// of copy this positioning is meant to avoid. The footer closes the site; it
// does not sell again.
export default function Footer({ language }) {
  const t = translations[language];
  const prefix = prefixFor(language);
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footerPracticesTitle,
      links: PRACTICES.map((p) => ({ label: t[p.labelKey], to: `${prefix}${p.href}` })),
    },
    {
      title: t.footerPawadataTitle,
      links: [
        ...(hasCaseStudies() ? [{ label: t.navSelectedWork, page: 'CaseStudies' }] : []),
        { label: t.insightsEyebrow, page: 'Insights' },
        { label: t.navAbout, page: 'About' },
        { label: t.navLocations, page: 'Locations' },
        { label: t.navCareers, page: 'Careers' },
        { label: t.navContact, page: 'Contact' },
      ],
    },
    {
      title: t.footerStartTitle,
      links: [
        { label: t.hcTitle, page: 'HealthCheck' },
        { label: t.ctaTalkToPractitioner, page: 'Contact' },
        { label: t.navWorkshop, page: 'Workshop' },
      ],
    },
    {
      title: t.footerUtilityTitle,
      links: [
        { label: t.footerPrivacy, page: 'PrivacyPolicy' },
        { label: t.footerDoNotSell, page: 'DoNotSellOrShare' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 py-14 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <img
              src="/pawa-logo-light.webp"
              alt="PaWa Data Solutions"
              width="120"
              height="48"
              className="mb-4 h-10 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">{t.footerDesc}</p>
            {SOCIAL_LINKS.length > 0 && (
              <ul className="mt-5 flex list-none gap-4 p-0 m-0">
                {SOCIAL_LINKS.map(({ name, Icon, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {col.title}
              </h2>
              <ul className="list-none space-y-2.5 p-0 m-0 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to || createPageUrl(l.page, language)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {year} PaWa Data Solutions. {t.footerRights}</p>
          <a href="mailto:hello@pawadata.com" className="hover:text-white">hello@pawadata.com</a>
        </div>
      </div>
    </footer>
  );
}
