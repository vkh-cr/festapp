CREATE OR REPLACE FUNCTION public.consume_password_reset_rate_limit_v1(
  p_key_hash text,
  p_limit integer,
  p_window_seconds integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  v_attempts integer;
  v_now timestamptz := clock_timestamp();
BEGIN
  IF auth.role() <> 'service_role' THEN
    RETURN false;
  END IF;
  IF p_key_hash !~ '^[0-9a-f]{64}$'
     OR p_limit < 1 OR p_limit > 1000
     OR p_window_seconds < 60 OR p_window_seconds > 86400 THEN
    RETURN false;
  END IF;

  DELETE FROM public.password_reset_rate_limits
  WHERE key_hash IN (
    SELECT key_hash FROM public.password_reset_rate_limits
    WHERE window_started_at < v_now-interval '1 day'
    ORDER BY window_started_at
    LIMIT 100
  );

  INSERT INTO public.password_reset_rate_limits(key_hash,window_started_at,attempts)
  VALUES(p_key_hash,v_now,1)
  ON CONFLICT(key_hash) DO UPDATE SET
    window_started_at=CASE
      WHEN public.password_reset_rate_limits.window_started_at <=
        v_now-make_interval(secs=>p_window_seconds) THEN v_now
      ELSE public.password_reset_rate_limits.window_started_at END,
    attempts=CASE
      WHEN public.password_reset_rate_limits.window_started_at <=
        v_now-make_interval(secs=>p_window_seconds) THEN 1
      ELSE public.password_reset_rate_limits.attempts+1 END
  RETURNING attempts INTO v_attempts;
  RETURN v_attempts <= p_limit;
END
$$;

REVOKE ALL ON TABLE public.password_reset_rate_limits FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.consume_password_reset_rate_limit_v1(text,integer,integer)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_password_reset_rate_limit_v1(text,integer,integer)
  TO service_role;
