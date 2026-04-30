import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, ArrowRight, Award } from "lucide-react";

import { BRAND, CONTACT, PLANS } from "@/lib/constants";
import { AREA_BY_SLUG, AREA_CONTENT } from "@/lib/content/areas";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";
import { PlanCard } from "@/components/PlanCard";

export function generateStaticParams() {
  return AREA_CONTENT.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const content = AREA_BY_SLUG[city];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: absoluteUrl(`/areas/${city}`) },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: absoluteUrl(`/areas/${city}`),
      type: "article",
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const content = AREA_BY_SLUG[city];
  if (!content) notFound();

  const recommendedPlan = PLANS.find((p) => p.slug === content.recommendedPlan)!;
  const url = absoluteUrl(`/areas/${city}`);
  const otherAreas = AREA_CONTENT.filter((a) => a.slug !== city).slice(0, 3);

  return (
    <>
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
              { name: "Service Areas", url: absoluteUrl("/areas") },
              { name: content.name, url },
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
            <Link href="/areas" className="hover:text-white">
              Service Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{content.name}</span>
          </nav>

          <div className="flex items-start gap-5 max-w-3xl">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/30 flex-shrink-0">
              <MapPin className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h1 className="font-bold text-3xl md:text-5xl leading-tight">{content.headline}</h1>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">{content.subheadline}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-brand-red px-6 py-3 text-base font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 transition-all"
                >
                  Request Free Assessment
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-event="phone_click"
                  className="rounded-full border-2 border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-brand-navy transition-all"
                >
                  Call {CONTACT.phoneDisplay}
                </a>
              </div>

              {content.notableClients && content.notableClients.length > 0 && (
                <div className="mt-7 text-sm text-white/70">
                  <span className="text-white/55">Trusted by:</span>{" "}
                  {content.notableClients.map((c, i) => (
                    <span key={c}>
                      <span className="text-white font-medium">{c}</span>
                      {i < content.notableClients!.length - 1 && (
                        <span className="text-white/40"> · </span>
                      )}
                    </span>
                  ))}
                </div>
              )}
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

            {/* Zip codes — geo signal */}
            <div className="rounded-2xl border border-brand-line bg-brand-bg-cool p-7">
              <h3 className="font-bold text-xl text-brand-text">Areas we cover in {content.name}</h3>
              <p className="mt-3 text-sm text-brand-muted">Zip codes:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {content.zips.map((z) => (
                  <span
                    key={z}
                    className="rounded-full bg-white border border-brand-line px-3 py-1 text-xs font-medium text-brand-text"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — recommended plan + CTA */}
          <aside>
            <div className="sticky top-6 space-y-5">
              <div className="rounded-2xl bg-brand-navy text-white p-7">
                <Award className="h-8 w-8 text-brand-red" aria-hidden />
                <div className="mt-4 text-xs uppercase tracking-wider text-white/60 font-semibold">
                  Recommended for {content.name}
                </div>
                <div className="mt-2 font-bold text-2xl">{recommendedPlan.name} Plan</div>
                <div className="mt-1 text-sm text-white/75">{recommendedPlan.tagline}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-bold text-3xl text-brand-red">
                    {recommendedPlan.priceDisplay}
                  </span>
                  <span className="text-sm text-white/70">{recommendedPlan.period}</span>
                </div>
                <Link
                  href={`/maintenance-plans/${recommendedPlan.slug}`}
                  className="mt-5 block w-full rounded-full bg-brand-red text-white text-center px-5 py-2.5 text-sm font-semibold hover:bg-brand-red-hover transition-colors"
                >
                  Learn about {recommendedPlan.name}
                </Link>
                <Link
                  href="/maintenance-plans"
                  className="mt-2 block text-center text-xs text-white/65 hover:text-white"
                >
                  See all plans →
                </Link>
              </div>

              <a
                href="#contact"
                className="block rounded-2xl bg-brand-red text-white p-6 text-center hover:bg-brand-red-hover transition-colors shadow-lg shadow-brand-red/20"
              >
                <div className="font-bold text-lg">Free Assessment</div>
                <div className="mt-1 text-sm text-white/85">No commitment. 1 business day.</div>
              </a>
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

      {/* PLAN HIGHLIGHT */}
      <section className="section bg-white">
        <div className="container-narrow max-w-md mx-auto">
          <h2 className="font-bold text-2xl text-brand-text text-center">
            Recommended plan for {content.name}
          </h2>
          <div className="mt-8">
            <PlanCard plan={recommendedPlan} />
          </div>
        </div>
      </section>

      {/* OTHER AREAS */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow">
          <h2 className="font-bold text-3xl text-brand-text text-center">Other areas we serve</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group rounded-2xl bg-white border border-brand-line p-6 hover:border-brand-red/40 hover:shadow-md transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div className="mt-4 font-bold text-lg text-brand-text">{a.name}</div>
                <div className="mt-1 text-sm text-brand-muted line-clamp-2">{a.subheadline}</div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-white border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Caring for homes in <span className="text-brand-red">{content.name}</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              Tell us about your property and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
