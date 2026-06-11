// Per-page SEO metadata, applied client-side by <Seo /> (src/components/Seo.jsx).
// Canonical domain is pawadata.com (the live custom domain).

export const SITE_URL = "https://pawadata.com";
export const SITE_NAME = "PaWa Data Solutions";
const SUFFIX = ` — ${SITE_NAME}`;

const DEFAULT = {
  path: "/",
  title: "PaWa Data Solutions — Trusted Data, Delivered Fast",
  description:
    "We help mid-market teams integrate, govern, and activate trusted data—fast. From pipelines to AI readiness, measurable outcomes in weeks, not months.",
};

const PAGES = {
  Home: DEFAULT,
  DataIntegration: {
    path: "/DataIntegration",
    title: "Data Integration" + SUFFIX,
    description:
      "Unify your data sources with cloud-native ELT/CDC, APIs, and streaming so trusted data lands in governed platforms reliably and fast.",
  },
  PipelineArchitecture: {
    path: "/PipelineArchitecture",
    title: "Pipeline Architecture" + SUFFIX,
    description:
      "Design resilient, observable data pipelines from raw to refined using lakehouse patterns and DataOps best practices.",
  },
  DataGovernance: {
    path: "/DataGovernance",
    title: "Data Governance" + SUFFIX,
    description:
      "Make data a managed asset with policy, catalog and lineage, and controls that scale across domains.",
  },
  AIReadiness: {
    path: "/AIReadiness",
    title: "AI Readiness" + SUFFIX,
    description:
      "Harden your data foundation and operationalize Responsible AI so your team is ready to build with confidence.",
  },
  AnalyticsEnablement: {
    path: "/AnalyticsEnablement",
    title: "Analytics Enablement" + SUFFIX,
    description:
      "Deliver consistent, self-serve insights with a governed semantic layer and clear, shared metric definitions.",
  },
  ProcessAutomation: {
    path: "/ProcessAutomation",
    title: "Process Automation" + SUFFIX,
    description:
      "Automate cross-app, high-volume work with a blend of RPA, workflow/BPM, process mining, and AI.",
  },
  Workshop: {
    path: "/Workshop",
    title: "Data Workshop" + SUFFIX,
    description:
      "A hands-on PaWa data workshop to assess readiness and build a practical roadmap for trusted, AI-ready data.",
  },
  Careers: {
    path: "/Careers",
    title: "Careers" + SUFFIX,
    description:
      "Join PaWa Data Solutions. Explore open data engineering, architecture, and analytics roles—remote and Toronto-based.",
  },
  PrivacyPolicy: {
    path: "/PrivacyPolicy",
    title: "Privacy Policy" + SUFFIX,
    description:
      "How PaWa Data Solutions collects, uses, and protects your personal information.",
  },
  DoNotSellOrShare: {
    path: "/DoNotSellOrShare",
    title: "Do Not Sell or Share" + SUFFIX,
    description:
      "California (CPRA) privacy rights and how to exercise them with PaWa Data Solutions.",
  },
};

export function getSeo(pageName) {
  return PAGES[pageName] || DEFAULT;
}
