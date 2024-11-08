CREATE OR REPLACE FUNCTION get_last_sign_in_at(user_id uuid)
RETURNS timestamp with time zone
SECURITY definer
AS $$
BEGIN
  RETURN (SELECT au.last_sign_in_at FROM auth.users au WHERE au.id = user_id);
END;
$$ LANGUAGE plpgsql;