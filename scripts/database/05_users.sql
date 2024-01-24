INSERT INTO public.user_info
  (id, email_readonly, name, surname, sex)
VALUES
  ((select create_user('test@test.com', 'test')), 'test@test.com', 'test', 'testik', 'male');

--select set_claim((select get_user_id_by_email('bujnmi@gmail.com')), 'is_admin', 'true');
--select set_claim((select get_user_id_by_email('bujnmi@gmail.com')), 'is_editor', 'true');
--select set_claim('25651d62-2649-4b95-9a16-8ba86efd01d4', 'is_editor', 'true');