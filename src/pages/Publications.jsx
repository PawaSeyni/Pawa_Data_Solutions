import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { translations } from "@/components/translations";
import { PUBLICATIONS, BOOKS_INDEX } from "@/lib/writing";
import { trackCta } from "@/lib/analytics";

// Every field here — ISBNs, page counts, publishers, purchase links — is taken
// from papanguer.com rather than written fresh. Those are exactly the details
// that must not be approximated, and the Amazon links were checked to resolve
// before being added.
export default function Publications({ language }) {
  const t = translations[language];
  const label = (status) =>
    status === 'available' ? t.publicationsAvailable : t.publicationsForthcoming;

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">{t.publicationsEyebrow}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">{t.publicationsTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{t.publicationsSubtitle}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="list-none p-0 m-0 space-y-6">
            {PUBLICATIONS.map((b) => (
              <li key={b.id} className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <BookOpen className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      b.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : 'border border-gray-300 text-gray-600'
                    }`}
                  >
                    {label(b.status)}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{b.title}</h2>
                <p className="mb-3 text-lg text-gray-600">{b.subtitle}</p>
                <p className="mb-4 leading-relaxed text-gray-700">{b.description}</p>
                <p className="mb-4 text-sm text-gray-500">{b.meta}</p>
                {b.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {b.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackCta({ label: `buy_${b.id}`, location: 'publications', page: 'Publications', language })}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={BOOKS_INDEX}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta({ label: 'all_publications', location: 'publications', page: 'Publications', language })}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:border-gray-900"
            >
              {t.publicationsAll}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
