import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, X, ArrowRight } from "lucide-react";

import { PLANS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { PlanCard } from "@/components/PlanCard";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Maintenance Plans | Miami Home Care Subscriptions",
  description:
    "Choose between Essential ($199), Premium ($399), or VIP ($699) home maintenance plans in Miami. Recurring care, certified technicians, cancel anytime.",
  alternates: { canonical: absoluteUrl("/maintenance-plans") },
};

/** Comparison rows — single source of truth for the feature matrix. */
const COMPARISON_ROWS: Array<{
  feature: string;
  essential: boolean | string;
  premium: boolean | string;
  vip: boolean | string;
}> = [
  { feature: "Visits per month", essential: "1", premium: "2", vip: "Weekly" },
  { feature: "Photo report", essential: true, premium: "Detailed", vip: "Executive" },
  { feature: "Emergency calls included", essential: "1", premium: "3", vip: "Unlimited" },
  { feature: "WhatsApp support", essential: "Business hours", premium: "24/7", vip: "24/7" },
  { feature: "Small repairs included", essential: false, premium: true, vip: true },
  { feature: "All routine repairs included", essential: false, premium: false, vip: true },
  { feature: "Hurricane season prep", essential: false, premium: true, vip: true },
  { feature: "Landscaping included", essential: false, premium: false, vip: true },
  { feature: "Dedicated property manager", essential: false, premium: false, vip: true },
  { feature: "Property concierge service", essential: false, premium: false, vip: true },
  { feature: "Discount on extra services", essential: "5%", premium: "15%", vip: "25%" },
  { feature: "Cancel anytime", essential: true, premium: true, vip: true },
];

export default function MaintenancePlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Maintenance Plans", url: absoluteUrl("/maintenance-plans") },
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
        <div className="container-narrow relative px-5 py-20 md:py-24 text-center">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Maintenance Plans</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            One trusted team for everything <br className="hidden sm:block" />
            <span className="text-brand-red">your home needs</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            Three subscription plans engineered for Miami homes — from apartments to luxury
            estates. Cancel anytime. No long-term contracts.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Compare plans <span className="text-brand-red">side by side</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              Pick the plan that fits your home. Upgrade or downgrade any month.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-brand-line shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-bg-cool">
                  <th className="text-left py-4 px-5 font-semibold text-brand-muted text-xs uppercase tracking-wider">
                    Feature
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.slug}
                      className={`text-center py-4 px-5 font-bold ${
                        plan.highlight ? "bg-brand-red/5 text-brand-red" : "text-brand-text"
                      }`}
                    >
                      <div>{plan.name}</div>
                      <div className="text-xs font-medium text-brand-muted mt-0.5">
                        {plan.priceDisplay}
                        {plan.period}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-brand-bg-cool/40"}>
                    <td className="py-3.5 px-5 text-brand-text font-medium">{row.feature}</td>
                    {(["essential", "premium", "vip"] as const).map((col) => {
                      const v = row[col];
                      const highlight = col === "premium";
                      return (
                        <td
                          key={col}
                          className={`text-center py-3.5 px-5 ${
                            highlight ? "bg-brand-red/5" : ""
                          }`}
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <CheckCircle2 className="inline h-5 w-5 text-brand-red" />
                            ) : (
                              <X className="inline h-4 w-4 text-brand-muted/40" />
                            )
                          ) : (
                            <span className="text-brand-text font-medium">{v}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="py-5 px-5"></td>
                  {PLANS.map((plan) => (
                    <td
                      key={plan.slug}
                      className={`text-center py-5 px-5 ${
                        plan.highlight ? "bg-brand-red/5" : ""
                      }`}
                    >
                      <Link
                        href={`/maintenance-plans/${plan.slug}`}
                        className={`inline-block rounded-full px-5 py-2 text-xs font-semibold transition-colors ${
                          plan.highlight
                            ? "bg-brand-red text-white hover:bg-brand-red-hover"
                            : "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                        }`}
                      >
                        Choose {plan.name}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-white">
        <div className="container-narrow max-w-4xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              How it <span className="text-brand-red">works</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Free assessment",
                body: "We visit your home (free, no commitment) to understand the property, propose the right plan, and answer questions.",
              },
              {
                n: "02",
                title: "Pick a plan",
                body: "Choose Essential, Premium, or VIP. Month-to-month — upgrade, downgrade, or cancel anytime.",
              },
              {
                n: "03",
                title: "Recurring care",
                body: "Visits start the next week. You get a photo report after each visit and one phone number for everything.",
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg shadow-md shadow-brand-red/20">
                  {step.n}
                </div>
                <h3 className="mt-5 font-bold text-lg text-brand-text">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-text">
              Not sure which plan is right?
            </h2>
            <p className="mt-4 text-brand-muted">
              Tell us about your home and we&apos;ll recommend a plan during your free assessment.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-sm text-brand-muted">
            Or browse{" "}
            <Link href="/services" className="text-brand-red font-semibold hover:underline">
              individual services <ArrowRight className="inline h-3 w-3" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
