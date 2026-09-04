export interface MethodStep {
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverable: string;
  statusTag: string;
}

export interface ProblemCategory {
  id: string;
  name: string;
  industry: string;
  shortPain: string;
  detailedPain: string;
  solutionOutcome: string;
  symptoms: string[];
  metricsImpact: string;
  solutionTags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  tags: string[];
  architectureSnippet: {
    input: string;
    processing: string;
    output: string;
  };
}

export interface ProductLine {
  id: string;
  title: string;
  quote: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  badge?: string;
  isExternal?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SITE_METADATA = {
  name: "NytKode",
  tagline: "We Build the Infrastructure Businesses Run On.",
  description:
    "NytKode is a B2B software company that finds real operational problems inside businesses — communication, workflows, automation, internal systems — solves them, and turns what works into products.",
  subPositioning:
    "Not an agency. Not a single-product SaaS. We're an operations infrastructure company — we build for one business first, then productize what repeats.",
  deployedAcross:
    "Currently deployed across healthcare, aesthetics, and marketing services.",
  foundedYear: "2026",
};

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Identify",
    shortDesc: "Find real, recurring bottlenecks",
    longDesc:
      "We embed deep into company workflows to spot expensive manual friction — lost WhatsApp leads, scattered drive assets, spreadsheet reliance, and 'someone remembers to do it' dependencies.",
    deliverable: "Operational Diagnostic & Architecture Blueprint",
    statusTag: "DIAGNOSTIC",
  },
  {
    number: "02",
    title: "Build",
    shortDesc: "Build working solution for one business, fast",
    longDesc:
      "We design and build bespoke operational systems directly tailored to the live operational environment. Zero speculative features — only high-reliability code that removes the bottleneck.",
    deliverable: "Tailored Production System & Integrations",
    statusTag: "RAPID_DEV",
  },
  {
    number: "03",
    title: "Deploy",
    shortDesc: "Go live & refine against real conditions",
    longDesc:
      "The system is deployed into the daily workflow of actual staff and customers. We monitor edge cases, throughput, and error rates, stress-testing until operations run flawlessly.",
    deliverable: "Live Deployment & Telemetry Validation",
    statusTag: "STRESS_TEST",
  },
  {
    number: "04",
    title: "Productize",
    shortDesc: "Standardize what repeats into products",
    longDesc:
      "When the same structural bottleneck appears across multiple companies, we abstract the battle-tested core into a turn-key product line for the wider market.",
    deliverable: "Repeatable Scalable B2B Product Line",
    statusTag: "PRODUCTIZED",
  },
];

export const PROBLEM_CATEGORIES: ProblemCategory[] = [
  {
    id: "clinics",
    name: "Aesthetic & Dental Clinics",
    industry: "Healthcare & Aesthetics",
    shortPain: "Booking chaos, missed follow-ups, manual WhatsApp replies",
    detailedPain:
      "Front-desk staff drowning in manual WhatsApp chats, patient appointment confirmations slipping through the cracks, and high no-show rates costing thousands weekly.",
    solutionOutcome:
      "24/7 automated Meta API booking agents, two-way automated SMS/WhatsApp reminders, and instant lead qualification directly into the scheduling calendar.",
    symptoms: [
      "Staff typing manual booking confirmations during busy clinic hours",
      "No-shows exceeding 18-25% due to missed reminder touchpoints",
      "Leads dropping off during late evenings and weekends",
    ],
    metricsImpact: "-85% No-shows | 100% 24/7 Response Rate",
    solutionTags: ["WhatsApp Business API", "Meta Graph API", "Webhook Engine", "Auto-Rescheduling"],
  },
  {
    id: "agencies",
    name: "Marketing Agencies",
    industry: "Creative & Growth Agencies",
    shortPain: "Scattered content, no shared workflow system, client chaos",
    detailedPain:
      "Assets scattered across Google Drive folders, lost revision threads in Slack, uncoordinated client approvals, and account managers acting as human routers.",
    solutionOutcome:
      "A unified, agency-tailored Content & Workflow CMS (Drive CMS) that centralizes raw assets, approval pipelines, and multi-channel publication under one source of truth.",
    symptoms: [
      "Clients approving wrong revisions buried in message chains",
      "Creators re-uploading duplicate assets across 5 different tools",
      "Project managers spending 60% of their workday asking 'where is file X?'",
    ],
    metricsImpact: "60% Faster Delivery | Zero Asset Duplication",
    solutionTags: ["Drive CMS", "Approval Pipelines", "Role-Based Access", "Asset Indexing"],
  },
  {
    id: "services",
    name: "Service Businesses (General)",
    industry: "High-Touch B2B & Field Services",
    shortPain: "Repetitive manual coordination that should be automated",
    detailedPain:
      "Critical customer touchpoints depend on individuals remembering to follow up, manually copy-pasting customer details, and sending ad-hoc invoices.",
    solutionOutcome:
      "Event-driven operational glue connecting lead capture, CRM updates, quote generation, and status dispatching automatically with full audit trails.",
    symptoms: [
      "Human memory is the single point of failure in daily execution",
      "Double-entry across billing software and project tracking tools",
      "Slow turnarounds on inbound quote requests costing high-value deals",
    ],
    metricsImpact: "4x Pipeline Velocity | Zero Dropped Handoffs",
    solutionTags: ["Custom Event Buses", "API Integrations", "Audit Logging", "Auto-Quoting"],
  },
  {
    id: "smbs",
    name: "Growing SMBs",
    industry: "Scaling Operations",
    shortPain: "Outgrowing spreadsheets and disconnected tools",
    detailedPain:
      "Operations held together by fragile spreadsheet formulas, manual CSV exports, and disconnected SaaS apps that don't talk to each other cleanly.",
    solutionOutcome:
      "Custom internal tooling and dedicated relational databases built specifically around the company's proprietary operational schema.",
    symptoms: [
      "Spreadsheets breaking whenever concurrent editors exceed 5 people",
      "Weekly manual reporting taking hours of copy-pasting data",
      "SaaS tool sprawl costing high monthly subscriptions without solving the core bottleneck",
    ],
    metricsImpact: "100% Single Source of Truth | Zero Spreadsheet Fragility",
    solutionTags: ["Internal Dashboards", "Relational DB Sync", "Custom ETLs", "Automated Ops"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "meta-tooling",
    title: "WhatsApp & Meta Business Tooling",
    industry: "Aesthetic & Dental Clinics",
    subtitle: "Eliminating booking chaos and no-shows for high-volume clinics",
    challenge:
      "Clinics were losing over 20% of their prospective bookings due to slow manual WhatsApp replies during peak hours, while front desk staff spent hours every morning manually texting patients for confirmations.",
    solution:
      "We engineered an event-driven automation engine built directly on Meta's Cloud API. It handles instant inbound lead qualification, interactive calendar booking directly inside the chat UI, multi-stage automated reminder cadences with one-tap confirm/reschedule, and seamless human handoff.",
    results: [
      { label: "No-Show Reduction", value: "-85%" },
      { label: "Response Latency", value: "< 2.4 sec" },
      { label: "Staff Hours Saved", value: "22 hrs/wk" },
      { label: "After-Hours Bookings", value: "+34%" },
    ],
    tags: ["WhatsApp API", "Meta Cloud", "Automation", "Healthcare Ops"],
    architectureSnippet: {
      input: "Inbound WhatsApp Webhook (Meta API)",
      processing: "State Engine + Clinic Calendar Sync + CRM Webhook",
      output: "Instant Interactive Booking Link + Automated Reminder Cadence",
    },
  },
  {
    id: "drive-cms",
    title: "Drive CMS — Agency Content Infrastructure",
    industry: "Marketing & Creative Agencies",
    subtitle: "One system, one source of truth for high-velocity agency workflows",
    challenge:
      "A fast-growing creative agency managed 40+ active client brands across scattered Google Drive links, Slack threads, and Figma files. Revisions were constantly lost, wrong video versions were posted, and approval bottlenecks caused severe project delays.",
    solution:
      "We built Drive CMS — a custom workflow infrastructure purpose-built for creative agency operations. Features automated asset ingestion, version tracking with frame-by-frame client approvals, status gates, and webhook-triggered distribution to client review portals.",
    results: [
      { label: "Asset Centralization", value: "100%" },
      { label: "Review Cycle Speed", value: "3.2x Faster" },
      { label: "Approval Friction", value: "Zero Lost Files" },
      { label: "Client Retainers Handled", value: "50+ Active" },
    ],
    tags: ["Workflow Infrastructure", "Drive CMS", "Asset Engine", "Agencies"],
    architectureSnippet: {
      input: "Raw Creative Upload (Video/Graphic/Copy)",
      processing: "Automated Metadata Tagging + Approval State Pipeline",
      output: "Client Review Portal + Auto-Publish Webhooks",
    },
  },
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: "communication",
    title: "Business Communication & Automation",
    quote: "Every missed message is a missed customer.",
    description:
      "High-throughput communication engines built on top of official APIs. Transform unstructured customer chats into structured operational transactions.",
    features: [
      "WhatsApp & Meta Business API direct integration",
      "Automated booking, rescheduling, and two-way reminders",
      "Intelligent lead qualification and pipeline routing",
      "24/7 deterministic automated response systems with staff takeover",
    ],
    ctaText: "Explore Communication Infra",
    ctaHref: "#work",
    badge: "PROVEN IN CLINIC OPS",
  },
  {
    id: "workflow",
    title: "Workflow & Content Infrastructure",
    quote: "Systems should hold the process, not people's memory.",
    description:
      "Operational backbones for high-velocity teams. Eliminate scattered folders, missing approvals, and disconnected project steps.",
    features: [
      "Content & workflow CMS (Drive CMS)",
      "Multi-party review and approval pipeline systems",
      "Automated asset indexing and version-controlled workspaces",
      "Client-facing status portals with zero login friction",
    ],
    ctaText: "Explore Drive CMS",
    ctaHref: "#work",
    badge: "AGENCY INFRASTRUCTURE",
  },
  {
    id: "custom-systems",
    title: "Custom Operational Systems",
    quote: "If it's manual and repeats, it should be built, not remembered.",
    description:
      "Targeted software built around your company's exact operational bottlenecks. Connect legacy software, databases, and third-party tools.",
    features: [
      "Internal tools for specific business operational bottlenecks",
      "Bi-directional systems integration between existing tools",
      "Automated data transformations and reconciliation pipelines",
      "Custom event-driven business logic with full audit telemetry",
    ],
    ctaText: "Discuss Custom Systems",
    ctaHref: "#contact",
    badge: "BESPOKE INFRASTRUCTURE",
  },
  {
    id: "open-source",
    title: "Open-Source Developer Tooling",
    quote: "Good infrastructure should also make other builders faster.",
    description:
      "Developer tools, CLI utilities, and open frameworks maintained by our engineering team to accelerate software setup and deployment.",
    features: [
      "Project Installer — open-source, community-facing scaffolding CLI",
      "Standardized deployment blueprints and boilerplate recipes",
      "Public repositories with active community maintenance",
      "Battle-tested developer experience utilities",
    ],
    ctaText: "View on GitHub",
    ctaHref: "https://github.com",
    badge: "PUBLIC TOOLING",
    isExternal: true,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "agency",
    category: "Identity",
    question: "Is NytKode an agency?",
    answer:
      "No. Traditional agencies sell billable hours, slide decks, and temporary marketing campaigns. We are an engineering company that builds durable software systems, automated pipelines, and infrastructure that keep working reliably long after deployment without recurring hourly billing.",
  },
  {
    id: "saas",
    category: "Identity",
    question: "Is NytKode a SaaS company?",
    answer:
      "Not exclusively. Generic SaaS companies build speculative products and hunt for generic markets. We do the inverse: we solve an expensive, real operational problem for one business first. Once the solution is battle-tested under live fire, we standardize what repeats into dedicated product lines (like Drive CMS and our Meta Tooling). We are infrastructure-first, not speculative product-first.",
  },
  {
    id: "industries",
    category: "Scope",
    question: "Do you only work with clinics and agencies?",
    answer:
      "No. Clinics and marketing agencies are our current live proof points where we have deployed systems at scale. However, we go wherever operations are broken, repetitive, and solvable with software — including field services, professional practices, logistics, and scaling SMBs.",
  },
  {
    id: "project-installer",
    category: "Technical",
    question: "What's Project Installer?",
    answer:
      "Project Installer is an open-source CLI developer tool maintained publicly by our team. It helps engineers scaffold, configure, and initialize production-ready project environments in seconds. It is completely free, non-commercial, and a testament to our engineering credibility.",
  },
  {
    id: "fit",
    category: "Fit & Process",
    question: "How do I know if my business is a fit?",
    answer:
      "If your core business processes rely heavily on manual WhatsApp/email replies, fragile spreadsheet formulas, people copying data between software, or 'whoever remembers to do it' — that is our exact problem space. If a manual process repeats daily and costs you time or revenue, we can build the system to automate it.",
  },
];

export const TELEMETRY_STATS = [
  { label: "Operational Uptime", value: "99.98%" },
  { label: "No-Show Loss Reduction", value: "-85%" },
  { label: "Content Cycle Acceleration", value: "3.2x" },
  { label: "Engineering Philosophy", value: "100% Reality-Tested" },
];
