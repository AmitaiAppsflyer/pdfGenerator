# pdfGenerator

AI Research Assistant 🔎📄

AI Research Assistant is a web application designed to help users conduct in-depth research on any given subject. Users provide a prompt, and our AI-powered agent, utilizing Large LanguageModels (LLMs), performs the research and generates a comprehensive report. This report is then converted into a downloadable PDF file.

## Core Features ✨

* **📝 Prompt-Based Research:** Input your research topic as a natural language prompt.
* **🧠 AI-Powered Deep Research:** An intelligent agent leverages LLMs (starting with Gemini) to gather and synthesize information.
* **🤖 Configurable LLM Options:** (Future) Choose from various LLMs like Gemini, ChatGPT, Claude, and more.
* **📑 Report Generation:** The AI compiles a structured and informative report based on the research.
* **📄 PDF Conversion & Download:** Receive your research report as a conveniently downloadable PDF.
* **👤 User Authentication:** Secure accounts for managing your research.
* **📚 Research History:** Access your previous research queries and generated reports.
* **📱 Responsive Design:** Use the application seamlessly on desktop, tablet, or mobile.

## Technology Stack 🛠️

* **Frontend (Client):**
    * React
    * TypeScript
    * State Management (e.g., Redux Toolkit, Zustand)
    * Axios (for API calls)
    * React Router (for navigation)
* **Backend (Server):**
    * Node.js
    * Express.js (framework for Node.js)
    * TypeScript (optional, for consistency)
    * Database (e.g., PostgreSQL, MongoDB)
    * Message Queue (e.g., RabbitMQ, BullMQ with Redis) for asynchronous task handling
    * PDF Generation Library (e.g., PDFKit, Puppeteer, Playwright)
    * JWT (for authentication)
* **AI Agent:**
    * Python (recommended) or Node.js
    * LLM SDKs (e.g., Google AI Gemini SDK)
    * Frameworks like LangChain (Python or JS) are highly recommended for agent development, LLM abstraction, and tool integration.

## System Architecture Overview 🏗️

The application follows a three-tier architecture:

1.  **Client (React + TypeScript):** Handles user interaction, takes research prompts, displays progress, and allows PDF downloads.
2.  **Server (Node.js):** Manages user requests, authentication, orchestrates background research tasks via a message queue, interacts with the AI Agent, and handles PDF generation and delivery.
3.  **AI Agent (Python/Node.js + LLMs):** Receives research prompts from the server, performs the core research using the configured LLM (and potentially other tools like web search), structures the report, and returns it to the server.

## Getting Started 🚀

(This section would include instructions on how to set up the development environment, install dependencies, configure API keys for LLMs, and run the application.)

### Prerequisites

* Node.js (specify version)
* npm or yarn
* Python (if AI agent is in Python, specify version)
* Access to LLM APIs (e.g., Google AI Studio for Gemini API key)
* Database instance (e.g., PostgreSQL running locally or in the cloud)
* Message Queue instance (e.g., Redis, RabbitMQ)

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install backend dependencies
cd server
npm install # or yarn install
# Configure environment variables in a .env file (see .env.example)
# Run database migrations (if applicable)

# Install frontend dependencies
cd ../client
npm install # or yarn install
# Configure environment variables (e.g., API endpoint)

# (If AI Agent is a separate service)
# cd ../ai-agent
# pip install -r requirements.txt
# Configure environment variables
