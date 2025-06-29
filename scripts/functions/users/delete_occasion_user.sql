DROP FUNCTION delete_occasion_user(uuid,bigint)

CREATE OR REPLACE FUNCTION public.delete_occasion_user(usr uuid, oc bigint)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
    -- Set created_by to null for news created by the user on this occasion
    UPDATE public.news
    SET created_by = null
    WHERE created_by = usr AND occasion = oc;

    -- Set leader to null for groups led by the user on this occasion
    UPDATE public.user_group_info
    SET leader = null
    WHERE leader = usr AND occasion = oc;

    -- Delete user from groups on this occasion
    DELETE FROM public.user_groups
    WHERE "user" = usr
      AND "group" IN (SELECT id FROM public.user_group_info WHERE occasion = oc);

    -- Delete user from events on this occasion
    DELETE FROM public.event_users
    WHERE "user" = usr
      AND event IN (SELECT id FROM public.events WHERE occasion = oc);

    -- Delete user's news association for this occasion
    DELETE FROM public.user_news
    WHERE "user" = usr AND occasion = oc;

    -- Delete user's saved events for this occasion
    DELETE FROM public.event_users_saved
    WHERE "user" = usr
      AND event IN (SELECT id FROM public.events WHERE occasion = oc);

    -- Finally, delete the user from the occasion itself
    DELETE FROM public.occasion_users
    WHERE "user" = usr AND occasion = oc;
END;
$$;