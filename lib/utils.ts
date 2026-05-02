import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { BRAND } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns an absolute URL for a given path on the canonical site.
 *
 * Hardcoded to BRAND.url ON PURPOSE. We previously read this from
 * NEXT_PUBLIC_SITE_URL, but that env var ended up pointing to v2.aplusproperty.care
 * (the paid landing subdomain) in production — which silently broke every
 * canonical/OG/breadcrumb/sitemap URL across the site for ~3 days.
 *
 * The /lp route lives at v2.aplusproperty.care via middleware rewrite, but
 * its canonical should still resolve back to the canonical domain for SEO.
 *
 * If you ever need to override this for a preview deployment, change BRAND.url
 * in lib/constants.ts — do NOT reintroduce the env var indirection.
 */
export function absoluteUrl(path = "") {
  const base = BRAND.url;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
