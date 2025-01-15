CREATE OR REPLACE FUNCTION get_report_for_occasion_with_security(form_link TEXT)
RETURNS jsonb SECURITY DEFINER AS $$
DECLARE
    occasion_id bigint;
    report_data text; -- Variable to hold the result of the original report function
BEGIN
    -- Retrieve the occasion associated with the form link
    SELECT occasion
    INTO occasion_id
    FROM public.forms
    WHERE link = form_link;

    -- Check if the order exists and has an associated occasion
    IF occasion_id IS NULL THEN
        RAISE EXCEPTION 'Order not found or no associated occasion.';
    END IF;

    -- Verify if the user is an editor on the occasion
    IF NOT get_is_editor_on_occasion(occasion_id) THEN
        RAISE EXCEPTION 'User is not authorized to edit this occasion.';
    END IF;

    -- Call the original function to get the report data
    report_data := get_report_for_occasion(occasion_id);

    -- Return the result as a jsonb object with the data and code 200
    RETURN jsonb_build_object(
        'code', 200,
        'data', report_data
    );
EXCEPTION WHEN OTHERS THEN
    -- Handle any exceptions
    RETURN jsonb_build_object(
        'code', 500,
        'message', SQLERRM,
        'detail', coalesce(SQLERRM, 'An unexpected error occurred')
    );
END;
$$ LANGUAGE plpgsql;
