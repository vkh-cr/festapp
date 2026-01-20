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
    groups_json JSONB; -- New variable for groups
    order_id BIGINT;
    occasion_id BIGINT;
    target_user_id UUID; -- New variable to store the resolved User ID
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
        -- Check if the scanned_id is a valid UUID format
        is_uuid := scanned_id ~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$';

        IF is_uuid THEN
            -- If scanned by UUID, we know the user immediately
            target_user_id := scanned_id::UUID;

            SELECT t.*
              INTO ticket_row
            FROM public.occasion_users ou
            JOIN public.occasions o ON ou.occasion = o.id
            JOIN public.occasions_hidden oh ON o.occasion_hidden = oh.id
            JOIN eshop.tickets t ON ou.ticket = t.id
            WHERE ou.user = target_user_id
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
    -- 3.b. Resolve User ID if not already found via UUID scan
    -----------------------------------------------------
    -- If we found the ticket via Symbol (Step 1), we need to find who holds it
    IF target_user_id IS NULL THEN
        SELECT "user" INTO target_user_id
        FROM public.occasion_users
        WHERE ticket = ticket_row.id
          AND occasion = occasion_id
        LIMIT 1;
    END IF;

    -----------------------------------------------------
    -- 4. Retrieve the expected scan_code
    -----------------------------------------------------
    SELECT oh.secret
      INTO expected_scan_code
    FROM public.occasions_hidden oh
    JOIN public.occasions o ON o.occasion_hidden = oh.id
    WHERE o.id = occasion_id
    LIMIT 1;

    IF expected_scan_code IS NULL THEN
        RETURN jsonb_build_object('code', 400, 'message', 'Scan code not defined for this occasion');
    END IF;

    -----------------------------------------------------
    -- 5. Validate the scanned_code
    -----------------------------------------------------
    IF scanned_code != expected_scan_code THEN
        RETURN jsonb_build_object('code', 401, 'message', 'Scan code is not correct');
    END IF;

    -----------------------------------------------------
    -- 6. Fetch order, products, spot, AND GROUPS
    -----------------------------------------------------

    -- A. Fetch Order
    SELECT row_to_json(o) INTO order_json
    FROM eshop.orders o
    WHERE o.id = order_id;

    -- B. Fetch Products
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

    -- C. Fetch Spot
    SELECT row_to_json(s) INTO spot_json
    FROM eshop.spots s
    WHERE s.order_product_ticket IN (
        SELECT opt.id
          FROM eshop.order_product_ticket opt
         WHERE opt.ticket = ticket_row.id
    )
    LIMIT 1;

    -- D. Fetch User Groups (New Logic)
    IF target_user_id IS NOT NULL THEN
        -- We construct a JSON object compatible with UserGroupInfoModel
        -- We join user_groups -> user_group_info -> places to get full context
        SELECT jsonb_agg(
                 to_jsonb(ugi) ||
                 jsonb_build_object(
                    'place_object', row_to_json(p)
                 )
               )
        INTO groups_json
        FROM public.user_groups ug
        JOIN public.user_group_info ugi ON ug."group" = ugi.id
        LEFT JOIN public.places p ON ugi.place = p.id
        WHERE ug."user" = target_user_id
          AND ugi.occasion = occasion_id;
    END IF;

    -----------------------------------------------------
    -- 7. Return the compiled JSONB response
    -----------------------------------------------------
    RETURN jsonb_build_object(
        'code', 200,
        'ticket', row_to_json(ticket_row),
        'order', order_json,
        'products', products_json,
        'spot', spot_json,
        'groups', COALESCE(groups_json, '[]'::jsonb)
    );

EXCEPTION
    WHEN OTHERS THEN
        RETURN jsonb_build_object(
            'code', 500,
            'message', 'An unexpected error occurred: ' || SQLERRM
        );
END;
$$;