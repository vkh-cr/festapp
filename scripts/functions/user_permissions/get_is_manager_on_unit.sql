CREATE OR REPLACE FUNCTION get_is_manager_on_unit(unit_id bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select coalesce((
  select
    is_manager
  from
    unit_users
  where
    "user" = auth.uid() and
    unit = unit_id), false)
$$;