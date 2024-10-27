CREATE OR REPLACE FUNCTION create_user_with_data(oc bigint, email text, password text, data jsonb)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_open BOOLEAN;
    usr uuid;
    encrypted_pw text;
    user_meta_data jsonb := '{}';
    _key   text;
    _value text;
    trimmed_data jsonb := '{}';
BEGIN
    -- Trim and lower the email input
    email := lower(trim(email));

    -- Trim all values in the data JSONB object and build a new trimmed_data JSONB object
    FOR _key, _value IN
        SELECT key, value FROM jsonb_each_text(data)
    LOOP
        IF _value IS NOT NULL THEN
            trimmed_data := jsonb_set(trimmed_data, array[_key], to_jsonb(trim(_value)), true);
        ELSE
            trimmed_data := jsonb_set(trimmed_data, array[_key], 'null'::jsonb, true);
        END IF;
    END LOOP;

    -- Check if the occasion is open
    SELECT is_open INTO occasion_open
    FROM occasions
    WHERE id = oc;

    IF NOT occasion_open THEN
        IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE OR (SELECT get_is_admin_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    usr := gen_random_uuid();
    encrypted_pw := crypt(password, gen_salt('bf'));

    INSERT INTO auth.users
      (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
    VALUES
      ('00000000-0000-0000-0000-000000000000', usr, 'authenticated', 'authenticated', email, encrypted_pw, now(), NULL, NULL,
      '{"provider":"email","providers":["email"]}', user_meta_data, now(), now(), '', '', '', '');

    INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    VALUES
      (gen_random_uuid(), usr, usr, format('{"sub":"%s","email":"%s"}', usr::text, email)::jsonb, 'email', NULL, now(), now());

    -- Insert into user_info ensuring non-null values from trimmed_data JSONB
    INSERT INTO user_info (id, email_readonly, name, surname, sex, data)
    VALUES (usr, email, COALESCE(trimmed_data->>'name', ''), COALESCE(trimmed_data->>'surname', ''), COALESCE(trimmed_data->>'sex', ''), trimmed_data);

    PERFORM add_user_to_occasion(oc, usr);

    RETURN usr;
END;
$$;