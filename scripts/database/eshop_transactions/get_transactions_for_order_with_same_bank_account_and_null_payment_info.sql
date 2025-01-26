CREATE OR REPLACE FUNCTION public.get_transactions_for_order_with_same_bank_account_and_null_payment_info(order_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Return transactions where bank_account_id matches the order's payment_info.bank_account and payment_info is null
    RETURN (
        SELECT jsonb_agg(t.*)
        FROM transactions t
        WHERE t.bank_account_id = (
            SELECT pi.bank_account
            FROM payment_info pi
            JOIN orders o ON o.payment_info = pi.id
            WHERE o.id = order_id
        )
        AND t.payment_info IS NULL
    );
END;
$$;