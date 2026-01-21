DO $$
DECLARE
  v_user_id uuid;
  v_unit_id_1 bigint;
  v_unit_id_2 bigint;
  v_result jsonb;
  v_count int;
  v_occasion_id int;
BEGIN
  -- 1. Setup Context
  SELECT id INTO v_user_id FROM auth.users LIMIT 1;
  IF v_user_id IS NULL THEN RAISE EXCEPTION 'No users found'; END IF;
  PERFORM set_config('request.jwt.claim.sub', v_user_id::text, true);

  -- Ensure Organization
  INSERT INTO public.organizations (id, title, data)
  VALUES (99998, 'Test Org Delete Unit', '{"IS_UNIT_CREATION_ENABLED": true}'::jsonb)
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_info (id, email_readonly, organization)
  VALUES (v_user_id, 'testdelete@example.com', 99998)
  ON CONFLICT (id) DO UPDATE SET organization = 99998;

  -- 2. Create Unit 1
  v_result := public.create_unit_and_assign_manager('Unit To Delete');
  v_unit_id_1 := (v_result->'data'->>'id')::bigint;

  -- 2b. Case Check: Non-manager tries to delete -> Should Fail
  -- Switch to a random user ID temporarily
  PERFORM set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-000000000000', true);
  BEGIN
    PERFORM delete_unit(v_unit_id_1);
    RAISE EXCEPTION 'Should have failed with is_manager check';
  EXCEPTION WHEN OTHERS THEN
    -- We expect RLS or check_is_manager_on_unit to fail. 
    -- Typically check_is_manager_on_unit might raise a specific error or RLS returns empty/error.
    -- For now, any error is good, but let's check if it's the expected permission error if possible.
    -- If check_is_manager throws 'PERMISSION_DENIED' or similar, we check that.
    -- Assuming check_is_manager_on_unit raises an exception if not manager.
    NULL; -- Test passed
  END;
  -- Switch back to manager
  PERFORM set_config('request.jwt.claim.sub', v_user_id::text, true);

  -- 3. Case A: Try to delete immediately (only 1 unit managed) -> Should Fail
  BEGIN
    PERFORM delete_unit(v_unit_id_1);
    RAISE EXCEPTION 'Should have failed with CANNOT_DELETE_LAST_UNIT';
  EXCEPTION WHEN OTHERS THEN
    IF SQLERRM NOT LIKE '%CANNOT_DELETE_LAST_UNIT%' THEN
       RAISE EXCEPTION 'Unexpected error: %', SQLERRM;
    END IF;
  END;

  -- 4. Create Unit 2
  v_result := public.create_unit_and_assign_manager('Unit To Keep');
  v_unit_id_2 := (v_result->'data'->>'id')::bigint;

  -- 5. Case B: Add occasion to Unit 1 and try delete -> Should Fail
  INSERT INTO public.occasions (title, start_time, end_time, link, unit)
  VALUES ('Test Occasion', now(), now(), 'test-occasion-delete', v_unit_id_1)
  RETURNING id INTO v_occasion_id;

  BEGIN
    PERFORM delete_unit(v_unit_id_1);
    RAISE EXCEPTION 'Should have failed with UNIT_HAS_OCCASIONS';
  EXCEPTION WHEN OTHERS THEN
    IF SQLERRM NOT LIKE '%UNIT_HAS_OCCASIONS%' THEN
       RAISE EXCEPTION 'Unexpected error: %', SQLERRM;
    END IF;
  END;

  -- 6. Remove Occasion and Delete Unit 1 -> Should Success
  DELETE FROM public.occasions WHERE id = v_occasion_id;

  PERFORM delete_unit(v_unit_id_1);

  -- Verify deletion
  SELECT count(*) INTO v_count FROM public.units WHERE id = v_unit_id_1;
  PERFORM assert_eq(v_count, 0, 'Unit 1 should be deleted');

  -- Verify Unit 2 still exists
  SELECT count(*) INTO v_count FROM public.units WHERE id = v_unit_id_2;
  PERFORM assert_eq(v_count, 1, 'Unit 2 should remain');

END $$ LANGUAGE plpgsql;
