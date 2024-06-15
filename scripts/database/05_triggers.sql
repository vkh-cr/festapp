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