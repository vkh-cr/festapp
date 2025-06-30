CREATE OR REPLACE FUNCTION update_user(
  input_data jsonb
) RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  v_user uuid;
  v_occasion bigint;
  v_is_manager boolean;
  v_is_editor boolean;
  v_data jsonb;
  v_email text;
  v_password text;
  v_org bigint;
  v_unit bigint;
  new_user uuid;
  existing_user_id uuid;
BEGIN
  -- Extract main fields from the input_data jsonb object
  v_user := (input_data->>'user')::uuid;
  v_occasion := (input_data->>'occasion')::bigint;
  v_is_manager := COALESCE((input_data->>'is_manager')::boolean, false);
  v_is_editor := COALESCE((input_data->>'is_editor')::boolean, false);

  -- Ensure 'data' field is a valid jsonb, defaulting to an empty object if null or empty
  v_data := CASE
        WHEN input_data->>'data' IS NULL OR input_data->>'data' = ''
        THEN '{}'::jsonb
        ELSE input_data->'data'
       END;

  -- Verify that the occasion exists and retrieve its unit
  SELECT unit INTO v_unit FROM public.occasions WHERE id = v_occasion;
  IF v_unit IS NULL THEN
   RETURN jsonb_build_object(
    'code', 404,
    'message', 'Occasion not found'
   );
  END IF;

    -- Get the organization from the unit associated with the occasion
    SELECT organization INTO v_org FROM public.units WHERE id = v_unit;
    IF v_org IS NULL THEN
      RETURN jsonb_build_object(
        'code', 404,
        'message', 'Organization not found for the unit associated with this occasion'
      );
    END IF;

  -- Authorization check: The user calling this function must be a manager for the occasion.
  IF NOT EXISTS (
   SELECT 1 FROM public.occasion_users
   WHERE "user" = auth.uid()
    AND occasion = v_occasion
    AND is_manager = true
  ) THEN
   RETURN jsonb_build_object(
    'code', 403,
    'message', 'Unauthorized: Caller is not a manager for this occasion'
   );
  END IF;

  -- If the user UUID is null, find user by email or create a new one.
  IF v_user IS NULL THEN
    -- Email is expected to be inside the 'data' object.
    v_email := input_data->'data'->>'email';

    -- An email is required to find or create a user.
    IF v_email IS NULL OR v_email = '' THEN
      RETURN jsonb_build_object(
       'code', 400,
       'message', 'Email is required to find or create a user.'
      );
    END IF;

    -- Check if a user with this email already exists in the auth.users table
    -- using the format 'organization_id+email'.
    SELECT id INTO existing_user_id
    FROM auth.users
    WHERE email = v_org::text || '+' || v_email;

    -- If the user already exists in auth.users...
    IF existing_user_id IS NOT NULL THEN

      -- NEW LOGIC: Ensure a corresponding user_info record exists.
      -- If an auth.user exists but the user_info profile is missing, create it.
      IF NOT EXISTS (SELECT 1 FROM public.user_info WHERE id = existing_user_id) THEN
        INSERT INTO public.user_info (id, organization, email_readonly, data, name, surname, sex)
        VALUES (
            existing_user_id,
            v_org,
            v_email,
            v_data,
            v_data->>'name',
            v_data->>'surname',
            v_data->>'sex'
        );
      END IF;

      -- Return the found user's ID.
      RETURN jsonb_build_object(
       'code', 200,
       'message', 'User found',
       'user', existing_user_id::text
      );
    ELSE
      -- If user does not exist in auth.users, create a new one.
      v_password := encode(gen_random_bytes(16), 'hex'); -- Generate a random password

      -- Create the user within the organization, passing the full data object.
      -- This helper function is expected to create records in both auth.users and public.user_info.
      new_user := create_user_in_organization_with_data(v_org, v_email, v_password, v_data);

      -- Return the newly created user's ID
      RETURN jsonb_build_object(
       'code', 201, -- Created
       'message', 'User created successfully',
       'user', new_user::text
      );
    END IF;
  END IF;

  -- If a user UUID was provided, update their existing user_info record.
  UPDATE public.user_info
  SET data = data || v_data
  WHERE id = v_user;

  -- Conditionally update specific columns in user_info if they are present in the input data.
  IF v_data ? 'name' THEN
    UPDATE public.user_info SET name = v_data->>'name' WHERE id = v_user;
  END IF;

  IF v_data ? 'surname' THEN
    UPDATE public.user_info SET surname = v_data->>'surname' WHERE id = v_user;
  END IF;

  IF v_data ? 'sex' THEN
    UPDATE public.user_info SET sex = v_data->>'sex' WHERE id = v_user;
  END IF;

  RETURN jsonb_build_object(
   'code', 200,
   'message', 'User details updated successfully'
  );

EXCEPTION WHEN OTHERS THEN
  -- Generic error handler
  RETURN jsonb_build_object(
   'code', 500,
   'message', SQLERRM
  );
END;
$$ LANGUAGE plpgsql;