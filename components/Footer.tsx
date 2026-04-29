import Link from "next/link";
import { ADDRESS, BRAND, HOURS_DISPLAY, SERVICES } from "@/lib/constants";
import { ContactBar } from "@/components/ContactLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy-deep text-brand-cream/85 mt-16">
      <div className="container-narrow px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl text-white">{BRAND.name}</div>
          <p className="mt-3 text-sm leading-relaxed text-brand-cream/70 max-w-md">
            Preventive home maintenance and EV charger installation across Miami. Three subscription
            plans, certified technicians, fast response.
          </p>
          <div className="mt-6">
            <ContactBar variant="stacked" />
          </div>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold tracking-wide uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-brand-cream/75 hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold tracking-wide uppercase">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/maintenance-plans"
                className="text-brand-cream/75 hover:text-white transition-colors"
              >
                Maintenance Plans
              </Link>
            </li>
            <li>
              <Link
                href="/areas/doral"
                className="text-brand-cream/75 hover:text-white transition-colors"
              >
                Service Areas
              </Link>
            </li>
            <li>
              <Link
                href="/parceria-construtoras"
                className="text-brand-cream/75 hover:text-white transition-colors"
              >
                Builder Partnership
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-brand-cream/75 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-6 text-xs text-brand-cream/55 leading-relaxed">
            {ADDRESS.formatted}
            <br />
            {HOURS_DISPLAY}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow px-5 py-4 text-xs text-brand-cream/55 flex flex-col md:flex-row gap-2 justify-between">
          <span>
            © {year} {BRAND.legalName}. All rights reserved.
          </span>
          <span>Licensed &amp; insured · Miami-Dade County</span>
        </div>
      </div>
    </footer>
  );
}
