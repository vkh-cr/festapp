CREATE OR REPLACE FUNCTION get_all_users_from_unit(unit_id bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  user_basics jsonb;
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = unit_id) THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Unit not found');
  END IF;

  IF NOT EXISTS (
      SELECT 1 FROM public.unit_users
      WHERE "user" = auth.uid()
        AND unit = unit_id
        AND (is_manager = true OR is_editor = true OR is_editor_view = true)
  ) THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  SELECT jsonb_agg(user_info)
  INTO user_basics
  FROM (
    SELECT jsonb_build_object(
      'user', ui.id,
      'name', ui.name,
      'surname', ui.surname,
      'sex', ui.sex,
      'email_readonly', ui.email_readonly,
      'unit', uu.unit,
      'is_manager', uu.is_manager,
      'is_editor', uu.is_editor,
      'is_editor_view', uu.is_editor_view,
      'data', uu.data
    ) AS user_info
    FROM public.unit_users uu
    JOIN public.user_info ui ON uu."user" = ui.id
    WHERE uu.unit = unit_id
    ORDER BY uu.created_at DESC
  ) t;

  IF user_basics IS NULL THEN
    user_basics := '[]'::jsonb;
  END IF;

  RETURN jsonb_build_object('code', 200, 'data', user_basics);
END;
$$ LANGUAGE plpgsql;
