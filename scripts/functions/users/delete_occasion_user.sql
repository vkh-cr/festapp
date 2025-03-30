CREATE OR REPLACE FUNCTION delete_occasion_user(usr uuid, oc bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM user_companions WHERE "user" = auth.uid() AND companion = usr) THEN
        IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE AND (SELECT get_is_admin_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
        IF (SELECT get_exists_on_occasion_user(usr, oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;
    UPDATE public.news
    SET created_by = null
    WHERE created_by = usr AND occasion = oc;
    UPDATE user_group_info
    SET leader = null
    WHERE leader = usr AND occasion = oc;
    DELETE FROM user_groups
    WHERE "user" = usr
      AND "group" IN (SELECT id FROM user_group_info WHERE occasion = oc);
    DELETE FROM event_users
    WHERE "user" = usr
      AND event IN (SELECT id FROM events WHERE occasion = oc);
    DELETE FROM user_news
    WHERE "user" = usr AND occasion = oc;
    DELETE FROM event_users_saved
    WHERE "user" = usr
      AND event IN (SELECT id FROM events WHERE occasion = oc);
    DELETE FROM occasion_users
    WHERE "user" = usr AND occasion = oc;
    RETURN jsonb_build_object('code', 200);
END;
$$;
