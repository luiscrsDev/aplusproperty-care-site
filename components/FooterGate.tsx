"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

/**
 * Hides the site-wide Footer on the conversion-focused landing — both when the
 * path is `/lp` and when the visible host is the dedicated `v2.` subdomain
 * (the middleware rewrites that to `/lp` but `usePathname()` still reports `/`).
 */
export function FooterGate() {
  const pathname = usePathname();
  const [host, setHost] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") setHost(window.location.hostname);
  }, []);

  if (pathname?.startsWith("/lp")) return null;
  if (host && host.startsWith("v2.")) return null;
  return <Footer />;
}
