import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import { PRACTICES } from "@/lib/practices";
import { prefixFor } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/analytics";

// Five practice cards. Sprint 8 §7.
//
// Replaces six equal service cards, and the change is not just arithmetic: each
// card leads with the outcome a buyer would recognise, lists its supporting
// capabilities as text, and has one Explore link. §8 asks for "no icon
// dependency", so there are no icons — six identical blue circles were carrying
// no information and made every practice look interchangeable.
//
// The last card spans two columns on wide screens rather than sitting alone in a
// three-up grid, which is what five items in a three-column layout would do.
export default function Practices({ language }) {
  const t = translations[language];
  const prefix = prefixFor(language);

  return (
    <section id="practices" className="border-b border-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            {t.homePracticesTitle}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">{t.homePracticesIntro}</p>
        </div>

        <ul className="grid list-none gap-6 p-0 m-0 md:grid-cols-2">
          {PRACTICES.map((p, i) => (
            <li
              key={p.id}
              className={`flex flex-col rounded-xl border border-gray-200 bg-white p-7 transition-colors hover:border-blue-300 ${
                i === PRACTICES.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{t[p.labelKey]}</h3>
              <p className="mb-4 leading-relaxed text-gray-600">{t[p.blurbKey]}</p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">{t[p.capabilityKey]}</p>
              <Link
                to={`${prefix}${p.href}`}
                onClick={() => {
                  track(EVENTS.PRACTICE_VIEW, { practice: p.id, landing_page: 'Home', language });
                  window.scrollTo(0, 0);
                }}
                className="inline-flex max-w-full flex-wrap items-center gap-2 font-medium text-blue-600 hover:underline"
              >
                {t.ctaExplore}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
