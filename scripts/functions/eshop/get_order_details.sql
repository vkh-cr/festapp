CREATE OR REPLACE FUNCTION get_order_details(orderId bigint)
RETURNS jsonb AS $$
DECLARE
    result_data jsonb;
    form_fields_data jsonb;
    form_key uuid;
BEGIN
    -- Retrieve the order, associated occasion, and payment information
    SELECT jsonb_build_object(
        'order', to_jsonb(o.*),
        'occasion', to_jsonb(occ.*),
        'payment_info', to_jsonb(pi.*)
    )
    INTO result_data
    FROM eshop.orders AS o
    LEFT JOIN public.occasions AS occ ON o.occasion = occ.id
    LEFT JOIN eshop.payment_info AS pi ON o.payment_info = pi.id
    WHERE o.id = orderId;

    -- Check if the order was found
    IF result_data IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'Order not found.');
    END IF;

    -- Extract the form's unique key from the order's data
    form_key := (result_data->'order'->'data'->>'form')::uuid;

    -- If a form key exists, fetch all associated form fields
    IF form_key IS NOT NULL THEN
        SELECT jsonb_object_agg(ff.id, to_jsonb(ff.*))
        INTO form_fields_data
        FROM public.form_fields AS ff
        JOIN public.forms AS f ON ff.form = f.id
        WHERE f.key = form_key;

        -- If form fields were found, add them to the result data
        IF form_fields_data IS NOT NULL THEN
            result_data := result_data || jsonb_build_object('form_fields', form_fields_data);
        END IF;
    END IF;

    -- Return a success response with the collected data
    RETURN jsonb_build_object('code', 200, 'data', result_data);

EXCEPTION WHEN OTHERS THEN
    -- Handle any unexpected errors and return a detailed error message
    RETURN jsonb_build_object(
        'code', 500,
        'message', 'An unexpected error occurred.',
        'detail', SQLERRM
    );
END;
$$ LANGUAGE plpgsql;