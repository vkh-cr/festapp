CREATE OR REPLACE FUNCTION get_all_user_basics_for_scan(scan_code text)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  oid bigint;
  user_basics jsonb;
BEGIN
  -----------------------------------------------------
  -- 1. Validate Code & Get Occasion ID
  -- (Matches logic from scan_ticket)
  -----------------------------------------------------
  SELECT o.id INTO oid
  FROM public.occasions o
  JOIN public.occasions_hidden oh ON o.occasion_hidden = oh.id
  WHERE oh.secret = scan_code
  LIMIT 1;

  -- Security Check: If ID is null, the code is invalid
  IF oid IS NULL THEN
      RAISE EXCEPTION 'Invalid scan code';
  END IF;

  -----------------------------------------------------
  -- 2. Retrieve User Data for this Occasion
  -----------------------------------------------------
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
  WHERE uo.occasion = oid;

  -----------------------------------------------------
  -- 3. Handle Empty Results & Return
  -----------------------------------------------------
  IF user_basics IS NULL THEN
    user_basics := '[]'::jsonb;
  END IF;

  RETURN user_basics;
END;
$$ LANGUAGE plpgsql;