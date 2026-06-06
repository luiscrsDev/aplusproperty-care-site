/**
 * JSON-LD schema builders. Keep all structured data in one place so the
 * NAP info comes from `constants.ts` and never drifts.
 *
 * Schema types we emit:
 *   - LocalBusiness (root layout — every page)
 *   - Service (per /services/[slug] page)
 *   - FAQPage (when a page has a FAQ section)
 *   - BreadcrumbList (per non-home page)
 *   - Offer / AggregateOffer (subscription plans)
 */

import { ADDRESS, BRAND, CONTACT, HOURS, PRICE_RANGE, SERVICE_AREA, SOCIAL } from "./constants";
import { absoluteUrl } from "./utils";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BRAND.url}/#business`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: BRAND.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    description: BRAND.description,
    priceRange: PRICE_RANGE,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/aplus-logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    areaServed: SERVICE_AREA.cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    knowsAbout: [
      "EV charger installation Miami-Dade",
      "Level 2 EV charger installation Miami",
      "Tesla Wall Connector installation Miami",
      "EV charger installation",
      "Preventive home maintenance",
      "Miami home maintenance plan",
      "Home maintenance subscription Miami",
      "Preventive maintenance Miami Beach",
      "Property maintenance Miami-Dade",
      "Plumbing",
      "Electrical",
      "HVAC",
      "Painting and finishes",
      "Landscaping and gardening",
      "Furniture and art transport",
      "Pest control",
      "Hurricane home preparation Miami",
      "Emergency home repair Miami",
      "Condo maintenance Miami Beach",
      "Licensed general contractor Miami",
    ],
    founder: {
      "@type": "Person",
      "@id": `${BRAND.url}/#anderson-moraes`,
      name: "Anderson Moraes",
      jobTitle: "CEO & General Contractor",
      description:
        "General Contractor with 12+ years of residential and commercial construction and maintenance experience in Miami-Dade, FL.",
      url: `${BRAND.url}/about`,
      worksFor: { "@id": `${BRAND.url}/#business` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "5",
      reviewCount: "5",
    },
    sameAs: [
      SOCIAL.instagram,
      SOCIAL.facebook,
    ],
    openingHoursSpecification: HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  offerPrice?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${BRAND.url}/#business` },
    areaServed: { "@type": "City", name: SERVICE_AREA.primary },
    serviceType: opts.serviceType || opts.name,
    ...(opts.offerPrice
      ? {
          offers: {
            "@type": "Offer",
            price: opts.offerPrice,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

/**
 * Per-area LocalBusiness Service schema. Tells Google: "this business serves
 * THIS specific city as a Service", with the page itself as the canonical
 * landing for that area. Combined with the FAQ + Breadcrumb already emitted
 * by the area page, this gives strong local-pack ranking signals.
 *
 * Per-area pages also reference the root LocalBusiness via @id so all the
 * NAP info stays consistent without duplication.
 */
export function areaServiceSchema(opts: {
  areaName: string;
  url: string;
  description: string;
  zips?: string[];
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Home Maintenance & Property Care in ${opts.areaName}`,
    description: opts.description,
    url: opts.url,
    dateModified: opts.dateModified ?? "2026-05-31",
    provider: { "@id": `${BRAND.url}/#business` },
    areaServed: {
      "@type": "City",
      name: opts.areaName,
      ...(opts.zips && opts.zips.length > 0
        ? { containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County" } }
        : {}),
    },
    serviceType: "Home Maintenance",
    audience: { "@type": "Audience", audienceType: "Property owners" },
  };
}

export function breadcrumbSchema(crumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}
