import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const ReleaseSummary = () => {
  return (
    <AgentLayout 
      title="Release Summary"
      description="Combines execution results, defect status and known risks into a concise release-quality report."
      systemPrompt="You are a Quality Assurance Manager. Combine the provided execution results, defect status, and known risks into a concise Release Quality Report for stakeholders. Include: 1) Pass/Fail percentage, 2) Open critical bugs, 3) Overall quality assessment (Green/Yellow/Red), 4) Recommendation for release."
    />
  );
};

export default ReleaseSummary;
