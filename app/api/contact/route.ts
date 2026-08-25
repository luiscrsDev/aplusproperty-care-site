import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(40),
  property: z.string().max(80).optional().default(""),
  service: z.string().max(120).optional().default(""),
  message: z.string().max(2000).optional().default(""),
  page: z.string().max(120).optional().default("/"),

  // Attribution fields — populated client-side from sessionStorage via
  // lib/utm.ts. All optional so direct visits without UTMs still validate.
  // Lets us trace each lead back to the Google Ads campaign / keyword that
  // brought them in (vs. relying only on Ads-side modeled attribution).
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  gclid: z.string().max(200).optional(),
  landing_page: z.string().max(400).optional(),
  referrer: z.string().max(400).optional(),
});

/**
 * Lead intake from the marketing site contact form.
 *
 * Persists to the same Aplus PRO Supabase instance (`service_requests` table)
 * so leads land directly in the admin queue Anderson already uses.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
  const lead = parsed.data;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  // Persist to the `marketing_leads` table (separate from service_requests so we
  // don't have to fabricate a client_id / category_id for an anonymous prospect).
  // Admin converts qualified leads into real users + service_requests inside Aplus PRO.
  //
  // Attribution fields (utm_*, gclid, landing_page, referrer) come from the
  // sessionStorage snapshot stored by lib/utm.ts — see schema above.
  // Track whether the lead actually landed somewhere. If every channel fails we
  // must NOT return ok — see the failure note at the end of this handler.
  let persisted = false;
  let notified = false;

  if (!supabaseUrl || !serviceKey) {
    console.error("[contact] Supabase env vars missing — lead will not be persisted");
  }

  if (supabaseUrl && serviceKey) {
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false },
    });
    const { error } = await supabase.from("marketing_leads").insert({
      source: "marketing-site",
      page: lead.page,
      contact_name: lead.name,
      contact_email: lead.email,
      contact_phone: lead.phone,
      property_type: lead.property || null,
      service_interest: lead.service || null,
      description: lead.message || null,
      status: "new",
      utm_source: lead.utm_source || null,
      utm_medium: lead.utm_medium || null,
      utm_campaign: lead.utm_campaign || null,
      utm_term: lead.utm_term || null,
      utm_content: lead.utm_content || null,
      gclid: lead.gclid || null,
      landing_page: lead.landing_page || null,
      referrer: lead.referrer || null,
    });
    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
    } else {
      persisted = true;
    }
  }

  // Notify the team.
  if (!resendKey) {
    console.error("[contact] RESEND_API_KEY missing — no notification will be sent");
  }

  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const to = process.env.RESEND_LEAD_NOTIFICATION_TO?.split(",").map((s) => s.trim()) || [
        "anderson@aplusproperty.care",
      ];
      const { error: sendError } = await resend.emails.send({
        from: process.env.RESEND_FROM || "APLUS Lead <leads@aplusproperty.care>",
        to,
        subject: `New lead — ${lead.name} (${lead.service || "general"})`,
        html: leadEmailHtml(lead),
      });
      // The Resend SDK reports API-level rejections (unverified domain, invalid
      // recipient) in the response body, not as a thrown error. Without this
      // check a rejected send looked identical to a successful one.
      if (sendError) {
        console.error("[contact] Resend rejected the send:", sendError.message);
      } else {
        notified = true;
      }
    } catch (e) {
      console.error("[contact] Resend send failed:", (e as Error).message);
    }
  }

  /**
   * If neither channel worked, the lead is gone — and returning ok here is what
   * made that invisible. The client fires the `form_submit` dataLayer event on
   * `res.ok`, which Google Ads counts as a conversion. So a silent failure
   * produced a reported conversion with no lead behind it: 42 conversions
   * against 3 delivered leads over one month.
   *
   * Failing loudly costs one bounced submission and surfaces the outage. The
   * previous behaviour cost a month of unattributable ad spend.
   */
  if (!persisted && !notified) {
    console.error("[contact] Lead lost — no channel succeeded", {
      email: lead.email,
      page: lead.page,
    });
    return NextResponse.json(
      { error: "We could not record your request. Please call us at (305) 495-7980." },
      { status: 502 },
    );
  }

  // Partial success is still a delivered lead, but worth knowing about.
  if (!persisted || !notified) {
    console.warn(
      `[contact] Partial delivery — persisted=${persisted} notified=${notified}`,
    );
  }

  return NextResponse.json({ ok: true });
}

function leadEmailHtml(lead: z.infer<typeof schema>) {
  // Build the attribution block only if at least one signal is present.
  const hasAttribution =
    lead.utm_source ||
    lead.utm_medium ||
    lead.utm_campaign ||
    lead.utm_term ||
    lead.utm_content ||
    lead.gclid ||
    lead.landing_page ||
    lead.referrer;

  const attributionBlock = hasAttribution
    ? `
      <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5">
      <h3 style="margin:0 0 8px 0;font-size:14px;color:#666">Attribution</h3>
      ${row("Source", lead.utm_source)}
      ${row("Medium", lead.utm_medium)}
      ${row("Campaign", lead.utm_campaign)}
      ${row("Keyword (utm_term)", lead.utm_term)}
      ${row("Ad content", lead.utm_content)}
      ${row("Google Click ID", lead.gclid)}
      ${row("Landing page", lead.landing_page)}
      ${row("Referrer", lead.referrer)}
    `
    : `
      <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5">
      <p style="color:#999;font-size:13px">
        <em>No attribution data — visitor came direct or with sessionStorage disabled.</em>
      </p>
    `;

  return `
    <h2>New lead from aplusproperty.care</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Property:</strong> ${escapeHtml(lead.property || "—")}</p>
    <p><strong>Service:</strong> ${escapeHtml(lead.service || "—")}</p>
    <p><strong>Submitted from page:</strong> ${escapeHtml(lead.page)}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(lead.message || "—")}</pre>
    ${attributionBlock}
  `;
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<p style="margin:4px 0;font-size:13px"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
