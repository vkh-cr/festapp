CREATE OR REPLACE FUNCTION public.remove_transaction_from_payment_info_ws(
    p_transaction_id bigint,
    p_payment_info_id bigint
)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    transaction_amount numeric(12, 2);
    transaction_currency character(3);
    payment_info_currency character(3);
    payment_info_record eshop.payment_info%ROWTYPE;
    associated_order_id bigint;
    bank_acc bigint;
    occasion_id bigint;
BEGIN
    --- Retrieve the associated order_id from payment_info
     SELECT pi.bank_account INTO bank_acc
     FROM eshop.payment_info pi
     WHERE pi.id = p_payment_info_id
     LIMIT 1;

     PERFORM public.check_is_admin_for_bank_account(bank_acc);

     SELECT o.occasion
     INTO occasion_id
     FROM eshop.orders o
     WHERE o.payment_info = p_payment_info_id
     LIMIT 1;

     PERFORM public.check_is_editor_order_on_occasion(occasion_id);
    
    -- Check if the transaction is linked to the specified payment_info
    IF NOT EXISTS (
        SELECT 1
        FROM eshop.transactions
        WHERE id = p_transaction_id
          AND payment_info = p_payment_info_id
    ) THEN
        RAISE EXCEPTION 'Transaction % is not linked to Payment Info %.', p_transaction_id, p_payment_info_id;
    END IF;

    -- Retrieve the transaction amount and currency
    SELECT t.amount, t.currency
    INTO transaction_amount, transaction_currency
    FROM eshop.transactions t
    WHERE t.id = p_transaction_id
      AND t.payment_info = p_payment_info_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Transaction % not found or not linked to Payment Info %.', p_transaction_id, p_payment_info_id;
    END IF;

    -- Retrieve the payment_info currency_code
    SELECT pi.currency_code
    INTO payment_info_currency
    FROM eshop.payment_info pi
    WHERE pi.id = p_payment_info_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Payment Info % does not exist.', p_payment_info_id;
    END IF;

    -- Check if currencies match
    IF transaction_currency != payment_info_currency THEN
        RAISE EXCEPTION 'Currency mismatch: Transaction currency (%) does not match Payment Info currency (%)', transaction_currency, payment_info_currency;
    END IF;

    -- Adjust the paid or returned column based on the transaction amount
    IF transaction_amount > 0 THEN
        -- Ensure that the payment_info has enough 'paid' amount to deduct
        IF (SELECT COALESCE(paid, 0) FROM eshop.payment_info WHERE id = p_payment_info_id) < transaction_amount THEN
            RAISE EXCEPTION 'Insufficient paid amount in Payment Info % to remove Transaction %.', p_payment_info_id, p_transaction_id;
        END IF;

        UPDATE eshop.payment_info
        SET paid = COALESCE(paid, 0) - transaction_amount
        WHERE id = p_payment_info_id;
    ELSE
        -- Transaction was a return; ensure enough 'returned' amount to deduct
        IF (SELECT COALESCE(returned, 0) FROM eshop.payment_info WHERE id = p_payment_info_id) < transaction_amount THEN
            RAISE EXCEPTION 'Insufficient returned amount in Payment Info % to remove Transaction %.', p_payment_info_id, p_transaction_id;
        END IF;

        UPDATE eshop.payment_info
        SET returned = COALESCE(returned, 0) + transaction_amount
        WHERE id = p_payment_info_id;
    END IF;

    -- Fetch the updated payment_info record
    SELECT *
    INTO payment_info_record
    FROM eshop.payment_info
    WHERE id = p_payment_info_id;

    -- Find the associated order ID
    SELECT o.id
    INTO associated_order_id
    FROM eshop.orders o
    WHERE o.payment_info = p_payment_info_id
    LIMIT 1;

    -- Update the order's status based on the updated payment_info
    IF payment_info_record.paid < payment_info_record.amount THEN
        -- Call a function to mark the order as unpaid if such a function exists
        -- Replace 'eshop.update_order_to_unpaid' with your actual function
    END IF;

    -- Remove the payment_info reference from the transaction
    UPDATE eshop.transactions
    SET payment_info = NULL
    WHERE id = p_transaction_id;

    RAISE NOTICE 'Transaction % successfully removed from Payment Info %.', p_transaction_id, p_payment_info_id;
EXCEPTION
    WHEN others THEN
        RAISE EXCEPTION 'Failed to remove Transaction % from Payment Info %: %', p_transaction_id, p_payment_info_id, SQLERRM;
END;
$$ SECURITY DEFINER;