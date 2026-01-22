-- Test: Verify regenerate_bank_account_pairing_code (Short Token)
BEGIN;

-- 1. Setup: Create a temp bank account with short token
INSERT INTO eshop.bank_accounts (id, type, pairing_code, created_at, updated_at)
VALUES (999999, 'FIO', 'init_token', now(), now())
ON CONFLICT (id) DO UPDATE SET pairing_code = 'init_token';

-- 2. Execute RPC
DO $$
DECLARE
  v_new_token text;
  v_db_token text;
BEGIN
  -- Call the function
  v_new_token := public.regenerate_bank_account_pairing_code(999999);
  
  -- Verify output is not null
  IF v_new_token IS NULL THEN
    RAISE EXCEPTION 'Test Failed: New token is null';
  END IF;

  -- Verify length (should be 10 chars)
  IF length(v_new_token) != 10 THEN
     RAISE EXCEPTION 'Test Failed: Token length expected 10, got %', length(v_new_token);
  END IF;

  -- Verify output is different from old token
  IF v_new_token = 'init_token' THEN
    RAISE EXCEPTION 'Test Failed: Token did not change';
  END IF;

  -- Verify DB update
  SELECT pairing_code INTO v_db_token FROM eshop.bank_accounts WHERE id = 999999;
  
  IF v_db_token != v_new_token THEN
    RAISE EXCEPTION 'Test Failed: Database not updated. Expected %, got %', v_new_token, v_db_token;
  END IF;

  RAISE NOTICE 'Test Passed: Short token regenerated successfully. Token: %', v_new_token;
  
  
  -- 3. Verify Lookup RPC
  PERFORM * FROM eshop.get_bank_account_by_pairing_code(v_new_token);
  IF NOT FOUND THEN
     RAISE EXCEPTION 'Test Failed: Lookup by token failed';
  END IF;
  
   RAISE NOTICE 'Test Passed: Lookup successful.';

END $$;

-- 3. Cleanup
ROLLBACK;
