import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Calendar, AlertTriangle } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { POSTS_BY_SLUG, readingMinutes } from "@/lib/content/blog";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const SLUG = "miami-beach-home-maintenance-checklist-2026";
const post = POSTS_BY_SLUG[SLUG];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${SLUG}`) },
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    url: absoluteUrl(`/blog/${SLUG}`),
  },
};

const MONTHLY_TASKS = [
  "Check AC filter and clean condensate drain line",
  "Inspect under sinks and around toilets for slow leaks",
  "Test GFCI outlets in bathrooms, kitchen, and outdoor areas",
  "Walk exterior for new caulking failures, rust stains, or salt corrosion on metal",
  "Check smoke and CO detector batteries",
  "Clear drains in showers, sinks, and A/C condensate pan",
  "Inspect sliding door tracks and lubricate with silicone (salt air seizes them fast)",
];

const QUARTERLY_TASKS = [
  "Deep-clean AC coils and condensate pan",
  "Inspect roof flashing and all sealants around penetrations",
  "Check window and door seals for salt-air degradation",
  "Flush water heater sediment (Miami's hard water accelerates buildup)",
  "Inspect outdoor electrical outlets and light fixtures for corrosion",
  "Clean dryer vent from exterior (fire risk increases with salt-air lint)",
  "Check irrigation system for clogged heads and salt buildup on spray nozzles",
];

const HURRICANE_TASKS = [
  "Test hurricane shutters or verify impact windows are in good condition",
  "Service portable or whole-home generator — fuel, oil, battery",
  "Clear gutters and downspouts of debris",
  "Trim trees and palms that overhang the roof or pool",
  "Secure or store outdoor furniture, planters, and decorations",
  "Document home interior with photos or video for insurance",
  "Check that garage door hurricane bracing is functional",
  "Confirm sump pump or flood barriers are ready (ground-floor units)",
];

const ANNUAL_TASKS = [
  "Full roof inspection by a licensed roofer",
  "Paint or reseal exterior wood and metal surfaces (salt eats paint in 12–18 months)",
  "Professional AC service: coils, refrigerant check, electrical connections",
  "Whole-home plumbing pressure test and drain-line camera inspection (older buildings)",
  "Electrical panel thermal scan for hot spots and loose connections",
  "Pest control perimeter treatment — Miami's humidity makes this annual, not optional",
  "Pool resurfacing check (salt pools and sun degrade surfaces faster in South Florida)",
  "Re-caulk all bathroom fixtures, tub surrounds, and shower pans",
];

export default function MiamiBeachChecklistPost() {
  const url = absoluteUrl(`/blog/${SLUG}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      name: post.author,
      logo: { "@type": "ImageObject", url: absoluteUrl("/aplus-logo.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faq || [])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Blog", url: absoluteUrl("/blog") },
              { name: post.shortTitle || post.title, url },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <section className="bg-brand-navy text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="container-narrow relative px-5 py-16 md:py-20">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
            {" / "}
            <span className="text-white/80">Miami Beach Maintenance Checklist</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-semibold uppercase tracking-widest bg-white/10 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>June 1, 2026</span>
            <span>·</span>
            <span>{readingMinutes(post.wordCount)} min read</span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="section bg-white">
        <div className="container-narrow max-w-3xl">
          <div className="prose-content space-y-6 text-brand-text/85 leading-relaxed text-lg">

            <p className="text-xl leading-relaxed">
              Miami Beach homes and condos age differently than properties anywhere else in Florida. Salt air corrodes metal fixtures in months, not years. Year-round humidity grows mold behind walls before you smell it. Hurricane season arrives June 1, and the prep window is shorter than most owners think. This checklist is built from 12+ years of maintaining Miami Beach properties — from South Beach condos to Star Island single-families.
            </p>

            <aside aria-label="Quick Answer" className="my-8 rounded-xl border-2 border-brand-red/30 bg-brand-red/5 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">Quick Answer</p>
              <p className="font-bold text-brand-text text-lg leading-snug mb-2">
                Miami Beach homes need monthly professional inspections minimum — not quarterly like inland Florida.
              </p>
              <ul className="mt-3 space-y-1 text-base text-brand-text/80">
                <li>🌊 Salt air degrades caulk, metal, and paint 2-3x faster than inland</li>
                <li>💧 AC condensate lines need monthly clearing (flood risk below)</li>
                <li>🌀 Hurricane prep should start May 15 — before June 1 season</li>
                <li>⚡ Annual electrical panel thermal scan catches issues before fires</li>
              </ul>
            </aside>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">Why Miami Beach is different</h2>
            <p>
              A standard home maintenance schedule designed for the national average fails Miami Beach properties in three ways:
            </p>
            <div className="space-y-4 mt-4">
              {[
                {
                  title: "Salt air accelerates everything",
                  body: "Ocean-side properties see metal hinges, railing fasteners, and window frames corrode 2–3x faster than inland Miami. Exterior caulking that lasts 5 years in Orlando lasts 18–24 months on Miami Beach. Paint on metal surfaces needs annual treatment, not every 3–5 years.",
                },
                {
                  title: "AC is a critical system, not routine maintenance",
                  body: "Miami Beach condos run their AC virtually year-round. A clogged condensate drain line does not just break the unit — it overflows and damages the unit below. We see this cause $15,000–$40,000 in water damage claims every year. Monthly condensate line clearing is not optional.",
                },
                {
                  title: "Hurricane season requires advance preparation",
                  body: "June 1 is hurricane season. But shutter inspections, generator service, and tree trimming need to happen by May 15. After a named storm is posted, it is too late for most of these. Miami Beach's barrier island location means storm surge, not just wind, is the threat — drainage and seal integrity matter more here than anywhere else.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <AlertTriangle className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-brand-text">{item.title}</h3>
                    <p className="mt-1 text-brand-text/80">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              <Calendar className="inline h-7 w-7 text-brand-red mr-2 -mt-1" aria-hidden />
              Monthly checklist
            </h2>
            <p className="text-sm text-brand-muted">Every month, year-round</p>
            <ul className="space-y-2.5 mt-4">
              {MONTHLY_TASKS.map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Quarterly checklist
            </h2>
            <p className="text-sm text-brand-muted">Every 3 months (Mar, Jun, Sep, Dec)</p>
            <ul className="space-y-2.5 mt-4">
              {QUARTERLY_TASKS.map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Hurricane season prep (by May 15)
            </h2>
            <p className="text-sm text-brand-muted">Before June 1 — every year</p>
            <ul className="space-y-2.5 mt-4">
              {HURRICANE_TASKS.map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Annual checklist
            </h2>
            <p className="text-sm text-brand-muted">Once per year — ideally October–November (post-hurricane season, pre-snowbird season)</p>
            <ul className="space-y-2.5 mt-4">
              {ANNUAL_TASKS.map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">What a subscription plan covers</h2>
            <p>
              APLUS Property Care handles this entire checklist across three plans — no scheduling, no contractor management, no photo documentation on your end:
            </p>
            <ul className="space-y-2.5 mt-4">
              {[
                { plan: "Essential ($199/mo):", detail: "Monthly inspection and photo report. All monthly checklist tasks." },
                { plan: "Premium ($399/mo):", detail: "Twice monthly visits, 24/7 emergency support, small repairs included, hurricane prep visit before each named storm." },
                { plan: "VIP ($699/mo):", detail: "Weekly visits, dedicated property manager, all repairs and landscaping included, concierge coordination for absentee owners." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span><strong className="text-brand-text">{item.plan}</strong> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-3xl text-brand-text text-center">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {(post.faq || []).map((item, i) => (
              <details key={i} className="group rounded-2xl border border-brand-line bg-white p-6 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-brand-text">
                  <span>{item.q}</span>
                  <span className="ml-4 text-brand-red text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-brand-text/85 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-navy text-white">
        <div className="container-narrow text-center max-w-2xl">
          <h2 className="font-bold text-3xl md:text-4xl">Let us handle the checklist</h2>
          <p className="mt-4 text-white/80">
            APLUS covers every item on this list — monthly, quarterly, hurricane prep, and annual. One plan, one team, photo reports after every visit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} data-event="phone_click" className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-red/90 transition-colors">
              Call (305) 495-7980
            </a>
            <Link href="/maintenance-plans" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              See plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
