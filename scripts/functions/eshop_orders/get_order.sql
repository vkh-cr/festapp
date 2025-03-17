CREATE OR REPLACE FUNCTION get_order(order_id bigint)
RETURNS SETOF eshop.orders
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM eshop.orders
  WHERE id = order_id;
END;
$$;
