CREATE OR REPLACE FUNCTION public.update_resource(p_input JSONB)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_resource_id BIGINT;
  v_occasion_id BIGINT;
  v_inventory_pool_id BIGINT;
BEGIN
  -- Extract resource and inventory pool IDs from the JSON input.
  v_resource_id := (p_input->>'id')::BIGINT;
  v_inventory_pool_id := (p_input->>'inventory_pool')::BIGINT;

  -- An inventory pool is mandatory for any create or update operation.
  IF v_inventory_pool_id IS NULL THEN
      RAISE EXCEPTION '%', jsonb_build_object('code', 'R001', 'message', 'Inventory pool is a required field.')::text;
  END IF;

  -- Derive occasion_id from the parent inventory_pool.
  SELECT p.occasion
  INTO v_occasion_id
  FROM public.inventory_pools p
  WHERE p.id = v_inventory_pool_id;

  -- Raise an error if the specified inventory pool doesn't exist.
  IF NOT FOUND THEN
      RAISE EXCEPTION '%', jsonb_build_object('code', 'R002', 'message', 'Inventory Pool with ID ' || v_inventory_pool_id || ' not found.')::text;
  END IF;

  -- Unified permission check for both create and update paths.
  -- This function is expected to throw an exception on failure.
  PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

  -- Determine whether to UPDATE an existing resource or CREATE a new one.
  IF v_resource_id IS NOT NULL THEN
    -------------------
    -- UPDATE PATH --
    -------------------
    UPDATE public.resources r
    SET
      title = COALESCE(p_input->>'title', r.title),
      capacity = COALESCE((p_input->>'capacity')::INT, r.capacity),
      booking_rules = COALESCE(p_input->'booking_rules', r.booking_rules),
      inventory_pool = v_inventory_pool_id,
      updated_at = NOW()
    WHERE r.id = v_resource_id;

    IF NOT FOUND THEN
      RAISE EXCEPTION '%', jsonb_build_object('code', 'R003', 'message', 'Resource with ID ' || v_resource_id || ' not found.')::text;
    END IF;
  ELSE
    -------------------
    -- CREATE PATH --
    -------------------
    INSERT INTO public.resources (occasion, inventory_pool, title, capacity, booking_rules)
    VALUES (v_occasion_id, v_inventory_pool_id, p_input->>'title', (p_input->>'capacity')::INT, p_input->'booking_rules')
    RETURNING id INTO v_resource_id;
  END IF;

  -- After creating or updating the resource, synchronize the spots.
  PERFORM public.adjust_spot_capacity_for_pool(v_inventory_pool_id);

END;
$$;