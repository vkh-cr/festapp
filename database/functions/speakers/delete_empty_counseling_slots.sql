CREATE OR REPLACE FUNCTION public.delete_empty_counseling_slots_internal_v1(p_speaker BIGINT, p_from TIMESTAMPTZ DEFAULT NULL)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_occasion BIGINT;
    v_deleted  INT;
BEGIN
    SELECT occasion INTO v_occasion
    FROM public.speakers
    WHERE id = p_speaker;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('code', 404);
    END IF;

    IF NOT public.get_is_editor_on_occasion(v_occasion) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Clear the saved-events rows first: event_users_saved has an FK to events
    -- with no ON DELETE CASCADE, so it would otherwise block the delete.
    DELETE FROM public.event_users_saved
    WHERE event IN (
        SELECT e.id
        FROM public.events e
        JOIN public.event_speakers es ON es.event = e.id
        WHERE es.speaker = p_speaker
          AND (e.data->>'is_counseling_slot')::boolean IS TRUE
          AND (p_from IS NULL OR e.start_time >= p_from)
          AND NOT EXISTS (SELECT 1 FROM public.event_users eu WHERE eu.event = e.id)
    );

    -- Delete only empty slots; occupied slots (any event_users row) survive.
    DELETE FROM public.events e
    USING public.event_speakers es
    WHERE es.event = e.id
      AND es.speaker = p_speaker
      AND (e.data->>'is_counseling_slot')::boolean IS TRUE
      AND (p_from IS NULL OR e.start_time >= p_from)
      AND NOT EXISTS (SELECT 1 FROM public.event_users eu WHERE eu.event = e.id);

    GET DIAGNOSTICS v_deleted = ROW_COUNT;

    RETURN jsonb_build_object(
        'code', 200,
        'data', jsonb_build_object('deleted', v_deleted)
    );
END;
$$;

CREATE OR REPLACE FUNCTION public.delete_empty_counseling_slots(
  p_speaker bigint, p_from timestamptz DEFAULT NULL
) RETURNS jsonb LANGUAGE sql SECURITY DEFINER SET search_path = public, extensions AS $$
  SELECT public.delete_empty_counseling_slots_internal_v1(p_speaker,p_from);
$$;
