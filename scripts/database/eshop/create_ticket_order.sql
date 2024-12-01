CREATE OR REPLACE FUNCTION create_ticket_order(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    order_id BIGINT;
    ticket_data JSONB;
    spot_data RECORD;
    spot_id BIGINT;
    now TIMESTAMP WITH TIME ZONE := NOW();
    calculated_price DOUBLE PRECISION := 0;
    spot_secret UUID;
    item_id BIGINT;
    used_spots JSONB := '[]'::JSONB;
    occasion_id BIGINT;
    organization_id BIGINT;
    occasion_title TEXT;
    account_number TEXT;
    account_number_human_readable TEXT;
    ticket_details JSONB := '[]'::JSONB;
    item_data RECORD;
    ticket_id BIGINT;
    order_item_ticket_id BIGINT;
    ticket_symbol TEXT;
    ticket_items JSONB := '[]'::JSONB;
    payment_info_id BIGINT;
    generated_variable_symbol BIGINT;
    bank_account_id BIGINT;
    form_key UUID;
    deadline TIMESTAMPTZ;
    form_deadline_duration BIGINT;
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
    INSERT INTO eshop.orders (created_at, updated_at, price, state, data, occasion)
    VALUES (
        now, now, 0, 'pending',
        input_data, -- Store all input_data directly
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

        -- Check if spot is already used (order_item_ticket is not NULL)
        IF spot_data.order_item_ticket IS NOT NULL THEN
            RETURN JSONB_BUILD_OBJECT('code', 1008, 'message', 'Spot is already reserved or in use');
        END IF;

        -- Add spot to used spots
        used_spots := used_spots || JSONB_BUILD_ARRAY(spot_data.id);

        -- Secret validation
        spot_secret := (input_data->>'secret')::UUID;
        IF spot_data.secret IS DISTINCT FROM spot_secret THEN
            RETURN JSONB_BUILD_OBJECT('code', 1009, 'message', 'Invalid secret for spot');
        END IF;
        IF spot_data.secret_expiration_time < now THEN
            RETURN JSONB_BUILD_OBJECT('code', 1010, 'message', 'Secret expired');
        END IF;

        -- Generate ticket symbol
        ticket_symbol := generate_ticket_symbol(organization_id, occasion_id);

        -- Create ticket with ticket symbol
        INSERT INTO eshop.tickets (state, occasion, ticket_symbol, created_at, updated_at)
        VALUES ('ordered', occasion_id, ticket_symbol, now, now)
        RETURNING id INTO ticket_id;

        -- Initialize ticket items array
        ticket_items := '[]'::JSONB;

        -- Process taxi, food, and spot items
        FOREACH item_id IN ARRAY ARRAY[
            (ticket_data->'taxi'->>'id')::BIGINT,
            (ticket_data->'food'->>'id')::BIGINT,
            spot_data.item
        ] LOOP
            IF item_id IS NOT NULL THEN
                SELECT i.*, it.type, i.price, i.is_hidden
                INTO item_data
                FROM eshop.items i
                LEFT JOIN eshop.item_types it ON i.item_type = it.id
                WHERE i.id = item_id AND i.occasion = occasion_id;

                IF item_data IS NULL THEN
                    RETURN JSONB_BUILD_OBJECT(
                        'code', 1011,
                        'message', 'Item not found or not part of occasion',
                        'details', item_id
                    );
                END IF;

                -- Check if item is hidden
                IF item_data.is_hidden THEN
                    RETURN JSONB_BUILD_OBJECT(
                        'code', 1012,
                        'message', 'Selected item is hidden and cannot be ordered',
                        'item_id', item_id
                    );
                END IF;

                -- Add item details to ticket items
                ticket_items := ticket_items || JSONB_BUILD_OBJECT(
                    'item_id', item_id,
                    'title', item_data.title,
                    'type', item_data.type,
                    'price', item_data.price,
                    'spot_title', CASE WHEN item_id = spot_data.item THEN spot_data.title ELSE NULL END,
                    'description', CASE WHEN item_id = spot_data.item THEN item_data.description ELSE NULL END
                );

                -- Add item price to calculated total
                calculated_price := calculated_price + COALESCE(item_data.price, 0);

                -- Link ticket and item to the order
                INSERT INTO eshop.order_item_ticket ("order", item, ticket)
                VALUES (order_id, item_id, ticket_id)
                RETURNING id INTO order_item_ticket_id;

                -- Assign the order_item_ticket ID to the spot
                IF item_id = spot_data.item THEN
                    UPDATE eshop.spots
                    SET order_item_ticket = order_item_ticket_id, updated_at = now
                    WHERE id = spot_data.id;
                END IF;
            END IF;
        END LOOP;

        -- Add ticket with its items to ticket details
        ticket_details := ticket_details || JSONB_BUILD_OBJECT(
            'ticket_id', ticket_id,
            'ticket_symbol', ticket_symbol,
            'items', ticket_items
        );
    END LOOP;

    -- Generate variable symbol for payment
    generated_variable_symbol := generate_variable_symbol(bank_account_id);

    -- Insert payment info after calculating price
    INSERT INTO eshop.payment_info (bank_account, variable_symbol, amount, created_at, deadline)
    VALUES (bank_account_id, generated_variable_symbol, calculated_price, now, deadline)
    RETURNING id INTO payment_info_id;

    -- Update the order with the calculated price and payment info
    UPDATE eshop.orders
    SET price = calculated_price, state = 'ordered', payment_info = payment_info_id
    WHERE id = order_id;

    -- Log order to orders_history with price and tickets
    INSERT INTO eshop.orders_history (created_at, data, "order", state, price)
    VALUES (
        now,
        JSONB_BUILD_OBJECT('input_data', input_data, 'tickets', ticket_details, 'price', calculated_price),
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
            'account_number_human_readable', account_number_human_readable
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
