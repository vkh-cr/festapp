CREATE OR REPLACE FUNCTION public.check_is_editor_order_on_occasion(oc bigint)
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
    IF (SELECT get_is_editor_order_on_occasion(oc)) <> TRUE THEN
        RAISE EXCEPTION 'User is not editor.';
    END IF;
END;
$$;