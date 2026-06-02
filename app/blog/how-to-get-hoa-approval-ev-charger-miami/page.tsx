import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, FileText, Shield, Zap } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { POSTS_BY_SLUG, readingMinutes } from "@/lib/content/blog";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const SLUG = "how-to-get-hoa-approval-ev-charger-miami";
const post = POSTS_BY_SLUG[SLUG];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${SLUG}`) },
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    url: absoluteUrl(`/blog/${SLUG}`),
  },
};

export default function HOAEVChargerApprovalPost() {
  const url = absoluteUrl(`/blog/${SLUG}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      name: post.author,
      logo: { "@type": "ImageObject", url: absoluteUrl("/aplus-logo.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
    citation: [
      { "@type": "CreativeWork", name: "Florida Statute 718.113(9)", url: "https://www.flsenate.gov/Laws/Statutes/2023/718.113" },
      { "@type": "CreativeWork", name: "Florida Statute 720.317", url: "https://www.flsenate.gov/Laws/Statutes/2023/720.317" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get HOA or Condo Board Approval for an EV Charger in Miami",
    description:
      "Step-by-step process to obtain board approval for a Level 2 EV charger installation in a Miami condo or HOA community under Florida law.",
    totalTime: "P60D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Confirm your legal rights under Florida Statute 718.113 or 720.317",
        text: "Condo owners are protected by Florida Statute 718.113(9). HOA community members are protected by Florida Statute 720.317. Both prohibit blanket bans and require the association to consider requests in good faith. Know your rights before submitting anything.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Get a licensed electrician to prepare an installation plan",
        text: "Most boards require a formal installation plan from a licensed Florida electrician before they will vote. The plan shows the circuit route, panel impact (available amperage, breaker slot), conduit path, charger mounting location, and weatherproofing details.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Prepare your HOA proposal package",
        text: "Your proposal package should include: (1) the electrician's installation plan, (2) the charger specs/cut sheet, (3) your contractor's liability insurance certificate, (4) your written agreement to cover all costs and future maintenance, (5) photos of the proposed installation location.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Submit before the board meeting deadline",
        text: "Most condo boards have a submission deadline 7-14 days before the monthly board meeting. Submit your complete package to the property manager by email with read receipt. Keep copies of everything.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Attend the board meeting or send a representative",
        text: "Be present to answer questions. Common board concerns: electrical load impact on the building, who pays for conduit repairs if it fails, and aesthetics. A professional installation plan preempts most of these.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Obtain written approval and apply for permit",
        text: "Once approved in writing, your licensed electrician applies for the Miami-Dade electrical permit. The permit requires the board approval letter as part of the application for condo/HOA installations.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faq || [])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Blog", url: absoluteUrl("/blog") },
              { name: post.shortTitle || post.title, url },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <section className="bg-brand-navy text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="container-narrow relative px-5 py-16 md:py-20">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
            {" / "}
            <span className="text-white/80">HOA EV Charger Approval</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-semibold uppercase tracking-widest bg-white/10 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>June 1, 2026</span>
            <span>·</span>
            <span>{readingMinutes(post.wordCount)} min read</span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="section bg-white">
        <div className="container-narrow max-w-3xl">
          <div className="prose-content space-y-6 text-brand-text/85 leading-relaxed text-lg">

            <p className="text-xl leading-relaxed">
              If you own an EV and live in a Miami condo or HOA community, you have the legal right to install a Level 2 charger — but you still need board approval. Here is exactly how the process works, what Florida law says, and how to get your proposal approved on the first try.
            </p>

            {/* QUICK ANSWER */}
            <aside aria-label="Quick Answer" className="my-8 rounded-xl border-2 border-brand-red/30 bg-brand-red/5 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">Quick Answer</p>
              <p className="font-bold text-brand-text text-lg leading-snug mb-2">
                Florida law gives condo and HOA owners the right to install EV chargers. Boards cannot say no outright — they can only set reasonable conditions.
              </p>
              <ul className="mt-3 space-y-1 text-base text-brand-text/80">
                <li>⚡ Condos: protected by Florida Statute 718.113(9)</li>
                <li>⚡ HOA communities: protected by Florida Statute 720.317</li>
                <li>⚡ Typical approval timeline: 30–60 days</li>
                <li>⚡ Key doc boards require: licensed electrician installation plan</li>
              </ul>
            </aside>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">What Florida law says</h2>
            <p>
              <strong>For condo owners:</strong> Florida Statute 718.113(9) explicitly protects condo unit owners who want to install EV charging equipment in their designated parking space or exclusive use area. The association cannot unreasonably prohibit this, and any blanket ban on EV chargers is unenforceable.
            </p>
            <p>
              <strong>For HOA communities</strong> (single-family homes, townhomes): Florida Statute 720.317 provides similar protection. The HOA can impose reasonable restrictions on installation — location, aesthetics, conduit routing — but cannot simply say no.
            </p>
            <p>
              What this means practically: you are not asking for permission, you are notifying the board of a right and providing the documentation they need to process the installation safely.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">What Miami boards typically require</h2>
            <p>Based on approvals we have navigated in Miami Beach and Brickell buildings, most condo boards require:</p>
            <ul className="space-y-3 mt-4">
              {[
                { icon: FileText, text: "Licensed Florida electrician's installation plan (circuit route, panel impact, conduit path, charger specs)" },
                { icon: Shield, text: "Contractor's certificate of liability insurance (typically $1M general liability minimum)" },
                { icon: FileText, text: "Written agreement that the owner covers all installation costs and future maintenance" },
                { icon: Zap, text: "Charger manufacturer cut sheet showing electrical specs (voltage, amperage, ENERGY STAR certification)" },
                { icon: FileText, text: "Photos or drawing of the proposed installation location" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" aria-hidden />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">Step-by-step: the approval process</h2>

            {[
              {
                n: 1,
                title: "Know your rights",
                body: "Before submitting anything, confirm which statute applies to your building type. Print the relevant statute section and keep it handy — if the board pushes back, cite it directly.",
              },
              {
                n: 2,
                title: "Get an installation plan from a licensed electrician",
                body: "This is the single most important document. The plan should show: available panel amperage and breaker slot location, proposed 240V/50A circuit route, conduit path from panel to parking space, charger mounting location and weatherproofing. APLUS provides this as part of our EV installation service.",
              },
              {
                n: 3,
                title: "Assemble your proposal package",
                body: "Combine the installation plan, charger specs, insurance certificate, and your written cost agreement. Include photos of the proposed location. A clean, professional-looking package signals to the board that this is a low-risk approval.",
              },
              {
                n: 4,
                title: "Submit before the board meeting deadline",
                body: "Most condo boards have a submission deadline 7–14 days before the monthly meeting. Email the package to the property manager with a read receipt. Keep copies of every communication — including the date you submitted.",
              },
              {
                n: 5,
                title: "Attend the board meeting",
                body: "Show up or send a representative. Common board questions: 'What if the conduit damages the building later?' (your agreement covers it) and 'Will this affect the building's electrical load?' (the installation plan addresses this). A licensed electrician who can attend is a significant advantage.",
              },
              {
                n: 6,
                title: "Get written approval and pull the permit",
                body: "Once approved, get the decision in writing (meeting minutes or email). Your electrician then applies for the Miami-Dade electrical permit — which requires the board approval documentation for condo and HOA installs.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 mt-6">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-red text-white font-bold text-sm flex items-center justify-center">{step.n}</span>
                <div>
                  <h3 className="font-bold text-lg text-brand-text">{step.title}</h3>
                  <p className="mt-1 text-brand-text/80">{step.body}</p>
                </div>
              </div>
            ))}

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">Timeline expectations</h2>
            <ul className="space-y-2.5">
              {[
                { label: "Electrician assessment + plan:", value: "3–5 business days" },
                { label: "Proposal package assembly:", value: "1–2 days" },
                { label: "Board submission to decision:", value: "30–60 days (1–2 board meetings)" },
                { label: "Miami-Dade permit processing:", value: "5–10 business days after approval" },
                { label: "Installation day:", value: "3–6 hours for standard install" },
                { label: "FPL coordination (if panel upgrade needed):", value: "Additional 1–2 weeks" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span><strong className="text-brand-text">{item.label}</strong> {item.value}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl text-brand-text mt-12">Common board objections — and how to answer them</h2>
            <div className="space-y-4 mt-4">
              {[
                {
                  q: '"We cannot approve modifications to the building\'s electrical system."',
                  a: "Florida Statute 718.113(9) supersedes this position. The statute explicitly protects this right. A blanket refusal is not legally defensible.",
                },
                {
                  q: '"What if the installation damages common elements?"',
                  a: "Your written agreement covers this explicitly. Include language stating you accept all liability for installation and future maintenance. This is standard in every approval we have helped facilitate.",
                },
                {
                  q: '"We need our engineer to review this first."',
                  a: "Reasonable — and expected in larger buildings. Provide the licensed electrician plan and offer to pay the building engineer's review fee (usually $200–$500). This shows good faith and typically speeds up the process.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-brand-bg-cool p-5">
                  <p className="font-semibold text-brand-text italic">{item.q}</p>
                  <p className="mt-2 text-brand-text/80">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="section bg-brand-bg-cool border-t border-brand-line">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-bold text-3xl text-brand-text text-center">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {(post.faq || []).map((item, i) => (
              <details key={i} className="group rounded-2xl border border-brand-line bg-white p-6 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-brand-text">
                  <span>{item.q}</span>
                  <span className="ml-4 text-brand-red text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-brand-text/85 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-navy text-white">
        <div className="container-narrow text-center max-w-2xl">
          <h2 className="font-bold text-3xl md:text-4xl">Need help with HOA approval?</h2>
          <p className="mt-4 text-white/80">
            APLUS prepares the full proposal package for your board — installation plan, panel assessment, insurance docs. We have navigated condo approvals in Miami Beach, Brickell, and Coral Gables.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${CONTACT.phone}`}
              data-event="phone_click"
              className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-red/90 transition-colors"
            >
              Call (305) 495-7980
            </a>
            <Link
              href="/lp/ev"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
            >
              Get EV charger quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
