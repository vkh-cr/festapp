CREATE OR REPLACE FUNCTION create_companion(oc BIGINT, usr UUID, c_name TEXT)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    new_companion UUID;
    user_email TEXT;
    user_name TEXT;
    user_surname TEXT;
    companion_email TEXT;
    max_companions INT;
    current_companions INT;
BEGIN

    -- Retrieve max_companions from the occasions table
    SELECT COALESCE((data->>'max_companions')::INT, 0) INTO max_companions
    FROM public.occasions
    WHERE id = oc;

    -- Count current companions for the user on the occasion
    SELECT COUNT(*)
    INTO current_companions
    FROM public.user_companions
    WHERE "user" = usr AND companion IN (SELECT "user" FROM occasion_users WHERE occasion = oc);

    -- Check if the current companions exceed max_companions
    IF current_companions >= max_companions THEN
        RETURN jsonb_build_object('code', 403);
    END IF;

    SELECT email_readonly, name, surname INTO user_email, user_name, user_surname
            FROM public.user_info
            WHERE id = usr;
        companion_email :=  user_email || '+' || oc || '+' || c_name;

    new_companion := create_user_with_data(oc, companion_email, '', jsonb_build_object('name', c_name, 'email', companion_email));

    INSERT INTO public.user_companions ("user", companion)
    VALUES (usr, new_companion);

    RETURN jsonb_build_object('code', 200);
END;
$$;