CREATE OR REPLACE FUNCTION public.get_bank_account_users(
    p_bank_account_id bigint,
    p_unit_id bigint DEFAULT NULL
)
RETURNS TABLE (
    user_id uuid,
    email text,
    name text,
    surname text,
    is_admin boolean,
    is_support boolean
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_org_id bigint;
BEGIN
    -- If unit context is provided, find the organization
    IF p_unit_id IS NOT NULL THEN
        SELECT organization INTO v_org_id FROM public.units WHERE id = p_unit_id;
    END IF;

    RETURN QUERY
    SELECT
        u.id,
        u.email_readonly,
        u.name,
        u.surname,
        bau.is_admin,
        bau.is_support
    FROM eshop.bank_account_users bau
    JOIN public.user_info u ON bau."user" = u.id
    LEFT JOIN public.organization_users ou ON u.id = ou."user" AND (v_org_id IS NULL OR ou.organization = v_org_id)
    WHERE bau.bank_account = p_bank_account_id
      AND (v_org_id IS NULL OR ou.is_hidden IS NOT TRUE);
END;
$$;
