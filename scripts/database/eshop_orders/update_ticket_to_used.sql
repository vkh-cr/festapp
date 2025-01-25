CREATE OR REPLACE FUNCTION update_ticket_to_used(
    ticket_id bigint,
    scan_code text
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    occasion_id bigint;
    expected_scan_code text;
BEGIN
    -- 1. Validate Ticket Existence
    IF NOT EXISTS (
        SELECT 1 FROM eshop.tickets WHERE id = ticket_id
    ) THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Ticket not found.'
        );
    END IF;

    -- 2. Retrieve Associated Occasion ID
    SELECT occasion
    INTO occasion_id
    FROM eshop.tickets
    WHERE id = ticket_id;

    -- Check if occasion_id is present
    IF occasion_id IS NULL THEN
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Occasion associated with ticket not found.'
        );
    END IF;

    -- 3. Retrieve Expected Scan Code from Occasion's Features
    SELECT feature->>'scan_code'
    INTO expected_scan_code
    FROM jsonb_array_elements((SELECT data->'features' FROM public.occasions WHERE id = occasion_id)) AS feature
    WHERE feature->>'code' = 'scan'
    LIMIT 1;

    -- Check if scan_code is defined
    IF expected_scan_code IS NULL THEN
        RETURN jsonb_build_object(
            'code', 400,
            'message', 'Scan code not defined for occasion.'
        );
    END IF;

    -- 4. Validate Provided Scan Code
    IF scan_code != expected_scan_code THEN
        RETURN jsonb_build_object(
            'code', 401,
            'message', 'Scan code is not correct.'
        );
    END IF;

    -- 5. Update Ticket State to 'used'
    UPDATE eshop.tickets
    SET state = 'used'
    WHERE id = ticket_id;

    -- 6. Return Success Message
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Ticket state updated to used successfully.'
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
