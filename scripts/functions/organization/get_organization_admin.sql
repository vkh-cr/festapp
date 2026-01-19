CREATE OR REPLACE FUNCTION get_organization_admin(organization_id bigint)
RETURNS SETOF organizations
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Verify admin status
  IF EXISTS (
    SELECT 1
    FROM organization_users
    WHERE "user" = auth.uid()
      AND organization = organization_id
      AND is_admin = true
  ) THEN
    -- Return the organization record
    RETURN QUERY SELECT * FROM organizations WHERE id = organization_id;
  ELSE
    -- Raise distinct exception or return nothing
    RAISE EXCEPTION 'Access Denied: User is not an admin of this organization.';
  END IF;
END;
$$;
