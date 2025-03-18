CREATE OR REPLACE FUNCTION public.get_orders_for_ticket_sending()
RETURNS TABLE(order_id bigint, order_email text) AS $$
BEGIN
  RETURN QUERY
  SELECT
    o.id,
    o.data->>'email' AS order_email
  FROM eshop.orders o
  JOIN public.occasions oc ON o.occasion = oc.id
  WHERE o.state = 'paid'
    AND oc.is_order_synchronization_enabled = true
    AND o.data ? 'email';
END;
$$ LANGUAGE plpgsql;
