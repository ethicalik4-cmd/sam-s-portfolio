import nexusImage from "@/assets/project-nexus.jpg";
import ledgerImage from "@/assets/project-ledger.jpg";
import orbitImage from "@/assets/project-orbit.jpg";

export type Project = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  accent: string;
  challenge: string;
  solution: string;
  outcomes: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "nexus-logistics",
    number: "01",
    title: "Nexus Logistics",
    kicker: "Operations, unified.",
    description: "A real-time command center that turns global freight complexity into clear, confident decisions.",
    image: nexusImage,
    imageAlt: "Nexus logistics command center dashboard",
    technologies: ["React", "Python", "Django", "PostgreSQL"],
    accent: "cyan",
    challenge: "A fast-growing logistics team was managing live routes, exceptions, and carrier performance across disconnected systems. Every handoff created delay, and critical decisions depended on stale spreadsheets.",
    solution: "We designed one operational layer for the entire network. Streaming events, intelligent alerts, and role-aware dashboards give every team the context they need without adding more process.",
    outcomes: [
      { value: "42%", label: "faster exception handling" },
      { value: "3.1×", label: "more shipments per operator" },
      { value: "99.98%", label: "platform uptime" },
    ],
  },
  {
    slug: "ledger-finance",
    number: "02",
    title: "Ledger Finance",
    kicker: "Clarity in every number.",
    description: "A financial intelligence platform built for high-volume teams that need answers before the market moves.",
    image: ledgerImage,
    imageAlt: "Ledger finance analytics dashboard",
    technologies: ["TypeScript", "FastAPI", "Redis", "AWS"],
    accent: "mint",
    challenge: "Finance teams were waiting hours for reports and reconciling data by hand. The company needed trustworthy, real-time visibility without compromising security or auditability.",
    solution: "We created a resilient data pipeline and a focused analytics workspace. Every metric is traceable to source, while automated controls flag anomalies before they become expensive problems.",
    outcomes: [
      { value: "8 hrs", label: "saved per weekly close" },
      { value: "67%", label: "fewer reconciliation issues" },
      { value: "1.2s", label: "average query response" },
    ],
  },
  {
    slug: "orbit-workspace",
    number: "03",
    title: "Orbit Workspace",
    kicker: "Ship together, faster.",
    description: "A collaborative delivery workspace that keeps engineering decisions, work, and momentum in one place.",
    image: orbitImage,
    imageAlt: "Orbit collaborative developer workspace",
    technologies: ["React", "Node.js", "WebSockets", "Docker"],
    accent: "violet",
    challenge: "Product and engineering teams had lost the thread between plans, code reviews, and releases. Important decisions disappeared into chat while delivery status became increasingly hard to trust.",
    solution: "Orbit connects planning and execution through a live, opinionated workflow. Teams see exactly what changed, why it matters, and what needs attention next.",
    outcomes: [
      { value: "31%", label: "shorter delivery cycles" },
      { value: "2.4×", label: "faster review turnaround" },
      { value: "86", label: "team NPS" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
