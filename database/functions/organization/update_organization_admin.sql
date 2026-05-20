CREATE OR REPLACE FUNCTION update_organization_admin(
  organization_id bigint,
  title text,
  data jsonb
)
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
    -- Update the organization record
    RETURN QUERY
    UPDATE organizations
    SET 
      title = COALESCE(update_organization_admin.title, organizations.title),
      data = organizations.data || update_organization_admin.data
    WHERE id = organization_id
    RETURNING *;
  ELSE
    RAISE EXCEPTION 'Access Denied: User is not an admin of this organization.';
  END IF;
END;
$$;
