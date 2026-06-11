
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Layout({ children, currentPageName, language, setLanguage }) {
  return (
    <div className="min-h-screen bg-white">
      <Seo pageName={currentPageName} language={language} />
      <style>
        {`
          :root {
            --ink: #0a0a0a;
            --ink-2: #1a1a1a;
            --muted: #5a5f65;
            --bg: #ffffff;
            --bg-2: #f6f8fa;
            --accent: #0a66c2;
            --accent-2: #084e96;
            --shadow: 0 10px 25px rgba(0,0,0,0.08);
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif;
            line-height: 1.6;
          }
        `}
      </style>
      <Header 
        currentPageName={currentPageName} 
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        {children}
      </main>
      <Footer language={language} />
    </div>
  );
}
