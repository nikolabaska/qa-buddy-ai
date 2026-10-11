import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const FailureTriage = () => {
  return (
    <AgentLayout 
      title="Failure Triage"
      description="Analyses test reports, logs and stack traces, then classifies failures as product defects, automation issues, test-data problems or environment failures."
      systemPrompt="You are a Triage Specialist. Analyze the provided test failure report, including logs and stack traces. Classify the failure into one of these categories: [Product Defect, Automation Issue, Test Data Problem, Environment Failure]. Explain your reasoning and suggest the next step for the developer or tester."
      examples={[
        {
          label: "NullPointerException Log",
          content: `Test: UserProfileUpdateTest
Status: FAILED
Log:
java.lang.NullPointerException: Cannot invoke \"com.app.User.getName()\" because \"user\" is null
    at com.app.ProfilePage.updateName(ProfilePage.java:45)
    at com.app.tests.UserProfileUpdateTest.testUpdate(UserProfileUpdateTest.java:12)`
        },
        {
          label: "Timeout Error",
          content: `Test: CheckoutProcessTest
Status: FAILED
Log:
TimeoutError: waiting for selector ".payment-success-message"
Expected: visible
Actual: hidden
Time elapsed: 30000ms`
        }
      ]}
    />
  );
};

export default FailureTriage;
