import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import ProofCard from "@/components/solution/ProofCard";
import {
  Section, SectionHead, ProblemSignals, ConsequenceFlow, TransformationTable,
  CapabilityGrid, ReferenceArchitecture, DeliverablesGrid, EngagementProcess,
  TechnologyExperience, SolutionFAQ,
} from "@/components/solution/Sections";
import { TEAM } from "@/lib/team";
import { solutionFor } from "@/lib/deepSolutions";
import { createPageUrl } from "@/utils";
import { prefixFor, parsePath } from "@/lib/i18n";
import { CTA_LOCATIONS } from "@/lib/cta";
import { SITE_URL } from "@/lib/jobPostings";
import { track, trackCta, EVENTS } from "@/lib/analytics";

// The single renderer for every deep solution page. Sprint 7 §13: "implemented
// from shared components/content structures rather than six bespoke layouts."
//
// It reads a content object and renders the fourteen sections in order. Adding a
// solution page is a data change — there is no second copy of this file, and no
// page-specific branch in it.
export default function DeepSolution({ language }) {
  const t = translations[language];
  const { slug } = parsePath(useLocation().pathname);
  const c = solutionFor(slug, language);

  useEffect(() => {
    if (c) track(EVENTS.SOLUTION_VIEW, { solution: c.slug, landing_page: slug, language });
  }, [c, slug, language]);

  if (!c) return null;

  const member = TEAM[0];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: c.h1,
        serviceType: c.category,
        description: c.subhead,
        provider: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
        areaServed: ['CA', 'US', 'CH', 'SN'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.navSolutions || 'Solutions', item: `${SITE_URL}${prefixFor(language)}/solutions/` },
          { '@type': 'ListItem', position: 2, name: c.h1, item: `${SITE_URL}${prefixFor(language)}/${c.slug}/` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  const wrap = 'mx-auto max-w-5xl px-4';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 01 */}
      <Section id="hero" solution={c.slug} language={language} className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className={`${wrap} py-20 lg:py-24`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">{c.eyebrow}</p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">{c.h1}</h1>
          <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">{c.subhead}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Some entry offers already have a page of their own — the Data
                Health Check does. Sending those to a form anchor would ask the
                visitor to enquire about something we have a page explaining. */}
            <Link
              to={c.entryOffer.href ? `${prefixFor(language)}${c.entryOffer.href}` : `${prefixFor(language)}/#contact`}
              onClick={() => {
                track(EVENTS.ENTRY_OFFER_CLICK, { solution: c.slug, offer: c.entryOffer.id, cta_location: 'hero', language });
                window.scrollTo(0, 0);
              }}
              className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 sm:px-7 text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              {c.entryOffer.title}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a href="#capabilities" className="font-medium text-blue-600 hover:underline">
              {t.solutionSeeHow}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">{c.transformation}</p>
        </div>
      </Section>

      {/* 02 */}
      <Section id="signals" solution={c.slug} language={language} className="py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionSignalsTitle} intro={t.solutionSignalsIntro} />
          <ProblemSignals items={c.signals} />
        </div>
      </Section>

      {/* 03 */}
      <Section id="consequences" solution={c.slug} language={language} className="bg-gray-50 py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionConsequencesTitle} />
          <ConsequenceFlow steps={c.consequenceFlow} note={c.consequenceNote} />
        </div>
      </Section>

      {/* 04 */}
      <Section id="transformation" solution={c.slug} language={language} className="py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionTransformationTitle} />
          <TransformationTable rows={c.transformationRows} beforeLabel={t.solutionBefore} afterLabel={t.solutionAfter} />
        </div>
      </Section>

      {/* 05 */}
      <Section id="capabilities" solution={c.slug} language={language} className="bg-gray-50 py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionCapabilitiesTitle} intro={t.solutionCapabilitiesIntro} />
          <CapabilityGrid items={c.capabilities} />
        </div>
      </Section>

      {/* 06 */}
      <Section id="architecture" solution={c.slug} language={language} className="py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={c.architecture.title} />
          <ReferenceArchitecture
            layers={c.architecture.layers}
            crossCutting={c.architecture.crossCutting}
            crossCuttingLabel={t.solutionCrossCutting}
            description={c.architecture.description}
          />
        </div>
      </Section>

      {/* 07 */}
      <Section id="deliverables" solution={c.slug} language={language} className="bg-gray-50 py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionDeliverablesTitle} intro={t.solutionDeliverablesIntro} />
          <DeliverablesGrid items={c.deliverables} />
        </div>
      </Section>

      {/* 08 */}
      <Section id="process" solution={c.slug} language={language} className="py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionProcessTitle} />
          <EngagementProcess steps={c.process} />
        </div>
      </Section>

      {/* 09 */}
      <Section id="proof" solution={c.slug} language={language} className="bg-gray-50 py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionProofTitle} intro={t.solutionProofIntro} />
          <div className="grid gap-6">
            {c.proof.map((p) => (
              <ProofCard key={p.title} language={language} solution={c.slug} {...p} />
            ))}
          </div>
        </div>
      </Section>

      {/* 10 */}
      <Section id="technologies" solution={c.slug} language={language} className="py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionTechTitle} />
          <TechnologyExperience groups={c.technologies} note={t.solutionTechNote} />
        </div>
      </Section>

      {/* 11 */}
      <Section id="practitioner" solution={c.slug} language={language} className="bg-gray-50 py-16 lg:py-20">
        <div className={wrap}>
          <div className="flex flex-col gap-8 rounded-xl border border-gray-200 bg-white p-8 sm:flex-row">
            <picture className="shrink-0">
              <source srcSet={member.photoWebp} type="image/webp" />
              <img src={member.photo} alt={member.name} width="400" height="400" loading="lazy" className="h-28 w-28 rounded-xl object-cover" />
            </picture>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
              <p className="mb-4 text-gray-600">{t.aboutRole}</p>
              <p className="mb-4 max-w-2xl leading-relaxed text-gray-700">{c.practitionerNote}</p>
              <Link
                to={createPageUrl('About', language)}
                onClick={() => {
                  track(EVENTS.PRACTITIONER_CLICK, { solution: c.slug, cta_location: 'practitioner', language });
                  window.scrollTo(0, 0);
                }}
                className="font-medium text-blue-600 hover:underline"
              >
                {t.teamFullProfile}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 12 */}
      <Section id="insight" solution={c.slug} language={language} className="py-16 lg:py-20">
        <div className={wrap}>
          <SectionHead title={t.solutionInsightTitle} />
          <ul className="grid list-none gap-4 p-0 m-0 sm:grid-cols-2">
            {c.relatedInsights.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  target={i.href.startsWith('http') ? '_blank' : undefined}
                  rel={i.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => track(EVENTS.INSIGHT_CLICK, { solution: c.slug, insight_type: i.kind, destination: i.href, language })}
                  className="block rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-blue-400"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">{i.kind}</p>
                  <p className="font-medium text-gray-900">{i.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 12b — cross-links. §12B places specific relationships between the
          practices; a reader on Automation should be able to reach the mastered
          entities that make its workflows unambiguous. */}
      {c.relatedSolutions?.length > 0 && (
        <Section id="related-solutions" solution={c.slug} language={language} className="py-14">
          <div className={wrap}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t.solutionRelatedPractices}
            </h2>
            <ul className="grid list-none gap-4 p-0 m-0 sm:grid-cols-2 lg:grid-cols-3">
              {c.relatedSolutions.map((r) => (
                <li key={r.href}>
                  <Link
                    to={`${prefixFor(language)}${r.href}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block h-full rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-blue-400"
                  >
                    <p className="mb-1 font-medium text-gray-900">{r.label}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{r.why}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* 13 */}
      <Section id="faq" solution={c.slug} language={language} className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHead title={t.solutionFaqTitle} />
          <SolutionFAQ faqs={c.faqs} />
        </div>
      </Section>

      {/* 14 — contextual entry offer, not a generic Contact Us (§13). */}
      <Section id="offer" solution={c.slug} language={language}>
        <div className={`${wrap} pt-16 lg:pt-20`}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center lg:p-10">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl">{c.entryOffer.title}</h2>
            <p className="mx-auto mb-2 max-w-2xl leading-relaxed text-gray-600">{c.entryOffer.body}</p>
            <p className="mx-auto mb-7 max-w-2xl text-sm text-gray-500">{c.entryOffer.note}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {c.entryOffer.href ? (
                <Link
                  to={`${prefixFor(language)}${c.entryOffer.href}`}
                  onClick={() => {
                    track(EVENTS.ENTRY_OFFER_CLICK, { solution: c.slug, offer: c.entryOffer.id, cta_location: 'page_end', language });
                    window.scrollTo(0, 0);
                  }}
                  className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 sm:px-7 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  {c.entryOffer.cta}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              ) : (
                <a
                  href="#contact"
                  onClick={() => track(EVENTS.ENTRY_OFFER_CLICK, { solution: c.slug, offer: c.entryOffer.id, cta_location: 'page_end', language })}
                  className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 sm:px-7 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  {c.entryOffer.cta}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
              {/* Sprint 8 §10 made "Talk to a Practitioner" the secondary CTA
                  tier and gave it a destination — /contact/. This pointed at
                  About until Sprint 7C caught it: a secondary conversion CTA was
                  sending people to a biography instead of a way to make contact. */}
              <Link
                to={createPageUrl('Contact', language)}
                onClick={() => {
                  trackCta({ label: 'talk_to_practitioner', location: CTA_LOCATIONS.PAGE_END, page: c.pageName, language });
                  window.scrollTo(0, 0);
                }}
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                {t.ctaTalkToPractitioner}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* No form here. The page ends at the contextual entry offer plus Talk to
          a Practitioner; the full qualification form lives on /contact/. Having
          both meant a visitor reached a specific assessment CTA and was then
          asked, immediately below, to fill in a general enquiry form — two
          decisions where the page had earned one. */}
    </>
  );
}
