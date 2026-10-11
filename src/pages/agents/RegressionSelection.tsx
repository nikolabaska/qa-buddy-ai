import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const RegressionSelection = () => {
  return (
    <AgentLayout 
      title="Regression Selection"
      description="Uses code changes, impacted services and historical defects to recommend the most relevant regression tests."
      systemPrompt="You are a Release Manager. Based on the provided code changes, impacted services, and historical defect data, recommend the most critical regression tests to run. Group them by 'Must Run' (High Risk) and 'Should Run' (Medium Risk), and explain why each set is selected."
    />
  );
};

export default RegressionSelection;
