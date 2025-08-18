
import React from "react";
import { translations } from "@/components/translations";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Footer({ language }) {
  const t = translations[language];
  const navigate = useNavigate();

  const services = [
    { title: t.service1Title, page: "DataIntegration" },
    { title: t.service2Title, page: "PipelineArchitecture" },
    { title: t.service3Title, page: "DataGovernance" },
    { title: t.service4Title, page: "AIReadiness" },
    { title: t.service5Title, page: "AnalyticsEnablement" },
    { title: t.service6Title, page: "ProcessAutomation" },
  ];

  const handleSectionClick = (sectionId) => {
    // First navigate to home page
    navigate(createPageUrl('Home'));
    
    // Then scroll to section after a brief delay
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ac5d130b7_20250808_1357_WhiteBackgroundLogo_remix_01k25d2v51eh8r6dsfep60r96e.png"
                alt="PaWa Data Solutions Logo"
                className="h-40 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 max-w-md mb-4">
              {t.footerDesc}
            </p>
            <div className="text-sm text-gray-400">
              © 2024 PaWa Data Solutions. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footerServicesTitle}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service.page}>
                  <Link
                    to={createPageUrl(service.page)}
                    className="hover:text-white transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footerCompanyTitle}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleSectionClick('services')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.footerAbout}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('process')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.navProcess}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('kpis')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.footerCaseStudies}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('contact')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.navContact}
                </button>
              </li>
              <li>
                <Link to={createPageUrl('PrivacyPolicy')} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">{t.footerPrivacy}</Link>
              </li>
              <li>
                <Link to={createPageUrl('DoNotSellOrShare')} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">{t.footerDoNotSell}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footerCta}{" "}
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="text-blue-400 hover:underline cursor-pointer"
            >
              {t.footerCtaLink}
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
