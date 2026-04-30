"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const PROPERTY_TYPES = [
  "Apartment",
  "Single-family home",
  "Townhouse",
  "Condo",
  "Luxury estate",
  "Other",
] as const;

const SERVICES_INTEREST = [
  "Essential plan ($199/mo)",
  "Premium plan ($399/mo)",
  "VIP plan ($699/mo)",
  "EV charger installation",
  "One-off repair",
  "Builder partnership",
  "Not sure — need advice",
] as const;

/**
 * ContactForm has two visual modes:
 *   - default (light) — for sections with white or near-white backgrounds.
 *   - compact (glass) — for the hero glassmorphism card. Transparent inputs,
 *     white text, white-tinted placeholders so they read against the photo.
 */
export function ContactForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      property: String(fd.get("property") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || "Could not submit");
        }
        if (typeof window !== "undefined") {
          // @ts-expect-error - dataLayer global
          window.dataLayer = window.dataLayer || [];
          // @ts-expect-error - dataLayer global
          window.dataLayer.push({ event: "form_submit", form_name: "contact" });
        }
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
        setStatus("error");
      }
    });
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl p-7 text-center",
          compact
            ? "bg-white/10 border border-white/20 text-white"
            : "border border-brand-green/30 bg-brand-green-soft",
        )}
      >
        <CheckCircle2
          className={cn("mx-auto h-10 w-10", compact ? "text-white" : "text-brand-green")}
          aria-hidden
        />
        <h3 className={cn("mt-3 font-bold text-2xl", compact ? "text-white" : "text-brand-text")}>
          Thanks — we got it.
        </h3>
        <p className={cn("mt-2 text-sm", compact ? "text-white/80" : "text-brand-muted")}>
          We&apos;ll call you within one business day. For something urgent, message us on
          WhatsApp.
        </p>
      </div>
    );
  }

  const inputCls = compact
    ? "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/55 focus:border-white/60 focus:bg-white/15 focus:outline-none transition-colors"
    : "w-full rounded-xl border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/70 focus:border-brand-red focus:outline-none transition-colors";

  const labelCls = compact
    ? "text-xs font-medium uppercase tracking-wider text-white/85"
    : "text-xs font-medium uppercase tracking-wider text-brand-muted";

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3.5" : "space-y-5"} noValidate>
      <div className={compact ? "space-y-3.5" : "grid gap-4 sm:grid-cols-2"}>
        <Field id="name" label="Full name" required labelCls={labelCls}>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputCls}
            placeholder="Your full name"
          />
        </Field>
        {!compact && (
          <Field id="phone" label="Phone" required labelCls={labelCls}>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={inputCls}
              placeholder="(305) 555-0123"
            />
          </Field>
        )}
      </div>

      <Field id="email" label="Email" required labelCls={labelCls}>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
          placeholder="your@email.com"
        />
      </Field>

      {compact && (
        <Field id="phone" label="Phone" required labelCls={labelCls}>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputCls}
            placeholder="Your phone number"
          />
        </Field>
      )}

      <div className={compact ? "space-y-3.5" : "grid gap-4 sm:grid-cols-2"}>
        <Field id="service" label="Service of interest" labelCls={labelCls}>
          <select
            id="service"
            name="service"
            className={inputCls}
            defaultValue={defaultService ?? ""}
          >
            <option value="" disabled>
              Type of service needed
            </option>
            {SERVICES_INTEREST.map((s) => (
              <option key={s} value={s} className="text-brand-text">
                {s}
              </option>
            ))}
          </select>
        </Field>
        {!compact && (
          <Field id="property" label="Property type" labelCls={labelCls}>
            <select id="property" name="property" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {PROPERTY_TYPES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
        )}
      </div>

      {!compact && (
        <Field id="message" label="Message (optional)" labelCls={labelCls}>
          <textarea
            id="message"
            name="message"
            rows={3}
            className={inputCls}
            placeholder="Tell us about your home, your goals, or your timeline."
          />
        </Field>
      )}

      {status === "error" && (
        <div
          className={cn(
            "flex items-start gap-2 rounded-xl p-3 text-sm",
            compact
              ? "border border-white/30 bg-white/10 text-white"
              : "border border-brand-red/30 bg-brand-red-soft text-brand-red",
          )}
        >
          <AlertCircle className="h-4 w-4 mt-0.5" aria-hidden />
          <span>{errorMsg || "Something went wrong. Please try again or call us."}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all w-full",
          compact
            ? "bg-brand-red text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30"
            : "bg-brand-red text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20",
        )}
      >
        {isPending ? (
          "Sending…"
        ) : (
          <>
            Request {compact ? "Free" : "Free"} Assessment
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      {!compact && (
        <p className="text-xs text-brand-muted text-center">
          No spam · we&apos;ll call within 1 business day.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
  labelCls,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  labelCls: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className={labelCls}>
        {label} {required && <span className="text-brand-red">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
