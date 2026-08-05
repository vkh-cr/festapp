CREATE OR REPLACE FUNCTION public.get_occasion_users_for_edit(
    p_occasion_id BIGINT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    users_data JSON;
    forms_data JSON;
    services_data JSONB;
    org_id BIGINT;
BEGIN
    -- 0. Retrieve the Organization ID
    -- We need this to check against the organization_users table later
    SELECT organization INTO org_id
    FROM public.occasions
    WHERE id = p_occasion_id;

    -- Authorization check: Ensure the user has editor rights for the occasion.
    IF (SELECT get_is_editor_view_on_occasion(p_occasion_id)) <> TRUE AND (SELECT get_is_editor_order_view_on_occasion(p_occasion_id)) <> TRUE THEN
        RETURN json_build_object('code', 403, 'message', 'User is not authorized to view this occasion''s data');
    END IF;

    -- 1. Get all users associated with the occasion. Resolve order and group
    -- metadata once for the whole occasion instead of running correlated
    -- subqueries for every user.
    WITH visible_users AS MATERIALIZED (
        SELECT ou.*
        FROM public.occasion_users ou
        LEFT JOIN public.organization_users org_u
          ON org_u."user" = ou."user"
         AND org_u.organization = org_id
        WHERE ou.occasion = p_occasion_id
          AND org_u.is_hidden IS NOT TRUE
    ),
    order_info AS (
        SELECT DISTINCT ON (opt.ticket)
            opt.ticket,
            o.data->>'form' AS form_id,
            o.created_at
        FROM visible_users vu
        JOIN eshop.order_product_ticket opt ON opt.ticket = vu.ticket
        JOIN eshop.orders o ON o.id = opt."order"
        ORDER BY opt.ticket, opt.id
    ),
    standard_groups AS (
        SELECT
            ug."user",
            string_agg(ugi.title, ', ' ORDER BY ugi.title) AS titles
        FROM visible_users vu
        JOIN public.user_groups ug ON ug."user" = vu."user"
        JOIN public.user_group_info ugi ON ugi.id = ug."group"
        WHERE ugi.occasion = p_occasion_id
          AND ugi.type IS NULL
        GROUP BY ug."user"
    ),
    companion_owners AS (
        SELECT uc.companion, uc."user" AS owner_id, uc.origin,
               concat_ws(' ', owner_info.name, owner_info.surname) AS owner_name
        FROM public.user_companions uc
        JOIN public.user_info owner_info ON owner_info.id = uc."user"
        WHERE uc.occasion = p_occasion_id
    )
    SELECT json_agg(row_to_json(user_row))
    INTO users_data
    FROM (
        SELECT
            vu.occasion,
            vu.created_at,
            vu."user",
            vu.is_editor,
            vu.is_manager,
            vu.is_approved,
            vu.is_approver,
            -- Occasion data remains authoritative for event-specific fields.
            -- Overlay only the dedicated global profile columns; user_info.data
            -- also contains historical occasion fields and must not leak across
            -- events. A LEFT JOIN preserves legacy occasion rows without a
            -- matching user_info record.
            COALESCE(vu.data, '{}'::jsonb) || jsonb_strip_nulls(jsonb_build_object(
                'email', ui.email_readonly,
                'name', ui.name,
                'surname', ui.surname,
                'sex', ui.sex,
                'phone', COALESCE(ui.phone, ui.data->>'phone'),
                'birthDate', COALESCE(
                    to_char(ui.birth_date, 'YYYY-MM-DD'),
                    ui.data->>'birthDate'
                )
            )) AS data,
            vu.role,
            vu.services,
            vu.is_editor_view,
            vu.is_editor_order,
            vu.is_editor_order_view,
            vu.is_cleaning_crew,
            vu.is_cleaning_blocked,
            vu.ticket,
            order_info.form_id,
            order_info.created_at AS order_created_at,
            au.last_sign_in_at,
            standard_groups.titles AS group_title,
            companion_owners.owner_id AS companion_owner_id,
            companion_owners.owner_name AS companion_owner_name,
            companion_owners.origin AS companion_origin
        FROM visible_users vu
        LEFT JOIN public.user_info ui ON ui.id = vu."user"
        LEFT JOIN auth.users au ON au.id = vu."user"
        LEFT JOIN order_info ON order_info.ticket = vu.ticket
        LEFT JOIN standard_groups ON standard_groups."user" = vu."user"
        LEFT JOIN companion_owners ON companion_owners.companion = vu."user"
    ) user_row;

    -- 2. Get all forms associated with the occasion, selecting only the specified fields.
    SELECT json_agg(
        json_build_object(
            'key', f.key,
            'type', f.type,
            'id', f.id,
            'title', f.title,
            'link', f.link
        )
    )
    INTO forms_data
    FROM public.forms f
    WHERE f.occasion = p_occasion_id;

    -- 3. Return the service catalog in the same RPC response. Both the Users
    -- and Stay tabs need these options to render editable accommodation/food
    -- columns; keeping them here avoids extra requests and PostgREST's 1000-row
    -- cap on direct occasion_users queries.
    SELECT catalog.services || jsonb_build_object(
        'accommodation',
        COALESCE((
            SELECT jsonb_agg(
                service_item.item || jsonb_build_object('place_title', p.title)
                ORDER BY service_item.position
            )
            FROM jsonb_array_elements(
                CASE
                    WHEN jsonb_typeof(catalog.services->'accommodation') = 'array'
                        THEN catalog.services->'accommodation'
                    ELSE '[]'::jsonb
                END
            ) WITH ORDINALITY AS service_item(item, position)
            LEFT JOIN public.places p
              ON p.id = CASE
                  WHEN service_item.item->>'reference' ~ '^[0-9]+$'
                      THEN (service_item.item->>'reference')::bigint
                  ELSE NULL
              END
             AND p.occasion = p_occasion_id
        ), '[]'::jsonb)
    )
    INTO services_data
    FROM (
        SELECT CASE
            WHEN jsonb_typeof(o.services) = 'object' THEN o.services
            ELSE '{}'::jsonb
        END AS services
        FROM public.occasions o
        WHERE o.id = p_occasion_id
    ) catalog;

    -- Assemble the final JSON object without reparsing the complete roster as
    -- JSONB. Both the Users and Stay tabs consume this same bundle.
    RETURN json_build_object(
        'code', 200,
        'message', 'Occasion users and forms retrieved successfully.',
        'data', json_build_object(
            'occasion_users', COALESCE(users_data, '[]'::json),
            'forms',          COALESCE(forms_data, '[]'::json),
            'services',       COALESCE(services_data, '{}'::jsonb)
        )
    );
END;
$$;
