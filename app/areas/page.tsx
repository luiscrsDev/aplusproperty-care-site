import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

import { AREA_CONTENT } from "@/lib/content/areas";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Service Areas | Miami Beach, Sunny Isles, Bal Harbour & More",
  description:
    "APLUS Property Care services Miami Beach, Sunny Isles Beach, Bal Harbour, Surfside, Brickell, and Coral Gables. Premium home maintenance for Miami's most demanding properties.",
  alternates: { canonical: absoluteUrl("/areas") },
};

export default function AreasIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Service Areas", url: absoluteUrl("/areas") },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <section className="bg-brand-navy text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl"
        />
        <div className="container-narrow relative px-5 py-20 md:py-24 text-center">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Where we work in <span className="text-brand-red">Miami</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            APLUS focuses on Miami&apos;s premium residential corridors — the neighborhoods where
            properties deserve hospitality-grade care and the standards we built our reputation on.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREA_CONTENT.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group rounded-2xl bg-white border border-brand-line p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-5 font-bold text-xl text-brand-text">{a.name}</h2>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {a.subheadline}
                </p>
                {a.notableClients && a.notableClients.length > 0 && (
                  <div className="mt-3 text-xs text-brand-muted">
                    Trusted by{" "}
                    <span className="text-brand-text font-semibold">
                      {a.notableClients.join(", ")}
                    </span>
                  </div>
                )}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="font-bold text-3xl text-brand-text">
            Outside these areas? Ask us anyway.
          </h2>
          <p className="mt-4 text-brand-muted">
            We service all of Miami-Dade County for plan members. Tell us about your property and
            we&apos;ll see if we&apos;re a fit.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20 transition-all"
          >
            Request Free Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
