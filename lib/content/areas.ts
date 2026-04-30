/**
 * Geo landing pages — `/areas/[slug]`.
 *
 * Each neighborhood gets its own angle based on the actual demographic and
 * property mix there. Miami Beach is the flagship (most copy, hospitality
 * angle). Sunny Isles / Bal Harbour lean snowbird & ultra-luxury. Surfside
 * leans family/condo. Brickell leans young professional condo. Coral Gables
 * leans established residential.
 *
 * Doral is intentionally absent — APLUS has no clients there.
 */

import type { PlanSlug } from "@/lib/constants";

export type AreaContent = {
  slug: string;
  name: string;
  /** Used in sitemap and links. */
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  /** Body sections that explain WHY this neighborhood needs APLUS specifically. */
  sections: { title: string; body: string }[];
  /** Recommended plan for this neighborhood based on typical property profile. */
  recommendedPlan: PlanSlug;
  /** Whether to mention specific notable clients on this page. */
  notableClients?: string[];
  /** Local zip codes — adds geo signal. */
  zips: string[];
  /** FAQ specific to neighborhood. */
  faq: { q: string; a: string }[];
};

export const AREA_CONTENT: AreaContent[] = [
  {
    slug: "miami-beach",
    name: "Miami Beach",
    metaTitle: "Home Maintenance Miami Beach",
    metaDescription:
      "APLUS Property Care services Miami Beach condos, beachfront homes, and hospitality properties. Trusted by Faena, Broken Shaker, and luxury homeowners.",
    headline: "Home Maintenance & Property Care in Miami Beach",
    subheadline:
      "Hospitality-grade care for Miami Beach condos, beachfront residences, and luxury properties. Trusted by Faena, Broken Shaker, and the homeowners who can't afford a maintenance miss.",
    sections: [
      {
        title: "Why Miami Beach properties need a different standard",
        body: "Salt air, year-round humidity, and the velocity of Miami Beach hospitality mean that minor wear becomes major damage faster than anywhere else in Miami-Dade. A loose seal on an oceanfront window can become a $30,000 saltwater intrusion in a single storm. An untreated AC condensate line in a 30th-floor condo creates damage that travels two units down. We've spent over a decade learning what fails first in Miami Beach properties and built our preventive checklists around it.",
      },
      {
        title: "We work where you live",
        body: "Our crew operates daily across Miami Beach — South Beach, Mid-Beach, North Beach, Indian Creek, Sunset Islands, Star Island, La Gorce, and the barrier islands. We coordinate building access, parking, and elevator booking so you don't lift a finger. For condo owners, we know the management offices and the rules of every major building from 1 Hotel down to the Setai.",
      },
      {
        title: "Hospitality-trained, residential-tuned",
        body: "Working with Faena and Broken Shaker taught us how 5-star hospitality handles maintenance: invisible to guests, instant to managers, documented to the minute. We brought that operational discipline into residential — uniformed technicians, photo reports, predictable scheduling, single point of contact. Most contractors don't think this way. We can't think any other way.",
      },
      {
        title: "Featured services for Miami Beach",
        body: "Preventive maintenance subscription plans (most popular: Premium with twice-monthly visits and 24/7 support), hurricane prep before each named storm, EV charger installs in private garages, plumbing and electrical for older Mid-Beach homes, hospitality-grade detail for short-term rental owners, and concierge service for absentee owners. Owners with larger residences typically upgrade to VIP for weekly visits and dedicated property management.",
      },
    ],
    recommendedPlan: "premium",
    notableClients: ["Faena", "Fisher Island Club", "Broken Shaker"],
    zips: ["33109", "33139", "33140", "33141", "33154"],
    faq: [
      {
        q: "Do you service all Miami Beach condo buildings?",
        a: "Yes — we have working relationships with management offices across most major Miami Beach buildings. We coordinate access, parking, and elevator booking, and follow each building's specific contractor protocols.",
      },
      {
        q: "What about the barrier islands — Star, Hibiscus, Palm, Indian Creek?",
        a: "Yes. We service all of Miami Beach's residential islands. Some require pre-cleared vendor lists or guard-house pre-registration — we handle the coordination.",
      },
      {
        q: "Do you work with short-term rental properties?",
        a: "Yes. Several Miami Beach STR investors run their portfolios on our plans because consistent maintenance directly affects guest reviews and pricing power.",
      },
      {
        q: "Can you handle hurricane prep on a high-rise condo?",
        a: "Yes. Premium and VIP plans include pre-storm hardening: window protections per building rules, balcony securing, drain clearing, and post-storm assessment. We schedule prep visits in the week before each named storm.",
      },
    ],
  },

  {
    slug: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    metaTitle: "Home Maintenance Sunny Isles Beach",
    metaDescription:
      "APLUS Property Care for Sunny Isles Beach condos and snowbird homes. Year-round absentee-owner care, VIP concierge, hurricane prep. Trump Tower-area service.",
    headline: "Home Maintenance & Property Care in Sunny Isles Beach",
    subheadline:
      "Year-round care for absentee owners and snowbirds. Your Sunny Isles condo or home gets weekly attention, hurricane prep, and a dedicated property manager — even when you're 1,500 miles north.",
    sections: [
      {
        title: "Built for the absentee-owner reality",
        body: "Most Sunny Isles owners spend half the year somewhere else. The property still drinks salt, humidity, and sun — except now no one's there to spot the slow leak, the AC fighting the humidity, or the front door that's been sticky for three weeks. The Premium plan is the right starting point: twice-monthly visits, 24/7 support, photo reports you can review remotely, and 3 emergency calls included. Owners of larger residences often upgrade to VIP for weekly attention and a dedicated property manager.",
      },
      {
        title: "Snowbird homes — pre-arrival prep, post-departure secure",
        body: "Two weeks before your return: AC pre-cooled, fridge stocked with the basics on your list, fresh linens, security walk-through. Two weeks after departure: deep cleaning, pest prevention, climate control set to your standby spec, irrigation tuned for absent-owner schedule. We treat the home like the asset it is, not just a building.",
      },
    ],
    recommendedPlan: "premium",
    zips: ["33160"],
    faq: [
      {
        q: "I'm only in Florida 4 months a year. Which plan is right for me?",
        a: "Premium is the right starting point — twice-monthly visits and photo reports give you eyes on the property without a heavy commitment. Absentee homes accumulate damage silently (a slow drip becomes warped cabinetry by the time you return), so even Premium typically pays for itself by avoiding one preventable repair a year. If your home is larger or you want full repair authority handled while you're away, VIP adds weekly attention and a dedicated property manager.",
      },
      {
        q: "Can you receive packages and coordinate other vendors?",
        a: "Yes — included in the VIP property concierge service. Package receiving and storage, vendor coordination for cleaning, pool, and pest control, and pre-arrival home prep.",
      },
      {
        q: "Do you service Trump Tower, Acqualina, Jade, Porsche Design Tower?",
        a: "Yes — we service all major Sunny Isles condo buildings. We hold ourselves to the contractor standards each building requires.",
      },
    ],
  },

  {
    slug: "bal-harbour",
    name: "Bal Harbour",
    metaTitle: "Home Maintenance Bal Harbour | Luxury",
    metaDescription:
      "APLUS Property Care for Bal Harbour ultra-luxury homes and condos. Discreet, white-glove maintenance with a dedicated property manager. VIP-only level service.",
    headline: "Ultra-Luxury Home Care in Bal Harbour",
    subheadline:
      "Discreet, white-glove property care for Bal Harbour residences. Dedicated property manager, all repairs included, hospitality-grade execution.",
    sections: [
      {
        title: "Discretion is the deliverable",
        body: "Bal Harbour clients aren't choosing a contractor — they're choosing peace of mind. Our crews wear branded but understated uniforms, never advertise on vehicles, never post identifying photos. Property concierge service handles vendor coordination, package receiving, and pre-arrival prep so the household runs without you needing to ask.",
      },
      {
        title: "Premium is the right starting point",
        body: "Premium gives you twice-monthly preventive visits, 24/7 emergency response, small repairs included, hurricane season prep, and detailed photo reports — exactly what most Bal Harbour residences need to stay perfectly maintained. For ultra-luxury properties or owners who want a dedicated property manager and weekly attention, VIP is the natural upgrade — including landscaping and concierge service.",
      },
    ],
    recommendedPlan: "premium",
    zips: ["33154"],
    faq: [
      {
        q: "Do you sign NDAs for high-profile clients?",
        a: "Yes. Standard. Property addresses, owner names, and home details are protected by default and reinforced with a written NDA on request.",
      },
      {
        q: "Can you coordinate with our existing housekeeping and security?",
        a: "Yes — that's the property concierge service. We integrate with your existing household team rather than replace it.",
      },
    ],
  },

  {
    slug: "surfside",
    name: "Surfside",
    metaTitle: "Home Maintenance Surfside FL",
    metaDescription:
      "APLUS Property Care for Surfside homes and condos. Preventive maintenance, structural inspections, and family-focused property care.",
    headline: "Home Maintenance & Property Care in Surfside",
    subheadline:
      "Honest, preventive care for Surfside families and condo owners. We catch the small stuff before it becomes the big stuff — especially the structural details that matter most here.",
    sections: [
      {
        title: "Preventive over reactive — especially here",
        body: "After 2021, Surfside owners and boards take maintenance seriously in a way most Miami neighborhoods don't. We share that bias. Our preventive plans include exterior inspection of caulking and stucco, balcony drainage assessment, roof access points, plumbing supply lines, and HVAC condensate routing. Photo reports document year-over-year so you have a paper trail of property condition.",
      },
      {
        title: "Family-friendly, not just family-tolerated",
        body: "Most of our Surfside clients are families with kids and pets. We schedule visits around school pickup, use eco-friendly pest products by default, and our technicians are background-checked. We're the team you can trust to be in your home when you can't.",
      },
    ],
    recommendedPlan: "premium",
    zips: ["33154"],
    faq: [
      {
        q: "Do you do post-2021-style structural inspections?",
        a: "We do visual exterior inspections covering balcony drainage, stucco condition, expansion joints, and waterproofing — and document them with photos. Anything that looks structural we refer to a licensed structural engineer; we don't pretend to be one.",
      },
      {
        q: "Are your products safe around kids and pets?",
        a: "Yes. Eco-friendly pest treatments are our default. Painting and finish work uses low-VOC products. Cleaning chemicals are EPA Safer Choice when possible.",
      },
    ],
  },

  {
    slug: "brickell",
    name: "Brickell",
    metaTitle: "Home Maintenance Brickell | Condos",
    metaDescription:
      "APLUS Property Care for Brickell luxury condos. Preventive maintenance, plumbing, electrical, and EV charger installation for high-rise residences.",
    headline: "Home Maintenance & Property Care in Brickell",
    subheadline:
      "Luxury high-rise condo care in Brickell. Preventive maintenance that fits your work schedule, EV charger installs in private garages, and the responsiveness you'd expect from your tech stack.",
    sections: [
      {
        title: "Built for high-rise condo realities",
        body: "Brickell condos pose specific maintenance challenges: building-imposed contractor approvals, limited window access, balcony drainage, and building-wide HVAC that interacts with your in-unit system. We've worked across all major Brickell buildings — we know the management offices, the building rules, and the elevator booking systems. You don't lift a finger on coordination.",
      },
      {
        title: "EV charger installs in private garages",
        body: "Brickell's EV adoption is among the highest in Florida. We install Level 2 chargers in private parking spaces with full coordination through building management — permits, electrical access, and code compliance. Tesla, ChargePoint, Wallbox.",
      },
    ],
    recommendedPlan: "premium",
    zips: ["33129", "33130", "33131"],
    faq: [
      {
        q: "Do you handle EV charger installation in condo buildings?",
        a: "Yes — including the building approval process. We coordinate with building management, pull permits, and complete the install in your private parking space.",
      },
      {
        q: "Can you visit during business hours when I'm not home?",
        a: "Yes. Most Brickell clients give us coordinated access through doormen or smart locks and review the photo report afterward.",
      },
    ],
  },

  {
    slug: "coral-gables",
    name: "Coral Gables",
    metaTitle: "Home Maintenance Coral Gables",
    metaDescription:
      "APLUS Property Care for Coral Gables homes and estates. Preventive maintenance, restoration-aware care for historic properties, and concierge service.",
    headline: "Home Maintenance & Property Care in Coral Gables",
    subheadline:
      "Thoughtful maintenance for Coral Gables homes and estates. Restoration-aware care for historic properties, modern systems for newer builds, and a single team you keep year over year.",
    sections: [
      {
        title: "Coral Gables homes deserve a slower hand",
        body: "Mediterranean-style estates, mid-century homes, and architecturally significant builds need maintenance that respects original details — not generic patch jobs. We use period-appropriate materials where it matters, document existing finishes before any repair, and coordinate with restoration specialists when work goes beyond our scope.",
      },
      {
        title: "Premium fits most Coral Gables homes",
        body: "Most Coral Gables clients run on Premium — not because of property size, but because the homes are worth preserving and reactive contractor calls don't fit how they manage their properties. Twice-monthly visits, detailed reports, hurricane prep, and small repairs included cover the vast majority of needs. Owners of larger estates or those who want a dedicated property manager upgrade to VIP for weekly visits and full repair authority.",
      },
    ],
    recommendedPlan: "premium",
    zips: ["33134", "33143", "33146"],
    faq: [
      {
        q: "Do you work on historic Coral Gables properties?",
        a: "Yes. We follow Coral Gables Historic Preservation guidelines for any exterior or visible work and coordinate with the city when permits are required for designated historic structures.",
      },
      {
        q: "Can you maintain mature landscaping and old-growth trees?",
        a: "Lawn, irrigation, and small palm trimming are included in VIP. For specialty old-growth tree work we coordinate with arborists — we won't pretend to be ones.",
      },
    ],
  },
];

export const AREA_BY_SLUG = Object.fromEntries(
  AREA_CONTENT.map((a) => [a.slug, a]),
) as Record<string, AreaContent>;
