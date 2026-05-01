import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { POSTS_BY_SLUG, readingMinutes } from "@/lib/content/blog";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const SLUG = "ev-charger-installation-cost-miami-2026";
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

export default function EVChargerCostMiamiPost() {
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
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl"
        />
        <div className="container-narrow relative px-5 py-16 md:py-20">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">EV Charger Cost Miami 2026</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-red/20 border border-brand-red/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white font-semibold backdrop-blur">
              EV Charger · Miami
            </span>
            <h1 className="mt-5 font-bold text-3xl md:text-5xl leading-tight">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {readingMinutes(post.wordCount)} min read
              </span>
              <span>· By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="section bg-white">
        <div className="container-narrow max-w-3xl">
          <div className="prose-content space-y-6 text-brand-text/85 leading-relaxed text-lg">
            <p className="text-xl leading-relaxed">
              If you&apos;re shopping for a Level 2 EV charger in Miami in 2026, the price
              you&apos;ll actually pay depends on three things: the charger itself, the labor to
              install it, and whether your electrical panel needs an upgrade. Here&apos;s the real
              math from a licensed Miami-Dade contractor.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">TL;DR — the numbers</h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-brand-text">Best case (no panel upgrade):</strong>{" "}
                  $800–$1,500 total ($400 charger + $400–$1,200 labor).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-brand-text">Typical Miami home:</strong> $1,200–$2,000
                  total — most installs land here.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-brand-text">Older home with panel upgrade:</strong>{" "}
                  $4,000–$6,500 total. Not fun, but it&apos;s a one-time hit that pays off across
                  every electrical project for the next 20 years.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-brand-text">Federal tax credit:</strong> 30% back, up to
                  $1,000. Cuts the typical install cost by ~$400–$600.
                </span>
              </li>
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              The charger itself: $400–$700
            </h2>
            <p>
              Level 2 home chargers in 2026 are commodities. The four most common options Miami
              homeowners install:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-brand-text">Tesla Wall Connector (Gen 3)</strong> — $475.
                Cleanest if you only own a Tesla.
              </li>
              <li>
                <strong className="text-brand-text">ChargePoint Home Flex</strong> — $700. Adjustable
                amperage (16A–50A), best app on the market, works with any J1772 EV.
              </li>
              <li>
                <strong className="text-brand-text">Wallbox Pulsar Plus</strong> — $650. Smallest
                footprint, premium feel.
              </li>
              <li>
                <strong className="text-brand-text">Grizzl-E Smart</strong> — $400. Bare-bones but
                solid; good if you don&apos;t need an app.
              </li>
            </ul>
            <p>
              For a non-Tesla family, we usually recommend the ChargePoint Home Flex — the
              future-proofing is worth the extra $200.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Labor: $400–$1,200
            </h2>
            <p>
              Labor is what swings most. The four factors that move it:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong className="text-brand-text">Distance from panel to install location.</strong>{" "}
                A garage 10 feet from the panel is a fast job. A garage 60 feet away with conduit
                across an exterior wall is a half-day job.
              </li>
              <li>
                <strong className="text-brand-text">Indoor vs outdoor.</strong> Outdoor installs in
                Miami need NEMA-rated weatherproof enclosures (HVHZ-compliant if you&apos;re in a
                storm zone). Adds material cost and time.
              </li>
              <li>
                <strong className="text-brand-text">Drywall and finish.</strong> Cleanly hiding the
                conduit through finished walls takes longer than running it surface-mounted in a
                garage.
              </li>
              <li>
                <strong className="text-brand-text">Permit and inspection coordination.</strong> Not
                a labor cost per se, but it adds 5–10 business days to the project timeline.
              </li>
            </ol>

            {/* CTA inline */}
            <div className="rounded-2xl bg-brand-bg-cool border border-brand-line p-6 my-10">
              <h3 className="font-bold text-lg">Want a fixed quote on your install?</h3>
              <p className="mt-2 text-brand-muted">
                We do free site visits across Miami-Dade. You get a quote with all materials and
                labor in writing — no surprises.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/services/ev-charger-installation#contact"
                  className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20"
                >
                  Request Free Assessment
                </Link>
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-event="phone_click"
                  className="rounded-full border-2 border-brand-navy text-brand-navy px-5 py-2.5 text-sm font-semibold hover:bg-brand-navy hover:text-white"
                >
                  Call {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Permits in Miami-Dade: required, but routine
            </h2>
            <p>
              Miami-Dade requires an electrical permit for every Level 2 install. The permit fee is
              modest ($75–$150 typical), and a licensed contractor pulls it in your name. The
              inspection itself is fast — an inspector visits, confirms code compliance, signs off,
              and you&apos;re done.
            </p>
            <p>
              <strong className="text-brand-text">Do not skip this step.</strong> Unpermitted
              electrical work in Florida is a problem when you sell the house, when there&apos;s
              an insurance claim, and when something fails. We&apos;ve seen homeowners pay 2× the
              install price years later to retroactively legalize a cheap unpermitted job.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Panel upgrades: $2,500–$5,000 (when needed)
            </h2>
            <p>
              A Level 2 charger pulls 32–50 amps continuously. Modern Miami homes (built post-2000)
              usually have a 200A panel with headroom. Older homes — especially Mid-Beach
              mid-century properties — often have 100A or 125A panels that are already at capacity
              before adding an EV charger.
            </p>
            <p>
              We do a load calculation as part of every site visit. If your panel can handle the
              charger, we tell you so — we don&apos;t force an upgrade you don&apos;t need.
              If you do need one, expect $2,500–$5,000 depending on whether your home is in a
              High-Velocity Hurricane Zone (HVHZ) and what type of meter base you have.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Federal tax credit: 30%, up to $1,000
            </h2>
            <p>
              The Alternative Fuel Vehicle Refueling Property Credit covers 30% of installation
              costs (charger + labor combined) up to $1,000, for installs completed by{" "}
              <strong>June 30, 2026</strong>. We provide the itemized invoice and IRS Form 8911
              documentation you need.
            </p>
            <p>
              For a typical $1,500 install, that&apos;s $450 back — bringing your effective cost to
              ~$1,050.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              FPL EVolution Home — an alternative
            </h2>
            <p>
              Florida Power &amp; Light runs a residential EV charger program where they install a
              Level 2 charger for a flat $31–$38/month with no upfront cost. Math: over 5 years,
              that&apos;s $1,860–$2,280 — usually more than buying outright if your install is on
              the cheaper end, but a great option if you can&apos;t outlay the lump sum or expect
              to move within 3–4 years.
            </p>
            <p>We can compare both paths during the free site visit.</p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Quick checklist before booking any install
            </h2>
            <ul className="space-y-2.5">
              {[
                "Is the contractor Florida-licensed? (ask for license number)",
                "Are they pulling the Miami-Dade permit in your name?",
                "Did they do a load calculation, not just guess at panel capacity?",
                "Is the quote itemized (charger + labor + materials + permit)?",
                "Is there a written workmanship warranty?",
                "Are they HVHZ-compliant for outdoor installs?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-brand-muted text-sm italic">
              APLUS Property Care is a Miami-Dade licensed contractor. We&apos;ve installed Level 2
              chargers across Miami Beach, Sunny Isles, Bal Harbour, Surfside, Brickell, and Coral
              Gables. Free site visits, fixed quotes, full permit coordination.
            </p>
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
            {(post.faq || []).map((item) => (
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

      {/* RELATED CTA */}
      <section className="section bg-white border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-2xl bg-brand-navy text-white p-10 text-center">
            <h2 className="font-bold text-3xl">Ready to install your EV charger?</h2>
            <p className="mt-4 text-white/85">
              Free site visit, fixed quote, permit pulled in your name. Most installs done in a day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/services/ev-charger-installation"
                className="rounded-full bg-brand-red px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 inline-flex items-center gap-2"
              >
                See Service Details <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="rounded-full border-2 border-white/80 px-7 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-brand-navy"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-brand-red hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
