import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { POSTS, readingMinutes } from "@/lib/content/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Miami Home Maintenance & EV Charger Insights",
  description:
    "Practical guides on home maintenance, EV charger installation, and property care for Miami homeowners — from the team at APLUS Property Care.",
  alternates: { canonical: absoluteUrl("/blog") },
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Blog", url: absoluteUrl("/blog") },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <section className="bg-brand-navy text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl"
        />
        <div className="container-narrow relative px-5 py-20 md:py-24 text-center">
          <nav className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Practical guides for <span className="text-brand-red">Miami homes</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            Real answers to the questions Miami homeowners actually ask us — written by the team
            doing the work.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="section bg-white">
        <div className="container-narrow max-w-4xl">
          <div className="grid gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl bg-white border border-brand-line p-7 hover:border-brand-red/40 hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {readingMinutes(post.wordCount)} min read
                  </span>
                  <span className="text-brand-red font-semibold uppercase tracking-wider">
                    {post.tags[0]}
                  </span>
                </div>
                <h2 className="mt-4 font-bold text-2xl text-brand-text group-hover:text-brand-red transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-brand-muted leading-relaxed">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {POSTS.length < 3 && (
            <p className="mt-12 text-center text-sm text-brand-muted">
              More guides coming soon — bookmark this page or follow us on Nextdoor.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
