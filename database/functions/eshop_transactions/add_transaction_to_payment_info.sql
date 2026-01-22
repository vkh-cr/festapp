CREATE OR REPLACE FUNCTION public.add_transaction_to_payment_info(p_transaction_id bigint, payment_info_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    associated_order_id bigint;
    v_transaction_type text;
BEGIN
    -- Link transaction and get type
    UPDATE eshop.transactions
    SET payment_info = payment_info_id
    WHERE id = p_transaction_id
    RETURNING transaction_type INTO v_transaction_type;

    IF v_transaction_type = 'return' THEN
        UPDATE eshop.payment_info
        SET 
            returned = (SELECT COALESCE(ABS(SUM(amount)), 0) FROM eshop.transactions WHERE payment_info = payment_info_id AND transaction_type = 'return')
        WHERE id = payment_info_id;
    ELSE
        UPDATE eshop.payment_info
        SET 
            paid = (SELECT COALESCE(SUM(amount), 0) FROM eshop.transactions WHERE payment_info = payment_info_id AND transaction_type IS DISTINCT FROM 'return')
        WHERE id = payment_info_id;
    END IF;

    SELECT id INTO associated_order_id
    FROM eshop.orders
    WHERE payment_info = payment_info_id;

    IF associated_order_id IS NOT NULL THEN
        PERFORM public.recalculate_order_payment_status(associated_order_id);
    END IF;
END;
$$;