-- Painel de Obra APLUS (/obras e /cliente): projetos, registros e membros.
-- Tabelas novas e isoladas (prefixo obra_); não alteram nada do Aplus PRO.

create table if not exists public.obra_membros (
  email text not null,
  projeto text not null,              -- id do projeto, ou '*' para todos
  papel text not null check (papel in ('equipe','cliente')),
  criado_em timestamptz not null default now(),
  primary key (email, projeto)
);

create table if not exists public.obra_projetos (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.obra_docs (
  projeto text not null references public.obra_projetos(id) on delete cascade,
  colecao text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (projeto, colecao, id)
);
create index if not exists obra_docs_projeto_idx on public.obra_docs(projeto);

create or replace function public.obra_email() returns text
language sql stable as $$ select lower(coalesce(auth.jwt() ->> 'email','')) $$;

create or replace function public.obra_pode_ler(p text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.obra_membros m
    where lower(m.email) = public.obra_email() and (m.projeto = p or m.projeto = '*'))
$$;

create or replace function public.obra_pode_editar(p text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.obra_membros m
    where lower(m.email) = public.obra_email() and m.papel = 'equipe' and (m.projeto = p or m.projeto = '*'))
$$;

create or replace function public.obra_equipe_geral() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.obra_membros m
    where lower(m.email) = public.obra_email() and m.papel = 'equipe' and m.projeto = '*')
$$;

revoke all on function public.obra_pode_ler(text), public.obra_pode_editar(text), public.obra_equipe_geral() from anon;

alter table public.obra_membros enable row level security;
alter table public.obra_projetos enable row level security;
alter table public.obra_docs enable row level security;

-- Cada pessoa vê só as próprias linhas de acesso; a equipe geral vê todas. Membros são gerenciados pelo dashboard/SQL.
create policy obra_membros_ler on public.obra_membros for select to authenticated
  using (lower(email) = public.obra_email() or public.obra_equipe_geral());

create policy obra_projetos_ler on public.obra_projetos for select to authenticated using (public.obra_pode_ler(id));
create policy obra_projetos_criar on public.obra_projetos for insert to authenticated with check (public.obra_equipe_geral());
create policy obra_projetos_editar on public.obra_projetos for update to authenticated
  using (public.obra_pode_editar(id)) with check (public.obra_pode_editar(id));

create policy obra_docs_ler on public.obra_docs for select to authenticated using (public.obra_pode_ler(projeto));
create policy obra_docs_criar on public.obra_docs for insert to authenticated with check (public.obra_pode_editar(projeto));
create policy obra_docs_editar on public.obra_docs for update to authenticated
  using (public.obra_pode_editar(projeto)) with check (public.obra_pode_editar(projeto));
create policy obra_docs_excluir on public.obra_docs for delete to authenticated using (public.obra_pode_editar(projeto));

-- Tempo real
alter table public.obra_docs replica identity full;
alter table public.obra_projetos replica identity full;
alter publication supabase_realtime add table public.obra_docs;
alter publication supabase_realtime add table public.obra_projetos;
