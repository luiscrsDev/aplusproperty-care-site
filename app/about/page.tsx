import type { Metadata } from "next";
import Link from "next/link";
import { Award, MapPin, ShieldCheck, Clock } from "lucide-react";

import { ADDRESS, BRAND, CONTACT, SERVICE_AREA, STATS, TEAM } from "@/lib/constants";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { ClientsGrid } from "@/components/Clients";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About APLUS — Miami Property Care Team",
  description:
    "Who runs APLUS Property Care: Anderson Moraes, licensed General Contractor with 12+ years in Miami-Dade. Our standards, service area, and how we work.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About APLUS Property Care",
    description:
      "Licensed Miami-Dade general contractor. 12+ years, 500+ clients, hospitality-grade standards.",
    url: absoluteUrl("/about"),
    type: "profile",
  },
};

export default function AboutPage() {
  const founder = TEAM[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "About", url: absoluteUrl("/about") },
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
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight max-w-3xl">
            One team, your home, year over year.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
            APLUS Property Care exists because Miami homeowners were tired of calling a different
            contractor for every problem and hoping the price was fair.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-bold text-3xl text-brand-red">{s.value}</div>
                <div className="mt-1 text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-2xl md:text-3xl text-brand-text">Why we started</h2>
          <div className="mt-6 space-y-5 text-brand-text/85 leading-relaxed">
            <p>
              Every Miami homeowner knows the cycle. The AC fails in August and you call whoever
              answers. The plumber who fixed the leak last year has stopped picking up. Nobody has
              ever seen the whole house, so nobody catches the small thing before it becomes the
              expensive thing.
            </p>
            <p>
              We built APLUS around the opposite idea: one accountable team that knows your property,
              shows up on a schedule, and documents what it did. Not a marketplace, not a dispatcher
              routing you to whoever is free — the same crew, with your home&apos;s history in hand.
            </p>
            <p>
              That model came out of hospitality work. When you maintain properties for clients like
              Faena and Fisher Island Club, you learn that preventive care is not a nicety — it is
              the only way to keep a building presentable while it stays in constant use. We brought
              those standards to residential.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-2xl md:text-3xl text-brand-text">Who runs it</h2>
          <div className="mt-8 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <div className="flex items-start gap-5">
              <span className="inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white font-bold text-xl">
                AM
              </span>
              <div>
                <h3 className="font-bold text-xl text-brand-text">{founder.name}</h3>
                <p className="text-sm text-brand-red font-semibold">{founder.role}</p>
                <p className="mt-4 text-brand-text/85 leading-relaxed">
                  Anderson has spent 12+ years in residential and commercial construction and
                  maintenance across Miami-Dade. He holds a Florida General Contractor license and
                  runs the crews directly — on most first assessments, he is the one who shows up.
                </p>
                <p className="mt-3 text-brand-text/85 leading-relaxed">
                  His background is the reason the company is structured the way it is: licensed
                  trades in-house rather than subcontracted, permits pulled in the client&apos;s
                  name, and written quotes before work starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section bg-white border-t border-brand-line">
        <div className="container-narrow">
          <h2 className="font-bold text-2xl md:text-3xl text-brand-text text-center">
            How we work
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: ShieldCheck,
                title: "Licensed and insured",
                body: "Florida-licensed trades, general liability coverage, and license numbers provided up front. Electrical work by licensed electricians; plumbing by licensed plumbers.",
              },
              {
                Icon: Award,
                title: "Permits in your name",
                body: "We pull Miami-Dade permits in the property owner's name and bill the fee at cost, with no markup. Skipping permits is how homeowners get insurance denials later.",
              },
              {
                Icon: Clock,
                title: "Written quotes first",
                body: "Fixed labor price in writing before we start. Only government fees pass through. No mid-job phone calls about budget.",
              },
              {
                Icon: MapPin,
                title: "Photo report every visit",
                body: "You see what was inspected and what was done, whether or not you were home. Plan members get the full history of the property.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-line bg-brand-bg-cool p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-base text-brand-text">{title}</h3>
                <p className="mt-2 text-sm text-brand-text/80 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
              Trusted by
            </span>
            <h2 className="mt-2 font-bold text-2xl md:text-3xl text-brand-text">
              Some of Miami&apos;s most demanding clients
            </h2>
            <p className="mt-3 text-brand-muted">
              From luxury hospitality to nationwide automotive groups.
            </p>
          </div>
          <div className="mt-10">
            <ClientsGrid />
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section bg-white border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-2xl md:text-3xl text-brand-text">Where we work</h2>
          <p className="mt-4 text-brand-text/85 leading-relaxed">
            We serve {SERVICE_AREA.county}, with the deepest coverage in the neighborhoods where we
            already run weekly routes. Our base is in {ADDRESS.locality}, {ADDRESS.region}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {SERVICE_AREA.cities.map((city) => {
              const slug = city.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={city}
                  href={`/areas/${slug}`}
                  className="rounded-full border border-brand-line bg-brand-bg-cool px-5 py-2 text-sm font-semibold text-brand-text hover:border-brand-red/40 hover:text-brand-red transition-colors"
                >
                  {city}
                </Link>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-brand-muted">
            Outside these areas?{" "}
            <Link href="/areas" className="text-brand-red font-semibold hover:underline">
              See all service areas
            </Link>{" "}
            or{" "}
            <a href={`tel:${CONTACT.phone}`} className="text-brand-red font-semibold hover:underline">
              call {CONTACT.phoneDisplay}
            </a>{" "}
            — we cover broader Miami-Dade on request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="text-center">
            <h2 className="font-bold text-2xl md:text-4xl text-brand-text">
              Start with a <span className="text-brand-red">free assessment</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              A senior technician walks the property with you, flags the priorities, and recommends a
              plan. No commitment.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-sm text-brand-muted">
            Prefer to browse first? See our{" "}
            <Link href="/maintenance-plans" className="text-brand-red font-semibold hover:underline">
              maintenance plans
            </Link>{" "}
            or{" "}
            <Link href="/services" className="text-brand-red font-semibold hover:underline">
              individual services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
