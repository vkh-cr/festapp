CREATE OR REPLACE FUNCTION scan_ticket(scanned_id TEXT, scanned_code TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    ticket_row RECORD;
    order_json JSONB;
    products_json JSONB;
    spot_json JSONB;
    order_id BIGINT;
    occasion_id BIGINT;
    expected_scan_code TEXT;
    is_uuid BOOLEAN;
BEGIN
    -----------------------------------------------------
    -- 1. Attempt to find ticket by Ticket Symbol
    -----------------------------------------------------
    SELECT *
      INTO ticket_row
    FROM eshop.tickets
    WHERE ticket_symbol = scanned_id
    LIMIT 1;

    -----------------------------------------------------
    -- 1.a. Fallback: Scan by User ID if Ticket Symbol not found
    -----------------------------------------------------
    IF ticket_row IS NULL THEN
        -- Check if the scanned_id is a valid UUID format to avoid casting errors
        is_uuid := scanned_id ~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$';

        IF is_uuid THEN
            -- Logic:
            -- 1. Find the user in occasion_users (using scanned_id as user UUID).
            -- 2. Join with Occasion and Occasion_Hidden to validate the SECRET (scanned_code) immediately.
            --    (We must do this here because a user might belong to multiple occasions,
            --     so the secret tells us which occasion context we are in).
            -- 3. Retrieve the linked ticket.
            SELECT t.*
              INTO ticket_row
            FROM public.occasion_users ou
            JOIN public.occasions o ON ou.occasion = o.id
            JOIN public.occasions_hidden oh ON o.occasion_hidden = oh.id
            JOIN eshop.tickets t ON ou.ticket = t.id
            WHERE ou.user = scanned_id::UUID
              AND oh.secret = scanned_code
            LIMIT 1;
        END IF;
    END IF;

    -----------------------------------------------------
    -- 1.b. Final Check if Ticket is still missing
    -----------------------------------------------------
    IF ticket_row IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'Ticket or User with valid ticket not found');
    END IF;

    -----------------------------------------------------
    -- 2. Retrieve the associated order ID
    -----------------------------------------------------
    SELECT opt."order" INTO order_id
    FROM eshop.order_product_ticket opt
    WHERE opt.ticket = ticket_row.id
    LIMIT 1;

    IF order_id IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'Order for ticket not found');
    END IF;

    -----------------------------------------------------
    -- 3. Retrieve the occasion ID from the order
    -----------------------------------------------------
    SELECT o.occasion INTO occasion_id
    FROM eshop.orders o
    WHERE o.id = order_id
    LIMIT 1;

    IF occasion_id IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'Occasion for order not found');
    END IF;

    -----------------------------------------------------
    -- 4. Retrieve the expected scan_code
    -----------------------------------------------------
    -- Retrieve secret from occasions_hidden table via foreign key
    SELECT oh.secret
      INTO expected_scan_code
    FROM public.occasions_hidden oh
    JOIN public.occasions o ON o.occasion_hidden = oh.id
    WHERE o.id = occasion_id
    LIMIT 1;

    IF expected_scan_code IS NULL THEN
        RETURN jsonb_build_object(
            'code', 400,
            'message', 'Scan code not defined for this occasion'
        );
    END IF;

    -----------------------------------------------------
    -- 5. Validate the scanned_code
    -----------------------------------------------------
    -- Note: If we found the ticket via the User Fallback (Step 1.a),
    -- we effectively already validated the code in the JOIN.
    -- However, repeating this check here ensures security consistency
    -- for both lookup methods.
    IF scanned_code != expected_scan_code THEN
        RETURN jsonb_build_object(
            'code', 401,
            'message', 'Scan code is not correct'
        );
    END IF;

    -----------------------------------------------------
    -- 6. Proceed with fetching order, products, and spot details
    -----------------------------------------------------

    -- Fetch the order details as JSON
    SELECT row_to_json(o)
      INTO order_json
    FROM eshop.orders o
    WHERE o.id = order_id;

    -- Fetch the associated products as JSONB array
    SELECT jsonb_agg(
             jsonb_build_object(
               'id', p.id,
               'title', p.title,
               'price', p.price,
               'order', p."order",
               'description', p.description,
               'currency_code', p.currency_code
             )
           )
      INTO products_json
    FROM eshop.products p
    WHERE p.id IN (
        SELECT opt.product
          FROM eshop.order_product_ticket opt
         WHERE opt.ticket = ticket_row.id
    );

    -- Fetch the associated spot as JSON
    SELECT row_to_json(s)
      INTO spot_json
    FROM eshop.spots s
    WHERE s.order_product_ticket IN (
        SELECT opt.id
          FROM eshop.order_product_ticket opt
         WHERE opt.ticket = ticket_row.id
    )
    LIMIT 1;

    -----------------------------------------------------
    -- 7. Return the compiled JSONB response
    -----------------------------------------------------
    RETURN jsonb_build_object(
        'code', 200,
        'ticket', row_to_json(ticket_row),
        'order', order_json,
        'products', products_json,
        'spot', spot_json
    );

EXCEPTION
    WHEN OTHERS THEN
        -- Handle unexpected errors gracefully
        RETURN jsonb_build_object(
            'code', 500,
            'message', 'An unexpected error occurred: ' || SQLERRM
        );
END;
$$;