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
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_marketing_leads_status on marketing_leads(status);
create index if not exists idx_marketing_leads_created on marketing_leads(created_at desc);

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
