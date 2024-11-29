CREATE OR REPLACE FUNCTION eshop.create_ticket_order(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    order_id BIGINT;
    ticket_data JSONB;
    spot_data RECORD;
    spot_id BIGINT;
    occasion_data RECORD;
    now TIMESTAMP WITH TIME ZONE := NOW();
    calculated_price DOUBLE PRECISION := 0;
    spot_secret UUID;
    item_id BIGINT;
    used_spots JSONB := '[]'::JSONB;
    occasion_id BIGINT;
    item_details JSONB := '[]'::JSONB;
    item_data RECORD;
    ticket_id BIGINT;
BEGIN
    -- Validate input data and extract occasion
    IF input_data IS NULL OR input_data->'occasion' IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1001, 'message', 'Invalid input data or missing occasion');
    END IF;
    occasion_id := (input_data->'occasion')::BIGINT;

    -- Validate occasion and fetch organization
    SELECT * INTO occasion_data
    FROM public.occasions
    WHERE id = occasion_id AND is_hidden = FALSE AND is_open = TRUE;

    IF occasion_data IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 1002, 'message', 'Invalid or closed occasion');
    END IF;

    -- Process tickets
    FOR ticket_data IN SELECT * FROM JSONB_ARRAY_ELEMENTS(input_data->'ticket') LOOP
        -- Spot validation
        SELECT * INTO spot_data
        FROM eshop.spots
        WHERE id = (ticket_data->'spot')::BIGINT AND occasion = occasion_id;

        IF spot_data IS NULL THEN
            RETURN JSONB_BUILD_OBJECT('code', 1003, 'message', 'Invalid or unrelated spot');
        END IF;

        -- Check if spot is already used or its state is not NULL
        IF used_spots @> JSONB_BUILD_ARRAY(spot_data.id) THEN
            RETURN JSONB_BUILD_OBJECT('code', 1008, 'message', 'Spot already used');
        END IF;
        IF spot_data.state IS NOT NULL THEN
            RETURN JSONB_BUILD_OBJECT('code', 1010, 'message', 'Spot is already reserved or in use');
        END IF;

        -- Add spot to used spots
        used_spots := used_spots || JSONB_BUILD_ARRAY(spot_data.id);

        -- Secret validation
        spot_secret := (input_data->>'secret')::UUID;
        IF spot_data.secret IS DISTINCT FROM spot_secret THEN
            RETURN JSONB_BUILD_OBJECT('code', 1004, 'message', 'Invalid secret for spot');
        END IF;
        IF spot_data.secret_expiration_time < now THEN
            RETURN JSONB_BUILD_OBJECT('code', 1005, 'message', 'Secret expired');
        END IF;

        -- Create ticket first
        INSERT INTO eshop.tickets (alias, state, occasion, created_at, updated_at)
        VALUES (ticket_data->>'note', 'ordered', occasion_id, now, now)
        RETURNING id INTO ticket_id;

        -- Process taxi, food, and spot items
        FOREACH item_id IN ARRAY ARRAY[
            (ticket_data->'taxi'->>'id')::BIGINT,
            (ticket_data->'food'->>'id')::BIGINT,
            spot_data.item
        ] LOOP
            IF item_id IS NOT NULL THEN
                SELECT i.*, it.type, COALESCE(pw.price, i.price) AS final_price
                INTO item_data
                FROM eshop.items i
                LEFT JOIN eshop.item_types it ON i.item_type = it.id
                LEFT JOIN (
                    SELECT * FROM eshop.price_waves
                    WHERE start_time <= now
                    ORDER BY start_time DESC LIMIT 1
                ) pw ON pw.item = i.id
                WHERE i.id = item_id AND i.occasion = occasion_id;

                IF item_data IS NULL THEN
                    RETURN JSONB_BUILD_OBJECT(
                        'code', 1006,
                        'message', 'Item not found or not part of occasion',
                        'details', item_id
                    );
                END IF;

                -- Build item details, conditionally including spot-specific keys and ticket_id
                item_details := item_details || JSONB_BUILD_OBJECT(
                    'item_id', item_id,
                    'ticket_id', ticket_id,
                    'title', item_data.title,
                    'type', item_data.type,
                    'price', item_data.final_price,
                    'spot_title', CASE WHEN item_id = spot_data.item THEN spot_data.title ELSE NULL END,
                    'description', CASE WHEN item_id = spot_data.item THEN item_data.description ELSE NULL END
                );

                -- Add item price to calculated total
                calculated_price := calculated_price + COALESCE(item_data.final_price, item_data.price, 0);

                -- Link ticket and item to the order
                INSERT INTO eshop.order_item_ticket ("order", item, ticket)
                VALUES (order_id, item_id, ticket_id);
            END IF;
        END LOOP;
    END LOOP;

    -- Create order with calculated price
    INSERT INTO eshop.orders (created_at, updated_at, price, state, data, occasion)
    VALUES (
        now, now, calculated_price, 'ordered',
        JSONB_BUILD_OBJECT(
            'name', input_data->>'name',
            'surname', input_data->>'surname',
            'email', input_data->>'email',
            'note', input_data->>'note',
            'price', calculated_price
        ),
        occasion_id
    ) RETURNING id INTO order_id;

    -- Log order to orders_history with price
    INSERT INTO eshop.orders_history (created_at, data, "order", state, price)
    VALUES (
        now,
        JSONB_BUILD_OBJECT('input_data', input_data, 'items', item_details, 'price', calculated_price),
        order_id,
        'ordered',
        calculated_price
    );

    -- Update spot states
    FOR spot_id IN
        SELECT value::BIGINT
        FROM JSONB_ARRAY_ELEMENTS_TEXT(used_spots) AS value
    LOOP
        UPDATE eshop.spots
        SET state = 'ordered', updated_at = now
        WHERE id = spot_id;
    END LOOP;

    -- Return success response with order ID and items
    RETURN JSONB_BUILD_OBJECT(
        'code', 200,
        'order_id', order_id,
        'items', item_details
    );
EXCEPTION
    WHEN OTHERS THEN
        RETURN JSONB_BUILD_OBJECT('code', 1009, 'message', SQLERRM);
END;
$$;