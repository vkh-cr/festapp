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
    update_count integer;
BEGIN
    -- Extract fields from input_data
    v_user := (input_data->>'user')::uuid;
    v_unit := (input_data->>'unit')::bigint;
    v_is_manager := (input_data->>'is_manager')::boolean;
    v_is_editor := (input_data->>'is_editor')::boolean;
    v_is_editor_view := (input_data->>'is_editor_view')::boolean;
    v_data := input_data->'data';

    -- Step 1: Verify that the unit exists
    IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = v_unit) THEN
      RETURN jsonb_build_object(
        'code', 404,
        'message', 'Unit not found'
      );
    END IF;

    -- Step 2: Check if the caller is authorized (must be a manager for the unit)
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

    -- Step 3: Check if the target user exists within the given unit
    IF NOT EXISTS (
      SELECT 1 FROM public.unit_users
      WHERE "user" = v_user AND unit = v_unit
    ) THEN
      RETURN jsonb_build_object(
        'code', 404,
        'message', 'User not found in unit'
      );
    END IF;

    -- Step 4: Update the unit user record with the new values, including is_editor_view
    UPDATE public.unit_users
    SET is_manager     = v_is_manager,
        is_editor      = v_is_editor,
        is_editor_view = v_is_editor_view,
        data           = v_data
    WHERE "user" = v_user
      AND unit = v_unit;

    -- Step 5: Return a successful JSON response
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
