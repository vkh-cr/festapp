CREATE OR REPLACE FUNCTION delete_speaker(p_speaker_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_occasion BIGINT;
BEGIN
    SELECT occasion INTO v_occasion
    FROM public.speakers
    WHERE id = p_speaker_id;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('code', 404);
    END IF;

    IF NOT public.get_is_editor_on_occasion(v_occasion) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- speaker_topic_links and event_speakers cascade. Generated slot events
    -- intentionally remain (they are ordinary events).
    DELETE FROM public.speakers WHERE id = p_speaker_id;

    RETURN jsonb_build_object('code', 200);
END;
$$;
