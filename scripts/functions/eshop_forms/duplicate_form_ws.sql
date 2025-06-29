CREATE OR REPLACE FUNCTION duplicate_form_ws(p_form_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result jsonb;
    v_occasion_id bigint;
    v_unit_id bigint;
    new_form_id bigint;
BEGIN
    BEGIN
        -- Fetch occasion and unit details to check permissions
        SELECT f.occasion, o.unit
        INTO v_occasion_id, v_unit_id
        FROM public.forms f
        JOIN public.occasions o ON f.occasion = o.id
        WHERE f.id = p_form_id;

        IF NOT FOUND THEN
             RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4040, 'message', 'Form not found')::TEXT;
        END IF;

        -- Perform the required permission checks
        IF NOT (
            (SELECT get_is_editor_on_unit(v_unit_id)) OR
            (SELECT get_is_editor_on_occasion(v_occasion_id))
        ) THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4030, 'message', 'Permission denied to duplicate this form.')::TEXT;
        END IF;

        -- Call the internal function to duplicate the form within the SAME occasion
        new_form_id := duplicate_form(p_form_id);

        -- Build the success response for the client
        result := JSONB_BUILD_OBJECT(
            'code', 201, -- 201 Created
            'message', 'Form duplicated successfully',
            'data', jsonb_build_object('new_form_id', new_form_id)
        );

    EXCEPTION WHEN OTHERS THEN
        -- Catch any exceptions and format them
        result := CASE
            WHEN left(SQLERRM, 1) = '{' THEN SQLERRM::JSONB
            ELSE JSONB_BUILD_OBJECT('code', 5000, 'message', SQLERRM)
        END;
    END;

    RETURN result;
END;
$$;