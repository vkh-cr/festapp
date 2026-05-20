CREATE OR REPLACE FUNCTION public.update_product_inventory_contexts(p_product_id bigint, p_contexts jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions AS $$
DECLARE
  v_occasion_id BIGINT;
  v_order_id BIGINT;
BEGIN
    -- Get the occasion ID from the product that is being modified.
    SELECT pt.occasion INTO v_occasion_id
    FROM eshop.products p
    JOIN eshop.product_types pt ON p.product_type = pt.id
    WHERE p.id = p_product_id;

    -- If the product is not found, raise an error.
    IF NOT FOUND THEN
        RAISE EXCEPTION '%', jsonb_build_object(
            'code', 'PI404',
            'message', 'Product with ID ' || p_product_id || ' not found.'
        )::text;
    END IF;

    -- Permission check. This function is expected to throw on failure.
    PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

    -- If permission check passes, proceed with the update.
    -- First, remove all existing inventory context associations.
    DELETE FROM eshop.product_inventory_contexts
    WHERE product = p_product_id;

    -- Then, insert the new associations from the provided JSON array.
    IF jsonb_array_length(p_contexts) > 0 THEN
      INSERT INTO eshop.product_inventory_contexts (product, inventory_context, quantity)
      SELECT
        p_product_id,
        (context ->> 'inventory_context_id')::bigint,
        (context ->> 'quantity')::integer
      FROM jsonb_array_elements(p_contexts) AS context;
    END IF;


    -- After updating the product's context associations, re-run allocations
    -- for all orders that contain this product.
    FOR v_order_id IN
      SELECT DISTINCT opt."order"
      FROM eshop.order_product_ticket opt
      WHERE opt.product = p_product_id
    LOOP
      -- This will re-evaluate spot allocations for each affected order.
      PERFORM apply_allocations(v_order_id);
    END LOOP;

END;
$$;