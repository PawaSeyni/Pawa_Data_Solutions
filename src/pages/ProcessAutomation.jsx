
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, CheckCircle, ArrowRight, Bot, Workflow, Timer } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { translations } from "@/components/translations";

export default function ProcessAutomation({ language = "en" }) {
  const t = translations[language];

  const benefits = [
    {
      icon: Bot,
      title: t.processAutomationBenefit1Title,
      description: t.processAutomationBenefit1Desc
    },
    {
      icon: Workflow,
      title: t.processAutomationBenefit2Title,
      description: t.processAutomationBenefit2Desc
    },
    {
      icon: Timer,
      title: t.processAutomationBenefit3Title,
      description: t.processAutomationBenefit3Desc
    }
  ];

  const features = [
    t.processAutomationFeature1,
    t.processAutomationFeature2,
    t.processAutomationFeature3,
    t.processAutomationFeature4,
    t.processAutomationFeature5,
  ].filter(f => f); // Filter out empty strings

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.teal.100),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cog className="w-4 h-4" />
              {t.processAutomationEyebrow}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.processAutomationHeroTitle}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {t.processAutomationHeroSubtitle}
            </p>

            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t.processAutomationHeroCta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.processAutomationBenefitsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.processAutomationBenefitsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.processAutomationFeaturesTitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.processAutomationFeaturesSubtitle}
              </p>
              
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.processAutomationCaseStudyTitle}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.processAutomationCaseStudyDesc}
                </p>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <Timer className="w-5 h-5" />
                  {t.processAutomationCaseStudyResult}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title={t.contactTitleService}
        description={t.contactSubtitleService}
        language={language}
      />
    </>
  );
}
