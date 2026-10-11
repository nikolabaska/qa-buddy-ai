import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const FlakyAnalysis = () => {
  return (
    <AgentLayout 
      title="Flaky Test Analysis"
      description="Examines execution history and identifies frequently failing tests, timing patterns and possible root causes."
      systemPrompt="You are a Reliability Engineer. Examine the provided execution history and failure patterns of a test. Identify: 1) Frequency of failure, 2) Timing patterns (e.g., fails only on Monday mornings), 3) Possible root causes (race conditions, network lag). Suggest a strategy to stabilize the test."
    />
  );
};

export default FlakyAnalysis;
