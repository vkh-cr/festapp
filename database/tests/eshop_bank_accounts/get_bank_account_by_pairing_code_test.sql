-- Verify: get_bank_account_by_pairing_code is case-insensitive and trims whitespace.

DO $$
DECLARE
    v_bank_id bigint;
    v_pairing_code text := 'ABCDEF' || floor(random()*10000)::text;  -- unique per run
    v_count bigint;
BEGIN
    -- 1. Setup: bank account with uppercase pairing_code
    INSERT INTO eshop.bank_accounts (title, pairing_code)
    VALUES ('Test Case Account', v_pairing_code)
    RETURNING id INTO v_bank_id;

    -- 2. Lookup with lowercase input — should still find it
    SELECT count(*) INTO v_count
    FROM public.get_bank_account_by_pairing_code(lower(v_pairing_code));
    PERFORM assert_eq(v_count, 1::bigint, 'Should find account even with lowercase input');

    -- 3. Lookup with surrounding whitespace — should still find it
    SELECT count(*) INTO v_count
    FROM public.get_bank_account_by_pairing_code(' ' || v_pairing_code || ' ');
    PERFORM assert_eq(v_count, 1::bigint, 'Should find account even with whitespace input');
END;
$$;
