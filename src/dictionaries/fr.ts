import type { Dictionary } from "./index";

const fr: Dictionary = {
  meta: {
    title: "Mohammed Benghanem — Ingénieur IA & Développeur Full Stack",
    description:
      "Ingénieur en intelligence artificielle spécialisé en IA générative et en développement web : systèmes RAG, fine-tuning de LLM avec QLoRA, agents IA, FastAPI et Next.js. Ouvert aux postes d'ingénieur IA et de développeur full stack.",
  },
  nav: {
    about: "Profil",
    experience: "Expériences",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    cv: "Télécharger le CV",
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
    switchTo: "English",
  },
  hero: {
    availability: "Ouvert aux postes d'ingénieur IA · Présentiel, hybride ou à distance",
    role: "Ingénieur IA & Développeur Full Stack",
    headlineStart: "Je conçois des ",
    headlineAccent: "produits intelligents",
    headlineEnd: ", du modèle à l'interface.",
    intro:
      "Je suis Mohammed Benghanem, ingénieur en IA générative orienté livraison : pipelines RAG, fine-tuning QLoRA et workflows d'agents, intégrés dans des API sécurisées et des interfaces React / Next.js soignées.",
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Télécharger le CV",
    cards: {
      rag: { label: "RAG · ClauseLens", badge: "95 %", sub: "citations vérifiées" },
      finetune: { pill: "Fine-tuning QLoRA", label: "Faux positifs", value: "82 % → 0,1 %" },
      agents: { label: "IA multi-agents", value: "LangGraph", pill: "Validation humaine" },
      stack: { label: "Full stack", badge: "Next.js", sub: "FastAPI · NestJS · Docker" },
    },
    trustText: "Technologies avec lesquelles j'ai livré",
  },
  about: {
    eyebrow: "Profil",
    title: "L'IA générative, ",
    titleAccent: "pensée pour la production",
    body: [
      "Ingénieur en intelligence artificielle spécialisé en IA générative et en développement web, de l'interface aux services applicatifs.",
      "Expérience en conception de systèmes RAG, fine-tuning de grands modèles de langage (LLM) avec QLoRA et orchestration d'agents IA. Maîtrise de Python, FastAPI et React / Next.js pour intégrer des modèles prédictifs et déployer des applications sécurisées.",
    ],
    highlights: [
      "RAG avec recherche hybride sur pgvector",
      "Fine-tuning de LLM avec QLoRA (PEFT / TRL)",
      "Workflows multi-agents et appel d'outils",
      "API sécurisées et déploiements Docker",
    ],
    cta: "Me contacter",
    glanceTitle: "En bref",
    glanceBadge: "Ouvert aux opportunités",
    facts: [
      { icon: "goal", label: "Je recherche", value: "Un poste d'ingénieur IA ou de développeur full stack" },
      { icon: "location", label: "Basé à", value: "Tiflet, Maroc · ouvert à la mobilité" },
      { icon: "role", label: "Poste actuel", value: "Développeur web et IA indépendant · Taxi Tremplin" },
      { icon: "education", label: "Formation", value: "Master Big Data & IA · Université Ibn Tofail" },
      { icon: "languages", label: "Langues", value: "Arabe · Anglais (C1) · Français" },
      { icon: "availability", label: "Disponibilité", value: "Immédiate · présentiel, hybride ou à distance" },
    ],
    cvTitle: "Télécharger mon CV",
    cvEn: "Anglais",
    cvFr: "Français",
    pillars: [
      {
        title: "IA générative",
        text: "RAG avec recherche hybride, fine-tuning de LLM (QLoRA, PEFT/TRL), workflows multi-agents avec LangGraph et agents avec appel d'outils via l'API Claude.",
      },
      {
        title: "Ingénierie full stack",
        text: "Backends FastAPI, NestJS et Node/Express, PostgreSQL / pgvector / PostGIS, et interfaces React / Next.js / TypeScript.",
      },
      {
        title: "Culture de la production",
        text: "Évaluation sans fuite de données, API sécurisées avec limitation de débit, déploiements Docker et tableaux de bord temps réel réellement utilisés.",
      },
    ],
  },
  experience: {
    eyebrow: "Expériences",
    title: "Là où j'ai ",
    titleAccent: "livré",
    subtitle: "Trois expériences à livrer des produits IA et full stack pour de vraies entreprises.",
    currentLabel: "Poste actuel",
    items: [
      {
        role: "Développeur web et IA indépendant",
        company: "Taxi Tremplin",
        period: "Août 2026 — Présent",
        current: true,
        bullets: [
          "Conception du backend complet en NestJS, PostgreSQL / PostGIS et Redis : dispatch géolocalisé des chauffeurs, calcul des tarifs, authentification par SMS et notifications. Déploiement avec Docker.",
          "Création du tableau de bord d'administration en React / TypeScript pour gérer les chauffeurs, les clients, les courses, les tarifs et les paiements.",
          "Développement d'un assistant de réservation intelligent basé sur l'API Claude (Anthropic), permettant de commander un taxi en langage naturel grâce aux agents IA et à l'appel d'outils (tool use).",
        ],
        tags: ["NestJS", "PostGIS", "Redis", "React", "TypeScript", "Claude API", "Docker"],
      },
      {
        role: "Stagiaire en IA et développement web",
        company: "Yosobox",
        period: "Mars — Sept. 2026",
        current: false,
        bullets: [
          "Développement de deux modèles de prédiction du taux d'humidité (LoD) : un modèle physique et un modèle ANN.",
          "Intégration des deux modèles dans un tableau de bord temps réel : microservice FastAPI, API Node/Express sécurisée et stockage Supabase.",
          "Création d'une route API sécurisée (clé admin, limitation de débit) pour déclencher les prédictions ANN.",
          "Correction de bugs d'intégration et exposition de la courbe de séchage du modèle physique.",
        ],
        tags: ["Python", "ANN", "FastAPI", "Node.js", "Express", "Supabase"],
      },
      {
        role: "Stagiaire en IA et développement web",
        company: "Lotus Capital",
        period: "Janv. — Mars 2026",
        current: false,
        bullets: [
          "Développement d'une plateforme de veille concurrentielle sur les réseaux sociaux : collecte multi-sources (X, LinkedIn, RSS, Reddit) et analyse de l'engagement.",
          "Conception de workflows multi-agents avec LangGraph pour détecter les tendances et générer du contenu, avec validation humaine à chaque étape (human-in-the-loop).",
          "Recherche de similarité et détection de doublons par embeddings (pgvector), avec comparaison des posts publiés à ceux des concurrents.",
        ],
        tags: ["LangGraph", "Multi-agents", "pgvector", "Embeddings", "Python"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio & études de cas",
    title: "Des projets réels, ",
    titleAccent: "un impact mesurable",
    subtitle: "Une sélection de systèmes IA que j'ai conçus, entraînés et déployés.",
    featured: {
      label: "Projet phare",
      category: "RAG · Fine-tuning de LLM",
      name: "ClauseLens",
      subtitle: "Analyse de clauses contractuelles par RAG et fine-tuning QLoRA",
      description:
        "Application RAG qui analyse des contrats commerciaux selon une checklist de 12 clauses juridiques, avec des réponses structurées appuyées par des citations exactes vérifiées côté serveur.",
      bullets: [
        "Recherche hybride sémantique et plein texte sur PostgreSQL / pgvector, retenue après comparaison sur jeu de validation.",
        "Évaluation sans fuite de données sur 510 contrats annotés par des juristes.",
        "Fine-tuning QLoRA de Qwen2.5-1.5B (Hugging Face PEFT / TRL) sur un GPU de 6 Go.",
      ],
      highlights: [
        { value: "12", label: "clauses juridiques" },
        { value: "510", label: "contrats" },
        { value: "1,5 Md", label: "paramètres" },
      ],
      metricsTitle: "Résultats sur des contrats jamais vus",
      metrics: [
        { label: "Faux positifs", before: "82 %", after: "0,1 %", beforeValue: 82, afterValue: 0.1 },
        { label: "Citations vérifiées", before: "69 %", after: "95 %", beforeValue: 69, afterValue: 95 },
      ],
      before: "Avant",
      after: "Après",
      tags: ["PyTorch", "QLoRA", "Qwen2.5", "FastAPI", "PostgreSQL", "pgvector", "Next.js"],
    },
    personalTitle: "Projets personnels & open source",
    workTitle: "Issus de mon expérience professionnelle",
    viewCode: "Voir le code",
    visitSite: "Visiter le site",
    personal: [
      {
        name: "Academic Paper Q&A",
        category: "RAG · Assistant de recherche",
        status: "Open source",
        description:
          "Posez des questions sur des articles scientifiques en PDF et obtenez des réponses en streaming, ancrées dans le texte source, avec citations et score de confiance. Recherche en trois étapes (vectorielle + BM25 fusionnées par Reciprocal Rank Fusion, puis re-ranking par cross-encoder) et LLM interchangeable : Ollama en local, OpenAI ou Anthropic.",
        tags: ["FastAPI", "ChromaDB", "BM25", "Cross-encoder", "React", "Docker"],
        bars: {
          title: "Recall@1 sur un benchmark adversarial",
          items: [
            { label: "Vectoriel seul", value: 35, display: "35 %" },
            { label: "Vectoriel + re-ranking", value: 58, display: "58 %" },
            { label: "Hybride (BM25 + vectoriel)", value: 54, display: "54 %" },
            { label: "Hybride + re-ranking", value: 100, display: "100 %" },
          ],
        },
        stat: { value: "35 % → 100 %", label: "Recall@1, vectoriel seul vs. pipeline complet" },
        link: { href: "https://github.com/mohammed-benghanem/academic-paper-qa-rag", kind: "code" },
      },
      {
        name: "Agent de support SaaS multilingue",
        category: "Fine-tuning de LLM · Support",
        status: "Open source",
        description:
          "Agent de support EN/FR qui classe les tickets SaaS en 12 catégories, prédit la priorité et le sentiment, détecte les informations manquantes et rédige une réponse, le tout en JSON strict validé par schéma avec réparation automatique. Qwen2.5-3B fine-tuné avec QLoRA sur une RTX 3060 de 6 Go.",
        tags: ["Qwen2.5-3B", "QLoRA", "PEFT", "FastAPI", "React", "JSON schema"],
        bars: {
          title: "Évaluation sur 300 tickets de validation",
          items: [
            { label: "JSON valide", value: 100, display: "100 %" },
            { label: "Conforme au schéma", value: 96.7, display: "96,7 %" },
            { label: "Précision catégorie", value: 87.9, display: "87,9 %" },
            { label: "Précision priorité", value: 84.8, display: "84,8 %" },
          ],
        },
        stat: { value: "45 % → 85 %", label: "Précision de la priorité après rééquilibrage des données" },
        link: { href: "https://github.com/mohammed-benghanem/saas-support-agent-llm", kind: "code" },
      },
      {
        name: "Job Market Insights",
        category: "NLP · Data science",
        status: "Open source",
        description:
          "Étude de bout en bout du marché de l'emploi marocain : offres collectées sur des sites comme ReKrute, nettoyées et analysées par région et compétence, puis un classifieur qui prédit la catégorie d'une offre à partir de sa description et recommande des formations universitaires adaptées, servi via FastAPI et React.",
        tags: ["Web scraping", "scikit-learn", "TF-IDF", "NLTK", "FastAPI", "React"],
        bars: {
          title: "Sélection du modèle · F1-macro en CV 5 plis",
          items: [
            { label: "LinearSVC", value: 92.9, display: "0,929" },
            { label: "Régression logistique", value: 91.9, display: "0,919" },
            { label: "Naive Bayes multinomial", value: 89.1, display: "0,891" },
          ],
        },
        stat: { value: "94 %", label: "Précision en test sur 9 catégories de métiers" },
        link: { href: "https://github.com/mohammed-benghanem/job-market-insights", kind: "code" },
      },
      {
        name: "CloudSentinel",
        category: "Cybersécurité · IA hybride",
        status: "Projet de fin d'études",
        description:
          "Mon projet de fin d'études de Master : un système de détection d'intrusions par IA pour les réseaux cloud, entraîné sur CSE-CIC-IDS2018 (16,2 M de flux, 77 caractéristiques). Un Random Forest bloque les attaques connues, un auto-encodeur rattrape les anomalies zero-day qu'il laisse passer, et un LLM local (Llama 3.2 via Ollama) rédige des rapports de remédiation ancrés dans les données pour les analystes SOC. Le trafic réel est capturé avec CICFlowMeter et envoyé vers un tableau de bord FastAPI + React.",
        tags: ["Random Forest", "Auto-encodeur", "DQN", "Ollama", "FastAPI", "React", "Docker"],
        image: { src: "/projects/cloudsentinel-dashboard.png", alt: "Tableau de bord des incidents CloudSentinel", url: "cloudsentinel · tableau de bord" },
        stat: { value: "1,6 % → 77 %", label: "Familles d'attaques inédites détectées : Random Forest seul vs. couche auto-encodeur" },
      },
    ],
    others: [
      {
        name: "Assistant IA de réservation de taxi",
        category: "Agent IA · Mobilité",
        status: "Freelance",
        context: "Taxi Tremplin",
        description:
          "Réservation de courses en langage naturel grâce aux agents Claude et à l'appel d'outils, connectée à un backend de dispatch géolocalisé et à son tableau de bord d'administration.",
        tags: ["Claude API", "Tool use", "NestJS", "PostGIS"],
        stat: { value: "3", label: "Livrables : API, admin, assistant IA" },
      },
      {
        name: "Agents de veille concurrentielle",
        category: "Multi-agents · Veille",
        status: "Stage",
        context: "Lotus Capital",
        description:
          "Pipeline multi-agents LangGraph qui suit les concurrents, détecte les tendances et rédige du contenu avec validation humaine à chaque étape.",
        tags: ["LangGraph", "pgvector", "HITL"],
        stat: { value: "4", label: "Sources : X, LinkedIn, RSS, Reddit" },
      },
      {
        name: "Tableau de bord de prédiction d'humidité",
        category: "ML prédictif · Industrie",
        status: "Stage",
        context: "Yosobox",
        description:
          "Modèles physique et neuronal de prédiction du LoD, servis par un microservice FastAPI dans un tableau de bord temps réel.",
        tags: ["ANN", "FastAPI", "Supabase"],
        stat: { value: "2", label: "Modèles : physique + ANN" },
      },
    ],
    stats: [
      { tag: "Fine-tuning", value: "95 %", label: "Citations vérifiées sur des contrats jamais vus" },
      { tag: "Évaluation", value: "510", label: "Contrats annotés par des juristes, sans fuite" },
      { tag: "Efficacité", value: "6 Go", label: "Un seul GPU pour fine-tuner un LLM de 1,5 Md" },
      { tag: "Expérience", value: "3", label: "Expériences en IA et développement web" },
    ],
    ctaText: "Vous recrutez un ingénieur IA capable d'amener un modèle jusqu'en production ?",
    ctaButton: "Me contacter",
  },
  skills: {
    eyebrow: "Compétences",
    title: "Ma boîte à outils ",
    titleAccent: "technique",
    subtitle: "De l'entraînement des modèles au déploiement en production.",
    groups: [
      {
        name: "Machine Learning & NLP",
        items: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "LLMs", "RAG", "Fine-tuning", "QLoRA", "LangGraph", "Hugging Face", "NLTK", "Prompt engineering"],
      },
      {
        name: "Backend & bases de données",
        items: ["Python", "JavaScript", "Node.js", "Express.js", "FastAPI", "NestJS", "PostgreSQL", "pgvector", "MongoDB", "ChromaDB", "Supabase", "Redis"],
      },
      {
        name: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      },
      {
        name: "DevOps & outils",
        items: ["Docker", "Git", "Bash", "AWS"],
      },
    ],
  },
  education: {
    eyebrow: "Parcours",
    title: "Formation & ",
    titleAccent: "certifications",
    educationTitle: "Formation",
    items: [
      {
        degree: "Master en Big Data, Intelligence Artificielle et Applications Avancées",
        school: "Université Ibn Tofail, Maroc",
        period: "2024 — 2026",
      },
      {
        degree: "Licence Professionnelle en Science Mathématique et Informatique",
        school: "Université Ibn Tofail, Maroc",
        period: "2021 — 2024",
      },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      { name: "AWS Cloud Technical Essentials", issuer: "AWS" },
      { name: "Machine Learning with Python", issuer: "IBM" },
      { name: "Tools for Data Science", issuer: "IBM" },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle", value: 100 },
      { name: "Anglais", level: "Courant (C1)", value: 85 },
      { name: "Français", level: "Professionnel", value: 75 },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Vous recrutez un ingénieur IA ? ",
    titleAccent: "Parlons-en",
    text: "Je suis disponible immédiatement pour un poste d'ingénieur IA ou de développeur full stack — en présentiel, en hybride ou à distance, et ouvert à la mobilité. Le plus rapide est de m'écrire par e-mail ; mon CV est disponible en français et en anglais.",
    labels: { email: "E-mail", phone: "Téléphone", location: "Localisation" },
    location: "Tiflet, Maroc",
    cardTitle: "Disponible pour un entretien",
    cardText: "Envoyez-moi l'intitulé du poste ou la fiche de poste, je vous réponds rapidement avec mes disponibilités.",
    email: "Me contacter par e-mail",
    cv: "Télécharger le CV",
    cvOther: "Aussi disponible en anglais",
  },
  footer: {
    tagline: "Ingénieur IA et développeur full stack : systèmes RAG, LLM fine-tunés et agents IA.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    built: "Conçu avec Next.js & Tailwind CSS.",
  },
};

export default fr;
