
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { translations } from "@/components/translations";

export default function Hero({ language }) {
  const t = translations[language];
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t.heroCtaPrimary}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg rounded-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              {t.heroCtaSecondary}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
              {t.heroTrustedBy}
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {[
                { name: "TechCorp", logo: "TC" },
                { name: "DataFlow", logo: "DF" },
                { name: "CloudVault", logo: "CV" },
                { name: "Analytics Pro", logo: "AP" },
                { name: "SmartData", logo: "SD" },
                { name: "InfoSystems", logo: "IS" }
              ].map((company, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-600 font-semibold text-sm">{company.logo}</span>
                  </div>
                  <span className="text-xs text-gray-400">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
