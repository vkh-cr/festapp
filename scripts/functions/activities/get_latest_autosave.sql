CREATE OR REPLACE FUNCTION public.get_latest_autosave(p_occasion_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
AS $$
DECLARE
    autosave_data JSONB;
BEGIN
    -- Select the single latest autosave record into a JSON object
    SELECT jsonb_build_object(
        'id', id,
        'created_at', created_at,
        'activities_data', activities_data,
        'parent_history_id', parent_history_id
    )
    INTO autosave_data
    FROM public.activity_history
    WHERE occasion_id = p_occasion_id
      AND user_id = auth.uid()
      AND history_type = 'AUTOSAVE'
    ORDER BY created_at DESC
    LIMIT 1;

    -- Return the object wrapped in a standard response
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Autosave data retrieved.',
        'data', autosave_data
    );
END;
$$;