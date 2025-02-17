CREATE OR REPLACE FUNCTION groups_get_user_groups()
RETURNS JSONB AS $$
DECLARE
    user_id UUID := auth.uid();  -- Retrieve the user ID from the authentication context
    user_groups JSONB := '[]'::JSONB;  -- Initialize an empty JSON array
BEGIN
    -- Step 1: Query groups where the user is the leader in `user_group_info`
    user_groups := (
        SELECT COALESCE(jsonb_agg(
            jsonb_build_object(
                'id', ug.id,
                'title', ug.title,
                'type', ug.type,
                'leader', ug.leader,
                'place', ug.place,
                'description', ug.description,
                'occasion', ug.occasion,
                'data', ug.data
            )
        ), '[]'::JSONB)
        FROM user_group_info ug
        WHERE ug.leader = user_id
    );

    -- Step 2: Query groups where the user is a member in `user_groups` but not the leader
    user_groups := user_groups || (
        SELECT COALESCE(jsonb_agg(
            jsonb_build_object(
                'id', ug_info.id,
                'title', ug_info.title,
                'type', ug_info.type,
                'leader', ug_info.leader,
                'place', ug_info.place,
                'description', ug_info.description,
                'occasion', ug_info.occasion,
                'data', ug_info.data
            )
        ), '[]'::JSONB)
        FROM user_groups ug
        JOIN user_group_info ug_info ON ug."group" = ug_info.id
        WHERE ug.user = user_id AND ug_info.leader IS DISTINCT FROM user_id
    );

    -- Return code 200 with the combined array of user groups
    RETURN jsonb_build_object('code', 200, 'data', user_groups);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
