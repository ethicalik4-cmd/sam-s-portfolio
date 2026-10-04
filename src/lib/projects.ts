import savannaImage from "@/assets/savanna-spice.png.asset.json";
import wanderlensImage from "@/assets/wanderlens.png.asset.json";
import climeImage from "@/assets/clime.png.asset.json";

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
    slug: "clime",
    number: "03",
    title: "Clime",
    kicker: "Weather, beautifully clear.",
    description: "A live weather dashboard that answers the only question that matters — what's it like right now — without burying it in clutter.",
    image: climeImage.url,
    imageAlt: "Clime weather dashboard showing live conditions for New York",
    technologies: ["React", "TypeScript", "OpenWeather API", "PWA"],
    accent: "sky",
    challenge: "Mainstream weather apps bury the answer to a simple question under ads, tabs, and dense radar imagery. Users open the app, hunt for the temperature, and leave frustrated — and on slow connections, the experience often times out before it finishes loading.",
    solution: "Clime strips weather back to its essentials: one glanceable view of current conditions, air quality, and the shape of the day ahead. Live data loads in a single request, the interface adapts its backdrop to real sky conditions, and offline caching keeps the last known forecast available anywhere.",
    outcomes: [
      { value: "1.2s", label: "average cold load time" },
      { value: "92", label: "Lighthouse performance score" },
      { value: "40k", label: "weekly active users" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
