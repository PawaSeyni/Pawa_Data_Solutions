import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import { SOLUTIONS } from "@/lib/solutions";
import { createPageUrl } from "@/utils";
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
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {SOLUTIONS.map(({ page, icon: Icon, titleKey, descKey }) => (
              <li key={page}>
                <Link
                  to={createPageUrl(page, language)}
                  onClick={() => {
                    trackCta({ label: page, location: 'solutions_hub', page: 'Solutions', language });
                    window.scrollTo(0, 0);
                  }}
                  className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg focus-visible:border-blue-500"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </span>
                  <h2 className="mb-2 text-xl font-semibold text-gray-900">{t[titleKey]}</h2>
                  <p className="mb-5 flex-grow text-gray-600">{t[descKey]}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                    {t.solutionsCardCta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.solutionsCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.solutionsCtaBody}</p>
            <Link
              to={`${prefixFor(language)}/#contact`}
              onClick={() => trackCta({ label: 'health_check_hub', location: 'solutions_hub', page: 'Solutions', language })}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              {t.heroCtaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
