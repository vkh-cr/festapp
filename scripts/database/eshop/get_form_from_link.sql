CREATE OR REPLACE FUNCTION get_form_from_link(form_link TEXT)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    allData JSON;
    generated_secret UUID := gen_random_uuid();
BEGIN
    -- Check if the form is open based on the provided link
    IF NOT EXISTS (
        SELECT 1
        FROM public.forms
        WHERE link = form_link AND is_open = true
    ) THEN
        -- Return an error if the form is not open
        RETURN jsonb_build_object(
            'code', 400,
            'message', 'Form is not open.'
        );
    END IF;

    -- Build the JSON response with form data if the form is open
    SELECT jsonb_build_object(
        'code', 200,
        'data', jsonb_build_object(
            'id', f.id,
            'key', f.key,
            'created_at', f.created_at,
            'data', f.data,
            'type', f.type,
            'header', f.header,
            'footer', f.footer,
            'occasion', f.occasion,
            'blueprint', f.blueprint,
            'deadline_duration_seconds', f.deadline_duration_seconds,
            'account_number', ba.account_number,
            'secret', generated_secret
        )
    )
    INTO allData
    FROM public.forms f
    LEFT JOIN eshop.bank_accounts ba ON f.bank_account = ba.id
    WHERE f.link = form_link;

    -- Return the constructed JSON data
    RETURN allData;
END;
$$;