CREATE OR REPLACE FUNCTION public.add_transaction_to_payment_info_ws(
    p_transaction_id bigint,
    p_payment_info_id bigint
)
RETURNS jsonb SECURITY DEFINER
AS $$
DECLARE
    bank_acc bigint;
    occasion_id bigint;
BEGIN
    -- Retrieve the associated order_id from payment_info
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

    -- Call the original function to add the transaction
    PERFORM public.add_transaction_to_payment_info(p_transaction_id, p_payment_info_id);

    -- Return success message
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Transaction added successfully.'
    );

EXCEPTION WHEN OTHERS THEN
    -- Handle any exceptions and return as JSON
    RETURN jsonb_build_object(
        'code', 500,
        'message', SQLERRM,
        'detail', COALESCE(SQLERRM, 'An unexpected error occurred.')
    );
END;
$$ LANGUAGE plpgsql;
