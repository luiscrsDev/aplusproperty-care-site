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

import { ADDRESS, BRAND, CONTACT, HOURS, PRICE_RANGE, SERVICE_AREA } from "./constants";
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
      "EV charger installation",
      "Preventive home maintenance",
      "Plumbing",
      "Electrical",
      "HVAC",
      "Painting and finishes",
      "Landscaping and gardening",
      "Furniture and art transport",
      "Pest control",
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
