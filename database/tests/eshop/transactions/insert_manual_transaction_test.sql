-- 1. Setup Data
-- Create a test organization and unit
INSERT INTO organizations (id, title) VALUES (999, 'Test Org') ON CONFLICT (id) DO NOTHING;
INSERT INTO units (id, organization, title) VALUES (999, 999, 'Test Unit') ON CONFLICT (id) DO NOTHING;

-- Setup Mock User (Manager)
-- Setup Mock User (Manager)
DO $$
DECLARE
    v_user_id uuid := gen_random_uuid();
BEGIN
    -- Store for later blocks
    PERFORM set_config('test.user_id', v_user_id::text, false);

    INSERT INTO auth.users (id, email) VALUES (v_user_id, 'test_' || v_user_id || '@example.com');
    INSERT INTO public.user_info (id, email_readonly) VALUES (v_user_id, 'test_' || v_user_id || '@example.com');
    
    -- Login as this user
    PERFORM set_config('request.jwt.claim.sub', v_user_id::text, true);
    
    INSERT INTO public.unit_users (unit, "user", is_manager) VALUES (999, v_user_id, true);
END $$;

-- Create Order & Payment Info
-- 1. Create a dummy Bank Account (e.g. FIO) for the order logic
INSERT INTO eshop.bank_accounts (id, title, account_number, type, supported_currencies) 
VALUES (1000, 'FIO Account', '1111/2010', 'FIO', ARRAY['CZK']) ON CONFLICT (id) DO NOTHING;

-- 2. Create Payment Info linked to FIO account
-- (This simulates the user creating an order expecting FIO payment)
INSERT INTO eshop.payment_info (id, variable_symbol, amount, currency_code, bank_account, created_at)
VALUES (1001, 123456789, 200.0, 'CZK', 1000, now()) 
ON CONFLICT (id) DO UPDATE SET variable_symbol = 123456789, paid = 0, amount = 200.0, bank_account = 1000;
UPDATE eshop.payment_info SET paid = 0 WHERE id = 1001;

-- 3. Create Order
-- Need occasion
INSERT INTO occasions (id, unit, title, link, start_time, end_time) VALUES (123, 999, 'Test Occasion', 'test-link', now(), now() + interval '1 day') ON CONFLICT (id) DO NOTHING;

INSERT INTO eshop.orders (id, occasion, payment_info, state, price, currency_code, created_at)
VALUES (5000, 123, 1001, 'created', 200.0, 'CZK', now()) ON CONFLICT (id) DO NOTHING;
UPDATE eshop.orders SET state = 'created' WHERE id = 5000;


-- 3. Call the RPC (Pay 200 CZK CASH manually - Full Payment)
-- Params: amount, currency, unit_id, vs, date, note
DO $$
BEGIN
    PERFORM public.insert_manual_transaction(
        200.0::double precision, 
        'CZK', 
        999, 
        '2024-01-01 12:00:00', 
        '123456789', 
        'Test Note'
    );
END $$;

-- 4. Verify Side Effects

DO $$
DECLARE
    v_acc_id int;
    v_paid_amount numeric;
    v_order_state text;
    v_trans_record eshop.transactions%ROWTYPE;
BEGIN
    -- Verify CASH account was created
    SELECT ba.id INTO v_acc_id
    FROM eshop.bank_accounts ba
    JOIN eshop.unit_bank_accounts uba ON ba.id = uba.bank_account
    WHERE uba.unit = 999 
    AND 'CZK' = ANY(ba.supported_currencies)
    AND ba.type = 'CASH';

    IF v_acc_id IS NULL THEN
        RAISE EXCEPTION 'CASH account was NOT lazy-created';
    END IF;

    -- Verify Transaction was inserted
    SELECT * INTO v_trans_record
    FROM eshop.transactions 
    WHERE bank_account_id = v_acc_id 
    AND amount = 200.0 
    AND currency = 'CZK'
    AND vs = '123456789'
    AND transaction_type = 'manual'
    LIMIT 1;

    IF v_trans_record IS NULL THEN
        RAISE EXCEPTION 'Transaction was NOT inserted correctly';
    END IF;

    -- CHECK COMMENT (NOTE)
    IF v_trans_record.comment IS DISTINCT FROM 'Test Note' THEN
         RAISE EXCEPTION 'Transaction NOTE (comment) mismatch. Expected "Test Note", got %', v_trans_record.comment;
    END IF;
    
    -- Verify Payment Info Updated
    SELECT paid INTO v_paid_amount
    FROM eshop.payment_info
    WHERE id = 1001;
    
    IF v_paid_amount IS NULL OR v_paid_amount != 200.0 THEN
         RAISE EXCEPTION 'Payment Info was NOT updated. Expected 200.0, got %', v_paid_amount;
    END IF;

    -- Verify Order State Updated
    SELECT state INTO v_order_state
    FROM eshop.orders
    WHERE id = 5000;

    IF v_order_state != 'paid' THEN
        RAISE EXCEPTION 'Order state was NOT updated to paid. Current state: %', v_order_state;
    END IF;

    RAISE NOTICE 'Test Passed: CASH account created, transaction inserted with NOTE, payment info updated, and order marked PAID.';
END $$;



ROLLBACK;
