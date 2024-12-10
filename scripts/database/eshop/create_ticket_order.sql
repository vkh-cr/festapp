CREATE OR REPLACE FUNCTION create_ticket_order(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    order_id BIGINT;
    ticket_data JSONB;
    spot_data RECORD;
    now TIMESTAMP WITH TIME ZONE := NOW();
    calculated_price NUMERIC(10,2) := 0;
    spot_secret UUID;
    product_id BIGINT;
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
BEGIN
    -- Validate input data and extract form key
    IF input_data IS NULL OR input_data->'form' IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1001, 'message', 'Missing form key in input data');
    END IF;

    IF input_data->>'email' IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1002, 'message', 'Missing email in input data');
    END IF;

    form_key := (input_data->>'form')::UUID;

    -- Fetch form data, including occasion, bank account, and deadline duration
    SELECT occasion, bank_account, deadline_duration_seconds
    INTO occasion_id, bank_account_id, form_deadline_duration
    FROM public.forms
    WHERE key = form_key;

    IF occasion_id IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1003, 'message', 'Form is not linked to any occasion');
    END IF;
    IF bank_account_id IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1004, 'message', 'Form is not linked to any bank account');
    END IF;

    -- Fetch organization_id and occasion_title from the occasion
    SELECT organization, title INTO organization_id, occasion_title
    FROM public.occasions
    WHERE id = occasion_id;

    IF organization_id IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1005, 'message', 'No organization found for the occasion');
    END IF;

    -- Fetch account number and account number human readable from the bank account
    SELECT bank_accounts.account_number, bank_accounts.account_number_human_readable
    INTO account_number, account_number_human_readable
    FROM eshop.bank_accounts
    WHERE id = bank_account_id;

    IF account_number IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1006, 'message', 'No account number found for the bank account');
    END IF;

    -- Calculate deadline if form_deadline_duration is not null
    IF form_deadline_duration IS NOT NULL THEN
        deadline := now + make_interval(secs => form_deadline_duration);
    ELSE
        deadline := NULL;
    END IF;

    -- Create the order before processing tickets
    INSERT INTO eshop.orders (created_at, updated_at, occasion)
    VALUES (
        now,
        now,
        occasion_id
    ) RETURNING id INTO order_id;

    -- Process tickets
    FOR ticket_data IN SELECT * FROM JSONB_ARRAY_ELEMENTS(input_data->'ticket') LOOP
        -- Spot validation
        SELECT * INTO spot_data
        FROM eshop.spots
        WHERE id = (ticket_data->'spot')::BIGINT AND occasion = occasion_id;

        IF spot_data IS NULL THEN
            RETURN JSONB_BUILD_OBJECT('code', 1007, 'message', 'Invalid or unrelated spot');
        END IF;

        -- Check if spot is already used (order_product_ticket is not NULL)
        IF spot_data.order_product_ticket IS NOT NULL THEN
            RETURN JSONB_BUILD_OBJECT('code', 1008, 'message', 'Spot is already reserved or in use');
        END IF;

        -- Add spot to used spots
        used_spots := used_spots || JSONB_BUILD_ARRAY(spot_data.id);

        -- Secret validation
        spot_secret := (input_data->>'secret')::UUID;
        IF spot_data.secret IS DISTINCT FROM spot_secret THEN
            RETURN JSONB_BUILD_OBJECT('code', 1009, 'message', 'Invalid secret for spot');
        END IF;

        -- Generate ticket symbol
        ticket_symbol := generate_ticket_symbol(organization_id, occasion_id);

        -- Create ticket with ticket symbol and note
        INSERT INTO eshop.tickets (state, occasion, ticket_symbol, note, created_at, updated_at)
        VALUES (
            'ordered',
            occasion_id,
            ticket_symbol,
            ticket_data->>'note',
            now,
            now
        )
        RETURNING id INTO ticket_id;

        -- Initialize ticket products array
        ticket_products := '[]'::JSONB;

        -- Process taxi, food, and spot products
        FOREACH product_id IN ARRAY ARRAY[
            (ticket_data->'taxi'->>'id')::BIGINT,
            (ticket_data->'food'->>'id')::BIGINT,
            spot_data.product
        ] LOOP
            IF product_id IS NOT NULL THEN
                SELECT i.*, it.type
                INTO product_data
                FROM eshop.products i
                LEFT JOIN eshop.product_types it ON i.product_type = it.id
                WHERE i.id = product_id AND i.occasion = occasion_id;

                IF product_data IS NULL THEN
                    RETURN JSONB_BUILD_OBJECT(
                        'code', 1011,
                        'message', 'Product not found or not part of occasion',
                        'details', product_id
                    );
                END IF;

                -- Check if product is hidden
                IF product_data.is_hidden THEN
                    RETURN JSONB_BUILD_OBJECT(
                        'code', 1012,
                        'message', 'Selected product is hidden and cannot be ordered',
                        'product_id', product_id
                    );
                END IF;

                -- Check if product currency matches
                IF first_currency_code IS NULL THEN
                    first_currency_code := product_data.currency_code; -- Set the currency for the first product
                ELSE
                    IF product_data.currency_code IS DISTINCT FROM first_currency_code THEN
                        RETURN JSONB_BUILD_OBJECT(
                            'code', 1014,
                            'message', 'Products in the order must have the same currency',
                            'product_id', product_id,
                            'expected_currency', first_currency_code,
                            'actual_currency', product_data.currency_code
                        );
                    END IF;
                END IF;

                -- Add product details to ticket products
                ticket_products := ticket_products || JSONB_BUILD_OBJECT(
                    'product_id', product_id,
                    'title', product_data.title,
                    'type', product_data.type,
                    'price', product_data.price,
                    'currency_code', product_data.currency_code,
                    'spot_title', CASE WHEN product_id = spot_data.product THEN spot_data.title ELSE NULL END,
                    'description', CASE WHEN product_id = spot_data.product THEN product_data.description ELSE NULL END
                );

                -- Add product price to calculated total
                calculated_price := calculated_price + COALESCE(product_data.price, 0)::NUMERIC(10,2);

                -- Link ticket and product to the order
                INSERT INTO eshop.order_product_ticket ("order", product, ticket)
                VALUES (order_id, product_id, ticket_id)
                RETURNING id INTO order_product_ticket_id;

                -- Assign the order_product_ticket ID to the spot
                IF product_id = spot_data.product THEN
                    UPDATE eshop.spots
                    SET order_product_ticket = order_product_ticket_id, updated_at = now
                    WHERE id = spot_data.id;
                END IF;
            END IF;
        END LOOP;

        -- Add ticket with its products and note to ticket details
        ticket_details := ticket_details || JSONB_BUILD_OBJECT(
            'ticket_id', ticket_id,
            'ticket_symbol', ticket_symbol,
            'note', ticket_data->>'note',
            'products', ticket_products
        );
    END LOOP;

    -- Generate variable symbol for payment
    generated_variable_symbol := generate_variable_symbol(bank_account_id);

    -- Insert payment info after calculating price
    INSERT INTO eshop.payment_info (bank_account, variable_symbol, amount, created_at, deadline)
    VALUES (bank_account_id, generated_variable_symbol, calculated_price, now, deadline)
    RETURNING id INTO payment_info_id;

    -- Update the order with the calculated price, payment info, and tickets
    UPDATE eshop.orders
    SET
        price = calculated_price,
        state = 'ordered',
        payment_info = payment_info_id,
        data = input_data - 'ticket' || JSONB_BUILD_OBJECT('tickets', ticket_details)
    WHERE id = order_id;


    -- Log order to orders_history with price and tickets
    INSERT INTO eshop.orders_history (created_at, data, "order", state, price)
    VALUES (
        now,
        JSONB_BUILD_OBJECT('input_data', input_data, 'tickets', ticket_details, 'price', calculated_price, 'currency_code', first_currency_code),
        order_id,
        'ordered',
        calculated_price
    );

    -- Return success response with order ID, tickets, and payment info
    RETURN JSONB_BUILD_OBJECT(
        'code', 200,
        'order_id', order_id,
        'tickets', ticket_details,
        'payment_info', JSONB_BUILD_OBJECT(
            'payment_info_id', payment_info_id,
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
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN JSONB_BUILD_OBJECT('code', 1013, 'message', SQLERRM);
END;
$$;
