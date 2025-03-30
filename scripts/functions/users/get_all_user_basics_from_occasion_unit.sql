CREATE OR REPLACE FUNCTION get_all_user_basics_from_occasion_unit(oc bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  user_basics jsonb;
  unit_id bigint;
BEGIN
  -- Step 1: Retrieve the unit_id for the given occasion
  SELECT unit INTO unit_id FROM public.occasions WHERE id = oc;

  -- If the occasion does not exist, return a 404 error
  IF unit_id IS NULL THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Unit not found'
    );
  END IF;

  -- Step 2: Check if the caller is a manager of the unit
  IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Step 3: Aggregate user information from all occasions under the unit and unit_users
  SELECT jsonb_agg(
    jsonb_build_object(
      'id', ui.id,
      'name', ui.name,
      'surname', ui.surname,
      'sex', ui.sex,
      'email_readonly', ui.email_readonly,
      'companion_parent', (
        SELECT jsonb_build_object(
          'id', parent_ui.id,
          'name', parent_ui.name,
          'surname', parent_ui.surname,
          'sex', parent_ui.sex,
          'email_readonly', parent_ui.email_readonly
        )
        FROM public.user_info parent_ui
        WHERE parent_ui.id = uc."user"
      )
    )
  ) INTO user_basics
  FROM public.user_info ui
  LEFT JOIN public.user_companions uc ON ui.id = uc.companion
  WHERE ui.id IN (
    -- Users from all occasions under the same unit
    SELECT DISTINCT uo."user"
    FROM public.occasion_users uo
    WHERE uo.occasion IN (
      SELECT id FROM public.occasions WHERE unit = unit_id
    )
    UNION
    -- Users directly associated with the unit
    SELECT DISTINCT uu."user"
    FROM public.unit_users uu
    WHERE uu.unit = unit_id
  );

  -- Step 4: Handle cases with no users found
  IF user_basics IS NULL THEN
    user_basics := '[]'::jsonb;
  END IF;

  -- Step 5: Return the aggregated JSON response
  RETURN jsonb_build_object(
    'code', 200,
    'data', user_basics
  );
END;
$$ LANGUAGE plpgsql;
