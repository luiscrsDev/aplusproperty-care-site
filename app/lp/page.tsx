/**
 * Landing page — `/lp` (also served at v2.aplusproperty.care/ via middleware).
 *
 * Visual: the warm v1 treatment (cream + Playfair + navy/red gradient hero with
 * red blur halos) — distinct from the main site's Lovable layout, so paid ads
 * landing here feel like a dedicated promo destination.
 *
 * Goal: single conversion action (start a plan), 20% off first 3 months, cancel
 * anytime. No site-wide nav, no service browsing, no escape hatches.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Award,
  Heart,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  Tag,
  Sparkles,
} from "lucide-react";

import { CONTACT, PLANS, STATS } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Start Your Home Maintenance Plan — 20% Off First 3 Months",
  description:
    "Stop calling a new contractor every emergency. Start with one trusted Miami team. Plans from $199/mo, 20% off first 3 months. Cancel anytime.",
  alternates: { canonical: absoluteUrl("/lp") },
  openGraph: {
    title: "Start Your APLUS Plan — 20% Off First 3 Months",
    description:
      "Stop calling a new contractor every emergency. One Miami team for everything. Plans from $199/mo. Cancel anytime.",
    url: absoluteUrl("/lp"),
  },
  /** Don't compete with the main site for the same keywords — landing is for paid traffic. */
  robots: { index: false, follow: true },
};

const PROMO_DISCOUNT = 0.2;
const PROMO_PLANS = PLANS.map((p) => ({
  ...p,
  promoPrice: Math.round(p.price * (1 - PROMO_DISCOUNT)),
}));

const PAIN_POINTS = [
  "Calling a different contractor every time something breaks",
  "Wondering if the price is fair (it usually isn't)",
  "Lost weekends solving problems you didn't cause",
  "$5,000 emergencies that were $150 last month",
];

const APLUS_PROMISE = [
  "One team, your home, year over year",
  "Photo report after every visit — you see what we did",
  "Fixed monthly price — no surprise invoices",
  "Cancel anytime — no contract, no fee",
];

const SOCIAL_PROOF = [
  "Faena",
  "Fisher Island Club",
  "Portobello America",
  "Broken Shaker",
  "Morgan Automotive",
];

const FAQ = [
  {
    q: "Is there really no contract?",
    a: "Correct. All plans are month-to-month. Cancel any time with no fee. We earn the next month every month.",
  },
  {
    q: "How does the 20% off work?",
    a: "Apply this offer to any plan and your first 3 months come at 20% off the standard rate. After month 3, the plan continues at standard pricing — and you can cancel any time.",
  },
  {
    q: "What if I need to upgrade or downgrade?",
    a: "Switch plans any month. We pro-rate the difference. No fee.",
  },
  {
    q: "Do you serve my area?",
    a: "We service all of Miami-Dade County, with deep local knowledge in Miami Beach, Sunny Isles, Bal Harbour, Surfside, Brickell, and Coral Gables.",
  },
  {
    q: "What happens during the free assessment?",
    a: "A senior technician (often Anderson, our CEO) visits your home for ~30 minutes, walks through with you, identifies the highest-priority items, and recommends the right plan. No commitment, no pressure.",
  },
  {
    q: "Can I just pay per visit instead of subscribing?",
    a: "Yes — we do one-off jobs too. But math is on the side of the plan: avoiding a single emergency repair usually pays for 6+ months of preventive care.",
  },
];

const COMPARISON_ROWS: Array<{
  feature: string;
  essential: string | boolean;
  premium: string | boolean;
  vip: string | boolean;
}> = [
  { feature: "Visits per month", essential: "1", premium: "2", vip: "Weekly" },
  { feature: "Photo report", essential: "Standard", premium: "Detailed", vip: "Executive" },
  { feature: "Emergency calls included", essential: "1", premium: "3", vip: "Unlimited" },
  { feature: "Support", essential: "Business hours", premium: "24/7", vip: "24/7 dedicated" },
  { feature: "Small repairs included", essential: false, premium: true, vip: true },
  { feature: "All routine repairs included", essential: false, premium: false, vip: true },
  { feature: "Hurricane prep", essential: false, premium: true, vip: true },
  { feature: "Landscaping", essential: false, premium: false, vip: true },
  { feature: "Property concierge", essential: false, premium: false, vip: true },
  { feature: "Cancel anytime", essential: true, premium: true, vip: true },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen text-[#1a1a1a]" style={{ background: "var(--color-warm-cream)" }}>
      {/* Promo bar */}
      <div className="bg-[#c8102e] text-white text-center text-sm py-2.5 px-4 font-semibold">
        <Tag className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
        20% OFF first 3 months · Cancel anytime · Limited spots in May
      </div>

      {/* Slim warm header — logo + phone, no nav */}
      <header className="border-b border-[var(--color-warm-line)]" style={{ background: "var(--color-warm-cream)" }}>
        <div className="container-narrow flex items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aplus-logo.png" alt="APLUS Property Care" className="h-12 w-auto" />
          </Link>
          <a
            href={`tel:${CONTACT.phone}`}
            data-event="phone_click"
            className="inline-flex items-center gap-2 rounded-full bg-[#c8102e] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9b0e22] shadow-md shadow-[#c8102e]/25 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </header>

      {/* HERO — warm v1 gradient + halos */}
      <section className="lp-hero-gradient relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#c8102e] via-[#9b0e22] to-transparent"
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#c8102e]/20 blur-3xl"
        />

        <div className="container-narrow relative px-5 pt-20 pb-24 md:pt-24 md:pb-28 grid gap-12 md:grid-cols-[1.1fr_1fr] items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85 backdrop-blur">
              <Sparkles className="h-3 w-3 text-[#ef3b54]" aria-hidden />
              For Miami homeowners who are tired
            </div>

            <h1 className="font-display mt-5 text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Stop calling a new contractor{" "}
              <span className="italic text-[#ef3b54]">every emergency.</span>
            </h1>

            <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
              Start with one trusted Miami team that already knows your home. Preventive care,
              repairs, EV chargers — all on a flat monthly plan. From $199/mo. Cancel anytime.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-full bg-[#c8102e] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#9b0e22] shadow-lg shadow-[#c8102e]/30 transition-all inline-flex items-center gap-2"
              >
                Start Your Plan — 20% Off <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-[#163a6e] transition-all inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/55">Trusted by</p>
            <p className="mt-2 text-sm text-white/85">{SOCIAL_PROOF.join(" · ")}</p>
          </div>

          {/* Glass form */}
          <div id="start" className="scroll-mt-24">
            <div
              aria-hidden
              className="absolute -mt-6 -ml-6 h-20 w-20 rounded-2xl bg-[#c8102e]/20 blur-2xl"
            />
            <div className="relative glass-card rounded-3xl p-7 md:p-8 text-white shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 text-[#ef3b54] text-xs uppercase tracking-wider font-semibold">
                <Tag className="h-3.5 w-3.5" /> 20% off first 3 months
              </div>
              <h2 className="font-display mt-2 text-2xl font-bold">Start your plan today</h2>
              <p className="mt-1.5 text-sm text-white/75">
                Tell us about your home — we&apos;ll call within 1 business day to confirm and
                start the plan.
              </p>
              <div className="mt-6">
                <ContactForm compact defaultService="Premium plan ($399/mo)" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent" />
      </section>

      {/* PAIN vs PROMISE */}
      <section className="section">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Why APLUS exists
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              The maintenance you have <span className="text-[#c8102e]">vs</span> the one you want
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#c8102e]/15 bg-[#fef2f2] p-7">
              <div className="flex items-center gap-2 text-[#c8102e] font-semibold text-sm uppercase tracking-wider">
                <XCircle className="h-4 w-4" /> Without APLUS
              </div>
              <ul className="mt-5 space-y-4">
                {PAIN_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-[#c8102e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1a1a1a]/85">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#163a6e] text-white p-7 shadow-xl shadow-[#163a6e]/20">
              <div className="flex items-center gap-2 text-[#ef3b54] font-semibold text-sm uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" /> With APLUS
              </div>
              <ul className="mt-5 space-y-4">
                {APLUS_PROMISE.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#ef3b54] flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — promo prices vs standard */}
      <section className="section lp-soft-gradient">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Limited-time pricing
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              Pick a plan. <span className="text-[#c8102e]">Save 20%</span> for 3 months.
            </h2>
            <p className="mt-8 text-[#5b5b5b]">
              No contract. No setup fee. Cancel any month. Standard pricing kicks in on month 4.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3 items-stretch">
            {PROMO_PLANS.map((plan) => (
              <article
                key={plan.slug}
                className={`relative flex flex-col rounded-2xl p-7 transition-all ${
                  plan.highlight
                    ? "lp-plan-premium text-white shadow-2xl shadow-[#c8102e]/25 md:scale-[1.03] border border-[#c8102e]/40"
                    : "border border-[var(--color-warm-line)] bg-white shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#c8102e] px-3 py-1 text-[11px] font-semibold tracking-wider text-white shadow-md shadow-[#c8102e]/40 uppercase">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`font-display text-2xl ${plan.highlight ? "text-white" : "text-[#163a6e]"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${plan.highlight ? "text-white/75" : "text-[#5b5b5b]"}`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-5">
                  <div
                    className={`text-sm line-through ${plan.highlight ? "text-white/60" : "text-[#5b5b5b]"}`}
                  >
                    {plan.priceDisplay}
                    {plan.period}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span
                      className={`font-display text-5xl font-bold ${plan.highlight ? "text-white" : "text-[#c8102e]"}`}
                    >
                      ${plan.promoPrice}
                    </span>
                    <span
                      className={`text-sm ${plan.highlight ? "text-white/70" : "text-[#5b5b5b]"}`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-xs uppercase tracking-wider font-semibold ${
                      plan.highlight ? "text-[#ef3b54]" : "text-[#c8102e]"
                    }`}
                  >
                    First 3 months
                  </p>
                </div>

                <p
                  className={`mt-4 text-sm font-medium ${plan.highlight ? "text-white" : "text-[#163a6e]"}`}
                >
                  {plan.visits}
                </p>

                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-white" : "text-[#c8102e]"}`}
                      />
                      <span className={plan.highlight ? "text-white/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#start"
                  className={`mt-7 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-white text-[#c8102e] hover:bg-[#fef2f2]"
                      : "bg-[#c8102e] text-white hover:bg-[#9b0e22] shadow-md shadow-[#c8102e]/20"
                  }`}
                >
                  Start {plan.name}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-[#5b5b5b]">
            Standard pricing applies from month 4 onwards. Cancel anytime — no fee.
          </p>
        </div>
      </section>

      {/* TRUST GRID */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            {[
              {
                icon: ShieldCheck,
                title: "Licensed & insured",
                body: "Florida-licensed contractors. General liability coverage.",
              },
              {
                icon: Clock,
                title: "12+ years",
                body: "Working Miami homes since 2014. We know what fails first here.",
              },
              {
                icon: Award,
                title: "Hospitality-grade",
                body: "Same standards we deliver to Faena, Fisher Island, Broken Shaker.",
              },
              {
                icon: Heart,
                title: "Cancel anytime",
                body: "No long-term contract, no cancellation fee. Earn it every month.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/20">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-display mt-4 text-lg text-[#163a6e]">{title}</h3>
                <p className="mt-2 text-sm text-[#5b5b5b] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section lp-soft-gradient border-y border-[var(--color-warm-line)]">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-[#163a6e] lp-underline">
              Compare side by side
            </h2>
            <p className="mt-8 text-[#5b5b5b]">Pick the plan that fits. Upgrade any month.</p>
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-[var(--color-warm-line)] shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-warm-cream-deep)" }}>
                  <th className="text-left py-4 px-5 font-semibold text-[#5b5b5b] text-xs uppercase tracking-wider">
                    Feature
                  </th>
                  {PROMO_PLANS.map((plan) => (
                    <th
                      key={plan.slug}
                      className={`text-center py-4 px-5 font-bold ${
                        plan.highlight ? "bg-[#c8102e]/5 text-[#c8102e]" : "text-[#163a6e]"
                      }`}
                    >
                      <div className="font-display">{plan.name}</div>
                      <div className="text-xs font-medium text-[#5b5b5b] mt-0.5">
                        <span className="line-through">${plan.price}</span>{" "}
                        <span className="text-[#c8102e] font-bold">${plan.promoPrice}</span>
                        {plan.period}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf6ee]"}>
                    <td className="py-3.5 px-5 text-[#163a6e] font-medium">{row.feature}</td>
                    {(["essential", "premium", "vip"] as const).map((col) => {
                      const v = row[col];
                      const highlight = col === "premium";
                      return (
                        <td
                          key={col}
                          className={`text-center py-3.5 px-5 ${highlight ? "bg-[#c8102e]/5" : ""}`}
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <CheckCircle2 className="inline h-5 w-5 text-[#c8102e]" />
                            ) : (
                              <XCircle className="inline h-4 w-4 text-[#5b5b5b]/40" />
                            )
                          ) : (
                            <span className="font-medium">{v}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-center text-[#163a6e] lp-underline">
            Common <span className="text-[#c8102e]">questions</span>
          </h2>
          <div className="mt-14 space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[var(--color-warm-line)] bg-white p-6 shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-[#163a6e]">
                  <span>{item.q}</span>
                  <span className="ml-4 text-[#c8102e] text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#1a1a1a]/85 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section lp-hero-gradient text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#c8102e]/20 blur-3xl"
        />
        <div className="container-narrow max-w-3xl text-center relative">
          <h2 className="font-display text-3xl md:text-5xl">
            Your home. <span className="italic text-[#ef3b54]">One trusted team.</span>
          </h2>
          <p className="mt-5 text-lg text-white/85">
            20% off first 3 months. No contract. Cancel anytime. Limited spots.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#start"
              className="rounded-full bg-[#c8102e] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#9b0e22] shadow-lg shadow-[#c8102e]/30"
            >
              Start Your Plan
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              data-event="phone_click"
              className="rounded-full border-2 border-white/80 px-7 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-[#163a6e]"
            >
              <Phone className="inline h-4 w-4 mr-2" /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Slim warm footer */}
      <footer
        className="text-[#5b5b5b]/80 text-center py-6 text-xs border-t border-[var(--color-warm-line)]"
        style={{ background: "var(--color-warm-cream)" }}
      >
        © {new Date().getFullYear()} APLUS Property Care LLC · Licensed &amp; insured · Miami-Dade
        County
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[var(--color-warm-line)] p-3 flex gap-2 shadow-lg">
        <a
          href={`tel:${CONTACT.phone}`}
          data-event="phone_click"
          className="flex-1 rounded-full border-2 border-[#163a6e] text-[#163a6e] px-4 py-2.5 text-sm font-semibold text-center"
        >
          <Phone className="inline h-3.5 w-3.5 mr-1.5" /> Call
        </a>
        <a
          href="#start"
          className="flex-1 rounded-full bg-[#c8102e] text-white px-4 py-2.5 text-sm font-semibold text-center shadow-md shadow-[#c8102e]/25"
        >
          Start Plan — 20% off
        </a>
      </div>
    </div>
  );
}
