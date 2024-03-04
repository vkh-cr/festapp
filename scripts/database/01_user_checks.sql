CREATE OR REPLACE FUNCTION get_is_editor_on_occasion(oc int) RETURNS bool
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

CREATE OR REPLACE FUNCTION get_is_approver_on_occasion(oc int) RETURNS bool
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

CREATE OR REPLACE FUNCTION get_is_manager_on_occasion(oc int) RETURNS bool
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

CREATE OR REPLACE FUNCTION get_is_approved_on_occasion(oc int) RETURNS bool
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

CREATE OR REPLACE FUNCTION get_exists_on_occasion(oc int) RETURNS bool
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