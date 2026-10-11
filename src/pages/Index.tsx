import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSearch, 
  ListPlus, 
  Code2, 
  ShieldCheck, 
  Filter, 
  Activity, 
  PenTool, 
  Target, 
  Trophy,
  ChevronRight
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AGENTS = [
  {
    id: 'requirement-review',
    title: 'Requirement Review',
    description: 'Reviews user stories and identifies missing acceptance criteria, edge cases and unclear requirements.',
    icon: FileSearch,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    path: '/agent/requirement-review'
  },
  {
    id: 'test-case-gen',
    title: 'Test Case Generation',
    description: 'Creates an initial set of positive, negative, boundary and integration scenarios from a story.',
    icon: ListPlus,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    path: '/agent/test-case-gen'
  },
  {
    id: 'api-contract',
    title: 'API Contract',
    description: 'Reads an OpenAPI specification and suggests request validations, negative cases and schema checks.',
    icon: Code2,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    path: '/agent/api-contract'
  },
  {
    id: 'code-review',
    title: 'Automation Code Review',
    description: 'Checks scripts for hard-coded data, weak assertions, unstable locators, fixed waits and duplicated code.',
    icon: ShieldCheck,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    path: '/agent/code-review'
  },
  {
    id: 'failure-triage',
    title: 'Failure Triage',
    description: 'Analyses test reports, logs and stack traces, then classifies failures as product defects, automation issues, etc.',
    icon: Filter,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    path: '/agent/failure-triage'
  },
  {
    id: 'flaky-analysis',
    title: 'Flaky Test Analysis',
    description: 'Examines execution history and identifies frequently failing tests, timing patterns and possible root causes.',
    icon: Activity,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    path: '/agent/flaky-analysis'
  },
  {
    id: 'defect-drafting',
    title: 'Defect Drafting',
    description: 'Converts evidence such as logs, screenshots and API responses into a structured defect report.',
    icon: PenTool,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    path: '/agent/defect-drafting'
  },
  {
    id: 'regression-selection',
    title: 'Regression Selection',
    description: 'Uses code changes, impacted services and historical defects to recommend the most relevant regression tests.',
    icon: Target,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    path: '/agent/regression-selection'
  },
  {
    id: 'release-summary',
    title: 'Release Summary',
    description: 'Combines execution results, defect status and known risks into a concise release-quality report.',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    path: '/agent/release-summary'
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 border border-indigo-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            AI-Powered QA Assistant
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Empower Your <span className="text-indigo-600">QA Workflow</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Eliminate repetitive daily tasks with specialized AI agents designed for software quality engineers. 
            From requirement review to release summaries, let AI handle the grunt work.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-6 text-lg rounded-2xl font-bold">
              Get Started
            </Button>
            <Link to="/settings">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-2xl font-semibold">
                Configure API Key
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="flex-1 p-8 md:p-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS.map((agent) => (
            <Link key={agent.id} to={agent.path} className="group">
              <Card className="h-full p-6 transition-all duration-300 border-slate-200 bg-white group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-indigo-300 rounded-3xl flex flex-col">
                <div className={`w-12 h-12 ${agent.bgColor} ${agent.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <agent.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {agent.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  {agent.description}
                </p>
                <div className="flex items-center text-indigo-600 font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                  Launch Agent
                  <ChevronRight size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <footer className="p-8 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
        © {new Date().getFullYear()} QABuddy AI • Built for QA Engineers
      </footer>
    </div>
  );
};

export default Index;
