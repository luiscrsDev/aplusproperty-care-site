-- Marketing leads from the public website (aplusproperty.care).
--
-- Separate from `service_requests` because leads at this stage are anonymous
-- prospects (no user account, no category, no property record). The admin
-- converts a lead into a real client + service_request when they qualify.

create table if not exists marketing_leads (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'marketing-site',
  page text,
  contact_name text not null,
  contact_email text not null,
  contact_phone text not null,
  property_type text,
  service_interest text,
  description text,
  status text not null default 'new'  -- new | contacted | qualified | converted | discarded
    check (status in ('new','contacted','qualified','converted','discarded')),
  converted_user_id uuid references users(id) on delete set null,
  converted_request_id uuid references service_requests(id) on delete set null,
  notes text,

  -- Attribution (populated from sessionStorage by lib/utm.ts on the marketing
  -- site). Lets us trace each lead back to the Google Ads campaign / keyword
  -- that brought them in — vs. relying only on Ads-side modeled attribution
  -- which doesn't tell us *which* form submission came from *which* ad click.
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gclid text,
  landing_page text,
  referrer text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_marketing_leads_status on marketing_leads(status);
create index if not exists idx_marketing_leads_created on marketing_leads(created_at desc);
create index if not exists idx_marketing_leads_utm_campaign on marketing_leads(utm_campaign)
  where utm_campaign is not null;
create index if not exists idx_marketing_leads_gclid on marketing_leads(gclid)
  where gclid is not null;

-- RLS — only admins read/write
alter table marketing_leads enable row level security;

create policy "marketing_leads_admin_read"
  on marketing_leads for select
  using (
    exists (select 1 from users where users.id = auth.uid() and users.role = 'admin')
  );

create policy "marketing_leads_admin_write"
  on marketing_leads for all
  using (
    exists (select 1 from users where users.id = auth.uid() and users.role = 'admin')
  );

-- The marketing site posts via the service role key, which bypasses RLS.
-- No anon-write policy: prevents anyone from spamming the table directly via PostgREST.
