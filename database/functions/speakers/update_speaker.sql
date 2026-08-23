CREATE OR REPLACE FUNCTION public.update_speaker(p_occasion BIGINT, p_speaker JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_speaker_id BIGINT;
    v_row        public.speakers%ROWTYPE;
    v_title      TEXT;
BEGIN
    -- Only editors of the occasion may write speakers.
    IF NOT public.get_is_editor_on_occasion(p_occasion) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    IF p_speaker ? 'id' AND (p_speaker->>'id') IS NOT NULL THEN
        -- UPDATE — guarded by occasion to prevent cross-occasion edits.
        v_speaker_id := (p_speaker->>'id')::BIGINT;

        UPDATE public.speakers s SET
            title       = COALESCE(p_speaker->>'title', s.title),
            subtitle    = CASE WHEN p_speaker ? 'subtitle'    THEN p_speaker->>'subtitle'              ELSE s.subtitle    END,
            description = CASE WHEN p_speaker ? 'description'  THEN p_speaker->>'description'           ELSE s.description END,
            image       = CASE WHEN p_speaker ? 'image'       THEN p_speaker->>'image'                 ELSE s.image       END,
            "order"     = CASE WHEN p_speaker ? 'order'       THEN (p_speaker->>'order')::BIGINT       ELSE s."order"     END,
            is_hidden   = CASE WHEN p_speaker ? 'is_hidden'   THEN (p_speaker->>'is_hidden')::BOOLEAN  ELSE s.is_hidden   END,
            data        = CASE WHEN p_speaker ? 'data'        THEN p_speaker->'data'                   ELSE s.data        END
        WHERE s.id = v_speaker_id AND s.occasion = p_occasion
        RETURNING s.* INTO v_row;

        IF NOT FOUND THEN
            RETURN jsonb_build_object('code', 404);
        END IF;
    ELSE
        -- INSERT — a non-empty title is required.
        v_title := p_speaker->>'title';
        IF v_title IS NULL OR btrim(v_title) = '' THEN
            RETURN jsonb_build_object('code', 400);
        END IF;

        INSERT INTO public.speakers (occasion, title, subtitle, description, image, "order", is_hidden, data)
        VALUES (
            p_occasion,
            v_title,
            p_speaker->>'subtitle',
            p_speaker->>'description',
            p_speaker->>'image',
            COALESCE((p_speaker->>'order')::BIGINT, 0),
            COALESCE((p_speaker->>'is_hidden')::BOOLEAN, FALSE),
            COALESCE(p_speaker->'data', '{}'::jsonb)
        )
        RETURNING * INTO v_row;

        v_speaker_id := v_row.id;
    END IF;

    -- Atomically replace competence links when a 'topics' array is supplied
    -- (may be empty). Only topics of this occasion are accepted; foreign or
    -- unknown ids are silently ignored.
    IF p_speaker ? 'topics' THEN
        DELETE FROM public.speaker_topic_links WHERE speaker = v_speaker_id;

        INSERT INTO public.speaker_topic_links (speaker, topic)
        SELECT v_speaker_id, t.id
        FROM public.speaker_topics t
        WHERE t.occasion = p_occasion
          AND t.id IN (
            SELECT elem::BIGINT
            FROM jsonb_array_elements_text(p_speaker->'topics') AS elem
          );
    END IF;

    RETURN jsonb_build_object(
        'code', 200,
        'data', to_jsonb(v_row) || jsonb_build_object(
            'topics', COALESCE((
                SELECT jsonb_agg(stl.topic ORDER BY stl.topic)
                FROM public.speaker_topic_links stl
                WHERE stl.speaker = v_speaker_id
            ), '[]'::jsonb)
        )
    );
END;
$$;
