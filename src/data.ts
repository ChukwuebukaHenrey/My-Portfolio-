import { Interest, Project, RoadmapStep, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Chukwuebuka Favour Henry",
  preferredName: "Henry",
  role: "Full Stack Developer & Tech Multipotentialite",
  bio: "Full stack developer trained through The Odin Project and intensive self-directed learning. Passionate about building intelligent, responsive applications at the intersection of Web3, AI, and sleek UI/UX design.",
  email: "chukwuebukahlove@gmail.com",
  github: "https://github.com/ChukwuebukaHenrey",
  linkedin: "https://www.linkedin.com/in/chukwuebuka-henry-b1264625b",
  twitter: "https://twitter.com",
  location: "Global / Remote",
  availability: "Open to Collaborations, Internships & Roles"
};

export const PROJECTS: Project[] = [
  {
    id: "grantbase",
    title: "GrantBase",
    tagline: "Intelligent Web & AI Grant Discovery Platform",
    description: "A comprehensive discovery and application matching portal crafted in Google AI Studio. GrantBase streamlines the process of finding technical funding, startup accelerators, and research bounties tailored to modern developers.",
    tags: ["Google AI Studio", "React", "AI Matching", "Full Stack"],
    status: "Active Prototype",
    platform: "Google AI Studio",
    features: [
      "AI-driven eligibility parsing & recommendations",
      "Interactive filtering by equity, bounty size & deadline",
      "Sleek responsive dashboard built for swift triage"
    ],
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    iconName: "Award",
    previewUrl: "https://ai.studio"
  },
  {
    id: "wisedrop",
    title: "WiseDrop",
    tagline: "Smart Curated Airdrop & Web3 Alpha Tracker",
    description: "Designed and prototyped in Google AI Studio to solve Web3 information overload. WiseDrop verifies, categorizes, and tracks high-signal crypto ecosystems and decentralized protocol incentive programs.",
    tags: ["Google AI Studio", "Blockchain", "UI/UX Design", "JavaScript"],
    status: "Iterating",
    platform: "Google AI Studio",
    features: [
      "Protocol verification & risk assessment tiering",
      "Step-by-step interactive participation checklists",
      "Clean dark-mode aesthetic with real-time countdowns"
    ],
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    iconName: "Droplets",
    previewUrl: "https://ai.studio"
  }
];

export const INTERESTS: Interest[] = [
  {
    id: "blockchain",
    title: "Blockchain Technology",
    description: "Fascinated by decentralized consensus, smart contracts, and Web3 protocol architectures. Interested in building trustless dApps and financial tooling.",
    icon: "Blocks",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    highlight: "Web3 & Smart Contracts"
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description: "Leveraging LLMs, agentic workflows (like Google AI Studio & Gemini), and prompt engineering to build next-generation applications with supercharged UX.",
    icon: "Cpu",
    color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    highlight: "LLMs & Agentic Systems"
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description: "Obsessed with pixel-perfect responsive layouts, intuitive micro-interactions, dark mode aesthetics, and human-centered design principles.",
    icon: "Palette",
    color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    highlight: "Human-Centered Design"
  },
  {
    id: "tech-writing",
    title: "Technical Writing",
    description: "Breaking down complex engineering concepts, documentation tutorials, and Odin Project learnings into accessible, clear, and engaging developer guides.",
    icon: "FileText",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    highlight: "Developer Documentation"
  },
  {
    id: "software-engineering",
    title: "Software Architecture",
    description: "Focused on writing clean, maintainable modular JavaScript/TypeScript, robust data flow, testable logic, and scalable full-stack web solutions.",
    icon: "Code2",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    highlight: "Clean Code & Scalability"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & Ecosystem",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced Focus", icon: "FileCode" },
      { name: "React Ecosystem", level: "Expanding Mastery", icon: "Atom" },
      { name: "HTML5 & Semantic Web", level: "Solid Foundation", icon: "Layout" },
      { name: "Tailwind CSS & Responsive UI", level: "Daily Workflow", icon: "Wind" }
    ]
  },
  {
    title: "Backend & Foundations",
    skills: [
      { name: "Node.js & Express", level: "Odin Project Track", icon: "Server" },
      { name: "RESTful APIs & Data Fetching", level: "Practical Application", icon: "Network" },
      { name: "Git & GitHub Version Control", level: "Core Habit", icon: "GitBranch" },
      { name: "Google AI Studio & Rapid Prototyping", level: "Active Builder", icon: "Sparkles" }
    ]
  }
];

export const ROADMAP: RoadmapStep[] = [
  {
    number: "01",
    title: "The Odin Project & Core JavaScript",
    description: "Deep dive into vanilla JS fundamentals, functional programming, DOM manipulation, async logic, and modern ES6+ architecture.",
    status: "Completed",
    tags: ["JavaScript", "Algorithms", "Git", "CSS Flexbox/Grid"]
  },
  {
    number: "02",
    title: "React Ecosystem & AI Rapid Prototyping",
    description: "Building production-grade component architectures, custom hooks, state management, and leveraging Google AI Studio for projects like GrantBase and WiseDrop.",
    status: "Current Focus",
    tags: ["React 19", "Vite", "Google AI Studio", "Tailwind CSS"]
  },
  {
    number: "03",
    title: "Backend Integration & Full Stack Polish",
    description: "Expanding Node.js backend pipelines, database integrations (SQL/NoSQL), authentication flows, and launching finalized versions of side projects.",
    status: "Upcoming Goal",
    tags: ["Node.js", "Express", "Databases", "Deployment"]
  },
  {
    number: "04",
    title: "Web3 & AI Hybrid Applications",
    description: "Synthesizing Blockchain interests with smart agent interfaces. Writing technical deep-dives and contributing to open-source developer ecosystems.",
    status: "Upcoming Goal",
    tags: ["Blockchain", "AI Agents", "Technical Writing", "Open Source"]
  }
];
