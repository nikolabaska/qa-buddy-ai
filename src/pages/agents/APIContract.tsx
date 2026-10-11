import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const APIContract = () => {
  return (
    <AgentLayout 
      title="API Contract"
      description="Reads an OpenAPI specification and suggests request validations, negative cases and schema checks."
      systemPrompt="You are an API Quality Specialist. Analyze the provided OpenAPI/Swagger specification. Suggest: 1) Request validation checks (required fields, formats), 2) Negative test cases (4xx errors), 3) Schema validation points, 4) Potential security vulnerabilities in the contract. Provide specific examples of request/response payloads."
    />
  );
};

export default APIContract;
