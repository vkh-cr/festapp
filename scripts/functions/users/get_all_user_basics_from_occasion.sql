CREATE OR REPLACE FUNCTION get_all_user_basics_from_occasion(oc bigint)
RETURNS jsonb
SECURITY definer
AS $$
DECLARE
  user_basics jsonb;
BEGIN
  -- Check if the user is a manager, editor, or approver for the occasion
  IF (SELECT get_is_manager_on_occasion(oc) OR get_is_editor_on_occasion(oc) OR get_is_approver_on_occasion(oc)) <> TRUE THEN
      RETURN jsonb_build_object('code', 403);
  END IF;

  -- Aggregate the user information as JSON
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
  JOIN public.occasion_users uo ON ui.id = uo."user"
  WHERE uo.occasion = oc;

  -- If no users are found, return an empty array
  IF user_basics IS NULL THEN
    user_basics := '[]'::jsonb;
  END IF;

  RETURN jsonb_build_object(
    'code', 200,
    'data', user_basics
  );
END;
$$ LANGUAGE plpgsql;