
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Target } from "lucide-react";
import { translations } from "@/components/translations";

export default function KPIs({ language }) {
  const t = translations[language];
  const kpis = [
    {
      icon: TrendingUp,
      value: "85%",
      label: t.kpi1Label,
      description: t.kpi1Desc
    },
    {
      icon: Clock,
      value: "4-8",
      label: t.kpi2Label,
      description: t.kpi2Desc
    },
    {
      icon: Users,
      value: "100+",
      label: t.kpi3Label,
      description: t.kpi3Desc
    },
    {
      icon: Target,
      value: "98%",
      label: t.kpi4Label,
      description: t.kpi4Desc
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.kpisTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.kpisSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <Card key={idx} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <kpi.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {kpi.value}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {kpi.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {kpi.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
