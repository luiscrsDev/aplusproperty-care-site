/**
 * Real anchor links for phone, WhatsApp, and email.
 *
 * THIS IS THE FIX for the Lovable bug where buttons were `<button onClick>` —
 * those never fire the GTM `tel:` / `wa.me` triggers we configured. Always use
 * proper anchors so GA4 conversion events flow correctly.
 */

import { Phone, MessageCircle, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Variant = "inline" | "stacked" | "card";

const baseLink =
  "inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-hover transition-colors";

export function PhoneLink({ className, label }: { className?: string; label?: string }) {
  return (
    <a
      href={`tel:${CONTACT.phone}`}
      className={cn(baseLink, className)}
      data-event="phone_click"
      aria-label={`Call ${CONTACT.phoneDisplay}`}
    >
      <Phone className="h-4 w-4" aria-hidden />
      <span>{label ?? CONTACT.phoneDisplay}</span>
    </a>
  );
}

export function WhatsAppLink({
  className,
  label,
  message,
}: {
  className?: string;
  label?: string;
  message?: string;
}) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "?text=Hi%20APLUS%2C%20I%27m%20interested%20in%20your%20services.";
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}${text}`}
      className={cn(baseLink, className)}
      data-event="whatsapp_click"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      <span>{label ?? "WhatsApp"}</span>
    </a>
  );
}

export function EmailLink({ className, label }: { className?: string; label?: string }) {
  return (
    <a
      href={`mailto:${CONTACT.email}`}
      className={cn(baseLink, className)}
      data-event="email_click"
      aria-label={`Email ${CONTACT.email}`}
    >
      <Mail className="h-4 w-4" aria-hidden />
      <span>{label ?? CONTACT.email}</span>
    </a>
  );
}

export function ContactBar({ variant = "inline" }: { variant?: Variant }) {
  if (variant === "stacked") {
    return (
      <div className="flex flex-col gap-3">
        <PhoneLink />
        <WhatsAppLink />
        <EmailLink />
      </div>
    );
  }
  if (variant === "card") {
    return (
      <div className="grid gap-3 sm:grid-cols-3">
        <a
          href={`tel:${CONTACT.phone}`}
          data-event="phone_click"
          className="flex items-center gap-3 rounded-xl border border-brand-navy/15 bg-white p-4 hover:border-brand-navy/40 transition-colors"
        >
          <Phone className="h-5 w-5 text-brand-navy" aria-hidden />
          <div className="text-left">
            <div className="text-xs uppercase tracking-wider text-brand-muted">Call</div>
            <div className="font-medium text-brand-navy">{CONTACT.phoneDisplay}</div>
          </div>
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          className="flex items-center gap-3 rounded-xl border border-brand-navy/15 bg-white p-4 hover:border-brand-navy/40 transition-colors"
        >
          <MessageCircle className="h-5 w-5 text-brand-navy" aria-hidden />
          <div className="text-left">
            <div className="text-xs uppercase tracking-wider text-brand-muted">WhatsApp</div>
            <div className="font-medium text-brand-navy">Chat now</div>
          </div>
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          data-event="email_click"
          className="flex items-center gap-3 rounded-xl border border-brand-navy/15 bg-white p-4 hover:border-brand-navy/40 transition-colors"
        >
          <Mail className="h-5 w-5 text-brand-navy" aria-hidden />
          <div className="text-left">
            <div className="text-xs uppercase tracking-wider text-brand-muted">Email</div>
            <div className="font-medium text-brand-navy break-all">{CONTACT.email}</div>
          </div>
        </a>
      </div>
    );
  }
  // inline default
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      <PhoneLink />
      <WhatsAppLink />
      <EmailLink />
    </div>
  );
}
