CREATE OR REPLACE FUNCTION update_form(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    ----------------------------------------------------------------------------
    -- Declarations
    ----------------------------------------------------------------------------
    result JSONB;

    form_id          BIGINT;               -- ID of the form being created/updated
    occasion_id      BIGINT;               -- ID of the occasion to which the form belongs
    now_ts           TIMESTAMPTZ := NOW(); -- Current timestamp for record updates

    link_param           TEXT;       -- Unique link for the form, must not conflict within the same org
    occasion_org         BIGINT;     -- Organization stored in the occasions table
    occasion_unit        BIGINT;     -- The 'unit' that must match for bank accounts
    conflict_check       INT;        -- Used for verifying uniqueness constraints
    deadline_val         BIGINT;     -- Field for validating form deadlines
    price_val            NUMERIC;    -- Field for validating product price

    bank_account_val     BIGINT;     -- Bank account from input_data
    bank_account_unit    BIGINT;     -- Unit of the bank account, must match occasion_unit

    -- Variables for handling product_type logic (now nested inside form_fields.product_type)
    product_type_data    JSONB;      -- Each product_type object from a form_field
    product_type_id      BIGINT;     -- Product_type ID (new or existing)
    product_type_occ     BIGINT;     -- Occasion to verify for an existing product_type

    -- Variables for handling products (within each product_type)
    products_data        JSONB;      -- Placeholder for product array from product_type_data
    product_array_data   JSONB;      -- Rebuilt array of products
    product_data         JSONB;      -- Each product object from the product array
    product_id           BIGINT;     -- ID for a product (new or existing)
    product_occ          BIGINT;     -- Occasion check for an existing product

    -- Variables for handling form_fields
    form_fields_data     JSONB := '[]'::JSONB;
    field_data           JSONB;       -- Each form_field from input
    field_id             BIGINT;      -- ID for a form_field (new or existing)
BEGIN
    BEGIN
        /* All logic is inside this sub-block so we can catch exceptions similarly
           to how it's done in create_ticket_order, with a single EXCEPTION WHEN OTHERS THEN.
           We raise exceptions in JSON form, and if it's JSON, we return it as-is; otherwise,
           we build a default JSON error response. */

        ----------------------------------------------------------------------------
        -- Begin main logic
        ----------------------------------------------------------------------------

        -- Validate that input_data and essential fields exist
        IF input_data IS NULL THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4001, 'message', 'Input data is missing')::TEXT;
        END IF;

        IF input_data->>'occasion' IS NULL THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4002, 'message', 'Missing occasion ID in input data')::TEXT;
        END IF;

        occasion_id := (input_data->>'occasion')::BIGINT;
        IF occasion_id IS NULL THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4002, 'message', 'Invalid or missing occasion ID')::TEXT;
        END IF;

        -- Ensure user is authorized to edit this occasion
        IF (SELECT get_is_editor_on_occasion(occasion_id)) <> TRUE THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 403, 'message', 'User is not authorized to edit this occasion')::TEXT;
        END IF;

        -- Retrieve the occasion's organization and unit
        SELECT o.organization, o.unit
          INTO occasion_org, occasion_unit
          FROM public.occasions o
         WHERE o.id = occasion_id
         LIMIT 1;

        IF occasion_org IS NULL OR occasion_unit IS NULL THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4017, 'message', 'Occasion not found or missing required fields')::TEXT;
        END IF;

        -- Validate the link field, which must be unique within the same organization
        link_param := input_data->>'link';
        IF link_param IS NULL OR link_param = '' THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4013, 'message', 'Missing link in input data')::TEXT;
        END IF;

        -- Determine if we are creating a new form or updating an existing one
        form_id := NULLIF(input_data->>'id', '')::BIGINT;

        IF form_id IS NULL THEN
            -- New form: ensure link uniqueness via a join to occasions
            SELECT 1
              INTO conflict_check
              FROM public.forms f
              JOIN public.occasions o ON f.occasion = o.id
             WHERE o.organization = occasion_org
               AND f.link = link_param
             LIMIT 1;

            IF conflict_check IS NOT NULL THEN
                RAISE EXCEPTION '%',
                    JSONB_BUILD_OBJECT(
                        'code', 4014,
                        'message', 'Link is already used by another form in the same organization'
                    )::TEXT;
            END IF;

            INSERT INTO public.forms (
                created_at,
                occasion,
                link
            )
            VALUES (
                now_ts,
                occasion_id,
                link_param
            )
            RETURNING id INTO form_id;
        ELSE
            -- Existing form: ensure form belongs to the occasion and link is still unique
            IF NOT EXISTS (
                SELECT 1
                FROM public.forms
                WHERE id = form_id
                  AND occasion = occasion_id
            ) THEN
                RAISE EXCEPTION '%',
                    JSONB_BUILD_OBJECT(
                        'code', 4005,
                        'message', 'Form does not exist or does not match the given occasion',
                        'form_id', form_id
                    )::TEXT;
            END IF;

            SELECT 1
              INTO conflict_check
              FROM public.forms f
              JOIN public.occasions o ON f.occasion = o.id
             WHERE o.organization = occasion_org
               AND f.link = link_param
               AND f.id <> form_id
             LIMIT 1;

            IF conflict_check IS NOT NULL THEN
                RAISE EXCEPTION '%',
                    JSONB_BUILD_OBJECT(
                        'code', 4014,
                        'message', 'Link is already used by another form in the same organization'
                    )::TEXT;
            END IF;
        END IF;

        ----------------------------------------------------------------------------
        -- Process form_fields array from input_data. Each form_field can contain
        -- a nested product_type object with its own 'products' array.
        ----------------------------------------------------------------------------
        IF (input_data->'form_fields') IS NOT NULL THEN
            form_fields_data := '[]'::JSONB;

            FOR field_data IN
                SELECT * FROM JSONB_ARRAY_ELEMENTS(input_data->'form_fields')
            LOOP
                field_id := NULLIF(field_data->>'id', '')::BIGINT;

                -- If this form_field contains product_type data, handle it (create or update)
                IF (field_data->'product_type') IS NOT NULL THEN
                    product_type_data := field_data->'product_type';

                    -- Make sure product_type_data is an object before proceeding:
                    IF jsonb_typeof(product_type_data) <> 'object' THEN
                        RAISE EXCEPTION '%',
                            JSONB_BUILD_OBJECT(
                                'code', 4022,
                                'message', 'Invalid product_type (expected object)',
                                'details', product_type_data
                            )::TEXT;
                    END IF;

                    -- Parse out potential ID
                    product_type_id := NULLIF(product_type_data->>'id', '')::BIGINT;

                    IF product_type_id IS NULL THEN
                        -- New product_type
                        INSERT INTO eshop.product_types (
                            created_at,
                            updated_at,
                            occasion,
                            title,
                            description,
                            type,
                            data
                        )
                        VALUES (
                            now_ts,
                            now_ts,
                            occasion_id,
                            product_type_data->>'title',
                            product_type_data->>'description',
                            product_type_data->>'type',
                            product_type_data->'data'
                        )
                        RETURNING id INTO product_type_id;

                        -- Update the JSONB object with the new ID
                        product_type_data := jsonb_set(product_type_data, '{id}', TO_JSONB(product_type_id));
                    ELSE
                        -- Existing product_type: check existence and occasion
                        SELECT occasion
                          INTO product_type_occ
                          FROM eshop.product_types
                         WHERE id = product_type_id;

                        IF NOT FOUND THEN
                            RAISE EXCEPTION '%',
                                JSONB_BUILD_OBJECT(
                                    'code', 4006,
                                    'message', 'Product type not found',
                                    'details', product_type_data
                                )::TEXT;
                        END IF;

                        IF product_type_occ <> occasion_id THEN
                            RAISE EXCEPTION '%',
                                JSONB_BUILD_OBJECT(
                                    'code', 4007,
                                    'message', 'product_type occasion does not match form occasion',
                                    'product_type_occasion', product_type_occ,
                                    'form_occasion', occasion_id,
                                    'details', product_type_data
                                )::TEXT;
                        END IF;

                        UPDATE eshop.product_types
                           SET
                               updated_at = now_ts,
                               title = product_type_data->>'title',
                               description = product_type_data->>'description',
                               type = product_type_data->>'type',
                               data = product_type_data->'data'
                         WHERE id = product_type_id;
                    END IF;

                    ----------------------------------------------------------------------------
                    -- Process products within this product_type
                    ----------------------------------------------------------------------------
                    product_array_data :=
                        CASE
                            WHEN (product_type_data->'products') IS NOT NULL
                                 AND jsonb_typeof(product_type_data->'products') = 'array'
                            THEN product_type_data->'products'
                            ELSE '[]'::JSONB
                        END;

                    IF jsonb_array_length(product_array_data) > 0 THEN
                        -- Only iterate if there's something in the array
                        FOR product_data IN
                            SELECT * FROM JSONB_ARRAY_ELEMENTS(product_array_data)
                        LOOP
                            product_id := NULLIF(product_data->>'id', '')::BIGINT;

                            -- Validate product price must be > 0
                            price_val := COALESCE(NULLIF(product_data->>'price',''), '0')::NUMERIC;
                            IF price_val <= 0 THEN
                                RAISE EXCEPTION '%',
                                    JSONB_BUILD_OBJECT(
                                        'code', 4015,
                                        'message', 'Product price must be greater than zero',
                                        'details', product_data
                                    )::TEXT;
                            END IF;

                            IF product_id IS NULL THEN
                                -- New product
                                INSERT INTO eshop.products (
                                    created_at,
                                    updated_at,
                                    product_type,
                                    occasion,
                                    title,
                                    description,
                                    price,
                                    data,
                                    is_hidden,
                                    title_short,
                                    "order"
                                )
                                VALUES (
                                    now_ts,
                                    now_ts,
                                    product_type_id,
                                    occasion_id,
                                    product_data->>'title',
                                    product_data->>'description',
                                    price_val,
                                    product_data->'data',
                                    COALESCE((product_data->>'is_hidden')::BOOLEAN, false),
                                    product_data->>'title_short',
                                    NULLIF(product_data->>'order','')::BIGINT
                                )
                                RETURNING id INTO product_id;

                                product_data := jsonb_set(product_data, '{id}', TO_JSONB(product_id));
                            ELSE
                                -- Existing product: must match same occasion/product_type
                                SELECT p.occasion
                                  INTO product_occ
                                  FROM eshop.products p
                                 WHERE p.id = product_id
                                   AND p.product_type = product_type_id
                                 LIMIT 1;

                                IF NOT FOUND THEN
                                    RAISE EXCEPTION '%',
                                        JSONB_BUILD_OBJECT(
                                            'code', 4008,
                                            'message', 'Product not found or does not match product_type',
                                            'details', product_data
                                        )::TEXT;
                                END IF;

                                IF product_occ <> occasion_id THEN
                                    RAISE EXCEPTION '%',
                                        JSONB_BUILD_OBJECT(
                                            'code', 4009,
                                            'message', 'Product occasion does not match form occasion',
                                            'product_occasion', product_occ,
                                            'form_occasion', occasion_id,
                                            'details', product_data
                                        )::TEXT;
                                END IF;

                                UPDATE eshop.products
                                   SET
                                       updated_at = now_ts,
                                       title = product_data->>'title',
                                       description = product_data->>'description',
                                       price = price_val,
                                       data = product_data->'data',
                                       is_hidden = COALESCE((product_data->>'is_hidden')::BOOLEAN, false),
                                       title_short = product_data->>'title_short',
                                       "order" = NULLIF(product_data->>'order','')::BIGINT
                                 WHERE id = product_id
                                   AND product_type = product_type_id;
                            END IF;

                            product_array_data := product_array_data || product_data;
                        END LOOP;
                    END IF;

                    -- Store updated products array back into product_type_data
                    product_type_data := jsonb_set(product_type_data, '{products}', product_array_data);

                    -- Put the updated product_type object back into field_data
                    field_data := jsonb_set(field_data, '{product_type}', product_type_data);
                END IF;

                ----------------------------------------------------------------------------
                -- Now handle insertion/update of the form_field itself
                ----------------------------------------------------------------------------
                IF field_id IS NOT NULL THEN
                    -- Update existing form_field
                    UPDATE public.form_fields
                       SET
                           title = field_data->>'title',
                           description = field_data->>'description',
                           data = field_data->'data',
                           type = field_data->>'type',
                           is_required = COALESCE((field_data->>'is_required')::BOOLEAN, false),
                           is_hidden = COALESCE((field_data->>'is_hidden')::BOOLEAN, false),
                           "order" = NULLIF(field_data->>'order','')::BIGINT,
                           product_type =
                             CASE
                                 WHEN (field_data->'product_type') IS NOT NULL
                                      AND jsonb_typeof(field_data->'product_type') = 'object'
                                 THEN (field_data->'product_type'->>'id')::BIGINT
                                 ELSE NULL
                             END,
                           is_ticket_field = COALESCE((field_data->>'is_ticket_field')::BOOLEAN, false),
                           form = form_id
                     WHERE id = field_id
                       AND form = form_id;

                    IF NOT FOUND THEN
                        RAISE EXCEPTION '%',
                            JSONB_BUILD_OBJECT(
                                'code', 4012,
                                'message', 'No matching form_field found to update (or does not belong to this form)',
                                'details', field_data
                            )::TEXT;
                    END IF;
                ELSE
                    -- Insert new form_field
                    INSERT INTO public.form_fields (
                        created_at,
                        title,
                        description,
                        data,
                        type,
                        is_required,
                        form,
                        is_hidden,
                        "order",
                        product_type,
                        is_ticket_field
                    )
                    VALUES (
                        now_ts,
                        field_data->>'title',
                        field_data->>'description',
                        field_data->'data',
                        field_data->>'type',
                        COALESCE((field_data->>'is_required')::BOOLEAN, false),
                        form_id,
                        COALESCE((field_data->>'is_hidden')::BOOLEAN, false),
                        NULLIF(field_data->>'order','')::BIGINT,
                        CASE
                            WHEN (field_data->'product_type') IS NOT NULL
                                 AND jsonb_typeof(field_data->'product_type') = 'object'
                            THEN (field_data->'product_type'->>'id')::BIGINT
                            ELSE NULL
                        END,
                        COALESCE((field_data->>'is_ticket_field')::BOOLEAN, false)
                    )
                    RETURNING id INTO field_id;

                    field_data := jsonb_set(field_data, '{id}', TO_JSONB(field_id));
                END IF;

                form_fields_data := form_fields_data || field_data;
            END LOOP;
        END IF;

        ----------------------------------------------------------------------------
        -- Validate that deadline_duration_seconds is zero, positive, or null
        ----------------------------------------------------------------------------
        deadline_val := NULLIF(input_data->>'deadline_duration_seconds','')::BIGINT;
        IF deadline_val IS NOT NULL AND deadline_val < 0 THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT(
                    'code', 4016,
                    'message', 'deadline_duration_seconds must be zero or higher or null'
                )::TEXT;
        END IF;

        ----------------------------------------------------------------------------
        -- Validate bank_account belongs to the same unit as the occasion, if provided
        ----------------------------------------------------------------------------
        bank_account_val := NULLIF(input_data->>'bank_account','')::BIGINT;
        IF bank_account_val IS NOT NULL THEN
            SELECT ba.unit
              INTO bank_account_unit
              FROM eshop.unit_bank_accounts ba
             WHERE ba.bank_account = bank_account_val
               AND ba.unit = occasion_unit
             LIMIT 1;

            IF NOT FOUND THEN
                RAISE EXCEPTION '%',
                    JSONB_BUILD_OBJECT(
                        'code', 4020,
                        'message', 'Bank account not found',
                        'bank_account', bank_account_val
                    )::TEXT;
            END IF;

            IF bank_account_unit <> occasion_unit THEN
                RAISE EXCEPTION '%',
                    JSONB_BUILD_OBJECT(
                        'code', 4021,
                        'message', 'Bank account does not belong to the same unit as the occasion',
                        'bank_account_unit', bank_account_unit,
                        'occasion_unit', occasion_unit
                    )::TEXT;
            END IF;
        END IF;

        ----------------------------------------------------------------------------
        -- Update the main form record with all validated fields
        ----------------------------------------------------------------------------
        UPDATE public.forms
           SET
               data = input_data->'data',
               header = input_data->>'header',
               footer = input_data->>'footer',
               link = link_param,
               blueprint = NULLIF(input_data->>'blueprint','')::BIGINT,
               bank_account = bank_account_val,
               deadline_duration_seconds = deadline_val,
               is_open = COALESCE((input_data->>'is_open')::BOOLEAN, true)
         WHERE id = form_id;

        ----------------------------------------------------------------------------
        -- Prepare a success response
        ----------------------------------------------------------------------------
        result := JSONB_BUILD_OBJECT(
            'code', 200,
            'message', 'Form updated successfully',
            'form_id', form_id,
            'form_fields', form_fields_data
        );

    EXCEPTION WHEN OTHERS THEN
        -- Catch any exception and attempt to parse it as JSON; if not JSON, wrap it in our own JSON.
        result := CASE
            WHEN left(SQLERRM, 1) = '{' THEN SQLERRM::JSONB
            ELSE JSONB_BUILD_OBJECT('code', 5001, 'message', SQLERRM)
        END;
    END;

    RETURN result;
END;
$$;
