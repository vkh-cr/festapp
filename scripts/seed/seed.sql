SELECT create_user_in_organization_with_data(
    org,
    "t@t.com",
    "test",
    '{"name": "Michael", "surname": "Testik", "sex": "male"}'::jsonb
  );

SELECT cron.schedule('apply_planned_changes', '*/1 * * * *', 'CALL apply_planned_changes()');