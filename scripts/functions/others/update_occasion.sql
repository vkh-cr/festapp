CREATE OR REPLACE FUNCTION update_occasion(input_data JSONB)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result JSONB;
    occ_id BIGINT;
    now TIMESTAMPTZ := NOW();
    updated_occ JSONB;
    v_unit BIGINT;
    old_unit BIGINT;
    final_unit BIGINT;
    new_blueprint_id BIGINT;
    v_feature_blueprint_enabled BOOLEAN;
    v_form_id BIGINT;
    v_form_blueprint BIGINT;
    v_form_settings JSONB;
    v_reminder_interval_seconds BIGINT;
BEGIN
    BEGIN
        IF input_data IS NULL THEN
            RAISE EXCEPTION '%',
                JSONB_BUILD_OBJECT('code', 4000, 'message', 'Input data is missing')::TEXT;
        END IF;

        IF input_data->>'id' IS NOT NULL THEN
            occ_id := (input_data->>'id')::BIGINT;

            SELECT unit
              INTO old_unit
              FROM public.occasions
             WHERE id = occ_id;

            IF NOT FOUND THEN
                RAISE EXCEPTION '%',
                    JSONB_BUILD_OBJECT('code', 4040, 'message', 'Occasion not found')::TEXT;
            END IF;

            IF input_data->>'unit' IS NOT NULL THEN
                final_unit := (input_data->>'unit')::BIGINT;
            ELSE
                final_unit := old_unit;
            END IF;

            PERFORM check_is_editor_on_unit(final_unit);

            UPDATE public.occasions
               SET updated_at = now,
                   title      = COALESCE(input_data->>'title', title),
                   description = COALESCE(input_data->>'description', description),
                   link       = COALESCE(input_data->>'link', link),
                   data       = COALESCE(input_data->'data', data),
                   is_hidden  = COALESCE((input_data->>'is_hidden')::BOOLEAN, is_hidden),
                   is_open    = COALESCE((input_data->>'is_open')::BOOLEAN, is_open),
                   start_time = COALESCE((input_data->>'start_time')::TIMESTAMPTZ, start_time),
                   end_time   = COALESCE((input_data->>'end_time')::TIMESTAMPTZ, end_time),
                   organization = COALESCE((input_data->>'organization')::BIGINT, organization),
                   services   = COALESCE(input_data->'services', services),
                   unit       = final_unit,
                   features   = COALESCE(input_data->'features', features)
             WHERE id = occ_id
             RETURNING to_jsonb(public.occasions.*) INTO updated_occ;

        ELSE
            final_unit := COALESCE((input_data->>'unit')::BIGINT, NULL);
            PERFORM check_is_editor_on_unit(final_unit);

            INSERT INTO public.occasions(
                created_at, updated_at, title, description, link, data,
                is_hidden, is_open, start_time, end_time, organization,
                services, unit, features
            )
            VALUES(
                now, now,
                COALESCE(input_data->>'title', ''),
                COALESCE(input_data->>'description', ''),
                COALESCE(input_data->>'link', NULL),
                COALESCE(input_data->'data', '{}'::jsonb),
                COALESCE((input_data->>'is_hidden')::BOOLEAN, false),
                COALESCE((input_data->>'is_open')::BOOLEAN, true),
                COALESCE((input_data->>'start_time')::TIMESTAMPTZ, NULL),
                COALESCE((input_data->>'end_time')::TIMESTAMPTZ, NULL),
                COALESCE((input_data->>'organization')::BIGINT, NULL),
                COALESCE(input_data->'services', '{}'::jsonb),
                final_unit,
                COALESCE(input_data->'features', '[]'::jsonb)
            )
            RETURNING to_jsonb(public.occasions.*) INTO updated_occ;

            occ_id := (updated_occ->>'id')::BIGINT;
        END IF;

        -- Check if form feature is enabled and handle related logic
        IF input_data ? 'features' THEN
            -- Extract the settings for the 'form' feature
            SELECT elem INTO v_form_settings
            FROM jsonb_array_elements(input_data->'features') AS elem
            WHERE elem->>'code' = 'form';

            -- Check if the form feature itself is enabled
            IF v_form_settings IS NOT NULL AND (v_form_settings->>'is_enabled')::boolean IS TRUE THEN

                -- Create a default form if one doesn't exist for the occasion
                IF NOT EXISTS (SELECT 1 FROM public.forms WHERE occasion = occ_id) THEN
                    PERFORM create_form(JSONB_BUILD_OBJECT(
                        'occasion_id', occ_id,
                        'link', COALESCE(input_data->>'form_link', updated_occ->>'link'),
                        'title', 'Registration'
                    ));
                END IF;

                -- Check if reminders are enabled within the form feature
                IF (v_form_settings->>'reminder_is_enabled')::boolean IS TRUE THEN
                    -- Get the reminder interval, defaulting to 1 day (86400 seconds) if not specified
                    v_reminder_interval_seconds := COALESCE(
                        (v_form_settings->>'reminder_interval_seconds')::bigint,
                        86400
                    );
                    -- Call the function to queue payment reminders for all relevant orders
                    PERFORM public.queue_payment_reminders(occ_id, v_reminder_interval_seconds);
                END IF;
            END IF;
        END IF;

        -- Blueprint feature check and creation (remains the same)
        v_feature_blueprint_enabled := false;
        IF input_data ? 'features' THEN
            SELECT bool_or(
                (elem->>'code' = 'blueprint')
                AND ((elem->>'is_enabled')::BOOLEAN)
            )
              INTO v_feature_blueprint_enabled
              FROM jsonb_array_elements(input_data->'features') AS elem;
        END IF;

        IF v_feature_blueprint_enabled THEN
            SELECT id, blueprint
              INTO v_form_id, v_form_blueprint
              FROM public.forms
             WHERE occasion = occ_id
             LIMIT 1;
            IF FOUND THEN
                IF v_form_blueprint IS NULL THEN
                    INSERT INTO eshop.blueprints(configuration, occasion, organization, created_at, updated_at)
                    VALUES ('{"dimensions": {"width": 28, "height": 52}}'::jsonb, occ_id, COALESCE((updated_occ->>'organization')::BIGINT, 1), now, now)
                    RETURNING id INTO new_blueprint_id;

                    UPDATE public.forms
                       SET blueprint = new_blueprint_id,
                           updated_at = now
                     WHERE id = v_form_id;
                END IF;
            END IF;
        END IF;

        result := JSONB_BUILD_OBJECT(
            'code', 200,
            'message', 'Occasion updated successfully',
            'occasion', updated_occ
        );

    EXCEPTION WHEN OTHERS THEN
        result := CASE
            WHEN left(SQLERRM, 1) = '{' THEN SQLERRM::JSONB
            ELSE JSONB_BUILD_OBJECT('code', 5000, 'message', SQLERRM)
        END;
    END;

    RETURN result;
END;
$$;
