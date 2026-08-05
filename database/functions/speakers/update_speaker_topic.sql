CREATE OR REPLACE FUNCTION update_speaker_topic(p_occasion BIGINT, p_topic JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_topic_id BIGINT;
    v_row      public.speaker_topics%ROWTYPE;
    v_title    TEXT;
BEGIN
    -- Only editors of the occasion may write the topic catalog.
    IF NOT public.get_is_editor_on_occasion(p_occasion) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    IF p_topic ? 'id' AND (p_topic->>'id') IS NOT NULL THEN
        -- UPDATE — guarded by occasion to prevent cross-occasion edits.
        v_topic_id := (p_topic->>'id')::BIGINT;

        UPDATE public.speaker_topics t SET
            title     = COALESCE(p_topic->>'title', t.title),
            "order"   = CASE WHEN p_topic ? 'order'     THEN (p_topic->>'order')::BIGINT        ELSE t."order"   END,
            is_hidden = CASE WHEN p_topic ? 'is_hidden' THEN (p_topic->>'is_hidden')::BOOLEAN   ELSE t.is_hidden END
        WHERE t.id = v_topic_id AND t.occasion = p_occasion
        RETURNING t.* INTO v_row;

        IF NOT FOUND THEN
            RETURN jsonb_build_object('code', 404);
        END IF;
    ELSE
        -- INSERT — a non-empty title is required. Areas have no code/key; the
        -- only identifier is the hidden primary key id.
        v_title := p_topic->>'title';
        IF v_title IS NULL OR btrim(v_title) = '' THEN
            RETURN jsonb_build_object('code', 400);
        END IF;

        INSERT INTO public.speaker_topics (occasion, title, "order", is_hidden)
        VALUES (
            p_occasion,
            v_title,
            COALESCE((p_topic->>'order')::BIGINT, 0),
            COALESCE((p_topic->>'is_hidden')::BOOLEAN, FALSE)
        )
        RETURNING * INTO v_row;
    END IF;

    RETURN jsonb_build_object('code', 200, 'data', to_jsonb(v_row));
END;
$$;
