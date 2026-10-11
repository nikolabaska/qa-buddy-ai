# 🚀 QABuddy AI - QA Agent Hub

QABuddy AI is a professional productivity suite designed for Software Quality Assurance (QA) engineers. It provides a hub of specialized AI agents that automate repetitive daily tasks—from reviewing requirements and generating test cases to triaging failures and drafting defect reports.

## ✨ Key Features

The hub contains 9 specialized AI agents:
- **Requirement Review**: Identifies missing acceptance criteria and edge cases.
- **Test Case Generation**: Creates positive, negative, and boundary scenarios.
- **API Contract**: Analyzes OpenAPI specs for validations and security.
- **Automation Code Review**: Audits scripts for unstable locators and bad practices.
- **Failure Triage**: Classifies failures as Product, Automation, Data, or Environment issues.
- **Flaky Test Analysis**: Identifies timing patterns and root causes for unstable tests.
- **Defect Drafting**: Converts logs/evidence into professional Jira-ready reports.
- **Regression Selection**: Recommends critical tests based on code changes.
- **Release Summary**: Generates concise quality reports for stakeholders.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **Icons**: Lucide React
- **Markdown**: React-Markdown (for AI output formatting)
- **AI Integration**: Multi-provider support (OpenAI, Anthropic, Google Gemini)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: version 18.0.0 or higher
- **npm** (comes with Node.js) or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/qa-buddy-ai.git
   cd qa-buddy-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal) in your browser.

## ⚙️ Configuration

QABuddy AI does not require a `.env` file for basic operation because it manages API keys securely in your browser's local storage.

**To activate the AI agents:**
1. Open the app and navigate to the **Settings** page.
2. Select your preferred **AI Provider** (OpenAI, Anthropic, or Google Gemini).
3. Paste your **API Secret Key**.
4. Click **Save Settings**.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder, ready to be deployed to Vercel, Netlify, or any static hosting provider.

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (AgentLayout, Shadcn UI)
├── hooks/          # Custom logic (useAI for API integrations)
├── pages/          # Application pages
│   ├── agents/     # Specialized AI Agent pages
│   ├── Index.tsx   # Dashboard/Home page
│   └── Settings.tsx# API Key and Provider configuration
└── App.tsx         # Main routing and entry point
```

---
*Built for QA Engineers by QA Engineers.* 🛠️✅
