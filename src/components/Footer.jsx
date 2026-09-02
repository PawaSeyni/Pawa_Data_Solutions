
import React from "react";
import { translations } from "@/components/translations";
import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { createPageUrl } from "@/utils";
import { prefixFor } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

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
const SOCIAL_LINKS = [
  { name: "LinkedIn", Icon: Linkedin, url: "https://www.linkedin.com/company/pawa-data-solutions" },
  { name: "X", Icon: XIcon, url: "https://x.com/pawadata" },
  { name: "YouTube", Icon: Youtube, url: "https://www.youtube.com/@Pawadata" },
  { name: "Instagram", Icon: Instagram, url: null },
].filter((s) => s.url);

export default function Footer({ language }) {
  const t = translations[language];
  const navigate = useNavigate();

  const services = [
    { title: t.service1Title, page: "DataIntegration" },
    { title: t.service2Title, page: "PipelineArchitecture" },
    { title: t.service3Title, page: "DataGovernance" },
    { title: t.service4Title, page: "AIReadiness" },
    { title: t.service5Title, page: "AnalyticsEnablement" },
    { title: t.service6Title, page: "ProcessAutomation" },
  ];

  // These targets live on the home page, so a click from any other route has to
  // navigate first and scroll once the section exists. This used to wait a fixed
  // 300ms, which is a race: arriving from a lazy-loaded route often takes longer,
  // and the scroll then silently did nothing. Poll instead, and give up rather
  // than spin forever if the id is genuinely absent.
  const handleSectionClick = (sectionId) => {
    navigate(`${prefixFor(language)}/`);

    const deadline = Date.now() + 3000;
    const tryScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (Date.now() < deadline) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <picture>
                <source srcSet="/pawa-logo.webp" type="image/webp" />
                <img
                  src="/pawa-logo.png"
                  alt="PaWa Data Solutions"
                  width="240"
                  height="360"
                  className="h-40 w-auto filter brightness-0 invert"
                />
              </picture>
            </div>
            <p className="text-gray-300 max-w-md mb-4">
              {t.footerDesc}
            </p>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} PaWa Data Solutions. All rights reserved.
            </div>

            {SOCIAL_LINKS.length > 0 && (
              <ul className="flex gap-3 mt-5" aria-label={t.footerSocialLabel}>
                {SOCIAL_LINKS.map(({ name, Icon, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} — ${t.footerSocialLabel}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white focus-visible:text-white focus-visible:border-white transition-colors"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Services */}
          <div>
            <h2 className="font-semibold text-white mb-4">{t.footerServicesTitle}</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service.page}>
                  <Link
                    to={createPageUrl(service.page, language)}
                    className="hover:text-white transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-semibold text-white mb-4">{t.footerCompanyTitle}</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                {/* Was a scroll to the services grid, because no About page existed
                    (audit CONTENT-01). Now it goes where the label promises. */}
                <Link to={createPageUrl('About', language)} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">
                  {t.footerAbout}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('process')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.navProcess}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('kpis')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.footerCaseStudies}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('contact')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.navContact}
                </button>
              </li>
              {/* Points at the on-site Blog index, which in turn links out to
                  the canonical articles on papanguer.com. Indexing here,
                  publishing there. */}
              <li>
                <Link to={createPageUrl('Blog', language)} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">
                  {t.navBlog}
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('PrivacyPolicy', language)} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">{t.footerPrivacy}</Link>
              </li>
              <li>
                <Link to={createPageUrl('DoNotSellOrShare', language)} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">{t.footerDoNotSell}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footerCta}{" "}
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="text-blue-400 hover:underline cursor-pointer"
            >
              {t.footerCtaLink}
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
