import React from "react";
import CareersHero from "../components/careers/CareersHero";
import OpenPositions from "../components/careers/OpenPositions";
import ApplicationForm from "../components/careers/ApplicationForm";

export default function Careers({ language }) {
  return (
    <>
      <CareersHero language={language} />
      <OpenPositions language={language} />
      <ApplicationForm language={language} />
    </>
  );
}