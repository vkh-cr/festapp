CREATE OR REPLACE FUNCTION public.import_users_from_tickets_ws(p_occasion_id bigint)
RETURNS jsonb SECURITY DEFINER AS $$
DECLARE
BEGIN
    -- Verify if the user is an editor on the occasion.
    -- If this check fails, it will raise an exception which will now propagate.
    IF (SELECT get_is_editor_on_occasion(p_occasion_id)) <> TRUE THEN
        RAISE EXCEPTION 'User is not an editor for this occasion.';
    END IF;

    -- Call the original function to import users from tickets.
    -- Any exception from this function will also propagate.
    PERFORM public.import_users_from_tickets(p_occasion_id);

    -- Return a success message if no exceptions were raised.
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Import completed successfully.'
    );
END;
$$ LANGUAGE plpgsql;
