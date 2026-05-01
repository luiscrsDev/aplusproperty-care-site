/**
 * Landing-page layout.
 *
 * Loads Playfair Display (used in the warm v1 visual the partner approved
 * before we pivoted the main site to the Lovable look) and tags the body
 * with `lp-warm` so the cream background and warm utilities in globals.css
 * activate only on this route — the rest of the site keeps the Lovable look.
 */

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
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
