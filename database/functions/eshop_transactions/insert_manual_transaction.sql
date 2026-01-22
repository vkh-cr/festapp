CREATE OR REPLACE FUNCTION public.insert_manual_transaction(
    p_amount double precision,
    p_currency text,
    p_unit_id int,
    p_variable_symbol text,
    p_date text,
    p_note text DEFAULT NULL,
    p_payment_info_id int DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, eshop, extensions
AS $$
DECLARE
    v_account_id int;
    v_date timestamp with time zone;
    v_new_transaction_id bigint;
    v_payment_info_id bigint;
BEGIN
    -- Check permissions (must be Unit Manager)
    PERFORM public.check_is_manager_on_unit(p_unit_id);
    v_date := p_date::timestamp with time zone;

    -- 1. Find or Create CASH account
    SELECT ba.id INTO v_account_id
    FROM eshop.bank_accounts ba
    JOIN eshop.unit_bank_accounts uba ON ba.id = uba.bank_account
    WHERE uba.unit = p_unit_id 
      AND ba.type = 'CASH'
      AND p_currency = ANY(ba.supported_currencies);

    IF v_account_id IS NULL THEN
        INSERT INTO eshop.bank_accounts (
            title, type, supported_currencies, account_number, account_number_human_readable
        ) VALUES (
            'Cash Account (' || p_currency || ')', 'CASH', ARRAY[p_currency], '', ''
        )
        RETURNING id INTO v_account_id;

        INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority)
        VALUES (p_unit_id, v_account_id, 0);
    END IF;

    -- 2. Insert Transaction
    INSERT INTO eshop.transactions (
        bank_account_id,
        transaction_id,
        amount,
        currency,
        date,
        vs,
        message_for_recipient,
        transaction_type,
        created_by
    ) VALUES (
        v_account_id,
        ('-1' || (extract(epoch from now()) * 1000)::bigint::text)::bigint, 
        p_amount,
        p_currency,
        v_date,
        p_variable_symbol,
        p_note,
        'manual',
        auth.uid()
    )
    RETURNING id INTO v_new_transaction_id;

    -- 3. Link to Payment Info & Update Order State
    IF p_payment_info_id IS NOT NULL THEN
         v_payment_info_id := p_payment_info_id;
    ELSIF p_variable_symbol IS NOT NULL AND p_variable_symbol != '' THEN
        BEGIN
            SELECT id INTO v_payment_info_id
            FROM eshop.payment_info
            WHERE variable_symbol = p_variable_symbol::bigint
            LIMIT 1;
        EXCEPTION WHEN OTHERS THEN
             v_payment_info_id := NULL;
        END;
    END IF;

    IF v_payment_info_id IS NOT NULL THEN
            PERFORM public.add_transaction_to_payment_info(v_new_transaction_id, v_payment_info_id);
    END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.insert_manual_transaction(double precision, text, int, text, text, text, int) TO authenticated;
