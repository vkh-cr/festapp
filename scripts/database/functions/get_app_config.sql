CREATE OR REPLACE FUNCTION get_app_config(data_in jsonb) RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    org_id bigint := (data_in->>'organization')::bigint;
    link_txt text := data_in->>'link';
    form_link text := data_in->>'form_link';
    platform_info jsonb := data_in->'platform';
    platform_name text := platform_info->>'platform';
    occasionId bigint;
    is_open_bool BOOLEAN;
    occasion_user occasion_users%rowtype;
    unit_user unit_users%rowtype;
    is_admin_bool BOOLEAN;
    occasion_link text;
    version_recommended text;
    occasion_unit bigint;
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
        SELECT forms.occasion, occasions.link INTO occasionId, occasion_link
        FROM forms
        JOIN occasions ON forms.occasion = occasions.id
        WHERE forms.link = form_link
          AND occasions.organization = org_id
          AND occasions.is_hidden = false;

        -- If no occasion is found, return a 404 response
        IF occasionId IS NULL THEN
            RETURN json_build_object('code', 404, 'message', 'No occasion found for the provided form link');
        END IF;

    -- If no form_link but link_txt is provided
    ELSIF link_txt IS NOT NULL AND link_txt <> '' THEN
        -- Get the occasion ID and link for the provided link within the specified organization
        SELECT id, link INTO occasionId, occasion_link
        FROM occasions
        WHERE link = link_txt
          AND is_hidden = false
          AND organization = org_id;

        -- If the occasion ID is not found, return a 404 response
        IF occasionId IS NULL THEN
            RETURN json_build_object('code', 404, 'message', 'Occasion not found');
        END IF;

    -- If no link or form_link is provided
    ELSE
        -- Get the default occasion from the organization
        SELECT (data->>'DEFAULT_OCCASION')::bigint INTO occasionId
        FROM organizations
        WHERE id = org_id;

        -- If no default occasion is set, get the first open and non-hidden occasion within the organization
        IF occasionId IS NULL THEN
            SELECT id, link INTO occasionId, occasion_link
            FROM occasions
            WHERE is_open = true
              AND is_hidden = false
              AND organization = org_id
            LIMIT 1;

            -- If no open occasion is found, return a 404 response
            IF occasionId IS NULL THEN
                RETURN json_build_object('code', 404, 'message', 'No open occasion found for the organization');
            END IF;
        ELSE
            -- Get the link for the default occasion
            SELECT link INTO occasion_link
            FROM occasions
            WHERE id = occasionId AND organization = org_id;
        END IF;
    END IF;

    -- Retrieve version_recommended for the specific platform, or leave as NULL if not found
    SELECT (SELECT item->>'prompt'
            FROM jsonb_array_elements(data->'PLATFORMS') AS item
            WHERE item->>'platform' = platform_name) INTO version_recommended
    FROM organizations
    WHERE id = org_id;

    -- Get the is_open status for the occasion
    SELECT is_open INTO is_open_bool
    FROM occasions
    WHERE id = occasionId;

    -- Get the occasion user record if it exists
    SELECT * INTO occasion_user
    FROM occasion_users
    WHERE occasion = occasionId
      AND "user" = auth.uid();

    -- Retrieve the unit ID from the occasions table
    SELECT unit INTO occasion_unit
    FROM occasions
    WHERE id = occasionId;

    -- Get the unit user record if it exists
    SELECT * INTO unit_user
    FROM unit_users
    WHERE unit = occasion_unit
      AND "user" = auth.uid();

    -- Check if the current user is an admin on the occasion
    is_admin_bool := get_is_admin_on_occasion(occasionId);

    -- If the occasion is not open, enforce access restrictions
    IF is_open_bool = FALSE THEN
        IF auth.uid() IS NULL OR (occasion_user IS NULL AND NOT is_admin_bool) THEN
            RETURN json_build_object(
                'code', 403,
                'message', 'Access forbidden',
                'link', occasion_link,
                'version_recommended', version_recommended
            );
        END IF;
    END IF;

    -- If the occasion user record is not found, the user is authenticated, and the occasion is open
    IF occasion_user IS NULL AND auth.uid() IS NOT NULL THEN
        -- Add the user to the occasion
        PERFORM add_user_to_occasion(occasionId, auth.uid());

        -- Fetch the updated occasion user record
        SELECT * INTO occasion_user
        FROM occasion_users
        WHERE occasion = occasionId
          AND "user" = auth.uid();
    END IF;

    -- Retrieve unit_user again in case the user was added to the occasion and now belongs to a unit
    IF unit_user IS NULL AND occasion_unit IS NOT NULL AND auth.uid() IS NOT NULL THEN
        SELECT * INTO unit_user
        FROM unit_users
        WHERE unit = occasion_unit
          AND "user" = auth.uid();
    END IF;

    -- Return final response with all data and status code 200 at the end
    RETURN json_build_object(
        'code', 200,
        'is_admin', is_admin_bool,
        'occasion_user', COALESCE(row_to_json(occasion_user)::jsonb, NULL),
        'unit_user', COALESCE(row_to_json(unit_user)::jsonb, NULL),
        'link', occasion_link,
        'occasion', occasionId,
        'version_recommended', version_recommended
    );
END;
$$;
