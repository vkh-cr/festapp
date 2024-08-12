CREATE OR REPLACE FUNCTION get_is_editor_on_occasion(oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select coalesce((
  select
    is_editor
  from
    occasion_users
  where
    "user" = auth.uid() and
    occasion = oc), false)
$$;

CREATE OR REPLACE FUNCTION get_is_editor_on_any_occasion() RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  SELECT coalesce((
    SELECT
      true
    FROM
      occasion_users
    WHERE
      "user" = auth.uid() AND
      is_editor = true
    LIMIT 1
  ), false)
$$;

CREATE OR REPLACE FUNCTION get_last_sign_in_at_for_users(user_ids uuid[], oc bigint)
RETURNS jsonb
SECURITY definer
AS $$
BEGIN
  -- Check if the user is a manager for the occasion
  IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Aggregate the last sign-in data as JSON
  RETURN jsonb_build_object(
    'code', 200,
    'data', (
      SELECT jsonb_agg(jsonb_build_object(
        'user_id', au.id,
        'last_sign_in_at', au.last_sign_in_at
      ))
      FROM auth.users au
      JOIN public.occasion_users ou ON au.id = ou."user"
      WHERE au.id = ANY(user_ids)
        AND ou.occasion = oc
    )
  );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_is_approver_on_occasion(oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select coalesce((
  select
    is_approver
  from
    occasion_users
  where
    "user" = auth.uid() and
    occasion = oc), false)
$$;

CREATE OR REPLACE FUNCTION get_is_manager_on_occasion(oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select coalesce((
  select
    is_manager
  from
    occasion_users
  where
    "user" = auth.uid() and
    occasion = oc), false)
$$;

CREATE OR REPLACE FUNCTION get_is_approved_on_occasion(oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select coalesce((
  select
    is_approved
  from
    occasion_users
  where
    "user" = auth.uid() and
    occasion = oc), false)
$$;

CREATE OR REPLACE FUNCTION get_exists_on_occasion(oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select exists(
  select
    1
  from
    occasion_users
  where
    "user" = auth.uid() and
    occasion = oc)
$$;

CREATE OR REPLACE FUNCTION get_exists_on_occasion_user(usr uuid, oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select exists(
  select
    1
  from
    occasion_users
  where
    "user" = usr and
    occasion = oc)
$$;

CREATE OR REPLACE FUNCTION get_user_info_for_users(user_ids uuid[], oc bigint)
RETURNS jsonb
SECURITY definer
AS $$
DECLARE
  companions jsonb;
BEGIN
  -- Check if the user is a manager, editor, or approver for the occasion
  IF (SELECT get_is_manager_on_occasion(oc) OR get_is_editor_on_occasion(oc) OR get_is_approver_on_occasion(oc)) <> TRUE THEN
      RETURN jsonb_build_object('code', 403);
  END IF;

  -- Aggregate the user information as JSON
  SELECT jsonb_agg(
    jsonb_build_object(
      'id', ui.id,
      'created_at', ui.created_at,
      'updated_at', ui.updated_at,
      'email_readonly', ui.email_readonly,
      'name', ui.name,
      'surname', ui.surname,
      'sex', ui.sex,
      'phone', ui.phone,
      'data', ui.data,
      'birth_date', ui.birth_date,
      'companion_parent', (
        SELECT jsonb_build_object(
          'id', parent_ui.id,
          'created_at', parent_ui.created_at,
          'updated_at', parent_ui.updated_at,
          'email_readonly', parent_ui.email_readonly,
          'name', parent_ui.name,
          'surname', parent_ui.surname,
          'sex', parent_ui.sex,
          'phone', parent_ui.phone,
          'data', parent_ui.data,
          'birth_date', parent_ui.birth_date
        )
        FROM public.user_info parent_ui
        WHERE parent_ui.id = uc."user"
      )
    )
  ) INTO companions
  FROM public.user_info ui
  LEFT JOIN public.user_companions uc ON ui.id = uc.companion
  WHERE ui.id = ANY(user_ids);

  -- If no companions are found, return an empty array
  IF companions IS NULL THEN
    companions := '[]'::jsonb;
  END IF;

  RETURN jsonb_build_object(
    'code', 200,
    'data', companions
  );
END;
$$ LANGUAGE plpgsql;
