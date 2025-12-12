CREATE OR REPLACE FUNCTION public.get_all_email_templates_via_occasion_link(occasion_link text)
RETURNS jsonb
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
    v_occasion_id bigint;
BEGIN
    -- Retrieve the occasion ID
    SELECT id INTO v_occasion_id
    FROM public.occasions
    WHERE link = occasion_link;

    IF v_occasion_id IS NULL THEN
        RAISE EXCEPTION 'Occasion not found for link: %', occasion_link;
    END IF;

    -- Call Unified Function
    RETURN public.get_entity_email_templates('occasion', v_occasion_id);
END;
$$;
