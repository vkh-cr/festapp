CREATE OR REPLACE FUNCTION seed_org_with_admin(
    admin_email text,
    admin_password text
)
RETURNS TABLE (
    org_id bigint,
    unit_id bigint,
    admin_uid uuid
)
LANGUAGE plpgsql
AS $$
BEGIN
    ----------------------------------------------------------------
    -- 1. Create Organization with registration enabled
    ----------------------------------------------------------------
    INSERT INTO public.organizations (title, data)
    VALUES (
        'Seed Organization',
        '{"IS_REGISTRATION_ENABLED": "true"}'::jsonb
    )
    RETURNING id INTO org_id;

    ----------------------------------------------------------------
    -- 2. Create a Unit in the Organization
    ----------------------------------------------------------------
    INSERT INTO public.units (title, organization, data)
    VALUES (
        'Seed Unit',
        org_id,
        '{}'::jsonb
    )
    RETURNING id INTO unit_id;

    ----------------------------------------------------------------
    -- 3. Create the Admin User using your provided function
    ----------------------------------------------------------------
    admin_uid := create_user_in_organization_with_data(
        org_id,
        admin_email,
        admin_password,
        '{"name": "Admin", "surname": "User", "sex": "male"}'::jsonb
    );

    ----------------------------------------------------------------
    -- 4. Grant Admin Rights on Organization and Unit levels
    ----------------------------------------------------------------
    INSERT INTO public.organization_users ("user", organization, is_admin)
    VALUES (admin_uid, org_id, true);

    INSERT INTO public.unit_users (unit, "user", is_manager, is_editor, is_editor_view)
    VALUES (unit_id, admin_uid, true, true, true);

    RETURN;
END;
$$;
