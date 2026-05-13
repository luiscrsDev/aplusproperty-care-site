/**
 * Landing page — `/lp/ev` (also served at v2.aplusproperty.care/ev via middleware).
 *
 * Visual: same warm v1 treatment as `/lp` (cream + Playfair + navy/red gradient
 * hero with red blur halos), distinct from the main site's Lovable layout.
 *
 * Goal: single conversion action — book a free EV charger site assessment.
 * No site-wide nav, no service browsing, no escape hatches.
 *
 * Promo angle (no $$ discount — we don't have margin on EV installs):
 *  1. Free $150 site assessment
 *  2. Same-week install availability
 *  3. Florida-licensed electricians + permits handled (billed at cost)
 *
 * Note on the federal tax credit: we DO NOT promise or pre-qualify the credit
 * on the LP. Customers are pointed to their CPA — we just install. Avoids
 * cross-jurisdiction tax claims and audit risk on our end.
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
  Zap,
  FileCheck,
  Wrench,
  Calendar,
} from "lucide-react";

import { CONTACT, STATS, TEAM } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { ClientsGrid } from "@/components/Clients";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Level 2 EV Charger Installation Miami — Same-Week Install",
  description:
    "Licensed Level 2 EV charger installation in Miami. Tesla, ChargePoint, Wallbox. Permits handled (at cost), fixed labor quote, same-week install. Free site assessment.",
  alternates: { canonical: absoluteUrl("/lp/ev") },
  openGraph: {
    title: "Level 2 EV Charger Installation Miami — Same-Week Install",
    description:
      "Licensed Level 2 EV charger install. Tesla, ChargePoint, Wallbox. Permits handled at cost. Fixed labor quote. Free assessment.",
    url: absoluteUrl("/lp/ev"),
  },
  /** Don't compete with the main site's /services/ev-charger-installation for organic. */
  robots: { index: false, follow: true },
};

/**
 * Force static generation at build time so Vercel serves from Edge cache with
 * zero cold-start latency. No per-request data — pricing, scenarios, and copy
 * are all static.
 */
export const dynamic = "force-static";
export const revalidate = false;

const PAIN_POINTS = [
  "Three contractors gave you three different prices",
  "Nobody mentioned the Miami-Dade permit (until inspection failed)",
  "Your panel can't handle 240V and you found out after they started",
  "Tesla referral installer vanished mid-job",
];

const APLUS_PROMISE = [
  "Fixed labor quote up front — no surprise change orders",
  "Florida-licensed electricians (not handymen)",
  "We pull the Miami-Dade permit in your name — billed at cost, no markup",
  "Same-week install when your panel's ready",
];

const BRANDS = [
  { name: "Tesla Wall Connector", note: "Gen 3 · Wi-Fi · 48A" },
  { name: "ChargePoint Home Flex", note: "16-50A · Smart" },
  { name: "Wallbox Pulsar Plus", note: "40A · Compact · Smart" },
  { name: "Enphase IQ EV Charger", note: "Solar-paired · 48A" },
  { name: "Grizzl-E Smart", note: "40A · Built rugged" },
];

const PRICING_SCENARIOS = [
  {
    title: "Simple install",
    subtitle: "Garage close to panel · 200A panel ready",
    price: "$650–$900",
    bullets: [
      "Charger mount + 240V/40A circuit",
      "Permit pulled & inspection coordinated",
      "1-year workmanship warranty",
    ],
    badge: null,
  },
  {
    title: "Standard install",
    subtitle: "Driveway/exterior · weatherproof · longer wire run",
    price: "$1,000–$1,500",
    bullets: [
      "Outdoor-rated wire + conduit run",
      "Weatherproof outlet & enclosure",
      "Permit pulled & inspection coordinated",
      "1-year workmanship warranty",
    ],
    badge: "Most common",
  },
  {
    title: "Install + panel upgrade",
    subtitle: "Older home · 100/125A panel needs upgrade to 200A",
    price: "$3,500–$6,500",
    bullets: [
      "Panel upgrade to 200A (HVHZ-compliant)",
      "Coordinated FPL meter swap",
      "Full charger install on top",
      "Permit pulled & inspection coordinated",
    ],
    badge: null,
  },
];

const PROCESS_STEPS = [
  {
    icon: FileCheck,
    title: "Free site assessment",
    body: "30-min visit. We check your panel, measure the run, confirm permitting, and give you a fixed quote. Worth $150 — free for you.",
  },
  {
    icon: Tag,
    title: "Fixed quote in writing",
    body: "Labor + materials locked in writing. Permit and Miami-Dade fees ($100–$250) billed at cost — no markup. No hidden trip fees, no mid-job upsells.",
  },
  {
    icon: Wrench,
    title: "Same-week install",
    body: "Most jobs done in a single day. Larger panel upgrades take 1–2 days. We work clean and weatherproof.",
  },
  {
    icon: Calendar,
    title: "Inspection sign-off",
    body: "We coordinate Miami-Dade inspection and stay on-site through final approval. You receive permit closeout docs.",
  },
];

const WHY_VS_OTHERS = [
  {
    feature: "Florida-licensed electrician on every install",
    them: "Often subcontracted, license unclear",
    us: "Always — license # provided up front",
  },
  {
    feature: "Permit pulled in your name",
    them: "Frequently skipped to lower price",
    us: "Always — billed at cost, no markup",
  },
  {
    feature: "Fixed-price labor quote",
    them: '"Time and materials" — surprise charges',
    us: "Written in advance — only permit/fees pass through",
  },
  {
    feature: "Panel upgrade if needed",
    them: "Subcontracted to a 3rd party",
    us: "Same crew handles panel + charger",
  },
  {
    feature: "Inspection coordination",
    them: "You schedule, you wait",
    us: "We schedule, we stay on-site",
  },
  {
    feature: "Storm-ready (HVHZ-compliant)",
    them: "Often not addressed",
    us: "Standard for every Miami install",
  },
  {
    feature: "1-year workmanship warranty",
    them: "Verbal at best",
    us: "Written, transferable",
  },
];

const FAQ = [
  {
    q: "How much does EV charger installation cost in Miami?",
    a: "A simple Level 2 install (garage near panel) typically runs $650–$900 in labor + materials. A standard outdoor install is $1,000–$1,500. If your panel needs upgrading to 200A (common in homes built before 1995), add $2,500–$5,000. Permit and Miami-Dade fees run an additional $100–$250 and are billed at cost (no markup) on top of the labor quote. We give you a fixed written quote after the free site visit so you know the full number before we start.",
  },
  {
    q: "Are permits and inspection fees included in the price?",
    a: "No — we bill the Miami-Dade permit and inspection fees separately at cost (typically $100–$250 total), with no markup. The labor quote is fixed in writing; only the government fee passes through to you. This keeps the labor price honest and avoids the common contractor trick of marking up permits to pad margin.",
  },
  {
    q: "Do I need a permit for a Level 2 EV charger?",
    a: "Yes — Miami-Dade requires an electrical permit for any new 240V circuit, which is what a Level 2 charger needs. We pull the permit in your name and stay through inspection sign-off (fee billed at cost). Skipping the permit risks insurance denial if anything goes wrong, and resale issues. Level 1 chargers (the regular 120V outlet trickle charge) do not require a permit.",
  },
  {
    q: "How fast can you install?",
    a: "Most jobs are completed in a single day. From signed quote to install, we typically schedule within 5–7 business days. Permits are pulled same-day or next-day in Miami-Dade. If your panel needs upgrading, add 1–2 days for the FPL coordination.",
  },
  {
    q: "Do you install on apartments or condos?",
    a: "Single-family and townhouses, yes. Multi-unit buildings are case-by-case — we need HOA/board approval and access to a dedicated meter. We're happy to help you draft the proposal to your HOA.",
  },
  {
    q: "Will you install a charger I already bought?",
    a: "Yes. Bring your own charger from any major brand (Tesla, ChargePoint, Wallbox, Enphase, Grizzl-E, Emporia, etc.) and we'll install it. If you haven't bought one yet, we can recommend and source it without dealer markup.",
  },
];

export default function EvLandingPage() {
  return (
    <div className="min-h-screen text-[#1a1a1a]" style={{ background: "var(--color-warm-cream)" }}>
      {/* Promo bar */}
      <div className="bg-[#c8102e] text-white text-center text-sm py-2.5 px-4 font-semibold">
        <Tag className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
        Free site assessment ($150 value) · Same-week install · Florida-licensed electricians
      </div>

      {/* Slim warm header — logo + phone, no nav */}
      <header
        className="border-b border-[var(--color-warm-line)]"
        style={{ background: "var(--color-warm-cream)" }}
      >
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
              For Tesla, ChargePoint &amp; Wallbox owners in Miami
            </div>

            <h1 className="font-display mt-5 text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Level 2 EV charging at home,{" "}
              <span className="italic text-[#ef3b54]">permits and all.</span>
            </h1>

            <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
              Florida-licensed electricians install your Tesla, ChargePoint, Wallbox, Enphase or
              Grizzl-E charger end-to-end. Fixed labor quote up front. Permits pulled in your name
              and billed at cost. Same-week install when your panel&apos;s ready.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-full bg-[#c8102e] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#9b0e22] shadow-lg shadow-[#c8102e]/30 transition-all inline-flex items-center gap-2"
              >
                Get a Free Site Assessment <ArrowRight className="h-4 w-4" />
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
            <p className="mt-2 text-sm text-white/85">
              Faena · Fisher Island Club · Portobello America · Broken Shaker
            </p>
          </div>

          {/* Glass form */}
          <div id="start" className="scroll-mt-24">
            <div
              aria-hidden
              className="absolute -mt-6 -ml-6 h-20 w-20 rounded-2xl bg-[#c8102e]/20 blur-2xl"
            />
            <div className="relative glass-card rounded-3xl p-7 md:p-8 text-white shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 text-[#ef3b54] text-xs uppercase tracking-wider font-semibold">
                <Zap className="h-3.5 w-3.5" /> Free site assessment ($150 value)
              </div>
              <h2 className="font-display mt-2 text-2xl font-bold">Book your assessment</h2>
              <p className="mt-1.5 text-sm text-white/75">
                Tell us about your home and EV — we&apos;ll call within 1 business day to schedule
                the free 30-min site visit.
              </p>
              <div className="mt-6">
                <ContactForm compact defaultService="EV Charger Installation" />
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
              Why most Miami EV installs go sideways
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              The install you got <span className="text-[#c8102e]">vs</span> the one you wanted
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

      {/* BRANDS */}
      <section className="section lp-soft-gradient">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Brand-agnostic. Already bought one? We install it.
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              Every charger that <span className="text-[#c8102e]">matters in Miami.</span>
            </h2>
            <p className="mt-8 text-[#5b5b5b]">
              We&apos;ll recommend based on your vehicle, charging speed, smart-home setup, and
              budget — never based on what we make a margin on.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {BRANDS.map((b) => (
              <div
                key={b.name}
                className="rounded-2xl border border-[var(--color-warm-line)] bg-white p-5 text-center shadow-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e] text-white mx-auto shadow-md shadow-[#c8102e]/20">
                  <Zap className="h-5 w-5" aria-hidden />
                </div>
                <div className="font-display mt-4 text-base text-[#163a6e]">{b.name}</div>
                <div className="mt-1 text-xs text-[#5b5b5b]">{b.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SCENARIOS */}
      <section className="section">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Transparent pricing — no surprises
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              What it actually costs in <span className="text-[#c8102e]">Miami.</span>
            </h2>
            <p className="mt-8 text-[#5b5b5b]">
              Ranges cover labor and code-compliant materials. Miami-Dade permit and inspection
              fees ($100–$250) are billed separately at cost — no markup. Fixed quote in writing
              after the free site visit.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3 items-stretch">
            {PRICING_SCENARIOS.map((s) => (
              <article
                key={s.title}
                className={`relative flex flex-col rounded-2xl p-7 transition-all ${
                  s.badge
                    ? "lp-plan-premium text-white shadow-2xl shadow-[#c8102e]/25 md:scale-[1.03] border border-[#c8102e]/40"
                    : "border border-[var(--color-warm-line)] bg-white shadow-sm"
                }`}
              >
                {s.badge && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#c8102e] px-3 py-1 text-[11px] font-semibold tracking-wider text-white shadow-md shadow-[#c8102e]/40 uppercase">
                    {s.badge}
                  </span>
                )}

                <h3
                  className={`font-display text-2xl ${s.badge ? "text-white" : "text-[#163a6e]"}`}
                >
                  {s.title}
                </h3>
                <p className={`mt-1 text-sm ${s.badge ? "text-white/75" : "text-[#5b5b5b]"}`}>
                  {s.subtitle}
                </p>

                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-display text-3xl md:text-4xl font-bold ${s.badge ? "text-white" : "text-[#c8102e]"}`}
                    >
                      {s.price}
                    </span>
                    <span className={`text-sm ${s.badge ? "text-white/70" : "text-[#5b5b5b]"}`}>
                      labor + materials
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {s.bullets.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${s.badge ? "text-white" : "text-[#c8102e]"}`}
                      />
                      <span className={s.badge ? "text-white/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#start"
                  className={`mt-7 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-all ${
                    s.badge
                      ? "bg-white text-[#c8102e] hover:bg-[#fef2f2]"
                      : "bg-[#c8102e] text-white hover:bg-[#9b0e22] shadow-md shadow-[#c8102e]/20"
                  }`}
                >
                  Get a Quote
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-[#5b5b5b]">
            Final price confirmed in writing after the free 30-min site visit. Permit + Miami-Dade
            fees ($100–$250) pass through at cost. No mid-job upsells.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section lp-soft-gradient border-y border-[var(--color-warm-line)]">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Four steps. One crew. No surprises.
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              From booking to <span className="text-[#c8102e]">final inspection.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl bg-white border border-[var(--color-warm-line)] p-6 shadow-sm"
              >
                <span className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#163a6e] text-white text-xs font-bold shadow-md">
                  {i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/20">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display mt-4 text-lg text-[#163a6e]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#5b5b5b] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY APLUS vs OTHERS */}
      <section className="section lp-soft-gradient border-y border-[var(--color-warm-line)]">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Not all EV installers are equal
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              We&apos;re not your dealer&apos;s <span className="text-[#c8102e]">cheapest sub.</span>
            </h2>
            <p className="mt-8 text-[#5b5b5b] leading-relaxed">
              Most "EV installers" listed on dealer apps are subcontracted handymen on margin. We
              do this every week, with our own licensed electricians.
            </p>
          </div>

          <div className="mt-14 rounded-2xl bg-white border border-[var(--color-warm-line)] shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-warm-cream-deep)" }}>
                  <th className="text-left py-4 px-5 font-semibold text-[#5b5b5b] text-xs uppercase tracking-wider">
                    What you actually get
                  </th>
                  <th className="text-center py-4 px-5 font-bold text-[#5b5b5b] text-xs uppercase tracking-wider">
                    Dealer-recommended sub
                  </th>
                  <th className="text-center py-4 px-5 font-bold text-[#c8102e] bg-[#c8102e]/5 text-xs uppercase tracking-wider">
                    APLUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {WHY_VS_OTHERS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf6ee]"}>
                    <td className="py-3.5 px-5 text-[#163a6e] font-medium">{row.feature}</td>
                    <td className="text-center py-3.5 px-5 text-[#5b5b5b]">{row.them}</td>
                    <td className="text-center py-3.5 px-5 bg-[#c8102e]/5 text-[#163a6e] font-medium">
                      {row.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                body: "Florida-licensed electricians. General liability + workers' comp.",
              },
              {
                icon: Clock,
                title: "12+ years",
                body: "Working Miami homes since 2014. We know HVHZ inside-out.",
              },
              {
                icon: Award,
                title: "Hospitality-grade",
                body: "Same standards we deliver to Faena, Fisher Island, Broken Shaker.",
              },
              {
                icon: Heart,
                title: "Fixed quote",
                body: "Written before we start. No mid-job phone calls about budget.",
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

      {/* SOCIAL PROOF */}
      <section className="section">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
              Real team. Real reputation.
            </span>
            <h2 className="font-display mt-2 text-3xl md:text-5xl text-[#163a6e] lp-underline">
              Built by Miami homeowners, <span className="text-[#c8102e]">for Miami homes.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-5 items-stretch">
            {/* Anderson card */}
            {TEAM.map((t) => {
              const initials = t.name
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2);
              return (
                <div
                  key={t.slug}
                  className="md:col-span-2 flex flex-col rounded-2xl border border-[var(--color-warm-line)] bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center gap-5">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/20 flex-shrink-0">
                      <span className="font-display font-bold text-2xl">{initials}</span>
                    </div>
                    <div>
                      <div className="font-display text-2xl text-[#163a6e]">{t.name}</div>
                      <div className="mt-0.5 text-xs uppercase tracking-wider text-[#c8102e] font-semibold">
                        {t.role}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm text-[#5b5b5b] leading-relaxed flex-1">{t.bio}</p>
                  <div className="mt-5 pt-4 border-t border-[var(--color-warm-line)] text-[11px] uppercase tracking-wider text-[#5b5b5b]">
                    Licensed · Insured · Florida
                  </div>
                </div>
              );
            })}

            {/* Trusted by */}
            <div className="md:col-span-3 flex flex-col rounded-2xl border border-[var(--color-warm-line)] bg-white p-7 shadow-sm">
              <div className="text-center">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c8102e] font-semibold">
                  Trusted by
                </span>
                <h3 className="font-display mt-2 text-xl text-[#163a6e]">
                  Some of Miami&apos;s most demanding clients
                </h3>
                <p className="mt-2 text-sm text-[#5b5b5b]">
                  From luxury hospitality to nationwide automotive groups.
                </p>
              </div>
              <div className="mt-6 flex-1 flex items-center">
                <div className="w-full">
                  <ClientsGrid columns={4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section lp-soft-gradient border-t border-[var(--color-warm-line)]">
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
            Your charger. <span className="italic text-[#ef3b54]">Done right.</span>
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Free site assessment ($150 value). Fixed labor quote in writing. Permits pulled at cost.
            Same-week install.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#start"
              className="rounded-full bg-[#c8102e] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#9b0e22] shadow-lg shadow-[#c8102e]/30"
            >
              Book Free Assessment
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
          Free Assessment
        </a>
      </div>
    </div>
  );
}
