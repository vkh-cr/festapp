CREATE OR REPLACE FUNCTION get_events(
    p_occasion            BIGINT,
    p_include_description BOOLEAN
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    current_user_id   UUID;
    eventsData            JSONB;
    placesData            JSONB;
    eventGroupsData       JSONB;
    eventRolesData        JSONB;
    eventUsersData        JSONB;
    eventUsersSavedData   JSONB;
BEGIN
    -- grab current_user_id user after entering PL/pgSQL execution
    current_user_id := auth.uid();

    -- (a) all events, with per-user flags
    SELECT jsonb_agg(jsonb_build_object(
        'id',                   e.id,
        'created_at',           e.created_at,
        'title',                e.title,
        'start_time',           e.start_time,
        'end_time',             e.end_time,
        'max_participants',     e.max_participants,
        'type',                 e.type,
        'description',          CASE WHEN p_include_description THEN e.description ELSE NULL END,
        'place',                e.place,
        'split_for_men_women',  e.split_for_men_women,
        'is_group_event',       e.is_group_event,
        'updated_at',           e.updated_at,
        'is_hidden',            e.is_hidden,
        'occasion',             e.occasion,
        'isSignedIn',           (current_user_id IS NOT NULL
                                   AND EXISTS(
                                     SELECT 1
                                       FROM public.event_users eu
                                      WHERE eu.event = e.id
                                        AND eu."user" = current_user_id)),
        'isEventInMyProgram',   (current_user_id IS NOT NULL
                                   AND EXISTS(
                                     SELECT 1
                                       FROM public.event_users_saved eus
                                      WHERE eus.event = e.id
                                        AND eus."user" = current_user_id))
    ))
    INTO eventsData
    FROM public.events e
    WHERE e.occasion = p_occasion;

    -- (b) places
    SELECT jsonb_agg(jsonb_build_object(
        'id',           p.id,
        'title',        p.title,
        'description',  p.description,
        'type',         p.type,
        'created_at',   p.created_at,
        'coordinates',  p.coordinates,
        'is_hidden',    p.is_hidden,
        'updated_at',   p.updated_at,
        'occasion',     p.occasion
    ))
    INTO placesData
    FROM public.places p
    WHERE p.occasion = p_occasion;

    -- (c) event_groups
    SELECT jsonb_agg(jsonb_build_object(
        'event_parent', eg.event_parent,
        'event_child',  eg.event_child
    ))
    INTO eventGroupsData
    FROM public.event_groups eg
    JOIN public.events e
      ON eg.event_parent = e.id OR eg.event_child = e.id
    WHERE e.occasion = p_occasion;

    -- (d) event_roles
    SELECT jsonb_agg(jsonb_build_object(
        'event', er.event,
        'role',  er.role
    ))
    INTO eventRolesData
    FROM public.event_roles er
    JOIN public.events e ON er.event = e.id
    WHERE e.occasion = p_occasion;

    -- (e) signed-in counts via CTE
    WITH user_counts AS (
      SELECT eu.event AS event, COUNT(*) AS cnt
      FROM public.event_users eu
      JOIN public.events e ON eu.event = e.id
      WHERE e.occasion = p_occasion
      GROUP BY eu.event
    )
    SELECT jsonb_agg(jsonb_build_object(
      'event', uc.event,
      'count', uc.cnt
    ))
    INTO eventUsersData
    FROM user_counts uc;

    -- (f) saved-for-later counts via CTE
    WITH saved_counts AS (
      SELECT eus.event AS event, COUNT(*) AS cnt
      FROM public.event_users_saved eus
      JOIN public.events e ON eus.event = e.id
      WHERE e.occasion = p_occasion
      GROUP BY eus.event
    )
    SELECT jsonb_agg(jsonb_build_object(
      'event', sc.event,
      'count', sc.cnt
    ))
    INTO eventUsersSavedData
    FROM saved_counts sc;

    -- (g) final assembly
    RETURN jsonb_build_object(
      'code', 200,
      'data', jsonb_build_object(
        'events',            COALESCE(eventsData,          '[]'::jsonb),
        'places',            COALESCE(placesData,          '[]'::jsonb),
        'event_groups',      COALESCE(eventGroupsData,     '[]'::jsonb),
        'event_roles',       COALESCE(eventRolesData,      '[]'::jsonb),
        'event_users',       COALESCE(eventUsersData,      '[]'::jsonb),
        'event_users_saved', COALESCE(eventUsersSavedData, '[]'::jsonb)
      )
    );
END;
$$;
