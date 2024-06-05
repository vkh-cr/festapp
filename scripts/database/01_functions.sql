create or replace function sign_user_to_event (ev bigint, usr uuid) returns jsonb
 language plpgsql
 SECURITY DEFINER
 as $$
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

  events_registration_start TIMESTAMP;
  event_start_time TIMESTAMP;
  event_end_time TIMESTAMP;
  e RECORD;

begin

  -- Existing checks for occasion user and editor
  IF (SELECT get_exists_on_occasion_user(usr, (SELECT occasion FROM events WHERE id = ev))) <> TRUE THEN
      RETURN json_build_object('code', 403);
  END IF;

  IF auth.uid() <> usr THEN
      IF NOT EXISTS (
        SELECT 1 FROM user_companions WHERE "user" = auth.uid() AND companion = usr) THEN
          IF (SELECT get_is_editor_on_occasion((SELECT occasion FROM events WHERE id = ev))) <> TRUE THEN
            RETURN json_build_object('code', 403);
          END IF;
      END IF;
  END IF;

  SELECT (data->>'events_registration_start')::timestamp INTO events_registration_start
  FROM occasions
  WHERE id = (select occasion from events where events.id = ev);

  if CURRENT_TIMESTAMP AT TIME ZONE 'UTC' < events_registration_start then
    RETURN json_build_object(
      'code', 104,
      'events_registration_start', events_registration_start AT TIME ZONE 'UTC');
  end if;

  SELECT start_time, end_time INTO event_start_time, event_end_time
  FROM events
  WHERE id = ev;

  if CURRENT_TIMESTAMP AT TIME ZONE 'UTC' > event_end_time then
    RETURN json_build_object('code', 100);
  end if;

  select count(*) from event_users eu where eu.event = ev and eu."user" = usr into already_in_count;
  if already_in_count > 0 then
    RETURN json_build_object('code', 103);
  end if;

  select count(*) from exclusive_events where event = ev into event_group_count;
  if event_group_count > 0 then
    select "group" from exclusive_events where event = ev into event_group;
    select count(*) from exclusive_events ee join event_users eu on ee.event = eu.event
    where ee."group" = event_group and eu."user" = usr into exclusive_event_count;
    if exclusive_event_count > 0 then
      RETURN json_build_object('code', 102);
    end if;
  end if;

  -- Check if event_table doesnt have more records with ev than is in table event in column max_participants
  select max_participants from events where id = ev into i_max_participants;
  select split_for_men_women from events where id = ev into b_split_for_men_women;

  if b_split_for_men_women then
    select exists (select sex from user_info where id = usr and sex = 'male') into is_current_user_male;
    select count(*) from event_users eu join user_info ei on eu."user" = ei.id where event = ev and ei.sex = 'male' into current_men_participants;
    select count(*) from event_users eu join user_info ei on eu."user" = ei.id where event = ev and ei.sex <> 'male' into current_women_participants;
    if is_current_user_male and current_men_participants >= (i_max_participants / 2) then
      RETURN json_build_object('code', 105);
    elsif not is_current_user_male and current_women_participants >= (i_max_participants / 2) then
      RETURN json_build_object('code', 106);
    end if;
  end if;

  -- Loop through user_events to check for conflicts
  FOR e IN
      SELECT events.id, events.start_time, events.end_time
      FROM events
      JOIN event_users ON events.id = event_users.event
      WHERE event_users."user" = usr
  LOOP
      IF ((e.start_time < event_end_time AND e.start_time > event_start_time) OR
          (e.end_time < event_end_time AND e.end_time > event_start_time) OR
          (e.start_time = event_start_time) OR
          (e.end_time = event_end_time)) THEN
          RETURN json_build_object('code', 107);
      END IF;
  END LOOP;


  select count(*) from event_users where event = ev into current_participants;

  select count(*) from event_users where event = ev into current_participants;
  if current_participants >= i_max_participants then
    -- If it is more return false
    RETURN json_build_object('code', 101);
  else
    -- otherwise return true
    insert into event_users (event, "user") values (ev, usr);
    RETURN json_build_object('code', 200);
  end if;
end;
$$;

--200 ok
--100 event is over
--101 full
--102 exclusive already taken
--103 already signed in
--104 not time yet
--105 enough male
--106 enough female
--107 conflicting event


CREATE OR REPLACE FUNCTION sign_user_out_of_event(ev BIGINT, usr UUID)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    event_end_time TIMESTAMP;
BEGIN
    -- Existing checks for occasion user and editor
    IF (SELECT get_exists_on_occasion_user(usr, (SELECT occasion FROM events WHERE id = ev))) <> TRUE THEN
        RETURN json_build_object('code', 403);
    END IF;

    IF auth.uid() <> usr THEN
        IF NOT EXISTS (
            SELECT 1 FROM user_companions WHERE "user" = auth.uid() AND companion = usr ) THEN
            IF (SELECT get_is_editor_on_occasion((SELECT occasion FROM events WHERE id = ev))) <> TRUE THEN
                    RETURN json_build_object('code', 403);
            END IF;
        END IF;
    END IF;

    -- Check if the user is signed in to the event
    IF (SELECT COUNT(*) FROM event_users WHERE event = ev AND "user" = usr) = 0 THEN
        RETURN json_build_object('code', 404, 'message', 'User is not signed into this event');
    END IF;

    -- Retrieve event end time
    SELECT end_time INTO event_end_time
    FROM events
    WHERE id = ev;

    -- Check if the event has already ended
    IF CURRENT_TIMESTAMP AT TIME ZONE 'UTC' > event_end_time THEN
        RETURN json_build_object('code', 201, 'message', 'Cannot sign out after the event has ended');
    END IF;

    -- Remove the user from the event
    DELETE FROM event_users WHERE event = ev AND "user" = usr;
    RETURN json_build_object('code', 200, 'message', 'User signed out successfully');
END;
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


CREATE OR REPLACE FUNCTION get_last_sign_in_at(user_id uuid)
RETURNS timestamp with time zone
SECURITY definer
AS $$
BEGIN
  RETURN (SELECT au.last_sign_in_at FROM auth.users au WHERE au.id = user_id);
END;
$$ LANGUAGE plpgsql;