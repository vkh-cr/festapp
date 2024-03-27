--DROP FUNCTION get_is_event_allowed
CREATE OR REPLACE FUNCTION get_is_event_allowed(ev bigint) RETURNS bool
    LANGUAGE "plpgsql" STABLE
    SECURITY DEFINER
    AS $$
    DECLARE
        userRole bigint;
        eventRoles bigint[];
    BEGIN
        eventRoles := ARRAY(select
          role
          from
            event_roles
          where
            event_roles.event = ev);

        IF coalesce(cardinality(eventRoles), 0) = 0 THEN
            RETURN true;
        END IF;

        select
          role
        into userRole
        from
          occasion_users
        where
          "user" = auth.uid() and
          occasion = (select occasion from events where events.id = ev);

        IF userRole IS NULL THEN
            RETURN false;
        END IF;
        RETURN (SELECT userRole = ANY(eventRoles));
    END;
$$;

CREATE OR REPLACE FUNCTION check_occasion_link(link_txt text) RETURNS jsonb
LANGUAGE plpgsql STABLE
SECURITY DEFINER
AS $$
DECLARE
    occasionId bigint;
    is_open_bool BOOLEAN;
    occasion_user occasion_users%rowtype;
    occasion_link TEXT;
BEGIN
    IF link_txt = '' THEN
        SELECT link INTO link_txt FROM occasions WHERE occasions.is_open = true AND occasions.is_hidden = false LIMIT 1;
        --RETURN json_build_object('code', 404, 'link', occasion_link);
    END IF;
    SELECT id INTO occasionId FROM occasions WHERE occasions.link = link_txt AND occasions.is_hidden = false;
    IF occasionId is NULL THEN
        RETURN json_build_object('code', 404);
    END IF;
    SELECT is_open INTO is_open_bool FROM occasions WHERE occasions.link = link_txt;
    SELECT * INTO occasion_user FROM occasion_users WHERE occasion = (SELECT id FROM occasions WHERE occasions.link = link_txt) AND "user" = auth.uid();
    IF is_open_bool = FALSE THEN
        IF auth.uid() IS NULL THEN
            RETURN json_build_object('code', 403);
        END IF;
        IF occasion_user IS NULL THEN
            RETURN json_build_object('code', 403);
        END IF;
        RETURN json_build_object('code', 200, 'occasion_user', row_to_json(occasion_user)::jsonb, 'occasion', occasionId);
    END IF;
    IF occasion_user IS NULL THEN
         RETURN json_build_object('code', 200, 'link', link_txt, 'occasion', occasionId);
    END IF;
    RETURN json_build_object('code', 200, 'occasion_user', row_to_json(occasion_user)::jsonb, 'link', link_txt, 'occasion', occasionId);
END;
$$;

CREATE OR REPLACE FUNCTION update_user(usr uuid, oc bigint, data jsonb) RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    existingInfo jsonb;
    _key   text;
    _value text;
    usr_info user_info%rowtype;
BEGIN
    IF (select get_is_manager_on_occasion(oc)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403);
    END IF;
    IF (select get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
         RETURN jsonb_build_object('code', 403);
    END IF;

    select * into usr_info from user_info where id = usr;
    IF usr_info is NULL THEN
       INSERT INTO user_info (id, email_readonly, name, surname, sex) VALUES (usr, '', '', '', '');
       select * into usr_info from user_info where id = usr;
    END IF;

    FOR _key, _value IN
        SELECT * FROM jsonb_each_text(data)
    LOOP
        usr_info.data := jsonb_set(usr_info.data, array[_key], to_jsonb(_value));
        IF _key = 'name' THEN
          UPDATE user_info SET name = _value where id = usr;
        ELSIF _key = 'surname' THEN
          UPDATE user_info SET surname = _value where id = usr;
       ELSIF _key = 'email' THEN
          UPDATE user_info SET email_readonly = _value where id = usr;
        ELSIF _key = 'sex' THEN
          UPDATE user_info SET sex = _value where id = usr;
        END IF;
    END LOOP;

    UPDATE user_info SET data = usr_info.data where id = usr;
    RETURN jsonb_build_object('code', 200);
END;
$$;