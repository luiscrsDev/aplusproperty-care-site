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
    title: "EV Charger Installation Cost in Miami 2026: $650–$6,500 [Real Numbers]",
    shortTitle: "EV Charger Installation Cost Miami 2026",
    description:
      "EV charger installation in Miami costs $650–$6,500 in 2026. Real breakdown: labor, Miami-Dade permit, panel upgrades, plus the federal $1,000 tax credit. Written by a licensed Miami electrician.",
    date: "2026-04-30",
    author: "APLUS Property Care",
    wordCount: 2350,
    tags: ["EV Charger", "Miami", "Installation Cost", "Electrical", "Tesla", "ChargePoint"],
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
      {
        q: "How long does an EV charger installation take in Miami?",
        a: "A simple install (garage near panel, no upgrade) is typically a 3–5 hour job done in a single day. Outdoor installs with longer wire runs add 1–3 hours. If a panel upgrade is needed, plan on 1–2 days plus 1–2 days of FPL coordination for the meter swap. Permit inspection is scheduled separately and usually happens within 5–7 business days after the install.",
      },
      {
        q: "Can I install an EV charger in a Miami condo or HOA building?",
        a: "Single-family and townhouses are straightforward. Multi-unit buildings (condos, apartments) require HOA or board approval and access to a dedicated meter or sub-meter. Florida law (Statute 718.113) protects condo owners' right to install at their own expense, but you'll still need board sign-off on the install location and electrical plan. We can help draft the proposal.",
      },
      {
        q: "Is it cheaper to use FPL EVolution Home or buy outright?",
        a: "FPL EVolution Home runs $31–$38/month for 5 years (~$1,860–$2,280 total) with no upfront cost. Buying outright averages $1,200–$2,000 for a typical Miami install. So buying is usually cheaper long-term — but FPL wins if you can't outlay the lump sum or expect to move within 3–4 years and don't want a fixed asset on the wall.",
      },
      {
        q: "What's the difference between Level 1 and Level 2 EV charging?",
        a: "Level 1 uses a standard 120V outlet — adds 3–5 miles of range per hour. Fine for plug-in hybrids or if you only drive 20–30 mi/day. Level 2 uses a 240V circuit (like a dryer outlet) — adds 25–40 miles of range per hour, full charge overnight. For any modern EV with 250+ mile range, Level 2 is the right answer for daily use.",
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
