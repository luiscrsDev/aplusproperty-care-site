import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Home, AlertTriangle } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { POSTS_BY_SLUG, readingMinutes } from "@/lib/content/blog";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const SLUG = "property-care-miami-beach-guide";
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

const WHAT_IT_INCLUDES = [
  {
    title: "Monthly inspections",
    body: "Every visit covers AC filter and condensate line, plumbing under sinks, exterior caulking and salt corrosion, GFCI outlets, smoke detectors, and a full photo report. Issues are flagged before they become emergencies.",
  },
  {
    title: "Preventive maintenance",
    body: "Quarterly AC coil cleaning, water heater flush, window seal inspection, irrigation system check, and annual tasks like roof inspection, exterior paint treatment, and electrical thermal scans.",
  },
  {
    title: "Hurricane prep",
    body: "Before each named storm: shutter inspection, generator service, tree trimming, drain clearing, and exterior furniture securing. Premium and VIP clients get a dedicated pre-storm visit — not just a reminder.",
  },
  {
    title: "Contractor coordination",
    body: "When something needs a licensed roofer, plumber, or electrician, a property care service manages the scheduling, supervises the work, and confirms quality — no calls, no back-and-forth for absentee owners.",
  },
  {
    title: "Emergency response",
    body: "A burst pipe or AC leak at 11 PM on a Friday needs to be handled in hours, not days. Higher-tier plans include 24/7 emergency coordination — critical for vacation homes and seasonal residents.",
  },
];

const SALT_AIR_DAMAGE = [
  { item: "Exterior caulking", inland: "5–7 years", miamiBeach: "12–18 months" },
  { item: "Metal railing fasteners", inland: "10–15 years", miamiBeach: "3–5 years" },
  { item: "Exterior paint on metal", inland: "3–5 years", miamiBeach: "12–18 months" },
  { item: "Window and door seals", inland: "5–8 years", miamiBeach: "18–24 months" },
  { item: "HVAC outdoor unit components", inland: "12–15 years", miamiBeach: "7–10 years" },
  { item: "Outdoor light fixtures", inland: "10+ years", miamiBeach: "2–4 years" },
];

const PLANS = [
  {
    name: "Essential",
    price: "$199/mo",
    cadence: "Monthly visit",
    best: "Primary residents or owners who are present",
    includes: [
      "Monthly inspection + photo report",
      "All monthly checklist tasks",
      "Email summary after every visit",
      "Contractor referral coordination",
    ],
  },
  {
    name: "Premium",
    price: "$399/mo",
    cadence: "Twice monthly",
    best: "Seasonal residents and vacation properties",
    includes: [
      "Two visits per month",
      "24/7 emergency response",
      "Minor repairs included (under $150)",
      "Hurricane prep visit before each named storm",
      "Priority contractor scheduling",
    ],
  },
  {
    name: "VIP",
    price: "$699/mo",
    cadence: "Weekly visits",
    best: "Absentee owners, investors, and luxury properties",
    includes: [
      "Weekly visits + dedicated property manager",
      "All repairs and landscaping included",
      "Concierge coordination (deliveries, vendors, access)",
      "Same-day emergency response",
      "Quarterly condition report for insurance/tax purposes",
    ],
  },
];

export default function PropertyCareMiamiBeachGuide() {
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
            <span className="text-white/80">Property Care Miami Beach Guide</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-semibold uppercase tracking-widest bg-white/10 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>June 16, 2026</span>
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
              Miami Beach is one of the most demanding environments for residential property in the United States. Salt air corrodes what inland humidity merely ages. The barrier island location means storm surge is a real threat, not a statistical footnote. And with some of the highest concentrations of vacation homes and absentee owners in Florida, professional property care is not a luxury — it is how these properties hold their value.
            </p>

            <aside aria-label="Quick Answer" className="my-8 rounded-xl border-2 border-brand-red/30 bg-brand-red/5 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">Quick Answer</p>
              <p className="font-bold text-brand-text text-lg leading-snug mb-2">
                Professional property care in Miami Beach costs $199–$699/month and covers inspections, preventive maintenance, hurricane prep, and contractor coordination.
              </p>
              <ul className="mt-3 space-y-1 text-base text-brand-text/80">
                <li>🌊 Salt air requires treatment 2–3x more often than inland Florida</li>
                <li>🏠 Absentee owners need monthly eyes on the property — minimum</li>
                <li>🌀 Hurricane prep must happen before June 1 each year</li>
                <li>💰 Unaddressed deferred maintenance costs $15,000–$50,000+ over 5 years</li>
              </ul>
            </aside>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">Why Miami Beach is different</h2>
            <p>
              Most national property maintenance guides are built around inland environments — and they underserve Miami Beach homeowners in three critical ways.
            </p>

            <div className="space-y-5 mt-6">
              {[
                {
                  icon: <AlertTriangle className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" aria-hidden />,
                  title: "The salt air accelerator",
                  body: "Ocean-side properties in Miami Beach experience metal corrosion, paint failure, and caulking breakdown at 2–3x the rate of inland homes. A standard 5-year exterior paint cycle becomes 12–18 months. Window seals that last a decade in Orlando fail in 2. This isn't deferred maintenance — it's the physics of a marine environment. Without a regular treatment schedule, the compounding repair bill over 5 years routinely exceeds $30,000 on a typical single-family home.",
                },
                {
                  icon: <Home className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" aria-hidden />,
                  title: "The absentee owner reality",
                  body: "Miami Beach has one of the highest concentrations of seasonal and investment properties in Florida. When a condensate drain overflows and nobody is home, the water damage doesn't stop at the unit — it travels to the floor below and triggers a $15,000–$40,000 insurance claim. For vacation properties and out-of-state investors, professional property care is the only way to catch these issues before they cascade.",
                },
                {
                  icon: <Shield className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" aria-hidden />,
                  title: "Hurricane season is a property maintenance event",
                  body: "June 1 marks the official start of hurricane season — but preparation needs to begin May 15. Shutter inspections, generator service, tree trimming, drain clearing, and property documentation all need to happen before a named storm is posted. After that, every contractor in South Florida is booked. Properties with a proactive care plan are ready before the season starts.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-brand-text">{item.title}</h3>
                    <p className="mt-1 text-brand-text/80">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">What salt air actually costs: a comparison</h2>
            <p>
              These are real replacement cycles we see on Miami Beach properties versus inland South Florida. The difference compounds fast.
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-brand-line">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="text-left px-4 py-3 font-semibold">Component</th>
                    <th className="text-left px-4 py-3 font-semibold">Inland FL lifespan</th>
                    <th className="text-left px-4 py-3 font-semibold text-brand-red">Miami Beach lifespan</th>
                  </tr>
                </thead>
                <tbody>
                  {SALT_AIR_DAMAGE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-brand-bg-cool"}>
                      <td className="px-4 py-3 font-medium text-brand-text">{row.item}</td>
                      <td className="px-4 py-3 text-brand-text/70">{row.inland}</td>
                      <td className="px-4 py-3 text-brand-red font-semibold">{row.miamiBeach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-brand-muted mt-2">
              Cycles observed on properties serviced by APLUS in Miami Beach, South Beach, and Mid-Beach.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">What professional property care includes</h2>
            <p>
              A true property care service is not just a handyman on a schedule. Here is what a comprehensive plan covers in a Miami Beach context:
            </p>

            <div className="space-y-5 mt-6">
              {WHAT_IT_INCLUDES.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-brand-text">{item.title}</h3>
                    <p className="mt-1 text-brand-text/80">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">Property care vs. property management: what's the difference?</h2>
            <p>
              These two services are often confused — especially by investors and absentee owners.
            </p>
            <p>
              <strong className="text-brand-text">Property management</strong> handles the tenant relationship: lease agreements, rent collection, tenant screening, and legal compliance. If your property is rented, your property manager handles the business side.
            </p>
            <p>
              <strong className="text-brand-text">Property care</strong> (also called property maintenance) handles the physical asset: inspections, preventive maintenance, repairs, contractor coordination, and hurricane prep. You need property care whether your home is rented, used as a vacation property, or is your primary residence.
            </p>
            <p>
              Many Miami Beach investors have both — a property manager for their tenant relationships and a property care service for the building itself. The property care service is often the one who catches issues before they become the tenant's complaint.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">How to choose a property care provider in Miami Beach</h2>
            <p>
              Not all maintenance services are built for Miami Beach's environment. Before hiring, ask:
            </p>
            <ul className="space-y-3 mt-4">
              {[
                "Do they have experience with salt-air corrosion and marine environments — or are they using inland schedules?",
                "Do they provide a written photo report after every visit (not just a call)?",
                "Do they have relationships with licensed roofers, plumbers, and electricians who work in Miami Beach specifically?",
                "What is their hurricane prep protocol — and is it included or billed separately?",
                "Do they offer 24/7 emergency response, or just business hours?",
                "Are they licensed and insured in Florida (required for any work beyond cleaning and visual inspection)?",
              ].map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" aria-hidden />
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6">
              APLUS Property Care has maintained Miami Beach properties — from South Beach condos to waterfront single-families — since 2013. Every visit includes a photo report, every plan includes hurricane prep, and our team knows the difference between a salt-air maintenance schedule and an inland one.{" "}
              <Link href="/areas/miami-beach" className="text-brand-red font-semibold hover:underline">
                See our Miami Beach property care page →
              </Link>
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">APLUS plans for Miami Beach</h2>

            <div className="mt-6 space-y-5">
              {PLANS.map((plan, i) => (
                <div key={i} className="rounded-2xl border border-brand-line bg-brand-bg-cool p-6">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-brand-text">{plan.name}</h3>
                      <p className="text-sm text-brand-muted mt-0.5">{plan.cadence} · Best for: {plan.best}</p>
                    </div>
                    <span className="text-2xl font-bold text-brand-red">{plan.price}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-brand-text/85">
                        <CheckCircle2 className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

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
          <h2 className="font-bold text-3xl md:text-4xl">Ready to protect your Miami Beach property?</h2>
          <p className="mt-4 text-white/80">
            APLUS has maintained Miami Beach homes and condos since 2013. Photo reports after every visit. Hurricane prep included. No calls, no scheduling — we handle it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} data-event="phone_click" className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-red/90 transition-colors">
              Call (305) 495-7980
            </a>
            <Link href="/areas/miami-beach" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              Miami Beach services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
