import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { POSTS_BY_SLUG, readingMinutes } from "@/lib/content/blog";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const SLUG = "home-maintenance-cost-miami-per-year";
const post = POSTS_BY_SLUG[SLUG];
const url = absoluteUrl(`/blog/${SLUG}`);

export const metadata: Metadata = {
  title: "Home Maintenance Cost in Miami Per Year (2026)",
  description: post.description,
  alternates: { canonical: url },
  openGraph: {
    title: post.title,
    description: post.description,
    url,
    type: "article",
    publishedTime: post.date,
  },
};

export default function HomeMaintenanceCostMiamiPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: absoluteUrl("/about") },
    publisher: {
      "@type": "Organization",
      name: "APLUS Property Care",
      logo: { "@type": "ImageObject", url: absoluteUrl("/aplus-logo.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
            {" / "}
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            {" / "}
            <span className="text-white/80">Home Maintenance Cost Miami</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs font-semibold uppercase tracking-widest bg-white/10 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>August 16, 2026</span>
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
              Most cost guides quote the &ldquo;1% rule&rdquo; — budget 1% of your home&apos;s value
              per year for maintenance. In Miami that number is optimistic, and the reason has
              nothing to do with contractors charging more.
            </p>

            {/* QUICK ANSWER */}
            <aside
              aria-label="Quick Answer"
              className="my-8 rounded-xl border-2 border-brand-red/30 bg-brand-red/5 px-6 py-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">
                Quick answer
              </p>
              <p className="font-bold text-brand-text text-lg leading-snug mb-2">
                Budget 1.5%–3% of your home&apos;s value per year in Miami — not 1%.
              </p>
              <ul className="mt-3 space-y-1 text-base text-brand-text/80">
                <li>· $600,000 home → roughly $9,000–$18,000 a year</li>
                <li>· National average sits near $6,600; Florida runs above it</li>
                <li>· Coastal and pre-1990 homes land at the top of the range</li>
              </ul>
            </aside>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Why Miami breaks the 1% rule
            </h2>
            <p>
              The 1% rule was built on national averages, and national averages assume a house that
              gets a break. Miami homes do not.
            </p>
            <div className="my-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "AC runs nearly year-round",
                  body: "A system that lasts 15–20 years in a temperate climate lasts 10–12 here. That is not a repair cost — it is a replacement cycle that arrives sooner.",
                },
                {
                  title: "Humidity never lets up",
                  body: "Moisture intrusion, mold, and condensate problems are constant maintenance items in South Florida and near-absent in dry climates.",
                },
                {
                  title: "Salt air within a few miles of the coast",
                  body: "Corrodes metal 2–3 times faster. Hinges, railings, fasteners, condenser coils, and window frames all age on a compressed schedule.",
                },
                {
                  title: "Hurricane season is an annual line item",
                  body: "Prep costs recur every year, and any storm repair in Miami-Dade has to meet HVHZ standards — which are more expensive than standard code.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand-line bg-brand-bg-cool p-5"
                >
                  <h3 className="font-bold text-base text-brand-text">{item.title}</h3>
                  <p className="mt-2 text-base text-brand-text/80 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Where the money actually goes
            </h2>
            <p>
              Annual maintenance spend splits into two very different categories, and confusing them
              is why budgets fail. The first is <strong>recurring upkeep</strong> — small, frequent,
              predictable. The second is <strong>capital replacement</strong> — large, rare, and
              inevitable.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="py-3 px-4 font-semibold">Item</th>
                    <th className="py-3 px-4 font-semibold">Typical cost</th>
                    <th className="py-3 px-4 font-semibold">Cycle</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/85">
                  <tr className="border-b border-brand-line">
                    <td className="py-3 px-4">AC replacement (single-family system)</td>
                    <td className="py-3 px-4 font-semibold text-brand-text">$6,000–$12,000</td>
                    <td className="py-3 px-4">10–12 years</td>
                  </tr>
                  <tr className="border-b border-brand-line bg-brand-bg-soft">
                    <td className="py-3 px-4">Roof replacement</td>
                    <td className="py-3 px-4 font-semibold text-brand-text">$15,000–$40,000</td>
                    <td className="py-3 px-4">15–25 years</td>
                  </tr>
                  <tr className="border-b border-brand-line">
                    <td className="py-3 px-4">Electrical panel upgrade to 200A</td>
                    <td className="py-3 px-4 font-semibold text-brand-text">$2,500–$5,000</td>
                    <td className="py-3 px-4">Once, often insurer-driven</td>
                  </tr>
                  <tr className="border-b border-brand-line bg-brand-bg-soft">
                    <td className="py-3 px-4">Water heater</td>
                    <td className="py-3 px-4 font-semibold text-brand-text">$1,200–$3,000</td>
                    <td className="py-3 px-4">8–12 years</td>
                  </tr>
                  <tr className="border-b border-brand-line">
                    <td className="py-3 px-4">Exterior paint and caulking</td>
                    <td className="py-3 px-4 font-semibold text-brand-text">$4,000–$12,000</td>
                    <td className="py-3 px-4">5–8 years coastal</td>
                  </tr>
                  <tr className="bg-brand-bg-soft">
                    <td className="py-3 px-4">Recurring upkeep (AC service, plumbing, pest, minor)</td>
                    <td className="py-3 px-4 font-semibold text-brand-text">$2,000–$5,000</td>
                    <td className="py-3 px-4">Every year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-brand-muted">
              Ranges reflect typical Miami-Dade single-family properties in 2026. Condos shift the
              math — the association covers the roof and exterior, but you still own everything from
              the drywall in.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Planned versus reactive: the honest comparison
            </h2>
            <p>
              Here is the part most maintenance companies overstate. A plan does not make your AC
              last forever, and it does not eliminate capital replacement. What it changes is{" "}
              <strong>which kind of spending you do</strong>.
            </p>
            <div className="my-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-line p-6">
                <div className="flex items-center gap-2 text-brand-text font-bold">
                  <AlertTriangle className="h-5 w-5 text-brand-red" aria-hidden />
                  Reactive
                </div>
                <ul className="mt-4 space-y-2 text-base text-brand-text/80">
                  <li>· You pay emergency rates, which run well above scheduled work</li>
                  <li>· Failures found late cause secondary damage — the leak plus the drywall</li>
                  <li>· A different contractor each time, none of whom know the house</li>
                  <li>· Spending is unpredictable and clusters at the worst moments</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-brand-red/30 bg-brand-red/5 p-6">
                <div className="flex items-center gap-2 text-brand-text font-bold">
                  <TrendingUp className="h-5 w-5 text-brand-red" aria-hidden />
                  Planned
                </div>
                <ul className="mt-4 space-y-2 text-base text-brand-text/80">
                  <li>· Fixed monthly cost you can actually budget</li>
                  <li>· Small failures caught while they are still small</li>
                  <li>· One team with the property&apos;s history</li>
                  <li>· Capital replacement still happens — but on your calendar, not by surprise</li>
                </ul>
              </div>
            </div>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              When a plan is worth it — and when it is not
            </h2>
            <p>
              We sell maintenance plans, so treat this section with appropriate suspicion. That said,
              the honest breakdown:
            </p>
            <div className="my-6 space-y-3">
              {[
                "Worth it: many systems — pool, irrigation, multiple AC handlers, tankless water heater.",
                "Worth it: the owner is not there year-round. Nobody notices the drip in February.",
                "Worth it: the home is pre-1990 and small failures have become frequent.",
                "Worth it: a condo where a leak damages the two units below yours.",
                "Probably not: newer, smaller, owner-occupied home with few systems.",
                "Probably not: you already have trades you trust and you call them on schedule.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
            <p>
              The test that settles it: add up what you actually spent on home repairs over the last
              two years, divide by 24, and compare that to a plan&apos;s monthly cost. If your number
              is lower and nothing is deferred, keep doing what you are doing.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">
              Related reading
            </h2>
            <p>
              For the neighborhood-specific version of this — salt air, absentee ownership, and what
              property care covers on the barrier islands — see our{" "}
              <Link
                href="/blog/property-care-miami-beach-guide"
                className="text-brand-red font-semibold hover:underline"
              >
                Miami Beach property care guide
              </Link>
              . For the task-by-task schedule, the{" "}
              <Link
                href="/blog/miami-beach-home-maintenance-checklist-2026"
                className="text-brand-red font-semibold hover:underline"
              >
                maintenance checklist
              </Link>{" "}
              breaks it into monthly, seasonal, and annual work.
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
            {(post.faq || []).map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-brand-line bg-white p-6 shadow-sm open:shadow-md transition-shadow"
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

      {/* CTA */}
      <section className="section bg-brand-navy text-white">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="font-bold text-3xl md:text-4xl">Want the number for your home?</h2>
          <p className="mt-4 text-white/80 text-lg">
            A free assessment gives you a written picture of what your property actually needs — and
            an honest answer on whether a plan beats calling per repair.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/maintenance-plans"
              className="rounded-full bg-brand-red px-7 py-3 font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 transition-all"
            >
              See the plans <ArrowRight className="inline h-4 w-4" />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              data-event="phone_click"
              className="rounded-full border-2 border-white/70 px-7 py-3 font-semibold text-white hover:bg-white hover:text-brand-navy transition-all"
            >
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Prefer one-off work?{" "}
            <Link href="/services/per-visit" className="underline hover:text-white">
              Per-visit service
            </Link>{" "}
            is available too.
          </p>
        </div>
      </section>
    </>
  );
}
