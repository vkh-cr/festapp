CREATE OR REPLACE FUNCTION update_ticket_to_used_ws(
    ticket_id bigint
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_id bigint;
BEGIN
    -- 1. Retrieve the occasion ID from the ticket.
    -- If the ticket does not exist, this will raise a NO_DATA_FOUND exception.
    SELECT occasion
    INTO STRICT occasion_id
    FROM eshop.tickets
    WHERE id = ticket_id;

    -- 2. Check if the current user has editor permissions for the occasion.
    -- This function will raise an exception if the user is not an editor.
    PERFORM public.check_is_editor_order_on_occasion(occasion_id);

    -- 3. Update the ticket state to 'used'.
    -- This is only reached if the previous checks pass without raising an exception.
    UPDATE eshop.tickets
    SET state = 'used'
    WHERE id = ticket_id;
END;
$$;
