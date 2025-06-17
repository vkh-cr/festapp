CREATE OR REPLACE FUNCTION public.get_user_group_info(p_group_id bigint)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER AS $$
DECLARE
    v_occasion_id bigint;
    v_is_member boolean;
    v_is_editor_view boolean;
    result_json jsonb;
BEGIN
    -- First, find the occasion for the requested group to check permissions against it.
    SELECT occasion INTO v_occasion_id FROM public.user_group_info WHERE id = p_group_id;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('code', 404, 'message', 'User group not found');
    END IF;

    -- Authorization Check:
    -- 1. Check if the current user is a member of the group.
    SELECT EXISTS (
        SELECT 1 FROM public.user_groups WHERE "group" = p_group_id AND "user" = auth.uid()
    ) INTO v_is_member;

    -- 2. Check if the current user has editor view permissions on the occasion.
    v_is_editor_view := get_is_editor_view_on_occasion(v_occasion_id);

    -- If the user is neither a member nor has editor view permissions, deny access.
    IF NOT v_is_member AND NOT v_is_editor_view THEN
        RETURN jsonb_build_object('code', 403, 'message', 'Not authorized to view this user group');
    END IF;

    -- If authorized, proceed to fetch the data.
    SELECT
        jsonb_build_object(
            'id', ugi.id,
            'title', ugi.title,
            'description', ugi.description,
            'type', ugi.type,
            'data', ugi.data,
            'leader', ugi.leader,
            'place', ugi.place,
            'user_info', (SELECT jsonb_build_object('id', ui_leader.id, 'name', ui_leader.name, 'surname', ui_leader.surname) FROM public.user_info ui_leader WHERE ui_leader.id = ugi.leader),
            'places', (SELECT jsonb_build_object('id', p.id, 'title', p.title, 'description', p.description, 'type', p.type, 'created_at', p.created_at, 'coordinates', p.coordinates, 'is_hidden', p.is_hidden, 'updated_at', p.updated_at, 'occasion', p.occasion, 'order', p."order", 'icon', p.icon, 'unit', p.unit) FROM public.places p WHERE p.id = ugi.place),
            'user_groups', (SELECT COALESCE(jsonb_agg(jsonb_build_object('user_info', jsonb_build_object('id', p_ui.id, 'name', p_ui.name, 'surname', p_ui.surname))), '[]'::jsonb) FROM public.user_groups ug JOIN public.user_info p_ui ON ug."user" = p_ui.id WHERE ug."group" = ugi.id)
        )
    INTO result_json
    FROM public.user_group_info ugi
    WHERE ugi.id = p_group_id;

    -- Return the data in a structured response on success.
    RETURN jsonb_build_object('code', 200, 'data', result_json);

EXCEPTION WHEN OTHERS THEN
    RETURN jsonb_build_object('code', 500, 'message', SQLERRM);
END;
$$;