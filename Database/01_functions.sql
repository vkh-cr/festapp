-- Create a function to upsert record in event_user table
-- Check if event_table doesnt have more records with event_id than is in table event in column max_participants
-- If it is more return false, otherwise return true
-- Make whole function transaction
create
or replace function upsert_event_user (event_id integer, user_id uuid) returns integer language plpgsql as $$
declare
  i_max_participants integer;
  current_participants integer;
  event_group_count integer;
  event_group integer;
  exclusive_event_count integer;
  already_in_count integer;
  current_men_participants integer;
  current_women_participants integer;
  b_split_for_men_women boolean;
  is_current_user_male boolean;

begin

  if CURRENT_TIMESTAMP AT TIME ZONE 'UTC' < '2023-08-10 07:00:00' then
    return 104;
  end if;

  select count(*) from event_users eu where eu.event = event_id and eu."user" = user_id into already_in_count;
  if already_in_count > 0 then
    return 103;
  end if;

  select count(*) from exclusive_events where event = event_id into event_group_count;
  if event_group_count > 0 then
    select "group" from exclusive_events where event = event_id into event_group;
    select count(*) from exclusive_events ee join event_users eu on ee.event = eu.event
    where ee."group" = event_group and eu."user" = user_id into exclusive_event_count;
    if exclusive_event_count > 0 then
      return 102;
    end if;
  end if;

  -- Check if event_table doesnt have more records with event_id than is in table event in column max_participants
  select max_participants from events where id = event_id into i_max_participants;
  select split_for_men_women from events where id = event_id into b_split_for_men_women;

  if b_split_for_men_women then
    select exists (select sex from user_info where id = user_id and sex = 'male') into is_current_user_male;
    select count(*) from event_users eu join user_info ei on eu."user" = ei.id where event = upsert_event_user.event_id and ei.sex = 'male' into current_men_participants;
    select count(*) from event_users eu join user_info ei on eu."user" = ei.id where event = upsert_event_user.event_id and ei.sex <> 'male' into current_women_participants;
    if is_current_user_male and current_men_participants >= (i_max_participants / 2) then
      return 105;
    elsif not is_current_user_male and current_women_participants >= (i_max_participants / 2) then
      return 106;
    end if;
  end if;

  select count(*) from event_users where event = upsert_event_user.event_id into current_participants;

  select count(*) from event_users where event = upsert_event_user.event_id into current_participants;
  if current_participants >= i_max_participants then
    -- If it is more return false
    return 101;
  else
    -- otherwise return true
    insert into event_users (event, "user") values (event_id, user_id);
    return 100;
  end if;
end;
$$;

--100 ok
--101 full
--102 exclusive already taken
--103 already signed in
--104 not time yet
--105 enough male
--106 enough female



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


CREATE OR REPLACE FUNCTION get_last_sign_in_at(user_id uuid)
RETURNS timestamp with time zone
SECURITY definer
AS $$
BEGIN
  RETURN (SELECT au.last_sign_in_at FROM auth.users au WHERE au.id = user_id);
END;
$$ LANGUAGE plpgsql;