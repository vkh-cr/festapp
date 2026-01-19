DO $$
DECLARE
  v_user_id uuid;
  v_result jsonb;
  v_unit_id bigint;
  v_unit_data jsonb;
  v_unit_title text;
  v_is_manager boolean;
  v_is_editor boolean;
BEGIN
  -- 1. Setup Context
  -- Fetch a real user to impersonate
  SELECT id INTO v_user_id FROM auth.users LIMIT 1;
  
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'No users found in auth.users to test with.';
  END IF;

  -- Mock the JWT claim for auth.uid()
  PERFORM set_config('request.jwt.claim.sub', v_user_id::text, true);

  -- Ensure the user has a user_info record with an organization
  -- (Function relies on user_info existing)
  -- In a real scenario, we might need to insert dummy data if specific constraints aren't met,
  -- but strictly we test against existing data or wrapped transaciton.
  -- Here we assume the user found is valid enough or we quickly ensure user_info.
  
  -- 1a. Create Test Organization with Unit Creation Enabled
  INSERT INTO public.organizations (id, title, data)
  VALUES (99999, 'Test Org for Unit Creation', '{"IS_UNIT_CREATION_ENABLED": true}'::jsonb);

  INSERT INTO public.user_info (id, email_readonly, organization)
  VALUES (v_user_id, 'testuser@example.com', 99999)
  ON CONFLICT (id) DO UPDATE SET email_readonly = 'testuser@example.com', organization = 99999;

  -- 2. Execute Function
  v_result := public.create_unit_and_assign_manager('Test Unit Manual Creation');

  -- 3. Validate Response
  PERFORM assert_eq(v_result->>'code', '200', 'Response code should be 200');
  
  v_unit_id := (v_result->'data'->>'id')::bigint;
  PERFORM assert_not_null(v_unit_id::text, 'New Unit ID should not be null');

  -- 4. Validate Unit Data
  SELECT title, data INTO v_unit_title, v_unit_data 
  FROM public.units 
  WHERE id = v_unit_id;

  PERFORM assert_eq(v_unit_title, 'Test Unit Manual Creation', 'Unit title should match');
  PERFORM assert_eq(v_unit_data->>'timezone', 'Europe/Prague', 'Timezone should be Europe/Prague');
  PERFORM assert_eq(v_unit_data->>'reply_to', 'testuser@example.com', 'Reply-to should be set from user email');

  -- 5. Validate Permissions
  SELECT is_manager, is_editor 
  INTO v_is_manager, v_is_editor
  FROM public.unit_users 
  WHERE unit = v_unit_id AND "user" = v_user_id;

  PERFORM assert_true(v_is_manager, 'Creator should be manager');
  PERFORM assert_true(v_is_editor, 'Creator should be editor');

END $$ LANGUAGE plpgsql;
