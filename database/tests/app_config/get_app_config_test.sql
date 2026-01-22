BEGIN;

-- =========================================================
-- SETUP: Create Test Data
-- =========================================================
DO $$ BEGIN RAISE NOTICE 'Running v2 FINAL CHECK (Fixes Applied)'; END $$;

-- 1. Create Organization
INSERT INTO public.organizations (id, title, data)
VALUES (999, 'Test Organization', '{"IS_UNIT_CREATION_ENABLED": true, "DEFAULT_OCCASION": 9991, "REPRESENTATIVE_OCCASION": 9992, "IS_APP_SUPPORTED": false}'::jsonb)
ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data;

-- 2. Create Units
INSERT INTO public.units (id, title, organization, data)
VALUES 
    (8881, 'Test Unit 1', 999, '{}'::jsonb),
    (8882, 'Test Unit 2', 999, '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- 3. Create Occasions
INSERT INTO public.occasions (id, title, link, organization, unit, is_open, start_time, end_time)
VALUES 
    (9991, 'Default Occasion', 'default_occ', 999, 8881, true, now(), now() + interval '1 day'),
    (9992, 'Representative Occasion', 'rep_occ', 999, 8881, true, now(), now() + interval '1 day'),
    (9993, 'Specific Occasion', 'specific_occ', 999, 8882, true, now(), now() + interval '1 day'),
    (9994, 'Closed Occasion', 'closed_occ', 999, 8881, false, now(), now() + interval '1 day')
ON CONFLICT (id) DO UPDATE SET link = EXCLUDED.link;

-- 4. Create Form linked to Specific Occasion
INSERT INTO public.forms (id, title, occasion, link, is_open)
VALUES (7771, 'Test Form', 9993, 'test_form_link', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Create Test Users
SELECT create_user_for_test('testuser', 'testuser@example.com');
SELECT create_user_for_test('adminuser', 'adminuser@example.com');
SELECT create_user_for_test('randomuser', 'randomuser@example.com');

-- Setup Roles
DO $$
DECLARE
    test_uid uuid := get_user_id('testuser');
    admin_uid uuid := get_user_id('adminuser');
BEGIN
    -- testuser: Unit 1 Manager, Unit 2 Ordinary
    INSERT INTO public.unit_users (unit, "user", is_manager, is_editor, is_editor_view)
    VALUES 
        (8881, test_uid, true, true, true),
        (8882, test_uid, false, false, false);
        
    -- adminuser: Editor on Occasion 9994 (Closed)
    INSERT INTO public.occasion_users (occasion, "user", is_editor)
    VALUES (9994, admin_uid, true);
END $$;

-- =========================================================
-- TESTS
-- =========================================================

-- Test 1: Resolve by Form Link (Priority 1)
-- Expected: Occasion 9993 (Specific Occasion) from Form 7771
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "form_link": "test_form_link",
        "platform": {"platform": "web"}
    }';
BEGIN
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'occasion'->>'id')::text, '9993', 'Priority 1: Should resolve occasion 9993 via form_link');
    PERFORM assert_eq((result->'code')::int, 200, 'Priority 1: Code should be 200');
    -- Version check (Should be NULL/Missing)
    PERFORM assert_true((result->>'version_recommended') IS NULL, 'Version fields should be removed');
END $$;

-- Test 2: Resolve by Link (Priority 2)
-- Expected: Occasion 9993 (Specific Occasion) via link 'specific_occ'
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "specific_occ",
        "platform": {"platform": "web"}
    }';
BEGIN
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'occasion'->>'id')::text, '9993', 'Priority 2: Should resolve occasion 9993 via link');
END $$;

-- Test 3: Link Not Found (404)
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "non_existent_occ",
        "platform": {"platform": "web"}
    }';
BEGIN
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'code')::int, 404, 'Link 404: Should return 404 for unknown link');
END $$;

-- Test 4: Resolve by Representative Occasion (Priority 3)
-- Expected: Occasion 9992 (Rep Occasion) when no link/unit provided
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "platform": {"platform": "web"}
    }';
BEGIN
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'occasion'->>'id')::text, '9992', 'Priority 3: Should resolve Representative Occasion 9992');
END $$;

-- Test 5: Resolve by Unit ID (Priority 4)
-- Expected: NO Occasion (or null), BUT valid Unit 8882 object
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "unit_id": 8882,
        "platform": {"platform": "web"}
    }';
BEGIN
    result := get_app_config_v218(payload);
    
    PERFORM assert_true((result->'occasion'->>'id') IS NULL, 'Priority 4: Should NOT have an occasion ID when resolving by Unit');
    PERFORM assert_eq((result->'unit'->>'id')::text, '8882', 'Priority 4: Should return Unit 8882');
END $$;

-- Test 6: Default Occasion (Priority 5 - Fallback)
-- Scenario: Delete Rep Occasion from Org config to force fallback
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "platform": {"platform": "web"}
    }';
BEGIN
    -- Temp Remove Rep Occasion
    UPDATE public.organizations SET data = (data - 'REPRESENTATIVE_OCCASION') WHERE id = 999;
    
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'occasion'->>'id')::text, '9991', 'Priority 5: Should fallback to Default Occasion 9991');
    
    -- Restore
    UPDATE public.organizations 
    SET data = jsonb_set(data, '{REPRESENTATIVE_OCCASION}', '9992') 
    WHERE id = 999;
END $$;

-- Test 7: Platform Mapping (pwa -> web)
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "specific_occ",
        "platform": {"platform": "pwa"}
    }';
BEGIN
    result := get_app_config_v218(payload);
    -- We can't easily check the internal log table here without more privilege or complexity, 
    -- but we can check if it didn't crash.
    PERFORM assert_eq((result->'code')::int, 200, 'Platform Mapping: Should handle pwa input');
END $$;

-- Test 8: Security - Closed Occasion (Anonymous, IS_APP_SUPPORTED=false) -> 200
-- NOTE: Default behavior is to allow access if IS_APP_SUPPORTED is FALSE (Legacy/Web lenient mode).
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "closed_occ",
        "platform": {"platform": "web"}
    }';
BEGIN
    -- Set anonymous context (default, but explicit)
    PERFORM set_config('request.jwt.claim.sub', '', false);

    result := get_app_config_v218(payload);
    
    -- Intended behavior: Bypasses check if IS_APP_SUPPORTED is false.
    PERFORM assert_eq((result->'code')::int, 200, 'Security: Closed occasion returns 200 when IS_APP_SUPPORTED=false');
END $$;

-- Test 9: Security - Closed Occasion (Authorized Editor) -> 200
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "closed_occ",
        "platform": {"platform": "web"}
    }';
    admin_uid text := get_user_id('adminuser')::text;
BEGIN
    -- Set authorized user context
    PERFORM set_config('request.jwt.claim.sub', admin_uid, false);
    
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'code')::int, 200, 'Security: Editor should access closed occasion (200)');
    -- Editor is NOT an Org Admin, so is_admin should be false
    PERFORM assert_eq((result->'is_admin')::boolean, false, 'Security: Editor is not Org Admin');
END $$;

-- Test 11: Auto-Join Logic
-- Scenario: valid Unit Manager (Unit 8881) accessing Occasion 9991 (Unit 8881)
-- They are NOT in occasion_users yet. Should be added automatically.
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "default_occ",
        "platform": {"platform": "web"}
    }';
    test_uid text := get_user_id('testuser')::text;
    occ_user_exists boolean;
BEGIN
    -- Verify PRE-CONDITION: User is NOT in occasion_users for 9991
    SELECT EXISTS(SELECT 1 FROM occasion_users WHERE occasion=9991 AND "user"=test_uid::uuid) INTO occ_user_exists;
    PERFORM assert_eq(occ_user_exists, false, 'Pre-Test: User should not be on occasion 9991');

    -- Context
    PERFORM set_config('request.jwt.claim.sub', test_uid, false);
    
    -- Call
    result := get_app_config_v218(payload);
    
    -- logic: unit_users.is_manager=true -> add_user_to_occasion -> return updated occasion_user
    PERFORM assert_not_null(result->'occasion_user', 'Auto-Join: occasion_user should be returned');
END $$;

-- Test 12: Bank Account Admin
-- Scenario: User is admin on a bank account
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "platform": {"platform": "web"}
    }';
    test_uid uuid := get_user_id('testuser');
BEGIN
    -- Setup: Make testuser a bank account admin
    -- Use correct schema: bank_accounts (no unit col) -> unit_bank_accounts (link) -> bank_account_users (perms)
    
    INSERT INTO eshop.bank_accounts (id, supported_currencies, type, title) VALUES (5555, ARRAY['CZK'], 'FIO', 'Test Bank');
    INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority) VALUES (8881, 5555, 1);
    INSERT INTO eshop.bank_account_users (bank_account, "user", is_admin) VALUES (5555, test_uid, true);
    
    PERFORM set_config('request.jwt.claim.sub', test_uid::text, false);
    
    result := get_app_config_v218(payload);
    
    -- Check if 5555 is in the list
    PERFORM assert_jsonb_contains(result->'bank_accounts_admin', '[5555]', 'Bank Accounts: Should contain admin account 5555');
END $$;

-- Test 13: Data Lists (Occasions/Units)
-- Verify that for a manager, we get the list of occasions/units
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "default_occ",
        "platform": {"platform": "web"}
    }';
    test_uid text := get_user_id('testuser')::text;
BEGIN
    PERFORM set_config('request.jwt.claim.sub', test_uid, false);
    
    result := get_app_config_v218(payload);
    
    -- testuser is Manager on Unit 8881. Should see Occasion 9991 and 9992 (Default/Rep) which are on Unit 8881.
    -- Should see Unit 8881.
    
    -- Check Units
    -- user_info -> units
    PERFORM assert_true(jsonb_array_length(result->'user_info'->'units') > 0, 'Data Lists: Should return units');
    
    -- Check Occasions
    -- user_info -> occasions
    PERFORM assert_true(jsonb_array_length(result->'user_info'->'occasions') > 0, 'Data Lists: Should return occasions');
END $$;

-- Test 10: Security - App Support Override
-- If IS_APP_SUPPORTED = true, even closed occasions should be accessible to any authenticated user?
-- Logic: IF is_open=FALSE AND is_app_supported=TRUE THEN Check permissions...
-- Wait, if is_app_supported=TRUE, logic says:
-- "IF is_open_bool = FALSE AND is_app_supported_bool = TRUE THEN IF ... permissions ... RETURN 403"
-- So it actually enforces permissions STRICTLY if app supported is true?
-- Let's re-read the logic in v218:
/*
    IF is_open_bool = FALSE AND is_app_supported_bool = TRUE THEN
        IF is_editor... <> TRUE THEN RETURN 403 END IF;
    END IF;
*/
-- This means if App Supported is TRUE, we DO check permissions for closed occasions.
-- What if App Supported is FALSE?
-- Then the block is skipped. So Closed Occasions are accessible?
-- Let's test this behavior. Default IS_APP_SUPPORTED is FALSE in our setup.

-- Test 10a: IS_APP_SUPPORTED = FALSE (Default) -> Closed Occasion accessible?
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "closed_occ",
        "platform": {"platform": "web"}
    }';
    random_uid text := get_user_id('randomuser')::text;
BEGIN
    -- Set random user context
    PERFORM set_config('request.jwt.claim.sub', random_uid, false);
    
    -- Logic: If is_app_supported=FALSE, the "IF is_open=FALSE" block is skipped.
    -- Meaning it proceeds to return 200.
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'code')::int, 200, 'Security: When IS_APP_SUPPORTED=false, closed occasion checks are bypassed (Legacy behavior?)');
END $$;

-- Test 10b: IS_APP_SUPPORTED = TRUE -> Enforce Permissions
DO $$
DECLARE
    result jsonb;
    payload jsonb := '{
        "organization": 999,
        "link": "closed_occ",
        "platform": {"platform": "web"}
    }';
    random_uid text := get_user_id('randomuser')::text;
BEGIN
    -- Enable App Support
    UPDATE public.organizations SET data = jsonb_set(data, '{IS_APP_SUPPORTED}', 'true') WHERE id = 999;
    
    -- Set random user context
    PERFORM set_config('request.jwt.claim.sub', random_uid, false);
    
    result := get_app_config_v218(payload);
    
    PERFORM assert_eq((result->'code')::int, 403, 'Security: When IS_APP_SUPPORTED=true, strict permissions are enforced');
END $$;

ROLLBACK;
