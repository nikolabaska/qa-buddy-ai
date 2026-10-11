import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const RegressionSelection = () => {
  return (
    <AgentLayout 
      title="Regression Selection"
      description="Uses code changes, impacted services and historical defects to recommend the most relevant regression tests."
      systemPrompt="You are a Release Manager. Based on the provided code changes, impacted services, and historical defect data, recommend the most critical regression tests to run. Group them by 'Must Run' (High Risk) and 'Should Run' (Medium Risk), and explain why each set is selected."
      examples={[
        {
          label: "Payment Module Change",
          content: `Changes: 
- Modified PaymentProcessor.ts to handle new currency conversions.
- Updated Database schema for Transactions table.
Impacted Services: Checkout Service, Payment Gateway, Billing API.
Recent Defects: High number of failures in CurrencyConversionTest last sprint.`
        }
      ]}
    />
  );
};

export default RegressionSelection;
