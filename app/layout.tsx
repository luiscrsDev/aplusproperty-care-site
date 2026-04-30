import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import { BRAND, TRACKING } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Indexability gate: defaults to indexable. Set the env var
 * `NEXT_PUBLIC_INDEXABLE=false` on the Vercel preview deployments to keep them
 * out of Google's index. Flip back to true (or unset) for production.
 */
const indexable = process.env.NEXT_PUBLIC_INDEXABLE !== "false";

const siteUrl = absoluteUrl("");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND.name} | Home Maintenance & EV Charger Miami`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name, url: siteUrl }],
  keywords: [
    "home maintenance Miami",
    "EV charger installation Miami",
    "preventive maintenance plan",
    "Miami handyman",
    "luxury home concierge Miami",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} | Home Maintenance & EV Charger Miami`,
    description: BRAND.description,
    /**
     * Next will auto-pick up `app/opengraph-image.tsx` (dynamic 1200×630 OG image)
     * and serve it at `/opengraph-image`. We also fall back to a static path so
     * existing canonical URLs in schema markup keep resolving.
     */
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | Home Maintenance & EV Charger Miami`,
    description: BRAND.description,
  },
  robots: indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false, noimageindex: true },
      },
};

export const viewport: Viewport = {
  themeColor: "#040e3f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GTM — head snippet */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${TRACKING.gtmId}');`,
          }}
        />
        {/* JSON-LD: LocalBusiness on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GTM — noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${TRACKING.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
