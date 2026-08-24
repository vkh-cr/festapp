CREATE OR REPLACE FUNCTION public.set_event_speakers(p_event BIGINT, p_speakers BIGINT[])
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_occasion BIGINT;
    v_speakers BIGINT[] := COALESCE(p_speakers, ARRAY[]::BIGINT[]);
BEGIN
    SELECT occasion INTO v_occasion
    FROM public.events
    WHERE id = p_event;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('code', 404);
    END IF;

    IF NOT public.get_is_editor_on_occasion(v_occasion) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Every supplied speaker must belong to the event's occasion.
    IF EXISTS (
        SELECT 1
        FROM unnest(v_speakers) AS sid
        LEFT JOIN public.speakers s ON s.id = sid AND s.occasion = v_occasion
        WHERE s.id IS NULL
    ) THEN
        RETURN jsonb_build_object('code', 400);
    END IF;

    -- Replace the set: drop links no longer present, add the missing ones.
    DELETE FROM public.event_speakers
    WHERE event = p_event
      AND speaker <> ALL (v_speakers);

    INSERT INTO public.event_speakers (event, speaker)
    SELECT p_event, sid
    FROM unnest(v_speakers) AS sid
    ON CONFLICT (event, speaker) DO NOTHING;

    RETURN jsonb_build_object('code', 200);
END;
$$;
