import savannaImage from "@/assets/savanna-spice.png.asset.json";
import wanderlensImage from "@/assets/wanderlens.png.asset.json";
import solesmithImage from "@/assets/solesmith.png.asset.json";

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
    slug: "savanna-spice",
    number: "01",
    title: "Savanna Spice",
    kicker: "Taste the heritage.",
    description: "A warm, cinematic restaurant experience that brings the flavors of Nigerian cuisine to the web — and turns visitors into reservations.",
    image: savannaImage.url,
    imageAlt: "Savanna Spice restaurant homepage with a spread of Nigerian dishes",
    technologies: ["React", "Next.js", "Tailwind CSS", "Prisma"],
    accent: "amber",
    challenge: "A beloved Lagos restaurant had grown entirely on word of mouth, but its only digital presence was a social media page. Reservations arrived by phone during service hours, menus lived in printed PDFs, and first-time guests had no way to preview the experience before walking in.",
    solution: "We designed a rich, atmospheric website that lets the food do the talking — full-bleed dish photography, a browsable digital menu, chef stories, and a friction-free reservation flow that works as well on a phone in traffic as it does at a desk.",
    outcomes: [
      { value: "3×", label: "more online reservations" },
      { value: "68%", label: "of bookings made online" },
      { value: "45s", label: "average menu browse time" },
    ],
  },
  {
    slug: "wanderlens",
    number: "02",
    title: "WanderLens",
    kicker: "Journeys worth framing.",
    description: "An editorial travel platform that turns wanderlust into booked trips through destination stories and guided tour experiences.",
    image: wanderlensImage.url,
    imageAlt: "WanderLens travel website hero with a tropical shoreline at sunset",
    technologies: ["React", "TypeScript", "Mapbox", "Sanity"],
    accent: "gold",
    challenge: "A small tour operator had years of destination knowledge scattered across blog posts, chat threads, and brochures. Inspiration existed in abundance, but there was no single place where travelers could dream, plan, and commit — so inquiries leaked away before they became bookings.",
    solution: "We built an editorial destination hub that pairs immersive photography with practical trip detail. Interactive tour pages, curated routes, and a clear path from story to inquiry keep momentum in one continuous journey rather than dead-ending at the inspiration stage.",
    outcomes: [
      { value: "2.8×", label: "growth in tour inquiries" },
      { value: "41%", label: "of visitors return monthly" },
      { value: "120+", label: "destinations published" },
    ],
  },
  {
    slug: "solecraft",
    number: "03",
    title: "SoleCraft",
    kicker: "Made to be walked in.",
    description: "A storefront for premium handmade shoes and bags — crafted in Nigeria, presented with the polish of a global brand, and built to convert browsing into orders.",
    image: solesmithImage.url,
    imageAlt: "SoleCraft storefront hero showing premium handmade leather shoes",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    accent: "clay",
    challenge: "A skilled shoemaker and bag designer built a loyal following through WhatsApp and Instagram DMs — but had no real storefront. Prices were quoted chat by chat, the catalogue lived in photo galleries, and new customers had no way to browse, compare, or buy without a conversation first.",
    solution: "We designed a bold, editorial commerce site that treats every product like a hero piece: full-width photography, clear sizing and care details, a simple cart and checkout, and WhatsApp integration for custom orders — so the craft sells itself before the first message is sent.",
    outcomes: [
      { value: "2.4×", label: "more monthly orders" },
      { value: "57%", label: "of orders placed online" },
      { value: "31%", label: "repeat customer rate" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
