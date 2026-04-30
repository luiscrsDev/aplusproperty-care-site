/**
 * Brand & business constants — single source of truth for all NAP (Name/Address/Phone) data.
 * Keeping NAP consistent across HTML, schema, and external citations is a core local-SEO requirement.
 */

export const BRAND = {
  name: "APLUS Property Care",
  legalName: "APLUS Property Care LLC",
  tagline: "Your home cared, your life free.",
  description:
    "Preventive home maintenance and EV charger installation in Miami. Three subscription plans, certified technicians, 24/7 support. Cancel anytime.",
  url: "https://aplusproperty.care",
} as const;

export const CONTACT = {
  phone: "+13054957980",
  phoneDisplay: "(305) 495-7980",
  whatsapp: "13054957980", // wa.me uses E.164 without the +
  email: "contact@aplusproperty.care",
  emergencyEmail: "emergency@aplusproperty.care",
} as const;

export const ADDRESS = {
  street: "6020 NW 99th Ave, Suite #304",
  locality: "Doral",
  region: "FL",
  postalCode: "33178",
  country: "US",
  formatted: "6020 NW 99th Ave, Suite #304, Doral, FL 33178",
} as const;

export const HOURS = [
  { day: "Monday", open: "09:00", close: "17:00" },
  { day: "Tuesday", open: "09:00", close: "17:00" },
  { day: "Wednesday", open: "09:00", close: "17:00" },
  { day: "Thursday", open: "09:00", close: "17:00" },
  { day: "Friday", open: "09:00", close: "17:00" },
  { day: "Saturday", open: "09:00", close: "15:00" },
] as const;

export const HOURS_DISPLAY = "Mon–Fri 9am–5pm · Sat 9am–3pm";

export const SERVICE_AREA = {
  primary: "Miami Beach, FL",
  /** Geo pages we build out. Doral is the warehouse base only — no clients there. */
  cities: [
    "Miami Beach",
    "Sunny Isles Beach",
    "Bal Harbour",
    "Surfside",
    "Brickell",
    "Coral Gables",
  ],
  county: "Miami-Dade County",
} as const;

export const TEAM = [
  {
    slug: "anderson-moraes",
    name: "Anderson Moraes",
    role: "CEO & General Contractor",
    bio: "12 years of experience in residential and commercial construction and maintenance.",
  },
] as const;

/** Hero / About section social-proof stats — kept in one place to avoid drift. */
export const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Guarantee" },
  { value: "24/7", label: "Emergency" },
  { value: "500+", label: "Clients" },
] as const;

/**
 * Clients & projects we've worked with — used in the "Trusted by" section.
 *
 * Logo files live in /public/clients/{slug}.png (or .svg). The component
 * gracefully falls back to the client name in text if the file isn't there yet.
 */
export const CLIENTS = [
  { slug: "faena", name: "Faena", file: "faena.png" },
  { slug: "fisher-island-club", name: "Fisher Island Club", file: "fisher-island-club.png" },
  { slug: "portobello-america", name: "Portobello America", file: "portobello-america.png" },
  { slug: "luciana-brito-galeria", name: "Luciana Brito Galeria", file: "luciana-brito-galeria.png" },
  { slug: "paulin-paulin-paulin", name: "Paulin, Paulin, Paulin", file: "paulin-paulin-paulin.png" },
  { slug: "morgan-automotive", name: "Morgan Automotive Group", file: "morgan-automotive.png" },
  { slug: "fox-paine", name: "Fox Paine", file: "fox-paine.png" },
  { slug: "anc-america", name: "ANC America", file: "anc-america.png" },
  { slug: "midway-ford", name: "Midway Ford", file: "midway-ford.png" },
  { slug: "broken-shaker", name: "Broken Shaker", file: "broken-shaker.png" },
  { slug: "ag", name: "AG", file: "ag.png" },
] as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/aplusproperty.care",
  facebook: "https://www.facebook.com/aplusproperty.care",
  // Add more as accounts are created
} as const;

/** Tracking — shared with the existing GA4 / GTM setup. */
export const TRACKING = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-K4KM9GZW",
  ga4Id: "G-XFN3B6VRV3",
} as const;

/** Meta — used by lib/schema and individual pages. */
export const PRICE_RANGE = "$$";

/**
 * Subscription plans — single source of truth.
 * Updated 2026-04-22 (frequency lowered: 1 / 2 / weekly visits).
 */
export const PLANS = [
  {
    slug: "essential",
    name: "Essential",
    price: 199,
    priceDisplay: "$199",
    period: "/month",
    tagline: "For apartments and small homes",
    visits: "1 visit per month",
    features: [
      "Monthly preventive maintenance",
      "Photo report after each visit",
      "WhatsApp support during business hours",
      "1 emergency call included",
      "Certified technicians",
    ],
    cta: "Start Essential",
    highlight: false,
  },
  {
    slug: "premium",
    name: "Premium",
    price: 399,
    priceDisplay: "$399",
    period: "/month",
    tagline: "For medium and large homes",
    visits: "2 visits per month",
    features: [
      "Complete preventive maintenance",
      "Detailed report after each visit",
      "24/7 support",
      "3 emergency calls included",
      "Small repairs included",
      "Discount on extra services",
    ],
    cta: "Start Premium",
    highlight: true,
    badge: "Most Popular",
  },
  {
    slug: "vip",
    name: "VIP",
    price: 699,
    priceDisplay: "$699",
    period: "/month",
    tagline: "Concierge service for high-end properties",
    visits: "Weekly visits",
    features: [
      "Premium preventive maintenance",
      "Executive report",
      "Dedicated property manager",
      "Unlimited emergency calls",
      "All repairs included",
      "Landscaping included",
      "Property concierge service",
    ],
    cta: "Start VIP",
    highlight: false,
  },
] as const;

export type PlanSlug = (typeof PLANS)[number]["slug"];

/** Services offered — used to generate /services/[slug] pages. */
export const SERVICES = [
  {
    slug: "ev-charger-installation",
    name: "EV Charger Installation",
    short: "Level 2 home EV charger installation in Miami — Tesla, ChargePoint, Wallbox.",
    icon: "Zap",
    flagship: true,
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    short: "Recurring inspections that catch small issues before they become emergencies.",
    icon: "Wrench",
    flagship: false,
  },
  {
    slug: "plumbing",
    name: "Plumbing Services",
    short: "Leaks, fixtures, water heaters, drain cleaning — licensed plumbers.",
    icon: "Droplets",
    flagship: false,
  },
  {
    slug: "electrical",
    name: "Electrical Services",
    short: "Panel upgrades, outlets, lighting, smart home wiring — licensed electricians.",
    icon: "Plug",
    flagship: false,
  },
  {
    slug: "hvac",
    name: "HVAC",
    short: "AC and heating maintenance, repairs, and installation for the Florida climate.",
    icon: "Wind",
    flagship: false,
  },
  {
    slug: "painting",
    name: "Painting & Finishes",
    short: "Interior and exterior painting, drywall repair, finishing carpentry.",
    icon: "Paintbrush",
    flagship: false,
  },
  {
    slug: "landscaping",
    name: "Landscaping & Gardening",
    short: "Lawn, irrigation, plants, and outdoor maintenance.",
    icon: "Trees",
    flagship: false,
  },
  {
    slug: "furniture-transport",
    name: "Furniture & Art Transport",
    short: "Careful transport and placement of furniture and artwork.",
    icon: "Truck",
    flagship: false,
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    short: "Recurring pest treatment and prevention for Miami's climate.",
    icon: "Bug",
    flagship: false,
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
