
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";

export default function Process({ language }) {
  const t = translations[language];
  const steps = [
    {
      phase: t.processStep1Phase,
      title: t.processStep1Title,
      description: t.processStep1Desc,
      duration: "Week 1-2"
    },
    {
      phase: t.processStep2Phase,
      title: t.processStep2Title, 
      description: t.processStep2Desc,
      duration: "Week 2-3"
    },
    {
      phase: t.processStep3Phase,
      title: t.processStep3Title,
      description: t.processStep3Desc,
      duration: "Week 4-8"
    },
    {
      phase: t.processStep4Phase,
      title: t.processStep4Title,
      description: t.processStep4Desc,
      duration: "Week 8+"
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.processTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.processSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">{idx + 1}</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{step.duration}</span>
                  </div>
                  
                  {/* Phase label */}
                  <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {step.phase}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 w-6 h-6" />
              )}
            </div>
          ))}
        </div>

        {/* Key benefits */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t.processWhyTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              t.processBenefit1,
              t.processBenefit2, 
              t.processBenefit3
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
