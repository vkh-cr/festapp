BEGIN;

-- 1. Check if table exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'eshop' AND table_name = 'transactions_parser_log') THEN
        RAISE EXCEPTION 'Table eshop.transactions_parser_log missing';
    END IF;
END $$;

-- 2. Check if function exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_proc WHERE proname = 'log_transactions_parser_log') THEN
         RAISE EXCEPTION 'Function log_transactions_parser_log missing';
    END IF;
END $$;

-- 3. Test execution & insertion (mocking or checking side effects)
DO $$
DECLARE
    v_log_count_before int;
    v_log_count_after int;
BEGIN
    SELECT count(*) INTO v_log_count_before FROM eshop.transactions_parser_log;

    PERFORM public.log_transactions_parser_log(NULL, 'test_id', '{"test": true}', 'Test message');

    SELECT count(*) INTO v_log_count_after FROM eshop.transactions_parser_log;

    IF v_log_count_after <= v_log_count_before THEN
        RAISE EXCEPTION 'Row was not inserted into transactions_parser_log';
    END IF;
    
    RAISE NOTICE 'Test Passed: Log entry inserted.';
END $$;

ROLLBACK;
