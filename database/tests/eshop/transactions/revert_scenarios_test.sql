-- DATA SETUP
INSERT INTO organizations (id, title) VALUES (999, 'Test Org') ON CONFLICT (id) DO NOTHING;
INSERT INTO units (id, organization, title) VALUES (999, 999, 'Test Unit') ON CONFLICT (id) DO NOTHING;

INSERT INTO eshop.bank_accounts (id, title, account_number, type, supported_currencies) 
VALUES (1000, 'FIO Account', '1111/2010', 'FIO', ARRAY['CZK']) ON CONFLICT (id) DO NOTHING;
INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority) VALUES (999, 1000, 1) ON CONFLICT DO NOTHING;
-- Mock Auth User (Requires ID match)
INSERT INTO auth.users (id, email, aud, role) VALUES ('00000000-0000-0000-0000-000000000001', 'test@example.com', 'authenticated', 'authenticated') ON CONFLICT (id) DO NOTHING;
INSERT INTO public.user_info (id, email_readonly) VALUES ('00000000-0000-0000-0000-000000000001', 'test@example.com') ON CONFLICT (id) DO NOTHING;
INSERT INTO eshop.bank_account_users (bank_account, "user", is_admin) VALUES (1000, '00000000-0000-0000-0000-000000000001', true) ON CONFLICT DO NOTHING;
INSERT INTO public.unit_users (unit, "user", is_manager) VALUES (999, '00000000-0000-0000-0000-000000000001', true) ON CONFLICT (unit, "user") DO UPDATE SET is_manager = true;

INSERT INTO occasions (id, unit, title, link, start_time, end_time) VALUES (123, 999, 'Test Occasion', 'test-link', now(), now() + interval '1 day') ON CONFLICT (id) DO NOTHING;
INSERT INTO occasion_users (occasion, "user", is_manager, is_editor, is_editor_order) VALUES (123, '00000000-0000-0000-0000-000000000001', true, true, true) ON CONFLICT DO NOTHING;

-- TEST BLOCK
DO $$
DECLARE 
    v_order_id bigint;
    v_pi_id bigint;
    v_trans_id bigint;
    v_state text;
    v_paid numeric;
    v_returned numeric;
BEGIN
    PERFORM set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-000000000001', true);

    -- SCENARIO 1: Revert from SENT
    -- 1.1 Create
    INSERT INTO eshop.payment_info (variable_symbol, amount, currency_code, bank_account, created_at, paid)
    VALUES (1000000 + floor(random() * 1000000)::bigint, 200.0, 'CZK', 1000, now(), 0.0) RETURNING id INTO v_pi_id;
    
    INSERT INTO eshop.orders (occasion, payment_info, state, price, currency_code, created_at)
    VALUES (123, v_pi_id, 'ordered', 200.0, 'CZK', now()) RETURNING id INTO v_order_id;

    -- 1.2 Pay
    PERFORM public.insert_manual_transaction(200.0, 'CZK', 999, '2024-01-01', NULL, 'Pay', v_pi_id);
    
    -- 1.3 Manually move to SENT
    UPDATE eshop.orders SET state = 'sent' WHERE id = v_order_id;
    
    -- 1.4 Delete Payment
    SELECT id INTO v_trans_id FROM eshop.transactions WHERE payment_info = v_pi_id;
    PERFORM public.delete_manual_transaction_ws(v_trans_id, v_pi_id);
    
    -- 1.5 Check State
    SELECT state INTO v_state FROM eshop.orders WHERE id = v_order_id;
    RAISE NOTICE 'Scenario 1 (From Sent): State is %', v_state;
    
    -- SCENARIO 2: Insert Negative Transaction
    -- 2.1 Create
    INSERT INTO eshop.payment_info (variable_symbol, amount, currency_code, bank_account, created_at, paid)
    VALUES (2000000 + floor(random() * 1000000)::bigint, 200.0, 'CZK', 1000, now(), 0.0) RETURNING id INTO v_pi_id;
    
    INSERT INTO eshop.orders (occasion, payment_info, state, price, currency_code, created_at)
    VALUES (123, v_pi_id, 'ordered', 200.0, 'CZK', now()) RETURNING id INTO v_order_id;

    -- 2.2 Pay Full
    PERFORM public.insert_manual_transaction(200.0, 'CZK', 999, '2024-01-01', NULL, 'Pay', v_pi_id);
    
    -- 2.3 Insert Negative (-200)
    PERFORM public.insert_manual_transaction(-200.0, 'CZK', 999, '2024-01-01', NULL, 'Refund', v_pi_id);
    
    -- 2.4 Check State and Amounts
    SELECT state, payment_info INTO v_state, v_pi_id FROM eshop.orders WHERE id = v_order_id;
    SELECT paid, returned INTO v_paid, v_returned FROM eshop.payment_info WHERE id = v_pi_id;
    
    RAISE NOTICE 'Scenario 2 (Negative Insert): State is %, Paid is %, Returned is %', v_state, v_paid, v_returned;

END $$;
ROLLBACK;
