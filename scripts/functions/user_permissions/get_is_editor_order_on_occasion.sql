CREATE OR REPLACE FUNCTION get_is_editor_order_on_occasion(oc bigint) RETURNS bool
    LANGUAGE "sql" STABLE
    SECURITY DEFINER
    AS $$
  select coalesce((
  select
    is_editor_order
  from
    occasion_users
  where
    "user" = auth.uid() and
    occasion = oc), false)
$$;