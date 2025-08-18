
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, GitBranch, Shield, Zap, BarChart3, Cog } from "lucide-react";
import { translations } from "@/components/translations";

export default function Services({ language = "en" }) {
  const t = translations[language];
  const services = [
    {
      icon: Database,
      title: t.service1Title,
      description: t.service1Desc,
      page: "DataIntegration"
    },
    {
      icon: GitBranch,
      title: t.service2Title, 
      description: t.service2Desc,
      page: "PipelineArchitecture"
    },
    {
      icon: Shield,
      title: t.service3Title,
      description: t.service3Desc,
      page: "DataGovernance"
    },
    {
      icon: Zap,
      title: t.service4Title,
      description: t.service4Desc,
      page: "AIReadiness"
    },
    {
      icon: BarChart3,
      title: t.service5Title,
      description: t.service5Desc,
      page: "AnalyticsEnablement"
    },
    {
      icon: Cog,
      title: t.service6Title,
      description: t.service6Desc,
      page: "ProcessAutomation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link key={idx} to={createPageUrl(service.page)} onClick={() => window.scrollTo(0, 0)}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white h-full cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
