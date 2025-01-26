CREATE OR REPLACE FUNCTION public.get_transactions_for_order(order_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
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
