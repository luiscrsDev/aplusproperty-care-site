import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Award,
  ArrowRight,
  Wrench,
  Zap,
  Droplets,
  Plug,
  Wind,
  Paintbrush,
  Trees,
  Truck,
  Bug,
  type LucideIcon,
} from "lucide-react";

import { BRAND, CONTACT, SERVICES, type ServiceSlug } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/lib/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";

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

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug as ServiceSlug];
  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: absoluteUrl(`/services/${slug}`) },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: absoluteUrl(`/services/${slug}`),
      type: "article",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug as ServiceSlug];
  if (!content) notFound();

  const service = SERVICES.find((s) => s.slug === slug)!;
  const Icon = ICONS[slug] || Wrench;
  const url = absoluteUrl(`/services/${slug}`);

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.name,
              description: content.metaDescription,
              url,
              serviceType: service.name,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(content.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BRAND.url },
              { name: "Services", url: absoluteUrl("/services") },
              { name: service.name, url },
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
            <span className="text-white">{service.name}</span>
          </nav>

          <div className="flex items-start gap-5 max-w-3xl">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/30 flex-shrink-0">
              <Icon className="h-6 w-6" aria-hidden />
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
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section bg-white">
        <div className="container-narrow grid gap-12 md:grid-cols-3">
          {/* Sections + included */}
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
                {content.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar — why APLUS + CTA */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-navy text-white p-7 sticky top-6">
              <Award className="h-8 w-8 text-brand-red" aria-hidden />
              <h3 className="mt-4 font-bold text-xl">Why APLUS</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {content.whyUs.map((item) => (
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
                Get a Free Assessment
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

      {/* OTHER SERVICES */}
      <section className="section bg-white border-t border-brand-line">
        <div className="container-narrow">
          <h2 className="font-bold text-3xl text-brand-text text-center">Other services</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => {
              const OtherIcon = ICONS[s.slug] || Wrench;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl bg-white border border-brand-line p-5 hover:border-brand-red/40 hover:shadow-md transition-all"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white">
                    <OtherIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-bold text-base text-brand-text">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-brand-muted line-clamp-2">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Ready to start with <span className="text-brand-red">{service.name}</span>?
            </h2>
            <p className="mt-4 text-brand-muted">
              Tell us about your home and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <ContactForm defaultService={service.name} />
          </div>
        </div>
      </section>
    </>
  );
}
