CREATE OR REPLACE FUNCTION get_all_users_from_unit(unit_id bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  user_basics jsonb;
BEGIN
  -- Step 1: Verify that the unit exists
  IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = unit_id) THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Unit not found'
    );
  END IF;

  -- Step 2: Check if the caller is a manager or editor of the unit
  IF NOT EXISTS (
      SELECT 1 FROM public.unit_users
      WHERE "user" = auth.uid()
        AND unit = unit_id
        AND (is_manager = true OR is_editor = true)
  ) THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Step 3: Aggregate user information only from unit_users for the given unit,
  -- including is_manager, is_editor, and data.
  SELECT jsonb_agg(
    jsonb_build_object(
      'user', ui.id,
      'name', ui.name,
      'surname', ui.surname,
      'sex', ui.sex,
      'email_readonly', ui.email_readonly,
      'unit', uu.unit,
      'is_manager', uu.is_manager,
      'is_editor', uu.is_editor,
      'data', uu.data
    )
  ) INTO user_basics
  FROM public.unit_users uu
  JOIN public.user_info ui ON uu."user" = ui.id
  WHERE uu.unit = unit_id;

  -- Step 4: If no users were found, return an empty array
  IF user_basics IS NULL THEN
    user_basics := '[]'::jsonb;
  END IF;

  -- Step 5: Return the aggregated JSON response with a 200 code
  RETURN jsonb_build_object(
    'code', 200,
    'data', user_basics
  );
END;
$$ LANGUAGE plpgsql;
