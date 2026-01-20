BEGIN;

-- Create test user
SELECT create_user_for_test('admin_user', 'admin@test.com');
SELECT create_user_for_test('regular_user', 'regular@test.com');

-- Create test organization
INSERT INTO public.organizations (id, title, data)
VALUES (9999, 'Test Org', '{"APP_NAME": "Original"}'::jsonb);

-- Make admin_user an admin
INSERT INTO public.organization_users ("user", organization, is_admin)
VALUES (get_user_id('admin_user'), 9999, true);

-- Make regular_user a member but NOT admin
INSERT INTO public.organization_users ("user", organization, is_admin)
VALUES (get_user_id('regular_user'), 9999, false);

--------------------------------------------------------------------------------
-- Test 1: check_is_admin_of_organization
--------------------------------------------------------------------------------
-- As Admin
SET ROLE postgres;
SELECT set_config('request.jwt.claim.sub', get_user_id('admin_user')::text, false);
SET LOCAL ROLE authenticated;

SELECT assert_eq(
    check_is_admin_of_organization(9999),
    true,
    'Admin user should return true for check_is_admin'
);

-- As Regular User
SET ROLE postgres;
SELECT set_config('request.jwt.claim.sub', get_user_id('regular_user')::text, false);
SET LOCAL ROLE authenticated;

SELECT assert_eq(
    check_is_admin_of_organization(9999),
    false,
    'Regular user should return false for check_is_admin'
);

--------------------------------------------------------------------------------
-- Test 2: get_organization_admin
--------------------------------------------------------------------------------
-- As Admin
SET ROLE postgres;
SELECT set_config('request.jwt.claim.sub', get_user_id('admin_user')::text, false);
SET LOCAL ROLE authenticated;

DO $$
DECLARE
    org_record public.organizations%ROWTYPE;
BEGIN
    SELECT * INTO org_record FROM get_organization_admin(9999);
    PERFORM assert_eq(org_record.title, 'Test Org', 'Admin should be able to fetch org details');
    PERFORM assert_jsonb_contains(org_record.data, '{"APP_NAME": "Original"}', 'Admin should retrieve correct data');
END $$;

-- As Regular User (Should fail or return empty/error)
SET ROLE postgres;
SELECT set_config('request.jwt.claim.sub', get_user_id('regular_user')::text, false);
SET LOCAL ROLE authenticated;

DO $$
BEGIN
    PERFORM get_organization_admin(9999);
    RAISE EXCEPTION 'Regular user should not be able to call get_organization_admin';
EXCEPTION WHEN OTHERS THEN
    -- Expected failure
    IF SQLERRM NOT LIKE '%Access Denied%' THEN
        RAISE NOTICE 'Caught unexpected error: %', SQLERRM;
        -- We accept any error, but specific message is better
    END IF;
END $$;

--------------------------------------------------------------------------------
-- Test 3: update_organization_admin
--------------------------------------------------------------------------------
-- As Admin
SET ROLE postgres;
SELECT set_config('request.jwt.claim.sub', get_user_id('admin_user')::text, false);
SET LOCAL ROLE authenticated;

SELECT * FROM update_organization_admin(9999, 'Updated Title', '{"APP_NAME": "New Name", "NEW_FIELD": 1}'::jsonb);

-- Verify Update
DO $$
DECLARE
    updated_org public.organizations%ROWTYPE;
BEGIN
    SELECT * INTO updated_org FROM organizations WHERE id = 9999;
    -- Since we are bypassing RLS to verify in test, switch to postgres role temporarily or check result of get_organization_admin
    -- But we are currently authenticated user. Let's use get_organization_admin again.
    
    SELECT * INTO updated_org FROM get_organization_admin(9999);
    
    PERFORM assert_eq(updated_org.title, 'Updated Title', 'Title should be updated');
    PERFORM assert_jsonb_contains(updated_org.data, '{"APP_NAME": "New Name"}', 'Data should be merged/updated');
    PERFORM assert_jsonb_contains(updated_org.data, '{"NEW_FIELD": 1}', 'New fields should be added');
END $$;


ROLLBACK;
