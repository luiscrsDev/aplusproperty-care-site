-- Diário de obra: aceita PDF além de fotos; limite de 25 MB por arquivo.
update storage.buckets
set allowed_mime_types = array['image/jpeg','image/png','image/webp','image/heic','image/heif','application/pdf'],
    file_size_limit = 26214400
where id = 'obra-fotos';
