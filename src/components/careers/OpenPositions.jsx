
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";

export default function OpenPositions({ language }) {
  const t = translations[language];

  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  };

  const positions = [
    {
      title: t.jobDataEngineerTitle,
      location: "Toronto, ON / Remote",
      type: "Contract/Full-time",
      level: "Mid-Senior",
      description: t.jobDataEngineerDesc,
      skills: ["Python", "SQL", "Apache Spark", "Kubernetes", "AWS/Azure"]
    },
    {
      title: t.jobDataArchitectTitle,
      location: "Toronto, ON / Remote",
      type: "Contract/Full-time", 
      level: "Senior",
      description: t.jobDataArchitectDesc,
      skills: ["Data Architecture", "Cloud Platforms", "Data Governance", "Leadership"]
    },
    {
      title: t.jobDataPipelineTitle,
      location: "Remote",
      type: "Contract/Full-time",
      level: "Mid-Senior",
      description: t.jobDataPipelineDesc,
      skills: ["Informatica", "Salesforce (SFDC)", "ETL/ELT Design", "SQL", "Python", "API Integration"]
    },
    {
      title: t.jobAnalyticsConsultantTitle,
      location: "Remote",
      type: "Contract/Full-time",
      level: "Mid-Senior",
      description: t.jobAnalyticsConsultantDesc,
      skills: ["Analytics", "BI Tools", "Client Management", "Data Visualization"]
    }
  ];

  return (
    <section id="open-positions" className="py-20 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.careersOpenPositions}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.careersOpenPositionsDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {positions.map((position, idx) => (
            <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  {position.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {position.location}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {position.type}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {position.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} className="bg-blue-100 text-blue-800 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  onClick={scrollToApplication}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto"
                >
                  {t.careersApplyNow}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.careersDontSeeRole}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t.careersDontSeeRoleDesc}
          </p>
          <Button 
            onClick={scrollToApplication}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            {t.careersApplyAnyway}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
