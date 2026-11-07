-- Fotos do Diário de obra: bucket privado; a primeira pasta do caminho é o id do projeto.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('obra-fotos', 'obra-fotos', false, 10485760, array['image/jpeg','image/png','image/webp','image/heic','image/heif'])
on conflict (id) do nothing;

create policy obra_fotos_ler on storage.objects for select to authenticated
  using (bucket_id = 'obra-fotos' and public.obra_pode_ler((storage.foldername(name))[1]));
create policy obra_fotos_enviar on storage.objects for insert to authenticated
  with check (bucket_id = 'obra-fotos' and public.obra_pode_editar((storage.foldername(name))[1]));
create policy obra_fotos_excluir on storage.objects for delete to authenticated
  using (bucket_id = 'obra-fotos' and public.obra_pode_editar((storage.foldername(name))[1]));
