CREATE OR REPLACE FUNCTION public.insert_transactions(transactions JSONB, bank_account_id BIGINT)
  RETURNS JSONB
SET search_path = public, extensions AS $$
  DECLARE
      transaction JSONB;
      parsed_date TIMESTAMPTZ;
      inserted_count INT := 0;
      skipped_count INT := 0;
      payment_info_data eshop.payment_info%ROWTYPE;
      new_transaction_id BIGINT;
      v_symbol_text TEXT;
  BEGIN
      -- Loop through each transaction provided in the JSONB array
      FOR transaction IN SELECT * FROM jsonb_array_elements(transactions) LOOP
          -- Reset variables for each loop iteration to prevent using old data
          new_transaction_id := NULL;
          payment_info_data := NULL;

          -- Attempt to parse the transaction date
          BEGIN
              parsed_date := (transaction->'column0'->>'value')::TIMESTAMPTZ;
          EXCEPTION WHEN OTHERS THEN
              RAISE NOTICE 'Invalid date format, skipping transaction: %', transaction->'column0'->>'value';
              skipped_count := skipped_count + 1;
              CONTINUE;
          END;

          -- Check if the transaction already exists in the database to prevent duplicates
          IF EXISTS (
              SELECT 1
              FROM eshop.transactions
              WHERE transaction_id = (transaction->'column22'->>'value')::BIGINT
          ) THEN
              skipped_count := skipped_count + 1;
              CONTINUE;
          END IF;

          -- If the transaction is new, insert it into the database
          INSERT INTO eshop.transactions (
              transaction_id, date, amount, currency, counter_account, bank_code,
              bank_name, ks, vs, ss, user_identification, transaction_type,
              performed_by, comment, command_id, bank_account_id, message_for_recipient, counter_account_name
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
              bank_account_id, -- Bank Account ID from the function parameter
              transaction->'column16'->>'value', -- Zpráva pro příjemce
              transaction->'column10'->>'value'  -- Název protiúčtu
          )
          RETURNING id INTO new_transaction_id;
          inserted_count := inserted_count + 1;

          -- Get the variable symbol from the transaction data
          v_symbol_text := transaction->'column5'->>'value';

          -- Only try to find payment_info if a variable symbol is present
          IF v_symbol_text IS NOT NULL AND v_symbol_text != '' THEN
              -- Look for a payment_info using the variable symbol (vs) AND the bank_account_id.
              -- This ensures we only match payments for the specific bank account.
              SELECT * INTO payment_info_data
              FROM eshop.payment_info
              WHERE variable_symbol = v_symbol_text::BIGINT
                AND eshop.payment_info.bank_account = insert_transactions.bank_account_id
              LIMIT 1;

              -- If a matching payment_info is found, associate it with the new transaction
              IF FOUND THEN
                  BEGIN
                      -- Call the function to handle the association
                      PERFORM public.add_transaction_to_payment_info(
                          new_transaction_id,      -- The newly created transactions.id
                          payment_info_data.id     -- The found payment_info_id
                      );
                  EXCEPTION WHEN OTHERS THEN
                      RAISE NOTICE 'Error associating transaction_id % with payment_info: %', new_transaction_id, SQLERRM;
                      -- Continue to the next transaction even if this part fails
                  END;
              END IF;
          END IF;
      END LOOP;

      -- Return a summary of the operation
      RETURN jsonb_build_object(
          'inserted', inserted_count,
          'skipped', skipped_count
      );
  END;
  $$ LANGUAGE plpgsql;

CREATE INDEX IF NOT EXISTS idx_transaction_id ON eshop.transactions (transaction_id);
