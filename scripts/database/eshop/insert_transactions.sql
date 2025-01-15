CREATE OR REPLACE FUNCTION insert_transactions(transactions JSONB, bank_account_id BIGINT)
RETURNS JSONB AS $$
DECLARE
    transaction JSONB;
    parsed_date TIMESTAMPTZ;
    inserted_count INT := 0;
    skipped_count INT := 0;
    payment_info_data eshop.payment_info%ROWTYPE;  -- Variable for storing the payment_info
    order_id BIGINT;
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
            CONTINUE;
        END IF;

        -- Now, look for a payment_info using the variable symbol (vs)
        SELECT * INTO payment_info_data
        FROM eshop.payment_info
        WHERE variable_symbol = (transaction->'column5'->>'value')::BIGINT
        LIMIT 1;

        -- If payment_info is found, update the payment_info and check the paid/returned amounts
        IF FOUND THEN
            -- Update the paid or returned column based on the transaction amount
            IF (transaction->'column1'->>'value')::NUMERIC > 0 THEN
                -- Add to paid column
                UPDATE eshop.payment_info
                SET paid = COALESCE(paid, 0) + (transaction->'column1'->>'value')::NUMERIC
                WHERE id = payment_info_data.id;
            ELSE
                -- Add to returned column
                UPDATE eshop.payment_info
                SET returned = COALESCE(returned, 0) + (transaction->'column1'->>'value')::NUMERIC
                WHERE id = payment_info_data.id;
            END IF;

            -- Re-fetch payment_info_data to get the updated paid value
            SELECT * INTO payment_info_data
            FROM eshop.payment_info
            WHERE id = payment_info_data.id
            LIMIT 1;

            -- If paid >= amount, set the order to paid
            IF payment_info_data.paid >= payment_info_data.amount THEN
                -- Find the order by payment_info ID
                SELECT id INTO order_id
                FROM eshop.orders
                WHERE payment_info = payment_info_data.id
                LIMIT 1;

                -- Call the existing function to mark the order as paid
                PERFORM update_order_and_tickets_to_paid(order_id);
            END IF;

            -- Update the transaction with payment_info reference
            UPDATE eshop.transactions
            SET payment_info = payment_info_data.id
            WHERE transaction_id = (transaction->'column22'->>'value')::BIGINT;
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
