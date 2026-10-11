import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const RequirementReview = () => {
  return (
    <AgentLayout 
      title="Requirement Review"
      description="Review user stories and identify missing acceptance criteria, edge cases and unclear requirements."
      systemPrompt="You are an expert QA Lead. Review the provided user story or requirement. Identify: 1) Missing Acceptance Criteria, 2) Potential edge cases (negative scenarios), 3) Ambiguous or unclear requirements that need clarification. Format the output as a structured audit report with clear headings."
      examples={[
        {
          label: "Promo Code Story",
          content: "STORY GC-4821 – Apply promo code at checkout (guest + logged-in)\n\nAs a shopper I want to apply a promo code on the checkout page so that I get the discount before I pay.\n\nAcceptance criteria\n1. A 'Promo code' field is shown on the checkout page under the order summary.\n2. When a valid code is entered and 'Apply' is clicked, the discount is shown in the order summary and the total is updated.\n3. When an invalid code is entered, an error message is shown.\n4. Only one promo code can be applied per order."
        },
        {
          label: "User Registration",
          content: "Story: User Registration\nAs a new user, I want to create an account using my email and password so that I can access the member-only features.\n\nAC:\n1. User enters email and password.\n2. User clicks 'Sign Up'.\n3. A verification email is sent to the user's email address."
        }
      ]}
    />
  );
};

export default RequirementReview;
