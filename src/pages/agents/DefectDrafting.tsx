import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const DefectDrafting = () => {
  return (
    <AgentLayout 
      title="Defect Drafting"
      description="Converts evidence such as logs, screenshots and API responses into a structured defect report with reproduction steps."
      systemPrompt="You are a QA Specialist. Convert the provided logs, screenshots (described as text), and API responses into a professional defect report. Include: 1) Clear Title, 2) Severity/Priority, 3) Step-by-step reproduction steps, 4) Actual vs Expected result, 5) Evidence summary. Format it so it can be pasted directly into Jira."
      examples={[
        {
          label: "API Crash Evidence",
          content: `Evidence:
Log: 500 Internal Server Error on POST /api/v1/payments
Payload: { "amount": -100, "currency": "USD" }
Response: { "error": "Unexpected null value at payment_processor.java:112" }
Screenshot: User sees a generic 'Something went wrong' page.`
        }
      ]}
    />
  );
};

export default DefectDrafting;
