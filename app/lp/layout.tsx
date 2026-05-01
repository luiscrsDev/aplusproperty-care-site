/**
 * Override the root layout for `/lp` so the conversion-focused landing page
 * gets its own slim header & footer (defined inside `page.tsx`) instead of
 * the site-wide nav. Fewer escape hatches = higher conversion.
 *
 * Note: the GTM snippet, JSON-LD, and html/body wrappers still come from
 * `app/layout.tsx` — this layout only replaces the visible chrome.
 */

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
