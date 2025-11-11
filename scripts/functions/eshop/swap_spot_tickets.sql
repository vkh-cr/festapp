CREATE OR REPLACE FUNCTION swap_spot_tickets(spot_id_1 BIGINT, spot_id_2 BIGINT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    -- Spot & Occasion Data
    spot1 RECORD;
    spot2 RECORD;
    occasion_id_common BIGINT;
    has_permission BOOLEAN;
    now_time TIMESTAMP WITH TIME ZONE := NOW();

    -- Data for Spot 1's Ticket/Order
    opt_1 RECORD; -- Full row from order_product_ticket
    order_1 RECORD; -- Full row from orders
    ticket_1_json JSONB;
    product_1_price NUMERIC;
    product_1_json_full JSONB;
    original_product_id_1 BIGINT;

    -- Data for Spot 2's Ticket/Order
    opt_2 RECORD; -- Full row from order_product_ticket
    order_2 RECORD; -- Full row from orders
    ticket_2_json JSONB;
    product_2_price NUMERIC;
    product_2_json_full JSONB;
    original_product_id_2 BIGINT;

    -- New Order Data
    new_data_1 JSONB;
    new_data_2 JSONB;
    new_price_1 NUMERIC;
    new_price_2 NUMERIC;
    new_state_1 TEXT;
    new_state_2 TEXT;

    -- Price Deltas
    delta_1 NUMERIC;
    delta_2 NUMERIC;

BEGIN
    -- 1. Input Validation
    IF spot_id_1 IS NULL OR spot_id_2 IS NULL THEN
        RAISE EXCEPTION 'Both spot_id_1 and spot_id_2 must be provided' USING ERRCODE = '22023';
    END IF;
    IF spot_id_1 = spot_id_2 THEN
        RAISE EXCEPTION 'Cannot swap a spot with itself' USING ERRCODE = '22023';
    END IF;

    -- 2. Fetch Spot Data
    SELECT * INTO spot1 FROM eshop.spots WHERE id = spot_id_1;
    IF NOT FOUND THEN RAISE EXCEPTION 'Spot 1 not found (ID: %)', spot_id_1 USING ERRCODE = 'P0002'; END IF;
    SELECT * INTO spot2 FROM eshop.spots WHERE id = spot_id_2;
    IF NOT FOUND THEN RAISE EXCEPTION 'Spot 2 not found (ID: %)', spot_id_2 USING ERRCODE = 'P0002'; END IF;

    -- 3. Permission and Occasion Check
    IF spot1.occasion IS NULL OR spot2.occasion IS NULL THEN
         RAISE EXCEPTION 'Spots are missing occasion information' USING ERRCODE = '22004';
    END IF;
    IF spot1.occasion <> spot2.occasion THEN
        RAISE EXCEPTION 'Spots do not belong to the same occasion (Spot1: %, Spot2: %)', spot1.occasion, spot2.occasion USING ERRCODE = 'P0001';
    END IF;
    occasion_id_common := spot1.occasion;

    -- Check permission
    BEGIN
        SELECT get_is_editor_order_on_occasion(occasion_id_common) INTO has_permission;
    EXCEPTION
        WHEN undefined_function THEN RAISE EXCEPTION 'Permission check function get_is_editor_order_on_occasion() does not exist.' USING ERRCODE = '42883';
        WHEN OTHERS THEN RAISE EXCEPTION 'Error during permission check: %', SQLERRM;
    END;
    IF has_permission <> TRUE THEN
        RAISE EXCEPTION 'User is not authorized to edit orders for this occasion' USING ERRCODE = '42501';
    END IF;

    -- 4. Get Full Ticket, Product, and Order Data

    -- Guard: Ensure both spots are assigned
    IF spot1.order_product_ticket IS NULL OR spot2.order_product_ticket IS NULL THEN
        RAISE EXCEPTION 'Both spots must be assigned to a ticket to be swapped.' USING ERRCODE = 'P0001';
    END IF;

    -- Get all data for Spot 1's ticket/order
    SELECT * INTO opt_1 FROM eshop.order_product_ticket WHERE id = spot1.order_product_ticket;
    SELECT * INTO order_1 FROM eshop.orders WHERE id = opt_1."order";
    original_product_id_1 := opt_1.product; -- Store original product ID

    SELECT tckt INTO ticket_1_json
    FROM jsonb_array_elements(order_1.data->'tickets') tckt
    WHERE (tckt->>'id')::bigint = opt_1.ticket;

    SELECT prod, (prod->>'price')::numeric INTO product_1_json_full, product_1_price
    FROM jsonb_array_elements(ticket_1_json->'products') prod
    WHERE (prod->>'id')::bigint = original_product_id_1;

    IF product_1_price IS NULL OR product_1_json_full IS NULL THEN
        RAISE EXCEPTION 'Could not find price/data for product % on ticket %.', original_product_id_1, opt_1.ticket;
    END IF;

    -- Get all data for Spot 2's ticket/order
    SELECT * INTO opt_2 FROM eshop.order_product_ticket WHERE id = spot2.order_product_ticket;
    SELECT * INTO order_2 FROM eshop.orders WHERE id = opt_2."order";
    original_product_id_2 := opt_2.product; -- Store original product ID

    SELECT tckt INTO ticket_2_json
    FROM jsonb_array_elements(order_2.data->'tickets') tckt
    WHERE (tckt->>'id')::bigint = opt_2.ticket;

    SELECT prod, (prod->>'price')::numeric INTO product_2_json_full, product_2_price
    FROM jsonb_array_elements(ticket_2_json->'products') prod
    WHERE (prod->>'id')::bigint = original_product_id_2;

    IF product_2_price IS NULL OR product_2_json_full IS NULL THEN
        RAISE EXCEPTION 'Could not find price/data for product % on ticket %.', original_product_id_2, opt_2.ticket;
    END IF;

    -- 5. Perform the Financial & Structural Swap (Conditionally)
    -- Only do this complex update if the products are different.
    IF original_product_id_1 IS DISTINCT FROM original_product_id_2 THEN

        -- First, update the FK on the order_product_ticket table
        UPDATE eshop.order_product_ticket SET product = original_product_id_2 WHERE id = opt_1.id;
        UPDATE eshop.order_product_ticket SET product = original_product_id_1 WHERE id = opt_2.id;

        -- Check if orders are different
        IF order_1.id <> order_2.id THEN
            -------------------------------------
            -- CASE 1: DIFFERENT ORDERS
            -------------------------------------

            -- 5a. Calculate Price Deltas
            delta_1 := product_2_price - product_1_price; -- For Order 1
            delta_2 := product_1_price - product_2_price; -- For Order 2

            -- 5b. Update Payment Info
            IF delta_1 <> 0 THEN
                UPDATE eshop.payment_info SET amount = amount + delta_1 WHERE id = order_1.payment_info;
            END IF;
            IF delta_2 <> 0 THEN
                UPDATE eshop.payment_info SET amount = amount + delta_2 WHERE id = order_2.payment_info;
            END IF;

            -- 5c. Update Order 1's data: find product 1 on ticket 1, replace with product 2's JSON
            new_data_1 := jsonb_set(
                order_1.data,
                '{tickets}',
                (SELECT jsonb_agg(
                    CASE WHEN (tckt->>'id')::bigint = opt_1.ticket
                    THEN jsonb_set(
                        tckt,
                        '{products}',
                        (SELECT jsonb_agg(
                            CASE
                                WHEN (prod->>'id')::bigint = original_product_id_1
                                THEN product_2_json_full -- Swap in Product 2's JSON
                                ELSE prod
                            END
                        ) FROM jsonb_array_elements(tckt->'products') prod)
                    )
                    ELSE tckt
                    END
                ) FROM jsonb_array_elements(order_1.data->'tickets') tckt)
            );

            -- 5d. Update Order 2's data: find product 2 on ticket 2, replace with product 1's JSON
            new_data_2 := jsonb_set(
                order_2.data,
                '{tickets}',
                (SELECT jsonb_agg(
                    CASE WHEN (tckt->>'id')::bigint = opt_2.ticket
                    THEN jsonb_set(
                        tckt,
                        '{products}',
                        (SELECT jsonb_agg(
                            CASE
                                WHEN (prod->>'id')::bigint = original_product_id_2
                                THEN product_1_json_full -- Swap in Product 1's JSON
                                ELSE prod
                            END
                        ) FROM jsonb_array_elements(tckt->'products') prod)
                    )
                    ELSE tckt
                    END
                ) FROM jsonb_array_elements(order_2.data->'tickets') tckt)
            );

            -- 5e. Calculate new prices and states
            new_price_1 := COALESCE(order_1.price, 0) + delta_1;
            new_price_2 := COALESCE(order_2.price, 0) + delta_2;

            SELECT CASE
                WHEN COALESCE(pi.paid, 0) >= new_price_1 AND new_price_1 > 0 THEN 'paid'
                WHEN new_price_1 <= 0 THEN 'paid'
                ELSE 'ordered'
            END INTO new_state_1
            FROM eshop.payment_info pi WHERE pi.id = order_1.payment_info;

            SELECT CASE
                WHEN COALESCE(pi.paid, 0) >= new_price_2 AND new_price_2 > 0 THEN 'paid'
                WHEN new_price_2 <= 0 THEN 'paid'
                ELSE 'ordered'
            END INTO new_state_2
            FROM eshop.payment_info pi WHERE pi.id = order_2.payment_info;

            -- 5f. Update `orders` table
            UPDATE eshop.orders
            SET price = new_price_1, data = new_data_1, state = new_state_1, updated_at = now_time
            WHERE id = order_1.id;

            UPDATE eshop.orders
            SET price = new_price_2, data = new_data_2, state = new_state_2, updated_at = now_time
            WHERE id = order_2.id;

            -- 5g. Log History for *both* orders
            INSERT INTO eshop.orders_history("order", data, state, price, currency_code)
            VALUES (order_1.id, new_data_1, new_state_1, new_price_1, order_1.currency_code);

            INSERT INTO eshop.orders_history("order", data, state, price, currency_code)
            VALUES (order_2.id, new_data_2, new_state_2, new_price_2, order_2.currency_code);

        ELSE
            -------------------------------------
            -- CASE 2: SAME ORDER
            -------------------------------------
            -- No price or payment_info changes, as the net change is 0.

            -- Build the new data blob by updating *both* tickets at once
            new_data_1 := jsonb_set(
                order_1.data,
                '{tickets}',
                (SELECT jsonb_agg(
                    CASE
                        -- When it's Ticket 1, find and replace Product 1 with Product 2's JSON
                        WHEN (tckt->>'id')::bigint = opt_1.ticket THEN jsonb_set(
                            tckt, '{products}',
                            (SELECT jsonb_agg(
                                CASE WHEN (prod->>'id')::bigint = original_product_id_1 THEN product_2_json_full
                                     ELSE prod
                                END
                            ) FROM jsonb_array_elements(tckt->'products') prod)
                        )
                        -- When it's Ticket 2, find and replace Product 2 with Product 1's JSON
                        WHEN (tckt->>'id')::bigint = opt_2.ticket THEN jsonb_set(
                            tckt, '{products}',
                            (SELECT jsonb_agg(
                                CASE WHEN (prod->>'id')::bigint = original_product_id_2 THEN product_1_json_full
                                     ELSE prod
                                END
                            ) FROM jsonb_array_elements(tckt->'products') prod)
                        )
                        -- Otherwise, keep the ticket as-is
                        ELSE tckt
                    END
                ) FROM jsonb_array_elements(order_1.data->'tickets') tckt)
            );

            -- Price and State do not change
            new_price_1 := order_1.price;
            new_state_1 := order_1.state;

            -- Update the single order
            UPDATE eshop.orders
            SET data = new_data_1, updated_at = now_time
            WHERE id = order_1.id;

            -- Log history for the single order
            INSERT INTO eshop.orders_history("order", data, state, price, currency_code)
            VALUES (order_1.id, new_data_1, new_state_1, new_price_1, order_1.currency_code);

        END IF; -- End same-order vs different-order logic

    END IF; -- End financial update

    -- 6. Perform the Spot Swap (This *always* happens)
    -- This swaps the tickets (which now may have new products) between the spots.
    -- The `product` column on the spot must match the product *now* on the ticket.
    UPDATE eshop.spots
    SET
        order_product_ticket = CASE
            WHEN id = spot_id_1 THEN opt_2.id -- Spot 1 gets ticket 2
            WHEN id = spot_id_2 THEN opt_1.id -- Spot 2 gets ticket 1
        END,
        product = CASE
            -- Spot 1 is getting ticket 2. Ticket 2 now has original_product_id_1.
            WHEN id = spot_id_1 THEN original_product_id_1
            -- Spot 2 is getting ticket 1. Ticket 1 now has original_product_id_2.
            WHEN id = spot_id_2 THEN original_product_id_2
        END,
        updated_at = now_time
    WHERE id IN (spot_id_1, spot_id_2);

END;
$$;