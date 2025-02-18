CREATE OR REPLACE FUNCTION update_order_and_tickets_to_storno(order_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    ticket_ids BIGINT[];
    opt_ids BIGINT[];
    updated_order_data jsonb;
BEGIN
    -- Retrieve all ticket ids associated with the order
    SELECT ARRAY_AGG(t.id) INTO ticket_ids
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
    WHERE opt."order" = order_id;

    -- Check if the order exists and has associated tickets
    IF ticket_ids IS NULL THEN
        RAISE EXCEPTION 'Order not found or no associated tickets.';
    END IF;

    -- Retrieve all order_product_ticket ids associated with the retrieved tickets
    SELECT ARRAY_AGG(opt.id) INTO opt_ids
    FROM eshop.order_product_ticket opt
    WHERE opt.ticket = ANY(ticket_ids);

    -- Update the state of all tickets linked to the order to 'storno'
    UPDATE eshop.tickets
    SET state = 'storno', updated_at = NOW()
    WHERE id = ANY(ticket_ids);

    -- Nullify the relevant spots' order_product_ticket and update product to NULL
    UPDATE eshop.spots
    SET order_product_ticket = NULL, secret = NULL, secret_expiration_time = NULL, updated_at = NOW()
    WHERE order_product_ticket = ANY(opt_ids);

    -- Nullify order_product_ticket entries for these tickets
    UPDATE eshop.order_product_ticket
    SET product = NULL
    WHERE ticket = ANY(ticket_ids);

    -- Set the order state to 'storno', price to 0, and update the data field
    UPDATE eshop.orders
    SET state = 'storno',
        price = 0,
        data = COALESCE(data, '{}'::jsonb) || jsonb_build_object('tickets', '[]'::jsonb),
        updated_at = NOW()
    WHERE id = order_id
    RETURNING data INTO updated_order_data;

    -- Save the change to orders_history by inserting the updated order row
    INSERT INTO eshop.orders_history (
        "order",
        state,
        price,
        data,
        created_at
    )
    VALUES (
        order_id,
        'storno',
        0,
        updated_order_data,
        NOW()
    );

    -- Return success response
    RETURN JSONB_BUILD_OBJECT(
        'code', 200,
        'message', 'Order and all associated tickets successfully cancelled',
        'order_id', order_id,
        'tickets_updated', ticket_ids
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN JSONB_BUILD_OBJECT('code', 500, 'message', 'An error occurred', 'details', SQLERRM);
END;
$$;
