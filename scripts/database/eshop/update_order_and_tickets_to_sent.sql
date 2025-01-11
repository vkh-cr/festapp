CREATE OR REPLACE FUNCTION update_order_and_tickets_to_sent(order_id bigint)
RETURNS jsonb AS $$
BEGIN
    -- Update the state of the order to 'sent'
    UPDATE eshop.orders
    SET state = 'sent', updated_at = now()
    WHERE id = order_id;

    -- Update the state of all tickets linked to the order to 'sent'
    UPDATE eshop.tickets
    SET state = 'sent', updated_at = now()
    FROM eshop.order_product_ticket
    WHERE eshop.order_product_ticket.ticket = eshop.tickets.id
    AND eshop.order_product_ticket."order" = order_id;

    -- Check if any rows were updated in the orders table
    IF NOT FOUND THEN
        -- Return a failure message if no orders were updated
        RETURN jsonb_build_object('code', 404, 'message', 'Order not found');
    ELSE
        -- Return a success message with a status code 200
        RETURN jsonb_build_object('code', 200, 'message', 'Order and tickets updated to sent successfully');
    END IF;
EXCEPTION WHEN OTHERS THEN
    -- Rollback is automatic on exception
    RETURN jsonb_build_object(
        'code', 500,
        'message', SQLERRM,
        'detail', coalesce(SQLERRM, 'An unexpected error occurred')
    );
END;
$$ LANGUAGE plpgsql;
