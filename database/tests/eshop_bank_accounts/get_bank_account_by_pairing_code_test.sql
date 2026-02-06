
BEGIN;
-- 1. Setup Data
INSERT INTO eshop.bank_accounts (id, title, pairing_code)
VALUES (99999, 'Test Case Account', 'ABCDEF1234'); -- Uppercase in DB

-- 2. Test Case Mismatch
-- Verify that currently (or expectedly) we want case-insensitivity.
-- Currently, without fix, this might return 0.
-- We want to assert it returns 1 (FAILING the test until fixed).

DO $$
DECLARE
    v_count bigint;
BEGIN
    SELECT count(*) INTO v_count FROM public.get_bank_account_by_pairing_code('abcdef1234');
    PERFORM assert_eq(v_count, 1::bigint, 'Should find account even with lowercase input');
    
    SELECT count(*) INTO v_count FROM public.get_bank_account_by_pairing_code(' ABCDEF1234 ');
    PERFORM assert_eq(v_count, 1::bigint, 'Should find account even with whitespace input');
END;
$$;

