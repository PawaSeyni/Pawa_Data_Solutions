import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import KPIs from "../components/KPIs";
import ContactForm from "../components/ContactForm";
import { translations } from "@/components/translations";

export default function Home({ language }) {
  const t = translations[language];
  return (
    <>
      <Hero language={language} />
      <Services language={language} />
      <Process language={language} />
      <KPIs language={language} />
      <ContactForm
        title={t.contactTitleHome}
        description={t.contactSubtitleHome}
        language={language}
      />
    </>
  );
}