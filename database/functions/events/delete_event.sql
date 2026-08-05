-- delete_event — editor-only deletion of an event that first unbinds the child
-- rows whose FKs lack ON DELETE CASCADE: sign-ups (event_users), saved
-- (event_users_saved), exclusive links, roles, and parent/child groups. This is
-- required because ordinary events — including counseling slots — carry
-- event_users / event_users_saved rows that an editor cannot remove from the
-- client under RLS (a user may only delete their own rows). event_speakers and
-- activity_assignment_events cascade on their own.
CREATE OR REPLACE FUNCTION delete_event(p_event BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_occasion BIGINT;
BEGIN
    SELECT occasion INTO v_occasion
    FROM public.events
    WHERE id = p_event;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('code', 404);
    END IF;

    IF NOT public.get_is_editor_on_occasion(v_occasion) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Unbind child rows without ON DELETE CASCADE, then delete the event.
    DELETE FROM public.event_users       WHERE event = p_event;
    DELETE FROM public.event_users_saved WHERE event = p_event;
    DELETE FROM public.exclusive_events  WHERE event = p_event;
    DELETE FROM public.event_roles       WHERE event = p_event;
    DELETE FROM public.event_groups      WHERE event_parent = p_event OR event_child = p_event;

    DELETE FROM public.events WHERE id = p_event;

    RETURN jsonb_build_object('code', 200);
END;
$$;
