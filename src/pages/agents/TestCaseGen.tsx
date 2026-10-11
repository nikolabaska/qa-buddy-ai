import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const TestCaseGen = () => {
  return (
    <AgentLayout 
      title="Test Case Generation"
      description="Creates an initial set of positive, negative, boundary and integration scenarios from a story."
      systemPrompt="You are a Senior QA Engineer. Based on the provided requirement, generate a comprehensive set of test scenarios. Include: 1) Positive cases (Happy Path), 2) Negative cases (Error handling), 3) Boundary value cases, 4) Integration cases. Format as a table with 'Scenario', 'Pre-conditions', and 'Expected Result'."
      examples={[
        {
          label: "Payment Gateway",
          content: "Requirement: The payment system must support Credit Card and PayPal. For Credit Cards, it must validate the CVV and Expiry Date. PayPal should redirect to the PayPal login page and return a success/failure token."
        },
        {
          label: "Password Reset",
          content: "Story: As a user, I want to reset my password via email so that I can regain access to my account if I forget my password."
        }
      ]}
    />
  );
};

export default TestCaseGen;
