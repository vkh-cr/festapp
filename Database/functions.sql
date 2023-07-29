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


-- Example: enable the "http" extension
create extension http with schema extensions;

--drop function send_email_mailersend;
CREATE OR REPLACE FUNCTION send_email_mailersend (message JSONB, subs JSONB)
  RETURNS json
  LANGUAGE plpgsql
  SECURITY DEFINER -- required in order to read keys in the private schema
  -- Set a secure search_path: trusted schema(s), then 'pg_temp'.
  -- SET search_path = admin, pg_temp;
  AS $$
DECLARE
  retval json;
  MAILERSEND_API_TOKEN text;
BEGIN
  SELECT value::text INTO MAILERSEND_API_TOKEN FROM private_keys WHERE key = 'MAILERSEND_API_TOKEN';
  IF NOT found THEN RAISE 'missing entry in private_keys: MAILERSEND_API_TOKEN'; END IF;

    SELECT
        * INTO retval
    FROM
        http
        ((
            'POST',
            'https://api.mailersend.com/v1/email',
            ARRAY[http_header ('Authorization',
            'Bearer ' || MAILERSEND_API_TOKEN
            ), http_header ('X-Requested-With', 'XMLHttpRequest')],
            'application/json',
            json_build_object(
                  'to', json_build_array(
                    json_build_object(
                      'email', message->>'recipient'
                    )
                  ),
                  'template_id', message->>'template_id',
                  'reply_to', json_build_array(
                    json_build_object(
                      'email', message->>'recipient',
                      'name', 'AV23'
                    )
                  ),
                  'variables', json_build_array(
                    json_build_object(
                      'email', message->>'recipient',
                      'substitutions', subs
                    )
                  )
            )::text

        ));

        IF retval::text = '202' THEN
          RAISE NOTICE 'message sent with mailersend: %',retval;
        ELSE
          RAISE 'error sending message with mailersend: %',retval;
        END IF;

  RETURN retval;
END;
$$;
