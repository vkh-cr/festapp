CREATE OR REPLACE FUNCTION get_available_platforms(organization_id bigint)
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
AS $$
    SELECT data -> 'PLATFORMS'
    FROM public.organizations
    WHERE id = organization_id;
$$;