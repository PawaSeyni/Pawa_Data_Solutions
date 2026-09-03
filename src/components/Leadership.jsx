import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { translations } from "@/components/translations";
import { TEAM } from "@/lib/team";
import { createPageUrl } from "@/utils";
import { trackCta } from "@/lib/analytics";

// Homepage people block — Sprint 2's first deliverable. Photo, name, role, the
// two or three credential lines that matter to a buyer, and a profile link.
//
// Laid out for the size of the team rather than assuming a grid. With one person
// this is a single wide card, which reads as deliberate; a lone card sitting in a
// three-column grid reads as two people having left.
export default function Leadership({ language }) {
  const t = translations[language];
  const solo = TEAM.length === 1;

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.teamTitle}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.teamSubtitle}</p>
        </div>

        <ul
          className={`list-none p-0 m-0 grid gap-6 ${solo ? 'max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}
        >
          {TEAM.map((m) => (
            <li
              key={m.id}
              className={`rounded-xl border border-gray-200 bg-white p-8 shadow-sm ${
                solo ? 'flex flex-col sm:flex-row sm:items-start gap-8' : ''
              }`}
            >
              <picture className="shrink-0">
                <source srcSet={m.photoWebp} type="image/webp" />
                <img
                  src={m.photo}
                  alt={m.name}
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className={`rounded-xl object-cover ${solo ? 'h-32 w-32' : 'mb-5 h-24 w-24'}`}
                />
              </picture>

              <div>
                <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                <p className="mb-4 text-gray-600">{t[m.roleKey]}</p>

                <ul className="mb-5 list-none p-0 m-0 space-y-2">
                  {m.credentialKeys.map((k) => (
                    <li key={k} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                      <span className="min-w-0">{t[k]}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <Link
                    to={createPageUrl('About', language)}
                    onClick={() => {
                      trackCta({ label: `profile_${m.id}`, location: 'home_team', page: 'Home', language });
                      window.scrollTo(0, 0);
                    }}
                    className="inline-flex max-w-full flex-wrap items-center gap-1.5 font-medium text-blue-600 hover:underline"
                  >
                    {t.teamFullProfile}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCta({ label: `linkedin_${m.id}`, location: 'home_team', page: 'Home', language })}
                      className="inline-flex max-w-full flex-wrap items-center gap-1.5 text-gray-500 hover:text-blue-600"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Says the quiet part out loud. A prospect wondering "is it just him?"
            gets a straight answer framed as the advantage it actually is, rather
            than discovering it later and feeling misled. */}
        {solo && (
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-gray-500">
            {t.teamBoutiqueNote}
          </p>
        )}
      </div>
    </section>
  );
}
