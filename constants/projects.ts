export const projects = [
{
    title: 'GenAff — AI API Gateway Platform',
    slug: 'genaff',
    tagline:
      'Making AI affordable — a unified API gateway that lets developers start using AI APIs with as little as ₹10.',
    overview:
      'GenAff is an AI API gateway platform designed to make AI usage affordable and accessible for developers. Most AI platforms require a minimum $5–$10 top-up, creating a barrier for students and developers who want to experiment with AI APIs. GenAff solves this by enabling developers to start using AI APIs with very small amounts (₹10) through a unified API. The platform features multi-provider routing (OpenAI, Gemini, DeepSeek), wallet--based billing with micro-transactions, dynamic request routing with provider abstraction, API key management, per-request cost tracking, rate limiting, and a developer dashboard with an API playground.',
    features: [
      'Multi-provider AI routing (OpenAI, Gemini, DeepSeek)',
      'Wallet-based billing system with micro-transactions (start from ₹10)',
      'Dynamic request routing and provider abstraction layer',
      'API key management and authentication system',
      'Usage tracking with cost calculation per request',
      'Rate limiting and request validation',
      'Developer dashboard with API playground',
    ],
    techStack: [
      'Node.js',
      'Next.js',
      'API Gateway',
      'OpenAI',
      'Gemini',
      'DeepSeek',
    ],
    challenges: [
      'Designing a unified API abstraction layer across multiple AI providers with different schemas.',
      'Implementing accurate per-request cost tracking and micro-billing logic.',
      'Building a scalable gateway architecture for extensibility (adding new providers easily).',
      'Ensuring low-latency request routing with provider failover.',
    ],
    learnings: [
      'Designed API gateway architecture for routing and provider abstraction.',
      'Implemented cost tracking and billing logic per API call.',
      'Integrated multiple AI providers into a unified developer-facing interface.',
      'Built a system designed for extensibility — adding new providers requires minimal code changes.',
    ],
    feedback: true,
    links: {
      live: 'https://genaff.shouriya.tech',
      github: 'https://github.com/iSHOURIYA/GenAff',
    },
  },
  {
    title: 'FraudNet.AI',
    slug: 'fraudnet-ai',
    tagline:
      'Real-time financial fraud detection system with sub-200ms inference, 94.2% accuracy, and production-grade security.',
    overview:
      'FraudNet.AI is a production-grade financial fraud detection platform that combines machine learning with enterprise security. Built with Flask and XGBoost, it processes transactions in real-time with sub-200ms inference latency while maintaining 94.2% accuracy and ~90% F1 score. The system features SMOTE and class-weight tuning for imbalanced datasets, JWT + RBAC authorization (Admin / Analyst / Viewer), Redis-backed sessions with rate limiting, and append-only audit logs for compliance. Deployed via Docker + Nginx with Prometheus + Grafana monitoring, CI/CD via GitHub Actions, and 95%+ test coverage across 450+ tests.',
    features: [
      'Sub-200ms real-time fraud inference on financial transactions',
      '94.2% accuracy with ~90% F1 score using XGBoost',
      'SMOTE + class-weight tuning for imbalanced fraud datasets',
      'JWT authentication with RBAC (Admin / Analyst / Viewer roles)',
      'Redis-backed session management with rate limiting',
      'Append-only audit logs for regulatory compliance',
      'Docker + Nginx production deployment',
      'Prometheus + Grafana observability and monitoring',
      'CI/CD pipeline via GitHub Actions',
      '95%+ test coverage with 450+ automated tests',
    ],
    techStack: [
      'Python',
      'Flask',
      'XGBoost',
      'Next.js',
      'MySQL',
      'Redis',
      'Kafka',
      'Docker',
    ],
    challenges: [
      'Achieving sub-200ms inference latency under production load.',
      'Handling severely imbalanced fraud datasets with SMOTE and class-weight tuning.',
      'Implementing multi-role RBAC authorization with secure JWT sessions.',
      'Building append-only audit logging for compliance requirements.',
      'Maintaining 95%+ test coverage across 450+ tests with CI/CD enforcement.',
    ],
    learnings: [
      'Designed low-latency ML inference pipelines for real-time decision systems.',
      'Implemented production-grade security patterns (JWT, RBAC, rate limiting).',
      'Built comprehensive observability with Prometheus and Grafana.',
      'Developed robust CI/CD workflows with GitHub Actions for automated testing and deployment.',
    ],
    feedback: true,
    links: {
      live: '',
      github: 'https://github.com/iSHOURIYA',
    },
  },

  {
    title: 'DocPat — Decentralized Medical Records',
    slug: 'docpat',
    tagline:
      'Blockchain-powered medical records platform with on-chain access control, IPFS storage, and end-to-end encryption.',
    overview:
      'DocPat is a decentralized medical records management system that eliminates centralized authentication in favor of on-chain access control via Solidity smart contracts. Medical documents are stored on IPFS using content-addressed identifiers (CIDs), ensuring tamper-proof and censorship-resistant storage. The platform provides role-based APIs for doctors, patients, and administrators, end-to-end encryption for all records, immediate access revocation capabilities, and a full on-chain audit trail. The system is designed for ML dataset readiness and regulatory compliance.',
    features: [
      'On-chain access control via Solidity smart contracts — no centralized auth',
      'IPFS storage with content-addressed identifiers (CIDs)',
      'Role-based REST APIs for doctors, patients, and administrators',
      'End-to-end encryption for all medical records',
      'Immediate access revocation without intermediaries',
      'Full on-chain audit trail for compliance',
      'ML dataset readiness for medical research',
    ],
    techStack: [
      'Flask',
      'IPFS',
      'Solidity',
      'MongoDB',
    ],
    challenges: [
      'Eliminating centralized authentication while maintaining security.',
      'Implementing immediate access revocation on-chain.',
      'Ensuring end-to-end encryption across decentralized storage.',
      'Designing the system for ML dataset readiness and compliance.',
    ],
    learnings: [
      'Built decentralized identity and access control with Solidity.',
      'Integrated IPFS for tamper-proof document storage.',
      'Designed privacy-preserving medical data systems.',
      'Implemented compliance-first architecture for healthcare applications.',
    ],
    feedback: true,
    links: {
      live: '',
      github: 'https://github.com/iSHOURIYA',
    },
  },

  {
    title: 'AI Investment Research Agent',
    slug: 'ai-investment-agent',
    tagline:
      'AI-powered investment research platform — search any public company and get an Invest/Pass decision with financial data and news analysis.',
    overview:
      'A production-ready AI investment research agent built with a Next.js 14 frontend and FastAPI backend. The system accepts a company name, gathers financial data via yfinance and news via DuckDuckGo, then uses an LLM (OpenAI GPT-3.5-turbo or Groq Llama 3) to return an Invest or Pass decision with detailed reasoning. Features JWT authentication, portfolio tracking, research history with pagination, and a neo-brutalist UI with dark mode support.',
    features: [
      'AI-powered Invest/Pass decision for any public company',
      'Real-time financial data via yfinance (price, P/E, market cap, revenue growth)',
      'News and web data via DuckDuckGo search',
      'LLM-powered reasoning with OpenAI GPT-3.5-turbo or Groq Llama 3',
      'JWT authentication with signup/login flows',
      'Portfolio tracking — create portfolios, add/remove holdings',
      'Paginated research history with search and deletion',
      'Neo-brutalist UI with dark mode, Framer Motion animations',
    ],
    techStack: [
      'Next.js 14',
      'FastAPI',
      'TypeScript',
      'Python',
      'LangChain',
      'yfinance',
      'DuckDuckGo Search',
      'SQLite',
      'JWT',
    ],
    challenges: [
      'Designing a linear AI pipeline that gracefully handles partial tool failures.',
      'Implementing unified API abstraction across OpenAI and Groq providers.',
      'Building a responsive neo-brutalist UI with smooth Framer Motion animations.',
      'Securing JWT auth with proper password hashing and token expiration.',
    ],
    learnings: [
      'Built an AI agent pipeline with tool orchestration and JSON validation.',
      'Implemented full-stack auth with JWT and SQLite storage.',
      'Designed a neo-brutalist design system with dark mode support.',
      'Integrated multiple LLM providers with fallback support.',
    ],
    feedback: true,
    links: {
      live: 'https://insideiim.shouriya.tech',
      github: 'https://github.com/iSHOURIYA/ai-investment-agent',
    },
  },
  {
    title: 'Quanta Ballet — Distributed Voting System',
    slug: 'quanta-ballet',
    tagline:
      'Blockchain-based distributed voting system with deterministic single-use tokens and smart contract enforced rules.',
    overview:
      'Quanta Ballet is a distributed voting system built on Hyperledger Fabric and Solidity that ensures transparent, tamper-proof elections. The system uses deterministic single-use tokens to prevent double voting, smart contract enforced voting rules for consistency, and public verifiability so anyone can audit results. It is resistant to common attacks including double voting, replay attacks, and ballot manipulation.',
    features: [
      'Distributed voting on Hyperledger Fabric blockchain',
      'Deterministic single-use tokens preventing double voting',
      'Smart contract enforced voting rules and constraints',
      'Public verifiability — anyone can audit election results',
      'Attack resistance: double voting, replay, ballot manipulation',
      'Transparent and tamper-proof election records',
    ],
    techStack: [
      'Flask',
      'Hyperledger Fabric',
      'Solidity',
      'PostgreSQL',
    ],
    challenges: [
      'Implementing deterministic single-use tokens for ballot integrity.',
      'Ensuring public verifiability without compromising voter privacy.',
      'Defending against double voting and replay attacks.',
      'Orchestrating consensus across distributed Hyperledger Fabric nodes.',
    ],
    learnings: [
      'Designed cryptographic voting protocols on blockchain.',
      'Built distributed systems with Hyperledger Fabric.',
      'Implemented attack-resistant consensus mechanisms.',
      'Developed publicly verifiable election audit systems.',
    ],
    feedback: true,
    links: {
      live: '',
      github: 'https://github.com/iSHOURIYA',
    },
  },
];
