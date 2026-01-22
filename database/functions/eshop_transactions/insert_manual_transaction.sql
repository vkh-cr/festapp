-- RLS Policy: Allow managers to see transactions for their units
DROP POLICY IF EXISTS "Managers can view transactions for their units" ON eshop.transactions;

CREATE POLICY "Managers can view transactions for their units"
ON eshop.transactions
FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 
        FROM eshop.unit_bank_accounts uba
        JOIN public.unit_users uu ON uba.unit = uu.unit
        WHERE uba.bank_account = eshop.transactions.bank_account_id
          AND uu."user" = auth.uid()
          AND uu.is_manager = true
    )
);

-- Drop previous/conflicting definitions if any (from development process)
DROP FUNCTION IF EXISTS public.insert_manual_transaction(numeric, text, int, text, timestamp with time zone, text);
DROP FUNCTION IF EXISTS public.insert_manual_transaction(double precision, text, int, text, text, text);
DROP FUNCTION IF EXISTS public.insert_manual_transaction(double precision, text, int, text, text, text, int);
DROP FUNCTION IF EXISTS public.insert_manual_transaction(double precision, text, int, text, text, text, bigint);

-- Re-define RPC with payment logic
CREATE OR REPLACE FUNCTION public.insert_manual_transaction(
    p_amount double precision,
    p_currency text,
    p_unit_id int,
    p_variable_symbol text,
    p_date text, -- Text date input for robustness
    p_note text DEFAULT NULL,
    p_payment_info_id int DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_account_id int;
    v_date timestamp with time zone;
    v_new_transaction_id bigint;
    v_payment_info_id bigint;
BEGIN
    -- Check permissions (must be Unit Manager)
    PERFORM public.check_is_manager_on_unit(p_unit_id);

    -- Cast date
    v_date := p_date::timestamp with time zone;

    -- 1. Find or Create CASH account
    SELECT ba.id INTO v_account_id
    FROM eshop.bank_accounts ba
    JOIN eshop.unit_bank_accounts uba ON ba.id = uba.bank_account
    WHERE uba.unit = p_unit_id 
      AND ba.type = 'CASH'
      AND p_currency = ANY(ba.supported_currencies);

    IF v_account_id IS NULL THEN
        -- Create Bank Account
        INSERT INTO eshop.bank_accounts (
            title, 
            type, 
            supported_currencies, 
            account_number, 
            account_number_human_readable
        ) VALUES (
            'Cash Account (' || p_currency || ')', 
            'CASH', 
            ARRAY[p_currency], 
            '', 
            ''
        )
        RETURNING id INTO v_account_id;

        -- Link to Unit
        INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority)
        VALUES (p_unit_id, v_account_id, 0);
    END IF;

    -- 2. Insert Transaction
    -- Use explicit cast for generated transaction_id
    INSERT INTO eshop.transactions (
        bank_account_id,
        transaction_id,
        amount,
        currency,
        date,
        vs,
        message_for_recipient,
        transaction_type,
        sender_name,
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
        'Hotovost / Cash',
        auth.uid()
    )
    RETURNING id INTO v_new_transaction_id;

    -- 3. Link to Payment Info & Update Order State
    -- Priority 1: Explicit Payment Info ID
    IF p_payment_info_id IS NOT NULL THEN
         v_payment_info_id := p_payment_info_id;
    -- Priority 2: Variable Symbol
    ELSIF p_variable_symbol IS NOT NULL AND p_variable_symbol != '' THEN
        -- Find payment info that matches VS (relaxed match)
        BEGIN
            SELECT id INTO v_payment_info_id
            FROM eshop.payment_info
            WHERE variable_symbol = p_variable_symbol::bigint
            LIMIT 1;
        EXCEPTION WHEN OTHERS THEN
             -- If cast fails (e.g. user entered "ABC"), we just ignore linking
             v_payment_info_id := NULL;
        END;
    END IF;

    -- Perform Link
    IF v_payment_info_id IS NOT NULL THEN
            PERFORM public.add_transaction_to_payment_info(v_new_transaction_id, v_payment_info_id);
    END IF;

END;
$$;

GRANT EXECUTE ON FUNCTION public.insert_manual_transaction(double precision, text, int, text, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.insert_manual_transaction(double precision, text, int, text, text, text) TO service_role;
GRANT EXECUTE ON FUNCTION public.insert_manual_transaction(double precision, text, int, text, text, text) TO postgres;
GRANT EXECUTE ON FUNCTION public.insert_manual_transaction(double precision, text, int, text, text, text) TO anon;

NOTIFY pgrst, 'reload schema';
