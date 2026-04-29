"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ContactLinks";

const nav = [
  { href: "/maintenance-plans", label: "Plans" },
  { href: "/services/ev-charger-installation", label: "EV Charger" },
  { href: "/services", label: "Services" },
  { href: "/areas/doral", label: "Service Area" },
  { href: "/parceria-construtoras", label: "Builders" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-cream/85 backdrop-blur supports-[backdrop-filter]:bg-brand-cream/65 border-b border-brand-navy/10">
      <div className="container-narrow flex h-16 items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-display text-lg text-brand-navy">
          <span aria-hidden className="inline-block h-7 w-7 rounded-full bg-brand-navy" />
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-navy/80 hover:text-brand-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <PhoneLink className="text-sm" />
          <Button as="a" href="/#contact" size="sm">
            Free Assessment
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-md p-2 text-brand-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-navy/10 bg-brand-cream">
          <nav className="flex flex-col px-5 py-4 gap-3 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <PhoneLink />
              <Button as="a" href="/#contact" size="sm" className="self-start">
                Free Assessment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
