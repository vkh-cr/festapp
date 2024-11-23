CREATE OR REPLACE FUNCTION add_user_to_occasion(oc BIGINT, usr UUID)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    occasion_open BOOLEAN;
    user_data JSONB;
    user_exists BOOLEAN;
    user_org BIGINT;
    occasion_org BIGINT;
BEGIN
    -- Get the organization ID of the occasion
    SELECT organization INTO occasion_org
    FROM occasions
    WHERE id = oc;

    -- Get the organization ID of the user
    SELECT organization INTO user_org
    FROM user_info
    WHERE id = usr;

    -- Check if the user and occasion belong to the same organization
    IF user_org IS DISTINCT FROM occasion_org THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User does not belong to the same organization as the occasion');
    END IF;

    -- Check if the occasion is open
    SELECT is_open INTO occasion_open
    FROM occasions
    WHERE id = oc;

    -- If the occasion is not open, raise an exception
    IF NOT occasion_open THEN
        IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE AND (SELECT get_is_admin_on_occasion(oc)) <> TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    -- Retrieve user info and create JSON data, merging with existing data
    SELECT COALESCE(ui.data, '{}'::jsonb) || jsonb_build_object(
        'name', ui.name,
        'surname', ui.surname,
        'sex', ui.sex,
        'email', ui.email_readonly
    ) INTO user_data
    FROM user_info ui
    WHERE ui.id = usr;

    -- Check if the user already exists in the occasion_users table
    SELECT EXISTS (
                SELECT 1
                FROM occasion_users
                WHERE occasion = oc AND "user" = usr
            ) INTO user_exists;

    -- If the user already exists, update the existing row
    IF user_exists THEN
        UPDATE occasion_users
        SET
            data = user_data
        WHERE occasion = oc AND "user" = usr;
    ELSE
        -- Insert a new row into occasion_users
        INSERT INTO occasion_users (
            occasion,
            "user",
            created_at,
            is_editor,
            is_manager,
            is_approved,
            is_approver,
            data,
            role
        )
        VALUES (
            oc,
            usr,
            now(),  -- Set the created_at timestamp to the current time
            FALSE,  -- Default value for is_editor
            FALSE,  -- Default value for is_manager
            FALSE,  -- Default value for is_approved
            FALSE,  -- Default value for is_approver
            user_data, -- Combined user info as JSON data
            NULL   -- Default value for role (null)
        );
    END IF;

    -- Return success code
    RETURN jsonb_build_object('code', 200);
END;
$$;
