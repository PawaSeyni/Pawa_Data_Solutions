import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { translations } from "@/components/translations";
import { LOCATIONS } from "@/lib/locations";
import { prefixFor } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

const REGION_KEY = {
  northAmerica: 'locationsRegionNorthAmerica',
  europe: 'locationsRegionEurope',
  africa: 'locationsRegionAfrica',
};

// Grouped by region rather than listed flat, because the regions are the same
// three named in areaServed and in the homepage contact block. A visitor
// checking "do they work where I am" gets the answer from the headings.
const REGION_ORDER = ['northAmerica', 'europe', 'africa'];

export default function Locations({ language }) {
  const t = translations[language];
  const byRegion = REGION_ORDER
    .map((region) => [region, LOCATIONS.filter((l) => l.region === region)])
    .filter(([, list]) => list.length > 0);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
            {t.locationsEyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            {t.locationsTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {t.locationsSubtitle}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4">
          {byRegion.map(([region, list]) => (
            <div key={region} className="mb-12 last:mb-0">
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {t[REGION_KEY[region]]}
              </h2>
              <ul className="grid gap-5 sm:grid-cols-2 list-none p-0 m-0">
                {list.map((l) => (
                  <li
                    key={l.id}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{l.city}</h3>
                        <p className="text-gray-600">{l.country}</p>
                      </div>
                      {l.primary && (
                        <span className="ml-auto rounded-full border border-gray-300 px-2.5 py-0.5 text-xs text-gray-600">
                          {t.locationsPrimaryTag}
                        </span>
                      )}
                    </div>
                    <dl className="mt-4 space-y-1.5 text-sm">
                      <div className="flex gap-2">
                        <dt className="w-36 shrink-0 text-gray-500">{t.locationsTimezone}</dt>
                        <dd className="text-gray-700 m-0">{l.timezone}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-36 shrink-0 text-gray-500">{t.locationsLanguages}</dt>
                        <dd className="text-gray-700 m-0">{l.languages.join(', ')}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-14 rounded-xl border border-gray-200 bg-gray-50/60 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{t.locationsCtaTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t.locationsCtaBody}</p>
            <Link
              to={`${prefixFor(language)}/#contact`}
              onClick={() => trackCta({ label: 'health_check_locations', location: 'locations', page: 'Locations', language })}
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
