import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const RequirementReview = () => {
  return (
    <AgentLayout 
      title="Requirement Review"
      description="Review user stories and identify missing acceptance criteria, edge cases and unclear requirements."
      systemPrompt="You are an expert QA Lead. Review the provided user story or requirement. Identify: 1) Missing Acceptance Criteria, 2) Potential edge cases (negative scenarios), 3) Ambiguous or unclear requirements that need clarification. Format the output as a structured audit report with clear headings."
    />
  );
};

export default RequirementReview;
