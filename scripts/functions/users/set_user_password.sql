CREATE OR REPLACE FUNCTION set_user_password(usr uuid, oc bigint, password text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$
  declare
  encrypted_pw text;
BEGIN
    IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE AND (SELECT get_is_admin_on_occasion(oc)) <> TRUE THEN
        RETURN NULL;
    END IF;

    IF (select get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
       RETURN NULL;
    END IF;

    encrypted_pw := crypt(password, gen_salt('bf'));

    UPDATE auth.users
    SET encrypted_password = encrypted_pw
    WHERE auth.users.id = usr;
    RETURN usr;
END;
$$;