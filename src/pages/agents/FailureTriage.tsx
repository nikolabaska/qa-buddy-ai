import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const FailureTriage = () => {
  return (
    <AgentLayout 
      title="Failure Triage"
      description="Analyses test reports, logs and stack traces, then classifies failures as product defects, automation issues, test-data problems or environment failures."
      systemPrompt="You are a Triage Specialist. Analyze the provided test failure report, including logs and stack traces. Classify the failure into one of these categories: [Product Defect, Automation Issue, Test Data Problem, Environment Failure]. Explain your reasoning and suggest the next step for the developer or tester."
    />
  );
};

export default FailureTriage;
