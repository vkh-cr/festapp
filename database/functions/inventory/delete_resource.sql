CREATE OR REPLACE FUNCTION public.delete_resource(p_resource_id BIGINT)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, extensions AS $$
DECLARE
  v_occasion_id BIGINT;
  v_inventory_pool_id BIGINT;
  v_context RECORD;
  v_new_pool_capacity INT;
  v_current_spot_count INT;
  v_excess_spot_count INT;
BEGIN
  -- Get the occasion and pool ID associated with the resource
  SELECT r.occasion, r.inventory_pool
  INTO v_occasion_id, v_inventory_pool_id
  FROM public.resources r
  WHERE r.id = p_resource_id;

  -- If resource not found, raise a structured exception
  IF NOT FOUND THEN
    RAISE EXCEPTION '%', jsonb_build_object('code', 'D001', 'message', 'Resource with ID ' || p_resource_id || ' not found.')::text;
  END IF;

  -- Ensure caller may edit this occasion. This function is expected to throw on failure.
  PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

  -- Safety Check: Ensure no spots linked to this resource are ordered
  IF EXISTS (
    SELECT 1 FROM eshop.spots
    WHERE resource = p_resource_id AND order_product_ticket IS NOT NULL
  ) THEN
    RAISE EXCEPTION '%', jsonb_build_object(
        'code', 'D002',
        'message', 'Cannot delete resource because it has reserved spots.',
        'hint', 'Unassign all orders from this resource before deleting.'
    )::text;
  END IF;

  -- Delete all unreserved spots associated with this resource
  DELETE FROM eshop.spots WHERE resource = p_resource_id;

  -- Delete the resource itself
  DELETE FROM public.resources WHERE id = p_resource_id;

END;
$$;