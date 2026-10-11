import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RequirementReview from "./pages/agents/RequirementReview";
import TestCaseGen from "./pages/agents/TestCaseGen";
import APIContract from "./pages/agents/APIContract";
import CodeReview from "./pages/agents/CodeReview";
import FailureTriage from "./pages/agents/FailureTriage";
import FlakyAnalysis from "./pages/agents/FlakyAnalysis";
import DefectDrafting from "./pages/agents/DefectDrafting";
import RegressionSelection from "./pages/agents/RegressionSelection";
import ReleaseSummary from "./pages/agents/ReleaseSummary";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/agent/requirement-review" element={<RequirementReview />} />
        <Route path="/agent/test-case-gen" element={<TestCaseGen />} />
        <Route path="/agent/api-contract" element={<APIContract />} />
        <Route path="/agent/code-review" element={<CodeReview />} />
        <Route path="/agent/failure-triage" element={<FailureTriage />} />
        <Route path="/agent/flaky-analysis" element={<FlakyAnalysis />} />
        <Route path="/agent/defect-drafting" element={<DefectDrafting />} />
        <Route path="/agent/regression-selection" element={<RegressionSelection />} />
        <Route path="/agent/release-summary" element={<ReleaseSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
