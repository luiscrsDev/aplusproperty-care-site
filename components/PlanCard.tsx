import Link from "next/link";
import { Check } from "lucide-react";
import type { PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Plan = (typeof PLANS)[number];

export function PlanCard({ plan, asLink = true }: { plan: Plan; asLink?: boolean }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 transition-all",
        plan.highlight
          ? "bg-plan-premium text-white border-brand-red/40 shadow-2xl shadow-brand-red/25 md:scale-[1.03]"
          : "border-brand-navy/15 bg-white hover:border-brand-navy/35",
      )}
    >
      {plan.highlight && plan.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white shadow-md shadow-brand-red/40 uppercase tracking-wider">
          {plan.badge}
        </span>
      )}

      <h3
        className={cn(
          "font-display text-2xl",
          plan.highlight ? "text-white" : "text-brand-navy",
        )}
      >
        {plan.name}
      </h3>
      <p
        className={cn(
          "mt-1 text-sm",
          plan.highlight ? "text-white/75" : "text-brand-muted",
        )}
      >
        {plan.tagline}
      </p>

      <div className="mt-5 flex items-baseline gap-1">
        <span
          className={cn(
            "font-display text-4xl",
            plan.highlight ? "text-white" : "text-brand-navy",
          )}
        >
          {plan.priceDisplay}
        </span>
        <span
          className={cn(
            "text-sm",
            plan.highlight ? "text-white/70" : "text-brand-muted",
          )}
        >
          {plan.period}
        </span>
      </div>
      <p
        className={cn(
          "mt-2 text-sm font-medium",
          plan.highlight ? "text-white" : "text-brand-navy",
        )}
      >
        {plan.visits}
      </p>

      <ul className="mt-6 space-y-3 text-sm flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check
              className={cn(
                "h-4 w-4 mt-0.5 flex-shrink-0",
                plan.highlight ? "text-white" : "text-brand-red",
              )}
              aria-hidden
            />
            <span className={plan.highlight ? "text-white/90" : ""}>{f}</span>
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
                ? "bg-white text-brand-red hover:bg-brand-cream"
                : "bg-brand-red text-white hover:bg-brand-red-deep shadow-md shadow-brand-red/20",
            )}
          >
            {plan.cta}
          </Link>
        ) : (
          <a
            href="#contact"
            className={cn(
              "block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-all",
              plan.highlight
                ? "bg-white text-brand-red hover:bg-brand-cream"
                : "bg-brand-red text-white hover:bg-brand-red-deep shadow-md shadow-brand-red/20",
            )}
          >
            {plan.cta}
          </a>
        )}
      </div>
    </article>
  );
}
