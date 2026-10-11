import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const APIContract = () => {
  return (
    <AgentLayout 
      title="API Contract"
      description="Reads an OpenAPI specification and suggests request validations, negative cases and schema checks."
      systemPrompt="You are an API Quality Specialist. Analyze the provided OpenAPI/Swagger specification. Suggest: 1) Request validation checks (required fields, formats), 2) Negative test cases (4xx errors), 3) Schema validation points, 4) Potential security vulnerabilities in the contract. Provide specific examples of request/response payloads."
      examples={[
        {
          label: "User API Spec",
          content: `openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users/{userId}:
    get:
      summary: Get user by ID
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  id: { type: string, format: uuid }
                  name: { type: string }
                  email: { type: string, format: email }`
        }
      ]}
    />
  );
};

export default APIContract;
