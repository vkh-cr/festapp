CREATE OR REPLACE FUNCTION get_order_occasion(order_id bigint)
RETURNS TABLE(occasion bigint)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT occasion
  FROM eshop.orders
  WHERE id = order_id;
END;
$$;