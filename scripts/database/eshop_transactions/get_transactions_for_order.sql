CREATE OR REPLACE FUNCTION public.get_transactions_for_order(order_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Return all transactions associated with the given order_id
    RETURN (
        SELECT jsonb_agg(t.*)
        FROM public.transactions t
        WHERE t.payment_info = (
            SELECT o.payment_info
            FROM orders o
            WHERE o.id = order_id
        )
    );
END;
$$;