DO $$
DECLARE
  org_id uuid;
BEGIN
  SELECT id INTO org_id FROM organizations LIMIT 1;

  IF NOT EXISTS (
    SELECT 1 FROM organization_users
    WHERE organization_id = org_id AND email = 't@t.com'
  ) THEN
    PERFORM create_user_in_organization_with_data(
      org_id,
      't@t.com',
      'test',
      '{"name": "Michael", "surname": "Testik", "sex": "male"}'::jsonb
    );
  END IF;
END $$;
