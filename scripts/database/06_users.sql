INSERT INTO public.user_info
  (id, email_readonly, name, surname, sex)
VALUES
  ((select get_user_id_by_email('test@test.com')), 'test@test.com', 'test', 'testik', 'male');

INSERT INTO public.occasion_users
  ("user", occasion, data, is_manager)
VALUES
  ((select get_user_id_by_email('test@test.com')), 1,
  json_build_object(
  'email','test@test.com',
  'name','test',
  'surname','testik',
  'sex', 'male'
  ), true);


--select set_claim((select get_user_id_by_email('bujnmi@gmail.com')), 'is_admin', 'true');