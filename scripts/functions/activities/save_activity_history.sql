CREATE OR REPLACE FUNCTION public.save_activity_history(
    p_occasion_id BIGINT,
    p_activities_data JSONB,
    p_history_type TEXT,
    p_parent_history_id BIGINT,
    p_note TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_user_id UUID := auth.uid();
    v_latest_publish_id BIGINT;
    v_latest_publish_created_at TIMESTAMPTZ;
BEGIN
    -- Step 1: Authorization Check
    IF (SELECT get_is_editor_on_occasion(p_occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to edit this occasion');
    END IF;

    -- Step 2: For autosaves, check for version conflict
    IF p_history_type = 'AUTOSAVE' THEN
        SELECT id, created_at
        INTO v_latest_publish_id, v_latest_publish_created_at
        FROM public.activity_history
        WHERE occasion_id = p_occasion_id AND history_type = 'PUBLISH'
        ORDER BY created_at DESC
        LIMIT 1;

        IF p_parent_history_id IS DISTINCT FROM v_latest_publish_id THEN
             RETURN jsonb_build_object(
                'code', 409, -- Conflict
                'message', 'A new version has been published. Please reload or rebase your changes.',
                'data', jsonb_build_object(
                    'latest_publish_id', v_latest_publish_id,
                    'published_at', v_latest_publish_created_at
                )
            );
        END IF;

        DELETE FROM public.activity_history
        WHERE occasion_id = p_occasion_id
          AND user_id = v_user_id
          AND history_type = 'AUTOSAVE';
    END IF;

    -- Step 3: Cleanup Old History (with fix)
    DELETE FROM public.activity_history
    WHERE occasion_id = p_occasion_id
      AND created_at < (now() - interval '30 days')
      AND id IS DISTINCT FROM p_parent_history_id;

    -- Step 4: Insert the New History Record
    INSERT INTO public.activity_history (occasion_id, user_id, activities_data, history_type, note, parent_history_id)
    VALUES (p_occasion_id, v_user_id, p_activities_data, p_history_type, p_note, p_parent_history_id);

    -- Step 5: Return success
    RETURN jsonb_build_object('code', 200, 'message', 'History saved successfully.');
EXCEPTION
    WHEN others THEN
        RETURN jsonb_build_object('code', 500, 'message', 'Error saving history: ' || SQLERRM);
END;
$$;