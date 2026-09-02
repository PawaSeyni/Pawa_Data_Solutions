import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import { createPageUrl } from "@/utils";
import { prefixFor } from "@/lib/i18n";

// Rendered by the "*" route, and snapshotted to dist/404.html at build time so
// Netlify can serve a real HTTP 404 for unmatched URLs. Before this existed the
// SPA fallback answered every unknown path with the home page at HTTP 200 — a
// soft 404, which lets typos and dead campaign links accumulate in the index.
export default function NotFound({ language }) {
  const t = translations[language];

  const services = [
    { title: t.service1Title, page: "DataIntegration" },
    { title: t.service2Title, page: "PipelineArchitecture" },
    { title: t.service3Title, page: "DataGovernance" },
    { title: t.service4Title, page: "AIReadiness" },
    { title: t.service5Title, page: "AnalyticsEnablement" },
    { title: t.service6Title, page: "ProcessAutomation" },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm font-semibold tracking-widest text-blue-600 mb-3">
          {t.notFoundEyebrow}
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {t.notFoundTitle}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{t.notFoundBody}</p>

        <div className="flex flex-wrap gap-3 mb-14">
          <Link
            to={`${prefixFor(language)}/`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            {t.notFoundHome}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href={`${prefixFor(language)}/#contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium hover:border-gray-900 transition-colors"
          >
            {t.notFoundContact}
          </a>
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
          {t.notFoundServicesTitle}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-8">
          {services.map((service) => (
            <li key={service.page} className="border-t border-gray-200">
              <Link
                to={createPageUrl(service.page, language)}
                onClick={() => window.scrollTo(0, 0)}
                className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
