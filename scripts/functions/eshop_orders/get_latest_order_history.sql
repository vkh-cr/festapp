CREATE OR REPLACE FUNCTION get_latest_order_history(order_id bigint)
RETURNS TABLE(price numeric, currency_code text)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT price, currency_code
  FROM eshop.orders_history
  WHERE "order" = order_id AND price <> 0
  ORDER BY created_at DESC
  LIMIT 1;
END;
$$;