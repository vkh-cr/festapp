CREATE OR REPLACE FUNCTION public.delete_occasion_user_ws(usr_to_delete uuid, occasion_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
AS $$
DECLARE
    has_permission boolean := false;
    is_manager boolean;
    is_admin boolean;
    target_user_exists boolean;
    caller_uid uuid := auth.uid();
BEGIN
    -- First, check for permission based on companionship.
    SELECT EXISTS (
        SELECT 1 FROM public.user_companions
        WHERE "user" = caller_uid AND companion = usr_to_delete
    ) INTO has_permission;

    -- If the caller is not a companion, check for manager or admin permissions on the occasion.
    IF NOT has_permission THEN
        SELECT get_is_manager_on_occasion(occasion_id), get_is_admin_on_occasion(occasion_id)
        INTO is_manager, is_admin;

        IF is_manager OR is_admin THEN
            -- For a manager or admin, verify the user they are trying to delete
            -- is actually a member of the occasion. This is an important security and sanity check.
            SELECT get_exists_on_occasion_user(usr_to_delete, occasion_id)
            INTO target_user_exists;

            IF NOT target_user_exists THEN
                -- This is a specific failure case, so we raise the error immediately.
                RAISE EXCEPTION 'Forbidden: The target user is not a member of this occasion.';
            END IF;

            -- If the target user is a member, then permission is granted.
            has_permission := true;
        END IF;
    END IF;

    -- After all checks, perform the action if permission was granted.
    IF has_permission THEN
        -- If any of the permission checks passed, call the actual deletion function.
        -- We use PERFORM because we are not interested in the return value of the function.
        PERFORM public.delete_occasion_user(usr_to_delete, occasion_id);
    ELSE
        -- If no permission checks passed, raise a general authorization error.
        RAISE EXCEPTION 'Forbidden: You do not have permission to delete this user from the occasion.';
    END IF;
END;
$$;
