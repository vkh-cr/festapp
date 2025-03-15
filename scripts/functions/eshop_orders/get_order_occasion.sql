CREATE OR REPLACE FUNCTION get_order_occasion(order_id bigint)
RETURNS bigint
LANGUAGE plpgsql
AS $$
DECLARE
  occasion bigint;
BEGIN
  SELECT o.occasion
    INTO occasion
  FROM eshop.orders AS o
  WHERE o.id = order_id;

  RETURN occasion;
END;
$$;