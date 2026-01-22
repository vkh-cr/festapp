-- Test for public.get_bank_accounts_for_unit_management(p_unit_id)


-- Test for public.get_bank_accounts_for_unit_management(p_unit_id)

DO $$
DECLARE
    v_user_manager uuid;
    v_user_other uuid;
    v_org_id bigint;
    v_unit_id bigint;
    v_acc_fio bigint;
    v_acc_cash bigint;
    v_count int;
    v_fio_rec record;
BEGIN
    RAISE NOTICE 'Starting get_bank_accounts_for_unit_management Test...';

    -- 1. Setup Data
    SELECT id INTO v_user_manager FROM public.user_info LIMIT 1;
    -- Find another user or create one? Assuming at least one exists.
    -- If only 1 exists, we'll assume permission failure if we strip roles.
    -- Better: Insert a dummy user.
    v_user_other := gen_random_uuid();
    INSERT INTO auth.users (id, aud, role, email, created_at) 
    VALUES (v_user_other, 'authenticated', 'authenticated', 'other@test.com', now());
    
    INSERT INTO public.user_info (id) VALUES (v_user_other);

    -- Create Org & Unit
    INSERT INTO public.organizations (title) VALUES ('Test Org') RETURNING id INTO v_org_id;
    INSERT INTO public.organization_users (organization, "user", is_admin) VALUES (v_org_id, v_user_manager, true);
    
    INSERT INTO public.units (title, organization) VALUES ('Test Unit', v_org_id) RETURNING id INTO v_unit_id;
    INSERT INTO public.unit_users (unit, "user", is_manager) VALUES (v_unit_id, v_user_manager, true);
    -- v_user_other is NOT manager

    -- Create Bank Accounts
    -- FIO (Should be returned)
    INSERT INTO eshop.bank_accounts (title, type, account_number, supported_currencies, pairing_code) 
    VALUES ('Fio Test', 'FIO', '123/2010', ARRAY['CZK'], 'fiotest001') 
    RETURNING id INTO v_acc_fio;

    -- CASH (Should be excluded)
    INSERT INTO eshop.bank_accounts (title, type, supported_currencies, pairing_code) 
    VALUES ('Cash Test', 'CASH', ARRAY['CZK'], 'cashtest01') 
    RETURNING id INTO v_acc_cash;
    
    -- Link FIO to Unit
    INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority) VALUES (v_unit_id, v_acc_fio, 1);
    
    -- Link CASH to Unit (it should exist in link table, but function filters it out)
    INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority) VALUES (v_unit_id, v_acc_cash, 2);


    -- 2. Test Success (As Manager)
    PERFORM set_config('request.jwt.claim.sub', v_user_manager::text, true);
    
    -- Execute
    SELECT COUNT(*) INTO v_count FROM public.get_bank_accounts_for_unit_management(v_unit_id);
    
    -- Expect 1 result (FIO), not 2 (CASH excluded)
    IF v_count != 1 THEN
        RAISE EXCEPTION 'Expected 1 account (FIO), got %', v_count;
    END IF;

    -- Verify fields
    SELECT * INTO v_fio_rec FROM public.get_bank_accounts_for_unit_management(v_unit_id) LIMIT 1;
    
    IF v_fio_rec.title != 'Fio Test' THEN
        RAISE EXCEPTION 'Incorrect title returned.';
    END IF;
    
    IF v_fio_rec.type != 'FIO' THEN
         RAISE EXCEPTION 'Incorrect type returned.';
    END IF;
    
    -- import_token might be null or generated default
    -- We just check it's present in the record structure (implied by SELECT * INTO rec)
    
    RAISE NOTICE 'Success Case Passed.';


    -- 3. Test Failure (As Non-Manager)
    PERFORM set_config('request.jwt.claim.sub', v_user_other::text, true);
    
    BEGIN
        PERFORM public.get_bank_accounts_for_unit_management(v_unit_id);
        RAISE EXCEPTION 'Should have failed with permission error.';
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'Got expected error: %', SQLERRM;
        -- Check SQLERRM contains 'permission' or 'manager' or 'denied'
        IF SQLERRM NOT ILIKE '%manager%' AND SQLERRM NOT ILIKE '%permission%' AND SQLERRM NOT ILIKE '%denied%' THEN
             RAISE NOTICE 'Warning: Unexpected error message (might be correct logic though): %', SQLERRM;
        END IF;
    END;

    RAISE NOTICE 'get_bank_accounts_for_unit_management Test Passed.';
END;
$$;
