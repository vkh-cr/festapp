-- Cleaning service — a user mutes/unmutes cleaning push notifications for
-- themselves on an occasion. Self-service: always acts on auth.uid(), so anyone
-- can toggle their own preference (only crew actually receive the pushes, but a
-- non-crew caller toggling their flag is harmless). Stored in
-- occasion_users.data.cleaning_notifications_off; report_cleaning_issue excludes
-- muted crew from the notification recipients. Envelope {code, message, data}.
CREATE OR REPLACE FUNCTION set_cleaning_notifications_muted_internal_v1(
  p_occasion bigint,
  p_muted boolean
) RETURNS jsonb
  LANGUAGE plpgsql
  SECURITY DEFINER
  SET search_path = public, extensions
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_found boolean;
BEGIN
  IF v_user IS NULL THEN
    RETURN jsonb_build_object('code', 401, 'message', 'Sign in is required');
  END IF;

  UPDATE public.occasion_users
  SET data = COALESCE(data, '{}'::jsonb)
             || jsonb_build_object('cleaning_notifications_off', COALESCE(p_muted, false))
  WHERE occasion = p_occasion AND "user" = v_user
  RETURNING true INTO v_found;

  IF NOT COALESCE(v_found, false) THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Participant not found on this occasion');
  END IF;

  RETURN jsonb_build_object(
    'code', 200,
    'data', jsonb_build_object('muted', COALESCE(p_muted, false))
  );
END;
$$;

CREATE OR REPLACE FUNCTION set_cleaning_notifications_muted(
  p_occasion bigint,
  p_muted boolean
) RETURNS jsonb LANGUAGE sql SECURITY DEFINER SET search_path = public, extensions AS $$
  SELECT public.set_cleaning_notifications_muted_internal_v1(p_occasion, p_muted);
$$;
