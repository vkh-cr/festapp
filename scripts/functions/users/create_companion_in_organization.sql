CREATE OR REPLACE FUNCTION create_companion_in_organization(
    org BIGINT,
    oc BIGINT,
    usr UUID,
    c_name TEXT
)
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
    -- Retrieve max_companions from the occasions.features JSON array
    SELECT COALESCE(
        (
            SELECT (feature->>'max_companions')::INT
            FROM jsonb_array_elements(features) AS feature
            WHERE feature->>'code' = 'companions'
            LIMIT 1
        ),
        0
    )
    INTO max_companions
    FROM public.occasions
    WHERE id = oc;

    -- Count current companions for the user on the occasion
    SELECT COUNT(*)
    INTO current_companions
    FROM public.user_companions
    WHERE "user" = usr
      AND companion IN (SELECT "user" FROM occasion_users WHERE occasion = oc);

    -- Check if the current number of companions has reached (or exceeded) max_companions
    IF current_companions >= max_companions THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Retrieve user email, name, and surname
    SELECT email_readonly, name, surname
    INTO user_email, user_name, user_surname
    FROM public.user_info
    WHERE id = usr;

    -- Construct companion email with occasion ID and companion name
    companion_email := user_email || '+' || c_name;

    -- Create a new companion user UUID
    new_companion := gen_random_uuid();

    -- Insert into auth.users with the email prefixed with the organization identifier
    INSERT INTO auth.users (
      instance_id, id, aud, role, email, encrypted_password,
      email_confirmed_at, recovery_sent_at, last_sign_in_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, email_change, email_change_token_new, recovery_token
    )
    VALUES (
      '00000000-0000-0000-0000-000000000000',
      new_companion,
      'authenticated',
      'authenticated',
      format('%s+%s', org, companion_email),
      '',
      now(),
      NULL,
      NULL,
      '{"provider":"email","providers":["email"]}',
      NULL,
      now(),
      now(),
      '',
      '',
      '',
      ''
    );

    -- Insert into auth.identities with the email prefixed with the organization identifier
    INSERT INTO auth.identities (
      id, provider_id, user_id, identity_data, provider,
      last_sign_in_at, created_at, updated_at
    )
    VALUES (
      gen_random_uuid(),
      new_companion,
      new_companion,
      format('{"sub":"%s","email":"%s"}', new_companion::text, format('%s+%s', org, companion_email))::jsonb,
      'email',
      NULL,
      now(),
      now()
    );

    -- Insert into user_info
    INSERT INTO user_info (id, email_readonly, name, organization)
    VALUES (new_companion, companion_email, c_name, org);

    -- Add the new companion user to the occasion
    PERFORM add_user_to_occasion(oc, new_companion);

    -- Insert into user_companions table to link the user with the companion
    INSERT INTO public.user_companions ("user", companion)
    VALUES (usr, new_companion);

    RETURN jsonb_build_object('code', 200);
END;
$$;
