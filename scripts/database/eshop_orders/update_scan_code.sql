CREATE OR REPLACE FUNCTION update_scan_code(
    form_link TEXT,
    new_scan_code TEXT
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_id BIGINT;
BEGIN
    -- 1. Retrieve occasion_id using form_link
    SELECT occasion
    INTO occasion_id
    FROM public.forms
    WHERE link = form_link;

    -- 2. Check if form_link is valid and linked to an occasion
    IF occasion_id IS NULL THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Form key does not exist or is not linked to an occasion.'
        );
    END IF;

    -- 3. Verify if the user is an editor on the occasion
    IF NOT get_is_editor_on_occasion(occasion_id) THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'User is not authorized to edit this occasion.'
        );
    END IF;

    -- 4. Update or create the scan_code within the features
    UPDATE public.occasions
    SET data =
        CASE
            -- Case 1: 'features' key exists
            WHEN data ? 'features' THEN
                CASE
                    -- Subcase 1.1: 'scan' feature exists, update 'scan_code'
                    WHEN EXISTS (
                        SELECT 1
                        FROM jsonb_array_elements(data->'features') AS feature
                        WHERE feature->>'code' = 'scan'
                    ) THEN
                        jsonb_set(
                            data,
                            '{features}',
                            (
                                SELECT jsonb_agg(
                                    CASE
                                        WHEN feature->>'code' = 'scan' THEN
                                            feature || jsonb_build_object('scan_code', new_scan_code)
                                        ELSE
                                            feature
                                    END
                                )
                                FROM jsonb_array_elements(data->'features') AS feature
                            ),
                            false
                        )
                    -- Subcase 1.2: 'scan' feature does not exist, append it
                    ELSE
                        jsonb_set(
                            data,
                            '{features}',
                            (data->'features') || jsonb_build_object('code', 'scan', 'scan_code', new_scan_code),
                            false
                        )
                END
            -- Case 2: 'features' key does not exist, create it with the 'scan' feature
            ELSE
                data || jsonb_build_object(
                    'features',
                    jsonb_build_array(
                        jsonb_build_object('code', 'scan', 'scan_code', new_scan_code)
                    )
                )
        END
    WHERE id = occasion_id;

    -- 5. Return a success message
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Scan code updated successfully.'
    );

EXCEPTION
    WHEN OTHERS THEN
        -- Handle any unexpected exceptions
        RETURN jsonb_build_object(
            'code', 500,
            'message', 'An unexpected error occurred.',
            'detail', SQLERRM
        );
END;
$$;
