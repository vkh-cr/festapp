CREATE OR REPLACE FUNCTION create_form_ws(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    result JSONB;
    v_occasion_id BIGINT;
    v_unit_id BIGINT;
    v_link TEXT;
    v_title TEXT;
    v_occasion_link TEXT;
    new_form_data JSONB;
BEGIN
    BEGIN
        -- Check for required input data from the client
        v_occasion_link := input_data->>'occasion_link';
        v_link := input_data->>'link';
        v_title := input_data->>'title';

        IF v_occasion_link IS NULL OR v_link IS NULL THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4000, 'message', 'Input data is missing required fields (occasion_link, link)')::TEXT;
        END IF;

        -- Fetch occasion details from the user-friendly link
        SELECT id, unit INTO v_occasion_id, v_unit_id
        FROM public.occasions
        WHERE link = v_occasion_link;

        IF NOT FOUND THEN
             RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4040, 'message', 'Occasion not found')::TEXT;
        END IF;

        -- Perform the required permission checks
        IF NOT (
            (SELECT get_is_editor_on_unit(v_unit_id)) OR
            (SELECT get_is_editor_on_occasion(v_occasion_id))
        ) THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4030, 'message', 'Permission denied to create form for this occasion.')::TEXT;
        END IF;

        -- UPDATED: Call the renamed internal function
        new_form_data := create_form(
            p_occasion_id := v_occasion_id,
            p_link := v_link,
            p_title := v_title
        );

        -- Build the success response for the client
        result := JSONB_BUILD_OBJECT(
            'code', 201, -- 201 Created
            'message', 'Form created successfully',
            'data', new_form_data
        );

    EXCEPTION WHEN OTHERS THEN
        -- Catch any exceptions (from this function or the internal one) and format them
        result := CASE
            WHEN left(SQLERRM, 1) = '{' THEN SQLERRM::JSONB
            ELSE JSONB_BUILD_OBJECT('code', 5000, 'message', SQLERRM)
        END;
    END;

    RETURN result;
END;
$$;