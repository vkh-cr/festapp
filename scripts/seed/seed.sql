SELECT create_user_in_organization_with_data(
  (SELECT id FROM organizations LIMIT 1),
  't@t.com',
  'test',
  '{"name": "Michael", "surname": "Testik", "sex": "male"}'::jsonb
);
