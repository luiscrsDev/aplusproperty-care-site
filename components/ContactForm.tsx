"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
        // GTM dataLayer event for conversion tracking
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
      <div className="rounded-2xl border border-brand-green/30 bg-brand-green-soft p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-green" aria-hidden />
        <h3 className="mt-4 font-display text-2xl text-brand-navy">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-brand-muted">
          Anderson or someone on our team will call you within one business day. For something
          urgent, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "space-y-5"} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputCls}
            placeholder="Anderson Moraes"
          />
        </Field>
        <Field id="phone" label="Phone" required>
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
      </div>

      <Field id="email" label="Email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
          placeholder="you@example.com"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="property" label="Property type">
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
        <Field id="service" label="Service of interest">
          <select id="service" name="service" className={inputCls} defaultValue={defaultService ?? ""}>
            <option value="" disabled>
              Select…
            </option>
            {SERVICES_INTEREST.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Anything else? (optional)">
        <textarea
          id="message"
          name="message"
          rows={3}
          className={inputCls}
          placeholder="Tell us about your home, your goals, or your timeline."
        />
      </Field>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-brand-red/30 bg-brand-red-soft p-3 text-sm text-brand-red">
          <AlertCircle className="h-4 w-4 mt-0.5" aria-hidden />
          <span>{errorMsg || "Something went wrong. Please try again or call us."}</span>
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button type="submit" size="lg" disabled={isPending} className="flex-1 sm:flex-none">
          {isPending ? "Sending…" : "Request Free Assessment"}
          <Send className="h-4 w-4" aria-hidden />
        </Button>
        <p className="text-xs text-brand-muted">No spam · we&apos;ll call within 1 business day.</p>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-brand-navy/20 bg-white px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/70 focus:border-brand-navy focus:outline-none transition-colors";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-brand-muted">
        {label} {required && <span className="text-brand-red">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
