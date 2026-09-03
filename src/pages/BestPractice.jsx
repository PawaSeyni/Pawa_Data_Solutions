import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, AlertTriangle } from "lucide-react";
import { translations } from "@/components/translations";
import PrimaryCta from "@/components/PrimaryCta";
import { CTA_LOCATIONS } from "@/lib/cta";
import { bestPracticeBySlug } from "@/lib/bestPractices";
import { SOLUTIONS } from "@/lib/solutions";
import { createPageUrl } from "@/utils";
import { prefixFor, parsePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/jobPostings";

// Best practice template — the structure the brief specifies: purpose, audience,
// principles, implementation guidance, checklist, pitfalls, references.
//
// The checklist is the point. §7 asks for useful artifacts over content volume,
// and the difference between a blog post and an artifact is whether a reader can
// take something away and use it on Monday. It renders last-but-one, styled to
// be the part of the page you would actually copy.
//
// Author and dates are rendered in the byline because §5 requires every piece to
// carry both, and an updated date is shown whenever it differs from published.
// Module scope, not the render body: a component declared inside render is a new
// type every pass, so React remounts instead of updating.
function List({ title, items, icon: Icon, tone = 'text-blue-600' }) {
  if (!items?.length) return null;
  return (
    <>
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h2>
      <ul className="mb-10 list-none p-0 m-0 space-y-2.5">
        {items.map((x) => (
          <li key={x} className="flex gap-3 text-lg leading-relaxed text-gray-700">
            <Icon className={`mt-1.5 h-4 w-4 shrink-0 ${tone}`} aria-hidden="true" />
            <span className="min-w-0">{x}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function BestPractice({ language }) {
  const t = translations[language];
  const { slug } = parsePath(useLocation().pathname);
  const bp = bestPracticeBySlug(slug.replace(/^insights\/best-practices\//, ''));

  if (!bp) return null;

  const related = SOLUTIONS.filter((s) => (bp.solutions || []).includes(s.page));
  const fmt = (iso) => {
    const map = { en: 'en-CA', fr: 'fr-CA', es: 'es-ES', pt: 'pt-BR' };
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString(map[language] || 'en-CA', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: bp.title,
    description: bp.purpose,
    datePublished: bp.published,
    ...(bp.updated ? { dateModified: bp.updated } : {}),
    author: { '@type': 'Person', name: bp.author },
    publisher: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}${prefixFor(language)}/insights/best-practices/${bp.slug}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 lg:py-20">
          <Link
            to={createPageUrl('Insights', language)}
            onClick={() => window.scrollTo(0, 0)}
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.insightsEyebrow}
          </Link>

          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
            {t.insightsFilterPractices}
          </p>
          <h1 className="mb-5 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">{bp.title}</h1>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">{bp.purpose}</p>
          <p className="text-sm text-gray-500">
            {bp.author} · {fmt(bp.published)}
            {bp.updated && bp.updated !== bp.published && ` · ${t.bpUpdated} ${fmt(bp.updated)}`}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.bpAudience}</h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-700">{bp.audience}</p>

          <List title={t.bpPrinciples} items={bp.principles} icon={Check} />
          <List title={t.bpGuidance} items={bp.guidance} icon={ArrowRight} />

          {bp.checklist?.length > 0 && (
            <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50/60 p-7">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{t.bpChecklist}</h2>
              <ul className="list-none p-0 m-0 space-y-3">
                {bp.checklist.map((c) => (
                  <li key={c} className="flex gap-3 text-gray-700">
                    <span
                      className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-gray-400"
                      aria-hidden="true"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <List title={t.bpPitfalls} items={bp.pitfalls} icon={AlertTriangle} tone="text-amber-500" />

          {bp.references?.length > 0 && (
            <>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.bpReferences}</h2>
              <ul className="mb-10 list-none p-0 m-0 space-y-2">
                {bp.references.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full flex-wrap items-center gap-1.5 text-blue-600 hover:underline"
                    >
                      {r.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </>
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
            <PrimaryCta language={language} page="BestPractice" location={CTA_LOCATIONS.PAGE_END} />
          </div>
        </div>
      </section>
    </>
  );
}
