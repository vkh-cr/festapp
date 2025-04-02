CREATE OR REPLACE FUNCTION get_scan_code(
    form_link TEXT
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_id BIGINT;
    current_scan_code TEXT;
BEGIN
    -- 1. Retrieve occasion_id using form_link
    SELECT occasion
    INTO occasion_id
    FROM public.forms
    WHERE link = form_link;

    -- 2. Check if form_link is valid and linked to an occasion
    IF occasion_id IS NULL THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Form key does not exist or is not linked to an occasion.'
        );
    END IF;

    -- 3. Verify if the user is an editor on the occasion
    IF NOT get_is_editor_order_view_on_occasion(occasion_id) THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'User is not authorized to view scan code for this occasion.'
        );
    END IF;

    -- 4. Retrieve the scan_code from the occasions_hidden table via the foreign key
    SELECT oh.secret
    INTO current_scan_code
    FROM public.occasions_hidden oh
    JOIN public.occasions o ON o.occasion_hidden = oh.id
    WHERE o.id = occasion_id
    LIMIT 1;

    -- 4.a. Handle case where scan_code is not found
    IF current_scan_code IS NULL THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Scan code not found for the specified occasion.'
        );
    END IF;

    -- 5. Return the scan_code
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Scan code retrieved successfully.',
        'scan_code', current_scan_code
    );

EXCEPTION
    WHEN OTHERS THEN
        -- Handle any unexpected exceptions
        RETURN jsonb_build_object(
            'code', 500,
            'message', 'An unexpected error occurred.',
            'detail', SQLERRM
        );
END;
$$;
