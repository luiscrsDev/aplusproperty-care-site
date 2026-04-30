/**
 * Long-form content for /maintenance-plans/[slug] pages.
 *
 * Each plan page targets a slightly different keyword:
 *  - Essential — "monthly home maintenance miami apartment"
 *  - Premium   — "complete home maintenance plan miami"
 *  - VIP       — "luxury home maintenance miami concierge"
 */

import type { PlanSlug } from "@/lib/constants";

export type PlanFAQ = { q: string; a: string };

export type PlanContent = {
  slug: PlanSlug;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  /** Bigger sections — typical situation, what's included, ROI, etc. */
  sections: { title: string; body: string }[];
  /** Ideal customer description. */
  idealFor: string[];
  faq: PlanFAQ[];
};

export const PLAN_CONTENT: Record<PlanSlug, PlanContent> = {
  essential: {
    slug: "essential",
    metaTitle: "Essential Plan — Monthly Home Maintenance Miami | $199/mo",
    metaDescription:
      "$199/month home maintenance plan for Miami apartments and small homes. One monthly visit, photo report, WhatsApp support. Cancel anytime.",
    headline: "Essential — Monthly Home Care",
    subheadline:
      "$199/month for apartments and small homes in Miami. One monthly preventive visit, photo report after each visit, and WhatsApp support during business hours. Cancel anytime.",
    sections: [
      {
        title: "What you get each month",
        body: "One scheduled visit (~90 minutes) where we run through a 24-point preventive checklist: plumbing fixtures, electrical panel, AC filter, weatherstripping, exterior caulking, and visible wear points. You receive a photo report after each visit with green / yellow / red status per item, plus prioritized recommendations. One emergency call per month is included at no extra charge.",
      },
      {
        title: "Who the Essential plan is for",
        body: "Best fit for Miami apartments, condos, and small single-family homes (under 1,500 sq ft) where the owner wants a single accountable contact for routine upkeep, but doesn't need weekly attention. Common use case: snowbirds who keep a Miami pied-à-terre, first-time homeowners who don't yet have a contractor relationship, and busy professionals who'd rather pay for prevention than emergency repair.",
      },
      {
        title: "How the math works",
        body: "$199/month is roughly the cost of one emergency plumber visit. By catching issues early, most clients see Essential pay for itself within 4–6 months — a single avoided water leak, AC compressor replacement, or roof patch covers more than a year of plan cost. After that, you're banking value.",
      },
    ],
    idealFor: [
      "Miami apartments and condos",
      "Small single-family homes (under 1,500 sq ft)",
      "Snowbird owners",
      "First-time homeowners building a contractor relationship",
    ],
    faq: [
      {
        q: "Can I cancel anytime?",
        a: "Yes — month-to-month, no contract, no cancellation fee.",
      },
      {
        q: "What if I need more than one emergency call in a month?",
        a: "Additional emergency visits are billed at our standard rate, with a 15% plan-member discount. If emergencies become frequent, we'd recommend upgrading to Premium for more included calls.",
      },
      {
        q: "Are repairs included?",
        a: "Diagnostic and small repairs (under 30 min) are included. Anything beyond that gets a transparent quote with plan-member pricing — no surprise bills.",
      },
      {
        q: "Do I need to be home during the visit?",
        a: "Not required. Most clients give us key/code access and we send the photo report so you can review remotely.",
      },
    ],
  },

  premium: {
    slug: "premium",
    metaTitle: "Premium Plan — Complete Home Maintenance Miami | $399/mo",
    metaDescription:
      "$399/month home maintenance plan for medium-to-large Miami homes. Twice-monthly visits, 24/7 support, 3 emergency calls, small repairs included. Cancel anytime.",
    headline: "Premium — Complete Home Care",
    subheadline:
      "$399/month for medium-to-large homes in Miami. Two visits per month, 24/7 support, 3 included emergency calls, and small repairs at no extra charge. Cancel anytime.",
    sections: [
      {
        title: "What you get each month",
        body: "Two scheduled visits (~2 hours each) covering full preventive maintenance, hurricane prep before storm season, and small repairs included on the spot. Detailed report after each visit with photos, recommendations, and a year-over-year history of your home. Three emergency calls per month included at no extra charge, with 24/7 response.",
      },
      {
        title: "Who Premium is for",
        body: "Best fit for Miami homeowners with 1,500–4,000 sq ft single-family homes or large condos who want their property genuinely managed — not just inspected. Common use case: working professionals with families, owners who travel frequently, and anyone who's been burned once too many times by reactive contractor calls.",
      },
      {
        title: "Hurricane season included",
        body: "Florida hurricane season runs June–November. Premium plans include pre-storm hardening (window protections, outdoor furniture, drain clearing, roof inspection) and post-storm assessment. We're on-call during named storms — most contractors aren't.",
      },
    ],
    idealFor: [
      "Single-family homes 1,500–4,000 sq ft",
      "Large condos and townhomes",
      "Owners who travel frequently",
      "Families who want hands-off home management",
    ],
    faq: [
      {
        q: "Can I cancel anytime?",
        a: "Yes — month-to-month, no contract, no cancellation fee.",
      },
      {
        q: "What counts as a 'small repair'?",
        a: "Anything our visiting technician can complete in under 60 minutes with parts costing under $50. Examples: replacing a leaky faucet washer, swapping a worn hinge, recaulking a backsplash, replacing a switch. Larger work gets a transparent quote with plan-member pricing.",
      },
      {
        q: "Is the 24/7 support a real human?",
        a: "Yes. Anderson and the senior team rotate after-hours coverage. You won't get a ticket queue.",
      },
      {
        q: "Do you do hurricane prep?",
        a: "Yes — included in Premium. We harden your home before each named storm and do post-storm assessment after the all-clear.",
      },
    ],
  },

  vip: {
    slug: "vip",
    metaTitle: "VIP Plan — Luxury Home Concierge Miami | $699/mo",
    metaDescription:
      "$699/month concierge home care for Miami luxury properties. Weekly visits, dedicated property manager, all repairs included, landscaping. Cancel anytime.",
    headline: "VIP — Concierge Property Care",
    subheadline:
      "$699/month for high-end Miami properties. Weekly visits, a dedicated property manager, all repairs included, landscaping, and concierge service. Cancel anytime.",
    sections: [
      {
        title: "What you get each week",
        body: "Weekly preventive visits (~3 hours each) with a dedicated property manager who knows your home, your schedule, and your preferences. Executive report monthly. All routine repairs included at no extra charge. Landscaping and irrigation maintenance included. Unlimited emergency calls with 24/7 response. Errands and concierge service available — package receiving, vendor coordination, pre-stay home prep for travel returns.",
      },
      {
        title: "Who VIP is for",
        body: "Best fit for Miami luxury homes, beachfront properties, and snowbird residences over 4,000 sq ft, plus owners who want their property fully managed and treat it as an asset to be preserved at top condition. Common use case: international owners with Miami secondary residences, families who split time between cities, and owners of architecturally significant properties.",
      },
      {
        title: "Why a dedicated property manager matters",
        body: "Routine contractors don't notice the small drift — the slight humidity in a closet, the irrigation head that's spraying 5° off, the trim that's hairline-cracked. Your dedicated manager builds a baseline knowledge of your home over months and catches what no one else would. Plus: one phone number for everything, no juggling vendors.",
      },
    ],
    idealFor: [
      "Luxury homes (4,000+ sq ft)",
      "Beachfront and waterfront properties",
      "Snowbird and international owners",
      "Architecturally significant homes",
    ],
    faq: [
      {
        q: "Can I cancel anytime?",
        a: "Yes — month-to-month, no contract, no cancellation fee. Most VIP clients stay multi-year.",
      },
      {
        q: "What does 'all repairs included' actually cover?",
        a: "Any repair under $1,500 in materials per occurrence is fully covered, no extra invoice. Anything above is quoted transparently with plan-member pricing. In practice this covers ~95% of repairs in well-maintained homes.",
      },
      {
        q: "Is landscaping really included?",
        a: "Yes — weekly lawn care, irrigation tuning, plant maintenance, and palm trimming during prep season. Major hardscape, replanting, or new irrigation installs are quoted separately.",
      },
      {
        q: "What does the property concierge service include?",
        a: "Package receiving and storage, vendor coordination (cleaning service, pool, pest control), pre-arrival home prep for travel returns (AC pre-cooled, fresh basics, security walk-through). Tasks beyond that scope are accommodated case-by-case.",
      },
    ],
  },
};
