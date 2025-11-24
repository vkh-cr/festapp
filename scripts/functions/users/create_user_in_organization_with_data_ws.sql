CREATE OR REPLACE FUNCTION create_user_in_organization_with_data_ws(org bigint, email text, password text, data jsonb)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    is_registration_enabled BOOLEAN;
    new_user_id uuid;
BEGIN
    -- Retrieve IS_REGISTRATION_ENABLED value from organizations.data JSON
    SELECT (organizations.data->>'IS_REGISTRATION_ENABLED')::boolean
      INTO is_registration_enabled
    FROM organizations
    WHERE id = org;

    -- CHECK: If registration is enabled OR if the caller is a manager/editor
    IF NOT is_registration_enabled AND NOT (
           get_is_manager_on_any_occasion()
           OR EXISTS (
               SELECT 1
               FROM occasions o
               WHERE o.organization = org
                 AND get_is_editor_on_unit(o.unit)
           )
       ) THEN
        RETURN jsonb_build_object('code', 403, 'error', 'Registration is disabled for this organization');
    END IF;

    -- Call the PURE function
    new_user_id := create_user_in_organization_with_data_pure(org, email, password, data);

    -- Return success in JSON format
    RETURN jsonb_build_object('code', 200, 'id', new_user_id);
END;
$$;