import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { translations } from "@/components/translations";
import PrimaryCta from "@/components/PrimaryCta";
import { CTA_LOCATIONS } from "@/lib/cta";
import { PARTNERS, PARTNER_TYPE_KEY } from "@/lib/partners";
import { createPageUrl } from "@/utils";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

// Every card renders deterministically from static data, which is what the
// post-build hydration gate requires: no random ordering, no mount-effect
// output, and a fixed-height mark area so a logo arriving later cannot shift
// the layout. A partner with no approved logo file yet renders a typographic
// name tile in that same fixed-height area.
export default function Partners({ language }) {
  const t = translations[language];
  const blurbFor = (p) => p.blurb[language] || p.blurb[DEFAULT_LANGUAGE];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
            {t.partnersEyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            {t.partnersTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {t.partnersSubtitle}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="grid gap-5 sm:grid-cols-2 list-none p-0 m-0">
            {PARTNERS.map((p) => (
              <li
                key={p.id}
                className={
                  p.featured
                    // Full-width banner: mark on the left, copy on the right.
                    ? "sm:col-span-2 flex flex-col gap-6 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50/60 to-white p-8 shadow-sm lg:flex-row lg:items-center lg:gap-12 lg:p-10"
                    : "flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                }
              >
                <div className={p.featured ? "flex items-start justify-between gap-4 lg:w-1/3 lg:flex-col lg:items-start lg:gap-4" : "mb-4 flex items-start justify-between gap-4"}>
                  <div className={p.featured ? "flex h-20 items-center" : "flex h-14 items-center"}>
                    {p.logo ? (
                      <picture>
                        <source srcSet={p.logo.webp} type="image/webp" />
                        <img src={p.logo.png} alt={p.name} width={p.logo.width} height={p.logo.height} className={p.featured ? "h-16 w-auto" : "h-10 w-auto"} />
                      </picture>
                    ) : (
                      <span className={p.featured ? "text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl" : "text-2xl font-bold tracking-tight text-gray-900"}>{p.name}</span>
                    )}
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-gray-300 px-2.5 py-0.5 text-xs text-gray-600">
                    {t[PARTNER_TYPE_KEY[p.type]]}
                  </span>
                </div>
                <div className={p.featured ? "flex flex-col lg:flex-1" : "contents"}>
                  <p className={p.featured ? "text-lg text-gray-600 leading-relaxed m-0" : "flex-grow text-gray-600 leading-relaxed m-0"}>{blurbFor(p)}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.partnersVisit}: ${p.name}`}
                    onClick={() => trackCta({ label: p.id, location: 'partners_grid', page: 'Partners', language })}
                    className="mt-5 inline-flex items-center gap-1 self-start font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline"
                  >
                    {t.partnersVisit}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.partnersCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.partnersCtaBody}</p>
            <PrimaryCta language={language} page="Partners" location={CTA_LOCATIONS.PAGE_END} />
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            <Link
              to={createPageUrl('Contact', language)}
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600"
            >
              {t.partnersBecome}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
