-- Test: create_ticket_order_errors
-- Goal: Verify that create_ticket_order correctly returns error codes for various invalid inputs and state violations.
-- Note: The function CATCHES exceptions internally and returns them as JSON, so we check the result, we don't catch exceptions.

DO $$
DECLARE
    v_occasion_id bigint;
    v_form_json jsonb;
    v_form_id bigint;
    v_form_key uuid;
    v_product_id bigint;
    v_spot_id bigint;
    v_spot_secret uuid;
    v_input_data jsonb;
    v_result jsonb; -- Captured result
    v_user_email text := 'test-errors@example.com';
    v_other_occasion_id bigint;
    v_hidden_product_id bigint;
    v_unit_id bigint;
    v_bank_account_id bigint;
BEGIN
    -- ========================================================================
    -- SETUP
    -- ========================================================================
    
    -- 1. Get an existing occasion and create a form
    SELECT id INTO v_occasion_id FROM public.occasions LIMIT 1;
    IF v_occasion_id IS NULL THEN PERFORM assert_fail('No occasion found'); END IF;

    SELECT create_form(v_occasion_id, 'error-test-' || floor(random()*100000)::text, 'Error Test Form') 
    INTO v_form_json;
    
    v_form_id := (v_form_json->>'id')::bigint;
    v_form_key := (v_form_json->>'key')::uuid;
    
    -- Open the form by default
    UPDATE public.forms SET is_open = true WHERE id = v_form_id;

    -- 2. Get a spot product
    SELECT p.id INTO v_product_id
    FROM eshop.products p
    JOIN eshop.product_types pt ON p.product_type = pt.id
    WHERE pt.occasion = v_occasion_id AND pt.type = 'spot'
    LIMIT 1;
    PERFORM assert_not_null(v_product_id, 'Spot product must exist');

    -- 3. Create a Spot
    v_spot_secret := gen_random_uuid();
    INSERT INTO eshop.spots (title, product, occasion, secret)
    VALUES ('Error Test Spot', v_product_id, v_occasion_id, v_spot_secret)
    RETURNING id INTO v_spot_id;

    -- ========================================================================
    -- TESTS
    -- ========================================================================

    ---------------------------------------------------------------------------
    -- 1001: Missing form key
    ---------------------------------------------------------------------------
    v_result := create_ticket_order('{}'::jsonb);
    PERFORM assert_eq((v_result->>'code')::int, 1001, 'Error 1001 mismatch (Missing form)');

    ---------------------------------------------------------------------------
    -- 1002: Missing email
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object('form', v_form_key);
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1002, 'Error 1002 mismatch (Missing email)');

    ---------------------------------------------------------------------------
    -- 1003: Form not linked to any occasion (Simulated by invalid ID key logic)
    -- If we pass a random UUID that doesn't exist in forms table, SELECT INTO returns NULLs.
    -- Then 'IF occasion_id IS NULL' triggers 1003.
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object('form', gen_random_uuid(), 'email', v_user_email);
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1003, 'Error 1003 mismatch (Invalid form/occasion)');

    ---------------------------------------------------------------------------
    -- 1021: Form is closed (manually)
    ---------------------------------------------------------------------------
    UPDATE public.forms SET is_open = false WHERE id = v_form_id;
    
    v_input_data := jsonb_build_object('form', v_form_key, 'email', v_user_email);
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1021, 'Error 1021 mismatch (Form closed)');
    
    UPDATE public.forms SET is_open = true WHERE id = v_form_id; -- Restore

    ---------------------------------------------------------------------------
    -- 1019: Form not yet open (Schedule)
    ---------------------------------------------------------------------------
    UPDATE public.forms 
    SET data = jsonb_build_object('schedule', jsonb_build_object('start_time', NOW() + interval '1 hour'))
    WHERE id = v_form_id;
    
    v_input_data := jsonb_build_object('form', v_form_key, 'email', v_user_email);
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1019, 'Error 1019 mismatch (Future start time)');
    
    -- Reset schedule
    UPDATE public.forms SET data = '{}'::jsonb WHERE id = v_form_id;

    ---------------------------------------------------------------------------
    -- 1020: Form is closed (Schedule end time passed)
    ---------------------------------------------------------------------------
    UPDATE public.forms 
    SET data = jsonb_build_object('schedule', jsonb_build_object('end_time', NOW() - interval '1 hour'))
    WHERE id = v_form_id;

    v_input_data := jsonb_build_object('form', v_form_key, 'email', v_user_email);
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1020, 'Error 1020 mismatch (Past end time)');

    UPDATE public.forms SET data = '{}'::jsonb WHERE id = v_form_id;


    ---------------------------------------------------------------------------
    -- 1007: Invalid or unrelated spot
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', v_user_email,
        'ticket', jsonb_build_array(
            jsonb_build_object('spot', -9999) 
        )
    );
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1007, 'Error 1007 mismatch (Invalid spot)');


    ---------------------------------------------------------------------------
    -- 1009: Invalid secret for spot
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', v_user_email,
        'secret', gen_random_uuid(), -- WRONG SECRET
        'ticket', jsonb_build_array(
            jsonb_build_object('spot', v_spot_id)
        )
    );
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1009, 'Error 1009 mismatch (Wrong secret)');

    ---------------------------------------------------------------------------
    -- 1015: Spot product missing
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', v_user_email,
        'ticket', jsonb_build_array(
            jsonb_build_object() 
        )
    );
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1015, 'Error 1015 mismatch (Missing spot product)');

    ---------------------------------------------------------------------------
    -- 1011: Product not found or not part of occasion
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', v_user_email,
        'secret', v_spot_secret,
        'ticket', jsonb_build_array(
            jsonb_build_object(
                'spot', v_spot_id,
                'fields', jsonb_build_array(
                    jsonb_build_object('product_type', -9999)
                )
            )
        )
    );
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1011, 'Error 1011 mismatch (Invalid product)');

    ---------------------------------------------------------------------------
    -- 1012: Product is hidden
    ---------------------------------------------------------------------------
    INSERT INTO eshop.products (title, description, price, currency_code, product_type, is_hidden)
    VALUES ('Hidden Product', '...', 10, 'CZK', (SELECT product_type FROM eshop.products WHERE id = v_product_id), true)
    RETURNING id INTO v_hidden_product_id;

    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', v_user_email,
        'secret', v_spot_secret,
        'ticket', jsonb_build_array(
            jsonb_build_object(
                'spot', v_spot_id,
                'fields', jsonb_build_array(
                    jsonb_build_object('product_type', v_hidden_product_id)
                )
            )
        )
    );
    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1012, 'Error 1012 mismatch (Hidden product)');

    ---------------------------------------------------------------------------
    -- 1018: Currency mismatch / No bank account
    ---------------------------------------------------------------------------
    UPDATE eshop.products SET currency_code = 'JPY' WHERE id = v_hidden_product_id;
    UPDATE eshop.products SET is_hidden = false WHERE id = v_hidden_product_id;

    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', v_user_email,
        'secret', v_spot_secret,
        'ticket', jsonb_build_array(
            jsonb_build_object(
                'spot', v_spot_id,
                'fields', jsonb_build_array(
                    jsonb_build_object('product_type', v_hidden_product_id)
                )
            )
        )
    );
    v_result := create_ticket_order(v_input_data);
    
    -- Check for 1014 OR 1018
    IF (v_result->>'code')::int NOT IN (1014, 1018) THEN
        PERFORM assert_fail('Expected error 1014 or 1018 for JPY currency, got: ' || (v_result->>'code'));
    END IF;
    
    UPDATE eshop.products SET currency_code = 'CZK' WHERE id = v_hidden_product_id;

    ---------------------------------------------------------------------------
    -- 1008: Spot already reserved
    ---------------------------------------------------------------------------
    v_input_data := jsonb_build_object(
        'form', v_form_key,
        'email', 'valid@example.com',
        'secret', v_spot_secret,
        'ticket', jsonb_build_array(
            jsonb_build_object('spot', v_spot_id)
        )
    );
    
    -- Manually simulate an existing reservation
    DECLARE
        v_dummy_order_id bigint;
        v_dummy_ticket_id bigint;
        v_dummy_opt_id bigint;
    BEGIN
        INSERT INTO eshop.orders (occasion, form) VALUES (v_occasion_id, v_form_id) RETURNING id INTO v_dummy_order_id;
        INSERT INTO eshop.tickets (occasion, state) VALUES (v_occasion_id, 'valid') RETURNING id INTO v_dummy_ticket_id;
        INSERT INTO eshop.order_product_ticket ("order", product, ticket) VALUES (v_dummy_order_id, v_product_id, v_dummy_ticket_id) RETURNING id INTO v_dummy_opt_id;
        
        UPDATE eshop.spots SET order_product_ticket = v_dummy_opt_id WHERE id = v_spot_id;
    END;

    v_result := create_ticket_order(v_input_data);
    PERFORM assert_eq((v_result->>'code')::int, 1008, 'Error 1008 mismatch (Spot reserved)');

    PERFORM assert_true(true, 'All error tests completed');

END;
$$ LANGUAGE plpgsql;
