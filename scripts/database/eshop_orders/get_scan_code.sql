CREATE OR REPLACE FUNCTION get_scan_code(
    form_link TEXT
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_id BIGINT;
    occasion_data JSONB;
    current_scan_code TEXT;
BEGIN
    SELECT occasion
    INTO occasion_id
    FROM public.forms
    WHERE link = form_link;

    IF occasion_id IS NULL THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Form key does not exist or is not linked to an occasion.'
        );
    END IF;

    IF NOT get_is_editor_on_occasion(occasion_id) THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'User is not authorized to view scan code for this occasion.'
        );
    END IF;

    SELECT data INTO occasion_data
    FROM public.occasions
    WHERE id = occasion_id
    LIMIT 1;

    SELECT feature->>'scan_code'
    INTO current_scan_code
    FROM jsonb_array_elements(occasion_data->'features') AS feature
    WHERE feature->>'code' = 'scan'
    LIMIT 1;

    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Scan code retrieved successfully.',
        'scan_code', COALESCE(current_scan_code, '')
    );

EXCEPTION
    WHEN OTHERS THEN
        RETURN jsonb_build_object(
            'code', 500,
            'message', 'An unexpected error occurred.',
            'detail', SQLERRM
        );
END;
$$;
