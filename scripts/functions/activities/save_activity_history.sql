CREATE OR REPLACE FUNCTION public.save_activity_history(
    p_occasion_id BIGINT,
    p_activities_data JSONB,
    p_history_type TEXT,
    p_note TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_user_id UUID := auth.uid();
BEGIN
    -- Step 1: Authorization Check
    IF (SELECT get_is_editor_on_occasion(p_occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to edit this occasion');
    END IF;

    -- Step 2: Cleanup Old History (on every save)
    DELETE FROM public.activity_history
    WHERE occasion_id = p_occasion_id
      AND created_at < (now() - interval '30 days');

    -- Step 3: Handle Autosave Logic (overwrite previous draft)
    IF p_history_type = 'AUTOSAVE' THEN
        DELETE FROM public.activity_history
        WHERE occasion_id = p_occasion_id
          AND user_id = v_user_id
          AND history_type = 'AUTOSAVE';
    END IF;

    -- Step 4: Insert the New History Record
    INSERT INTO public.activity_history (occasion_id, user_id, activities_data, history_type, note)
    VALUES (p_occasion_id, v_user_id, p_activities_data, p_history_type, p_note);

    RETURN jsonb_build_object('code', 200, 'message', 'History saved successfully.');
EXCEPTION
    WHEN others THEN
        RETURN jsonb_build_object('code', 500, 'message', 'Error saving history: ' || SQLERRM);
END;
$$;