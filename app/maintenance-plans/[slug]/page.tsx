import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Award } from "lucide-react";

import { BRAND, CONTACT, PLANS, type PlanSlug } from "@/lib/constants";
import { PLAN_CONTENT } from "@/lib/content/plans";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";

export function generateStaticParams() {
  return PLANS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = PLAN_CONTENT[slug as PlanSlug];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: absoluteUrl(`/maintenance-plans/${slug}`) },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: absoluteUrl(`/maintenance-plans/${slug}`),
      type: "article",
    },
  };
}

export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = PLAN_CONTENT[slug as PlanSlug];
  if (!content) notFound();

  const plan = PLANS.find((p) => p.slug === slug)!;
  const otherPlans = PLANS.filter((p) => p.slug !== slug);
  const url = absoluteUrl(`/maintenance-plans/${slug}`);

  // Plan-specific Offer schema
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${plan.name} Plan — APLUS Property Care`,
    description: content.metaDescription,
    price: plan.price,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price,
      priceCurrency: "USD",
      billingDuration: "P1M",
    },
    availability: "https://schema.org/InStock",
    url,
    provider: { "@id": `${BRAND.url}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BRAND.url },
              { name: "Maintenance Plans", url: absoluteUrl("/maintenance-plans") },
              { name: plan.name, url },
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
            <Link href="/maintenance-plans" className="hover:text-white">
              Plans
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{plan.name}</span>
          </nav>

          <div className="max-w-3xl">
            {plan.highlight && plan.badge && (
              <span className="inline-block rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-4">
                {plan.badge}
              </span>
            )}
            <h1 className="font-bold text-3xl md:text-5xl leading-tight">{content.headline}</h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">{content.subheadline}</p>

            <div className="mt-7 flex flex-wrap items-baseline gap-1">
              <span className="font-bold text-5xl text-brand-red">{plan.priceDisplay}</span>
              <span className="text-white/70">{plan.period}</span>
              <span className="ml-3 text-sm text-white/60">· Cancel anytime</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand-red px-6 py-3 text-base font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 transition-all"
              >
                Start {plan.name} Today
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="rounded-full border-2 border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-brand-navy transition-all"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section bg-white">
        <div className="container-narrow grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-10">
            {content.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-bold text-2xl text-brand-text">{section.title}</h2>
                <p className="mt-3 text-brand-text/85 leading-relaxed">{section.body}</p>
              </article>
            ))}

            {/* What's included */}
            <div className="rounded-2xl border border-brand-line bg-brand-bg-cool p-7">
              <h3 className="font-bold text-xl text-brand-text">What&apos;s included</h3>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>{plan.visits}</span>
                </li>
                {plan.features
                  .filter((f) => !f.toLowerCase().includes("visit"))
                  .map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text/85">{f}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl bg-brand-navy text-white p-7 sticky top-6">
              <Award className="h-8 w-8 text-brand-red" aria-hidden />
              <h3 className="mt-4 font-bold text-xl">Ideal for</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {content.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-red mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 block w-full rounded-full bg-brand-red text-white text-center px-5 py-3 text-sm font-semibold hover:bg-brand-red-hover transition-colors"
              >
                Start {plan.name} Today
              </a>
              <p className="mt-3 text-center text-xs text-white/60">Cancel anytime</p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-bg-cool">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-3xl md:text-4xl text-brand-text text-center">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {content.faq.map((item, i) => (
              <details
                key={i}
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

      {/* OTHER PLANS */}
      <section className="section bg-white border-t border-brand-line">
        <div className="container-narrow">
          <h2 className="font-bold text-3xl text-brand-text text-center">
            Compare with other plans
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {otherPlans.map((p) => (
              <Link
                key={p.slug}
                href={`/maintenance-plans/${p.slug}`}
                className="group rounded-2xl bg-white border border-brand-line p-7 hover:border-brand-red/40 hover:shadow-md transition-all flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-xl text-brand-text">{p.name}</div>
                  <div className="mt-1 text-sm text-brand-muted">{p.tagline}</div>
                  <div className="mt-3 text-2xl font-bold text-brand-red">
                    {p.priceDisplay}
                    <span className="text-sm text-brand-muted font-medium">{p.period}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-red group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/maintenance-plans"
              className="text-sm font-semibold text-brand-red hover:underline"
            >
              See full comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Start with <span className="text-brand-red">{plan.name}</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              Tell us about your home and we&apos;ll have you set up by next week.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <ContactForm defaultService={`${plan.name} plan ($${plan.price}/mo)`} />
          </div>
        </div>
      </section>
    </>
  );
}
