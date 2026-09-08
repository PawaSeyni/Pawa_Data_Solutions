import React from "react";
import { ArrowUpRight, Check, UserCheck, ShieldCheck, Scale, GraduationCap } from "lucide-react";
import { translations } from "@/components/translations";
import PrimaryCta from "@/components/PrimaryCta";
import { CTA_LOCATIONS } from "@/lib/cta";
import { prefixFor } from "@/lib/i18n";
import { SITE_URL } from "@/lib/jobPostings";
import { trackCta } from "@/lib/analytics";

// The four boutique differentiators from the Sprint 2 brief. Ordered as an
// argument rather than a list: who does the work, who answers for it, whose
// interest the advice serves, and what you keep afterwards.
const BOUTIQUE = [
  { icon: UserCheck,      titleKey: 'boutique1Title', descKey: 'boutique1Desc' },
  { icon: ShieldCheck,    titleKey: 'boutique2Title', descKey: 'boutique2Desc' },
  { icon: Scale,          titleKey: 'boutique3Title', descKey: 'boutique3Desc' },
  { icon: GraduationCap,  titleKey: 'boutique4Title', descKey: 'boutique4Desc' },
];

const PRINCIPLES = ['aboutPrinciple1', 'aboutPrinciple2', 'aboutPrinciple3', 'aboutPrinciple4'];

const PAPA_BIO = [
  'aboutP1', 'aboutP2', 'aboutP3', 'aboutP4', 'aboutP5',
  'aboutP6', 'aboutP7', 'aboutP8', 'aboutP9', 'aboutP10',
];

const CREDENTIALS = [
  "CISSP",
  "TOGAF",
  "Microsoft Azure",
  "Informatica Certified",
  "BSc Computer Science",
];

// Person schema, not Organization. This is the entity Google needs in order to
// connect "Papa S. Nguer" to PaWa Data Solutions, and it is the one place where
// papanguer.com genuinely belongs in a sameAs — as the person's own site. It was
// deliberately kept out of the Organization block in index.html, where listing
// it would have conflated a firm with an individual.
function personSchema(t, language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Papa S. Nguer',
    jobTitle: t.aboutRole,
    image: `${SITE_URL}/papa-nguer.jpg`,
    description: t.aboutP1,
    worksFor: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    knowsLanguage: ['en', 'fr'],
    url: `${SITE_URL}${prefixFor(language)}/about/`,
    sameAs: [
      'https://papanguer.com/',
      'https://www.linkedin.com/in/papa-nguer-14ba6240',
    ],
  };
}

function jasonSchema(t, language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jason Thien Vo',
    jobTitle: t.jasonRole,
    image: `${SITE_URL}/jason-vo.jpg`,
    description: t.aboutJasonP1,
    worksFor: { '@type': 'Organization', name: 'PaWa Data Solutions', url: SITE_URL },
    url: `${SITE_URL}${prefixFor(language)}/about/`,
    // Parity with the other principal, whose LinkedIn also lives in sameAs
    // rather than as a rendered link on this page.
    sameAs: ['https://www.linkedin.com/in/jasonthienvo'],
  };
}

export default function About({ language }) {
  const t = translations[language];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(t, language)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jasonSchema(t, language)) }}
      />

      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
            {t.aboutEyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            {t.aboutTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{t.aboutIntro}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-8 mb-10">
            <picture className="shrink-0">
              <source srcSet="/papa-nguer.webp" type="image/webp" />
              <img
                src="/papa-nguer.jpg"
                alt="Papa S. Nguer"
                width="400"
                height="400"
                className="h-40 w-40 rounded-xl object-cover shadow-sm"
              />
            </picture>
            <div className="self-center">
              <h2 className="text-2xl font-bold text-gray-900">Papa S. Nguer</h2>
              <p className="text-gray-600">{t.aboutRole}</p>
              <p className="mt-1 text-sm text-gray-500">{t.aboutPapaFocus}</p>
            </div>
          </div>

          {/* Rendered from a list rather than four hand-written <p> tags: the bio
              has grown from four paragraphs to ten, and a fixed set of tags is
              how a paragraph gets silently dropped when the copy changes again. */}
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-gray-700">
            {PAPA_BIO.map((k) => <p key={k}>{t[k]}</p>)}
          </div>

          {/* The Tier 1 names above were earned at Informatica. Saying so plainly is
              the difference between a credential and an implied client reference —
              a reader should not be able to come away thinking this firm delivered
              them. Same standard the case-study process applies. */}
          <p className="mt-7 max-w-3xl border-l-2 border-gray-300 pl-4 text-base text-gray-500">
            {t.aboutPriorNote}
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {t.aboutCredsTitle}
              </h2>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {CREDENTIALS.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {t.aboutLinksTitle}
              </h2>
              <ul className="space-y-2 list-none p-0 m-0">
                {[
                  { href: 'https://papanguer.com/writing/', label: t.aboutLinkWriting, id: 'about_writing' },
                  { href: 'https://papanguer.com/', label: t.aboutLinkProfile, id: 'about_profile' },
                ].map(({ href, label, id }) => (
                  <li key={id}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCta({ label: id, location: 'about', page: 'About', language })}
                      className="inline-flex max-w-full flex-wrap items-center gap-1.5 text-blue-600 hover:underline"
                    >
                      {label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second principal, placed AFTER the credentials and links grid, not
              before it. Those belong to Papa — CISSP, TOGAF, papanguer.com — and
              sitting them under Jason's bio silently attributed another person's
              certifications to him. Same treatment otherwise: photo, name, role,
              bio, because a co-founder listed as a footnote reads as an
              afterthought. No LinkedIn link: none was supplied, and a guessed
              profile URL on a named person is worse than no link. */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <div className="mb-10 flex flex-col gap-8 sm:flex-row">
              <picture className="shrink-0">
                <source srcSet="/jason-vo.webp" type="image/webp" />
                <img
                  src="/jason-vo.jpg"
                  alt="Jason Thien Vo"
                  width="400"
                  height="400"
                  loading="lazy"
                  className="h-40 w-40 rounded-xl object-cover shadow-sm"
                />
              </picture>
              <div className="self-center">
                <h2 className="text-2xl font-bold text-gray-900">Jason Thien Vo</h2>
                <p className="text-gray-600">{t.jasonRole}</p>
              </div>
            </div>

            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-gray-700">
              <p>{t.aboutJasonP1}</p>
              <p>{t.aboutJasonP2}</p>
            </div>
          </div>

          {/* Origin before model: the reason the firm works this way is more
              persuasive than the way itself, and it is the part a large
              competitor cannot copy. */}
          <div className="mt-16 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{t.aboutOriginTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{t.aboutOriginBody}</p>
          </div>

          <div className="mt-14">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">{t.aboutModelTitle}</h2>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-700">{t.aboutModelBody}</p>

            <ul className="grid gap-6 sm:grid-cols-2 list-none p-0 m-0">
              {BOUTIQUE.map(({ icon: Icon, titleKey, descKey }) => (
                <li key={titleKey} className="rounded-xl border border-gray-200 bg-white p-6">
                  <Icon className="mb-3 h-6 w-6 text-blue-600" aria-hidden="true" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{t[titleKey]}</h3>
                  <p className="text-gray-600 leading-relaxed">{t[descKey]}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{t.aboutPrinciplesTitle}</h2>
            <ul className="list-none p-0 m-0 space-y-3">
              {PRINCIPLES.map((k) => (
                <li key={k} className="flex gap-3 text-lg leading-relaxed text-gray-700">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="min-w-0">{t[k]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.aboutCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.aboutCtaBody}</p>
            <PrimaryCta language={language} page="About" location={CTA_LOCATIONS.PAGE_END} />
          </div>
        </div>
      </section>
    </>
  );
}
