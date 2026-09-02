import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { prefixFor } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

// Index of approved case studies. Never renders empty — the route is not
// registered at all while CASE_STUDIES is empty, so there is no thin page and
// no nav item pointing at nothing.
export default function CaseStudies({ language }) {
  const t = translations[language];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">{t.caseStudiesEyebrow}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">{t.caseStudiesTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{t.caseStudiesSubtitle}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="list-none p-0 m-0 space-y-6">
            {CASE_STUDIES.map((c) => (
              <li key={c.slug} className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">{c.sector}</p>
                <h2 className="mb-1 text-2xl font-semibold text-gray-900">{c.headline}</h2>
                <p className="mb-3 text-gray-500">{c.client}</p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">{c.challenge}</p>
                {c.metrics?.length > 0 && (
                  <dl className="mb-5 flex flex-wrap gap-x-10 gap-y-3">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-sm text-gray-500">{m.label}</dt>
                        <dd className="m-0 text-2xl font-bold text-gray-900 tabular-nums">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <Link
                  to={`${prefixFor(language)}/case-studies/${c.slug}/`}
                  onClick={() => {
                    trackCta({ label: c.slug, location: 'case_studies_index', page: 'CaseStudies', language });
                    window.scrollTo(0, 0);
                  }}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  {t.caseStudiesRead}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm leading-relaxed text-gray-500">{t.caseStudyProvenance}</p>

          <div className="mt-14 rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.solutionsCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.solutionsCtaBody}</p>
            <Link
              to={`${prefixFor(language)}/#contact`}
              onClick={() => trackCta({ label: 'health_check_cases', location: 'case_studies_index', page: 'CaseStudies', language })}
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
