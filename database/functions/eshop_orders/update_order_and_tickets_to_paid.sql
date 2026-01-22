CREATE OR REPLACE FUNCTION update_order_and_tickets_to_paid(order_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE 
    v_order_id bigint;
    v_state text;
BEGIN
    -- Verify the order exists and is in 'created' OR 'ordered' state
    SELECT id, state INTO v_order_id, v_state
    FROM eshop.orders
    WHERE id = order_id AND state IN ('created', 'ordered');

    IF v_order_id IS NOT NULL THEN
        -- Update order state to 'paid'
        UPDATE eshop.orders
        SET state = 'paid', updated_at = now()
        WHERE id = v_order_id;
        
        -- Update all associated tickets to 'valid'
        UPDATE eshop.tickets
        SET state = 'valid', updated_at = now()
        WHERE id IN (
            SELECT ticket 
            FROM eshop.order_product_ticket 
            WHERE "order" = v_order_id
        );
    END IF;
END;
$$;