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
    AND o.data ? 'email'
    AND (
      -- Condition 1: Check if the order's price is not zero using the direct column.
      -- COALESCE handles cases where the price might be NULL, treating it as 0.
      COALESCE(o.price, 0) != 0
      OR
      -- Condition 2: Check if the 'ticket' feature is enabled for the occasion.
      EXISTS (
        SELECT 1
        FROM jsonb_array_elements(oc.features) AS feature
        WHERE feature->>'code' = 'ticket' AND (feature->>'is_enabled')::boolean
      )
    );
END;
$$ LANGUAGE plpgsql;