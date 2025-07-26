-- Internal function: Contains business logic, no permission checks.
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

    -- Step 2: Check if any of the form's associated product types still contain products.
    -- Collect all product_type IDs associated with this form's fields.
    SELECT ARRAY_AGG(DISTINCT product_type)
    INTO v_product_type_ids
    FROM public.form_fields
    WHERE form = p_form_id AND product_type IS NOT NULL;

    IF v_product_type_ids IS NOT NULL THEN
        -- Check if any products exist for these product types.
        SELECT COUNT(*)
        INTO v_product_count
        FROM eshop.products
        WHERE product_type = ANY(v_product_type_ids);

        IF v_product_count > 0 THEN
            RAISE EXCEPTION 'This form cannot be deleted because its product types still contain products. Please remove the products first.';
        END IF;
    END IF;

    -- Step 3: Proceed with deletion if all checks pass.

    -- Delete the product types (which are now confirmed to be empty).
    IF v_product_type_ids IS NOT NULL THEN
        DELETE FROM eshop.product_types WHERE id = ANY(v_product_type_ids);
    END IF;

    -- Delete the form fields. This is often handled by ON DELETE CASCADE,
    -- but being explicit is safer against schema changes.
    DELETE FROM public.form_fields WHERE form = p_form_id;

    -- Finally, delete the form itself.
    DELETE FROM public.forms WHERE id = p_form_id;
END;
$$;
