/**
 * UTM + landing-page attribution capture.
 *
 * Why: leads need to be traceable back to the ad campaign / keyword that
 * brought them in. Without this, Google Ads conversion attribution is opaque
 * (we only see aggregated numbers in Ads dashboards, never per-lead).
 *
 * Flow:
 *   1. Visitor lands on any page with query params (utm_*, gclid, etc.)
 *   2. `captureAttribution()` runs once on mount, snapshots the relevant
 *      params + landing URL + referrer, stores them in sessionStorage.
 *   3. They survive client-side navigation within the same session.
 *   4. When the visitor submits ContactForm later, `readAttribution()` is
 *      called to attach the stored attribution to the payload.
 *   5. Backend includes those fields in the lead email so we know exactly
 *      which campaign delivered the lead.
 *
 * sessionStorage chosen (not localStorage):
 *   - cleared on tab close → fresher attribution per visit
 *   - GDPR-friendlier (no long-lived tracker)
 *   - leads still tagged correctly within a normal browsing session
 *
 * If a visitor lands on /lp/ev with utm_campaign=ev-charger, navigates to /,
 * then submits the form on /, the email will still carry utm_campaign=ev-charger
 * because the attribution was stashed on the first page.
 */

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string; // Google Ads click ID — most authoritative campaign signal
  landing_page?: string; // first path the visitor hit this session
  referrer?: string; // document.referrer at landing (truncated)
};

const KEY = "aplus.attribution";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

/**
 * Call once on initial mount of any client-side page. Idempotent — if a prior
 * attribution exists in this session AND the current URL doesn't carry new
 * tracking params, the existing snapshot is preserved (first touch wins for
 * the session).
 *
 * If the current URL DOES carry new tracking params (e.g. visitor clicked a
 * second ad in the same session), the snapshot is refreshed — last paid touch
 * wins, matching how Google Ads attributes conversions.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const incoming: Attribution = {};
  for (const param of TRACKED_PARAMS) {
    const v = url.searchParams.get(param);
    if (v) incoming[param] = v.slice(0, 200);
  }

  const hasIncomingTracking = Object.keys(incoming).length > 0;
  const existing = readAttribution();

  // If we already captured something this session and this page has no new
  // tracking params, keep the first-touch snapshot.
  if (existing && !hasIncomingTracking) return;

  // Capture (or refresh) — always include landing page + referrer.
  const snapshot: Attribution = {
    ...(existing ?? {}),
    ...incoming,
    landing_page: window.location.pathname + window.location.search,
    referrer: (document.referrer || "").slice(0, 300) || undefined,
  };

  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(snapshot));
  } catch {
    // Storage quota / disabled / private window — fail silent. Attribution
    // is a "nice to have" never blocks the user.
  }
}

/**
 * Read the stored attribution snapshot for inclusion in a form submission.
 * Returns undefined if nothing was captured this session (direct visit,
 * storage disabled, etc.).
 */
export function readAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as Attribution;
    return parsed && typeof parsed === "object" ? parsed : undefined;
  } catch {
    return undefined;
  }
}
