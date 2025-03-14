CREATE OR REPLACE FUNCTION create_ticket_order(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result JSONB;
    order_id BIGINT;
    ticket_data JSONB;
    spot_data RECORD;
    spot_id BIGINT;
    spot_product RECORD;
    now TIMESTAMPTZ := NOW();
    calculated_price NUMERIC(10,2) := 0;
    spot_secret UUID;
    product_id BIGINT;
    ordered_count BIGINT;
    used_spots JSONB := '[]'::JSONB;
    occasion_id BIGINT;
    organization_id BIGINT;
    occasion_title TEXT;
    account_number TEXT;
    account_number_human_readable TEXT;
    ticket_details JSONB := '[]'::JSONB;
    product_data RECORD;
    ticket_id BIGINT;
    order_product_ticket_id BIGINT;
    ticket_symbol TEXT;
    ticket_products JSONB := '[]'::JSONB;
    payment_info_id BIGINT;
    generated_variable_symbol BIGINT;
    bank_account_id BIGINT;
    form_key UUID;
    deadline TIMESTAMPTZ;
    form_deadline_duration BIGINT;
    currency_code TEXT;
    first_currency_code TEXT := NULL;
    field_item JSONB;
    products_array BIGINT[] := '{}';
    form_id BIGINT;
    field_type TEXT;
    key_val RECORD;
    order_data JSONB;
    order_note TEXT;
    ticket_note TEXT; -- renamed from local_note
BEGIN
    -- Wrap the entire logic in a subtransaction block to ensure that if any error occurs,
    -- all operations performed inside the block are rolled back.
    BEGIN
        -- Validate input_data and extract form key and email
        IF input_data IS NULL OR input_data->'form' IS NULL THEN
            RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1001, 'message', 'Missing form key in input data')::TEXT;
        END IF;

        form_key := (input_data->>'form')::UUID;
        SELECT id, occasion, bank_account, deadline_duration_seconds
        INTO form_id, occasion_id, bank_account_id, form_deadline_duration
        FROM public.forms
        WHERE key = form_key;

        IF occasion_id IS NULL THEN
            RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1003, 'message', 'Form is not linked to any occasion')::TEXT;
        END IF;
        IF bank_account_id IS NULL THEN
            RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1004, 'message', 'Form is not linked to any bank account')::TEXT;
        END IF;

        -- Fetch organization and occasion title from the occasion
        SELECT organization, title
        INTO organization_id, occasion_title
        FROM public.occasions
        WHERE id = occasion_id;
        IF organization_id IS NULL THEN
            RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1005, 'message', 'No organization found for the occasion')::TEXT;
        END IF;
        SELECT bank_accounts.account_number, bank_accounts.account_number_human_readable
        INTO account_number, account_number_human_readable
        FROM eshop.bank_accounts
        WHERE id = bank_account_id;

        IF account_number IS NULL THEN
            RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1006, 'message', 'No account number found for the bank account')::TEXT;
        END IF;

        -- Calculate deadline if deadline duration is provided
        IF form_deadline_duration IS NOT NULL THEN
            deadline := now + make_interval(secs => form_deadline_duration);
        ELSE
            deadline := NULL;
        END IF;

        IF input_data ? 'fields' THEN
            FOR key_val IN
                SELECT kv.key, kv.value
                FROM jsonb_array_elements(input_data->'fields') AS elem,
                     LATERAL jsonb_each_text(elem) AS kv(key, value)
            LOOP
                PERFORM 1 FROM public.form_fields ff
                WHERE ff.id = key_val.key::BIGINT AND ff.form = form_id AND ff.is_hidden = false;
                IF NOT FOUND THEN
                    RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1016, 'message', 'Invalid form field: ' || key_val.key)::TEXT;
                END IF;
                SELECT ff.type INTO field_type FROM public.form_fields ff WHERE ff.id = key_val.key::BIGINT;
                IF field_type IN ('email', 'name', 'surname', 'phone') THEN
                    IF field_type = 'email' THEN
                        input_data := jsonb_set(input_data, '{email}', to_jsonb(key_val.value), true);
                    ELSIF field_type = 'name' THEN
                        input_data := jsonb_set(input_data, '{name}', to_jsonb(key_val.value), true);
                    ELSIF field_type = 'surname' THEN
                        input_data := jsonb_set(input_data, '{surname}', to_jsonb(key_val.value), true);
                    ELSIF field_type = 'phone' THEN
                        input_data := jsonb_set(input_data, '{phone}', to_jsonb(key_val.value), true);
                    END IF;
                ELSIF field_type = 'note' THEN
                    -- This is the order note
                    input_data := jsonb_set(input_data, '{note}', to_jsonb(key_val.value), true);
                END IF;
            END LOOP;
        END IF;

        IF input_data->>'email' IS NULL THEN
            RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1002, 'message', 'Missing email in input data')::TEXT;
        END IF;

        INSERT INTO eshop.orders (created_at, updated_at, occasion)
        VALUES (now, now, occasion_id)
        RETURNING id INTO order_id;

        -- Process each ticket in the input_data "ticket" array
        FOR ticket_data IN SELECT * FROM JSONB_ARRAY_ELEMENTS(input_data->'ticket') LOOP

            spot_data := NULL;
            spot_product := NULL;
            spot_id := NULL;
            ticket_note := NULL;

            -- Validate the spot associated with the ticket (if any)
            IF ticket_data->>'spot' IS NOT NULL THEN

                SELECT * INTO spot_data
                FROM eshop.spots
                WHERE id = (ticket_data->>'spot')::BIGINT
                  AND occasion = occasion_id;

                IF spot_data IS NULL THEN
                    RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1007, 'message', 'Invalid or unrelated spot')::TEXT;
                END IF;

                -- Check if the spot is already in use
                IF spot_data.order_product_ticket IS NOT NULL THEN
                    RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1008, 'message', 'Spot is already reserved or in use')::TEXT;
                END IF;

                -- Validate the secret provided with the form against the spot's secret
                spot_secret := (input_data->>'secret')::UUID;
                IF spot_data.secret IS DISTINCT FROM spot_secret THEN
                    RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1009, 'message', 'Invalid secret for spot')::TEXT;
                END IF;

                spot_id := spot_data.id;
                -- Append the used spot id to the used_spots array
                used_spots := used_spots || JSONB_BUILD_ARRAY(spot_id);

                SELECT i.*, it.type, it.title as type_title, spot_data.title as spot_title
                INTO spot_product
                FROM eshop.products i
                LEFT JOIN eshop.product_types it ON i.product_type = it.id
                WHERE i.id = spot_data.product;
            END IF;

            -- Extract ticket note and product types from ticket.fields (ticket note is separate from order note)
            products_array := '{}';
            IF ticket_data ? 'fields' THEN
                FOR field_item IN SELECT * FROM JSONB_ARRAY_ELEMENTS(ticket_data->'fields')
                LOOP
                    IF field_item ? 'note' THEN
                        ticket_note := field_item->>'note';
                    END IF;
                    IF field_item ? 'product_type' THEN
                        products_array := products_array || ((field_item->>'product_type')::BIGINT);
                    END IF;
                END LOOP;
            END IF;

            -- Generate a ticket symbol and create the ticket record using the extracted ticket note
            ticket_symbol := generate_ticket_symbol(organization_id, occasion_id);
            INSERT INTO eshop.tickets (state, occasion, ticket_symbol, note, created_at, updated_at)
            VALUES ('ordered', occasion_id, ticket_symbol, ticket_note, now, now)
            RETURNING id INTO ticket_id;

            -- Reset ticket_products for each ticket
            ticket_products := '[]'::JSONB;

            IF spot_id IS NOT NULL THEN
                products_array := products_array || spot_product.id;
            END IF;

            -- Process each product from the accumulated products_array
            FOREACH product_id IN ARRAY products_array LOOP

                IF product_id IS NULL THEN
                    CONTINUE;
                END IF;

                SELECT i.*, it.type, it.title AS type_title, '' AS spot_title
                INTO product_data
                FROM eshop.products i
                LEFT JOIN eshop.product_types it ON i.product_type = it.id
                WHERE i.id = product_id
                  AND it.occasion = occasion_id;

                IF product_data IS NULL THEN
                    RAISE EXCEPTION '%',
                        jsonb_build_object(
                            'code', 1011,
                            'message', 'Product not found or not part of occasion',
                            'details', product_id
                        )::text;
                END IF;

                -- Check if the product order would exceed its maximum allowed quantity
                IF COALESCE(product_data.maximum, 0) > 0 THEN
                    SELECT COUNT(*) INTO ordered_count
                    FROM eshop.order_product_ticket
                    WHERE product = product_id;
                    IF ordered_count + 1 > product_data.maximum THEN
                        RAISE EXCEPTION '%', JSONB_BUILD_OBJECT(
                            'code', 1017,
                            'message', 'Product is overbooked',
                            'product', jsonb_strip_nulls(JSONB_BUILD_OBJECT(
                                'id', product_data.id,
                                'title', product_data.title,
                                'description', product_data.description,
                                'price', product_data.price,
                                'type', product_data.type,
                                'type_title', product_data.type_title,
                                'currency_code', product_data.currency_code
                            ))
                        )::TEXT;
                    END IF;
                END IF;

                IF product_data.type = 'spot' AND spot_product IS NULL THEN
                    spot_product := product_data;
                END IF;

                -- Check if product is hidden
                IF product_data.is_hidden THEN
                    RAISE EXCEPTION '%', JSONB_BUILD_OBJECT(
                        'code', 1012,
                        'message', 'Selected product is hidden and cannot be ordered',
                        'id', product_id
                    )::TEXT;
                END IF;

                -- Ensure that all products share the same currency
                IF first_currency_code IS NULL THEN
                    first_currency_code := product_data.currency_code;
                ELSE
                    IF product_data.currency_code IS DISTINCT FROM first_currency_code THEN
                        RAISE EXCEPTION '%', JSONB_BUILD_OBJECT(
                            'code', 1014,
                            'message', 'Products in the order must have the same currency',
                            'id', product_id,
                            'expected_currency', first_currency_code,
                            'actual_currency', product_data.currency_code
                        )::TEXT;
                    END IF;
                END IF;

                -- Build the product details for the ticket
                ticket_products := ticket_products || jsonb_strip_nulls(JSONB_BUILD_OBJECT(
                    'id', product_id,
                    'title', product_data.title,
                    'type', product_data.type,
                    'type_title', product_data.type_title,
                    'price', product_data.price,
                    'currency_code', product_data.currency_code,
                    'spot_title', CASE WHEN spot_id IS NOT NULL AND product_id = spot_product.id THEN spot_product.spot_title ELSE NULL END,
                    'description', CASE WHEN spot_id IS NOT NULL AND product_id = spot_product.id THEN spot_product.description ELSE NULL END
                ));

                -- Accumulate the product price into the order total
                calculated_price := calculated_price + COALESCE(product_data.price, 0)::NUMERIC(10,2);

                -- Link the ticket and product to the order
                INSERT INTO eshop.order_product_ticket ("order", product, ticket)
                VALUES (order_id, product_id, ticket_id)
                RETURNING id INTO order_product_ticket_id;

                -- For the spot product, link the generated order product ticket id to the spot record
                IF spot_id IS NOT NULL AND product_id = spot_product.id THEN
                    UPDATE eshop.spots
                    SET order_product_ticket = order_product_ticket_id, updated_at = now
                    WHERE id = spot_id;
                END IF;
            END LOOP;

            -- If no explicit ticket->spot was provided, then at least one of the fields must be a spot product.
            IF spot_product IS NULL THEN
                RAISE EXCEPTION '%', JSONB_BUILD_OBJECT('code', 1015, 'message', 'Spot product is missing in ticket fields')::TEXT;
            END IF;

            -- Append the ticket details (with its products and the extracted ticket note) to the overall ticket_details array
            ticket_details := ticket_details || JSONB_BUILD_OBJECT(
                'id', ticket_id,
                'ticket_symbol', ticket_symbol,
                'note', ticket_note,
                'products', ticket_products
            );
        END LOOP;

        order_data := input_data - 'ticket' || JSONB_BUILD_OBJECT('tickets', ticket_details);

        -- Generate a variable symbol and create the payment info record
        generated_variable_symbol := generate_variable_symbol(bank_account_id);
        INSERT INTO eshop.payment_info (bank_account, variable_symbol, amount, created_at, deadline)
        VALUES (bank_account_id, generated_variable_symbol, calculated_price, now, deadline)
        RETURNING id INTO payment_info_id;

        -- Update the order record with the calculated price, payment info, and modified input data (with tickets details)
        UPDATE eshop.orders
        SET price = calculated_price,
            state = 'ordered',
            payment_info = payment_info_id,
            data = order_data
        WHERE id = order_id;

        -- Log the order to orders_history with details
        INSERT INTO eshop.orders_history (created_at, data, "order", state, price)
        VALUES (
            now,
            JSONB_BUILD_OBJECT('input_data', input_data, 'tickets', ticket_details),
            order_id,
            'ordered',
            calculated_price
        );

        -- Prepare the success response JSON
        result := JSONB_BUILD_OBJECT(
            'code', 200,
            'order', JSONB_BUILD_OBJECT(
                'id', order_id,
                'data', order_data,
                'payment_info', JSONB_BUILD_OBJECT(
                    'id', payment_info_id,
                    'variable_symbol', generated_variable_symbol,
                    'amount', calculated_price,
                    'deadline', deadline,
                    'account_number', account_number,
                    'account_number_human_readable', account_number_human_readable,
                    'currency_code', first_currency_code
                ),
                'occasion', JSONB_BUILD_OBJECT(
                    'id', occasion_id,
                    'occasion_title', occasion_title
                )
            )
        );

    EXCEPTION WHEN OTHERS THEN
        -- In case of any error, the inner block is rolled back and we capture the error message.
        result := CASE
            WHEN left(SQLERRM, 1) = '{' THEN SQLERRM::JSONB
            ELSE JSONB_BUILD_OBJECT('code', 1013, 'message', SQLERRM)
        END;
    END;

    RETURN result;
END;
$$;
