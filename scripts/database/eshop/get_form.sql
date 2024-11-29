CREATE OR REPLACE FUNCTION get_form(form_key UUID)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    allData JSON;
BEGIN
    -- Check if the form is open
    IF NOT EXISTS (
        SELECT 1
        FROM public.forms
        WHERE key = form_key AND is_open = true
    ) THEN
        -- Return an error if the form is not open
        RETURN jsonb_build_object(
            'code', 400,
            'message', 'Form is not open.'
        );
    END IF;

    -- Build the query to fetch data if the form is open
    SELECT jsonb_build_object(
        'code', 200,
        'data', jsonb_build_object(
            'id', f.id,
            'created_at', f.created_at,
            'data', f.data,
            'type', f.type,
            'occasion', f.occasion,
            'deadline_duration', f.deadline_duration,
            'account_number', ba.account_number
        )
    )
    INTO allData
    FROM public.forms f
    LEFT JOIN eshop.bank_accounts ba ON f.bank_account = ba.id
    WHERE f.key = form_key;

    -- Return the result
    RETURN allData;
END;
$$;
