import Layout from "./Layout.jsx";

import Home from "./Home";

import Workshop from "./Workshop";

import DataIntegration from "./DataIntegration";

import PipelineArchitecture from "./PipelineArchitecture";

import DataGovernance from "./DataGovernance";

import AIReadiness from "./AIReadiness";

import AnalyticsEnablement from "./AnalyticsEnablement";

import ProcessAutomation from "./ProcessAutomation";

import PrivacyPolicy from "./PrivacyPolicy";

import DoNotSellOrShare from "./DoNotSellOrShare";

import Careers from "./Careers";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Workshop: Workshop,
    
    DataIntegration: DataIntegration,
    
    PipelineArchitecture: PipelineArchitecture,
    
    DataGovernance: DataGovernance,
    
    AIReadiness: AIReadiness,
    
    AnalyticsEnablement: AnalyticsEnablement,
    
    ProcessAutomation: ProcessAutomation,
    
    PrivacyPolicy: PrivacyPolicy,
    
    DoNotSellOrShare: DoNotSellOrShare,
    
    Careers: Careers,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    const [language, setLanguage] = useState("en");

    return (
        <Layout currentPageName={currentPage} language={language} setLanguage={setLanguage}>
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