import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const ReleaseSummary = () => {
  return (
    <AgentLayout 
      title="Release Summary"
      description="Combines execution results, defect status and known risks into a concise release-quality report."
      systemPrompt="You are a Quality Assurance Manager. Combine the provided execution results, defect status, and known risks into a concise Release Quality Report for stakeholders. Include: 1) Pass/Fail percentage, 2) Open critical bugs, 3) Overall quality assessment (Green/Yellow/Red), 4) Recommendation for release."
      examples={[
        {
          label: "Sprint 24 Results",
          content: `Execution: 450 tests passed, 12 failed, 5 skipped.
Defects: 2 Critical (Blockers), 5 Major, 12 Minor.
Known Risks: Performance degradation observed in User Profile page under heavy load.
Environment: UAT-2`
        }
      ]}
    />
  );
};

export default ReleaseSummary;
