BEGIN;

DO $$
DECLARE
  v_user uuid;
  v_organization bigint;
  v_unit bigint;
  v_occasion bigint;
  v_command uuid := gen_random_uuid();
  v_hash text := repeat('a', 64);
  v_result jsonb;
  v_task public.queue_emails%ROWTYPE;
  v_rejected boolean := false;
BEGIN
  PERFORM create_user_for_test('client_sync_runtime', 'client_sync_runtime@test.local');
  v_user := get_user_id('client_sync_runtime');
  SELECT id INTO v_organization FROM public.organizations ORDER BY id LIMIT 1;
  SELECT id INTO v_unit FROM public.units WHERE organization=v_organization ORDER BY id LIMIT 1;
  INSERT INTO public.occasions(
    organization,unit,title,link,start_time,end_time,is_open
  ) VALUES (
    v_organization,v_unit,'Client sync runtime contract',gen_random_uuid()::text,
    now(),now()+interval '1 day',true
  ) RETURNING id INTO v_occasion;

  PERFORM set_config('request.jwt.claim.sub',v_user::text,true);
  v_result:=public.begin_client_mutation_v1(
    v_command,'runtime.contract',v_occasion,v_user,v_hash);
  PERFORM assert_eq(v_result->>'disposition','claimed','first command claim succeeds');

  v_result:=public.complete_client_mutation_outcome_v1(
    v_command,'unchanged',200,jsonb_build_object('value','stable'));
  PERFORM assert_eq(v_result->>'status','unchanged','terminal response is stored');

  v_result:=public.begin_client_mutation_v1(
    v_command,'runtime.contract',v_occasion,v_user,v_hash);
  PERFORM assert_eq(v_result->>'disposition','replay','completed command replays');
  PERFORM assert_eq(v_result#>>'{response,data,value}','stable','replay is exact');

  BEGIN
    PERFORM public.begin_client_mutation_v1(
      v_command,'runtime.contract',v_occasion,v_user,repeat('b',64));
  EXCEPTION WHEN invalid_parameter_value THEN
    v_rejected:=true;
  END;
  PERFORM assert_true(v_rejected,'command id cannot be reused for another request');
  PERFORM assert_eq((SELECT count(*) FROM public.client_mutation_receipts
    WHERE command_id=v_command),1::bigint,'one command produces one receipt');

  PERFORM public.enqueue_ticket_order_confirmation_v1(
    v_command,v_occasion,jsonb_build_object('order',jsonb_build_object('id',1)),'cs');
  PERFORM public.enqueue_ticket_order_confirmation_v1(
    v_command,v_occasion,jsonb_build_object('order',jsonb_build_object('id',1)),'cs');
  PERFORM assert_eq((SELECT count(*) FROM public.queue_emails
    WHERE code='TICKET_ORDER_CONFIRMATION' AND data->>'command_id'=v_command::text),
    1::bigint,'confirmation enqueue is idempotent by command id');

  PERFORM set_config('request.jwt.claim.role','service_role',true);
  SELECT * INTO STRICT v_task FROM public.claim_due_queue_emails_v1(1)
    WHERE data->>'command_id'=v_command::text;
  PERFORM assert_eq(v_task.attempt_count,1,'first worker claim increments attempts');
  PERFORM assert_true(v_task.processing_at IS NOT NULL,'worker claim records lease time');
  PERFORM public.release_queue_email_v1(v_task.id,'runtime retry');
  SELECT * INTO STRICT v_task FROM public.claim_due_queue_emails_v1(1)
    WHERE data->>'command_id'=v_command::text;
  PERFORM assert_eq(v_task.attempt_count,2,'released task can be reclaimed');
  PERFORM assert_eq(v_task.last_error,NULL::text,'reclaim clears prior error');
END $$;

ROLLBACK;
