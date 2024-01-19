CREATE OR REPLACE FUNCTION create_user(email text, password text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
  declare
  user_id uuid;
  encrypted_pw text;
  user_meta_data jsonb;
BEGIN
  IF NOT is_claims_admin() THEN
        RETURN '{"error":"access denied"}'::jsonb;
  ELSE
    user_id := gen_random_uuid();
    encrypted_pw := crypt(password, gen_salt('bf'));

    user_meta_data := NULL;

    INSERT INTO auth.users
      (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
    VALUES
      ('00000000-0000-0000-0000-000000000000', user_id, 'authenticated', 'authenticated', email, encrypted_pw, now(), NULL, NULL, '{"provider":"email","providers":["email"]}', user_meta_data, now(), now(), '', '', '', '');

-- for older projects
--    INSERT INTO auth.identities (id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
--    VALUES
--      (gen_random_uuid(), user_id, format('{"sub":"%s","email":"%s"}', user_id::text, email)::jsonb, 'email', NULL, now(), now());

    INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    VALUES
      (gen_random_uuid(), user_id, user_id, format('{"sub":"%s","email":"%s"}', user_id::text, email)::jsonb, 'email', NULL, now(), now());

    RETURN user_id;
  END IF;
END;
$$;


CREATE OR REPLACE FUNCTION set_user_password(user_email text, password text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
  declare
  user_id uuid;
  encrypted_pw text;
  user_meta_data jsonb;
BEGIN
  IF NOT is_claims_admin() THEN
        RETURN '{"error":"access denied"}'::jsonb;
  ELSE
    user_id := gen_random_uuid();
    encrypted_pw := crypt(password, gen_salt('bf'));

    user_meta_data := NULL;

    UPDATE auth.users
    SET encrypted_password = encrypted_pw
    WHERE auth.users.email = user_email;

    RETURN user_id;
  END IF;
END;
$$;