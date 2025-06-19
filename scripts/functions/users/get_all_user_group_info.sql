CREATE OR REPLACE FUNCTION public.get_all_user_group_info(p_occasion_id bigint, p_type text DEFAULT NULL)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER AS $$
DECLARE
    groups_json jsonb;
    game_defs_json jsonb;
    result_data jsonb;
BEGIN
    -- Authorization Check:
    -- The user must have editor view permissions for the requested occasion.
    -- This function call is the security gate for this entire operation.
    IF NOT get_is_editor_view_on_occasion(p_occasion_id) THEN
        RETURN jsonb_build_object('code', 403, 'message', 'Not authorized to view user groups for this occasion');
    END IF;

    -- If authorized, proceed to fetch the data.
    SELECT
        COALESCE(jsonb_agg(
            jsonb_build_object(
                'id', ugi.id,
                'title', ugi.title,
                'description', ugi.description,
                'type', ugi.type,
                'data', ugi.data,
                'leader', ugi.leader,
                'place', ugi.place,
                'user_info', ( -- Nested leader object
                    SELECT jsonb_build_object('id', ui_leader.id, 'name', ui_leader.name, 'surname', ui_leader.surname)
                    FROM public.user_info ui_leader
                    WHERE ui_leader.id = ugi.leader
                ),
                'places', ( -- Nested place object
                    SELECT jsonb_strip_nulls(jsonb_build_object(
                        'id', p.id,
                        'title', p.title,
                        'description', p.description,
                        'type', p.type,
                        'created_at', p.created_at,
                        'coordinates', p.coordinates,
                        'is_hidden', p.is_hidden,
                        'updated_at', p.updated_at,
                        'occasion', p.occasion,
                        'order', p."order",
                        'icon', p.icon,
                        'unit', p.unit
                    ))
                    FROM public.places p
                    WHERE p.id = ugi.place
                ),
                'user_groups', ( -- Nested array of participants
                    SELECT COALESCE(jsonb_agg(
                        jsonb_build_object(
                            'user_info', jsonb_build_object('id', p_ui.id, 'name', p_ui.name, 'surname', p_ui.surname)
                        )
                    ), '[]'::jsonb)
                    FROM public.user_groups ug
                    JOIN public.user_info p_ui ON ug."user" = p_ui.id
                    WHERE ug."group" = ugi.id
                )
            )
        ), '[]'::jsonb)
    INTO groups_json
    FROM public.user_group_info ugi
    WHERE ugi.occasion = p_occasion_id
      AND (p_type IS NULL AND ugi.type IS NULL OR ugi.type = p_type);

    -- If the requested type is 'game', also fetch the game definitions (checkpoints).
    IF p_type = 'game' THEN
        SELECT jsonb_object_agg(info.id, info.title)
        INTO game_defs_json
        FROM public.information info
        WHERE info.type = 'game' AND info.occasion = p_occasion_id;
    END IF;

    -- Combine the results into a single data object.
    result_data := jsonb_build_object(
        'groups', groups_json,
        'game_definitions', game_defs_json
    );

    -- Return the data in a structured response on success.
    RETURN jsonb_build_object('code', 200, 'data', result_data);

EXCEPTION WHEN OTHERS THEN
    -- Catch any unexpected errors during execution.
    RETURN jsonb_build_object('code', 500, 'message', SQLERRM);
END;
$$;