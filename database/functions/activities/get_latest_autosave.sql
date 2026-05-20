CREATE OR REPLACE FUNCTION public.get_latest_autosave(p_occasion_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    autosave_record JSONB;
    v_latest_publish_id BIGINT;
BEGIN
    -- Select the single latest autosave record for the current user
    SELECT jsonb_build_object(
        'id', id,
        'created_at', created_at,
        'activities_data', activities_data,
        'parent_history_id', parent_history_id
    )
    INTO autosave_record
    FROM public.activity_history
    WHERE occasion_id = p_occasion_id
      AND user_id = auth.uid()
      AND history_type = 'AUTOSAVE'
    ORDER BY created_at DESC
    LIMIT 1;

    -- Separately, find the ID of the absolute latest published version for the occasion
    SELECT id
    INTO v_latest_publish_id
    FROM public.activity_history
    WHERE occasion_id = p_occasion_id
      AND history_type = 'PUBLISH'
    ORDER BY created_at DESC
    LIMIT 1;

    -- Return an object containing both the autosave data (if found) and the latest publish ID (if found)
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Autosave and publish info retrieved.',
        'data', jsonb_build_object(
            'autosave', autosave_record,
            'latest_publish_id', v_latest_publish_id
        )
    );
END;
$$;