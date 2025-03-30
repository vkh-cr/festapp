CREATE OR REPLACE FUNCTION update_unit_user(
    input_data jsonb
) RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
    v_user uuid;
    v_unit bigint;
    v_is_manager boolean;
    v_is_editor boolean;
    v_is_editor_view boolean;
    v_data jsonb;
    v_email text;
    v_password text;
    v_org bigint;
    new_user uuid;
BEGIN
    -- Extract fields from input_data
    v_user := (input_data->>'user')::uuid;
    v_unit := (input_data->>'unit')::bigint;
    v_is_manager := (input_data->>'is_manager')::boolean;
    v_is_editor := (input_data->>'is_editor')::boolean;
    v_is_editor_view := (input_data->>'is_editor_view')::boolean;

    v_data := CASE
                WHEN input_data->>'data' IS NULL OR input_data->>'data' = ''
                THEN '{}'::jsonb
                ELSE input_data->'data'
              END;

    -- Verify that the unit exists
    IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = v_unit) THEN
      RETURN jsonb_build_object(
        'code', 404,
        'message', 'Unit not found'
      );
    END IF;

    -- Check if the caller is authorized (must be a manager for the unit)
    IF NOT EXISTS (
      SELECT 1 FROM public.unit_users
      WHERE "user" = auth.uid()
        AND unit = v_unit
        AND is_manager = true
    ) THEN
      RETURN jsonb_build_object(
        'code', 403,
        'message', 'Unauthorized'
      );
    END IF;

    -- If the user uuid is null, create the user and add them to the unit
    IF v_user IS NULL THEN
        v_email := input_data->>'email';
        v_password := encode(gen_random_bytes(16), 'hex'); -- randomly create password

        SELECT organization INTO v_org FROM public.units WHERE id = v_unit;
        IF v_org IS NULL THEN
          RETURN jsonb_build_object(
            'code', 404,
            'message', 'Organization not found'
          );
        END IF;

        -- Merge name and surname into v_data
        v_data := v_data || jsonb_build_object(
                    'name', input_data->>'name',
                    'surname', input_data->>'surname',
                    'sex', input_data->>'sex'
                  );

        new_user := create_user_in_organization_with_data(v_org, v_email, v_password, v_data);

        INSERT INTO public.unit_users("user", unit, is_manager, is_editor, is_editor_view, data)
        VALUES (new_user, v_unit, v_is_manager, v_is_editor, v_is_editor_view, v_data);

        RETURN jsonb_build_object(
          'code', 200,
          'message', 'User created and added to unit successfully',
          'user', new_user::text
        );
    END IF;

    -- Check if the target user exists within the given unit
    IF NOT EXISTS (
      SELECT 1 FROM public.unit_users
      WHERE "user" = v_user AND unit = v_unit
    ) THEN
      RETURN jsonb_build_object(
        'code', 404,
        'message', 'User not found in unit'
      );
    END IF;

    -- Update the unit user record with the new values, including is_editor_view
    UPDATE public.unit_users
    SET is_manager     = v_is_manager,
        is_editor      = v_is_editor,
        is_editor_view = v_is_editor_view,
        data           = v_data
    WHERE "user" = v_user
      AND unit = v_unit;

    RETURN jsonb_build_object(
      'code', 200,
      'message', 'Update successful'
    );

EXCEPTION WHEN OTHERS THEN
    RETURN jsonb_build_object(
      'code', 500,
      'message', SQLERRM
    );
END;
$$ LANGUAGE plpgsql;
