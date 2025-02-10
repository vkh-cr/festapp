CREATE OR REPLACE FUNCTION get_unit_for_edit(unit_id bigint) RETURNS jsonb
LANGUAGE plpgsql STABLE
SECURITY DEFINER
AS $$
DECLARE
    unit_data jsonb;
BEGIN
    -- Check if the current user is authorized (editor or manager) for the provided unit
    IF NOT EXISTS (
        SELECT 1
        FROM unit_users
        WHERE "user" = auth.uid()
          AND unit = unit_id
          AND (is_editor = true OR is_manager = true OR is_editor_view = true)
    ) THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    -- Retrieve the unit data as jsonb
    SELECT jsonb_build_object(
        'id', id,
        'title', title,
        'data', data,
        'organization', organization
    ) INTO unit_data
    FROM units
    WHERE id = unit_id;

    -- Return the unit data with a 200 code
    RETURN jsonb_build_object('code', 200, 'data', unit_data);
END;
$$;
