import { ArrowRight, Check, Clock, X } from "lucide-react";
import { translations } from "@/components/translations";
import ContactForm from "@/components/ContactForm";
import { TRIGGERS, SCOPE, OUTPUTS, TIMELINE, NOT_INCLUDED, FAQ, MATRIX_EXAMPLE } from "@/lib/healthCheck";
import { CTA_PRIMARY, CTA_LOCATIONS } from "@/lib/cta";
import { SITE_URL } from "@/lib/jobPostings";
import { scrollToId } from "@/lib/motion";
import { trackCta } from "@/lib/analytics";

// The Data Health Check. §5 asks for one dominant conversion action, so there is
// exactly one: the form at the bottom. Every button above it scrolls to that
// form rather than offering a competing destination.
//
// §7 says do not promise fixed outcomes before an assessment. Nothing here claims
// a result — the promise is about what you will KNOW at the end (what to fix, in
// what order), which is a deliverable rather than an outcome.
export default function HealthCheck({ language }) {
  const t = translations[language];

  const scrollToForm = () => {
    trackCta({ label: CTA_PRIMARY, location: CTA_LOCATIONS.HEALTH_CHECK, page: 'HealthCheck', language });
    scrollToId('book');
  };

  // Service + FAQPage. The FAQ block is eligible for rich results and the
  // answers are the real ones from the page, not a trimmed marketing version.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: t.hcTitle,
        serviceType: 'Data assessment',
        description: t.hcSubtitle,
        provider: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
        areaServed: ['CA', 'US', 'CH', 'SN'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map(({ q, a }) => ({
          '@type': 'Question',
          name: t[q],
          acceptedAnswer: { '@type': 'Answer', text: t[a] },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 py-20 lg:py-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-700">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {t.hcDuration}
          </p>
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">{t.hcTitle}</h1>
          <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">{t.hcSubtitle}</p>
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-lg font-medium text-white transition-colors hover:bg-blue-700"
          >
            {t.heroCtaPrimary}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="mt-3 text-sm text-gray-500">{t.hcHeroNote}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t.hcTriggersTitle}</h2>
          <p className="mb-8 text-lg text-gray-600">{t.hcTriggersIntro}</p>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {TRIGGERS.map((k) => (
              <li key={k} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-5 text-gray-700">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span>{t[k]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t.hcScopeTitle}</h2>
          <p className="mb-8 text-lg text-gray-600">{t.hcScopeIntro}</p>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
            {SCOPE.map(({ icon: Icon, key }) => (
              <li key={key} className="rounded-xl border border-gray-200 bg-white p-6">
                <Icon className="mb-3 h-6 w-6 text-blue-600" aria-hidden="true" />
                <h3 className="mb-1.5 font-semibold text-gray-900">{t[`${key}Title`]}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{t[`${key}Desc`]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t.hcProcessTitle}</h2>
          <p className="mb-8 text-lg text-gray-600">{t.hcProcessIntro}</p>
          <ol className="list-none p-0 m-0 space-y-5">
            {TIMELINE.map((k, i) => (
              <li key={k} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700 tabular-nums">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">{t[`${k}Title`]}</h3>
                  <p className="leading-relaxed text-gray-600">{t[`${k}Desc`]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t.hcOutputsTitle}</h2>
          <p className="mb-8 text-lg text-gray-600">{t.hcOutputsIntro}</p>
          <ul className="mb-12 grid gap-5 sm:grid-cols-2 list-none p-0 m-0">
            {OUTPUTS.map(({ icon: Icon, key }) => (
              <li key={key} className="rounded-xl border border-gray-200 bg-white p-6">
                <Icon className="mb-3 h-6 w-6 text-blue-600" aria-hidden="true" />
                <h3 className="mb-1.5 font-semibold text-gray-900">{t[`${key}Title`]}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{t[`${key}Desc`]}</p>
              </li>
            ))}
          </ul>

          {/* Shape of the output, not anyone's real findings. Labelled so it is
              never mistaken for a client's assessment. */}
          <div className="rounded-xl border border-gray-200 bg-white p-7">
            <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-lg font-semibold text-gray-900">{t.hcMatrixTitle}</h3>
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gray-600">
                {t.caseStudyLabel}
              </span>
            </div>
            <p className="mb-5 text-sm text-gray-500">{t.hcMatrixNote}</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-sm">
                <caption className="sr-only">{t.hcMatrixTitle}</caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-28 p-2 text-left font-medium text-gray-500">
                      {t.hcMatrixRisk}
                    </th>
                    {MATRIX_EXAMPLE.cols.map((c) => (
                      <th key={c} scope="col" className="border-b border-gray-200 p-2 text-left font-semibold text-gray-900">
                        {t[c]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_EXAMPLE.rows.map((r, ri) => (
                    <tr key={r}>
                      <th scope="row" className="border-t border-gray-200 p-2 text-left font-medium text-gray-700">
                        {t[r]}
                      </th>
                      {MATRIX_EXAMPLE.cells[ri].map((cell, ci) => (
                        <td key={ci} className="border-t border-gray-200 p-2 align-top text-gray-600">
                          {cell ? t[cell] : <span className="text-gray-300">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* §5: scope AND non-scope explicit. This sits in the body at full size,
          not folded into the FAQ, because §7 rules out hiding material scope
          limits in fine print. */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t.hcNotTitle}</h2>
          <p className="mb-8 text-lg text-gray-600">{t.hcNotIntro}</p>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {NOT_INCLUDED.map((k) => (
              <li key={k} className="flex gap-3 rounded-lg border border-gray-200 bg-gray-50/60 p-5 text-gray-700">
                <X className="mt-1 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
                <span>{t[k]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">{t.hcFaqTitle}</h2>
          <dl className="m-0 divide-y divide-gray-200 border-t border-gray-200">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="py-6">
                <dt className="mb-2 text-lg font-semibold text-gray-900">{t[q]}</dt>
                <dd className="m-0 leading-relaxed text-gray-600">{t[a]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div id="book">
        <ContactForm
          title={t.hcFormTitle}
          description={t.hcFormBody}
          language={language}
          source="HealthCheck"
          /* No primary CTA here: it would link to the page you are already on.
             This form IS the conversion action for this page. */
          showPrimary={false}
        />
      </div>
    </>
  );
}
