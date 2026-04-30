# aplusproperty.care

Marketing site for **APLUS Property Care** — Miami home maintenance + EV charger installation.

Replaces the Lovable single-page version with a real Next.js App Router site so we can ship per-service pages, geo pages, blog content, and proper SEO infrastructure (sitemap, schema, indexable URLs).

## Stack

- Next.js 16 App Router (RSC by default, statically rendered marketing pages)
- Tailwind 4 (CSS-first config in `app/globals.css`)
- TypeScript strict
- Supabase — leads land in the existing Aplus PRO `service_requests` table
- Resend — transactional email to the team when a lead arrives
- GTM container `GTM-K4KM9GZW` + GA4 `G-XFN3B6VRV3` (already provisioned)

## Local development

```bash
cp .env.example .env.local   # fill in Supabase + Resend keys
npm install
npm run dev                   # http://localhost:3000
```

## Conventions

- **All NAP (name/address/phone) data lives in `lib/constants.ts`.** Schema, footer, header, contact bar all read from there. Never hard-code.
- **All structured data goes through `lib/schema.ts` builders** (LocalBusiness, Service, FAQPage, BreadcrumbList).
- **Phone / WhatsApp / Email are real `<a>` tags** via `components/ContactLinks.tsx`. The Lovable site used `<button onClick>`, which broke the `tel:` / `wa.me` GTM triggers — never repeat that mistake.
- **Marketing pages render at build time** unless they need fresh data. Keep them static for SEO and CDN cacheability.

## Routes (v1)

| Path | Status |
|---|---|
| `/` | done |
| `/maintenance-plans` | day 2 |
| `/maintenance-plans/{essential,premium,vip}` | day 2 |
| `/services/ev-charger-installation` | day 2 (flagship copy) |
| `/services/[slug]` | day 2 (template + 7 stubs) |
| `/areas/doral` | day 3 |
| `/sitemap.xml` | done (auto via `app/sitemap.ts`) |
| `/robots.txt` | done (auto via `app/robots.ts`) |
| `/api/contact` | done |
