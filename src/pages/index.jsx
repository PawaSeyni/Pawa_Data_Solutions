import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from "./Layout.jsx";

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

// Page names drive _getCurrentPage (used for the active-nav highlight + SEO key).
const PAGE_NAMES = [
    "Home",
    "Workshop",
    "DataIntegration",
    "PipelineArchitecture",
    "DataGovernance",
    "AIReadiness",
    "AnalyticsEnablement",
    "ProcessAutomation",
    "PrivacyPolicy",
    "DoNotSellOrShare",
    "Careers",
];

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = PAGE_NAMES.find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || PAGE_NAMES[0];
}

function PageFallback() {
    return <div className="min-h-[60vh]" aria-busy="true" />;
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    const [language, setLanguage] = useState("en");

    return (
        <Layout currentPageName={currentPage} language={language} setLanguage={setLanguage}>
            <Suspense fallback={<PageFallback />}>
                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/Home" element={<Home language={language} />} />
                    <Route path="/Workshop" element={<Workshop language={language} />} />
                    <Route path="/DataIntegration" element={<DataIntegration language={language} />} />
                    <Route path="/PipelineArchitecture" element={<PipelineArchitecture language={language} />} />
                    <Route path="/DataGovernance" element={<DataGovernance language={language} />} />
                    <Route path="/AIReadiness" element={<AIReadiness language={language} />} />
                    <Route path="/AnalyticsEnablement" element={<AnalyticsEnablement language={language} />} />
                    <Route path="/ProcessAutomation" element={<ProcessAutomation language={language} />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy language={language} />} />
                    <Route path="/DoNotSellOrShare" element={<DoNotSellOrShare language={language} />} />
                    <Route path="/Careers" element={<Careers language={language} />} />
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
