-- 1. Setup Data
INSERT INTO organizations (id, title) VALUES (999, 'Test Org') ON CONFLICT (id) DO NOTHING;
INSERT INTO units (id, organization, title) VALUES (999, 999, 'Test Unit') ON CONFLICT (id) DO NOTHING;

-- Setup Mock User (Manager)
DO $$
BEGIN
    INSERT INTO auth.users (id, email) VALUES ('00000000-0000-0000-0000-000000000001', 'test@example.com');
    INSERT INTO public.user_info (id, email_readonly) VALUES ('00000000-0000-0000-0000-000000000001', 'test@example.com');
    PERFORM set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-000000000001', true);
    
    INSERT INTO public.unit_users (unit, "user", is_manager) VALUES (999, '00000000-0000-0000-0000-000000000001', true);
END $$;

-- Create Account for Order
INSERT INTO eshop.bank_accounts (id, title, account_number, type, supported_currencies) 
VALUES (1000, 'FIO Account', '1111/2010', 'FIO', ARRAY['CZK']) ON CONFLICT (id) DO NOTHING;

-- Create Payment Info (ID 1001)
INSERT INTO eshop.payment_info (id, variable_symbol, amount, currency_code, bank_account, created_at)
VALUES (1001, 123456789, 200.0, 'CZK', 1000, now()) ON CONFLICT (id) DO NOTHING;
UPDATE eshop.payment_info SET paid = 0 WHERE id = 1001;
DELETE FROM eshop.transactions WHERE payment_info = 1001;

-- 3. Call the RPC (Pay 200 CZK CASH manually - EXPLICIT ID, NULL VS)
-- Params: amount, currency, unit_id, date, vs, note, payment_info_id
SELECT public.insert_manual_transaction(
    200.0::double precision, -- p_amount
    'CZK',                   -- p_currency
    999,                     -- p_unit_id
    NULL,                    -- p_variable_symbol (VS is NULL)
    '2024-01-01T12:00:00Z',  -- p_date
    'Test Explicit Link',    -- p_note
    1001                     -- p_payment_info_id (Explicit Link)
);

-- 4. Verify
DO $$
DECLARE
    v_trans_record eshop.transactions%ROWTYPE;
    v_link_count int;
    v_paid_amount numeric;
BEGIN
    -- Verify Transaction was inserted
    SELECT * INTO v_trans_record
    FROM eshop.transactions 
    WHERE amount = 200.0 
    AND currency = 'CZK'
    AND vs IS NULL
    AND transaction_type = 'manual'
    LIMIT 1;

    IF v_trans_record IS NULL THEN
        RAISE EXCEPTION 'Transaction was NOT inserted';
    END IF;

    -- Verify LINK to Payment Info exists
    IF v_trans_record.payment_info IS DISTINCT FROM 1001 THEN
         RAISE EXCEPTION 'Transaction was NOT linked to Payment Info 1001. payment_info is %', v_trans_record.payment_info;
    END IF;

    -- Verify Payment Info Update
    SELECT paid INTO v_paid_amount FROM eshop.payment_info WHERE id = 1001;
    IF v_paid_amount <> 200.0 THEN
         RAISE EXCEPTION 'Payment info PAID amount mismatch. Expected 200.0, got %', v_paid_amount;
    END IF;
    
    RAISE NOTICE 'Test Passed: Transaction inserted and explicitly linked.';
END $$;

ROLLBACK;
