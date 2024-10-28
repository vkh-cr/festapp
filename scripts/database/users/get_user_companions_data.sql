CREATE OR REPLACE FUNCTION get_user_companions_data ()
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    companions jsonb;
BEGIN
    -- Aggregate companion data into JSONB format
    SELECT jsonb_agg(
        jsonb_build_object(
            'id', ui.id,
            'name', ui.name,
            'event_ids', (
                SELECT jsonb_agg(eu.event)
                FROM public.event_users eu
                WHERE eu."user" = ui.id
            )
        )
    ) INTO companions
    FROM public.user_companions uc
    JOIN public.user_info ui ON uc.companion = ui.id
    WHERE uc."user"::text = auth.uid()::TEXT;

    -- If no companions are found, return an empty array
    IF companions IS NULL THEN
        companions := '[]'::jsonb;
    END IF;

    -- Return the companions data with a code of 200
    RETURN jsonb_build_object('code', 200, 'data', companions);
END;
$$;