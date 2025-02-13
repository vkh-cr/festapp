CREATE OR REPLACE FUNCTION create_user_in_organization_with_data(org bigint, email text, password text, data jsonb)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    is_registration_enabled BOOLEAN;
    usr uuid;
    encrypted_pw text;
    user_meta_data jsonb := '{}';
    _key   text;
    _value text;
    trimmed_data jsonb := '{}';
    original_email text;
BEGIN
    -- Trim and lower the email input
    original_email := lower(trim(email));

    -- Add organization prefix to the email for auth tables
    email := format('%s+%s', org, original_email);

    -- Retrieve IS_REGISTRATION_ENABLED value from organizations.data JSON
    SELECT (organizations.data->>'IS_REGISTRATION_ENABLED')::boolean
      INTO is_registration_enabled
    FROM organizations
    WHERE id = org;

    -- Check if registration is enabled OR if the caller is a manager on any occasion
    -- OR if the caller is an editor on at least one unit associated with an occasion in this organization.
    IF NOT is_registration_enabled AND NOT (
           get_is_manager_on_any_occasion()
           OR EXISTS (
               SELECT 1
               FROM occasions o
               WHERE o.organization = org
                 AND get_is_editor_on_unit(o.unit)
           )
       ) THEN
        RETURN jsonb_build_object('code', 403, 'error', 'Registration is disabled for this organization');
    END IF;

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

    usr := gen_random_uuid();
    encrypted_pw := crypt(password, gen_salt('bf'));

    -- Insert into auth.users with the email prefixed with organization
    INSERT INTO auth.users
      (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
    VALUES
      ('00000000-0000-0000-0000-000000000000', usr, 'authenticated', 'authenticated', email, encrypted_pw, now(), NULL, NULL,
      '{"provider":"email","providers":["email"]}', user_meta_data, now(), now(), '', '', '', '');

    -- Insert into auth.identities with the email prefixed with organization
    INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    VALUES
      (gen_random_uuid(), usr, usr, format('{"sub":"%s","email":"%s"}', usr::text, email)::jsonb, 'email', NULL, now(), now());

    -- Insert into user_info with the original email (without prefix)
    INSERT INTO user_info (id, email_readonly, name, surname, sex, data, organization)
    VALUES (usr, original_email, COALESCE(trimmed_data->>'name', ''), COALESCE(trimmed_data->>'surname', ''), COALESCE(trimmed_data->>'sex', ''), trimmed_data, org);

    RETURN usr;
END;
$$;
