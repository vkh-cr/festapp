CREATE OR REPLACE FUNCTION public.delete_product(p_product_id BIGINT)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_occasion_id BIGINT;
  v_order_count INT;
BEGIN
  -- determine occasion of the product
  SELECT pt.occasion
    INTO v_occasion_id
  FROM eshop.products p
  JOIN eshop.product_types pt ON p.product_type = pt.id
  WHERE p.id = p_product_id;

  -- authorization check
  PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

  -- ensure no linked order_product_ticket rows
  SELECT COUNT(*) INTO v_order_count
    FROM eshop.order_product_ticket
   WHERE product = p_product_id;
  IF v_order_count > 0 THEN
    RAISE EXCEPTION 'Cannot delete product % because there are % products in orders',
      p_product_id, v_order_count;
  END IF;

  -- delete the product
  DELETE FROM eshop.products
   WHERE id = p_product_id;
END;
$$;
