CREATE OR REPLACE FUNCTION public.delete_occasion_user_ws(usr_to_delete uuid, occasion_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
AS $$
DECLARE
    is_companion boolean;
    is_manager boolean;
    is_admin boolean;
    target_user_exists boolean;
BEGIN
    -- Allow deletion if the caller is a companion of the user being deleted.
    SELECT EXISTS (
        SELECT 1 FROM public.user_companions
        WHERE "user" = auth.uid() AND companion = usr_to_delete
    ) INTO is_companion;

    IF is_companion THEN
        RETURN; -- Permission granted
    END IF;

    -- Allow deletion if the caller is an admin or manager of the occasion.
    SELECT get_is_manager_on_occasion(occasion_id), get_is_admin_on_occasion(occasion_id)
    INTO is_manager, is_admin;

    IF is_manager OR is_admin THEN
        -- A manager/admin can only delete a user who is actually part of the occasion.
        SELECT get_exists_on_occasion_user(usr_to_delete, occasion_id)
        INTO target_user_exists;

        IF NOT target_user_exists THEN
            RAISE EXCEPTION 'Forbidden: The target user is not a member of this occasion.';
        END IF;

        RETURN; -- Permission granted
    END IF;

    -- If no checks passed, the user is not authorized.
    RAISE EXCEPTION 'Forbidden: You do not have permission to delete this user from the occasion.';
END;
$$;