
import React from "react";
import { CheckCircle, ShieldCheck, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { translations } from "@/components/translations";

export default function KeyTakeaways({ language }) {
  const t = translations[language];
  const takeaways = [
    {
      icon: CheckCircle,
      title: t.takeaway1Title,
      description: t.takeaway1Desc
    },
    {
      icon: ShieldCheck,
      title: t.takeaway2Title,
      description: t.takeaway2Desc
    },
    {
      icon: Zap,
      title: t.takeaway3Title,
      description: t.takeaway3Desc
    },
    {
      icon: Users,
      title: t.takeaway4Title,
      description: t.takeaway4Desc
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.workshopTakeawaysTitle}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.workshopTakeawaysSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {takeaways.map((takeaway, idx) => (
            <Card key={idx} className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <takeaway.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{takeaway.title}</h3>
                  <p className="text-gray-600">{takeaway.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
