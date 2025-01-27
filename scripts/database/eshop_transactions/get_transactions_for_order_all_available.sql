CREATE OR REPLACE FUNCTION public.get_transactions_for_order_all_available(payment_info_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN (
        SELECT jsonb_agg(t ORDER BY t.date DESC)
        FROM eshop.transactions t
        WHERE t.bank_account_id = (
            SELECT pi.bank_account
            FROM eshop.payment_info pi
            WHERE pi.id = payment_info_id
        )
        AND t.payment_info IS NULL
    );
END;
$$;