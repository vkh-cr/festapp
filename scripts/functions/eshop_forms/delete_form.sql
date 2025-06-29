-- Internal function: Contains business logic, no permission checks.
CREATE OR REPLACE FUNCTION delete_form(p_form_id bigint)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_response_count INT;
    v_form_key UUID;
BEGIN
    -- Check if the form has any responses before allowing deletion.
    SELECT key INTO v_form_key FROM public.forms WHERE id = p_form_id;

    IF v_form_key IS NOT NULL THEN
        SELECT COUNT(*)
        INTO v_response_count
        FROM eshop.orders
        WHERE (data->>'form')::uuid = v_form_key;

        IF v_response_count > 0 THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4090, 'message', 'This form cannot be deleted because it has responses.')::TEXT;
        END IF;
    END IF;

    -- If there are no responses, proceed with deletion.
    -- Assumes an 'ON DELETE CASCADE' constraint on the 'form_fields.form' foreign key.
    DELETE FROM public.forms WHERE id = p_form_id;
END;
$$;