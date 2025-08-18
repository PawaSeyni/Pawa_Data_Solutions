
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CheckCircle, ArrowRight, PieChart, LineChart, Target } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { translations } from "@/components/translations";

export default function AnalyticsEnablement({ language = "en" }) {
  const t = translations[language];

  const benefits = [
    {
      icon: PieChart,
      title: t.analyticsEnablementBenefit1Title,
      description: t.analyticsEnablementBenefit1Desc
    },
    {
      icon: LineChart,
      title: t.analyticsEnablementBenefit2Title,
      description: t.analyticsEnablementBenefit2Desc
    },
    {
      icon: Target,
      title: t.analyticsEnablementBenefit3Title,
      description: t.analyticsEnablementBenefit3Desc
    }
  ];

  const features = [
    t.analyticsEnablementFeature1,
    t.analyticsEnablementFeature2,
    t.analyticsEnablementFeature3,
    t.analyticsEnablementFeature4,
    t.analyticsEnablementFeature5,
  ].filter(f => f); // Filter out empty strings

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.indigo.100),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              {t.analyticsEnablementEyebrow}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.analyticsEnablementHeroTitle}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {t.analyticsEnablementHeroSubtitle}
            </p>

            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t.analyticsEnablementHeroCta}
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
              {t.analyticsEnablementBenefitsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.analyticsEnablementBenefitsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-indigo-600" />
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
                {t.analyticsEnablementFeaturesTitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.analyticsEnablementFeaturesSubtitle}
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

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.analyticsEnablementCaseStudyTitle}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.analyticsEnablementCaseStudyDesc}
                </p>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <BarChart3 className="w-5 h-5" />
                  {t.analyticsEnablementCaseStudyResult}
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
