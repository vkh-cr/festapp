CREATE OR REPLACE FUNCTION update_inventory_pool_bundle(p_bundle_data jsonb)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
    v_pool_data jsonb := p_bundle_data->'pool';
    v_pool_id bigint;
    v_occasion_id bigint;

    -- Context variables
    v_context_data jsonb;
    v_context_id bigint;
    v_context_ids_from_input bigint[] := ARRAY[]::bigint[];

    result jsonb;
BEGIN
    -- Resolve occasion ID from the input data. It's required for both create and update.
    v_occasion_id := (v_pool_data->>'occasion')::bigint;
    IF v_occasion_id IS NULL THEN
        RAISE EXCEPTION '%', jsonb_build_object('code', 'B001', 'message', 'Occasion ID is required.')::text;
    END IF;

    -- Permission check
    IF NOT get_is_editor_order_on_occasion(v_occasion_id) THEN
        RAISE EXCEPTION '%', jsonb_build_object('code', 403, 'message', 'User is not authorized to edit this occasion.')::text;
    END IF;

    -- 1. Upsert the main inventory_pool record
    v_pool_id := (v_pool_data->>'id')::bigint;

    IF v_pool_id IS NULL THEN
        -- Create a new pool if ID is not provided
        INSERT INTO public.inventory_pools (title, occasion, sellable_capacity, data, created_at, updated_at)
        VALUES (
            v_pool_data->>'title',
            v_occasion_id,
            (v_pool_data->>'sellable_capacity')::bigint,
            v_pool_data->'data',
            now(),
            now()
        ) RETURNING id INTO v_pool_id;
    ELSE
        -- Update the existing pool
        UPDATE public.inventory_pools
        SET
            title = v_pool_data->>'title',
            sellable_capacity = (v_pool_data->>'sellable_capacity')::bigint,
            data = v_pool_data->'data',
            updated_at = now()
        WHERE id = v_pool_id;
    END IF;

    -- NOTE: Resource and Slot management logic has been removed as requested.

    -- 2. Upsert/Delete Inventory Contexts
    IF jsonb_typeof(p_bundle_data->'contexts') = 'array' THEN
        FOR v_context_data IN SELECT * FROM jsonb_array_elements(p_bundle_data->'contexts')
        LOOP
            v_context_id := (v_context_data->>'id')::bigint;
            IF v_context_id IS NULL THEN
                INSERT INTO public.inventory_contexts (inventory_pool, block_date, title, "order")
                VALUES (v_pool_id, (v_context_data->>'block_date')::date, v_context_data->>'title', (v_context_data->>'order')::int)
                RETURNING id INTO v_context_id;
            ELSE
                UPDATE public.inventory_contexts
                SET
                    block_date = (v_context_data->>'block_date')::date,
                    title = v_context_data->>'title',
                    "order" = (v_context_data->>'order')::int
                WHERE id = v_context_id;
            END IF;
            v_context_ids_from_input := array_append(v_context_ids_from_input, v_context_id);
        END LOOP;
        -- Delete contexts that were removed in the UI for this pool
        DELETE FROM public.inventory_contexts WHERE inventory_pool = v_pool_id AND id <> ALL(v_context_ids_from_input);
    END IF;

    -- 3. Create or delete spots for the inventory pool based on its resources and contexts.
    -- The function is executed, and its integer return value is discarded.
    PERFORM adjust_spot_capacity_for_pool(v_pool_id);

    -- Return the fully updated bundle by calling the get function
    RETURN get_inventory_pool_bundle(v_pool_id);
END;
$$ LANGUAGE plpgsql;