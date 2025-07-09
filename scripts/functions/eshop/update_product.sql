CREATE OR REPLACE FUNCTION public.update_product(p_input JSONB)
RETURNS BIGINT LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_product_id BIGINT;
  v_occasion_id BIGINT;
BEGIN
  -- Extract product id from the input JSON
  v_product_id := (p_input->>'id')::BIGINT;

  -- Verify the product exists and determine its occasion for the permission check
  SELECT pt.occasion
  INTO v_occasion_id
  FROM eshop.products p
  JOIN eshop.product_types pt ON p.product_type = pt.id
  WHERE p.id = v_product_id;

  -- If the product is not found, raise a structured exception
  IF NOT FOUND THEN
    RAISE EXCEPTION '%', jsonb_build_object(
        'code', 'PRD404',
        'message', 'Product with ID ' || v_product_id || ' not found.'
    )::text;
  END IF;

  -- Ensure the caller has permission to edit this occasion.
  -- This function is expected to raise an exception on failure.
  PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

  -- Update only the fields that are provided in the input JSON.
  -- COALESCE is used to keep the existing value if a new one isn't provided.
  UPDATE eshop.products p
  SET
    title         = COALESCE(p_input->>'title',         p.title),
    description   = COALESCE(p_input->>'description',   p.description),
    price         = COALESCE((p_input->>'price')::NUMERIC, p.price),
    currency_code = COALESCE(p_input->>'currency_code', p.currency_code),
    data          = COALESCE(p_input->'data',           p.data),
    product_type  = COALESCE((p_input->>'product_type')::BIGINT, p.product_type),
    "order"       = COALESCE((p_input->>'order')::INT,  p."order"),
    maximum       = COALESCE((p_input->>'maximum')::INT, p.maximum),
    is_hidden     = COALESCE((p_input->>'is_hidden')::BOOLEAN, p.is_hidden),
    updated_at    = NOW()
  WHERE p.id = v_product_id;

  -- Return the ID of the updated product on success.
  RETURN v_product_id;
END;
$$;