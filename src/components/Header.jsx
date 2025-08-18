import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { translations } from "@/components/translations";
import { Button } from "@/components/ui/button";

export default function Header({ currentPageName, language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    // If not on the home page, navigate there first.
    if (currentPageName !== 'Home') {
      navigate(createPageUrl('Home'));
    }
    
    // Scroll to the section after a brief delay to allow the page to render.
    // This works reliably even if already on the home page.
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const navItems = [
    { label: t.navServices, id: "services" },
    { label: t.navProcess, id: "process" },
    { label: t.navWorkshop, page: "Workshop" },
    { label: t.navCareers, page: "Careers" },
    { label: t.navContact, id: "contact" }
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <Link to={createPageUrl('Home')} className="flex items-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ac5d130b7_20250808_1357_WhiteBackgroundLogo_remix_01k25d2v51eh8r6dsfep60r96e.png" 
              alt="PaWa Data Solutions Logo" 
              className="h-32 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navItems.map(item => (
                <li key={item.label}>
                  {item.page ? (
                    <Link 
                      to={createPageUrl(item.page)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {['en', 'fr', 'es', 'pt'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1.5 text-sm border rounded-full transition-all ${
                    language === lang 
                      ? "bg-blue-600 text-white border-blue-600" 
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {navItems.map(item => (
                  <li key={item.label}>
                    {item.page ? (
                      <Link 
                        to={createPageUrl(item.page)} 
                        onClick={() => {
                          setIsMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="text-gray-700 hover:text-blue-600 transition-colors block py-1"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button 
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer block py-1 text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}