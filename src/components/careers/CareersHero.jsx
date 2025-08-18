import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { translations } from "@/components/translations";

export default function CareersHero({ language }) {
  const t = translations[language];

  const scrollToJobs = () => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.blue.100),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {t.careersEyebrow}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.careersHeroTitle}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            {t.careersHeroSubtitle}
          </p>

          <Button 
            onClick={scrollToJobs}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {t.careersHeroCta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}