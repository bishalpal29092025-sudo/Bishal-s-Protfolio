export const profile = {
  name: "Bishal Pal",
  firstName: "Bishal",
  lastName: "Pal",
  title: "Software Engineer",
  tagline: "Full Stack · Backend Systems · Distributed Applications",
  location: "Kolkata, India",
  email: "bishalpal29092025@gmail.com",
  phone: "+91 7384472372",
  linkedin: "https://www.linkedin.com/in/bishal-pal-664611396/",
  github: "https://github.com/bishalpal29092025-sudo",
  resume: "/Bishal_Pal_Resume.pdf",
  summary:
    "I design and ship full-stack products, backend pipelines, and on-chain systems — from MERN platforms and AI SaaS to Ethereum contracts and Solana programs. I care about speed, reliability, and interfaces that feel alive.",
};

export const rotatingRoles = [
  "Full Stack Engineer",
  "Backend Systems Builder",
  "Blockchain Developer",
  "Distributed Apps",
];

export const stats = [
  { value: 5, suffix: "+", label: "Smart contracts shipped" },
  { value: 40, suffix: "%", label: "Gas & deploy time cut" },
  { value: 44, suffix: "%", label: "Lighthouse score lift" },
  { value: 90, suffix: "%+", label: "On-chain test coverage" },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const experience = [
  {
    role: "Software Developer Intern (Blockchain)",
    company: "Block Se Block",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    accent: "from-fuchsia-500 to-cyan-400",
    points: [
      "Engineered and deployed 5+ Solidity smart contracts (ERC-20, NFT minting) to Ethereum testnet, cutting gas costs and deployment time by 40% through bytecode and gas-usage optimization.",
      "Built a full-stack DApp with MetaMask authentication and ethers.js transaction handling for on-chain interactions.",
      "Implemented on-chain event listeners for real-time state updates and reached 90%+ test coverage with Hardhat and Chai.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Bluestocks",
    period: "May 2025 – Jul 2025",
    location: "Remote",
    accent: "from-amber-400 to-rose-500",
    points: [
      "Shipped MERN stack features for a stock market simulation platform supporting 1,000+ active users, lifting Lighthouse from 62 to 89 (44% increase).",
      "Optimized MongoDB aggregation pipelines, cutting average API response time by 35% under production load.",
      "Refactored core React/TypeScript components, reducing bundle size and improving render performance across 10+ pages.",
      "Collaborated in Agile sprints with daily standups and bi-weekly code reviews across a 6-engineer team.",
    ],
  },
];

export const projects = [
  {
    name: "StudyPilot AI",
    kind: "AI Study Coaching Platform",
    stack: ["Next.js", "TypeScript", "MongoDB", "LangChain", "OpenAI", "Gemini"],
    gradient: "from-violet-500 via-fuchsia-500 to-amber-400",
    glow: "rgba(168, 85, 247, 0.45)",
    points: [
      "Full-stack SaaS with adaptive quizzing, SM-2 spaced repetition, and AI-generated learning roadmaps on multi-LLM backends.",
      "RAG pipeline with LangChain for more accurate, contextual Q&A.",
      "Live progress dashboard with real-time analytics and scalable multi-user sessions in Next.js/TypeScript.",
    ],
  },
  {
    name: "AI Transaction Analytics",
    kind: "Async Data Processing System",
    stack: ["FastAPI", "Celery", "PostgreSQL", "Redis", "Docker"],
    gradient: "from-cyan-400 via-sky-500 to-emerald-400",
    glow: "rgba(34, 211, 238, 0.4)",
    points: [
      "Async ingestion pipeline for CSV transaction uploads via Celery workers, with Redis as the message broker.",
      "LLM transaction classifier with rule-based fallback and anomaly detection to flag suspicious patterns.",
      "PostgreSQL schema tuned for fast aggregation, deployed with SSL and JWT-authenticated endpoints.",
    ],
  },
  {
    name: "Solana DEX",
    kind: "On-Chain Order Book Engine",
    stack: ["Rust", "Anchor", "Next.js", "WebSockets", "Phantom"],
    gradient: "from-lime-400 via-emerald-400 to-teal-400",
    glow: "rgba(163, 230, 53, 0.35)",
    points: [
      "Native Solana program using PDAs for order-book state and CPIs for token transfers.",
      "Real-time limit-order matching on-chain for a decentralized order book.",
      "Next.js frontend with Phantom wallet auth, live WebSocket account subscriptions, deployed to Devnet.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    color: "text-fuchsia-300",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust", "C", "C++"],
  },
  {
    title: "Frontend",
    color: "text-cyan-300",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Framer Motion", "Accessible UI"],
  },
  {
    title: "Backend",
    color: "text-amber-300",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "Flask",
      "Django",
      "REST",
      "Microservices",
      "GraphQL-ready",
    ],
  },
  {
    title: "Data",
    color: "text-lime-300",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DuckDB",
      "Prisma",
      "Drizzle",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "text-rose-300",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Nginx",
      "Linux",
      "Celery",
      "HPA",
      "System Design",
    ],
  },
  {
    title: "Distributed",
    color: "text-violet-300",
    items: [
      "Ethereum",
      "Solidity",
      "Solana",
      "Anchor",
      "Event-Driven",
      "Message Queues",
      "WebSockets",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Adamas University, Kolkata",
    period: "2024 – 2026",
    score: "CGPA 7.5",
  },
  {
    degree: "B.Sc. in Computer Science (Honours)",
    school: "Bankura University",
    period: "2021 – 2024",
    score: "CGPA 7.6",
  },
];

export const achievements = [
  "IBM SkillsBuild AI Builders Challenge (2025): built a Python autonomous driving agent for the TORCS simulator.",
  "Active Solana Colosseum hackathon participant; published open-source Solana programs on GitHub.",
];

export const marquee = [
  "Next.js",
  "TypeScript",
  "Solidity",
  "Solana",
  "Rust",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "LangChain",
  "Docker",
  "Kubernetes",
  "Hardhat",
  "Celery",
  "Redis",
  "Framer Motion",
];
