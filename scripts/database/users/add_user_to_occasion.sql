CREATE OR REPLACE FUNCTION add_user_to_occasion(oc BIGINT, usr UUID)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    occasion_open    BOOLEAN;
    user_data        JSONB;
    user_exists      BOOLEAN;
    user_org         BIGINT;
    occasion_org     BIGINT;
    unit_id          BIGINT;
    unit_is_manager  BOOLEAN := false;
    unit_is_editor   BOOLEAN := false;
BEGIN
    -- Retrieve the organization, the unit, and the open status of the occasion.
    SELECT organization, unit, is_open
      INTO occasion_org, unit_id, occasion_open
      FROM occasions
     WHERE id = oc;

    -- Get the organization of the user.
    SELECT organization
      INTO user_org
      FROM user_info
     WHERE id = usr;

    -- Ensure the user and the occasion belong to the same organization.
    IF user_org IS DISTINCT FROM occasion_org THEN
        RETURN jsonb_build_object(
                  'code', 403,
                  'message', 'User does not belong to the same organization as the occasion'
              );
    END IF;

    -- If the occasion is not open, allow only those with manager/admin permissions.
    IF NOT occasion_open THEN
        IF (SELECT get_is_manager_on_occasion(oc)) IS NOT TRUE
           AND (SELECT get_is_admin_on_occasion(oc)) IS NOT TRUE THEN
            RETURN jsonb_build_object('code', 403);
        END IF;
    END IF;

    -- Retrieve the unit-level role information from unit_users.
    SELECT is_manager, is_editor
      INTO unit_is_manager, unit_is_editor
      FROM unit_users
     WHERE unit = unit_id AND "user" = usr;
    IF NOT FOUND THEN
        unit_is_manager := false;
        unit_is_editor  := false;
    END IF;

    -- Retrieve the user info and build a JSON object merging any existing data.
    SELECT COALESCE(ui.data, '{}'::jsonb) || jsonb_build_object(
                'name', ui.name,
                'surname', ui.surname,
                'sex', ui.sex,
                'email', ui.email_readonly
           )
      INTO user_data
      FROM user_info ui
     WHERE ui.id = usr;

    -- Check if the user already exists in the occasion_users table.
    SELECT EXISTS (
             SELECT 1
               FROM occasion_users
              WHERE occasion = oc AND "user" = usr
           ) INTO user_exists;

    IF user_exists THEN
        -- Update the existing row with the new data and the unit role flags.
        UPDATE occasion_users
           SET data       = user_data,
               is_manager = unit_is_manager,
               is_editor  = unit_is_editor
         WHERE occasion = oc AND "user" = usr;
    ELSE
        -- Insert a new row into occasion_users, using the unit-level role flags.
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
            now(),
            unit_is_editor,
            unit_is_manager,
            FALSE,
            FALSE,
            user_data,
            NULL
        );
    END IF;

    RETURN jsonb_build_object('code', 200);
END;
$$;
