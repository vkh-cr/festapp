CREATE OR REPLACE FUNCTION storno_ticket(ticket_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    ticket_record RECORD;
    order_id BIGINT;
    ticket_price NUMERIC(10, 2) := 0;
    updated_tickets JSONB := '[]'::JSONB;
    original_data JSONB;
    ticket_data JSONB;
    product JSONB;
    remaining_opt_id BIGINT;
BEGIN
    -- Check if the ticket exists and fetch its associated data
    SELECT t.*, o.id AS order_id, o.data AS order_data, t.occasion
    INTO ticket_record
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
    JOIN eshop.orders o ON o.id = opt."order"
    WHERE t.id = ticket_id;

    IF NOT FOUND THEN
        RETURN JSONB_BUILD_OBJECT('code', 1001, 'message', 'Ticket not found');
    END IF;

    -- Check permissions using get_is_editor_on_occasion
    IF NOT get_is_editor_on_occasion(ticket_record.occasion) THEN
        RETURN JSONB_BUILD_OBJECT('code', 1002, 'message', 'Permission denied');
    END IF;

    -- Update ticket state to "storno"
    UPDATE eshop.tickets
    SET state = 'storno', updated_at = NOW()
    WHERE id = ticket_id;

    -- Nullify the relevant spot's order_product_ticket
    UPDATE eshop.spots
    SET order_product_ticket = NULL, updated_at = NOW()
    WHERE order_product_ticket IN (
        SELECT id FROM eshop.order_product_ticket WHERE ticket = ticket_id
    );

    -- Find and keep one order_product_ticket and update its product to NULL
    SELECT id INTO remaining_opt_id
    FROM eshop.order_product_ticket
    WHERE ticket = ticket_id
    LIMIT 1;

    IF remaining_opt_id IS NOT NULL THEN
        UPDATE eshop.order_product_ticket
        SET product = NULL
        WHERE id = remaining_opt_id;

        -- Delete all other order_product_ticket records for the ticket
        DELETE FROM eshop.order_product_ticket
        WHERE ticket = ticket_id AND id != remaining_opt_id;
    END IF;

    -- Remove the ticket from orders.data and calculate the price reduction
    original_data := ticket_record.order_data;
    FOR ticket_data IN SELECT JSONB_ARRAY_ELEMENTS(original_data->'tickets') LOOP
        IF (ticket_data->>'ticket_id')::BIGINT = ticket_id THEN
            -- Calculate the price of all products in the ticket
            FOR product IN SELECT JSONB_ARRAY_ELEMENTS(ticket_data->'products') LOOP
                ticket_price := ticket_price + COALESCE((product->>'price')::NUMERIC, 0);
            END LOOP;
        ELSE
            -- Keep all other tickets
            updated_tickets := updated_tickets || ticket_data;
        END IF;
    END LOOP;

    -- Update the order's data and price
    UPDATE eshop.orders
    SET
        data = original_data || JSONB_BUILD_OBJECT('tickets', updated_tickets),
        price = COALESCE(price, 0) - ticket_price,
        updated_at = NOW()
    WHERE id = ticket_record.order_id;

    -- Save the change to orders_history
    INSERT INTO eshop.orders_history (
        "order",
        data,
        state,
        price,
        created_at
    )
    VALUES (
        ticket_record.order_id,
        original_data || JSONB_BUILD_OBJECT('tickets', updated_tickets),
        'ordered',
        COALESCE((SELECT price FROM eshop.orders WHERE id = ticket_record.order_id), 0),
        NOW()
    );

    -- Return success response
    RETURN JSONB_BUILD_OBJECT(
        'code', 200,
        'message', 'Ticket successfully cancelled',
        'ticket_id', ticket_id,
        'order_id', ticket_record.order_id,
        'price_reduction', ticket_price,
        'remaining_order_product_ticket', remaining_opt_id
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN JSONB_BUILD_OBJECT('code', 500, 'message', 'An error occurred', 'details', SQLERRM);
END;
$$;
