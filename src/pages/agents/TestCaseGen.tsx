import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const TestCaseGen = () => {
  return (
    <AgentLayout 
      title="Test Case Generation"
      description="Creates an initial set of positive, negative, boundary and integration scenarios from a story."
      systemPrompt="You are a Senior QA Engineer. Based on the provided requirement, generate a comprehensive set of test scenarios. Include: 1) Positive cases (Happy Path), 2) Negative cases (Error handling), 3) Boundary value cases, 4) Integration cases. Format as a table with 'Scenario', 'Pre-conditions', and 'Expected Result'."
    />
  );
};

export default TestCaseGen;
