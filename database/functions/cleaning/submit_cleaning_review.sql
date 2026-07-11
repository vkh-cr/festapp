-- Cleaning service (feature C) — a participant rates the quality of a toilet.
-- SECURITY DEFINER: participants have no direct write access to cleaning_reviews.
-- One smiley rating per (place, user) — upserted, so re-rating overwrites the
-- previous value. Envelope {code, message, data} like report_cleaning_issue.
--
-- Validation mirrors report_cleaning_issue: signed-in, place is a toilet on an
-- occasion with the cleaning feature enabled, and the caller is not blocked.
-- rating: 1 = sad, 2 = neutral, 3 = happy.
CREATE OR REPLACE FUNCTION submit_cleaning_review(
  place_id bigint,
  rating int,
  note text DEFAULT NULL
) RETURNS jsonb
  LANGUAGE plpgsql
  SECURITY DEFINER
  SET search_path = public, extensions
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_note text := NULLIF(btrim(COALESCE(note, '')), '');
  v_place public.places%ROWTYPE;
  v_occasion bigint;
  v_id bigint;
BEGIN
  IF v_user IS NULL THEN
    RETURN jsonb_build_object('code', 401, 'message', 'Sign in is required to rate a toilet');
  END IF;

  IF rating NOT IN (1, 2, 3) THEN
    RETURN jsonb_build_object('code', 400, 'message', 'Invalid rating');
  END IF;

  IF char_length(COALESCE(v_note, '')) > 2000 THEN
    RETURN jsonb_build_object('code', 413, 'message', 'Note is too long');
  END IF;

  SELECT * INTO v_place FROM public.places WHERE id = place_id;
  IF NOT FOUND OR v_place.occasion IS NULL THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Toilet not found');
  END IF;

  v_occasion := v_place.occasion;

  IF v_place.type IS DISTINCT FROM 'toilet' THEN
    RETURN jsonb_build_object('code', 400, 'message', 'Place is not a toilet');
  END IF;

  -- Feature "cleaning" must be enabled on the occasion.
  IF NOT EXISTS (
    SELECT 1
    FROM public.occasions o
    CROSS JOIN LATERAL jsonb_array_elements(COALESCE(o.features, '[]'::jsonb)) feature
    WHERE o.id = v_occasion
      AND feature->>'code' = 'cleaning'
      AND LOWER(COALESCE(feature->>'is_enabled', 'false')) = 'true'
  ) THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Cleaning feature is not enabled for this occasion');
  END IF;

  -- Blocked reporters cannot rate either (shared anti-spam ban).
  IF EXISTS (
    SELECT 1 FROM public.occasion_users
    WHERE occasion = v_occasion
      AND "user" = v_user
      AND is_cleaning_blocked = true
  ) THEN
    RETURN jsonb_build_object('code', 403, 'message', 'Reporting has been disabled for your account');
  END IF;

  INSERT INTO public.cleaning_reviews (occasion, place, created_by, rating, note)
  VALUES (v_occasion, place_id, v_user, rating, v_note)
  ON CONFLICT (place, created_by)
  DO UPDATE SET rating = EXCLUDED.rating, note = EXCLUDED.note, updated_at = now()
  RETURNING id INTO v_id;

  RETURN jsonb_build_object('code', 200, 'data', jsonb_build_object('id', v_id, 'rating', rating));
END;
$$;
