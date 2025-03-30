CREATE OR REPLACE FUNCTION get_latest_order_history(order_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
AS $$
DECLARE
  result jsonb;
BEGIN
  SELECT to_jsonb(o)
    INTO result
  FROM eshop.orders_history o
  WHERE o."order" = order_id AND o.price <> 0
  ORDER BY o.created_at DESC
  LIMIT 1;

  RETURN result;
END;
$$;

DROP FUNCTION get_latest_order_history(bigint)