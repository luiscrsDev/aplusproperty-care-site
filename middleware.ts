import { NextRequest, NextResponse } from "next/server";

/**
 * Subdomain routing.
 *
 * `v2.aplusproperty.care` is our paid-ads landing page domain. Any visit to its
 * root serves the conversion-focused `/lp` page transparently (the browser URL
 * stays clean, e.g. `https://v2.aplusproperty.care`). Any other path on v2 is
 * 308-redirected to the main domain so we don't fragment SEO or confuse users.
 *
 * The main domain (`aplusproperty.care` and `www.`) is left untouched.
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  if (host.startsWith("v2.")) {
    const url = req.nextUrl.clone();

    // Root or /lp on v2 → serve landing transparently.
    if (url.pathname === "/" || url.pathname === "/lp") {
      url.pathname = "/lp";
      return NextResponse.rewrite(url);
    }

    // Anything else on v2 → bounce to the canonical domain.
    const canonical = new URL(
      url.pathname + url.search,
      "https://aplusproperty.care",
    );
    return NextResponse.redirect(canonical, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip API, Next internals, and static files (sitemap, robots, og image, etc).
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|opengraph-image|.*\\..*).*)",
  ],
};
