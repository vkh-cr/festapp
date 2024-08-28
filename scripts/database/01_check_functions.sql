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

CREATE OR REPLACE FUNCTION get_current_organization_data(oc bigint) RETURNS jsonb
LANGUAGE plpgsql STABLE
SECURITY DEFINER
AS $$
DECLARE
    organization_id bigint;
    org_data jsonb;
BEGIN
    -- Retrieve the organization ID associated with the given occasion
    SELECT organization INTO organization_id
    FROM occasions
    WHERE id = oc;

    -- Retrieve the organization data as jsonb
    SELECT jsonb_build_object(
        'id', id,
        'title', title,
        'data', data
    ) INTO org_data
    FROM organizations
    WHERE id = organization_id;

    -- Return the organization data as jsonb
    RETURN org_data;
END;
$$;
