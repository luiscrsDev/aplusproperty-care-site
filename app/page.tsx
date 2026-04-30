import Link from "next/link";
import {
  Wrench,
  Zap,
  Droplets,
  Plug,
  Wind,
  Paintbrush,
  Trees,
  Truck,
  Bug,
  AlertTriangle,
  DollarSign,
  Clock,
  HardHat,
  ShieldCheck,
  Heart,
  Award,
  Users,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

import {
  ADDRESS,
  BRAND,
  CONTACT,
  PLANS,
  STATS,
  TEAM,
} from "@/lib/constants";
import { PlanCard } from "@/components/PlanCard";
import { ContactForm } from "@/components/ContactForm";
import { ClientsGrid } from "@/components/Clients";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "ev-charger-installation": Zap,
  "preventive-maintenance": Wrench,
  plumbing: Droplets,
  electrical: Plug,
  hvac: Wind,
  painting: Paintbrush,
  landscaping: Trees,
  "furniture-transport": Truck,
  "pest-control": Bug,
};

const HOMEPAGE_SERVICES = [
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    body: "Regular inspections and proactive maintenance to prevent problems before they happen.",
    bullets: ["Monthly inspection", "Detailed reports", "Personalized plan"],
  },
  {
    slug: "plumbing",
    name: "Plumbing Services",
    body: "From small leaks to complete installations, always with professional quality.",
    bullets: ["Leak detection", "Fixture replacement", "System installation"],
  },
  {
    slug: "electrical",
    name: "Electrical Services",
    body: "Safe and efficient electrical installations for your residence or business.",
    bullets: ["Outlet installation", "Electrical panels", "LED lighting"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    body: "Air conditioning and ventilation maintenance to keep your home always comfortable.",
    bullets: ["AC servicing", "Filter replacement", "System optimization"],
  },
  {
    slug: "painting",
    name: "Painting & Finishes",
    body: "Interior and exterior painting that transforms and protects your property.",
    bullets: ["Interior painting", "Exterior painting", "Drywall repair"],
  },
  {
    slug: "landscaping",
    name: "Landscaping & Gardening",
    body: "Lawn, irrigation, plants, and outdoor maintenance for the Florida climate.",
    bullets: ["Lawn care", "Irrigation systems", "Plant care"],
  },
  {
    slug: "ev-charger-installation",
    name: "EV Charger Installation",
    body: "Level 2 home charger install for Tesla, ChargePoint, Wallbox — Miami-Dade permitted.",
    bullets: ["EV charger setup", "Electrical safety", "Smart charging solutions"],
  },
  {
    slug: "furniture-transport",
    name: "Furniture & Art Transport",
    body: "Specialized handling and transport of furniture and artwork.",
    bullets: ["Specialized packing", "Insurance coverage", "White glove service"],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    body: "Recurring pest treatment and prevention for Miami's climate.",
    bullets: ["Insect and rodent control", "Eco-friendly treatments", "Prevention strategies"],
  },
];

const COMPARE_OLD = [
  {
    icon: AlertTriangle,
    title: "Reactive and costly maintenance",
    body: "Waiting for problems to appear then spending much more on emergency repairs.",
  },
  {
    icon: DollarSign,
    title: "Constant devaluation",
    body: "Small problems become big headaches and reduce property value.",
  },
  {
    icon: HardHat,
    title: "Unqualified professionals",
    body: "Difficulty finding reliable workforce with guaranteed quality.",
  },
  {
    icon: Clock,
    title: "Time waste and stress",
    body: "Spending weekends solving problems instead of enjoying life.",
  },
];

const COMPARE_APLUS = [
  {
    icon: ShieldCheck,
    title: "Smart preventive maintenance",
    body: "We anticipate problems and solve them before they become expensive emergencies.",
  },
  {
    icon: Heart,
    title: "Long-term relationship",
    body: "One trusted company for all your property care needs.",
  },
  {
    icon: Award,
    title: "Specialized and certified team",
    body: "Qualified professionals with quality guarantee on all services.",
  },
  {
    icon: DollarSign,
    title: "Constant property appreciation",
    body: "Investment that pays for itself: your property always valued and protected.",
  },
];

const ABOUT_STATS = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Clock, value: "12+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Satisfaction Guaranteed" },
];

const WHY_US = [
  "Free estimate with no commitment",
  "Certified and insured professionals",
  "Personalized service for each client",
  "Quality guarantee on all services",
  "Long-term relationship",
];

export default function HomePage() {
  return (
    <>
      {/* HERO — photo background + glassmorphic form */}
      <section className="hero-bg relative">
        <div className="container-narrow relative px-5 pt-20 pb-24 md:pt-28 md:pb-32 grid gap-12 md:grid-cols-[1.1fr_1fr] items-center">
          <div className="text-white">
            <h1 className="font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Your Home Cared,
              <br />
              <span className="text-brand-red">Your Life Free</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
              {BRAND.name} is the residential care company that frees you from daily worries,
              keeping your property always valued and protected in Miami.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand-red px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-red-hover shadow-lg shadow-brand-red/30 transition-all"
              >
                Schedule Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-white/80 px-6 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-brand-navy transition-all"
              >
                Explore Services
              </a>
            </div>
            <p className="mt-5 text-sm text-white/80">
              Or call us now at{" "}
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="font-bold text-white underline underline-offset-4 decoration-brand-red decoration-2 hover:text-brand-red transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>

            {/* Hero stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {STATS.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Glassmorphic form floating on the photo */}
          <div className="glass-card rounded-2xl p-7 md:p-8 text-white">
            <h2 className="text-2xl font-bold">Request a Free Assessment</h2>
            <p className="mt-1.5 text-sm text-white/75">
              We&apos;ll call within 1 business day.
            </p>
            <div className="mt-6">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-5xl text-brand-text">
              Compare: Traditional Way vs <span className="text-brand-red">APLUS</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              See the difference between constantly worrying about your home and living peacefully.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-brand-red-soft p-7">
              <h3 className="font-bold text-2xl text-brand-red text-center">The Old Way</h3>
              <ul className="mt-6 space-y-5">
                {COMPARE_OLD.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-red-tint">
                      <Icon className="h-4 w-4 text-brand-red" aria-hidden />
                    </span>
                    <div>
                      <div className="font-semibold text-brand-text">{title}</div>
                      <div className="text-sm text-brand-red/85">{body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-green-soft p-7">
              <h3 className="font-bold text-2xl text-brand-green text-center">The APLUS Way</h3>
              <ul className="mt-6 space-y-5">
                {COMPARE_APLUS.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-green-tint">
                      <Icon className="h-4 w-4 text-brand-green" aria-hidden />
                    </span>
                    <div>
                      <div className="font-semibold text-brand-text">{title}</div>
                      <div className="text-sm text-brand-green/85">{body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-brand-bg-cool">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-5xl text-brand-text">
              Our <span className="text-brand-red">Services</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              We offer a complete range of services to keep your property always in perfect
              condition.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOMEPAGE_SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] || Wrench;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition-shadow text-center"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-bold text-lg text-brand-text">{s.name}</h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">{s.body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-left">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-brand-text/80">
                        <CheckCircle2 className="h-4 w-4 text-brand-red flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-5xl text-brand-text">
              Subscription <span className="text-brand-red">Plans</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              Choose the plan that best fits your property&apos;s needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-brand-bg-cool">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-5xl text-brand-text">
              About <span className="text-brand-red">APLUS</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-5 text-brand-text/85 leading-relaxed">
              <p>
                APLUS Property Care was born from the real need of Miami property owners seeking a
                reliable and complete solution for maintaining their properties.
              </p>
              <p>
                Founded in Miami, we grew understanding the particularities of the Florida market
                and the specific needs of owners who value quality and peace of mind.
              </p>
              <p>
                Today, we are a reference in residential care, offering everything from preventive
                maintenance to specialized services, always committed to preserving and enhancing
                your asset value.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {ABOUT_STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white border border-brand-line p-5 text-center shadow-sm"
                >
                  <Icon className="mx-auto h-6 w-6 text-brand-red" aria-hidden />
                  <div className="mt-3 text-2xl md:text-3xl font-bold text-brand-text">{value}</div>
                  <div className="mt-1 text-xs text-brand-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Anderson + Trusted by */}
          <div className="mt-16">
            <h3 className="font-bold text-2xl text-center text-brand-text">Our Team</h3>

            <div className="mt-10 grid gap-8 md:grid-cols-3 items-stretch">
              {/* Anderson card */}
              {TEAM.map((t) => {
                const initials = t.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2);
                return (
                  <div
                    key={t.slug}
                    className="rounded-2xl bg-white border border-brand-line p-7 text-center shadow-sm flex flex-col"
                  >
                    <div className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20">
                      <span className="font-bold text-2xl">{initials}</span>
                    </div>
                    <div className="mt-5 font-bold text-lg text-brand-text">{t.name}</div>
                    <div className="text-xs uppercase tracking-wider text-brand-red font-semibold mt-1">
                      {t.role}
                    </div>
                    <p className="mt-3 text-sm text-brand-muted leading-relaxed flex-1">
                      {t.bio}
                    </p>
                  </div>
                );
              })}

              {/* Trusted by — fills the 2 missing team columns */}
              <div className="md:col-span-2 rounded-2xl bg-white border border-brand-line p-7 shadow-sm flex flex-col">
                <div className="text-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
                    Trusted by
                  </span>
                  <h4 className="mt-2 font-bold text-xl text-brand-text">
                    Some of Miami&apos;s most demanding clients
                  </h4>
                </div>
                <div className="mt-6 flex-1 flex items-center">
                  <div className="w-full">
                    <ClientsGrid columns={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl md:text-5xl text-brand-text">
              Get in <span className="text-brand-red">Touch</span>
            </h2>
            <p className="mt-4 text-brand-muted">
              Ready to have more free time and a home that&apos;s always cared for? Contact us and
              discover how we can help you.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-start">
            <div className="rounded-2xl bg-white border border-brand-line p-7 shadow-sm">
              <h3 className="font-bold text-xl text-brand-text">Request a Free Assessment</h3>
              <p className="mt-1 text-sm text-brand-muted">
                Fill out the form and our team will contact you to schedule a visit.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href={`tel:${CONTACT.phone}`}
                data-event="phone_click"
                className="rounded-2xl bg-white border border-brand-line p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div className="mt-4 font-bold text-lg text-brand-text">Phone</div>
                <div className="mt-3 font-semibold text-brand-red">{CONTACT.phoneDisplay}</div>
                <div className="mt-1 text-xs text-brand-muted">Mon–Fri 9am–5pm</div>
              </a>

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="rounded-2xl bg-white border border-brand-line p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </span>
                <div className="mt-4 font-bold text-lg text-brand-text">WhatsApp</div>
                <div className="mt-3 font-semibold text-brand-red">{CONTACT.phoneDisplay}</div>
                <div className="mt-1 text-xs text-brand-muted">Quick and direct service</div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                data-event="email_click"
                className="rounded-2xl bg-white border border-brand-line p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div className="mt-4 font-bold text-lg text-brand-text">Email</div>
                <div className="mt-3 font-semibold text-brand-red text-sm break-all">
                  {CONTACT.email}
                </div>
                <div className="mt-1 text-xs text-brand-muted">Response within 24h</div>
              </a>

              <div className="rounded-2xl bg-white border border-brand-line p-6 shadow-sm text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/20">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div className="mt-4 font-bold text-lg text-brand-text">Location</div>
                <div className="mt-3 font-semibold text-brand-red">
                  {ADDRESS.locality}, {ADDRESS.region}
                </div>
                <div className="mt-1 text-xs text-brand-muted">We serve all Miami-Dade</div>
              </div>

              {/* Business Hours card — navy accent */}
              <div className="rounded-2xl bg-brand-navy text-white p-6 shadow-md sm:col-span-2 text-center">
                <Clock className="mx-auto h-6 w-6 text-white/85" aria-hidden />
                <div className="mt-3 font-bold text-lg">Business Hours</div>
                <div className="mt-3 text-sm text-white/85">
                  Monday – Friday · 9:00 AM – 5:00 PM
                </div>
                <div className="text-sm text-white/85">Saturday · 9:00 AM – 3:00 PM</div>
              </div>

              {/* Why choose us */}
              <div className="rounded-2xl bg-white border border-brand-line p-6 shadow-sm sm:col-span-2">
                <h3 className="font-bold text-lg text-brand-text">Why choose us?</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-text/85">
                  {WHY_US.map((w) => (
                    <li key={w} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-red flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
