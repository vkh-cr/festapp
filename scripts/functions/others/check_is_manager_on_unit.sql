CREATE OR REPLACE FUNCTION public.check_is_manager_on_unit(unit_id bigint)
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
    IF (SELECT get_is_manager_on_unit(unit_id)) <> TRUE THEN
        RAISE EXCEPTION 'User is not manager.';
    END IF;
END;
$$;