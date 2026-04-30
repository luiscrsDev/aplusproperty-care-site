import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { ADDRESS, BRAND, CONTACT, SERVICES, SOCIAL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white/85 mt-0">
      <div className="container-narrow px-5 py-14 grid gap-10 md:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aplus-logo.png" alt={`${BRAND.name} logo`} className="h-12 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-xs">
            The modern solution for maintaining and enhancing your property value.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white/70 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-white/70 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-white/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                data-event="email_click"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-white/80">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              {ADDRESS.locality}, {ADDRESS.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow px-5 py-4 text-xs text-white/55 text-center">
          © {year} {BRAND.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
