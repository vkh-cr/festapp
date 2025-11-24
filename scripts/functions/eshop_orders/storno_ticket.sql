CREATE OR REPLACE FUNCTION storno_ticket_221(ticket_id BIGINT)
RETURNS VOID
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
    remaining_active_tickets_count BIGINT;
BEGIN
    -- Check if the ticket exists and fetch its associated data
    SELECT t.*, o.id AS order_id, o.data AS order_data, t.occasion
    INTO ticket_record
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
    JOIN eshop.orders o ON o.id = opt."order"
    WHERE t.id = ticket_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Ticket not found (ID: %)', ticket_id;
    END IF;

    IF NOT get_is_editor_order_on_occasion(ticket_record.occasion) THEN
        RAISE EXCEPTION 'Permission denied to storno ticket on occasion %', ticket_record.occasion;
    END IF;

    -- Check if this is the last non-storno ticket on the order.
    SELECT COUNT(t.id)
    INTO remaining_active_tickets_count
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
    WHERE opt."order" = ticket_record.order_id
      AND t.id != ticket_id
      AND (t.state IS NULL OR t.state != 'storno');

    -- If it is the last active ticket, storno the whole order instead and exit.
    IF remaining_active_tickets_count = 0 THEN
        PERFORM public.update_order_and_tickets_to_storno_ws_221(ticket_record.order_id);
        RETURN; -- Exit the function
    END IF;


    -- Call the helper to storno the single ticket and its relations
    PERFORM internal_storno_tickets_221(ARRAY[ticket_id]);
    -- All the logic for tickets, spots, and occasion_users is now done.

    -- Remove the ticket from orders.data and calculate the price reduction
    original_data := ticket_record.order_data;
    FOR ticket_data IN SELECT JSONB_ARRAY_ELEMENTS(original_data->'tickets') LOOP
        IF (ticket_data->>'id')::BIGINT = ticket_id THEN
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

END;
$$;