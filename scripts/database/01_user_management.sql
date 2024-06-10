CREATE OR REPLACE FUNCTION set_user_password(usr uuid, oc bigint, password text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
  declare
  encrypted_pw text;
BEGIN
    IF (select get_is_manager_on_occasion(oc)) <> TRUE THEN
        RETURN NULL;
    END IF;

    IF (select get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
       RETURN NULL;
    END IF;

    encrypted_pw := crypt(password, gen_salt('bf'));

    UPDATE auth.users
    SET encrypted_password = encrypted_pw
    WHERE auth.users.id = usr;
    RETURN usr;
END;
$$;


CREATE OR REPLACE FUNCTION set_user_password_token(token uuid, password text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
#variable_conflict use_variable
  declare
  user_id uuid;
  email text;
  encrypted_pw text;
BEGIN
    SELECT "user" INTO user_id FROM user_reset_token WHERE user_reset_token.token = token;
    IF user_id is NULL THEN
        RETURN json_build_object('code', 403);
    END IF;

    DELETE FROM user_reset_token WHERE "user" = user_id;

    encrypted_pw := crypt(password, gen_salt('bf'));

    UPDATE auth.users
    SET encrypted_password = encrypted_pw
    WHERE auth.users.id = user_id;

    SELECT email_readonly INTO email FROM user_info WHERE user_info.id = user_id;
    IF email is NULL THEN
        RETURN json_build_object('code', 404);
    END IF;

    RETURN json_build_object('code', 200, 'email', email);
END;
$$;


CREATE OR REPLACE FUNCTION update_user(usr uuid, oc bigint, data jsonb)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    _key   text;
    _value text;
    usr_info user_info%rowtype;
BEGIN
    -- Check if the caller is a manager for the occasion
    IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Check if the user exists for the occasion
    IF (SELECT get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
         RETURN jsonb_build_object('code', 403);
    END IF;

    -- Retrieve user information
    SELECT * INTO usr_info FROM user_info WHERE id = usr;

    -- If the user does not exist, insert a new user record
    IF usr_info IS NULL THEN
        RETURN jsonb_build_object('code', 404);
    END IF;

    -- Initialize usr_info.data if it is null
    IF usr_info.data IS NULL THEN
        usr_info.data := '{}'::jsonb;
    END IF;

    -- Merge the input data with existing usr_info.data
    usr_info.data := usr_info.data || data;

    -- Update individual columns if they are part of the input JSON data
    IF usr_info.data ? 'name' THEN
        UPDATE user_info SET name = usr_info.data->>'name' WHERE id = usr;
    END IF;
    IF usr_info.data ? 'surname' THEN
        UPDATE user_info SET surname = usr_info.data->>'surname' WHERE id = usr;
    END IF;
    IF usr_info.data ? 'sex' THEN
        UPDATE user_info SET sex = usr_info.data->>'sex' WHERE id = usr;
    END IF;

    -- Update the user_info data column with the modified JSON data
    UPDATE user_info SET data = usr_info.data WHERE id = usr;

    -- Return a success code
    RETURN jsonb_build_object('code', 200);
END;
$$;

CREATE OR REPLACE FUNCTION delete_user(usr uuid, oc bigint)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$

BEGIN
    -- Check if the current user has a record in user_companions where companion = usr
    IF NOT EXISTS (SELECT 1 FROM user_companions WHERE "user" = auth.uid() AND companion = usr) THEN
        IF (select get_is_manager_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
        IF (select get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
             RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    UPDATE user_group_info SET leader = null where leader = usr;
    DELETE FROM user_groups WHERE "user" = usr;
    DELETE FROM event_users WHERE "user" = usr;
    DELETE FROM user_news WHERE "user" = usr;
    DELETE FROM event_users_saved WHERE "user" = usr;
    DELETE FROM occasion_users WHERE "user" = usr;
    DELETE FROM user_reset_token WHERE "user" = usr;
    DELETE FROM user_companions WHERE "user" = usr;
    DELETE FROM user_companions WHERE companion = usr;
    DELETE FROM user_info WHERE id = usr;
    DELETE FROM auth.identities WHERE id = usr;
    DELETE FROM auth.users WHERE id = usr;
    RETURN jsonb_build_object('code', 200);
END;
$$;

CREATE OR REPLACE FUNCTION add_user_to_occasion(oc BIGINT, usr UUID)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    occasion_open BOOLEAN;
    user_data JSONB;
    user_exists BOOLEAN;
BEGIN
    -- Check if the occasion is open
    SELECT is_open INTO occasion_open
    FROM occasions
    WHERE id = oc;

    -- If the occasion is not open, raise an exception
    IF NOT occasion_open THEN
        IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    -- Retrieve user info and create JSON data, merging with existing data
    SELECT COALESCE(ui.data, '{}'::jsonb) || jsonb_build_object(
        'name', ui.name,
        'surname', ui.surname,
        'sex', ui.sex,
        'email', ui.email_readonly
    ) INTO user_data
    FROM user_info ui
    WHERE ui.id = usr;

    -- Check if the user already exists in the occasion_users table
    SELECT EXISTS (
                SELECT 1
                FROM occasion_users
                WHERE occasion = oc AND "user" = usr
            ) INTO user_exists;

    -- If the user already exists, update the existing row
    IF user_exists THEN
        UPDATE occasion_users
        SET
            data = user_data
        WHERE occasion = oc AND "user" = usr;
    ELSE
        -- Insert a new row into occasion_users
        INSERT INTO occasion_users (
            occasion,
            "user",
            created_at,
            is_editor,
            is_manager,
            is_approved,
            is_approver,
            data,
            role
        )
        VALUES (
            oc,
            usr,
            now(),  -- Set the created_at timestamp to the current time
            FALSE,  -- Default value for is_editor
            FALSE,  -- Default value for is_manager
            FALSE,  -- Default value for is_approved
            FALSE,  -- Default value for is_approver
            user_data, -- Combined user info as JSON data
            NULL   -- Default value for role (null)
        );
    END IF;

    -- Return success code
    RETURN jsonb_build_object('code', 200);
END;
$$;


CREATE OR REPLACE FUNCTION create_companion(oc BIGINT, usr UUID, c_name TEXT)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    new_companion UUID;
    user_email TEXT;
    user_name TEXT;
    user_surname TEXT;
    companion_email TEXT;
    max_companions INT;
    current_companions INT;
BEGIN

    -- Retrieve max_companions from the occasions table
    SELECT COALESCE((data->>'max_companions')::INT, 0) INTO max_companions
    FROM public.occasions
    WHERE id = oc;

    -- Count current companions for the user on the occasion
    SELECT COUNT(*)
    INTO current_companions
    FROM public.user_companions
    WHERE "user" = usr AND companion IN (SELECT "user" FROM occasion_users WHERE occasion = oc);

    -- Check if the current companions exceed max_companions
    IF current_companions >= max_companions THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    SELECT email_readonly, name, surname INTO user_email, user_name, user_surname
            FROM public.user_info
            WHERE id = usr;
        companion_email :=  user_email || '+' || oc || '+' || c_name;

    new_companion := create_user_with_data(oc, companion_email, '', jsonb_build_object('name', c_name, 'email', companion_email));

    INSERT INTO public.user_companions ("user", companion)
    VALUES (usr, new_companion);

    RETURN jsonb_build_object('code', 200);
END;
$$;


CREATE OR REPLACE FUNCTION get_user_companions_data ()
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    companions jsonb;
BEGIN
    -- Aggregate companion data into JSONB format
    SELECT jsonb_agg(
        jsonb_build_object(
            'id', ui.id,
            'name', ui.name,
            'event_ids', (
                SELECT jsonb_agg(eu.event)
                FROM public.event_users eu
                WHERE eu."user" = ui.id
            )
        )
    ) INTO companions
    FROM public.user_companions uc
    JOIN public.user_info ui ON uc.companion = ui.id
    WHERE uc."user"::text = auth.uid()::TEXT;

    -- If no companions are found, return an empty array
    IF companions IS NULL THEN
        companions := '[]'::jsonb;
    END IF;

    -- Return the companions data with a code of 200
    RETURN jsonb_build_object('code', 200, 'data', companions);
END;
$$;

CREATE OR REPLACE FUNCTION create_user_with_data(oc bigint, email text, password text, data jsonb)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
  declare
  occasion_open BOOLEAN;
  usr uuid;
  encrypted_pw text;
  user_meta_data jsonb;
  _key   text;
  _value text;
  usr_info user_info%rowtype;
BEGIN
    -- Trim and lower the email input
    email := lower(trim(email));

    -- Trim all values in the data JSONB object
    FOR _key, _value IN
        SELECT key, trim(value) FROM jsonb_each_text(data)
    LOOP
        data := jsonb_set(data, array[_key], to_jsonb(_value));
    END LOOP;

    -- Check if the occasion is open
    SELECT is_open INTO occasion_open
    FROM occasions
    WHERE id = oc;

    -- If the occasion is not open, raise an exception
    IF NOT occasion_open THEN
        IF (select get_is_manager_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    usr := gen_random_uuid();
    encrypted_pw := crypt(password, gen_salt('bf'));

    user_meta_data := NULL;

    INSERT INTO auth.users
      (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
    VALUES
      ('00000000-0000-0000-0000-000000000000', usr, 'authenticated', 'authenticated', email, encrypted_pw, now(), NULL, NULL, '{"provider":"email","providers":["email"]}', user_meta_data, now(), now(), '', '', '', '');

    INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    VALUES
      (gen_random_uuid(), usr, usr, format('{"sub":"%s","email":"%s"}', usr::text, email)::jsonb, 'email', NULL, now(), now());

    --update user_info
    INSERT INTO user_info (id, email_readonly, name, surname, sex) VALUES (usr, '', '', '', '');
    select * into usr_info from user_info where id = usr;

    --Initialize usr_info.data
    usr_info.data := '{}'::jsonb;

    FOR _key, _value IN
        SELECT * FROM jsonb_each_text(data)
    LOOP
        usr_info.data := jsonb_set(usr_info.data, array[_key], to_jsonb(_value));
        IF _key = 'name' THEN
          UPDATE user_info SET name = _value where id = usr;
        ELSIF _key = 'surname' THEN
          UPDATE user_info SET surname = _value where id = usr;
        ELSIF _key = 'sex' THEN
          UPDATE user_info SET sex = _value where id = usr;
        END IF;
    END LOOP;

    UPDATE user_info SET data = usr_info.data where id = usr;
    UPDATE user_info SET email_readonly = email where id = usr;

    PERFORM add_user_to_occasion(oc, usr);

    RETURN usr;
END;
$$;