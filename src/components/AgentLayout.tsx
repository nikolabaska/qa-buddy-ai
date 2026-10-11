import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, RefreshCw, Settings as SettingsIcon } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useAI } from '@/hooks/useAI';

interface AgentLayoutProps {
  title: string;
  description: string;
  systemPrompt: string;
  children?: React.ReactNode; // Optional custom input fields
}

export const AgentLayout: React.FC<AgentLayoutProps> = ({ title, description, systemPrompt, children }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const { generateResponse, isLoading, error, apiKey } = useAI();

  const handleRun = async () => {
    if (!input.trim()) return;
    
    try {
      const result = await generateResponse(systemPrompt, input);
      setOutput(result);
    } catch (err: any) {
      // error is handled by the hook but we might want local feedback
      console.error(err);
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
               <Sparkles size={20} />
             </div>
             <span className="font-bold text-xl text-slate-900 tracking-tight">QABuddy AI</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {!apiKey && (
            <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-700 rounded-full animate-pulse">
              API Key Missing
            </span>
          )}
          <Link to="/settings">
            <Button variant="ghost" size="icon" className="rounded-full">
              <SettingsIcon size={20} className="text-slate-500" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Agent Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
            {title}
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            {description}
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Input Panel */}
          <Card className="flex flex-col bg-white shadow-sm border-slate-200 overflow-hidden rounded-2xl">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Input</span>
              <Button variant="ghost" size="sm" onClick={handleClear} className="text-slate-500 hover:text-slate-700">
                <RefreshCw size={14} className="mr-2" />
                Clear
              </Button>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-4">
              {children ? (
                <div className="flex-1">{children}</div>
              ) : (
                <Textarea 
                  placeholder="Paste your requirements, code, or logs here..."
                  className="flex-1 min-h-[400px] resize-none p-4 text-slate-800 border-slate-200 focus:ring-indigo-500 focus:border-indigo-500 rounded-xl"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              )}
            </div>
            <div className="p-4 border-t border-slate-100 bg-white">
              <Button 
                onClick={handleRun} 
                disabled={isLoading || !input.trim()}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-6 rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Run Agent
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Output Panel */}
          <Card className="flex flex-col bg-white shadow-sm border-slate-200 overflow-hidden rounded-2xl">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">AI Analysis</span>
            </div>
            <div className="p-6 flex-1 overflow-y-auto prose prose-slate max-w-none">
              {isLoading ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4 py-20">
                  <Loader2 className="animate-spin text-indigo-500" size={40} />
                  <p className="animate-pulse font-medium">AI is thinking...</p>
                </div>
              ) : output ? (
                <div className="text-slate-800 leading-relaxed">
                  <ReactMarkdown>{output}</ReactMarkdown>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4 py-20 text-center">
                  <div className="p-4 bg-slate-100 rounded-full">
                    <Sparkles size={32} className="text-slate-300" />
                  </div>
                  <p className="max-w-xs">
                    Enter your data on the left and run the agent to see the analysis here.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
