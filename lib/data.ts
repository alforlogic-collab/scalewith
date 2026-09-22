export const NAV_LINKS = [
  { href: "#systems", label: "Systems" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
] as const;

export const NETWORK_NODES = [
  {
    id: "voice",
    label: "Voice Agents",
    copy: "Always-on agents that answer calls, qualify intent and book the next step.",
  },
  {
    id: "chat",
    label: "AI Chat",
    copy: "Website and messaging assistants that understand context, not just scripts.",
  },
  {
    id: "crm",
    label: "CRM",
    copy: "A living record of conversations, leads and customers — updated automatically.",
  },
  {
    id: "leads",
    label: "Lead Generation",
    copy: "Capture, enrich and route inbound demand without manual triage.",
  },
  {
    id: "workflow",
    label: "Workflow Automation",
    copy: "Operational sequences that run when a decision is made — not when someone remembers.",
  },
  {
    id: "kb",
    label: "Knowledge Base",
    copy: "A structured source of truth that agents and staff can query in real time.",
  },
  {
    id: "analytics",
    label: "Analytics",
    copy: "Visibility into response time, conversion, load and system performance.",
  },
  {
    id: "appointments",
    label: "Appointments",
    copy: "Scheduling that respects calendars, capacity and follow-through.",
  },
  {
    id: "followup",
    label: "Follow-Up",
    copy: "Timed, contextual outreach that never drops a qualified conversation.",
  },
  {
    id: "website",
    label: "Website",
    copy: "A public surface designed as an intake system, not a brochure.",
  },
] as const;

export const CAPABILITIES = [
  {
    index: "01",
    title: "AI Voice Agents",
    body: "24/7 agents that answer calls, qualify leads, handle FAQs, schedule appointments and trigger workflows.",
  },
  {
    index: "02",
    title: "AI Chat Systems",
    body: "Intelligent website and messaging assistants that hold context across a conversation and hand off cleanly.",
  },
  {
    index: "03",
    title: "Business Automation",
    body: "Automate repetitive operational processes so teams spend time on judgment, not busywork.",
  },
  {
    index: "04",
    title: "Lead Generation",
    body: "Capture, qualify, enrich and route leads automatically — from first signal to the right owner.",
  },
  {
    index: "05",
    title: "CRM Intelligence",
    body: "Connect conversations, leads, customers and workflows into one operational record.",
  },
  {
    index: "06",
    title: "Custom AI Systems",
    body: "Build AI infrastructure around a company's specific operations, not a generic template.",
  },
] as const;

export const BEFORE_ITEMS = [
  "Missed calls",
  "Slow responses",
  "Manual follow-ups",
  "Scattered data",
  "Repetitive work",
  "Lost leads",
] as const;

export const AFTER_ITEMS = [
  "AI-powered response",
  "Automated qualification",
  "Instant follow-up",
  "Connected CRM",
  "Automated workflows",
  "Measurable operations",
] as const;

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Discover",
    body: "Map where time, leads and decisions currently leak. Identify the operating constraints that matter.",
  },
  {
    index: "02",
    title: "Architect",
    body: "Design the system: agents, data flows, handoffs and the CRM of record. Nothing is bolted on.",
  },
  {
    index: "03",
    title: "Build",
    body: "Implement voice, chat, automation and integrations as one infrastructure — not a stack of tools.",
  },
  {
    index: "04",
    title: "Deploy",
    body: "Launch into live operations with monitoring, fallbacks and a clear ownership model.",
  },
  {
    index: "05",
    title: "Optimize",
    body: "Measure, refine prompts, routing and workflows against real traffic. The system compounds.",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Dental",
    copy: "Intake, recall, insurance questions and chair-time scheduling designed as a single system.",
  },
  {
    name: "Real Estate",
    copy: "Lead qualification, showing coordination and follow-up that keeps pipeline moving overnight.",
  },
  {
    name: "Construction",
    copy: "Estimate requests, job communication and vendor coordination without chasing inboxes.",
  },
  {
    name: "Healthcare",
    copy: "Patient intake, reminders and operational routing with care for privacy and protocol.",
  },
  {
    name: "Legal",
    copy: "Conflict checks, intake screening and matter routing before a lawyer spends a minute.",
  },
  {
    name: "E-commerce",
    copy: "Support deflection, order exceptions and post-purchase sequences tied to live data.",
  },
  {
    name: "Professional Services",
    copy: "Proposal intake, client updates and delivery workflows that stay consistent at scale.",
  },
  {
    name: "Hospitality",
    copy: "Reservations, guest requests and recovery flows handled with speed and memory.",
  },
] as const;

export const SELECTED_SYSTEMS = [
  {
    code: "RS-01",
    title: "AI Receptionist",
    kind: "Demo system",
    summary:
      "A conceptual front desk: inbound voice, intent classification, booking and CRM write-back.",
    stack: ["Voice", "Calendar", "CRM"],
  },
  {
    code: "RS-02",
    title: "Lead Engine",
    kind: "Concept system",
    summary:
      "Capture, score and route inbound demand. Instant response, no orphaned inquiries.",
    stack: ["Chat", "Scoring", "Routing"],
  },
  {
    code: "RS-03",
    title: "Construction AI System",
    kind: "Concept system",
    summary:
      "Estimate intake, site communication and follow-up sequenced around a job, not a mailbox.",
    stack: ["Intake", "Workflow", "Knowledge"],
  },
  {
    code: "RS-04",
    title: "Real Estate AI System",
    kind: "Demo system",
    summary:
      "Qualify buyers and sellers, schedule showings and keep agents only on conversations that matter.",
    stack: ["Voice", "Leads", "Appointments"],
  },
] as const;

export const DEMO_STEPS = [
  {
    id: "input",
    label: "User input",
    detail: "Incoming lead — web form, 11:42pm.",
  },
  {
    id: "process",
    label: "AI processing",
    detail: "Intent, urgency and fit scored against the playbook.",
  },
  {
    id: "decision",
    label: "Decision",
    detail: "Qualified. Priority: high. Owner: sales pod A.",
  },
  {
    id: "automation",
    label: "Automation",
    detail: "CRM updated. Confirmation drafted. Calendar opened.",
  },
  {
    id: "result",
    label: "Result",
    detail: "Response sent. Appointment proposed for tomorrow 10:00.",
  },
] as const;
