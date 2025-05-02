CREATE OR REPLACE FUNCTION public.update_product(p_input JSONB)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_product_id BIGINT;
  v_occasion_id BIGINT;
BEGIN
  -- extract product id
  v_product_id := (p_input->>'id')::BIGINT;

  -- determine occasion of that product
  SELECT pt.occasion
    INTO v_occasion_id
  FROM eshop.products p
  JOIN eshop.product_types pt ON p.product_type = pt.id
  WHERE p.id = v_product_id;

  -- ensure caller may edit this occasion
  PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

  -- update only the fields provided in the JSONB
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

  RETURN json_build_object('code', 200);
END;
$$;
