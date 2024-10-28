--03 enable webhooks in supabase dashboard

--https://supabase.com/partners/integrations/onesignal
--correct address
create trigger push_log_notifications
after insert on log_notifications for each row
execute function supabase_functions.http_request (
'https://kjdpmixlnhntmxjedpxh.supabase.co/functions/v1/notify',
'POST',
'{"Content-type":"application/json"}',
'{}',
'1000'
);

--enable moddatetime extension in supabase
create trigger handle_updated_at before update on public.events
  for each row execute procedure moddatetime (updated_at);
create trigger handle_updated_at before update on public.places
  for each row execute procedure moddatetime (updated_at);
create trigger handle_updated_at before update on public.news
  for each row execute procedure moddatetime (updated_at);
create trigger handle_updated_at before update on public.information
  for each row execute procedure moddatetime (updated_at);
create trigger handle_updated_at before update on public.user_info
  for each row execute procedure moddatetime (updated_at);
create trigger handle_updated_at before update on public.occasions
    for each row execute procedure moddatetime (updated_at);
create trigger handle_updated_at before update on public.icons
    for each row execute procedure moddatetime (updated_at);