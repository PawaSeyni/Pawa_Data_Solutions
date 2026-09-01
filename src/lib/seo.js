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
    path: "/dataintegration/",
    title: "Data Integration" + SUFFIX,
    description:
      "Unify your data sources with cloud-native ELT/CDC, APIs, and streaming so trusted data lands in governed platforms reliably and fast.",
  },
  PipelineArchitecture: {
    path: "/pipelinearchitecture/",
    title: "Pipeline Architecture" + SUFFIX,
    description:
      "Design resilient, observable data pipelines from raw to refined using lakehouse patterns and DataOps best practices.",
  },
  DataGovernance: {
    path: "/datagovernance/",
    title: "Data Governance" + SUFFIX,
    description:
      "Make data a managed asset with policy, catalog and lineage, and controls that scale across domains.",
  },
  AIReadiness: {
    path: "/aireadiness/",
    title: "AI Readiness" + SUFFIX,
    description:
      "Harden your data foundation and operationalize Responsible AI so your team is ready to build with confidence.",
  },
  AnalyticsEnablement: {
    path: "/analyticsenablement/",
    title: "Analytics Enablement" + SUFFIX,
    description:
      "Deliver consistent, self-serve insights with a governed semantic layer and clear, shared metric definitions.",
  },
  ProcessAutomation: {
    path: "/processautomation/",
    title: "Process Automation" + SUFFIX,
    description:
      "Automate cross-app, high-volume work with a blend of RPA, workflow/BPM, process mining, and AI.",
  },
  Workshop: {
    path: "/workshop/",
    title: "Data Workshop" + SUFFIX,
    description:
      "A hands-on PaWa data workshop to assess readiness and build a practical roadmap for trusted, AI-ready data.",
  },
  Careers: {
    path: "/careers/",
    title: "Careers" + SUFFIX,
    description:
      "Join PaWa Data Solutions. Explore open data engineering, architecture, and analytics roles—remote and Toronto-based.",
  },
  PrivacyPolicy: {
    path: "/privacypolicy/",
    title: "Privacy Policy" + SUFFIX,
    description:
      "How PaWa Data Solutions collects, uses, and protects your personal information.",
  },
  DoNotSellOrShare: {
    path: "/donotsellorshare/",
    title: "Do Not Sell or Share" + SUFFIX,
    description:
      "California (CPRA) privacy rights and how to exercise them with PaWa Data Solutions.",
  },
  NotFound: {
    path: "/404/",
    title: "Page Not Found" + SUFFIX,
    description:
      "That page does not exist. Browse our data integration, governance, analytics, and AI readiness services instead.",
    // Keep 404s out of the index — they are a real HTTP 404 at the edge, and a
    // crawler that follows a stale link should not bank a thin page on top of it.
    noindex: true,
  },
};

export function getSeo(pageName) {
  return PAGES[pageName] || DEFAULT;
}
