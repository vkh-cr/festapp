CREATE OR REPLACE FUNCTION delete_inventory_pool(p_inventory_pool_id bigint)
RETURNS void
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_occasion_id bigint;
    v_reserved_spots_count int;
BEGIN
    -- Step 1: Find the occasion for permission checking and ensure the pool exists.
    SELECT occasion INTO v_occasion_id FROM public.inventory_pools WHERE id = p_inventory_pool_id;
    IF v_occasion_id IS NULL THEN
        RAISE EXCEPTION '%', jsonb_build_object(
            'code', 'P404',
            'message', 'Inventory Pool with ID ' || p_inventory_pool_id || ' not found.'
        )::text;
    END IF;

    -- Step 2: Check if the current user has the required permissions on the occasion.
    -- This function is expected to throw a structured error on failure.
    PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

    -- Step 3: Comprehensive Safety Check.
    -- Count any reserved spots (linked to an order) that are tied to this pool,
    -- either through its contexts or its direct physical resources.
    SELECT COUNT(*) INTO v_reserved_spots_count
    FROM eshop.spots s
    WHERE s.order_product_ticket IS NOT NULL
      AND (
        s.inventory_context IN (SELECT id FROM public.inventory_contexts WHERE inventory_pool = p_inventory_pool_id)
        OR
        s.resource IN (SELECT id FROM public.resources WHERE inventory_pool = p_inventory_pool_id)
      );

    IF v_reserved_spots_count > 0 THEN
        RAISE EXCEPTION '%', jsonb_build_object(
            'code', 'P409',
            'message', 'Cannot delete this pool because ' || v_reserved_spots_count || ' spots are currently reserved.',
            'hint', 'Ensure no products are using this pool in any active orders.'
        )::text;
    END IF;

    -- Step 4: If the safety check passes, proceed with deletion.
    -- The order of operations is critical to respect foreign key constraints.

    -- 4a. Delete all unreserved spots (order_product_ticket IS NULL) associated
    -- with the pool's contexts OR its direct resources.
    DELETE FROM eshop.spots
    WHERE order_product_ticket IS NULL
      AND (
        inventory_context IN (SELECT id FROM public.inventory_contexts WHERE inventory_pool = p_inventory_pool_id)
        OR
        resource IN (SELECT id FROM public.resources WHERE inventory_pool = p_inventory_pool_id)
      );

    -- 4b. Delete all resources linked to this pool. Based on the schema,
    -- this will automatically trigger the deletion of related `resource_slots`
    -- due to the `ON DELETE CASCADE` constraint on the `resource_slots.resource` foreign key.
    DELETE FROM public.resources WHERE inventory_pool = p_inventory_pool_id;

    -- 4c. Finally, delete the inventory pool itself. Based on the schema,
    -- this will automatically trigger the deletion of related `inventory_contexts`
    -- due to the `ON DELETE CASCADE` constraint on the `inventory_contexts.inventory_pool` foreign key.
    DELETE FROM public.inventory_pools WHERE id = p_inventory_pool_id;

END;
$$ LANGUAGE plpgsql;