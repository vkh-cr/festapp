CREATE OR REPLACE FUNCTION update_unit(p_unit_id bigint, p_title text, p_data jsonb) RETURNS void
    LANGUAGE plpgsql
    SECURITY DEFINER
SET search_path = public, extensions
    AS $$
BEGIN
    IF length(p_title) > 30 THEN
        RAISE EXCEPTION 'Unit title cannot exceed 30 characters';
    END IF;

    -- Check if the current user is a manager for the provided unit
    IF NOT get_is_manager_on_unit(p_unit_id) THEN
        RAISE EXCEPTION 'User is not a manager on this unit';
    END IF;

    -- Update the unit
    UPDATE units
    SET
        title = p_title,
        data = p_data
    WHERE id = p_unit_id;
END;
$$;
