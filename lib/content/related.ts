/**
 * Internal linking map.
 *
 * Why this file exists: the blog posts rank well (the EV cost guide sits around
 * position 6) while the service pages they support sit at position 33–67. The
 * two were never linked, so none of that authority flowed anywhere. This maps
 * each service and area page to the content that should reinforce it.
 *
 * Rules of thumb when editing:
 * - Only link where the connection is genuinely useful to a reader. Padding
 *   pages with unrelated links is worse than no links.
 * - Keep it to 2–3 targets per page so the signal stays concentrated.
 * - Every slug here must exist. `npm run build` will not catch a typo — the
 *   helpers below silently drop unknown slugs, so check the render.
 */

import type { ServiceSlug } from "@/lib/constants";
import { POSTS, type BlogPostMeta } from "@/lib/content/blog";
import { SERVICES } from "@/lib/constants";

/** Service page → blog posts that deepen that topic. */
export const POSTS_BY_SERVICE: Partial<Record<ServiceSlug, string[]>> = {
  "ev-charger-installation": [
    "ev-charger-installation-cost-miami-2026",
    "how-to-get-hoa-approval-ev-charger-miami",
  ],
  "preventive-maintenance": [
    "miami-beach-home-maintenance-checklist-2026",
    "property-care-miami-beach-guide",
  ],
  // Panel upgrades are the expensive half of most EV jobs — the cost guide
  // covers them in more depth than the electrical stub does.
  electrical: ["ev-charger-installation-cost-miami-2026"],
  hvac: ["miami-beach-home-maintenance-checklist-2026"],
  plumbing: ["miami-beach-home-maintenance-checklist-2026"],
  painting: ["property-care-miami-beach-guide"],
  landscaping: ["miami-beach-home-maintenance-checklist-2026"],
  "pest-control": ["miami-beach-home-maintenance-checklist-2026"],
};

/** Area page → the services that matter most in that neighborhood. */
export const SERVICES_BY_AREA: Record<string, ServiceSlug[]> = {
  "miami-beach": ["preventive-maintenance", "hvac", "painting", "pest-control"],
  "sunny-isles-beach": ["preventive-maintenance", "hvac", "plumbing", "landscaping"],
  "bal-harbour": ["preventive-maintenance", "interior-stylist", "landscaping", "painting"],
  surfside: ["preventive-maintenance", "plumbing", "electrical", "pest-control"],
  // Brickell is high-rise condo territory — EV installs in private garages are
  // the differentiated ask here.
  brickell: ["ev-charger-installation", "electrical", "preventive-maintenance", "hvac"],
  "coral-gables": ["preventive-maintenance", "painting", "landscaping", "electrical"],
};

/** Area page → blog posts with local relevance. */
export const POSTS_BY_AREA: Record<string, string[]> = {
  "miami-beach": [
    "property-care-miami-beach-guide",
    "miami-beach-home-maintenance-checklist-2026",
  ],
  "sunny-isles-beach": ["miami-beach-home-maintenance-checklist-2026"],
  "bal-harbour": ["property-care-miami-beach-guide"],
  surfside: ["miami-beach-home-maintenance-checklist-2026"],
  brickell: ["how-to-get-hoa-approval-ev-charger-miami", "ev-charger-installation-cost-miami-2026"],
  "coral-gables": ["property-care-miami-beach-guide"],
};

/** Resolve post slugs to full metadata, dropping any that no longer exist. */
export function resolvePosts(slugs: string[] | undefined): BlogPostMeta[] {
  if (!slugs?.length) return [];
  return slugs
    .map((slug) => POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPostMeta => Boolean(p));
}

/** Resolve service slugs to the entries in SERVICES, dropping unknown ones. */
export function resolveServices(slugs: ServiceSlug[] | undefined) {
  if (!slugs?.length) return [];
  return slugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));
}
