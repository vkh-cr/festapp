-- Assertion Helpers

CREATE OR REPLACE FUNCTION assert_true(condition boolean, message text) RETURNS void AS $$
BEGIN
    IF NOT condition THEN
        RAISE EXCEPTION 'ASSERTION FAILED: %', message;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION assert_eq(actual anyelement, expected anyelement, message text) RETURNS void AS $$
BEGIN
    IF actual IS DISTINCT FROM expected THEN
        RAISE EXCEPTION 'ASSERTION FAILED: %. Expected %, but got %', message, expected, actual;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION assert_equals(actual anyelement, expected anyelement, message text) RETURNS void AS $$
BEGIN
    PERFORM assert_eq(actual, expected, message);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION assert_not_null(actual anyelement, message text) RETURNS void AS $$
BEGIN
    IF actual IS NULL THEN
        RAISE EXCEPTION 'ASSERTION FAILED: %. Expected NOT NULL, but got NULL', message;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION assert_jsonb_contains(actual jsonb, expected jsonb, message text) RETURNS void AS $$
BEGIN
    IF NOT (actual @> expected) THEN
        RAISE EXCEPTION 'ASSERTION FAILED: %. Expected % to be contained in %', message, expected, actual;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION assert_fail(message text) RETURNS void AS $$
BEGIN
    RAISE EXCEPTION 'TEST FAILED: %', message;
END;
$$ LANGUAGE plpgsql;

-- Auth Helpers
CREATE OR REPLACE FUNCTION create_user_for_test(test_user_alias text, test_email text) RETURNS void AS $$
DECLARE
    new_id uuid := gen_random_uuid();
BEGIN
    -- Setup temp mapping table if needed
    CREATE TEMP TABLE IF NOT EXISTS _test_user_aliases (alias text PRIMARY KEY, id uuid);
    
    -- Insert into auth.users (Triggers should handle public.user_info)
    INSERT INTO auth.users (id, instance_id, email, email_confirmed_at, aud, role, created_at, updated_at)
    VALUES (
        new_id, 
        '00000000-0000-0000-0000-000000000000', 
        test_email, 
        now(), 
        'authenticated', 
        'authenticated',
        now(),
        now()
    );

    -- Insert into public.user_info explicitly (referenced by foreign keys)
    INSERT INTO public.user_info (id, name, surname, sex)
    VALUES (new_id, 'Test', 'User', 'male');

    -- Store alias
    INSERT INTO _test_user_aliases (alias, id) VALUES (test_user_alias, new_id);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_user_id(test_user_alias text) RETURNS uuid AS $$
DECLARE
    ret_id uuid;
BEGIN
    SELECT id INTO ret_id FROM _test_user_aliases WHERE alias = test_user_alias;
    IF ret_id IS NULL THEN
        RAISE EXCEPTION 'Test user alias not found: %', test_user_alias;
    END IF;
    RETURN ret_id;
END;
$$ LANGUAGE plpgsql;
