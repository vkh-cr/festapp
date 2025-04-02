CREATE OR REPLACE FUNCTION public.add_transaction_to_payment_info(p_transaction_id bigint, payment_info_id bigint)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    transaction_amount numeric(12, 2);
    transaction_currency character(3);
    payment_info_currency character(3);
    payment_info_record eshop.payment_info%ROWTYPE;
    associated_order_id bigint;
BEGIN
    -- Check if the transaction already has a payment_info assigned
    IF EXISTS (
        SELECT 1
        FROM eshop.transactions
        WHERE id = p_transaction_id
          AND payment_info IS NOT NULL
    ) THEN
        RAISE EXCEPTION 'Transaction already linked to a payment_info';
        -- Transaction already linked to a payment_info; skip processing
    END IF;

    -- Retrieve the transaction amount and currency using transactions.id
    SELECT t.amount, t.currency
    INTO transaction_amount, transaction_currency
    FROM eshop.transactions t
    WHERE t.id = p_transaction_id;

    -- Retrieve the payment_info currency_code
    SELECT pi.currency_code
    INTO payment_info_currency
    FROM eshop.payment_info pi
    WHERE pi.id = payment_info_id;

    -- Check if currencies match
    IF transaction_currency != payment_info_currency THEN
        RAISE EXCEPTION 'Currency mismatch: Transaction currency (%) does not match Payment Info currency (%)', transaction_currency, payment_info_currency;
    END IF;

    -- Update the paid or returned column based on the transaction amount
    IF transaction_amount > 0 THEN
        UPDATE eshop.payment_info
        SET paid = COALESCE(paid, 0) + transaction_amount
        WHERE id = payment_info_id;
    ELSE
        UPDATE eshop.payment_info
        SET returned = COALESCE(returned, 0) + ABS(transaction_amount)
        WHERE id = payment_info_id;
    END IF;

    -- Fetch the updated payment_info record
    SELECT *
    INTO payment_info_record
    FROM eshop.payment_info
    WHERE id = payment_info_id;

    -- Check if the paid amount meets or exceeds the total amount
    IF payment_info_record.paid >= payment_info_record.amount THEN
        -- Find the associated order ID
        SELECT o.id
        INTO associated_order_id
        FROM eshop.orders o
        WHERE o.payment_info = payment_info_id
        LIMIT 1;

        -- Call the existing function to mark the order as paid
        PERFORM public.update_order_and_tickets_to_paid(associated_order_id);
    END IF;

    -- Update the transaction's payment_info reference
    UPDATE eshop.transactions
    SET payment_info = payment_info_id
    WHERE id = p_transaction_id;
END;
$$;