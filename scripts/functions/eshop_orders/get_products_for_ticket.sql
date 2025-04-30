CREATE OR REPLACE FUNCTION public.get_products_for_ticket(
  ticket_id bigint
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER AS $$
DECLARE
  v_occasion_id bigint;
  v_order_data jsonb;
  v_products   jsonb;
BEGIN
  -- find the order whose JSON 'tickets' array contains this ticket
  SELECT o.occasion, o.data
  INTO   v_occasion_id, v_order_data
  FROM   eshop.orders o
  WHERE  EXISTS (
    SELECT 1
    FROM   jsonb_array_elements(o.data->'tickets') AS t
    WHERE  (t->>'id')::bigint = ticket_id
  );

  IF NOT FOUND OR v_occasion_id IS NULL THEN
    RETURN jsonb_build_object(
      'code',    404,
      'message', 'Ticket not found'
    );
  END IF;

  -- permission check (same pattern as get_order_history)
  IF NOT get_is_editor_order_view_on_occasion(v_occasion_id) THEN
    RETURN jsonb_build_object(
      'code',    403,
      'message', 'Not authorized to view this ticket'
    );
  END IF;

  -- extract that ticket’s “products” array
  SELECT (t->'products')
  INTO   v_products
  FROM   jsonb_array_elements(v_order_data->'tickets') AS t
  WHERE  (t->>'id')::bigint = ticket_id;

  RETURN jsonb_build_object(
    'code', 200,
    'data', COALESCE(v_products, '[]'::jsonb)
  );
EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object(
    'code',    500,
    'message', SQLERRM
  );
END;
$$;