CREATE OR REPLACE FUNCTION update_user(usr uuid, oc bigint, data jsonb)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    _key   text;
    _value text;
    usr_info user_info%rowtype;
BEGIN
    -- Check if the caller is a manager or admin for the occasion
    IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE AND (SELECT get_is_admin_on_occasion(oc)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Check if the user exists for the occasion
    IF (SELECT get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
         RETURN jsonb_build_object('code', 403);
    END IF;

    -- Retrieve user information
    SELECT * INTO usr_info FROM user_info WHERE id = usr;

    -- If the user does not exist, insert a new user record
    IF usr_info IS NULL THEN
        RETURN jsonb_build_object('code', 404);
    END IF;

    -- Initialize usr_info.data if it is null
    IF usr_info.data IS NULL THEN
        usr_info.data := '{}'::jsonb;
    END IF;

    -- Merge the input data with existing usr_info.data
    usr_info.data := usr_info.data || data;

    -- Update individual columns if they are part of the input JSON data
    IF usr_info.data ? 'name' THEN
        UPDATE user_info SET name = usr_info.data->>'name' WHERE id = usr;
    END IF;
    IF usr_info.data ? 'surname' THEN
        UPDATE user_info SET surname = usr_info.data->>'surname' WHERE id = usr;
    END IF;
    IF usr_info.data ? 'sex' THEN
        UPDATE user_info SET sex = usr_info.data->>'sex' WHERE id = usr;
    END IF;

    -- Update the user_info data column with the modified JSON data
    UPDATE user_info SET data = usr_info.data WHERE id = usr;

    -- Return a success code
    RETURN jsonb_build_object('code', 200);
END;
$$;