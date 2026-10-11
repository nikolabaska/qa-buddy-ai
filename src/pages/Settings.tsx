import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Save, Trash2, Key, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAI, AIProvider } from '@/hooks/useAI';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  const { provider, apiKey, updateSettings, clearSettings } = useAI();
  const [providerValue, setProviderValue] = useState<AIProvider>(provider);
  const [inputValue, setInputValue] = useState(apiKey || '');

  const handleSave = () => {
    updateSettings(providerValue, inputValue);
  };

  const handleClear = () => {
    setInputValue('');
    clearSettings();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronLeft size={20} className="text-slate-600" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
            <Sparkles size={20} />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">Settings</span>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Configuration</h1>
          <p className="text-slate-600">Manage your AI provider credentials to enable the agents.</p>
        </div>

        <Card className="p-8 bg-white shadow-sm border-slate-200 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Key size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">AI Provider Settings</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">AI Provider</label>
              <Select 
                value={providerValue} 
                onValueChange={(value: AIProvider) => setProviderValue(value)}
              >
                <SelectTrigger className="rounded-xl border-slate-200 h-11">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">OpenAI (GPT-4)</SelectItem>
                  <SelectItem value="anthropic">Anthropic (Claude 3.5)</SelectItem>
                  <SelectItem value="gemini">Google (Gemini 1.5 Pro)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">API Secret Key</label>
              <div className="flex gap-3">
                <Input 
                  type="password" 
                  placeholder="Enter your API key..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="rounded-xl border-slate-200"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleClear} 
                  className="rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                Your API key is stored locally in your browser and never sent to our servers.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Link to="/">
                <Button variant="ghost" className="rounded-xl px-6">
                  Cancel
                </Button>
              </Link>
              <Button 
                onClick={handleSave} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-6 flex items-center gap-2"
              >
                <Save size={18} />
                Save Settings
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-12 p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
          <h3 className="text-indigo-900 font-bold mb-2">Need an API Key?</h3>
          <p className="text-indigo-700 text-sm leading-relaxed mb-4">
            Depending on your chosen provider, you will need an account and an API key. 
            These keys allow the AI agents to communicate with the respective AI models.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a 
              href="https://platform.openai.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1 p-2 bg-white rounded-lg border border-indigo-100"
            >
              OpenAI Platform <ChevronRight size={12} />
            </a>
            <a 
              href="https://console.anthropic.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1 p-2 bg-white rounded-lg border border-indigo-100"
            >
              Anthropic Console <ChevronRight size={12} />
            </a>
            <a 
              href="https://aistudio.google.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1 p-2 bg-white rounded-lg border border-indigo-100"
            >
              Google AI Studio <ChevronRight size={12} />
            </a>
          </div >
        </div >
      </main>
    </div >
  );
};

export default Settings;
}
