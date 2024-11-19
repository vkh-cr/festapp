CREATE OR REPLACE FUNCTION get_app_config(data_in jsonb) RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    org_id bigint := (data_in->>'organization')::bigint;
    link_txt text := data_in->>'link';
    platform_info jsonb := data_in->'platform';
    platform_name text := platform_info->>'platform';
    occasionId bigint;
    is_open_bool BOOLEAN;
    occasion_user occasion_users%rowtype;
    is_admin_bool BOOLEAN;
    occasion_link text;
    version_recommended text;
BEGIN
    -- Log the request details in log_app_config table
    INSERT INTO public.log_app_config (organization, platform)
    VALUES (org_id, platform_info);

    -- Map "pwa" to "web" for platform consistency
    IF platform_name = 'pwa' THEN
        platform_name := 'web';
    END IF;

    -- If no link is provided, get the default occasion from the organization
    IF link_txt IS NULL OR link_txt = '' THEN
        SELECT data->>'DEFAULT_OCCASION' INTO occasionId
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
    ELSE
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

    -- Check if the current user is an admin on the occasion
    is_admin_bool := get_is_admin_on_occasion(occasionId);

    -- If the occasion is not open, enforce access restrictions
    IF is_open_bool = FALSE THEN
        IF auth.uid() IS NULL OR (occasion_user IS NULL AND NOT is_admin_bool) THEN
            RETURN json_build_object('code', 403, 'message', 'Access forbidden', 'link', occasion_link, 'version_recommended', version_recommended);
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

    -- Return final response with all data and status code 200 at the end
    RETURN json_build_object(
        'code', 200,
        'is_admin', is_admin_bool,
        'occasion_user', COALESCE(row_to_json(occasion_user)::jsonb, NULL),
        'link', occasion_link,
        'occasion', occasionId,
        'version_recommended', version_recommended
    );
END;
$$;
