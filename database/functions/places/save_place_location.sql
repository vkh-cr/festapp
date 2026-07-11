-- Places — move a place to new coordinates from the map.
-- SECURITY DEFINER because the permission model here is wider than the plain
-- RLS UPDATE policy on public.places (editors only): a group admin may also move
-- the place assigned to their own group. A direct PostgREST UPDATE from such a
-- group admin would silently hit 0 rows (RLS filters it out) yet return 200, so
-- the client would think the move succeeded when it did not. All validation and
-- the write happen here. Envelope {code, message, data} like report_cleaning_issue.
--
-- Only saveLocation goes through this RPC; the other place writes (grid CRUD)
-- keep their direct editor-only RLS path — see DbPlaces / database/policies.
CREATE OR REPLACE FUNCTION save_place_location(
  p_place_id bigint,
  p_lat double precision,
  p_lng double precision
) RETURNS jsonb
  LANGUAGE plpgsql
  VOLATILE
  SECURITY DEFINER
  SET search_path = public, extensions
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_occasion bigint;
BEGIN
  IF v_user IS NULL THEN
    RETURN jsonb_build_object('code', 401, 'message', 'Sign in is required to move a place');
  END IF;

  SELECT occasion INTO v_occasion FROM public.places WHERE id = p_place_id;
  IF NOT FOUND THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Place not found');
  END IF;

  -- Editor on the place's occasion, OR admin of a group whose assigned place is
  -- exactly this one (user_group_info.place). Nothing else may move a place.
  IF NOT (
    get_is_editor_on_occasion(v_occasion)
    OR EXISTS (
      SELECT 1
      FROM public.user_groups ug
      JOIN public.user_group_info ugi ON ugi.id = ug."group"
      WHERE ug."user" = v_user
        AND ug.is_admin
        AND ugi.place = p_place_id
    )
  ) THEN
    RETURN jsonb_build_object('code', 403, 'message', 'You cannot change this place');
  END IF;

  UPDATE public.places
  SET coordinates = jsonb_build_object(
        'latLng', jsonb_build_object('lat', p_lat, 'lng', p_lng))
  WHERE id = p_place_id;

  RETURN jsonb_build_object(
    'code', 200,
    'data', jsonb_build_object('id', p_place_id)
  );
END;
$$;
