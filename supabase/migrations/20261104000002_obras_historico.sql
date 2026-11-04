-- Histórico de alterações do Painel de Obra: gravado por trigger, só leitura para a equipe do projeto.
create table if not exists public.obra_historico (
  id bigserial primary key,
  projeto text not null,
  colecao text not null,
  doc_id text not null,
  acao text not null check (acao in ('criou','alterou','excluiu')),
  email text,
  antes jsonb,
  depois jsonb,
  em timestamptz not null default now()
);
create index if not exists obra_historico_proj_idx on public.obra_historico(projeto, em desc);
create index if not exists obra_historico_doc_idx on public.obra_historico(projeto, colecao, doc_id, em desc);

alter table public.obra_historico enable row level security;
create policy obra_historico_ler on public.obra_historico for select to authenticated using (public.obra_pode_editar(projeto));

create or replace function public.obra_registrar_historico() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  v_email text := nullif(lower(coalesce(auth.jwt() ->> 'email','')), '');
  v_proj text; v_col text; v_id text;
begin
  if TG_TABLE_NAME = 'obra_docs' then
    if TG_OP = 'DELETE' then v_proj := old.projeto; v_col := old.colecao; v_id := old.id;
    else v_proj := new.projeto; v_col := new.colecao; v_id := new.id; end if;
  else
    if TG_OP = 'DELETE' then v_proj := old.id; else v_proj := new.id; end if;
    v_col := '_projeto'; v_id := v_proj;
  end if;
  if TG_OP = 'INSERT' then
    insert into public.obra_historico(projeto,colecao,doc_id,acao,email,antes,depois) values (v_proj,v_col,v_id,'criou',v_email,null,new.data);
  elsif TG_OP = 'UPDATE' then
    if (old.data - 'updatedAt') is distinct from (new.data - 'updatedAt') then
      insert into public.obra_historico(projeto,colecao,doc_id,acao,email,antes,depois) values (v_proj,v_col,v_id,'alterou',v_email,old.data,new.data);
    end if;
  else
    insert into public.obra_historico(projeto,colecao,doc_id,acao,email,antes,depois) values (v_proj,v_col,v_id,'excluiu',v_email,old.data,null);
  end if;
  if TG_OP = 'DELETE' then return old; end if;
  return new;
end $$;
revoke execute on function public.obra_registrar_historico() from public, anon, authenticated;

drop trigger if exists trg_obra_docs_historico on public.obra_docs;
create trigger trg_obra_docs_historico after insert or update or delete on public.obra_docs
  for each row execute function public.obra_registrar_historico();
drop trigger if exists trg_obra_projetos_historico on public.obra_projetos;
create trigger trg_obra_projetos_historico after insert or update or delete on public.obra_projetos
  for each row execute function public.obra_registrar_historico();
