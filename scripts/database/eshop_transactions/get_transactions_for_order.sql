CREATE OR REPLACE FUNCTION public.get_transactions_for_order(order_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_occasion_id bigint;
BEGIN

  SELECT occasion INTO v_occasion_id FROM eshop.orders WHERE id = order_id;
  IF NOT get_is_editor_view_on_occasion(v_occasion_id) THEN
    RAISE EXCEPTION 'User is not authorized to view transactions for this occasion.' USING ERRCODE = 'P0001';
  END IF;

  RETURN (
    SELECT jsonb_build_object(
      'payment_info', (
        SELECT to_jsonb(pi)
        FROM eshop.payment_info pi
        WHERE pi.id = o.payment_info
      ),
      'transactions', COALESCE((
        SELECT jsonb_agg(t.*)
        FROM eshop.transactions t
        WHERE t.payment_info = o.payment_info
      ), '[]'::jsonb)
    )
    FROM eshop.orders o
    WHERE o.id = order_id
  );
END;
$$;
