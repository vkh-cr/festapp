CREATE OR REPLACE FUNCTION get_order(order_id bigint)
RETURNS eshop.orders
LANGUAGE plpgsql
AS $$
DECLARE
  result eshop.orders;
BEGIN
  SELECT *
  INTO result
  FROM eshop.orders
  WHERE id = order_id;

  RETURN result;
END;
$$;

