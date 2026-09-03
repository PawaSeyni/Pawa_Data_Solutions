import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import Practices from "../components/Practices";
import SelectedWork from "../components/SelectedWork";
import KPIs from "../components/KPIs";
import Leadership from "../components/Leadership";
import FeaturedInsight from "../components/FeaturedInsight";
import { translations } from "@/components/translations";
import { createPageUrl } from "@/utils";
import { trackCta } from "@/lib/analytics";
import { CTA_LOCATIONS } from "@/lib/cta";

// Sprint 8 §6, in the specified order.
//
// The two substantive changes are about sequence and about what is missing.
//
// Proof moved ahead of methodology. Process used to sit third — a four-stage
// explanation of HOW we work, shown to someone who had not yet been given a
// reason to believe we can. Selected Work now follows capability recognition
// directly, and the process detail lives on About and on each solution page,
// where a reader has already decided the problem is real.
//
// The large qualification form is gone from the homepage. It was a second
// primary conversion competing with the Health Check, and asked a first-time
// visitor to compose a message about an engagement the page had not explained.
// It lives on /contact/ now, reachable from the nav, the footer and the closing
// CTA below.
export default function Home({ language }) {
  const t = translations[language];

  return (
    <>
      {/* 01 */}
      <Hero language={language} />
      {/* 02 */}
      <Practices language={language} />
      {/* 03 — proof before methodology */}
      <SelectedWork language={language} />
      {/* 04 */}
      <KPIs language={language} />
      {/* 05 */}
      <Leadership language={language} />
      {/* 06 is the Health Check, reached from the hero and header; 07 */}
      <FeaturedInsight language={language} />

      {/* 08 — the secondary path, for people the Health Check does not suit. */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            {t.homeFinalCtaTitle}
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">{t.homeFinalCtaBody}</p>
          <Link
            to={createPageUrl('Contact', language)}
            onClick={() => {
              trackCta({ label: 'talk_to_practitioner', location: CTA_LOCATIONS.PAGE_END, page: 'Home', language });
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-7 py-3.5 font-medium text-gray-800 transition-colors hover:border-blue-500 hover:text-blue-600"
          >
            {t.ctaTalkToPractitioner}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
