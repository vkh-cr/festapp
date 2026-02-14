CREATE OR REPLACE FUNCTION create_user_from_registration(
    org bigint, 
    email text, 
    password text, 
    data jsonb,
    unit_title text DEFAULT 'Moje akce'
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    is_registration_enabled BOOLEAN;
    new_user_id uuid;
    v_new_unit_id bigint;
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

    -- Call the PURE function to create the user
    new_user_id := create_user_in_organization_with_data_pure(org, email, password, data);

    INSERT INTO public.units (title, organization, data)
    VALUES (
        unit_title, 
        org,
        jsonb_build_object(
            'reply_to', lower(trim(email)),
            'timezone', 'Europe/Prague'
        )
    )
    RETURNING id INTO v_new_unit_id;

    INSERT INTO public.unit_users (unit, "user", is_manager, is_editor, is_editor_view)
    VALUES (v_new_unit_id, new_user_id, true, true, true);

    RETURN jsonb_build_object('code', 200, 'id', new_user_id);
END;
$$;
