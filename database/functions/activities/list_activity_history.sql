CREATE OR REPLACE FUNCTION public.list_activity_history(p_occasion_id bigint)
 RETURNS jsonb
 LANGUAGE plpgsql
 STABLE
 SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    history_data JSONB;
BEGIN
    IF (SELECT get_is_editor_on_occasion(p_occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to view history');
    END IF;

    SELECT COALESCE(jsonb_agg(jsonb_build_object(
        'id', h.id,
        'created_at', h.created_at,
        'history_type', h.history_type,
        'note', h.note,
        'user_name', u.name,
        'user_surname', u.surname
    ) ORDER BY h.created_at DESC), '[]'::jsonb)
    INTO history_data
    FROM public.activity_history h
    LEFT JOIN public.user_info u ON h.user_id = u.id
    WHERE h.occasion_id = p_occasion_id AND (h.history_type <> 'AUTOSAVE' OR (h.history_type = 'AUTOSAVE' AND h.user_id = auth.uid()));

    RETURN jsonb_build_object(
        'code', 200,
        'message', 'History retrieved successfully',
        'data', history_data
    );
END;
$$;