import React from "react";
import CareersHero from "../components/careers/CareersHero";
import OpenPositions from "../components/careers/OpenPositions";
import ApplicationForm from "../components/careers/ApplicationForm";
import {
  SITE_URL,
  DATE_POSTED,
  VALID_THROUGH,
  buildJobPostings,
} from "@/lib/jobPostings";
import { localizedPath } from "@/lib/i18n";

export default function Careers({ language }) {
  // JobPosting structured data makes the four open roles eligible for the Google
  // Jobs panel — a free, high-intent channel that also signals growth to the
  // clients who read a consultancy's careers page.
  //
  // Rendered into the markup rather than injected from an effect so the
  // prerender bakes it into dist/careers/index.html and the crawler sees it
  // without running any JavaScript, which is the whole point.
  //
  // One page carries all four postings. Google prefers one posting per URL, so
  // if these roles ever justify their own pages, that is the upgrade.
  const postings = buildJobPostings({
    language,
    datePosted: DATE_POSTED,
    validThrough: VALID_THROUGH,
    careersUrl: SITE_URL + localizedPath("Careers", language),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postings) }}
      />
      <CareersHero language={language} />
      <OpenPositions language={language} />
      <ApplicationForm language={language} />
    </>
  );
}
