CREATE OR REPLACE FUNCTION update_scan_code(
    form_link TEXT,
    new_scan_code TEXT
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_id BIGINT;
    occasions_hidden_id BIGINT;
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
    IF NOT get_is_editor_on_occasion(occasion_id) THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'User is not authorized to edit this occasion.'
        );
    END IF;

    -- 4. Check if occasions_hidden exists for the occasion
    SELECT o.occasion_hidden
    INTO occasions_hidden_id
    FROM public.occasions o
    WHERE o.id = occasion_id;

    IF occasions_hidden_id IS NOT NULL THEN
        -- Update existing scan_code
        UPDATE public.occasions_hidden
        SET secret = new_scan_code
        WHERE id = occasions_hidden_id;
    ELSE
        -- Insert new occasions_hidden record
        INSERT INTO public.occasions_hidden (secret)
        VALUES (new_scan_code)
        RETURNING id INTO occasions_hidden_id;

        -- Update the occasion to link to the new occasions_hidden
        UPDATE public.occasions
        SET occasion_hidden = occasions_hidden_id
        WHERE id = occasion_id;
    END IF;

    -- 5. Return a success message
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Scan code updated successfully.'
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
