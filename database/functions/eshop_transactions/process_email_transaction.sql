CREATE OR REPLACE FUNCTION public.process_email_transaction(
    p_data jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, eshop, extensions
AS $$
DECLARE
    v_bank_account_id bigint;
    v_external_id text;
    v_transaction_id bigint;
    v_variable_symbol text;
    v_bank_code text;
    v_bank_name text;
    
    v_existing_id bigint;
    v_new_id int;
    v_payment_info_id bigint;
    v_amount numeric;
    v_date timestamptz;
BEGIN
    v_bank_account_id := (p_data->>'bank_account_id')::bigint;
    v_external_id := p_data->>'external_id';
    v_transaction_id := (p_data->>'transaction_id')::bigint;
    v_variable_symbol := p_data->>'vs';
    v_bank_code := p_data->>'bank_code';
    v_amount := (p_data->>'amount')::numeric;
    -- Use date parsing that respects inputs
    v_date := (p_data->>'date')::timestamptz;
    
    -- Derive bank_name from code if not provided in JSON
    v_bank_name := p_data->>'bank_name';
    IF v_bank_name IS NULL AND v_bank_code IS NOT NULL THEN
        v_bank_name := public.get_bank_name_from_code(v_bank_code);
    END IF;

    IF v_bank_account_id IS NOT NULL THEN
        UPDATE eshop.bank_accounts 
        SET last_fetch_time = now() AT TIME ZONE 'UTC', 
            updated_at = now() 
        WHERE id = v_bank_account_id;
    END IF;

    IF v_transaction_id IS NOT NULL THEN
        SELECT id INTO v_existing_id 
        FROM eshop.transactions 
        WHERE bank_account_id = v_bank_account_id AND transaction_id = v_transaction_id
        LIMIT 1;
        
        IF v_existing_id IS NOT NULL THEN
            RETURN jsonb_build_object('status', 'skipped', 'reason', 'duplicate_transaction_id', 'id', v_existing_id);
        END IF;
    END IF;

    IF v_external_id IS NOT NULL THEN
        SELECT id INTO v_existing_id 
        FROM eshop.transactions 
        WHERE external_id = v_external_id
        LIMIT 1;
        
        IF v_existing_id IS NOT NULL THEN
            RETURN jsonb_build_object('status', 'skipped', 'reason', 'duplicate_external_id', 'id', v_existing_id);
        END IF;
    END IF;

    -- Fuzzy Deduplication for Email Imports (Missing Transaction ID)
    -- If we have VS and Amount, check if an authoritative transaction (from API, has transaction_id) exists
    -- OR if another email import already exists (though external_id catch that usually)
    -- But mainly this is for preventing "Email" vs "API" duplicates if they lack common IDs.
    -- However, API usually provides transaction_id. Email usually provides external_id (Message-ID).
    -- They might not match. So we check fuzzy.
    
    IF v_variable_symbol IS NOT NULL AND v_amount IS NOT NULL AND v_date IS NOT NULL THEN
         SELECT id INTO v_existing_id
         FROM eshop.transactions
         WHERE bank_account_id = v_bank_account_id
           AND vs = v_variable_symbol
           AND amount = v_amount
           AND date >= (v_date - interval '3 days')
           AND date <= (v_date + interval '3 days')
         LIMIT 1;

         IF v_existing_id IS NOT NULL THEN
             RETURN jsonb_build_object('status', 'skipped', 'reason', 'fuzzy_duplicate_found', 'id', v_existing_id);
         END IF;
    END IF;

    INSERT INTO eshop.transactions (
        bank_account_id,
        amount,
        currency,
        counter_account,
        bank_code,
        bank_name,
        vs,
        ks,
        ss,
        message_for_recipient,
        date,
        created_at,
        external_id,
        transaction_id,
        counter_account_name
    ) VALUES (
        v_bank_account_id,
        v_amount,
        p_data->>'currency',
        p_data->>'counter_account',
        v_bank_code,
        v_bank_name,
        v_variable_symbol,
        p_data->>'ks',
        p_data->>'ss',
        p_data->>'message',
        v_date,
        now(),
        v_external_id,
        v_transaction_id,
        p_data->>'sender_name'
    )
    RETURNING id INTO v_new_id;

    IF v_variable_symbol IS NOT NULL AND v_variable_symbol != '' THEN
        BEGIN
            SELECT id INTO v_payment_info_id
            FROM eshop.payment_info
            WHERE variable_symbol = v_variable_symbol::bigint
            LIMIT 1;
        EXCEPTION WHEN OTHERS THEN
             v_payment_info_id := NULL;
        END;

        IF v_payment_info_id IS NOT NULL THEN
             PERFORM public.add_transaction_to_payment_info(v_new_id::bigint, v_payment_info_id);
        END IF;
    END IF;

    RETURN jsonb_build_object('status', 'inserted', 'id', v_new_id, 'paired', v_payment_info_id IS NOT NULL);
END;
$$;
