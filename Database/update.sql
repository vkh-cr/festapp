-- Create a function to upsert record in event_user table
-- Check if event_table doesnt have more records with event than is in table event in column max_participants
-- If it is more return false, otherwise return true
-- Make whole function transaction
create
or replace function upsert_event_user (event_id integer, user_id text) returns boolean language plpgsql as $$
declare
  i_max_participants integer;
  current_participants integer;
begin
  -- Check if event_table doesnt have more records with event than is in table event in column max_participants
  select max_participants from events where id = event_id into i_max_participants;
  select count(*) from event_users where event = upsert_event_user.event_id into current_participants;
  if current_participants >= i_max_participants then
    -- If it is more return false
    return false;
  else
    -- otherwise return true
    insert into event_users (event, email) values (event_id, user_id);
    return true;
  end if;
end;
$$;



CREATE OR REPLACE FUNCTION get_user_id_by_email(email TEXT)
RETURNS TABLE (id uuid)
SECURITY definer
AS $$
BEGIN
  RETURN QUERY SELECT au.id FROM auth.users au WHERE au.email = $1;
END;
$$ LANGUAGE plpgsql;