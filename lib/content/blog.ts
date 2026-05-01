/**
 * Blog post registry.
 *
 * Each post is an entry here; the actual rich content (headings, paragraphs,
 * lists) lives in `app/blog/[slug]/page.tsx` so we can write JSX directly
 * without an MDX pipeline. Keep this file as the single source of truth for
 * post metadata: titles, descriptions, dates, FAQ entries (which feed
 * FAQPage schema), and ordering.
 */

export type BlogPostMeta = {
  slug: string;
  title: string;
  /** Short title used in cards/lists. */
  shortTitle?: string;
  description: string;
  /** ISO date — used for dateline & schema datePublished. */
  date: string;
  author: string;
  /** ~ word count for read time estimate. */
  wordCount: number;
  /** Comma-separated keywords / tags. */
  tags: string[];
  /** FAQ entries to emit as FAQPage schema. Optional. */
  faq?: { q: string; a: string }[];
};

export const POSTS: BlogPostMeta[] = [
  {
    slug: "ev-charger-installation-cost-miami-2026",
    title: "How Much Does EV Charger Installation Cost in Miami in 2026?",
    shortTitle: "EV Charger Installation Cost Miami 2026",
    description:
      "Realistic Level 2 EV charger installation costs in Miami in 2026 — including labor, permits, panel upgrades, and the federal tax credit. Written by APLUS, a licensed Miami electrician.",
    date: "2026-04-30",
    author: "APLUS Property Care",
    wordCount: 1900,
    tags: ["EV Charger", "Miami", "Installation Cost", "Electrical"],
    faq: [
      {
        q: "How much does Level 2 EV charger installation cost in Miami?",
        a: "Most Miami homes pay $400–$1,200 in labor for a standard Level 2 install, plus $400–$700 for the charger itself. If a 200A panel upgrade is needed, add $2,500–$5,000. Total range: $800 (best case, no panel upgrade) to $6,500 (older home needing full upgrade).",
      },
      {
        q: "Do I need a permit for an EV charger in Miami-Dade?",
        a: "Yes for Level 2 (240V). Miami-Dade requires an electrical permit and inspection. Level 1 (standard 120V plug-in) does not require a permit.",
      },
      {
        q: "What's the federal EV charger tax credit in 2026?",
        a: "The Alternative Fuel Vehicle Refueling Property Credit covers 30% of installation costs (charger + labor) up to $1,000, for installs completed by June 30, 2026.",
      },
      {
        q: "Should I get a Tesla Wall Connector or a ChargePoint?",
        a: "If you only own a Tesla, the Wall Connector is purpose-built and clean. If you have a non-Tesla EV or expect to switch brands, ChargePoint Home Flex is more versatile (works with any J1772/SAE plug + has a great app).",
      },
    ],
  },
];

export const POSTS_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p])) as Record<
  string,
  BlogPostMeta
>;

export function readingMinutes(wordCount: number) {
  // average 220 words per minute, rounded to nearest minute, min 1
  return Math.max(1, Math.round(wordCount / 220));
}
