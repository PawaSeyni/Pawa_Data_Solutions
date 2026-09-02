// The six solutions, in one place.
//
// This list previously lived inside Services.jsx. The /solutions/ hub needs the
// same six entries, and two copies of a list is how the URL paths drifted twice
// before — so it moved here rather than being duplicated.
//
// Copy is referenced by translation key rather than inlined, so all four locales
// come from src/components/translations.jsx and none of it has to be restated.

import { Database, GitBranch, Shield, Zap, BarChart3, Cog } from 'lucide-react';

export const SOLUTIONS = [
  { page: 'DataIntegration',      icon: Database,  titleKey: 'service1Title', descKey: 'service1Desc' },
  { page: 'PipelineArchitecture', icon: GitBranch, titleKey: 'service2Title', descKey: 'service2Desc' },
  { page: 'DataGovernance',       icon: Shield,    titleKey: 'service3Title', descKey: 'service3Desc' },
  { page: 'AIReadiness',          icon: Zap,       titleKey: 'service4Title', descKey: 'service4Desc' },
  { page: 'AnalyticsEnablement',  icon: BarChart3, titleKey: 'service5Title', descKey: 'service5Desc' },
  { page: 'ProcessAutomation',    icon: Cog,       titleKey: 'service6Title', descKey: 'service6Desc' },
];
