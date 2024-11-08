CREATE OR REPLACE FUNCTION delete_user(usr uuid, oc bigint)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $$

BEGIN
    -- Check if the current user has a record in user_companions where companion = usr
    IF NOT EXISTS (SELECT 1 FROM user_companions WHERE "user" = auth.uid() AND companion = usr) THEN
        IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE AND (SELECT get_is_admin_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
        IF (select get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
             RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    UPDATE user_group_info SET leader = null where leader = usr;
    DELETE FROM user_groups WHERE "user" = usr;
    DELETE FROM event_users WHERE "user" = usr;
    DELETE FROM user_news WHERE "user" = usr;
    DELETE FROM event_users_saved WHERE "user" = usr;
    DELETE FROM occasion_users WHERE "user" = usr;
    DELETE FROM user_reset_token WHERE "user" = usr;
    DELETE FROM user_companions WHERE "user" = usr;
    DELETE FROM user_companions WHERE companion = usr;
    DELETE FROM user_info WHERE id = usr;
    DELETE FROM auth.identities WHERE id = usr;
    DELETE FROM auth.users WHERE id = usr;
    RETURN jsonb_build_object('code', 200);
END;
$$;