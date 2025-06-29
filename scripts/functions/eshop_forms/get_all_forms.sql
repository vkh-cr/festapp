CREATE OR REPLACE FUNCTION public.get_all_forms(
    occasion_link TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_occasion_id BIGINT;
    forms_data JSONB;
BEGIN
    -- Step 1: Resolve the occasion ID from the provided link.
    SELECT id
    INTO v_occasion_id
    FROM public.occasions
    WHERE link = occasion_link;

    -- Step 2: If no occasion is found, return a 404 error.
    IF v_occasion_id IS NULL THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Occasion not found'
        );
    END IF;

    -- Step 3: Verify if the user has editor rights for this occasion.
    -- This assumes a function `get_is_editor_on_occasion` exists.
    IF NOT get_is_editor_on_occasion(v_occasion_id) THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'User is not authorized to view forms for this occasion.'
        );
    END IF;

    -- Step 4: Aggregate forms for the occasion into a JSONB array.
    -- The subquery for 'response_count' is now corrected to count responses from the 'eshop.orders' table.
    SELECT jsonb_agg(
        jsonb_build_object(
            'id', f.id,
            'created_at', f.created_at,
            'title', f.title,
            'data', f.data,
            'key', f.key,
            'occasion', f.occasion,
            'type', f.type,
            'is_open', f.is_open,
            'link', f.link,
            'blueprint', f.blueprint,
            'updated_at', f.updated_at,
            'response_count', (
                SELECT COUNT(*)
                FROM eshop.orders o
                WHERE (o.data->>'form')::uuid = f.key -- Correctly join forms.key with the UUID in orders.data
            )
        ) ORDER BY f.created_at
    )
    INTO forms_data
    FROM public.forms f
    WHERE f.occasion = v_occasion_id;

    -- Step 5: If no forms were found, return an empty array.
    IF forms_data IS NULL THEN
        forms_data := '[]'::jsonb;
    END IF;

    -- Step 6: Return the aggregated JSON response with a 200 code.
    RETURN jsonb_build_object(
        'code', 200,
        'data', forms_data
    );
END;
$$;