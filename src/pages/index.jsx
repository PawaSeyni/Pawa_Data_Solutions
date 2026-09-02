import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from "./Layout.jsx";
import { LANGUAGES, DEFAULT_LANGUAGE, parsePath, prefixFor } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { trackScrollDepth } from "@/lib/analytics";

// Home is the landing page — load it eagerly so the first paint needs no extra request.
import Home from "./Home";

// Every other route is code-split into its own chunk, fetched on navigation.
const Workshop = lazy(() => import("./Workshop"));
const DataIntegration = lazy(() => import("./DataIntegration"));
const PipelineArchitecture = lazy(() => import("./PipelineArchitecture"));
const DataGovernance = lazy(() => import("./DataGovernance"));
const AIReadiness = lazy(() => import("./AIReadiness"));
const AnalyticsEnablement = lazy(() => import("./AnalyticsEnablement"));
const ProcessAutomation = lazy(() => import("./ProcessAutomation"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const DoNotSellOrShare = lazy(() => import("./DoNotSellOrShare"));
const Careers = lazy(() => import("./Careers"));
const NotFound = lazy(() => import("./NotFound"));

// Route table built from the shared page definitions, so a slug change lands in
// the router, the sitemap, the canonical tags and the redirects at once.
const COMPONENTS = {
    Workshop, DataIntegration, PipelineArchitecture, DataGovernance,
    AIReadiness, AnalyticsEnablement, ProcessAutomation,
    PrivacyPolicy, DoNotSellOrShare, Careers,
};
const ROUTED = PAGES.filter((p) => p.name !== 'Home').map((p) => [p.slug, p.name, COMPONENTS[p.name]]);

function pageNameFor(slug) {
    if (!slug) return "Home";
    const match = ROUTED.find(([s]) => s === slug);
    return match ? match[1] : "NotFound";
}

function PageFallback() {
    return <div data-prerender-loading className="min-h-[60vh]" aria-busy="true" />;
}

function PagesContent() {
    const location = useLocation();
    // Locale comes from the URL, not from component state. That is the whole
    // point of this structure: state cannot be indexed, linked, or shared.
    const { language, slug } = parsePath(location.pathname);
    const currentPage = pageNameFor(slug);

    // Tells the build-time prerender crawler that the first render and every
    // child effect have completed — Seo.jsx writes title/canonical/hreflang in a
    // useEffect, so snapshotting before this fires would bake the shell's
    // default homepage metadata into every route.
    useEffect(() => {
        window.__PRERENDER_READY__ = true;
    }, []);

    // Scroll depth per route. Re-armed on navigation so each page reports its own
    // engagement rather than one figure for the whole session.
    useEffect(() => trackScrollDepth({ page: currentPage, language }), [currentPage, language]);

    // Same route table mounted under every locale. English is unprefixed, so the
    // URLs already indexed keep resolving exactly as before.
    const routesForPrefix = (prefix) => ([
        <Route key={`${prefix}/`} path={`${prefix}/`} element={<Home language={language} />} />,
        ...ROUTED.map(([slugPart, name, Component]) => (
            <Route
                key={`${prefix}/${slugPart}`}
                path={`${prefix}/${slugPart}`}
                element={<Component language={language} />}
            />
        )),
    ]);

    return (
        <Layout currentPageName={currentPage} language={language}>
            <Suspense fallback={<PageFallback />}>
                <Routes>
                    {LANGUAGES.flatMap((lang) => routesForPrefix(prefixFor(lang)))}
                    {/* /home duplicated / at HTTP 200. One home URL per locale. */}
                    {LANGUAGES.map((lang) => (
                        <Route
                            key={`${prefixFor(lang)}/home`}
                            path={`${prefixFor(lang)}/home`}
                            element={<Navigate to={`${prefixFor(lang)}/`} replace />}
                        />
                    ))}
                    <Route path="*" element={<NotFound language={language} />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}

export { DEFAULT_LANGUAGE };
