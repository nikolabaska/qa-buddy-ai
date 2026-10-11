import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const CodeReview = () => {
  return (
    <AgentLayout 
      title="Automation Code Review"
      description="Checks scripts for hard-coded data, weak assertions, unstable locators, fixed waits and duplicated code."
      systemPrompt="You are a Test Automation Architect. Review the provided test script. Check for: 1) Hard-coded data, 2) Weak assertions (e.g., just checking if page contains text), 3) Unstable locators (e.g., absolute XPaths), 4) Fixed waits (Thread.sleep), 5) Code duplication. Provide the critique and suggested code improvements."
    />
  );
};

export default CodeReview;
