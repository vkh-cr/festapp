CREATE OR REPLACE FUNCTION public.import_users_from_tickets(p_occasion_id bigint)
RETURNS JSONB
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
    v_occasion_user_row public.occasion_users%ROWTYPE;
    new_email TEXT;
    email_local_part TEXT;
    email_domain_part TEXT;
    email_suffix INT;
    inserted_users JSONB[] := ARRAY[]::JSONB[];
    updated_users JSONB[] := ARRAY[]::JSONB[];

    storno_record RECORD;
    deleted_user_info RECORD;
    deleted_users JSONB[] := ARRAY[]::JSONB[];

BEGIN
    -- Get the organization_id from the occasion
    SELECT organization INTO v_organization_id FROM public.occasions WHERE id = p_occasion_id;

    IF v_organization_id IS NULL THEN
        RAISE EXCEPTION 'Occasion with id % not found or has no organization.', p_occasion_id;
    END IF;

    -- Find users in this occasion whose linked ticket has been canceled.
    FOR storno_record IN
        SELECT ou."user", ou.ticket
        FROM public.occasion_users ou
        JOIN eshop.tickets t ON ou.ticket = t.id
        WHERE ou.occasion = p_occasion_id
          AND ou.ticket IS NOT NULL
          AND t.state = 'storno'
    LOOP
        -- For reporting, get user details before deleting their occasion association.
        SELECT ui.email_readonly, ui.name, ui.surname
        INTO deleted_user_info
        FROM public.user_info ui
        WHERE ui.id = storno_record."user";

        -- Call the provided function to delete the user from the occasion and all related entities.
        PERFORM public.delete_occasion_user(storno_record."user", p_occasion_id);

        -- Add to the deleted list for the final JSONB report.
        deleted_users := array_append(deleted_users,
            jsonb_build_object(
                'email', deleted_user_info.email_readonly,
                'name', deleted_user_info.name,
                'surname', deleted_user_info.surname,
                'ticket_id', storno_record.ticket
            )
        );
    END LOOP;

    -- >> ORIGINAL IMPORT LOGIC STARTS HERE
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
          AND t.state IN ('ordered', 'sent', 'used', 'paid') -- Only import users with valid tickets
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
            SELECT * INTO v_occasion_user_row FROM public.occasion_users WHERE "user" = v_user_id AND occasion = p_occasion_id;

            IF v_occasion_user_row."user" IS NOT NULL AND v_occasion_user_row.ticket IS NOT NULL THEN
                -- SCENARIO 2: User exists and already has a ticket for this occasion.
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

                PERFORM add_user_to_occasion(p_occasion_id, v_user_id);
                UPDATE public.occasion_users SET ticket = ticket_record.ticket_id WHERE "user" = v_user_id AND occasion = p_occasion_id;

                inserted_users := array_append(inserted_users, jsonb_build_object('email', new_email, 'name', user_name, 'surname', user_surname));
            ELSE
                -- SCENARIO 1: User exists, but either isn't linked to the occasion yet, or is linked but without a ticket.
                user_data := jsonb_build_object('name', user_name, 'surname', user_surname, 'sex', user_sex);
                PERFORM update_user(v_user_id, p_occasion_id, user_data);

                IF v_occasion_user_row."user" IS NULL THEN
                    PERFORM add_user_to_occasion(p_occasion_id, v_user_id);
                END IF;

                UPDATE public.occasion_users SET ticket = ticket_record.ticket_id WHERE "user" = v_user_id AND occasion = p_occasion_id;

                updated_users := array_append(updated_users, jsonb_build_object('email', user_email, 'name', user_name, 'surname', user_surname));
            END IF;
        ELSE
            -- NEW USER: No user with this email exists in the organization.
            user_data := jsonb_build_object('name', user_name, 'surname', user_surname, 'email', user_email, 'sex', user_sex);
            v_user_id := create_user_in_organization_with_data(v_organization_id, user_email, gen_random_uuid()::text, user_data);

            PERFORM add_user_to_occasion(p_occasion_id, v_user_id);
            UPDATE public.occasion_users SET ticket = ticket_record.ticket_id WHERE "user" = v_user_id AND occasion = p_occasion_id;

            inserted_users := array_append(inserted_users, jsonb_build_object('email', user_email, 'name', user_name, 'surname', user_surname));
        END IF;
    END LOOP;

    -- Return the results as a JSONB object, now including the deleted users.
    RETURN jsonb_build_object(
        'inserted', to_jsonb(inserted_users),
        'updated', to_jsonb(updated_users),
        'deleted', to_jsonb(deleted_users)
    );
END;
$$;