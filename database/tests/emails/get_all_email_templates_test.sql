DO $$
DECLARE
  v_org bigint;
  v_result jsonb;
BEGIN
  INSERT INTO public.organizations(title, data)
  VALUES ('Email template contract org', '{"IS_APP_SUPPORTED":true}'::jsonb)
  RETURNING id INTO v_org;

  INSERT INTO public.email_templates(
    html, subject, organization, code, title
  ) VALUES (
    '<p>{{confirmationUrl}}</p>',
    'Confirm deletion',
    v_org,
    'ACCOUNT_DELETION_CONFIRM',
    'Account deletion confirmation'
  );

  v_result := public.get_all_email_templates(
    jsonb_build_object('organization', v_org)
  );

  PERFORM assert_eq(
    v_result->0->>'code',
    'ACCOUNT_DELETION_CONFIRM',
    'system template is returned by code'
  );
  PERFORM assert_eq(
    v_result->0->>'title',
    'Account deletion confirmation',
    'template title survives the RPC contract'
  );
END $$;
