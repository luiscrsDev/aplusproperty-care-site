import type { Metadata } from "next";

import { BRAND, CONTACT } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy — APLUS Property Care",
  description:
    "How APLUS Property Care collects, uses, and protects your personal information when you use our website and services.",
  alternates: { canonical: absoluteUrl("/privacy") },
};

export default function PrivacyPage() {
  const lastUpdated = "June 5, 2026";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Privacy Policy", url: absoluteUrl("/privacy") },
            ]),
          ),
        }}
      />

      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-white/70 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-5 py-12 md:py-16 prose prose-slate prose-headings:text-brand-navy prose-a:text-brand-red">
        <p>
          {BRAND.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates the website{" "}
          <a href={BRAND.url}>{BRAND.url.replace("https://", "")}</a>. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          When you fill out our contact form or request a free assessment, we
          collect:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Property address</li>
          <li>Service interest and message details</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain
          information about your device and usage, including:
        </p>
        <ul>
          <li>IP address and approximate location</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring website or search terms</li>
          <li>
            Marketing attribution data (UTM parameters, click identifiers) to
            understand how you found us
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and service requests</li>
          <li>Provide, maintain, and improve our services</li>
          <li>Send you service-related communications</li>
          <li>
            Analyze website traffic and marketing effectiveness to improve our
            online presence
          </li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li>
            <strong>Google Analytics &amp; Google Tag Manager</strong> — to
            understand how visitors use our website. Google may collect data
            about your browsing via cookies. You can opt out at{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </li>
          <li>
            <strong>Google Ads</strong> — to measure the effectiveness of our
            advertising campaigns using conversion tracking.
          </li>
          <li>
            <strong>Supabase</strong> — to securely store form submissions and
            lead data.
          </li>
          <li>
            <strong>Resend</strong> — to send transactional emails (e.g.,
            confirmations after you submit a contact form).
          </li>
        </ul>
        <p>
          These services have their own privacy policies governing how they
          handle your data.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website uses cookies and similar tracking technologies through
          Google Tag Manager and Google Analytics. These cookies help us analyze
          website traffic and understand user behavior. You can control cookies
          through your browser settings.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes described in this policy, or as required by law.
          Contact form submissions are retained to manage our service
          relationships.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your personal information. However, no method of transmission
          over the Internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website and services are not directed at individuals under the age
          of 18. We do not knowingly collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be indicated by the &quot;Last updated&quot; date at the
          top of this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
          <li>
            Phone:{" "}
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
          </li>
        </ul>
      </article>
    </>
  );
}
