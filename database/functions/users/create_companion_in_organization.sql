-- Released legacy adapter. Domain policy and account lifecycle are owned by
-- create_companion_in_organization_internal_v1 in the client-sync migration.
CREATE OR REPLACE FUNCTION public.create_companion_in_organization(
  oc bigint,
  c_name text
) RETURNS jsonb
LANGUAGE sql VOLATILE SECURITY DEFINER
SET search_path = public, extensions
AS $$
  SELECT public.create_companion_in_organization_internal_v1(
    o.organization,oc,auth.uid(),c_name)
  FROM public.occasions o
  WHERE o.id=oc;
$$;

REVOKE ALL ON FUNCTION public.create_companion_in_organization(bigint,text)
  FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.create_companion_in_organization(bigint,text)
  TO authenticated;
