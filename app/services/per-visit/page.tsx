import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  AlertTriangle,
  Hammer,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Per-Visit Home Service Miami — No Subscription",
  description:
    "Pay-per-visit home repair and maintenance in Miami. Transparent pricing, licensed contractors, no subscription. Or save 15–30% with a monthly plan.",
  alternates: { canonical: absoluteUrl("/services/per-visit") },
  openGraph: {
    title: "Per-Visit Home Service Miami — No Subscription",
    description:
      "Pay-per-visit home repair and maintenance in Miami. Transparent pricing, licensed contractors, no subscription required.",
    url: absoluteUrl("/services/per-visit"),
  },
};

const PRICING = [
  {
    label: "Diagnostic-only visit",
    duration: "30 min",
    price: 95,
    note: "Up to 30 min on-site. Ideal when you need a professional eye on a problem before deciding what to do.",
    icon: AlertTriangle,
  },
  {
    label: "Standard service visit",
    duration: "Up to 1 hour",
    price: 175,
    note: "Most small repairs and one-off jobs. Faucet replacement, light fixture, drain unclog, outlet swap.",
    icon: Wrench,
  },
  {
    label: "Half-day visit",
    duration: "Up to 4 hours",
    price: 450,
    note: "Multiple small jobs in one visit, or a single medium job (caulking refresh, multiple outlets, drywall patch).",
    icon: Hammer,
  },
  {
    label: "Full-day visit",
    duration: "Up to 8 hours",
    price: 850,
    note: "Larger projects — interior repaint of a room, fixture replacements across the house, panel work.",
    icon: ShieldCheck,
  },
];

const FAQ = [
  {
    q: "Are materials included in the visit price?",
    a: "Visit price covers labor only. Materials (parts, paint, hardware) are billed at our cost — no markup. We bring small consumables (caulk, screws, basic adhesives) at no extra charge.",
  },
  {
    q: "How is per-visit different from a maintenance plan?",
    a: "Per-visit is reactive — you call when something breaks. Plans are preventive — we visit on a schedule and catch issues early. Plan members also get 15–30% off labor on any extra work, which usually means the plan pays for itself within 4–6 months.",
  },
  {
    q: "Do you charge a trip fee?",
    a: "No. Visit prices include travel within Miami-Dade. There's no separate trip charge.",
  },
  {
    q: "Can I get a quote before you come out?",
    a: "For most jobs we give a verbal quote on the phone or via text once you describe the work. For anything complex we recommend the diagnostic visit — it's $95 and credited toward the work if you book the repair on the same trip.",
  },
  {
    q: "What if the job runs over the time slot?",
    a: "We tell you before going over. If you approve, we extend at the same hourly rate. No surprise invoices.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Florida-licensed contractors with general liability coverage. We pull permits when required (electrical panel, plumbing rough-in, anything inspected).",
  },
];

export default function PerVisitPage() {
  const url = absoluteUrl("/services/per-visit");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Per-Visit Home Service",
              description:
                "Pay-per-visit home repair and maintenance in Miami. Transparent labor pricing, materials at cost, licensed contractors.",
              url,
              serviceType: "Home repair and maintenance — pay per visit",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Services", url: absoluteUrl("/services") },
              { name: "Per-Visit Service", url },
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
        <div className="container-narrow relative px-5 py-20 md:py-24">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Per-Visit Service</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-bold text-3xl md:text-5xl leading-tight">
              Per-visit home service. <span className="text-brand-red">No subscription.</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sometimes you don&apos;t need a plan — you just need someone reliable to fix the
              thing. Transparent labor pricing, materials at cost, licensed Florida contractors.
              Most jobs done same-week.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand-red px-6 py-3 text-base font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 transition-all"
              >
                Request a Visit
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="rounded-full border-2 border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-brand-navy transition-all inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" /> Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN PER-VISIT MAKES SENSE */}
      <section className="section bg-white">
        <div className="container-narrow max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-bold text-2xl text-brand-text">When per-visit makes sense</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "One-off repair you can describe in a sentence",
                  "Diagnostic before deciding what work to do",
                  "Project too small to justify a monthly plan",
                  "You want to test our quality before committing",
                  "You manage maintenance yourself but need pro help occasionally",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl text-brand-text">When a plan makes more sense</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "You want preventive care that catches small issues early",
                  "You travel and need eyes on the property regularly",
                  "You want one phone number for everything home-related",
                  "You'd rather pay a predictable monthly fee than emergency rates",
                  "You'd save more than $150/month on what you'd otherwise call us for",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text/85">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/maintenance-plans"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
              >
                See plans (15–30% off labor) <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-brand-bg-cool">
        <div className="container-narrow max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Transparent <span className="text-brand-red">labor pricing</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              No trip fees. No surprise charges. Materials always at cost — no markup.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PRICING.map(({ icon: Icon, label, duration, price, note }) => (
              <article
                key={label}
                className="rounded-2xl bg-white border border-brand-line p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white flex-shrink-0 shadow-md shadow-brand-red/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-bold text-lg text-brand-text">{label}</h3>
                      <div>
                        <span className="font-bold text-2xl text-brand-red">${price}</span>
                      </div>
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-brand-muted">
                      {duration}
                    </div>
                    <p className="mt-3 text-sm text-brand-text/85 leading-relaxed">{note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-brand-muted italic">
            Plan members save 15–30% on all per-visit work. Diagnostic visit is credited toward
            the repair if booked the same day.
          </p>
        </div>
      </section>

      {/* WHY US (slim) */}
      <section className="section bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-2xl text-brand-text text-center">Why APLUS for one-off work</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              "Florida-licensed, insured, background-checked",
              "Materials at cost — never marked up",
              "No trip fees within Miami-Dade",
              "Photo report after the work, even on one-off jobs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-brand-text/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN UPSELL */}
      <section className="section bg-brand-bg-cool border-y border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-2xl bg-brand-navy text-white p-8 md:p-10 text-center">
            <h2 className="font-bold text-2xl md:text-3xl">
              Calling us 2+ times a year? <span className="text-brand-red">A plan saves money.</span>
            </h2>
            <p className="mt-4 text-white/85">
              Essential at $199/month includes a monthly visit, photo report, WhatsApp support, and
              15% off any extra work. If you call us even occasionally for repairs, the math
              usually beats per-visit within a few months.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/maintenance-plans"
                className="rounded-full bg-brand-red px-6 py-3 text-base font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 inline-flex items-center gap-2"
              >
                See Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://v2.aplusproperty.care"
                className="rounded-full border-2 border-white/80 px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-brand-navy"
              >
                Try Premium — 50% off month 1
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-3xl md:text-4xl text-brand-text text-center">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-brand-line bg-white p-6 shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-brand-text">
                  <span>{item.q}</span>
                  <span className="ml-4 text-brand-red text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-brand-text/85 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Need someone to <span className="text-brand-red">fix the thing?</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              Tell us what&apos;s going on. We&apos;ll quote and schedule — usually within one
              business day.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <ContactForm defaultService="One-off repair" />
          </div>
        </div>
      </section>
    </>
  );
}
