DROP FUNCTION IF EXISTS public.update_product(JSONB);

CREATE OR REPLACE FUNCTION public.update_product(p_input JSONB)
RETURNS BIGINT LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, extensions AS $$
DECLARE
  v_product_id BIGINT;
  v_occasion_id BIGINT;
  v_product_type_id BIGINT;
BEGIN
  -- Extract product id from the input JSON
  v_product_id := (p_input->>'id')::BIGINT;

  -- Try to find the product to determine if we are updating or creating.
  -- This also gets the *current* occasion for the permission check on UPDATE.
  IF v_product_id IS NOT NULL THEN
    SELECT pt.occasion
    INTO v_occasion_id
    FROM eshop.products p
    JOIN eshop.product_types pt ON p.product_type = pt.id
    WHERE p.id = v_product_id;
  END IF;

  -- CASE 1: Product was found (v_product_id was not null and existed)
  IF FOUND THEN
    -- We are UPDATING.

    -- Ensure the caller has permission to edit this product's *current* occasion.
    -- This function is expected to raise an exception on failure.
    PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

    -- Update only the fields that are provided in the input JSON.
    -- COALESCE is used to keep the existing value if a new one isn't provided.
    -- NULLIF is added to safely handle empty strings '' during casting.
    UPDATE eshop.products p
    SET
      occasion      = COALESCE(NULLIF(p_input->>'occasion', '')::BIGINT, p.occasion),
      title         = COALESCE(p_input->>'title',         p.title),
      description   = COALESCE(p_input->>'description',   p.description),
      price         = COALESCE(NULLIF(p_input->>'price', '')::NUMERIC, p.price),
      currency_code = COALESCE(p_input->>'currency_code', p.currency_code),
      data          = COALESCE(p_input->'data',           p.data),
      product_type  = COALESCE(NULLIF(p_input->>'product_type', '')::BIGINT, p.product_type),
      "order"       = COALESCE(NULLIF(p_input->>'order', '')::INT,  p."order"),
      maximum       = COALESCE(NULLIF(p_input->>'maximum', '')::INT, p.maximum),
      is_hidden     = COALESCE(NULLIF(p_input->>'is_hidden', '')::BOOLEAN, p.is_hidden),
      updated_at    = NOW()
    WHERE p.id = v_product_id;

    -- Return the ID of the updated product on success.
    RETURN v_product_id;

  -- CASE 2: Product was NOT found (v_product_id was NULL or was an ID that doesn't exist)
  ELSE
    -- We are CREATING, as per the request.

    -- 1. Get the product_type from the JSON.
    v_product_type_id := (p_input->>'product_type')::BIGINT;

    -- 2. Validate product_type is provided (it's required for creation).
    IF v_product_type_id IS NULL THEN
      RAISE EXCEPTION '%', jsonb_build_object(
          'code', 'PRD422',
          'message', 'Field "product_type" is required when creating a new product.'
      )::text;
    END IF;

    -- 3. Find the occasion for the *new* product_type to check permissions.
    SELECT occasion
    INTO v_occasion_id
    FROM eshop.product_types
    WHERE id = v_product_type_id;

    -- 4. Handle invalid product_type.
    IF NOT FOUND THEN
      RAISE EXCEPTION '%', jsonb_build_object(
          'code', 'PTY404',
          'message', 'Product type with ID ' || v_product_type_id || ' not found.'
      )::text;
    END IF;

    -- 5. Ensure the caller has permission to create a product on this occasion.
    PERFORM public.check_is_editor_order_on_occasion(v_occasion_id);

    -- 6. Insert the new product.
    -- We ignore the `id` from the JSON (v_product_id) and let the sequence generate a new one.
    -- We use NULLIF to safely cast potentially empty strings.
    INSERT INTO eshop.products (
      occasion,
      title,
      description,
      price,
      currency_code,
      data,
      product_type,
      "order",
      maximum,
      is_hidden
      -- created_at and updated_at are assumed to have defaults (e.g., NOW())
    )
    VALUES (
      v_occasion_id,
      p_input->>'title',
      p_input->>'description',
      NULLIF(p_input->>'price', '')::NUMERIC,
      p_input->>'currency_code',
      p_input->'data',
      v_product_type_id, -- We already extracted and validated this
      NULLIF(p_input->>'order', '')::INT,
      NULLIF(p_input->>'maximum', '')::INT,
      -- Default to 'false' if is_hidden is not provided on create
      COALESCE(NULLIF(p_input->>'is_hidden', '')::BOOLEAN, false)
    )
    RETURNING id INTO v_product_id; -- Get the newly created ID

    -- Return the ID of the newly created product.
    RETURN v_product_id;

  END IF;
END;
$$;