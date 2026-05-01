"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

/**
 * Hides the site-wide Footer on the conversion-focused landing page (`/lp`),
 * which ships its own slim footer.
 */
export function FooterGate() {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp")) return null;
  return <Footer />;
}
