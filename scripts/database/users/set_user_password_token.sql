CREATE OR REPLACE FUNCTION set_user_password_token(token uuid, password text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
#variable_conflict use_variable
  declare
  user_id uuid;
  email text;
  encrypted_pw text;
BEGIN
    SELECT "user" INTO user_id FROM user_reset_token WHERE user_reset_token.token = token;
    IF user_id is NULL THEN
        RETURN json_build_object('code', 403);
    END IF;

    DELETE FROM user_reset_token WHERE "user" = user_id;

    encrypted_pw := crypt(password, gen_salt('bf'));

    UPDATE auth.users
    SET encrypted_password = encrypted_pw
    WHERE auth.users.id = user_id;

    SELECT email_readonly INTO email FROM user_info WHERE user_info.id = user_id;
    IF email is NULL THEN
        RETURN json_build_object('code', 404);
    END IF;

    RETURN json_build_object('code', 200, 'email', email);
END;
$$;