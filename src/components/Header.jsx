import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { translations } from "@/components/translations";
import ServicesMenu from "@/components/ServicesMenu";
import LanguageMenu from "@/components/LanguageMenu";
import { PRACTICES } from "@/lib/practices";
import { createPageUrl } from "@/utils";
import { prefixFor, parsePath } from "@/lib/i18n";
import { hasCaseStudies } from "@/lib/caseStudies";
import { CTA_PRIMARY, CTA_LOCATIONS } from "@/lib/cta";
import { track, trackCta, EVENTS } from "@/lib/analytics";

// Sprint 8 §5. Five primary destinations before the utility controls:
//
//   Logo | Services ▾ | Selected Work | Insights | About | Contact | EN ▾ | [Book a Data Health Check]
//
// What left the primary nav and why:
//   Process   → About / How We Work, and embedded on each solution page. It is
//               methodology, and methodology is reassurance you read after you
//               believe there is a problem, not a first-level destination.
//   Workshop  → under Insights. Its commercial role is unclear (§14) and it was
//               occupying a slot that About needed.
//   Company ▾ → dissolved. About is now top-level because it is the trust
//               destination; Locations and Careers moved to the footer.
//   EN/FR/ES/PT → one language control. Four buttons spent four slots to be
//               wrong three times for every visitor.
export default function Header({ currentPageName, language }) {
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { slug } = parsePath(location.pathname);
  const prefix = prefixFor(language);

  // Close the drawer on navigation, and lock body scroll while it is open (§11).
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const navItems = [
    ...(hasCaseStudies() ? [{ id: 'selected_work', label: t.navSelectedWork, page: 'CaseStudies' }] : []),
    { id: 'insights', label: t.insightsEyebrow, page: 'Insights' },
    { id: 'about', label: t.navAbout, page: 'About' },
    { id: 'contact', label: t.navContact, page: 'Contact' },
  ];

  const isActive = (page) => currentPageName === page;

  const navClick = (id, device) => {
    track(EVENTS.NAV_ITEM_CLICK, { item: id, parent_menu: 'primary', device_type: device, language });
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link to={`${prefix}/`} onClick={() => window.scrollTo(0, 0)} className="shrink-0">
            <img src="/pawa-logo.webp" alt="PaWa Data Solutions" width="120" height="48" className="h-11 w-auto" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            <ServicesMenu language={language} deviceType="desktop" />
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={createPageUrl(item.page, language)}
                aria-current={isActive(item.page) ? 'page' : undefined}
                onClick={() => navClick(item.id, 'desktop')}
                className={`py-2 font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.page)
                    ? 'text-blue-600 underline decoration-2 underline-offset-8'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageMenu language={language} currentSlug={slug} />
            </div>

            {/* Persistent primary CTA on desktop, compact on mobile (§3). */}
            <Link
              to={createPageUrl('HealthCheck', language)}
              onClick={() => {
                trackCta({ label: CTA_PRIMARY, location: CTA_LOCATIONS.HEADER, page: currentPageName, language });
                window.scrollTo(0, 0);
              }}
              className="rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-4"
            >
              <span className="hidden xl:inline">{t.heroCtaPrimary}</span>
              <span className="xl:hidden">{t.navHealthCheckShort}</span>
            </Link>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? t.navMenuClose : t.navMenuOpen}
              onClick={() => {
                if (!isMenuOpen) track(EVENTS.NAV_OPEN, { menu: 'drawer', device_type: 'mobile', language });
                setIsMenuOpen((v) => !v);
              }}
              className="rounded-lg border border-gray-300 p-2 text-gray-700 lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer. Practices expand one level only (§5) — they are plain
            links, so there is no nested disclosure to get lost inside. */}
        <div hidden={!isMenuOpen} className="border-t border-gray-200 py-4 lg:hidden">
          <nav aria-label="Mobile">
            <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {t.navServicesMenu}
            </p>
            <ul className="mb-4 list-none space-y-1 p-0 m-0">
              {PRACTICES.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`${prefix}${p.href}`}
                    onClick={() => navClick(p.id, 'mobile')}
                    className="block rounded-lg px-3 py-3 text-gray-800 hover:bg-gray-50"
                  >
                    {t[p.labelKey]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={`${prefix}/data-health-check/`}
                  onClick={() => navClick('health_check', 'mobile')}
                  className="block rounded-lg px-3 py-3 font-medium text-blue-700 hover:bg-blue-50"
                >
                  {t.hcTitle}
                </Link>
              </li>
            </ul>

            <ul className="list-none space-y-1 border-t border-gray-200 p-0 pt-3 m-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={createPageUrl(item.page, language)}
                    aria-current={isActive(item.page) ? 'page' : undefined}
                    onClick={() => navClick(item.id, 'mobile')}
                    className={`block rounded-lg px-3 py-3 ${
                      isActive(item.page) ? 'font-medium text-blue-600' : 'text-gray-800'
                    } hover:bg-gray-50`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <LanguageMenu language={language} currentSlug={slug} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
