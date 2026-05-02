import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Zap,
  Droplets,
  Plug,
  Wind,
  Paintbrush,
  Trees,
  Truck,
  Bug,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { SERVICES } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Home Maintenance & Specialty Services in Miami",
  description:
    "Full-service home care in Miami: preventive maintenance, EV charger installation, plumbing, electrical, HVAC, painting, landscaping, and more. Licensed Miami-Dade team.",
  alternates: { canonical: absoluteUrl("/services") },
};

const ICONS: Record<string, LucideIcon> = {
  "ev-charger-installation": Zap,
  "preventive-maintenance": Wrench,
  plumbing: Droplets,
  electrical: Plug,
  hvac: Wind,
  painting: Paintbrush,
  landscaping: Trees,
  "furniture-transport": Truck,
  "pest-control": Bug,
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Services", url: absoluteUrl("/services") },
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
            <span className="text-white">Services</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Full-service home care in <span className="text-brand-red">Miami</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            One licensed team for everything from preventive maintenance to EV charger installs.
            Pick what you need, or bundle into a recurring plan.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.slug] || Wrench;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative rounded-2xl bg-white border border-brand-line p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  {s.flagship && (
                    <span className="absolute top-5 right-5 rounded-full bg-brand-red px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Flagship
                    </span>
                  )}
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-bold text-lg text-brand-text">{s.name}</h2>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PER-VISIT — entry point for non-subscribers */}
      <section className="section bg-white border-t border-brand-line">
        <div className="container-narrow max-w-4xl">
          <div className="rounded-2xl border-2 border-brand-line bg-brand-bg-cool p-7 md:p-10 grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
                Don&apos;t need a plan?
              </span>
              <h2 className="mt-2 font-bold text-2xl md:text-3xl text-brand-text">
                Pay per visit instead.
              </h2>
              <p className="mt-3 text-brand-muted leading-relaxed">
                Transparent labor pricing, materials at cost, no subscription required. From $95
                for a diagnostic to $850 for full-day projects.
              </p>
            </div>
            <Link
              href="/services/per-visit"
              className="rounded-full border-2 border-brand-navy text-brand-navy px-6 py-3 text-base font-semibold hover:bg-brand-navy hover:text-white transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              See Per-Visit Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — bundle into plan */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="font-bold text-3xl text-brand-text">
            Better than calling for each repair?
          </h2>
          <p className="mt-4 text-brand-muted">
            Bundle the services you use most into a recurring plan and save 15–30% versus paying
            per call.
          </p>
          <Link
            href="/maintenance-plans"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20 transition-all"
          >
            See Subscription Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
