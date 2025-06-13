CREATE OR REPLACE FUNCTION public.import_users_from_tickets(p_occasion_id bigint)
RETURNS JSONB -- Changed return type from void to JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    ticket_record RECORD;
    order_data JSONB;
    user_email TEXT;
    user_name TEXT;
    user_surname TEXT;
    user_sex TEXT;
    user_data JSONB;
    v_user_id UUID;
    v_organization_id BIGINT;
    field_element JSONB;
    field_key TEXT;
    is_sex_field BOOLEAN;
    v_occasion_user_row public.occasion_users%ROWTYPE; -- Used to check for an existing occasion_users record.
    new_email TEXT;
    email_local_part TEXT;
    email_domain_part TEXT;
    email_suffix INT;
    -- Arrays to hold the results
    inserted_users JSONB[] := ARRAY[]::JSONB[];
    updated_users JSONB[] := ARRAY[]::JSONB[];
BEGIN
    -- Get the organization_id from the occasion
    SELECT organization INTO v_organization_id FROM public.occasions WHERE id = p_occasion_id;

    IF v_organization_id IS NULL THEN
        RAISE EXCEPTION 'Occasion with id % not found or has no organization.', p_occasion_id;
    END IF;

    -- Query for tickets that have not yet been assigned to a user for this occasion.
    FOR ticket_record IN
        SELECT DISTINCT ON (t.id)
            t.id as ticket_id,
            o.data as order_data
        FROM eshop.tickets t
        JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
        JOIN eshop.orders o ON opt."order" = o.id
        LEFT JOIN public.occasion_users ou ON t.id = ou.ticket
        WHERE t.occasion = p_occasion_id
          AND t.state IN ('sent', 'used', 'paid')
          AND ou.ticket IS NULL
        ORDER BY t.id, o.id DESC
    LOOP
        order_data := ticket_record.order_data;
        user_email := lower(trim(order_data->>'email'));
        user_name := order_data->>'name';
        user_surname := order_data->>'surname';
        user_sex := NULL;

        IF jsonb_typeof(order_data->'fields') = 'array' THEN
            FOR field_element IN SELECT * FROM jsonb_array_elements(order_data->'fields')
            LOOP
                field_key := (SELECT * FROM jsonb_object_keys(field_element));
                SELECT EXISTS (
                    SELECT 1
                    FROM public.form_fields
                    WHERE id = field_key::bigint AND type = 'sex'
                ) INTO is_sex_field;
                IF is_sex_field THEN
                    user_sex := field_element->>field_key;
                    EXIT;
                END IF;
            END LOOP;
        END IF;

        SELECT id INTO v_user_id FROM public.user_info WHERE email_readonly = user_email AND organization = v_organization_id;

        IF v_user_id IS NOT NULL THEN
            -- A user with this email already exists in the organization.
            -- Check if they are already associated with the occasion and if they have a ticket.
            SELECT * INTO v_occasion_user_row FROM public.occasion_users WHERE "user" = v_user_id AND occasion = p_occasion_id;

            IF v_occasion_user_row."user" IS NOT NULL AND v_occasion_user_row.ticket IS NOT NULL THEN
                -- SCENARIO 2: User exists and already has a ticket for this occasion.
                -- This means the same person bought another ticket, so we create a new, distinct user
                -- profile with an aliased email to hold the new ticket.
                email_suffix := 1;
                email_local_part := split_part(user_email, '@', 1);
                email_domain_part := split_part(user_email, '@', 2);
                LOOP
                    new_email := email_local_part || '+' || email_suffix || '@' || email_domain_part;
                    IF NOT EXISTS (SELECT 1 FROM public.user_info WHERE email_readonly = new_email AND organization = v_organization_id) THEN
                        EXIT;
                    END IF;
                    email_suffix := email_suffix + 1;
                END LOOP;

                user_data := jsonb_build_object('name', user_name, 'surname', user_surname, 'email', new_email, 'sex', user_sex);
                v_user_id := create_user_in_organization_with_data(v_organization_id, new_email, gen_random_uuid()::text, user_data);

                -- Since this is a brand new user record, we add them to the occasion.
                PERFORM add_user_to_occasion(p_occasion_id, v_user_id);
                -- And then link the specific ticket.
                UPDATE public.occasion_users SET ticket = ticket_record.ticket_id WHERE "user" = v_user_id AND occasion = p_occasion_id;

                -- Add to inserted list
                inserted_users := array_append(inserted_users, jsonb_build_object('email', new_email, 'name', user_name, 'surname', user_surname));
            ELSE
                -- SCENARIO 1: User exists, but either isn't linked to the occasion yet,
                -- or is linked but without a ticket. We'll update their info and link this ticket.
                user_data := jsonb_build_object('name', user_name, 'surname', user_surname, 'sex', user_sex);
                PERFORM update_user(v_user_id, p_occasion_id, user_data);

                -- **MODIFIED LOGIC**: Only add the user to the occasion if they are not already in it.
                IF v_occasion_user_row."user" IS NULL THEN
                    PERFORM add_user_to_occasion(p_occasion_id, v_user_id);
                END IF;

                -- Now, link the ticket. The occasion_users record is guaranteed to exist at this point.
                UPDATE public.occasion_users SET ticket = ticket_record.ticket_id WHERE "user" = v_user_id AND occasion = p_occasion_id;

                -- Add to updated list
                updated_users := array_append(updated_users, jsonb_build_object('email', user_email, 'name', user_name, 'surname', user_surname));
            END IF;
        ELSE
            -- NEW USER: No user with this email exists in the organization, so create one.
            user_data := jsonb_build_object('name', user_name, 'surname', user_surname, 'email', user_email, 'sex', user_sex);
            v_user_id := create_user_in_organization_with_data(v_organization_id, user_email, gen_random_uuid()::text, user_data);

            PERFORM add_user_to_occasion(p_occasion_id, v_user_id);
            UPDATE public.occasion_users SET ticket = ticket_record.ticket_id WHERE "user" = v_user_id AND occasion = p_occasion_id;

            -- Add to inserted list
            inserted_users := array_append(inserted_users, jsonb_build_object('email', user_email, 'name', user_name, 'surname', user_surname));
        END IF;
    END LOOP;

    -- Return the results as a JSONB object
    RETURN jsonb_build_object(
        'inserted', to_jsonb(inserted_users),
        'updated', to_jsonb(updated_users)
    );
END;
$$;
