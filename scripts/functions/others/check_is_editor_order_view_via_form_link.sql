CREATE OR REPLACE FUNCTION public.check_is_editor_order_view_via_form_link(form_link text)
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
    occasion_id bigint;
BEGIN
    -- Get occasion ID from form link
    SELECT f.occasion INTO occasion_id
    FROM public.forms f
    WHERE f.link = form_link;

    -- Check if order/occasion exists
    IF occasion_id IS NULL THEN
        RAISE EXCEPTION 'Form not found or no associated occasion.';
    END IF;

    -- Verify editor permissions using existing helper function
    IF NOT public.get_is_editor_order_view_on_occasion(occasion_id) THEN
        RAISE EXCEPTION 'User is not authorized to edit this occasion.';
    END IF;
END;
$$;