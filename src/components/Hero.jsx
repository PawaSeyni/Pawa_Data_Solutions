
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { translations } from "@/components/translations";
import { createPageUrl } from "@/utils";
import { trackCta } from "@/lib/analytics";

export default function Hero({ language }) {
  const t = translations[language];
  // Both CTAs are instrumented with their location, because the same label in
  // the hero and in the footer are different results and averaging them hides
  // which placement actually converts.
  const goTo = (sectionId, label) => {
    trackCta({ label, location: 'hero', page: 'Home', language });
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.blue.100),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            {t.heroEyebrow}
          </div>

          {/* Main headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.heroTitle1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              {t.heroTitle2}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* CTA buttons */}
          {/* Goes to the Data Health Check page, not the form below. The button
              names a specific engagement, and dropping someone into a blank
              contact form asks them to enquire about something the site has not
              explained yet. The page explains it and converts at the bottom. */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <Link
                to={createPageUrl('HealthCheck', language)}
                onClick={() => {
                  trackCta({ label: 'health_check_primary', location: 'hero', page: 'Home', language });
                  window.scrollTo(0, 0);
                }}
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => goTo('process', 'see_how_we_work')}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg rounded-xl"
            >
              <Play className="w-5 h-5 mr-2" aria-hidden="true" />
              {t.heroCtaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
