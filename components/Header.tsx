"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maintenance-plans", label: "Plans" },
  { href: "/areas", label: "Areas" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brand-navy text-white">
      <div className="container-narrow flex h-28 items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aplus-logo.png"
            alt={`${BRAND.name} logo`}
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/85 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/20 transition-colors"
          >
            Get Quote
          </Link>
          <Link
            href="/admin-login"
            className="rounded-full border border-brand-red text-brand-red px-5 py-2 text-sm font-semibold hover:bg-brand-red hover:text-white transition-colors"
          >
            Login
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-md p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-brand-navy">
          <nav className="flex flex-col px-5 py-4 gap-3 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-white/90"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand-red text-white px-5 py-2.5 text-center text-sm font-semibold"
              >
                Get Quote
              </Link>
              <Link
                href="/admin-login"
                onClick={() => setOpen(false)}
                className="rounded-full border border-brand-red text-brand-red px-5 py-2.5 text-center text-sm font-semibold"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
