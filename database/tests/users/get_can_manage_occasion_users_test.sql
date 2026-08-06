DO $$
DECLARE
    v_occasion bigint;
BEGIN
    PERFORM create_user_for_test('user_manager', 'user_manager@test.local');
    PERFORM create_user_for_test('plain_user', 'plain_user@test.local');

    INSERT INTO public.occasions (title, link, start_time, end_time, is_open)
    VALUES (
        'Occasion user management permission test',
        'user-management-permission-' || gen_random_uuid(),
        now(),
        now() + interval '1 day',
        true
    )
    RETURNING id INTO v_occasion;

    INSERT INTO public.occasion_users (occasion, "user", is_manager, data)
    VALUES
        (
            v_occasion,
            get_user_id('user_manager'),
            true,
            '{}'::jsonb
        ),
        (
            v_occasion,
            get_user_id('plain_user'),
            false,
            '{}'::jsonb
        );

    PERFORM set_config(
        'request.jwt.claim.sub',
        get_user_id('user_manager')::text,
        true
    );
    PERFORM assert_eq(
        public.get_can_manage_occasion_users(v_occasion),
        true,
        'occasion managers can manage occasion users'
    );

    PERFORM set_config(
        'request.jwt.claim.sub',
        get_user_id('plain_user')::text,
        true
    );
    PERFORM assert_eq(
        public.get_can_manage_occasion_users(v_occasion),
        false,
        'plain occasion users cannot manage occasion users'
    );
END;
$$;
