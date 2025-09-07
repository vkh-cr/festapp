CREATE OR REPLACE FUNCTION get_app_config_v182(data_in jsonb)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    org_id bigint := (data_in->>'organization')::bigint;
    link_txt text := data_in->>'link';
    form_link text := data_in->>'form_link';
    unit_id bigint := (data_in->>'unit_id')::bigint;
    platform_info jsonb := data_in->'platform';
    platform_name text := platform_info->>'platform';
    occasionId bigint;
    default_unit bigint;
    is_open_bool BOOLEAN;
    occasion_user occasion_users%rowtype;
    unit_user unit_users%rowtype;
    is_admin_bool BOOLEAN;
    occasion_link text;
    version_recommended text;
    version_link text;
    occasion_unit bigint;
    bank_account_ids bigint[];
    occasion_json jsonb;
    unit_json jsonb;
    user_info_json jsonb;
    org_json jsonb;
    user_groups_json jsonb;
    is_editor_view_on_occasion_bool BOOLEAN;
    user_occasions_json jsonb;
    current_user_id UUID := auth.uid();
BEGIN
    -- Log the request details in log_app_config table
    INSERT INTO public.log_app_config (organization, platform)
    VALUES (org_id, platform_info);

    -- Map "pwa" to "web" for platform consistency
    IF platform_name = 'pwa' THEN
        platform_name := 'web';
    END IF;

    -- If form_link is provided, fetch the occasion from forms
    IF form_link IS NOT NULL AND form_link <> '' THEN
        SELECT forms.occasion, occasions.link
          INTO occasionId, occasion_link
        FROM forms
        JOIN occasions ON forms.occasion = occasions.id
        WHERE forms.link = form_link
          AND occasions.organization = org_id;

        -- If no occasion is found, return a 404 response
        IF occasionId IS NULL THEN
            RETURN json_build_object(
                'code', 404,
                'message', 'No occasion found for the provided form link'
            );
        END IF;

    -- If no form_link but link_txt is provided
    ELSIF link_txt IS NOT NULL AND link_txt <> '' THEN
        SELECT id, link
          INTO occasionId, occasion_link
        FROM occasions
        WHERE link = link_txt
          AND organization = org_id;

        IF occasionId IS NULL THEN
            RETURN json_build_object(
                'code', 404,
                'message', 'Occasion not found'
            );
        END IF;

    -- New: If a unit_id is provided directly (and no links), prioritize it and do not load an occasion.
    ELSIF unit_id IS NOT NULL THEN
        occasionId := NULL; -- Ensure no occasion is loaded, even if a default is set for the org.
        default_unit := unit_id; -- Use the provided unit_id as the context.

        -- Fetch unit details from the provided unit_id
        SELECT json_build_object('id', u.id, 'title', u.title)
            INTO unit_json
        FROM units u
        WHERE u.id = default_unit;

        -- Fetch the user's relationship with this unit
        SELECT *
            INTO unit_user
        FROM unit_users
        WHERE unit = default_unit
            AND "user" = current_user_id;

    ELSE
        -- No link or specific unit_id provided: first try to get the representative or default occasion
        SELECT COALESCE(
                 (data->>'REPRESENTATIVE_OCCASION')::bigint,
                 (data->>'DEFAULT_OCCASION')::bigint
               )
          INTO occasionId
        FROM organizations
        WHERE id = org_id;

        IF occasionId IS NULL THEN
            -- No default occasion; try to get the default unit instead
            SELECT (data->>'DEFAULT_UNIT')::bigint
              INTO default_unit
            FROM organizations
            WHERE id = org_id;

            IF default_unit IS NOT NULL THEN
                -- Default unit exists so we leave occasion unset
                occasionId := NULL;
                -- Fetch unit details from the default unit
                SELECT json_build_object('id', u.id, 'title', u.title)
                  INTO unit_json
                FROM units u
                WHERE u.id = default_unit;

                SELECT *
                  INTO unit_user
                FROM unit_users
                WHERE unit = default_unit
                  AND "user" = current_user_id;
            ELSE
                -- Neither default occasion nor default unit exists; search for first open, non-hidden occasion
                SELECT id, link
                  INTO occasionId, occasion_link
                FROM occasions
                WHERE is_open = true
                  AND organization = org_id
                LIMIT 1;

                IF occasionId IS NULL THEN
                    RETURN json_build_object(
                        'code', 404,
                        'message', 'No open occasion found for the organization'
                    );
                END IF;
            END IF;
        ELSE
            -- Default occasion exists; fetch its link
            SELECT link
              INTO occasion_link
            FROM occasions
            WHERE id = occasionId AND organization = org_id;
        END IF;
    END IF;

    -- Retrieve version_recommended and version_link for the specific platform, or leave as NULL if not found
    SELECT
        item->>'prompt',
        item->>'link'
    INTO
        version_recommended,
        version_link
    FROM
        public.organizations,
        jsonb_array_elements(data->'PLATFORMS') AS item
    WHERE
        id = org_id AND item->>'platform' = platform_name
    LIMIT 1;

    IF occasionId IS NOT NULL THEN
        -- Process occasion-related queries only if an occasion was determined

        -- Get the is_open status for the occasion
        SELECT is_open
          INTO is_open_bool
        FROM occasions
        WHERE id = occasionId;

        -- Get the occasion user record if it exists
        SELECT *
          INTO occasion_user
        FROM occasion_users
        WHERE occasion = occasionId
          AND "user" = current_user_id;

        -- Retrieve the unit ID from the occasion
        SELECT unit
          INTO occasion_unit
        FROM occasions
        WHERE id = occasionId;

        -- Get the unit user record if it exists
        SELECT *
          INTO unit_user
        FROM unit_users
        WHERE unit = occasion_unit
          AND "user" = current_user_id;

        -- Check if the current user is an admin on the occasion
        is_admin_bool := get_is_admin_on_occasion(occasionId);

        -- Check if the current user has editor_view permissions on the occasion
        is_editor_view_on_occasion_bool := get_is_editor_view_on_occasion(occasionId);

        -- If the occasion is not open, enforce access restrictions
        IF is_open_bool = FALSE THEN
            IF is_editor_view_on_occasion_bool <> TRUE
               AND (SELECT get_is_editor_order_view_on_occasion(occasionId)) <> TRUE
               AND (SELECT get_is_editor_on_unit(occasion_unit)) <> TRUE THEN
                RETURN json_build_object(
                    'code', 403,
                    'message', 'Access forbidden',
                    'link', occasion_link,
                    'version_recommended', version_recommended,
                    'version_link', version_link,
                    'unit_user', COALESCE(row_to_json(unit_user)::jsonb, NULL)
                );
            END IF;
        END IF;

        -- If the occasion user record is not found and the user is authenticated, add the user to the occasion
        IF occasion_user IS NULL AND current_user_id IS NOT NULL THEN
            PERFORM add_user_to_occasion(occasionId, current_user_id);

            SELECT *
              INTO occasion_user
            FROM occasion_users
            WHERE occasion = occasionId
              AND "user" = current_user_id;
        END IF;
    ELSE
        -- If no occasion is set (because a default or specific unit was used), use the unit as the context
        occasion_unit := default_unit;
        -- Here we assume no occasion means no occasion-based admin check
        is_admin_bool := false;
    END IF;

    -- Retrieve unit_user again in case the user was added and now belongs to the unit
    IF unit_user IS NULL AND occasion_unit IS NOT NULL AND current_user_id IS NOT NULL THEN
        SELECT *
          INTO unit_user
        FROM unit_users
        WHERE unit = occasion_unit
          AND "user" = current_user_id;
    END IF;

    -- Fetch list of bank account IDs where the user is an admin
    SELECT array_agg(bank_account)
      INTO bank_account_ids
    FROM eshop.bank_account_users
    WHERE "user" = current_user_id
      AND is_admin = true;

    -- Fetch full occasion details as a JSON object if an occasion is set
    IF occasionId IS NOT NULL THEN
        SELECT row_to_json(o)
          INTO occasion_json
        FROM occasions o
        WHERE o.id = occasionId;
    ELSE
        occasion_json := '{}'::jsonb;
    END IF;

    -- Fetch full unit details as a JSON object
    IF occasion_unit IS NOT NULL THEN
        SELECT json_build_object('id', u.id, 'title', u.title)
          INTO unit_json
        FROM units u
        WHERE u.id = occasion_unit;
    ELSE
        unit_json := '{}'::jsonb;
    END IF;

    -- Fetch occasions for the user based on the specified logic
    IF occasion_unit IS NOT NULL AND current_user_id IS NOT NULL THEN
        IF is_editor_view_on_occasion_bool THEN
            -- If user is an editor, get all occasions for the unit
            SELECT json_agg(json_build_object('id', o.id, 'title', o.title, 'link', o.link, 'start_time', o.start_time, 'end_time', o.end_time))
            INTO user_occasions_json
            FROM public.occasions o
            WHERE o.unit = occasion_unit;
        ELSE
            -- Otherwise, get only occasions the user is explicitly on for that unit
            SELECT json_agg(json_build_object('id', o.id, 'title', o.title, 'link', o.link, 'start_time', o.start_time, 'end_time', o.end_time))
            INTO user_occasions_json
            FROM public.occasions o
            JOIN public.occasion_users ou ON ou.occasion = o.id
            WHERE ou."user" = current_user_id
            AND o.unit = occasion_unit;
        END IF;
    END IF;

    -- Fetch user information along with associated units and occasions
    SELECT row_to_json(ui)::jsonb || jsonb_build_object(
            'units',
            (
                SELECT json_agg(jsonb_build_object('id', u.id, 'title', u.title))
                FROM public.units u
                JOIN public.unit_users uu ON uu.unit = u.id
                WHERE uu."user" = ui.id AND uu.is_editor_view = TRUE
            ),
            'occasions', user_occasions_json
          )
      INTO user_info_json
    FROM public.user_info ui
    WHERE ui.id = current_user_id;

    -- Fetch limited organization info
    SELECT json_build_object(
        'title', title,
        'APP_NAME', data->>'APP_NAME',
        'PLATFORMS', data->'PLATFORMS',
        'IS_REGISTRATION_ENABLED', data->'IS_REGISTRATION_ENABLED'
    ) INTO org_json
    FROM public.organizations
    WHERE id = org_id;

    -- Fetch the user's groups for the specific occasion
    IF occasionId IS NOT NULL THEN
        user_groups_json := public.get_user_groups(occasionId);
    END IF;

    RETURN json_build_object(
        'code', 200,
        'is_admin', is_admin_bool,
        'occasion_user', COALESCE(row_to_json(occasion_user)::jsonb, NULL),
        'unit_user', COALESCE(row_to_json(unit_user)::jsonb, NULL),
        'occasion', COALESCE(occasion_json, '{}'::jsonb),
        'unit', COALESCE(unit_json, '{}'::jsonb),
        'version_recommended', version_recommended,
        'version_link', version_link,
        'bank_accounts_admin', COALESCE(bank_account_ids, '{}'),
        'user_info', COALESCE(user_info_json, '{}'::jsonb),
        'organization', COALESCE(org_json::jsonb, '{}'::jsonb),
        'groups', COALESCE(user_groups_json, '{}'::jsonb)
    );
END;
$$;