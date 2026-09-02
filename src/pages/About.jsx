import React from "react";
import { ArrowUpRight } from "lucide-react";
import { translations } from "@/components/translations";
import { prefixFor } from "@/lib/i18n";
import { SITE_URL } from "@/lib/jobPostings";
import { trackCta } from "@/lib/analytics";

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

export default function About({ language }) {
  const t = translations[language];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(t, language)) }}
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
            </div>
          </div>

          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-gray-700">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
            <p>{t.aboutP4}</p>
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
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:underline"
                    >
                      {label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
