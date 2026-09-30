const en = {
  meta: {
    title: "Mohammed Benghanem — AI Engineer & Full-Stack Developer",
    description:
      "AI engineer specialized in generative AI and full-stack development: RAG systems, LLM fine-tuning with QLoRA, AI agents, FastAPI and Next.js.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    cv: "Download CV",
    menu: "Open menu",
    close: "Close menu",
    switchTo: "Français",
  },
  hero: {
    availability: "Available now · On-site, hybrid or remote",
    role: "AI Engineer & Full-Stack Developer",
    headlineStart: "I build ",
    headlineAccent: "intelligent products",
    headlineEnd: " from model to interface.",
    intro:
      "Hi, I'm Mohammed Benghanem, a generative AI engineer who ships: RAG pipelines, QLoRA fine-tuning and agentic workflows, wrapped in secure APIs and polished React / Next.js interfaces.",
    ctaPrimary: "View my work",
    ctaSecondary: "Download CV",
    cards: {
      rag: { label: "RAG · ClauseLens", badge: "95%", sub: "verified citations" },
      finetune: { pill: "QLoRA fine-tuning", label: "False positives", value: "82% → 0.1%" },
      agents: { label: "Multi-agent AI", value: "LangGraph", pill: "Human-in-the-loop" },
      stack: { label: "Full-stack", badge: "Next.js", sub: "FastAPI · NestJS · Docker" },
    },
    trustText: "Technologies I've shipped with",
  },
  about: {
    eyebrow: "About me",
    title: "Generative AI, ",
    titleAccent: "built for production",
    body: [
      "I'm an artificial intelligence engineer specialized in generative AI and web development, from the interface to the application services.",
      "I design RAG systems, fine-tune large language models (LLMs) with QLoRA and orchestrate AI agents. I'm fluent in Python, FastAPI and React / Next.js to integrate predictive models and deploy secure applications.",
    ],
    highlights: [
      "RAG with hybrid search on pgvector",
      "LLM fine-tuning with QLoRA (PEFT / TRL)",
      "Multi-agent workflows & tool use",
      "Secure APIs & Docker deployments",
    ],
    cta: "Let's talk about your project",
    orbitTitle: "AI × Full-Stack",
    orbitBadge: "End-to-end",
    pillars: [
      {
        title: "Generative AI",
        text: "RAG with hybrid search, LLM fine-tuning (QLoRA, PEFT/TRL), multi-agent workflows with LangGraph and tool-using agents on the Claude API.",
      },
      {
        title: "Full-stack engineering",
        text: "FastAPI, NestJS and Node/Express backends, PostgreSQL / pgvector / PostGIS, and React / Next.js / TypeScript front-ends.",
      },
      {
        title: "Production mindset",
        text: "Leak-free evaluation, secured APIs with rate limiting, Docker deployments and real-time dashboards that people actually use.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've been ",
    titleAccent: "shipping",
    subtitle: "Three roles delivering AI and full-stack products for real businesses.",
    currentLabel: "Current role",
    items: [
      {
        role: "Freelance Web & AI Developer",
        company: "Taxi Tremplin",
        period: "Aug 2026 — Present",
        current: true,
        bullets: [
          "Designed the full backend in NestJS, PostgreSQL / PostGIS and Redis: geolocated driver dispatch, fare calculation, SMS authentication and notifications. Deployed with Docker.",
          "Built the admin dashboard in React / TypeScript to manage drivers, customers, rides, fares and payments.",
          "Developed a smart booking assistant on the Claude API (Anthropic) that lets customers order a taxi in natural language through AI agents and tool use.",
        ],
        tags: ["NestJS", "PostGIS", "Redis", "React", "TypeScript", "Claude API", "Docker"],
      },
      {
        role: "AI & Web Development Intern",
        company: "Yosobox",
        period: "Mar — Sep 2026",
        current: false,
        bullets: [
          "Developed two moisture-rate (LoD) prediction models: a physics-based model and an ANN model.",
          "Integrated both models into a real-time dashboard: FastAPI microservice, secured Node/Express API and Supabase storage.",
          "Created a secured API route (admin key, rate limiting) to trigger ANN predictions.",
          "Fixed integration bugs and exposed the physics model's drying curve.",
        ],
        tags: ["Python", "ANN", "FastAPI", "Node.js", "Express", "Supabase"],
      },
      {
        role: "AI & Web Development Intern",
        company: "Lotus Capital",
        period: "Jan — Mar 2026",
        current: false,
        bullets: [
          "Built a social-media competitive intelligence platform: multi-source collection (X, LinkedIn, RSS, Reddit) and engagement analysis.",
          "Designed multi-agent workflows with LangGraph to detect trends and generate content, with human-in-the-loop validation at every step.",
          "Implemented embedding-based similarity search and duplicate detection (pgvector), comparing published posts against competitors'.",
        ],
        tags: ["LangGraph", "Multi-agent", "pgvector", "Embeddings", "Python"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio & case studies",
    title: "Real projects, ",
    titleAccent: "measurable impact",
    subtitle: "A selection of AI systems I designed, trained and deployed.",
    featured: {
      label: "Featured project",
      category: "RAG · LLM fine-tuning",
      name: "ClauseLens",
      subtitle: "Contract clause analysis with RAG & QLoRA fine-tuning",
      description:
        "A RAG application that reviews commercial contracts against a 12-clause legal checklist, returning structured answers backed by exact quotations verified server-side.",
      bullets: [
        "Hybrid semantic + full-text search on PostgreSQL / pgvector, selected after benchmarking on a validation set.",
        "Leak-free evaluation on 510 contracts annotated by legal experts.",
        "QLoRA fine-tuning of Qwen2.5-1.5B (Hugging Face PEFT / TRL) on a single 6 GB GPU.",
      ],
      highlights: [
        { value: "12", label: "legal clauses" },
        { value: "510", label: "contracts" },
        { value: "1.5B", label: "parameters" },
      ],
      metricsTitle: "Results on unseen contracts",
      metrics: [
        { label: "False positives", before: "82%", after: "0.1%", beforeValue: 82, afterValue: 0.1 },
        { label: "Verified citations", before: "69%", after: "95%", beforeValue: 69, afterValue: 95 },
      ],
      before: "Before",
      after: "After",
      tags: ["PyTorch", "QLoRA", "Qwen2.5", "FastAPI", "PostgreSQL", "pgvector", "Next.js"],
    },
    personalTitle: "Personal & open-source projects",
    workTitle: "From my professional experience",
    viewCode: "View code",
    visitSite: "Visit site",
    personal: [
      {
        name: "Academic Paper Q&A",
        category: "RAG · Research assistant",
        status: "Open source",
        description:
          "Ask questions about research PDFs and get streamed answers grounded in the source text, with citations and a confidence score. Three-stage retrieval (vector + BM25 fused with Reciprocal Rank Fusion, then cross-encoder re-ranking) and a pluggable LLM: local Ollama, OpenAI or Anthropic.",
        tags: ["FastAPI", "ChromaDB", "BM25", "Cross-encoder", "React", "Docker"],
        bars: {
          title: "Recall@1 on an adversarial benchmark",
          items: [
            { label: "Vector only", value: 35, display: "35%" },
            { label: "Vector + re-rank", value: 58, display: "58%" },
            { label: "Hybrid (BM25 + vector)", value: 54, display: "54%" },
            { label: "Hybrid + re-rank", value: 100, display: "100%" },
          ],
        },
        stat: { value: "35% → 100%", label: "Recall@1, vector-only vs. full pipeline" },
        link: { href: "https://github.com/mohammed-benghanem/academic-paper-qa-rag", kind: "code" },
      },
      {
        name: "Multilingual SaaS Support Agent",
        category: "LLM fine-tuning · Support",
        status: "Open source",
        description:
          "An EN/FR support agent that classifies SaaS tickets into 12 categories, predicts priority and sentiment, flags missing information and drafts a reply, all as strict, schema-validated JSON with automatic repair. Qwen2.5-3B fine-tuned with QLoRA on a 6 GB RTX 3060.",
        tags: ["Qwen2.5-3B", "QLoRA", "PEFT", "FastAPI", "React", "JSON schema"],
        bars: {
          title: "Evaluation on 300 held-out tickets",
          items: [
            { label: "JSON parse rate", value: 100, display: "100%" },
            { label: "Schema valid", value: 96.7, display: "96.7%" },
            { label: "Category accuracy", value: 87.9, display: "87.9%" },
            { label: "Priority accuracy", value: 84.8, display: "84.8%" },
          ],
        },
        stat: { value: "45% → 85%", label: "Priority accuracy after rebalancing the dataset" },
        link: { href: "https://github.com/mohammed-benghanem/saas-support-agent-llm", kind: "code" },
      },
      {
        name: "Job Market Insights",
        category: "NLP · Data science",
        status: "Open source",
        description:
          "End-to-end study of the Moroccan job market: offers scraped from job boards like ReKrute, cleaned and explored by region and skill, then a classifier that predicts a job's category from its description and recommends matching university programs, served through FastAPI and React.",
        tags: ["Web scraping", "scikit-learn", "TF-IDF", "NLTK", "FastAPI", "React"],
        bars: {
          title: "Model selection · 5-fold CV F1-macro",
          items: [
            { label: "LinearSVC", value: 92.9, display: "0.929" },
            { label: "Logistic Regression", value: 91.9, display: "0.919" },
            { label: "Multinomial NB", value: 89.1, display: "0.891" },
          ],
        },
        stat: { value: "94%", label: "Test accuracy across 9 job categories" },
        link: { href: "https://github.com/mohammed-benghanem/job-market-insights", kind: "code" },
      },
      {
        name: "CloudSentinel",
        category: "Cybersecurity · Hybrid AI",
        status: "Master's thesis",
        description:
          "My master's final-year project: an AI intrusion detection system for cloud networks, trained on CSE-CIC-IDS2018 (16.2M flows, 77 features). A Random Forest stops known attacks, an autoencoder catches the zero-day anomalies it misses, and a local LLM (Llama 3.2 via Ollama) drafts grounded remediation reports for SOC analysts. Live traffic is captured with CICFlowMeter and streamed into a FastAPI + React dashboard.",
        tags: ["Random Forest", "Autoencoder", "DQN", "Ollama", "FastAPI", "React", "Docker"],
        image: { src: "/projects/cloudsentinel-dashboard.png", alt: "CloudSentinel incident dashboard", url: "cloudsentinel · dashboard" },
        stat: { value: "1.6% → 77%", label: "Unseen attack families caught: Random Forest alone vs. autoencoder layer" },
      },
    ],
    others: [
      {
        name: "AI Taxi Booking Assistant",
        category: "AI agent · Mobility",
        status: "Freelance",
        context: "Taxi Tremplin",
        description:
          "Natural-language ride booking powered by Claude agents and tool use, plugged into a geolocated dispatch backend with its own admin dashboard.",
        tags: ["Claude API", "Tool use", "NestJS", "PostGIS"],
        stat: { value: "3", label: "Deliverables: API, admin, AI assistant" },
      },
      {
        name: "Competitive Intelligence Agents",
        category: "Multi-agent · Market intel",
        status: "Internship",
        context: "Lotus Capital",
        description:
          "LangGraph multi-agent pipeline that tracks competitors, detects trends and drafts content with human review at every step.",
        tags: ["LangGraph", "pgvector", "HITL"],
        stat: { value: "4", label: "Sources: X, LinkedIn, RSS, Reddit" },
      },
      {
        name: "Moisture Prediction Dashboard",
        category: "Predictive ML · Industry",
        status: "Internship",
        context: "Yosobox",
        description:
          "Physics-based and neural models for LoD prediction, served through a FastAPI microservice into a real-time dashboard.",
        tags: ["ANN", "FastAPI", "Supabase"],
        stat: { value: "2", label: "Models: physics-based + ANN" },
      },
    ],
    stats: [
      { tag: "Fine-tuning", value: "95%", label: "Verified citations on unseen contracts" },
      { tag: "Evaluation", value: "510", label: "Lawyer-annotated contracts, leak-free" },
      { tag: "Efficiency", value: "6 GB", label: "Single GPU used to fine-tune a 1.5B LLM" },
      { tag: "Experience", value: "3", label: "Industry roles in AI & web development" },
    ],
    ctaText: "Have an AI project or a role in mind?",
    ctaButton: "Let's work together",
  },
  skills: {
    eyebrow: "Skills",
    title: "My technical ",
    titleAccent: "toolkit",
    subtitle: "From model training to production deployment.",
    groups: [
      {
        name: "Machine Learning & NLP",
        items: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "LLMs", "RAG", "Fine-tuning", "QLoRA", "LangGraph", "Hugging Face", "NLTK", "Prompt engineering"],
      },
      {
        name: "Backend & Databases",
        items: ["Python", "JavaScript", "Node.js", "Express.js", "FastAPI", "NestJS", "PostgreSQL", "pgvector", "MongoDB", "ChromaDB", "Supabase", "Redis"],
      },
      {
        name: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      },
      {
        name: "DevOps & Tools",
        items: ["Docker", "Git", "Bash", "AWS"],
      },
    ],
  },
  education: {
    eyebrow: "Background",
    title: "Education & ",
    titleAccent: "credentials",
    educationTitle: "Education",
    items: [
      {
        degree: "Master's in Big Data, Artificial Intelligence & Advanced Applications",
        school: "Ibn Tofail University, Morocco",
        period: "2024 — 2026",
      },
      {
        degree: "Professional Bachelor's in Mathematical Science & Computer Science",
        school: "Ibn Tofail University, Morocco",
        period: "2021 — 2024",
      },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      { name: "AWS Cloud Technical Essentials", issuer: "AWS" },
      { name: "Machine Learning with Python", issuer: "IBM" },
      { name: "Tools for Data Science", issuer: "IBM" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native", value: 100 },
      { name: "English", level: "Fluent (C1)", value: 85 },
      { name: "French", level: "Professional", value: 75 },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something ",
    titleAccent: "intelligent together",
    text: "I'm available immediately for full-time roles and freelance missions — on-site, hybrid or remote. The fastest way to reach me is by email.",
    labels: { email: "Email", phone: "Phone", location: "Location" },
    location: "Tiflet, Morocco",
    cardTitle: "Ready when you are",
    cardText: "Send me a short message about your team or project and I'll get back to you quickly.",
    email: "Send an email",
    cv: "Download CV",
  },
  footer: {
    tagline: "AI engineer & full-stack developer building RAG systems, fine-tuned LLMs and AI agents.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    built: "Built with Next.js & Tailwind CSS.",
  },
};

export default en;
