
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, GraduationCap, ShieldCheck, Users, Layers } from "lucide-react";
import { translations } from "@/components/translations";

export default function KPIs({ language }) {
  const t = translations[language];
  const capabilities = [
    {
      icon: Clock,
      label: t.kpi1Label,
      description: t.kpi1Desc
    },
    {
      icon: GraduationCap,
      label: t.kpi2Label,
      description: t.kpi2Desc
    },
    {
      icon: ShieldCheck,
      label: t.kpi3Label,
      description: t.kpi3Desc
    },
    {
      icon: Users,
      label: t.kpi4Label,
      description: t.kpi4Desc
    },
    {
      icon: Layers,
      label: t.kpi5Label,
      description: t.kpi5Desc
    }
  ];

  return (
    <section id="kpis" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.kpisTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.kpisSubtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {capabilities.map((item, idx) => (
            <Card key={idx} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-balance">
                  {item.label}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
