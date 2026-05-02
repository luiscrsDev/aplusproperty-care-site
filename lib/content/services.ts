/**
 * Long-form content for each `/services/[slug]` page.
 *
 * Flagship pages (EV charger installation) get the full treatment — long body,
 * FAQ for FAQPage schema, multiple sections — because they're the highest-value
 * organic targets. Other services get a solid "stub" with intro + bullets +
 * standard FAQ. Easy to flesh out later.
 */

import type { ServiceSlug } from "@/lib/constants";

export type ServiceFAQ = { q: string; a: string };

export type ServiceContent = {
  slug: ServiceSlug;
  /** Used in <title> — keep ≤ 60 chars total once site name is appended. */
  metaTitle: string;
  metaDescription: string;
  /** Hero headline displayed at the top of the page. */
  headline: string;
  /** One-line subheadline below the H1. */
  subheadline: string;
  /** Section bullets with a short body each — main page content. */
  sections: { title: string; body: string }[];
  /** What's included — quick scan list. */
  included: string[];
  /** Why APLUS — differentiators. */
  whyUs: string[];
  /** FAQ — feeds the FAQPage schema. */
  faq: ServiceFAQ[];
};

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContent> = {
  "ev-charger-installation": {
    slug: "ev-charger-installation",
    metaTitle: "EV Charger Installation Miami",
    metaDescription:
      "Licensed Level 2 EV charger installation across Miami-Dade. Tesla Wall Connector, ChargePoint, Wallbox. Permits handled, transparent pricing.",
    headline: "EV Charger Installation in Miami",
    subheadline:
      "Level 2 home chargers for Tesla, ChargePoint and Wallbox. Permits, panel upgrades, and weatherproofing — handled end-to-end by licensed Miami-Dade electricians.",
    sections: [
      {
        title: "Level 1 vs Level 2 — what your home actually needs",
        body: "A Level 1 charger plugs into a regular 120V outlet and adds about 4 miles of range per hour — usable, but slow. A Level 2 charger runs on a dedicated 240V circuit and adds 25–30 miles per hour, fully charging most EVs overnight. For any household using their EV daily, Level 2 is the answer. We handle the breaker, conduit, outlet, and Miami-Dade permit so you don't have to coordinate with three different trades.",
      },
      {
        title: "Permits and panel upgrades — Miami-Dade specifics",
        body: "Miami-Dade requires an electrical permit for any Level 2 install. We pull the permit, schedule the inspection, and stay on-site through final sign-off. If your panel is undersized (older homes often have 100A or 125A panels), we coordinate the upgrade to 200A — typical cost $2,500–$5,000 depending on whether your home meets HVHZ requirements. We give you a fixed quote up front, never a surprise mid-job.",
      },
      {
        title: "Brands we install",
        body: "Tesla Wall Connector (Gen 3), ChargePoint Home Flex, Wallbox Pulsar Plus, and Grizzl-E Smart. We're brand-agnostic — we'll recommend based on your vehicle, charging speed needs, smart-home setup, and budget. If you've already bought your charger, we install it. If you haven't, we source it for you with no markup beyond Florida's wholesale pricing.",
      },
      {
        title: "Federal incentive — 30% back, up to $1,000",
        body: "The federal Alternative Fuel Vehicle Refueling Property Credit covers 30% of EV charger installation costs up to $1,000, applicable to installs completed by June 30, 2026. We provide the documentation you need to claim it on your taxes. FPL also runs the EVolution Home program ($31–$38/month flat fee with no upfront cost) — we can compare both paths so you pick what's cheaper over your ownership horizon.",
      },
    ],
    included: [
      "Site assessment and panel evaluation",
      "Miami-Dade electrical permit pulled in your name",
      "Dedicated 240V/40A circuit with weatherproof outlet",
      "Charger mounting (interior or exterior, garage or driveway)",
      "Code-compliant conduit run",
      "Final inspection coordination",
      "1-year workmanship warranty",
    ],
    whyUs: [
      "Florida-licensed electricians (not generalists)",
      "HVHZ-compliant install for storm-prone Miami homes",
      "Fixed quote — no mid-job surprises",
      "Same crew handles everything: permit, panel, install, inspection",
      "Bonus: enrolls you in our preventive maintenance plan if you want ongoing electrical care",
    ],
    faq: [
      {
        q: "How much does EV charger installation cost in Miami?",
        a: "Typical Level 2 installs run $400–$1,200 in labor depending on wiring distance, panel headroom, and outdoor weatherproofing. The charger itself is $400–$700. If a 200A panel upgrade is needed, add $2,500–$5,000. We give a fixed quote after a free site visit so you know the full number before we start.",
      },
      {
        q: "Do I need a permit for a Level 2 EV charger in Miami-Dade?",
        a: "Yes. Miami-Dade requires an electrical permit for any new 240V circuit, which is what a Level 2 charger needs. We pull the permit in your name and stay on the job through inspection sign-off. Level 1 chargers (the standard 120V plug-in) do not require a permit.",
      },
      {
        q: "How long does the installation take?",
        a: "Most installs are completed in 4–8 hours of on-site work, often in a single day. The permit and inspection scheduling typically extend the full timeline to 5–10 business days from the time we pull the permit.",
      },
      {
        q: "Will my home's electrical panel handle a Level 2 charger?",
        a: "Most modern Miami homes (200A panels) handle Level 2 with no upgrade. Older homes with 100A or 125A panels often need a panel upgrade — we evaluate this during the free site visit. We never force an upgrade if a load calculation shows your existing panel is adequate.",
      },
      {
        q: "Which EV chargers do you recommend?",
        a: "For Tesla owners: the Tesla Wall Connector (Gen 3) integrates seamlessly. For non-Tesla EVs: the ChargePoint Home Flex offers the best app and adjustable amperage. Wallbox Pulsar Plus is a strong premium option. We're brand-agnostic — we install whatever you buy, or source it for you.",
      },
      {
        q: "Can I claim the federal tax credit if you install my charger?",
        a: "Yes. We provide an itemized invoice and Form 8911 documentation so you can claim 30% back (up to $1,000) on your federal taxes. The credit applies to installs completed by June 30, 2026.",
      },
    ],
  },

  "preventive-maintenance": {
    slug: "preventive-maintenance",
    metaTitle: "Preventive Home Maintenance Miami",
    metaDescription:
      "Recurring preventive home maintenance in Miami. Monthly inspections, photo reports, and emergency response — small issues fixed before they become big.",
    headline: "Preventive Home Maintenance in Miami",
    subheadline:
      "Recurring inspections that catch small issues before they become emergencies. The most reliable way to protect property value in Florida's climate.",
    sections: [
      {
        title: "Why preventive beats reactive in Miami",
        body: "Florida humidity and salt air work on every Miami home year-round. A loose flashing in March becomes a roof leak in August. A slow drip under the kitchen sink becomes warped cabinetry in six months. Preventive maintenance identifies these in their first stage, when they cost $150 to fix instead of $5,000.",
      },
      {
        title: "What we inspect each visit",
        body: "Plumbing fixtures and visible pipework, electrical panel and outlets, HVAC filters and coils, roofing and gutter access points, exterior caulking, irrigation, weatherstripping, and appliance condition. You receive a photo report after every visit with green / yellow / red status per item.",
      },
    ],
    included: [
      "Recurring scheduled visit (monthly, twice-monthly, or weekly)",
      "Multi-system inspection checklist",
      "Photo report after each visit",
      "Priority emergency response",
      "Discounts on repair work that arises from inspections",
    ],
    whyUs: [
      "One single team — never different contractors",
      "Photo reports build a year-over-year history of your home",
      "Hurricane prep included in seasonal visits",
      "All technicians licensed and insured",
    ],
    faq: [
      {
        q: "What's the difference between this and just hiring a handyman?",
        a: "A handyman shows up when you call. Preventive maintenance shows up before you'd think to call — finding small issues at $150 instead of $5,000. You also get a single accountable team that knows your home year over year, instead of a different person each time.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. All plans are month-to-month. No long-term contract, no cancellation fee.",
      },
      {
        q: "Do you do hurricane prep?",
        a: "Yes — included in Premium and VIP plans. We harden your home before each named storm: window protections, outdoor furniture securing, drain clearing, roof inspection.",
      },
    ],
  },

  plumbing: {
    slug: "plumbing",
    metaTitle: "Plumbing Services Miami | Licensed",
    metaDescription:
      "Licensed plumbers serving all of Miami-Dade. Leak detection, fixture replacement, water heater repair, drain cleaning. Fast response.",
    headline: "Plumbing Services in Miami",
    subheadline:
      "Leaks, fixtures, water heaters, and drain cleaning by licensed plumbers — same crew, same standards, every visit.",
    sections: [
      {
        title: "What we handle",
        body: "Leak detection and repair, faucet and fixture replacement, toilet repair and installation, water heater service and replacement, drain cleaning and unclogging, garbage disposal install and repair, sump pump service.",
      },
    ],
    included: [
      "Licensed and insured plumbers",
      "Same-day response on emergency leaks",
      "Transparent pricing — quote before work starts",
      "1-year workmanship warranty",
    ],
    whyUs: [
      "Same crew that does your maintenance plan",
      "No upselling — we recommend repair over replacement when it makes sense",
      "Documented work history for your home",
    ],
    faq: [
      {
        q: "Do you handle emergencies after hours?",
        a: "Yes — Premium and VIP plan members get 24/7 emergency response. Non-plan customers get next-business-day priority.",
      },
      {
        q: "Are you licensed?",
        a: "Yes. All our plumbers carry Florida licenses and are insured.",
      },
    ],
  },

  electrical: {
    slug: "electrical",
    metaTitle: "Electrical Services Miami | Licensed",
    metaDescription:
      "Licensed electricians in Miami. Panel upgrades, outlets, lighting, smart home wiring, EV chargers. Code-compliant work with permits.",
    headline: "Electrical Services in Miami",
    subheadline:
      "Panel upgrades, outlet and lighting installs, smart home wiring, and EV charger setups — by licensed Miami-Dade electricians.",
    sections: [
      {
        title: "What we handle",
        body: "Panel upgrades (100A → 200A is our most common), GFCI outlet installs (required in Miami kitchens, baths, and outdoor spaces), recessed and pendant lighting, smart switch and thermostat wiring, ceiling fan installs, EV charger circuits, generator transfer switches, surge protection.",
      },
    ],
    included: [
      "Florida-licensed electricians",
      "Permits pulled when required",
      "Code-compliant work — passes inspection first try",
      "1-year workmanship warranty",
    ],
    whyUs: [
      "Same crew across plumbing, electrical, HVAC — one accountable team",
      "Bundle with EV charger installation if relevant",
      "HVHZ-compliant for storm-zone Miami homes",
    ],
    faq: [
      {
        q: "Do I need a permit for an electrical panel upgrade?",
        a: "Yes — Miami-Dade requires an electrical permit and inspection for panel upgrades. We pull the permit in your name and stay on-site through final inspection.",
      },
    ],
  },

  hvac: {
    slug: "hvac",
    metaTitle: "HVAC Services Miami | AC & Heating",
    metaDescription:
      "Miami HVAC services — AC and heating maintenance, repairs, and installation tuned for Florida's climate. Recurring filter and coil care included in plans.",
    headline: "HVAC Services in Miami",
    subheadline:
      "AC and heating maintenance, repairs, and installation tuned for Florida's climate.",
    sections: [
      {
        title: "What we handle",
        body: "Seasonal tune-ups (filter, coil clean, refrigerant check), AC repair, full system replacement, mini-split install, smart thermostat setup, ductwork inspection, indoor air quality assessments.",
      },
    ],
    included: [
      "Filter replacement on every plan visit",
      "Annual deep clean of coils and condensate line",
      "Same-day diagnostic on no-cool emergencies (Premium / VIP)",
    ],
    whyUs: [
      "Florida humidity is hard on systems — we know what fails first",
      "Bundle with electrical and plumbing — no juggling vendors",
    ],
    faq: [
      {
        q: "How often should I change my AC filter in Miami?",
        a: "Every 60–90 days for standard filters, every 30 days during heaviest humidity months (June–September). Plan members get this done automatically.",
      },
    ],
  },

  painting: {
    slug: "painting",
    metaTitle: "Painting & Finishes Miami",
    metaDescription:
      "Interior and exterior painting in Miami, plus drywall repair and finishing carpentry. Quality finishes that hold up to Florida humidity.",
    headline: "Painting & Finishes",
    subheadline:
      "Interior and exterior painting, drywall repair, and finishing carpentry — finishes built for Florida humidity.",
    sections: [
      {
        title: "What we handle",
        body: "Interior repaints (rooms, accent walls, ceilings), exterior repaints (stucco prep, weatherproof finish), drywall repair and patching, baseboard and trim install, cabinet refinish.",
      },
    ],
    included: [
      "Surface prep included (scraping, sanding, priming)",
      "Premium-grade paints rated for Florida UV / humidity",
      "Furniture moved and protected — clean job site",
    ],
    whyUs: [
      "Florida-rated finishes — won't peel after one summer",
      "Same crew for follow-up touch-ups years later",
    ],
    faq: [
      {
        q: "How long does an interior repaint last in Miami?",
        a: "With proper prep and the right paint, 7–10 years interior, 5–7 years exterior. Without prep, 2–3 years.",
      },
    ],
  },

  landscaping: {
    slug: "landscaping",
    metaTitle: "Landscaping & Gardening Miami",
    metaDescription:
      "Recurring lawn care, irrigation, plant care, and outdoor maintenance for Miami homes. Florida-native expertise.",
    headline: "Landscaping & Gardening",
    subheadline: "Lawn, irrigation, plants, and outdoor maintenance for Miami's tropical climate.",
    sections: [
      {
        title: "What we handle",
        body: "Lawn care (mowing, edging, fertilization), irrigation install and repair, plant install and replacement, palm trimming, mulch refresh, hardscape touch-ups.",
      },
    ],
    included: [
      "Florida-friendly plants (native species when possible)",
      "Irrigation efficiency check — saves water and money",
      "Hurricane-season palm and tree pruning",
    ],
    whyUs: [
      "Plant choices that thrive in Miami — not just whatever's at the nursery",
      "Bundled with VIP maintenance plan",
    ],
    faq: [
      {
        q: "How often should my lawn be cut in Miami?",
        a: "Every 7–10 days during May–October growing season, every 14 days in winter.",
      },
    ],
  },

  "furniture-transport": {
    slug: "furniture-transport",
    metaTitle: "Furniture & Art Transport Miami",
    metaDescription:
      "Specialized furniture and artwork transport in Miami. White-glove service for high-value pieces — packing, transport, placement.",
    headline: "Furniture & Art Transport",
    subheadline: "White-glove handling and transport of furniture and artwork — across Miami or between cities.",
    sections: [
      {
        title: "What we handle",
        body: "Specialized packing for fine art and antiques, climate-controlled transport, white-glove placement at destination, insurance coverage, crating for valuables.",
      },
    ],
    included: [
      "Climate-controlled vehicles",
      "Specialized packing materials",
      "Insurance coverage on declared value",
      "Placement and unpacking at destination",
    ],
    whyUs: [
      "Trusted by Miami galleries and luxury homeowners",
      "Discreet — no advertised brand on trucks for high-value moves",
    ],
    faq: [
      {
        q: "Do you handle long-distance moves?",
        a: "Local Miami-Dade and South Florida by default. We can coordinate longer routes through trusted partners.",
      },
    ],
  },

  "pest-control": {
    slug: "pest-control",
    metaTitle: "Pest Control Miami | Eco-Friendly",
    metaDescription:
      "Eco-friendly pest control in Miami — insect and rodent treatment, prevention strategies, and recurring service plans.",
    headline: "Pest Control",
    subheadline: "Recurring pest treatment and prevention tuned for Miami's climate.",
    sections: [
      {
        title: "What we handle",
        body: "Insect treatment (ants, roaches, mosquitos), rodent control, termite prevention and treatment, eco-friendly options, recurring quarterly service plans.",
      },
    ],
    included: [
      "Initial property assessment",
      "Targeted treatment based on findings",
      "Eco-friendly product options",
      "Recurring quarterly visits",
    ],
    whyUs: [
      "Miami climate means pests year-round — we plan for it",
      "Eco-friendly options that are safe around kids and pets",
    ],
    faq: [
      {
        q: "Are your treatments safe for pets and kids?",
        a: "Yes — we offer eco-friendly product lines as the default, and explain trade-offs clearly when stronger products are warranted.",
      },
    ],
  },

  "moving-storage": {
    slug: "moving-storage",
    metaTitle: "Moving & Storage Miami | White-Glove Service",
    metaDescription:
      "Local Miami moving and climate-controlled storage with white-glove handling for furniture, art, and high-value items.",
    headline: "Moving & Storage in Miami",
    subheadline:
      "Local moves and climate-controlled storage with the same hospitality-grade care we bring to every APLUS service.",
    sections: [
      {
        title: "What we handle",
        body: "Local Miami-Dade moves, climate-controlled storage at our Doral warehouse, white-glove furniture and art handling, custom crating for fine pieces, packing and unpacking, and inventory documentation. Insured, scheduled, predictable.",
      },
      {
        title: "Why APLUS for moving",
        body: "Most movers are subcontractors with no relationship to your property. We're the same team that maintains it. We know which pieces are fragile, which doorways are tight, which floors need protection. The move becomes a continuation of the care, not a disruption.",
      },
    ],
    included: [
      "Local moves within Miami-Dade",
      "Climate-controlled warehouse storage (short or long term)",
      "Custom crating for fine art and antiques",
      "Packing materials at cost",
      "Inventory documentation with photos",
      "Insurance on declared value",
    ],
    whyUs: [
      "Same crew that knows your home — no strangers on moving day",
      "Climate-controlled storage at our Doral facility",
      "Discreet handling — no advertised brand on trucks for high-value moves",
      "Coordinated with your concierge or property manager",
    ],
    faq: [
      {
        q: "Do you store items long-term?",
        a: "Yes. Our Doral warehouse offers climate-controlled storage by the month. No minimum commitment beyond the first month.",
      },
      {
        q: "Are you insured for moves?",
        a: "Yes — general liability plus cargo coverage on declared value.",
      },
      {
        q: "Do you handle out-of-state moves?",
        a: "Local Miami-Dade and South Florida by default. We can coordinate longer routes through trusted partners.",
      },
    ],
  },

  "interior-stylist": {
    slug: "interior-stylist",
    metaTitle: "Interior Stylist Miami | On-Demand Home Styling",
    metaDescription:
      "On-demand interior styling in Miami — staging, seasonal refreshes, post-renovation finishing, and styling for short-term rental properties.",
    headline: "Interior Stylist Service",
    subheadline:
      "On-demand styling that turns a finished space into a designed one — without committing to a full interior design project.",
    sections: [
      {
        title: "When to bring in a stylist",
        body: "After a renovation when the rooms feel empty. Before a sale or rental to maximize perceived value. Twice a year for a seasonal refresh. After a move-in to make the home feel like yours quickly. Before guests arrive to a vacation property.",
      },
      {
        title: "What we do",
        body: "Walk-through assessment, layout adjustments using existing pieces, art and accessory placement, seasonal scent and texture refreshes, sourcing of small accent pieces (within budget you set), light styling for photography and listings.",
      },
    ],
    included: [
      "On-site styling visit (~3-4 hours)",
      "Photo documentation of before/after",
      "Sourcing list with prices for any new pieces",
      "Coordination with our team for any installs needed (lighting, art hanging, etc.)",
    ],
    whyUs: [
      "Stylist visits within days, not weeks",
      "Works with what you have — no forced redesign",
      "Same APLUS team handles any installation that comes from the styling",
      "Discreet — popular for short-term rental owners and snowbird homes",
    ],
    faq: [
      {
        q: "Is this a full interior design service?",
        a: "No — it's lighter and faster. Full interior design takes months and a 5-figure budget. Styling is on-demand: a stylist visits for a few hours, refreshes the space using what you have plus small accents, and leaves the home looking intentional.",
      },
      {
        q: "Do you source furniture?",
        a: "We source small accent pieces (lamps, art, textiles, vases) within whatever budget you set. For larger furniture purchases we recommend going through a full interior designer.",
      },
      {
        q: "Can you style for short-term rental photography?",
        a: "Yes — that's one of our most popular requests. Listings with proper styling rent at higher nightly rates and get more bookings.",
      },
    ],
  },

  "room-fragrance": {
    slug: "room-fragrance",
    metaTitle: "Room Fragrance Service Miami | Signature Scenting",
    metaDescription:
      "Hospitality-grade room fragrance for Miami residences — diffusers, refills, and signature scent design. The detail luxury hotels never skip.",
    headline: "Room Fragrance & Signature Scenting",
    subheadline:
      "The detail luxury hotels never skip. Diffusers, refills, and signature scent design — installed and maintained for your home.",
    sections: [
      {
        title: "Why scent matters in a luxury home",
        body: "Walk into any 5-star hotel and the first impression is always olfactory before visual. Faena, the Setai, Acqualina — every premium property invests in signature scent because it sets the emotional tone of the space. Most residences ignore this and lose the same advantage.",
      },
      {
        title: "What we offer",
        body: "Professional-grade nebulizing diffusers (the kind used in luxury hotels — not retail plug-ins), curated scent library, signature scent design if you want something custom-blended for your home, scheduled refills, seasonal scent rotation, and discreet placement integrated into your existing decor.",
      },
    ],
    included: [
      "Initial scent consultation",
      "Diffuser installation (one or multiple zones)",
      "Curated starter scent or custom blend",
      "Monthly refills delivered and installed",
      "Seasonal scent rotation if desired",
    ],
    whyUs: [
      "Hospitality-grade equipment, not consumer plug-ins",
      "Same standards as Faena, Fisher Island Club residences",
      "Scheduled service — never run out, never re-think it",
      "Integrated into our preventive maintenance plans (VIP includes refills)",
    ],
    faq: [
      {
        q: "What's the difference vs candles or plug-in diffusers?",
        a: "Professional nebulizing diffusers atomize fragrance oils without heat, dispersing scent more evenly through HVAC airflow. The result is a consistent, building-wide scent presence — the same technology used at Aman, Faena, and Four Seasons. Plug-ins are localized and obvious.",
      },
      {
        q: "Can you create a custom scent?",
        a: "Yes. We work with a Miami-based perfumer to develop signature blends for residences that want a one-of-a-kind scent. Most clients start with a curated scent from our library and customize over time.",
      },
      {
        q: "Is this included in any maintenance plan?",
        a: "VIP plans include refills and seasonal rotation as part of the property concierge service. Premium and Essential plans get a 15–30% discount on the standalone service.",
      },
    ],
  },
};
