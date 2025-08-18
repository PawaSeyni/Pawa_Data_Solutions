
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children, currentPageName }) {
  const [language, setLanguage] = useState("en");

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { language });
    }
    return child;
  });

  return (
    <div className="min-h-screen bg-white">
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
        {childrenWithProps}
      </main>
      <Footer language={language} />
    </div>
  );
}
