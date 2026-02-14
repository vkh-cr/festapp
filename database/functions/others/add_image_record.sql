CREATE OR REPLACE FUNCTION public.add_image_record(p_link text, p_occasion_id bigint, p_unit_id bigint)
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql
SET search_path = public, extensions
AS $$
BEGIN
    -- Permission Check
    IF p_unit_id IS NOT NULL THEN
        -- Unit Editor
        IF (SELECT public.get_is_editor_on_unit(p_unit_id)) IS NOT TRUE THEN
            RAISE EXCEPTION 'Permission denied: User is not an editor of this unit.';
        END IF;
    ELSIF p_occasion_id IS NOT NULL THEN
        -- Occasion Editor OR Occasion Order Editor
        IF (public.get_is_editor_on_occasion(p_occasion_id)) IS NOT TRUE 
           AND (public.get_is_editor_order_on_occasion(p_occasion_id)) IS NOT TRUE THEN
             RAISE EXCEPTION 'Permission denied: User is not an editor/order-editor of this occasion.';
        END IF;
    ELSE
        RAISE EXCEPTION 'Entity ID (unit or occasion) must be provided.';
    END IF;

    -- Insert Record
    INSERT INTO public.images (link, occasion, unit)
    VALUES (p_link, p_occasion_id, p_unit_id);
END;
$$;
