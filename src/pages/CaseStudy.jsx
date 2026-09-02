import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { translations } from "@/components/translations";
import { caseStudyBySlug } from "@/lib/caseStudies";
import { SOLUTIONS } from "@/lib/solutions";
import { createPageUrl, } from "@/utils";
import { prefixFor, parsePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/jobPostings";
import { trackCta } from "@/lib/analytics";

// One approved engagement. Structure follows the redesign plan's case-study
// entity: challenge, approach, outcomes, verified metrics, related solutions.
//
// Metrics render their basis and who confirmed them, visible on the page rather
// than buried in a data file. If a figure is ever challenged, the page itself
// says how it was measured and who stood behind it.
export default function CaseStudy({ language }) {
  const t = translations[language];
  const { slug } = parsePath(useLocation().pathname);
  const study = caseStudyBySlug(slug.replace(/^case-studies\//, ''));

  if (!study) return null;

  const related = SOLUTIONS.filter((s) => (study.solutions || []).includes(s.page));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.client} — ${study.sector}`,
    description: study.challenge,
    datePublished: study.approvedOn,
    author: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}${prefixFor(language)}/case-studies/${study.slug}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-3xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">{study.sector}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">{study.client}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{study.challenge}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          {study.metrics?.length > 0 && (
            <div className="mb-12 rounded-xl border border-gray-200 bg-white p-7">
              <dl className="grid gap-7 sm:grid-cols-2">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <dd className="m-0 text-3xl font-bold text-gray-900 tabular-nums">{m.value}</dd>
                    <dt className="mt-1 font-medium text-gray-700">{m.label}</dt>
                    <p className="mt-1 text-sm text-gray-500">{m.basis}</p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      {t.caseStudyConfirmedBy} {m.confirmedBy}
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.caseStudyApproach}</h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-700">{study.approach}</p>

          {study.outcomes?.length > 0 && (
            <>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.caseStudyOutcomes}</h2>
              <ul className="mb-10 list-none p-0 m-0 space-y-2">
                {study.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-lg text-gray-700">
                    <Check className="mt-1.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {study.quote && (
            <blockquote className="mb-10 border-l-4 border-blue-200 pl-6">
              <p className="text-xl italic leading-relaxed text-gray-800">{study.quote}</p>
              <footer className="mt-2 text-gray-500">— {study.quoteAttribution}</footer>
            </blockquote>
          )}

          {related.length > 0 && (
            <>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {t.caseStudyRelated}
              </h2>
              <ul className="mb-12 flex flex-wrap gap-2 list-none p-0 m-0">
                {related.map((r) => (
                  <li key={r.page}>
                    <Link
                      to={createPageUrl(r.page, language)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
                    >
                      {t[r.titleKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.solutionsCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.solutionsCtaBody}</p>
            <Link
              to={`${prefixFor(language)}/#contact`}
              onClick={() => trackCta({ label: 'health_check_case', location: 'case_study', page: 'CaseStudy', language })}
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
