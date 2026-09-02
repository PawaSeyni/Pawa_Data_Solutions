import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import KPIs from "../components/KPIs";
import SelectedWork from "../components/SelectedWork";
import Leadership from "../components/Leadership";
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
      <Leadership language={language} />
      <SelectedWork language={language} />
      <ContactForm
        source="Home"
        title={t.contactTitleHome}
        description={t.contactSubtitleHome}
        language={language}
      />
    </>
  );
}