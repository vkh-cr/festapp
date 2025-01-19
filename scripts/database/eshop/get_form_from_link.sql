CREATE OR REPLACE FUNCTION get_form_from_link(form_link TEXT)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    allData JSON;
    generated_secret UUID := gen_random_uuid();
    form_exists BOOLEAN;
BEGIN
    -- Check if the form exists
    SELECT EXISTS (
        SELECT 1
        FROM public.forms
        WHERE link = form_link
    ) INTO form_exists;

    IF NOT form_exists THEN
        -- Return an error if the form does not exist
        RETURN jsonb_build_object(
            'code', 404,
            'message', 'Form does not exist.'
        );
    END IF;

    -- Check if the form is open
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
            'secret', generated_secret,
            'fields', (
                SELECT jsonb_agg(
                    jsonb_build_object(
                        'id', ff.id,
                        'title', ff.title,
                        'description', ff.description,
                        'data', ff.data,
                        'type', ff.type,
                        'is_required', ff.is_required,
                        'is_hidden', ff.is_hidden,
                        'order', ff."order"
                    )
                )
                FROM public.form_fields ff
                WHERE ff.form = f.id AND ff.is_hidden = false
            )
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