import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { LANGUAGES, LANGUAGE_NAMES, localizedPath, prefixFor } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import CompanyMenu from "@/components/CompanyMenu";
import { trackCta } from "@/lib/analytics";
import { translations } from "@/components/translations";
import { hasCaseStudies } from "@/lib/caseStudies";
import { Button } from "@/components/ui/button";

export default function Header({ currentPageName, language }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const t = translations[language];

  // Switching locale keeps you on the same page and changes the URL, so the
  // address bar always matches the language on screen and the result is linkable.
  const switchLanguage = (lang) => {
    setIsMenuOpen(false);
    navigate(localizedPath(currentPageName, lang));
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    // If not on the home page, navigate there first.
    if (currentPageName !== 'Home') {
      navigate(`${prefixFor(language)}/`);
    }
    
    // Scroll to the section after a brief delay to allow the page to render.
    // This works reliably even if already on the home page.
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  // Company groups the pages a buyer checks when deciding whether to trust the
  // firm, rather than what it sells. Careers moves in here off the top level,
  // which it was cluttering — very few visitors arrive looking for a job.
  //
  // Each item has a real destination. Awards & Recognition from the reference
  // design was dropped on Papa's call — there are none to list, and an empty
  // awards page invites the kind of invention this site has removed once.
  // Blog and Publications merged into Insights (Sprint 3) and moved to the main
  // nav. Articles remain canonical on papanguer.com — this domain indexes and
  // links, that one publishes — which keeps the thought-leadership decision
  // intact while giving the section a single front door.
  const companyItems = [
    { id: 'about',        label: t.footerAbout,      page: 'About' },
    { id: 'locations',    label: t.navLocations,     page: 'Locations' },
    { id: 'careers',      label: t.navCareers,       page: 'Careers' },
  ];

  // Selected Work sits in the main nav rather than under Company: it is proof,
  // and proof is what a prospect is looking for. Gated on there being any, so the
  // nav never points at an empty index.
  const navItems = [
    { label: t.navServices, id: "services" },
    { label: t.navProcess, id: "process" },
    ...(hasCaseStudies() ? [{ label: t.caseStudiesEyebrow, page: "CaseStudies" }] : []),
    // Insights left the Company dropdown in Sprint 3. Blog and Publications were
    // two thin entries buried a level down; one hub at the top level is both the
    // consolidation the brief asks for and a fairer reflection of the section.
    { label: t.insightsEyebrow, page: "Insights" },
    { label: t.navWorkshop, page: "Workshop" },
    { label: t.footerCompanyTitle, company: true },
    { label: t.navContact, id: "contact" }
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <Link to={`${prefixFor(language)}/`} className="flex items-center">
            <picture>
              <source srcSet="/pawa-logo.webp" type="image/webp" />
              <img
                src="/pawa-logo.png"
                alt="PaWa Data Solutions"
                width="240"
                height="360"
                className="h-32 w-auto"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navItems.map(item => (
                <li key={item.label}>
                  {item.company ? (
                    <CompanyMenu language={language} label={item.label} items={companyItems} />
                  ) : item.page ? (
                    <Link 
                      to={createPageUrl(item.page, language)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1" role="group" aria-label="Select language">
              {LANGUAGES.map(lang => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  aria-label={`${lang.toUpperCase()} — ${LANGUAGE_NAMES[lang]}`}
                  aria-pressed={language === lang}
                  className={`px-2 py-1.5 text-sm border rounded-full transition-all ${
                    language === lang
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {navItems.map(item => (
                  <li key={item.label}>
                    {/* On mobile the Company group is a labelled, indented list
                        rather than a dropdown. A menu inside an already-open menu
                        is an extra tap for no gain, and the whole list fits. */}
                    {item.company ? (
                      <>
                        <span className="block py-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                          {item.label}
                        </span>
                        <ul className="ml-3 border-l border-gray-200 pl-3 list-none m-0">
                          {companyItems.map(sub => (
                            <li key={sub.id}>
                              {sub.external ? (
                                <a
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    trackCta({ label: sub.id, location: 'nav_company_mobile', page: 'any', language });
                                    setIsMenuOpen(false);
                                  }}
                                  className="text-gray-700 hover:text-blue-600 transition-colors block py-1"
                                >
                                  {sub.label}
                                </a>
                              ) : (
                                <Link
                                  to={createPageUrl(sub.page, language)}
                                  onClick={() => {
                                    trackCta({ label: sub.id, location: 'nav_company_mobile', page: 'any', language });
                                    setIsMenuOpen(false);
                                    window.scrollTo(0, 0);
                                  }}
                                  className="text-gray-700 hover:text-blue-600 transition-colors block py-1"
                                >
                                  {sub.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : item.page ? (
                      <Link 
                        to={createPageUrl(item.page, language)} 
                        onClick={() => {
                          setIsMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="text-gray-700 hover:text-blue-600 transition-colors block py-1"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button 
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer block py-1 text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}