CREATE OR REPLACE FUNCTION public.get_activity_history_version(p_history_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_occasion_id BIGINT;
    history_data JSONB;
BEGIN
    SELECT occasion_id INTO v_occasion_id FROM public.activity_history WHERE id = p_history_id;

    IF v_occasion_id IS NULL OR (SELECT get_is_editor_on_occasion(v_occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to view this history version');
    END IF;

    -- Select the single history record into a JSON object
    SELECT jsonb_build_object(
        'id', id,
        'created_at', created_at,
        'activities_data', activities_data,
        'parent_history_id', parent_history_id
    )
    INTO history_data
    FROM public.activity_history
    WHERE id = p_history_id;

    -- Return the object wrapped in a standard response
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'History version retrieved.',
        'data', history_data
    );
END;
$$;