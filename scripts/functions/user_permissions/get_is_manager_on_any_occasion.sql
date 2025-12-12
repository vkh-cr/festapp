CREATE OR REPLACE FUNCTION get_is_manager_on_any_occasion()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT COALESCE((
    SELECT true
    FROM occasion_users
    WHERE "user" = auth.uid() AND is_manager = true
    LIMIT 1
  ), false);
$$;