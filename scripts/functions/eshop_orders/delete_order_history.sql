CREATE OR REPLACE FUNCTION delete_order_history(p_history_id bigint)
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql AS $$
DECLARE
    v_occasion_id bigint;
BEGIN
    -- Determine the occasion linked to the history entry for permission validation
    SELECT o.occasion INTO v_occasion_id
    FROM eshop.orders_history oh
    JOIN eshop.orders o ON oh."order" = o.id
    WHERE oh.id = p_history_id;

    -- If the history entry is not found, raise an exception
    IF NOT FOUND THEN
        RAISE EXCEPTION 'History record not found.';
    END IF;

    -- Verify the user has the necessary permissions to delete
    IF NOT get_is_editor_order_on_occasion(v_occasion_id) THEN
        RAISE EXCEPTION 'Permission denied to delete order history.';
    END IF;

    -- Proceed with the deletion if checks pass
    DELETE FROM eshop.orders_history WHERE id = p_history_id;
END;
$$;