import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import PrimaryCta from "@/components/PrimaryCta";
import { CTA_LOCATIONS } from "@/lib/cta";
import { PRACTICES } from "@/lib/practices";
import { prefixFor } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

// Index for the six pages under /solutions/.
//
// Moving those pages under a /solutions/ prefix turned that path into a 404 for
// anyone who trims the URL, which is a reasonable thing for a reader to do. It
// also gives the six pages somewhere to link from — the redesign plan asks for
// internal linking between solution pages, and a section index is the honest
// version of that rather than cross-linking every page to every other.
export default function Solutions({ language }) {
  const t = translations[language];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
              {t.solutionsEyebrow}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              {t.solutionsTitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.solutionsSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Five practices, matching the header, homepage and footer. This page
              still listed six peer services after Sprint 8 introduced the
              five-practice model — an indexed discovery page contradicting the
              navigation a visitor had just used to arrive. Integration & Data
              Engineering carries its second deep page as a secondary link rather
              than appearing as a sixth practice. */}
          <ul className="grid list-none gap-6 p-0 m-0 md:grid-cols-2">
            {PRACTICES.map((pr, i) => (
              <li key={pr.id} className={i === PRACTICES.length - 1 ? 'md:col-span-2' : ''}>
                <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-colors hover:border-blue-300">
                  <h2 className="mb-2 text-xl font-semibold text-gray-900">{t[pr.labelKey]}</h2>
                  <p className="mb-3 text-gray-600">{t[pr.blurbKey]}</p>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500">{t[pr.capabilityKey]}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <Link
                      to={`${prefixFor(language)}${pr.href}`}
                      onClick={() => {
                        trackCta({ label: pr.id, location: 'solutions_hub', page: 'Solutions', language });
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex max-w-full flex-wrap items-center gap-2 font-medium text-blue-600 hover:underline"
                    >
                      {t.ctaExplore}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {pr.alsoHref && (
                      <Link
                        to={`${prefixFor(language)}${pr.alsoHref}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                      >
                        {t[pr.alsoKey]}
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.solutionsCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.solutionsCtaBody}</p>
            <PrimaryCta language={language} page="Solutions" location={CTA_LOCATIONS.PAGE_END} />
          </div>
        </div>
      </section>
    </>
  );
}
