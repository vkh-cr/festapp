-- Cleaning service — crew marks a whole toilet as cleaned (resolve all its open
-- reports at once, decision Q3). Sets resolved_by/resolved_at on every open
-- report of the place so its derived status goes back to green.
-- Crew-only (get_is_cleaning_crew_on_occasion). Envelope {code, message, data}.
-- Deliberately does NOT check the "cleaning" feature flag: the crew must still be
-- able to resolve outstanding reports after the feature is turned off. Only new
-- reports are gated — in report_cleaning_issue.
CREATE OR REPLACE FUNCTION resolve_cleaning_place(place_id bigint) RETURNS jsonb
  LANGUAGE plpgsql
  SECURITY DEFINER
  SET search_path = public, extensions
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_occasion bigint;
  v_count integer;
BEGIN
  IF v_user IS NULL THEN
    RETURN jsonb_build_object('code', 401, 'message', 'Sign in is required');
  END IF;

  SELECT occasion INTO v_occasion FROM public.places WHERE id = place_id;
  IF v_occasion IS NULL THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Toilet not found');
  END IF;

  IF NOT public.get_is_cleaning_crew_on_occasion(v_occasion) THEN
    RETURN jsonb_build_object('code', 403, 'message', 'Cleaning crew access required');
  END IF;

  WITH updated AS (
    UPDATE public.cleaning_reports
    SET resolved_by = v_user,
        resolved_at = now()
    WHERE place = place_id
      AND resolved_at IS NULL
    RETURNING 1
  )
  SELECT count(*) INTO v_count FROM updated;

  RETURN jsonb_build_object(
    'code', 200,
    'data', jsonb_build_object('resolved', v_count)
  );
END;
$$;
