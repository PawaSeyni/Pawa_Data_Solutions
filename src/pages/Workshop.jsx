
import React from "react";
import WorkshopHero from "../components/workshop/WorkshopHero";
import WorkshopModules from "../components/workshop/WorkshopModules";
import KeyTakeaways from "../components/workshop/KeyTakeaways";
import ContactForm from "../components/ContactForm";
import { translations } from "@/components/translations";

export default function Workshop({ language }) {
  const t = translations[language];
  return (
    <>
      <WorkshopHero language={language} />
      <WorkshopModules language={language} />
      <KeyTakeaways language={language} />
      <ContactForm 
        title={t.contactTitleWorkshop}
        description={t.contactSubtitleWorkshop}
        language={language}
      />
    </>
  );
}
