import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import { featuredCaseStudies, hasCaseStudies } from "@/lib/caseStudies";
import { SOLUTIONS } from "@/lib/solutions";
import { createPageUrl } from "@/utils";
import { prefixFor } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

// Homepage proof block — Sprint 1's first deliverable. Three compact cards, each
// carrying sector, problem, intervention, outcome and the capability it relates
// to, per the brief.
//
// Renders nothing when there are no case studies, so the homepage never shows an
// empty proof section. That is the one place a gap would be actively misleading.
export default function SelectedWork({ language }) {
  const t = translations[language];
  if (!hasCaseStudies()) return null;

  const studies = featuredCaseStudies(language);

  return (
    <section id="selected-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.selectedWorkTitle}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.selectedWorkSubtitle}</p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3 list-none p-0 m-0">
          {studies.map((c) => {
            const capability = SOLUTIONS.find((s) => s.page === (c.solutions || [])[0]);
            return (
              <li
                key={c.slug}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">{c.sector}</p>

                <dl className="m-0 flex-1 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-gray-900">{t.selectedWorkProblem}</dt>
                    <dd className="m-0 text-gray-600">{c.card.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">{t.selectedWorkIntervention}</dt>
                    <dd className="m-0 text-gray-600">{c.card.intervention}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">{t.selectedWorkOutcome}</dt>
                    <dd className="m-0 text-gray-600">{c.card.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-gray-100 pt-4">
                  {capability && (
                    <Link
                      to={createPageUrl(capability.page, language)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      {t[capability.titleKey]}
                    </Link>
                  )}
                  <Link
                    to={`${prefixFor(language)}/case-studies/${c.slug}/`}
                    onClick={() => {
                      trackCta({ label: c.slug, location: 'home_selected_work', page: 'Home', language });
                      window.scrollTo(0, 0);
                    }}
                    className="mt-2 flex items-center gap-2 font-medium text-blue-600 hover:underline"
                  >
                    {t.caseStudiesRead}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <Link
            to={`${prefixFor(language)}/case-studies/`}
            onClick={() => {
              trackCta({ label: 'all_case_studies', location: 'home_selected_work', page: 'Home', language });
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 font-medium text-gray-700 hover:text-blue-600"
          >
            {t.selectedWorkAll}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
