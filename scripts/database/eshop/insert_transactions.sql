CREATE OR REPLACE FUNCTION insert_transactions(transactions JSONB, bank_account_id BIGINT)
RETURNS JSONB AS $$
DECLARE
    transaction JSONB;
    parsed_date TIMESTAMPTZ;
    inserted_count INT := 0;
    skipped_count INT := 0;
BEGIN
    FOR transaction IN SELECT * FROM jsonb_array_elements(transactions) LOOP
        -- Parse the date correctly, including the timezone offset
        BEGIN
            parsed_date := (
                transaction->'column0'->>'value'
            )::TIMESTAMPTZ; -- Directly cast the value to TIMESTAMPTZ
        EXCEPTION WHEN OTHERS THEN
            RAISE NOTICE 'Invalid date format in transaction: %', transaction->'column0'->>'value';
            skipped_count := skipped_count + 1;
            CONTINUE;
        END;

        -- Check if the transaction already exists
        IF NOT EXISTS (
            SELECT 1
            FROM eshop.transactions
            WHERE transaction_id = (transaction->'column22'->>'value')::BIGINT
        ) THEN
            -- Insert the transaction if it does not exist
            INSERT INTO eshop.transactions (
                transaction_id, date, amount, currency, counter_account, bank_code,
                bank_name, ks, vs, ss, user_identification, transaction_type,
                performed_by, comment, command_id, bank_account_id
            ) VALUES (
                (transaction->'column22'->>'value')::BIGINT, -- ID pohybu
                parsed_date, -- Parsed Datum
                (transaction->'column1'->>'value')::NUMERIC, -- Objem
                transaction->'column14'->>'value', -- Měna
                transaction->'column2'->>'value', -- Protiúčet
                transaction->'column3'->>'value', -- Kód banky
                transaction->'column12'->>'value', -- Název banky
                NULLIF(transaction->'column4'->>'value', ''), -- KS
                NULLIF(transaction->'column5'->>'value', ''), -- VS
                NULLIF(transaction->'column6'->>'value', ''), -- SS
                transaction->'column7'->>'value', -- Uživatelská identifikace
                transaction->'column8'->>'value', -- Typ
                transaction->'column9'->>'value', -- Provedl
                transaction->'column25'->>'value', -- Komentář
                (transaction->'column17'->>'value')::BIGINT, -- ID pokynu
                bank_account_id -- Bank Account ID (provided by the function parameter)
            );
            inserted_count := inserted_count + 1;
        ELSE
            skipped_count := skipped_count + 1;
        END IF;
    END LOOP;

    -- Return JSONB with counts of inserted and skipped transactions
    RETURN jsonb_build_object(
        'inserted', inserted_count,
        'skipped', skipped_count
    );
END;
$$ LANGUAGE plpgsql;

CREATE INDEX idx_transaction_id ON eshop.transactions (transaction_id);
