--DROP FUNCTION get_is_event_allowed
CREATE OR REPLACE FUNCTION get_is_event_allowed(ev bigint) RETURNS bool
    LANGUAGE "plpgsql" STABLE
    SECURITY DEFINER
    AS $$
    DECLARE
        userRole bigint;
        eventRoles bigint[];
    BEGIN
        eventRoles := ARRAY(select
          role
          from
            event_roles
          where
            event_roles.event = ev);

        IF coalesce(cardinality(eventRoles), 0) = 0 THEN
            RETURN true;
        END IF;

        select
          role
        into userRole
        from
          occasion_users
        where
          "user" = auth.uid() and
          occasion = (select occasion from events where events.id = ev);

        IF userRole IS NULL THEN
            RETURN false;
        END IF;
        RETURN (SELECT userRole = ANY(eventRoles));
    END;
$$;

CREATE OR REPLACE FUNCTION check_occasion_link(link_txt text) RETURNS jsonb
LANGUAGE plpgsql STABLE
SECURITY DEFINER
AS $$
DECLARE
    occasionId bigint;
    is_open_bool BOOLEAN;
    occasion_user occasion_users%rowtype;
    is_admin_bool BOOLEAN;
BEGIN
    -- If no link is provided, get the first open and non-hidden occasion's link
    IF link_txt = '' THEN
        SELECT link INTO link_txt FROM occasions WHERE occasions.is_open = true AND occasions.is_hidden = false LIMIT 1;
    END IF;

    -- Get the occasion ID for the provided link
    SELECT id INTO occasionId FROM occasions WHERE occasions.link = link_txt AND occasions.is_hidden = false;

    -- If the occasion ID is not found, return a 404 response
    IF occasionId IS NULL THEN
        RETURN json_build_object('code', 404);
    END IF;

    -- Get the is_open status for the occasion
    SELECT is_open INTO is_open_bool FROM occasions WHERE occasions.link = link_txt;

    -- Get the occasion user record if it exists
    SELECT * INTO occasion_user FROM occasion_users WHERE occasion = occasionId AND "user" = auth.uid();

    -- Check if the current user is an admin on the occasion
    is_admin_bool := get_is_admin_on_occasion(occasionId);

    -- If the occasion is not open, enforce access restrictions
    IF is_open_bool = FALSE THEN
        IF auth.uid() IS NULL THEN
            RETURN json_build_object('code', 403);
        END IF;
        IF occasion_user IS NULL AND NOT is_admin_bool THEN
            RETURN json_build_object('code', 403);
        END IF;
        RETURN json_build_object(
            'code', 200,
            'is_admin', is_admin_bool,
            'occasion_user', COALESCE(row_to_json(occasion_user)::jsonb, NULL),
            'occasion', occasionId
        );
    END IF;

    -- If the occasion user record is not found and the user is not an admin, return basic occasion data
    IF occasion_user IS NULL THEN
        RETURN json_build_object(
            'code', 200,
            'is_admin', is_admin_bool,
            'link', link_txt,
            'occasion', occasionId
        );
    END IF;

    -- Return full occasion data including the user and admin status
    RETURN json_build_object(
        'code', 200,
        'is_admin', is_admin_bool,
        'occasion_user', row_to_json(occasion_user)::jsonb,
        'link', link_txt,
        'occasion', occasionId
    );
END;
$$;

CREATE OR REPLACE FUNCTION get_occasion_from_link(org_id bigint, link_txt text) RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    occasionId bigint;
    is_open_bool BOOLEAN;
    occasion_user occasion_users%rowtype;
    is_admin_bool BOOLEAN;
    occasion_link text;
BEGIN
    -- If no link is provided, get the default occasion from the organization
    IF link_txt = '' THEN
        -- Get the default occasion ID from the organization's data
        SELECT data->>'default_occasion' INTO occasionId
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
            WHERE id = occasionId;
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
        IF auth.uid() IS NULL THEN
            RETURN json_build_object('code', 403, 'message', 'Access forbidden', 'link', occasion_link);
        END IF;
        IF occasion_user IS NULL AND NOT is_admin_bool THEN
            RETURN json_build_object('code', 403, 'message', 'Access forbidden', 'link', occasion_link);
        END IF;
        RETURN json_build_object(
            'code', 200,
            'is_admin', is_admin_bool,
            'occasion_user', COALESCE(row_to_json(occasion_user)::jsonb, NULL),
            'occasion', occasionId,
            'link', occasion_link
        );
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

    -- If the occasion user record is still not found and the user is not an admin, return basic occasion data
    IF occasion_user IS NULL THEN
        RETURN json_build_object(
            'code', 200,
            'is_admin', is_admin_bool,
            'link', occasion_link,
            'occasion', occasionId
        );
    END IF;

    -- Return full occasion data including the user and admin status
    RETURN json_build_object(
        'code', 200,
        'is_admin', is_admin_bool,
        'occasion_user', row_to_json(occasion_user)::jsonb,
        'link', occasion_link,
        'occasion', occasionId
    );
END;
$$;


CREATE OR REPLACE FUNCTION get_current_organization_data() RETURNS jsonb
LANGUAGE plpgsql STABLE
SECURITY DEFINER
AS $$
DECLARE
    organization_id bigint;
    org_data jsonb;
    organization_user record;
BEGIN
    -- Retrieve the organization ID associated with the current authenticated user
    SELECT organization INTO organization_id
    FROM organization_users
    WHERE "user" = auth.uid()
      AND is_admin = true
    LIMIT 1;

    -- If the user is not associated with any organization as an admin, return a 403 code
    IF organization_id IS NULL THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Retrieve the organization data as jsonb
    SELECT jsonb_build_object(
        'id', id,
        'title', title,
        'data', data
    ) INTO org_data
    FROM organizations
    WHERE id = organization_id;

    -- Return the organization data with a 200 code
    RETURN jsonb_build_object('code', 200, 'data', org_data);
END;
$$;
