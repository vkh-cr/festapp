CREATE OR REPLACE FUNCTION update_user(
  input_data jsonb
) RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  v_user uuid;
  v_occasion bigint;
  v_unit_input bigint; -- New variable to hold unit from input
  v_is_manager boolean;
  v_is_editor boolean;
  v_data jsonb;
  v_email text;
  v_password text;
  v_org bigint;
  v_unit bigint; -- This will hold the final unit ID to be used
  new_user uuid;
  existing_user_id uuid;
BEGIN
  -- Extract main fields from the input_data jsonb object
  v_user := (input_data->>'user')::uuid;
  v_occasion := (input_data->>'occasion')::bigint;
  v_unit_input := (input_data->>'unit')::bigint; -- Extract unit from input
  v_is_manager := COALESCE((input_data->>'is_manager')::boolean, false);
  v_is_editor := COALESCE((input_data->>'is_editor')::boolean, false);

  -- Ensure 'data' field is a valid jsonb, defaulting to an empty object if null or empty
  v_data := CASE
        WHEN input_data->>'data' IS NULL OR input_data->>'data' = ''
        THEN '{}'::jsonb
        ELSE input_data->'data'
       END;

  -- Determine the unit to use: either from the occasion or directly from input
  IF v_occasion IS NOT NULL THEN
    -- If occasion is provided, find its unit
    SELECT unit INTO v_unit FROM public.occasions WHERE id = v_occasion;
    IF v_unit IS NULL THEN
     RETURN jsonb_build_object(
      'code', 404,
      'message', 'Occasion not found'
     );
    END IF;
  ELSIF v_unit_input IS NOT NULL THEN
    -- If unit is provided directly, use it
    v_unit := v_unit_input;
    -- Verify the unit exists
    IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = v_unit) THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Unit not found'
        );
    END IF;
  ELSE
    -- If neither is provided, return an error
    RETURN jsonb_build_object(
      'code', 400,
      'message', 'Either an occasion or a unit must be provided'
    );
  END IF;

  -- Get the organization from the unit
  SELECT organization INTO v_org FROM public.units WHERE id = v_unit;
  IF v_org IS NULL THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Organization not found for the specified unit'
    );
  END IF;

  -- Authorization check: The user calling this function must be a manager for the occasion or unit.
  IF v_occasion IS NOT NULL THEN
    -- Authorization for an occasion
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
  ELSE
    -- Authorization for a unit (assuming a similar 'unit_users' table)
    IF NOT EXISTS (
        SELECT 1 FROM public.unit_users -- Assuming this table exists for unit-level permissions
        WHERE "user" = auth.uid()
        AND unit = v_unit
        AND is_manager = true
    ) THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'Unauthorized: Caller is not a manager for this unit'
        );
    END IF;
  END IF;

  -- If the user UUID is null, find user by email or create a new one.
  IF v_user IS NULL THEN
    v_email := input_data->'data'->>'email';

    IF v_email IS NULL OR v_email = '' THEN
      RETURN jsonb_build_object(
       'code', 400,
       'message', 'Email is required to find or create a user.'
      );
    END IF;

    -- Check if a user with this email already exists in the auth.users table
    SELECT id INTO existing_user_id
    FROM auth.users
    WHERE email = v_org::text || '+' || v_email;

    IF existing_user_id IS NOT NULL THEN
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

      RETURN jsonb_build_object(
       'code', 200,
       'message', 'User found',
       'user', existing_user_id::text
      );
    ELSE
      -- If user does not exist, create a new one.
      v_password := encode(gen_random_bytes(16), 'hex');
      new_user := create_user_in_organization_with_data_ws(v_org, v_email, v_password, v_data);

      RETURN jsonb_build_object(
       'code', 201, -- Created
       'message', 'User created successfully',
       'user', new_user::text
      );
    END IF;
  END IF;

  -- If a user UUID was provided, update their existing user_info record in a single statement.
  UPDATE public.user_info
  SET
    data = user_info.data || v_data, -- Merge JSONB data
    name = COALESCE(v_data->>'name', user_info.name),
    surname = COALESCE(v_data->>'surname', user_info.surname),
    sex = COALESCE(v_data->>'sex', user_info.sex)
  WHERE id = v_user;

  RETURN jsonb_build_object(
   'code', 200,
   'message', 'User details updated successfully',
   'user', v_user
  );

EXCEPTION WHEN OTHERS THEN
  -- Generic error handler
  RETURN jsonb_build_object(
   'code', 500,
   'message', SQLERRM
  );
END;
$$ LANGUAGE plpgsql;
