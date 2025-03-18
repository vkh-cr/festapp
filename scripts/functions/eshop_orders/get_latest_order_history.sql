CREATE OR REPLACE FUNCTION get_latest_order_history(order_id bigint)
RETURNS TABLE(price numeric, currency_code text)
LANGUAGE plpgsql
AS $$
DECLARE
  v_price numeric;
  v_currency_code text;
BEGIN
  SELECT o.price, o.currency_code::text
    INTO v_price, v_currency_code
  FROM eshop.orders_history o
  WHERE o."order" = order_id AND o.price <> 0
  ORDER BY o.created_at DESC
  LIMIT 1;

  price := v_price;
  currency_code := v_currency_code;
  RETURN NEXT;
END;
$$;
