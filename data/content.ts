import type { Loc } from "@/lib/i18n";

export type Category = "ai" | "platform" | "mobile" | "bots";

export type Project = {
  id: string;
  category: Category;
  title: Loc;
  tagline: Loc;
  problem: Loc;
  solution: Loc;
  result: Loc;
  stack: string[];
};

export const CONTACT = {
  email: "lucasdemarre@krownsoft.com.ar",
  linkedin: "https://www.linkedin.com/in/lucas-demarre-18362221a",
  github: "https://github.com/LDemarre",
};

export const UI = {
  viewProject: { es: "Ver proyecto", en: "View project" },
  close: { es: "Cerrar", en: "Close" },
  problem: { es: "Problema", en: "Problem" },
  solution: { es: "Solución", en: "Solution" },
  result: { es: "Resultado", en: "Result" },
  assistantSoon: { es: "Asistente IA · próximamente", en: "AI assistant · coming soon" },
  all: { es: "Todos", en: "All" },
};

export const NAV: { id: string; label: Loc }[] = [
  { id: "projects", label: { es: "Proyectos", en: "Projects" } },
  { id: "stack", label: { es: "Stack", en: "Stack" } },
  { id: "experience", label: { es: "Experiencia", en: "Experience" } },
  { id: "about", label: { es: "Sobre mí", en: "About" } },
  { id: "contact", label: { es: "Contacto", en: "Contact" } },
];

export const HERO = {
  name: "Lucas Demarré",
  role: { es: "Desarrollador de IA y Software", en: "AI & Software Developer" },
  subtitle: {
    es: "Construyo agentes de voz, chatbots y automatización que las empresas usan de verdad.",
    en: "I build voice agents, chatbots, and automation that businesses actually use.",
  },
  ctaProjects: { es: "Ver proyectos", en: "View projects" },
  ctaContact: { es: "Contacto", en: "Get in touch" },
};

export const CATEGORIES: { id: Category; label: Loc }[] = [
  { id: "ai", label: { es: "IA & Conversacional", en: "AI & Conversational" } },
  { id: "platform", label: { es: "Plataformas", en: "Platforms" } },
  { id: "mobile", label: { es: "Mobile", en: "Mobile" } },
  { id: "bots", label: { es: "Bots", en: "Bots" } },
];

export const PROJECTS: Project[] = [
  {
    id: "voice-agent-law",
    category: "ai",
    title: { es: "Agente de voz con IA para un estudio jurídico", en: "AI Voice Agent for a Law Firm" },
    tagline: { es: "Atiende llamadas 24/7, califica casos y agenda entrevistas.", en: "Answers calls 24/7, qualifies cases, and books interviews." },
    problem: {
      es: "El estudio perdía consultas fuera de horario: una sola persona atendía todas las llamadas entrantes.",
      en: "The firm lost inquiries after hours — a single person handled every inbound call.",
    },
    solution: {
      es: "Un agente de voz que atiende, escucha activamente, extrae los datos del caso, ofrece turnos reales y confirma por WhatsApp, con un resumen automático de cada llamada.",
      en: "A voice agent that answers, actively listens, extracts case data, offers real time slots, and confirms over WhatsApp — with an automatic summary of every call.",
    },
    result: { es: "Cero llamadas perdidas y atención sin horarios.", en: "Zero missed calls and round-the-clock intake." },
    stack: ["Retell AI", "n8n", "Twilio", "WhatsApp", "LLM"],
  },
  {
    id: "whatsapp-sales-agent",
    category: "ai",
    title: { es: "Agente de ventas por WhatsApp para una distribuidora de chapas", en: "WhatsApp Sales Agent for a Steel Distributor" },
    tagline: { es: "Cotiza, valida pagos y factura, integrado al ERP.", en: "Quotes, validates payments, and invoices — integrated with the ERP." },
    problem: {
      es: "Todo el flujo de ventas por WhatsApp dependía de personal manual: consultas, cotizaciones, validación de pagos y facturación.",
      en: "The entire WhatsApp sales flow depended on manual staff: inquiries, quotes, payment validation, and invoicing.",
    },
    solution: {
      es: "Un agente que responde stock y precios desde el ERP, arma cotizaciones, lee comprobantes con un LLM de visión, valida pagos contra los bancos y dispara la factura automáticamente.",
      en: "An agent that answers stock and pricing from the ERP, builds quotes, reads payment receipts with a vision LLM, validates payments against the banks, and triggers invoicing automatically.",
    },
    result: { es: "Embudo de ventas 24/7 con el ERP como única fuente de verdad.", en: "A 24/7 sales funnel with the ERP as the single source of truth." },
    stack: ["n8n", "Supabase", "Claude Vision", "Odoo", "WhatsApp API"],
  },
  {
    id: "marketing-platform",
    category: "platform",
    title: { es: "Plataforma operativa multi-tenant para una agencia de marketing", en: "Multi-Tenant Operations Platform for a Marketing Agency" },
    tagline: { es: "Planificación, producción, campañas y reporting de 20+ clientes en un solo lugar.", en: "Planning, production, campaigns, and reporting for 20+ clients in one place." },
    problem: {
      es: "La agencia gestionaba decenas de clientes con herramientas fragmentadas y datos en silos.",
      en: "The agency ran dozens of clients across fragmented tools and siloed data.",
    },
    solution: {
      es: "Una plataforma multi-tenant con portales aislados por cliente: planificación, producción de contenido, publicación, gestión de campañas y reporting en tiempo real, con integraciones a Meta, TikTok y YouTube.",
      en: "A multi-tenant platform with isolated per-client portals: planning, content production, publishing, campaign management, and real-time reporting, with Meta, TikTok, and YouTube integrations.",
    },
    result: { es: "En producción, gestionando más de 20 clientes.", en: "Live in production, managing 20+ clients." },
    stack: ["Next.js", "React", "Tailwind CSS", "Supabase", "Recharts"],
  },
  {
    id: "taskflow",
    category: "platform",
    title: { es: "TaskFlow", en: "TaskFlow" },
    tagline: { es: "Gestión de pedidos y producción en tiempo real para empresas.", en: "Real-time order and production management for businesses." },
    problem: {
      es: "Las empresas de producción necesitan visibilidad y coordinación en tiempo real entre zonas, sin procesos manuales.",
      en: "Production companies need real-time visibility and coordination across zones, without manual processes.",
    },
    solution: {
      es: "Un sistema con dashboard web y app móvil: estados de pedidos, zonas de producción, alertas y KPIs automáticos, actualizado en vivo por WebSockets.",
      en: "A system with a web dashboard and a mobile app: order states, production zones, automated alerts and KPIs, updated live over WebSockets.",
    },
    result: { es: "Operación centralizada, trazabilidad completa y deploy blue-green.", en: "Centralized operations, full traceability, and blue-green deploys." },
    stack: ["React", "TypeScript", "Flutter", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "scoutpro",
    category: "mobile",
    title: { es: "ScoutPro", en: "ScoutPro" },
    tagline: { es: "App de scouting y evaluación de jugadores de fútbol.", en: "Football player scouting and evaluation app." },
    problem: {
      es: "Scouts y entrenadores necesitan evaluar jugadores en vivo con criterios propios y generar reportes al instante.",
      en: "Scouts and coaches need to evaluate players live with custom criteria and generate reports instantly.",
    },
    solution: {
      es: "App multiplataforma con escalas 0-10 configurables, seguimiento de minutos en cancha y reportes PDF/CSV que se comparten por WhatsApp o email.",
      en: "A cross-platform app with configurable 0-10 scales, on-field minute tracking, and PDF/CSV reports shared over WhatsApp or email.",
    },
    result: { es: "Evaluaciones más rápidas y reportes profesionales en segundos.", en: "Faster evaluations and professional reports in seconds." },
    stack: ["Flutter", "Dart", "Provider", "Material 3"],
  },
  {
    id: "f-tracker",
    category: "mobile",
    title: { es: "F-Tracker", en: "F-Tracker" },
    tagline: { es: "Contador de acciones de fútbol en vivo con atajos de teclado.", en: "Live football action counter with keyboard shortcuts." },
    problem: {
      es: "Los analistas necesitan contar acciones de partido (pases, tiros, faltas) muy rápido durante el juego.",
      en: "Analysts need to count match actions (passes, shots, fouls) very fast during live play.",
    },
    solution: {
      es: "App multiplataforma con contadores optimizados por atajos de teclado, autoguardado en tiempo real y share por WhatsApp, con autenticación JWT.",
      en: "A cross-platform app with keyboard-shortcut counters, real-time autosave, and WhatsApp sharing, with JWT authentication.",
    },
    result: { es: "Captura de estadísticas en vivo sin fricción.", en: "Frictionless live stat capture." },
    stack: ["Flutter", "Dart", "JWT", "REST"],
  },
  {
    id: "voicelog",
    category: "bots",
    title: { es: "VoiceLog", en: "VoiceLog" },
    tagline: { es: "Bot de Discord que mide el tiempo en canales de voz.", en: "Discord bot that tracks time in voice channels." },
    problem: {
      es: "Los administradores de Discord querían medir la actividad de los usuarios en los canales de voz.",
      en: "Discord admins wanted to measure user activity in voice channels.",
    },
    solution: {
      es: "Un bot liviano que detecta entradas y salidas y acumula tiempo por usuario en SQLite, con slash commands para consultar las estadísticas.",
      en: "A lightweight bot that detects joins and leaves and accumulates per-user time in SQLite, with slash commands to query stats.",
    },
    result: { es: "Métricas de engagement automáticas, sin overhead.", en: "Automatic engagement metrics, with no overhead." },
    stack: ["Node.js", "discord.js", "SQLite"],
  },
];

export const STACK_GROUPS: { label: Loc; items: string[] }[] = [
  { label: { es: "IA & Automatización", en: "AI & Automation" }, items: ["Retell AI", "Vapi", "n8n", "OpenAI", "Anthropic", "Gemini", "ElevenLabs", "WhatsApp API"] },
  { label: { es: "Backend", en: "Backend" }, items: ["Node.js", "FastAPI", "Supabase", "PostgreSQL", "Redis", "REST & Webhooks"] },
  { label: { es: "Frontend", en: "Frontend" }, items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "GSAP"] },
  { label: { es: "Mobile", en: "Mobile" }, items: ["Flutter", "Dart"] },
  { label: { es: "DevOps", en: "DevOps" }, items: ["Docker", "EasyPanel", "VPS", "Nginx", "GitHub Actions", "Vercel"] },
];

export type Job = { company: string; role: Loc; place: string; period: Loc; desc: Loc };

export const EXPERIENCE: Job[] = [
  {
    company: "Solvant LLC",
    role: { es: "Desarrollador de IA y Software", en: "AI & Software Developer" },
    place: "Rosario, Argentina",
    period: { es: "Abr 2026 — Presente", en: "Apr 2026 — Present" },
    desc: {
      es: "Consultora de IA aplicada a procesos comerciales de PyMEs. Diseño y pongo en producción agentes de voz, chatbots, automatizaciones y software a medida.",
      en: "Applied-AI consultancy for SMB commercial processes. I design and ship voice agents, chatbots, automations, and custom software.",
    },
  },
  {
    company: "PolumPlast",
    role: { es: "Director General (Ventas, Comercial y Finanzas)", en: "General Director (Sales, Commercial & Finance)" },
    place: "Granadero Baigorria, Argentina",
    period: { es: "Sep 2025 — Presente", en: "Sep 2025 — Present" },
    desc: {
      es: "A cargo de la estrategia comercial, el equipo de ventas y las finanzas de la empresa.",
      en: "In charge of the company's commercial strategy, sales team, and finances.",
    },
  },
];

export type Study = { school: string; degree: Loc; period: string; note?: Loc };

export const EDUCATION: Study[] = [
  { school: "Universidad de Palermo", degree: { es: "Ingeniería en Inteligencia Artificial", en: "B.Eng. in Artificial Intelligence" }, period: "2025 — 2030", note: { es: "En curso", en: "In progress" } },
  { school: "Universidad Nacional de Rosario (UNR)", degree: { es: "Técnico en Inteligencia Artificial", en: "Technician in Artificial Intelligence" }, period: "2022 — 2024" },
];

export const CERTS: Loc[] = [
  { es: "DeepLearning.AI TensorFlow Developer (Certificado Profesional)", en: "DeepLearning.AI TensorFlow Developer (Professional Certificate)" },
  { es: "Linguaskill — Inglés C1 (Cambridge English)", en: "Linguaskill — English C1 (Cambridge English)" },
];

export const LANGUAGES: { label: Loc; level: Loc }[] = [
  { label: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { label: { es: "Inglés", en: "English" }, level: { es: "C1 — Profesional completo", en: "C1 — Full Professional" } },
];

export const ABOUT = {
  title: { es: "Sobre mí", en: "About" },
  body: {
    es: "Soy desarrollador de IA y software, enfocado en llevar agentes conversacionales, automatización y aplicaciones a producción real. Estudio Ingeniería en Inteligencia Artificial y ya soy Técnico en IA. Además dirijo la operación comercial y financiera de una empresa, lo que me da una mirada del negocio más allá del código.",
    en: "I'm an AI and software developer focused on taking conversational agents, automation, and applications into real production. I'm studying AI Engineering and I'm already an AI Technician. I also run the commercial and financial operations of a company, which gives me a business perspective beyond the code.",
  },
};

export const SECTIONS = {
  projects: { es: "Proyectos", en: "Projects" },
  projectsSub: { es: "Una selección de lo que construí.", en: "A selection of what I've built." },
  stack: { es: "Stack", en: "Stack" },
  experience: { es: "Experiencia", en: "Experience" },
  education: { es: "Educación", en: "Education" },
  certs: { es: "Certificaciones", en: "Certifications" },
  languages: { es: "Idiomas", en: "Languages" },
  contact: { es: "Contacto", en: "Contact" },
  contactSub: { es: "¿Construís algo con IA o automatización? Hablemos.", en: "Building something with AI or automation? Let's talk." },
};
