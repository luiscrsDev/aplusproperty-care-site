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
  Star,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { BRAND, PLANS, SERVICE_AREA, TEAM, ADDRESS, HOURS_DISPLAY } from "@/lib/constants";
import { PlanCard } from "@/components/PlanCard";
import { ContactForm } from "@/components/ContactForm";
import { ContactBar, PhoneLink, WhatsAppLink } from "@/components/ContactLinks";
import { ClientsGrid } from "@/components/Clients";
import { Button } from "@/components/ui/Button";

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
  { slug: "preventive-maintenance", name: "Preventive Maintenance", body: "Recurring inspections that catch small issues before they become emergencies." },
  { slug: "ev-charger-installation", name: "EV Charger Installation", body: "Level 2 home charger install for Tesla, ChargePoint, Wallbox — Miami-Dade permitted." },
  { slug: "plumbing", name: "Plumbing Services", body: "Leaks, fixtures, water heaters, drain cleaning by licensed plumbers." },
  { slug: "electrical", name: "Electrical Services", body: "Panel upgrades, outlets, lighting, smart home wiring by licensed electricians." },
  { slug: "hvac", name: "HVAC", body: "AC and heating maintenance, repairs, and installation for the Florida climate." },
  { slug: "painting", name: "Painting & Finishes", body: "Interior and exterior painting, drywall repair, finishing carpentry." },
  { slug: "landscaping", name: "Landscaping & Gardening", body: "Lawn, irrigation, plants, and outdoor maintenance." },
  { slug: "furniture-transport", name: "Furniture & Art Transport", body: "Careful transport and placement of furniture and artwork." },
];

const COMPARE_OLD = [
  { icon: AlertTriangle, title: "Reactive and costly", body: "Waiting for problems then paying premium for emergency repairs." },
  { icon: DollarSign, title: "Constant devaluation", body: "Small problems become big headaches and reduce property value." },
  { icon: HardHat, title: "Unqualified pros", body: "Difficulty finding reliable workforce with quality guarantees." },
  { icon: Clock, title: "Time and stress", body: "Spending weekends solving problems instead of enjoying life." },
];

const COMPARE_APLUS = [
  { icon: ShieldCheck, title: "Smart preventive maintenance", body: "We anticipate problems and solve them before they become expensive emergencies." },
  { icon: Heart, title: "Long-term relationship", body: "One trusted company for all your property care needs." },
  { icon: Star, title: "Specialized & certified", body: "Qualified professionals with quality guarantee on all services." },
  { icon: DollarSign, title: "Property appreciation", body: "Investment that pays for itself: your property always valued and protected." },
];

const VALUES = [
  "Punctuality and respect for your home",
  "Quality guarantee on every service",
  "Transparent pricing — no surprises",
  "Single point of contact for everything",
];

export default function HomePage() {
  return (
    <>
      {/* HERO — warm navy + red gradient */}
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        {/* subtle decorative bars */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-red via-brand-red-deep to-transparent"
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl"
        />

        <div className="container-narrow relative px-5 pt-20 pb-24 md:pt-28 md:pb-32 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden />
              Home Maintenance · {SERVICE_AREA.primary}
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Your home cared,{" "}
              <span className="italic text-brand-red-glow">your life free.</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl leading-relaxed">
              Preventive home maintenance and EV charger installation across Miami. Three
              subscription plans, certified technicians, fast response — no more weekends lost to
              surprise repairs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#contact" size="lg" variant="primary">
                Request Free Assessment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                as="a"
                href="/maintenance-plans"
                size="lg"
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white shadow-none"
              >
                See Plans
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85">
              <a
                href="tel:+13054957980"
                data-event="phone_click"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red-glow" aria-hidden /> (305) 495-7980
              </a>
              <a
                href="https://wa.me/13054957980?text=Hi%20APLUS"
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red-glow" aria-hidden /> WhatsApp
              </a>
              <span className="inline-flex items-center gap-2 text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden /> {HOURS_DISPLAY}
              </span>
            </div>
          </div>

          {/* Floating featured plan */}
          <div className="relative md:justify-self-end">
            <div
              aria-hidden
              className="absolute -top-6 -left-6 h-20 w-20 rounded-2xl bg-brand-red/20 blur-2xl"
            />
            <div className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-7 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Most chosen
                </span>
                <span className="rounded-full bg-brand-red px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider">
                  Premium
                </span>
              </div>
              <div className="mt-3 font-display text-3xl">Premium Plan</div>
              <div className="text-white/70 text-sm">For medium and large homes</div>
              <div className="mt-7 flex items-baseline gap-1">
                <span className="font-display text-5xl">$399</span>
                <span className="text-white/65 text-sm">/month</span>
              </div>
              <p className="mt-1 text-white/80 text-sm">2 visits per month · 24/7 support</p>

              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li className="flex gap-2">
                  <span className="text-brand-red-glow">✓</span> Complete preventive maintenance
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red-glow">✓</span> Detailed report each visit
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red-glow">✓</span> 3 emergency calls included
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red-glow">✓</span> Small repairs included
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-7 block rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-red-deep shadow-lg shadow-brand-red/30 transition-all"
              >
                Start Premium →
              </a>
            </div>
          </div>
        </div>

        {/* hero bottom bevel */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-navy-deep text-brand-cream/90 border-y border-brand-red/30">
        <div className="container-narrow px-5 py-5 grid gap-3 md:grid-cols-4 text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red-glow" aria-hidden /> Licensed
            &amp; insured
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red-glow" aria-hidden /> Miami-Dade
            local team
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red-glow" aria-hidden /> 15+ years
            experience
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red-glow" aria-hidden /> Certified
            technicians
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="section">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
              The difference
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-brand-navy brand-underline">
              Traditional way <span className="text-brand-red">vs</span> APLUS
            </h2>
            <p className="mt-8 text-brand-muted">
              See the difference between constantly worrying about your home and living peacefully.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-red/15 bg-brand-red-soft p-7">
              <h3 className="font-display text-2xl text-brand-red text-center">The Old Way</h3>
              <ul className="mt-6 space-y-5">
                {COMPARE_OLD.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <div className="font-semibold text-brand-text">{title}</div>
                      <div className="text-sm text-brand-muted">{body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-navy text-white p-7 shadow-xl shadow-brand-navy/20">
              <h3 className="font-display text-2xl text-center">
                The <span className="text-brand-red-glow">APLUS</span> Way
              </h3>
              <ul className="mt-6 space-y-5">
                {COMPARE_APLUS.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-brand-red-glow flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm text-white/75">{body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-white border-y border-brand-line">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
              What we do
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-brand-navy brand-underline">
              Our <span className="text-brand-red">Services</span>
            </h2>
            <p className="mt-8 text-brand-muted">
              A complete range of services to keep your property always in perfect condition.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {HOMEPAGE_SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] || Wrench;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative rounded-2xl border border-brand-line bg-white p-6 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-red/5 hover:-translate-y-0.5 transition-all"
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-6 h-0.5 w-10 bg-brand-red rounded-b opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-brand-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section bg-brand-gradient-soft">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
              Plans
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-brand-navy brand-underline">
              Subscription <span className="text-brand-red">Plans</span>
            </h2>
            <p className="mt-8 text-brand-muted">
              Three plans engineered for Miami homes — from apartments to luxury estates.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3 items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/maintenance-plans"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
            >
              Compare plans in detail <ArrowRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-white border-y border-brand-line">
        <div className="container-narrow grid gap-8 md:grid-cols-5 items-stretch">
          {/* Story — flex column so the closing quote sits at the bottom */}
          <div className="md:col-span-2 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
              Our story
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-brand-navy">About APLUS</h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              We started APLUS Property Care because we kept seeing the same pattern in Miami: home
              owners stressed by surprise repairs, calling new contractors every time, never knowing
              who to trust. So we built a single team you can rely on year after year.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brand-text">
              {VALUES.map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden />
                  {v}
                </li>
              ))}
            </ul>
            <blockquote className="mt-auto pt-8">
              <div className="rounded-2xl border-l-4 border-brand-red bg-brand-cream/60 px-5 py-4">
                <p className="font-display italic text-brand-navy leading-snug">
                  &ldquo;One team that already knows your home — instead of calling a new
                  contractor every time something goes wrong.&rdquo;
                </p>
              </div>
            </blockquote>
          </div>

          {/* Anderson — card stretches the full row height */}
          <div className="md:col-span-1 flex">
            {TEAM.map((t) => (
              <div
                key={t.slug}
                className="flex flex-col w-full rounded-2xl border border-brand-line bg-brand-cream p-5 hover:border-brand-red/30 transition-colors"
              >
                <div
                  className="aspect-square rounded-xl bg-gradient-to-br from-brand-navy/15 via-brand-navy/8 to-brand-red/15"
                  aria-hidden
                />
                <div className="mt-4 font-display text-lg text-brand-navy">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-brand-red font-semibold">
                  {t.role}
                </div>
                <p className="mt-2 text-sm text-brand-muted">{t.bio}</p>
                <div className="mt-auto pt-4 border-t border-brand-line/60 text-[11px] uppercase tracking-wider text-brand-muted">
                  Licensed · Insured · Florida
                </div>
              </div>
            ))}
          </div>

          {/* Trusted by — flex column so the logo card grows to match */}
          <div className="md:col-span-2 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
              Trusted by
            </span>
            <h3 className="mt-2 font-display text-xl text-brand-navy">
              Some of Miami&apos;s most demanding clients
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              From luxury hospitality to nationwide automotive groups.
            </p>
            <div className="mt-6 flex-1 rounded-2xl border border-brand-line bg-white p-5 shadow-sm flex items-center">
              <div className="w-full">
                <ClientsGrid columns={2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-brand-gradient-soft">
        <div className="container-narrow grid gap-10 md:grid-cols-2 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
              Talk to us
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-brand-navy">
              Get in <span className="text-brand-red">Touch</span>
            </h2>
            <p className="mt-3 text-brand-muted max-w-md leading-relaxed">
              Tell us about your home and we&apos;ll send a free assessment. No pressure, no spam —
              just a real conversation about whether APLUS is right for you.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-muted">Phone</div>
                <PhoneLink className="mt-1 text-lg font-semibold !text-brand-navy hover:!text-brand-red" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-muted">WhatsApp</div>
                <WhatsAppLink
                  className="mt-1 text-lg font-semibold !text-brand-navy hover:!text-brand-red"
                  label="Chat with us"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-muted">Location</div>
                <div className="mt-1 text-base">{ADDRESS.formatted}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-muted">Hours</div>
                <div className="mt-1 text-base">{HOURS_DISPLAY}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-line bg-white p-7 shadow-lg shadow-brand-navy/5">
            <h3 className="font-display text-xl text-brand-navy">Request a Free Assessment</h3>
            <p className="mt-1 text-sm text-brand-muted">We&apos;ll call within 1 business day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
