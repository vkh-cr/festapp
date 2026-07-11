-- Cleaning service (feature C) — the caller's own rating for a toilet plus the
-- public aggregate (average + count). Powers the rating dialog: preselect the
-- smiley the user picked last time and show how others rated. Any signed-in user.
CREATE OR REPLACE FUNCTION get_cleaning_review(place_id bigint) RETURNS jsonb
  LANGUAGE plpgsql
  STABLE
  SECURITY DEFINER
  SET search_path = public, extensions
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_my_rating int;
  v_my_note text;
  v_avg numeric;
  v_count int;
BEGIN
  IF v_user IS NULL THEN
    RETURN jsonb_build_object('code', 401, 'message', 'Sign in is required');
  END IF;

  SELECT rating, note INTO v_my_rating, v_my_note
  FROM public.cleaning_reviews
  WHERE place = place_id AND created_by = v_user;

  SELECT round(avg(rating)::numeric, 2), count(*)
  INTO v_avg, v_count
  FROM public.cleaning_reviews
  WHERE place = place_id;

  RETURN jsonb_build_object(
    'code', 200,
    'data', jsonb_build_object(
      'my_rating', v_my_rating,
      'my_note', v_my_note,
      'rating_avg', v_avg,
      'rating_count', COALESCE(v_count, 0)
    )
  );
END;
$$;
