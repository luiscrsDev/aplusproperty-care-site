import Link from "next/link";
import { Check } from "lucide-react";
import type { PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Plan = (typeof PLANS)[number];

/**
 * Plan card — replicates the Lovable-original style:
 *  - Plain white card with subtle shadow.
 *  - Featured ("Most Popular") plan gets a 2px brand-red border + red badge.
 *  - Big red price, period in muted slate.
 *  - Outline-red CTA on side cards, solid-red CTA on the featured one.
 */

export function PlanCard({ plan, asLink = true }: { plan: Plan; asLink?: boolean }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl bg-white p-7 transition-all",
        plan.highlight
          ? "border-2 border-brand-red shadow-2xl shadow-brand-red/15 md:scale-[1.02]"
          : "border border-brand-line shadow-sm hover:shadow-md",
      )}
    >
      {plan.highlight && plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-red px-4 py-1.5 text-[11px] font-semibold tracking-wider text-white uppercase shadow-lg shadow-brand-red/30">
          {plan.badge}
        </span>
      )}

      <div className="text-center">
        <h3 className="font-bold text-2xl text-brand-text">{plan.name}</h3>

        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="font-bold text-5xl text-brand-red">{plan.priceDisplay}</span>
          <span className="text-sm text-brand-muted font-medium">{plan.period}</span>
        </div>

        <p className="mt-3 text-sm text-brand-muted">{plan.tagline}</p>
      </div>

      <ul className="mt-7 space-y-3 text-sm flex-1">
        <li className="flex items-start gap-3 font-medium">
          <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-red" aria-hidden />
          <span>{plan.visits}</span>
        </li>
        {plan.features
          .filter((f) => !f.toLowerCase().includes("visit"))
          .map((f) => (
            <li key={f} className="flex items-start gap-3 text-brand-text/85">
              <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-red" aria-hidden />
              <span>{f}</span>
            </li>
          ))}
      </ul>

      <div className="mt-7">
        {asLink ? (
          <Link
            href={`/maintenance-plans/${plan.slug}`}
            className={cn(
              "block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-all",
              plan.highlight
                ? "bg-brand-red text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20"
                : "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
            )}
          >
            Choose Plan
          </Link>
        ) : (
          <a
            href="#contact"
            className={cn(
              "block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-all",
              plan.highlight
                ? "bg-brand-red text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20"
                : "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
            )}
          >
            Choose Plan
          </a>
        )}
      </div>
    </article>
  );
}
