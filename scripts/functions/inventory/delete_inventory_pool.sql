-- Deletes an inventory pool and its related unreserved spots, with a safety check for existing reservations.
CREATE OR REPLACE FUNCTION delete_inventory_pool(p_inventory_pool_id bigint)
RETURNS void
SECURITY DEFINER
AS $$
DECLARE
    v_occasion_id bigint;
    v_reserved_spots_count int;
BEGIN
    SELECT occasion INTO v_occasion_id FROM public.inventory_pools WHERE id = p_inventory_pool_id;
    IF v_occasion_id IS NULL THEN
        RAISE EXCEPTION '%', jsonb_build_object(
            'code', 'P404',
            'message', 'Inventory Pool with ID ' || p_inventory_pool_id || ' not found.'
        )::text;
    END IF;

    -- This function is expected to throw a structured error on failure.
    PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

    -- Safety Check: Count spots linked to any context of this pool that are reserved.
    SELECT COUNT(*) INTO v_reserved_spots_count
    FROM eshop.spots s
    WHERE s.inventory_context IN (SELECT id FROM public.inventory_contexts WHERE inventory_pool = p_inventory_pool_id)
      AND s.order_product_ticket IS NOT NULL;

    IF v_reserved_spots_count > 0 THEN
        RAISE EXCEPTION '%', jsonb_build_object(
            'code', 'P409',
            'message', 'Cannot delete this pool because ' || v_reserved_spots_count || ' spots are currently reserved.',
            'hint', 'Ensure no products are using this pool in any active orders.'
        )::text;
    END IF;

    -- If safe, proceed with deletion.
    -- 1. Delete all unreserved spots associated with the pool's contexts.
    DELETE FROM eshop.spots
    WHERE inventory_context IN (SELECT id FROM public.inventory_contexts WHERE inventory_pool = p_inventory_pool_id);

    -- 2. Delete the pool itself. The ON DELETE CASCADE on the inventory_contexts table
    -- will handle deleting all related contexts automatically.
    DELETE FROM public.inventory_pools WHERE id = p_inventory_pool_id;

END;
$$ LANGUAGE plpgsql;