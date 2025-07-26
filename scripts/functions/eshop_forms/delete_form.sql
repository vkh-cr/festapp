CREATE OR REPLACE FUNCTION delete_form(p_form_id bigint)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_response_count INT;
    v_form_key UUID;
    v_product_count INT;
    v_product_type_ids BIGINT[];
BEGIN
    -- Step 1: Check if the form has any responses. If so, prevent deletion.
    SELECT key INTO v_form_key FROM public.forms WHERE id = p_form_id;

    IF v_form_key IS NOT NULL THEN
        SELECT COUNT(*)
        INTO v_response_count
        FROM eshop.orders
        WHERE (data->>'form')::uuid = v_form_key;

        IF v_response_count > 0 THEN
            RAISE EXCEPTION 'This form cannot be deleted because it has responses.';
        END IF;
    END IF;

    -- Step 2: Collect all product_type IDs associated with this form's fields.
    -- This is needed for checks and for the subsequent deletion.
    SELECT ARRAY_AGG(DISTINCT product_type)
    INTO v_product_type_ids
    FROM public.form_fields
    WHERE form = p_form_id AND product_type IS NOT NULL;

    -- Step 3: Check if any of the form's associated product types still contain products.
    IF v_product_type_ids IS NOT NULL AND array_length(v_product_type_ids, 1) > 0 THEN
        SELECT COUNT(*)
        INTO v_product_count
        FROM eshop.products
        WHERE product_type = ANY(v_product_type_ids);

        IF v_product_count > 0 THEN
            RAISE EXCEPTION 'This form cannot be deleted because its product types still contain products. Please remove the products first.';
        END IF;
    END IF;

    -- Step 4: Proceed with deletion if all checks pass.
    -- The order of operations here is critical to avoid foreign key violations.

    -- First, delete the form fields. This removes the foreign key reference
    -- from `public.form_fields` to `eshop.product_types`.
    DELETE FROM public.form_fields WHERE form = p_form_id;

    -- Second, now that the referencing form_fields are gone (and we've confirmed
    -- no products exist), we can safely delete the product types.
    IF v_product_type_ids IS NOT NULL AND array_length(v_product_type_ids, 1) > 0 THEN
        DELETE FROM eshop.product_types WHERE id = ANY(v_product_type_ids);
    END IF;

    -- Finally, delete the form itself.
    DELETE FROM public.forms WHERE id = p_form_id;
END;
$$;