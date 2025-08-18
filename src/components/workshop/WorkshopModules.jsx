
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { translations } from "@/components/translations";

export default function WorkshopModules({ language }) {
  const t = translations[language];
  const modules = [
    {
      phase: t.workshopModule1,
      title: t.workshopModule1Title,
      description: t.workshopModule1Desc,
    },
    {
      phase: t.workshopModule2,
      title: t.workshopModule2Title, 
      description: t.workshopModule2Desc,
    },
    {
      phase: t.workshopModule3,
      title: t.workshopModule3Title,
      description: t.workshopModule3Desc,
    },
    {
      phase: t.workshopModule4,
      title: t.workshopModule4Title,
      description: t.workshopModule4Desc,
    }
  ];

  return (
    <section id="modules" className="py-20 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.workshopModulesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.workshopModulesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                  {idx + 1}
                </div>
                {idx < modules.length - 1 && <div className="w-px h-full bg-gray-300"></div>}
              </div>
              <div className="pb-8">
                <p className="text-sm font-semibold text-blue-700 mb-1">{module.phase}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600 leading-relaxed">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
