/**
 * Landing-page layout.
 *
 * Loads Playfair Display (used in the warm v1 visual the partner approved
 * before we pivoted the main site to the Lovable look) and tags the body
 * with `lp-warm` so the cream background and warm utilities in globals.css
 * activate only on this route — the rest of the site keeps the Lovable look.
 */

import { Playfair_Display } from "next/font/google";

/**
 * Only the weights/styles actually applied in `app/lp/page.tsx` and
 * `app/lp/ev/page.tsx`: 400 normal (default headlines), 400 italic
 * (accent spans), and 700 (font-bold headlines + plan prices). Cutting
 * 600/800/700-italic saves ~5 font files (≈80–120KB on first paint) and
 * unblocks LCP. `preload` is true by default in next/font/google, so
 * `<link rel="preload">` is emitted automatically.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: true,
});

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} lp-warm min-h-screen`}>
      {/* Override the global font-display variable with the loaded Playfair. */}
      <style>{`:root { --font-display: var(--font-playfair); }`}</style>
      {children}
    </div>
  );
}
