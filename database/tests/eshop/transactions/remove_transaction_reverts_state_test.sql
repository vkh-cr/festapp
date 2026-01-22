-- 1. Setup Data
INSERT INTO organizations (id, title) VALUES (999, 'Test Org') ON CONFLICT (id) DO NOTHING;
INSERT INTO units (id, organization, title) VALUES (999, 999, 'Test Unit') ON CONFLICT (id) DO NOTHING;

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

-- Create Account for Order
INSERT INTO eshop.bank_accounts (id, title, account_number, type, supported_currencies) 
VALUES (1000, 'FIO Account', '1111/2010', 'FIO', ARRAY['CZK']) ON CONFLICT (id) DO NOTHING;

-- Link Account to Unit AND User (Crucial for Admin Check)
INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority) VALUES (999, 1000, 1) ON CONFLICT DO NOTHING;
INSERT INTO eshop.bank_account_users (bank_account, "user", is_admin) VALUES (1000, current_setting('test.user_id')::uuid, true) ON CONFLICT DO NOTHING;


-- Create Occasion
INSERT INTO occasions (id, unit, title, link, start_time, end_time) VALUES (123, 999, 'Test Occasion', 'test-link', now(), now() + interval '1 day') ON CONFLICT (id) DO NOTHING;
-- Add User as Editor/Manager for Occasion (Must be is_editor_order for transaction ops)
INSERT INTO occasion_users (occasion, "user", is_manager, is_editor, is_editor_order) VALUES (123, current_setting('test.user_id')::uuid, true, true, true) ON CONFLICT DO NOTHING;

-- Create Payment Info (ID 1001, Amount 200, Paid 0)

-- Create Payment Info (ID 1001, Amount 200, Paid 0)
INSERT INTO eshop.payment_info (id, variable_symbol, amount, currency_code, bank_account, created_at, paid)
VALUES (1001, 123456789, 200.0, 'CZK', 1000, now(), 0.0) 
ON CONFLICT (id) DO UPDATE SET variable_symbol = 123456789, paid = 0.0, amount = 200.0, bank_account = 1000;
UPDATE eshop.payment_info SET paid = 0 WHERE id = 1001;

-- Create Order (ID 5000, Price 200, State 'ordered')
INSERT INTO eshop.orders (id, occasion, payment_info, state, price, currency_code, created_at)
VALUES (5000, 123, 1001, 'ordered', 200.0, 'CZK', now()) ON CONFLICT (id) DO NOTHING;
UPDATE eshop.orders SET state = 'ordered' WHERE id = 5000;


-- 3. Run Test Scenario in a single transaction block to preserve session config
DO $$
DECLARE 
    v_state text;
    v_trans_id bigint;
    v_paid numeric;
BEGIN
    -- Set User Context again (just to be safe if this is a new transaction)
    PERFORM set_config('request.jwt.claim.sub', current_setting('test.user_id'), true);

    -- 3. Add FULL Payment (200 CZK) - Should switch to PAID
    PERFORM public.insert_manual_transaction(
        200.0::double precision, 
        'CZK', 
        999, 
        '2024-01-01 12:00:00', 
        NULL, 
        'Full Payment',
        1001 -- explicit payment info
    );

    -- Verify State is PAID
    SELECT state INTO v_state FROM eshop.orders WHERE id = 5000;
    IF v_state != 'paid' THEN RAISE EXCEPTION 'Order should be PAID, got %', v_state; END IF;

    -- 4. Delete Payment - Should switch back to ORDERED
    -- Get Transaction ID of the one we just made (Select by comment)
    SELECT id INTO v_trans_id FROM eshop.transactions WHERE payment_info = 1001 AND comment = 'Full Payment' LIMIT 1;
    
    -- Delete it
    PERFORM public.delete_manual_transaction_ws(v_trans_id, 1001);
    
    -- Verify Paid Amount
    SELECT paid INTO v_paid FROM eshop.payment_info WHERE id = 1001;
    IF v_paid != 0 THEN RAISE EXCEPTION 'Paid amount should be 0, got %', v_paid; END IF;

    -- Verify State REVERTED
    SELECT state INTO v_state FROM eshop.orders WHERE id = 5000;
    IF v_state != 'ordered' THEN 
         RAISE EXCEPTION 'Order logic FAILED: State remained % instead of reverting to ordered.', v_state; 
    END IF;

    RAISE NOTICE 'Test Passed: Order successfully reverted to ordered.';
END $$;


ROLLBACK;
