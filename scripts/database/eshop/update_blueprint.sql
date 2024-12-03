CREATE OR REPLACE FUNCTION update_blueprint(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    blueprint_id BIGINT;
    updated_objects JSONB := '[]'::JSONB;
    object_data JSONB;
    spot_id BIGINT;
    now TIMESTAMP WITH TIME ZONE := NOW();
    spot RECORD;
    spot_ids_in_objects BIGINT[] := ARRAY[]::BIGINT[];
    existing_spot_ids BIGINT[];
    occasion_id BIGINT;
    organization_id BIGINT;
BEGIN
    -- Validate input data
    IF input_data IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 400, 'message', 'Input data is missing');
    END IF;

    -- Get occasion ID from input data
    IF input_data->>'occasion' IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 400, 'message', 'Missing occasion ID in input data');
    END IF;

    occasion_id := (input_data->>'occasion')::BIGINT;

    -- Get organization ID from input data
    IF input_data->>'organization' IS NULL THEN
        RETURN JSONB_BUILD_OBJECT('code', 400, 'message', 'Missing organization ID in input data');
    END IF;

    organization_id := (input_data->>'organization')::BIGINT;

    -- Get blueprint ID
    blueprint_id := NULLIF(input_data->>'id', '')::BIGINT;

    IF blueprint_id IS NULL THEN
        -- Create a new blueprint
        INSERT INTO eshop.blueprints (
            created_at,
            data,
            title,
            organization,
            configuration,
            objects,
            groups,
            occasion
        )
        VALUES (
            now,
            input_data->'data',
            input_data->>'title',
            organization_id,
            input_data->'configuration',
            '[]'::JSONB,
            input_data->'groups',
            occasion_id
        )
        RETURNING id INTO blueprint_id;
    END IF;

    -- Process objects in input_data->'objects'
    IF input_data->'objects' IS NOT NULL THEN
        FOR object_data IN SELECT * FROM JSONB_ARRAY_ELEMENTS(input_data->'objects') LOOP
            -- Handle "spot" type objects
            IF object_data->>'type' = 'spot' THEN
                -- Collect spot IDs from objects
                IF object_data ? 'id' AND object_data->>'id' IS NOT NULL THEN
                    spot_ids_in_objects := spot_ids_in_objects || (object_data->>'id')::BIGINT;
                ELSE
                    -- Create a new spot if ID is null
                    INSERT INTO eshop.spots (
                        created_at,
                        updated_at,
                        occasion,
                        blueprint,
                        title
                    )
                    VALUES (
                        now,
                        now,
                        occasion_id,
                        blueprint_id,
                        object_data->>'title'
                    )
                    RETURNING id INTO spot_id;

                    -- Update the object with the new spot ID
                    object_data := jsonb_set(object_data, '{id}', TO_JSONB(spot_id));
                    spot_ids_in_objects := spot_ids_in_objects || spot_id;
                END IF;
            END IF;

            -- Add updated object to the updated_objects array
            updated_objects := updated_objects || object_data;
        END LOOP;
    END IF;

    -- Get all spot IDs currently associated with the blueprint
    SELECT ARRAY_AGG(id) INTO existing_spot_ids
    FROM eshop.spots
    WHERE blueprint = blueprint_id;

    IF existing_spot_ids IS NULL THEN
        existing_spot_ids := ARRAY[]::BIGINT[];
    END IF;

    -- Identify and validate spots to delete
    FOR spot_id IN SELECT unnest(existing_spot_ids) LOOP
        IF NOT spot_id = ANY(spot_ids_in_objects) THEN
            -- Fetch the spot
            SELECT * INTO spot FROM eshop.spots WHERE id = spot_id;

            -- Check conditions for deletion
            IF (spot.secret_expiration_time IS NOT NULL AND spot.secret_expiration_time < now AND spot.secret IS NOT NULL)
               AND spot.order_product_ticket IS NOT NULL THEN
                -- Delete the spot
                DELETE FROM eshop.spots WHERE id = spot.id;
            ELSE
                -- Return error if the spot cannot be deleted
                RETURN JSONB_BUILD_OBJECT(
                    'code', 403,
                    'message', 'Cannot delete spot due to invalid state',
                    'spot_id', spot.id,
                    'details', JSONB_BUILD_OBJECT(
                        'secret', spot.secret,
                        'secret_expiration_time', spot.secret_expiration_time,
                        'order_product_ticket', spot.order_product_ticket
                    )
                );
            END IF;
        END IF;
    END LOOP;

    -- Update blueprint's objects field
    UPDATE eshop.blueprints
    SET
        objects = updated_objects,
        updated_at = now,
        data = input_data->'data',
        title = input_data->>'title',
        configuration = input_data->'configuration',
        groups = input_data->'groups',
        occasion = occasion_id,
        organization = organization_id
    WHERE id = blueprint_id;

    -- Return success response
    RETURN JSONB_BUILD_OBJECT(
        'code', 200,
        'message', 'Blueprint updated successfully',
        'blueprint_id', blueprint_id,
        'updated_objects', updated_objects
    );

EXCEPTION
    WHEN OTHERS THEN
        RETURN JSONB_BUILD_OBJECT('code', 500, 'message', SQLERRM);
END;
$$;