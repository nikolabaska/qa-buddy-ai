import { useState } from 'react';

export type AIProvider = 'openai' | 'anthropic' | 'gemini';

interface ProviderConfig {
  endpoint: string;
  model: string;
  headers: (key: string) => Record<string, string>;
  formatPayload: (systemPrompt: string, userPrompt: string) => any;
  formatResponse: (data: any) => string;
}

const PROVIDER_CONFIGS: Record<AIProvider, ProviderConfig> = {
  openai: {
    endpoint: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4-turbo-preview',
    headers: (key) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`,
    }),
    formatPayload: (systemPrompt, userPrompt) => ({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
    }),
    formatResponse: (data) => data.choices[0].message.content,
  },
  anthropic: {
    endpoint: 'https://api.anthropic.com/v1/messages',
    model: 'claude-3-5-sonnet-20240620',
    headers: (key) => ({
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    }),
    formatPayload: (systemPrompt, userPrompt) => ({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
    }),
    formatResponse: (data) => data.content[0].text,
  },
  gemini: {
    endpoint: (key: string) => `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${key}`,
    model: 'gemini-1.5-pro',
    headers: () => ({
      'Content-Type': 'application/json',
    }),
    formatPayload: (systemPrompt, userPrompt) => ({
      contents: [
        { 
          role: 'user', 
          parts: [{ text: `System Instructions: ${systemPrompt}\n\nUser Input: ${userPrompt}` }] 
        }
      ],
      generationConfig: {
        temperature: 0.7,
      }
    }),
    formatResponse: (data) => data.candidates[0].content.parts[0].text,
  },
} as any; // Use any because endpoint for gemini is a function

export const useAI = () => {
  const [provider, setProvider] = useState<AIProvider>(
    (localStorage.getItem('ai_provider') as AIProvider) || 'openai'
  );
  const [apiKey, setApiKey] = useState<string | null>(
    localStorage.getItem('ai_api_key')
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateSettings = (newProvider: AIProvider, newKey: string) => {
    localStorage.setItem('ai_provider', newProvider);
    localStorage.setItem('ai_api_key', newKey);
    setProvider(newProvider);
    setApiKey(newKey);
  };

  const clearSettings = () => {
    localStorage.removeItem('ai_provider');
    localStorage.removeItem('ai_api_key');
    setProvider('openai');
    setApiKey(null);
  };

  const generateResponse = async (systemPrompt: string, userPrompt: string) => {
    if (!apiKey) {
      throw new Error('API Key not found. Please go to Settings to add your API Key.');
    }

    const config = PROVIDER_CONFIGS[provider];
    setIsLoading(true);
    setError(null);

    try {
      const endpoint = typeof config.endpoint === 'function' 
        ? config.endpoint(apiKey) 
        : config.endpoint;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: config.headers(apiKey),
        body: JSON.stringify(config.formatPayload(systemPrompt, userPrompt)),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || errorData.message || 'Failed to generate response');
      }

      const data = await response.json();
      return config.formatResponse(data);
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    provider,
    setProvider,
    apiKey,
    updateSettings,
    clearSettings,
    generateResponse,
    isLoading,
    error,
  };
};
