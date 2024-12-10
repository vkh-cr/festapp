CREATE OR REPLACE FUNCTION storno_ticket(ticket_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    ticket_record RECORD;
    order_id BIGINT;
    ticket_price NUMERIC(10, 2) := 0;
    updated_tickets JSONB := '[]'::JSONB;
    original_data JSONB;
BEGIN
    -- Check if the ticket exists and fetch its associated data
    SELECT t.*, o.id AS order_id, o.data AS order_data
    INTO ticket_record
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
    JOIN eshop.orders o ON o.id = opt."order"
    WHERE t.id = ticket_id;

    IF NOT FOUND THEN
        RETURN JSONB_BUILD_OBJECT('code', 1001, 'message', 'Ticket not found');
    END IF;

    -- Check permissions (replace `isEditor` logic with your implementation)
    IF NOT is_editor_function() THEN
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

    -- Remove the ticket from orders.data and calculate the price reduction
    original_data := ticket_record.order_data;
    FOR ticket IN SELECT * FROM JSONB_ARRAY_ELEMENTS(original_data->'tickets') LOOP
        IF (ticket->>'ticket_id')::BIGINT = ticket_id THEN
            -- Calculate the price of all products in the ticket
            FOR product IN SELECT * FROM JSONB_ARRAY_ELEMENTS(ticket->'products') LOOP
                ticket_price := ticket_price + COALESCE((product->>'price')::NUMERIC, 0);
            END LOOP;
        ELSE
            -- Keep all other tickets
            updated_tickets := updated_tickets || ticket;
        END IF;
    END LOOP;

    -- Update the order's data and price
    UPDATE eshop.orders
    SET
        data = original_data || JSONB_BUILD_OBJECT('tickets', updated_tickets),
        price = COALESCE(price, 0) - ticket_price,
        updated_at = NOW()
    WHERE id = ticket_record.order_id;

    -- Return success response
    RETURN JSONB_BUILD_OBJECT(
        'code', 200,
        'message', 'Ticket successfully cancelled',
        'ticket_id', ticket_id,
        'order_id', ticket_record.order_id,
        'price_reduction', ticket_price
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN JSONB_BUILD_OBJECT('code', 500, 'message', 'An error occurred', 'details', SQLERRM);
END;
$$;
