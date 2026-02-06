-- Description: Verify security remediation for Critical findings.
-- 1. duplicate_occasion should be SECURITY DEFINER (true) but have guard in source.
-- 2. Internal helpers should be SECURITY INVOKER (false).

BEGIN;

DO $$ 
DECLARE
    rec boolean;
    src text;
BEGIN
    ----------------------------------------------------------------------------
    -- 1. Check duplicate_occasion
    ----------------------------------------------------------------------------
    RAISE NOTICE 'Verifying duplicate_occasion...';
    
    SELECT prosecdef, prosrc INTO rec, src
    FROM pg_proc 
    WHERE proname = 'duplicate_occasion';

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Function duplicate_occasion not found';
    END IF;

    IF NOT rec THEN
        RAISE EXCEPTION 'duplicate_occasion MUST be SECURITY DEFINER (for deep cloning)';
    END IF;

    IF src NOT ILIKE '%check_is_manager_on_unit%' THEN
        RAISE EXCEPTION 'duplicate_occasion MUST contain explicit permission guard (check_is_manager_on_unit)';
    END IF;

    RAISE NOTICE '✅ duplicate_occasion is DEFINER and Guarded.';

    ----------------------------------------------------------------------------
    -- 2. Check recalculate_order_payment_status
    ----------------------------------------------------------------------------
    RAISE NOTICE 'Verifying recalculate_order_payment_status...';
    
    SELECT prosecdef INTO rec
    FROM pg_proc 
    WHERE proname = 'recalculate_order_payment_status';

    IF rec THEN
        RAISE EXCEPTION 'recalculate_order_payment_status MUST be SECURITY INVOKER (prosecdef=false)';
    END IF;
    RAISE NOTICE '✅ recalculate_order_payment_status is INVOKER.';

    ----------------------------------------------------------------------------
    -- 3. Check update_order_and_tickets_to_paid
    ----------------------------------------------------------------------------
    RAISE NOTICE 'Verifying update_order_and_tickets_to_paid...';
    
    SELECT prosecdef INTO rec
    FROM pg_proc 
    WHERE proname = 'update_order_and_tickets_to_paid';

    IF rec THEN
        RAISE EXCEPTION 'update_order_and_tickets_to_paid MUST be SECURITY INVOKER (prosecdef=false)';
    END IF;
    RAISE NOTICE '✅ update_order_and_tickets_to_paid is INVOKER.';

    ----------------------------------------------------------------------------
    -- 4. Check internal_storno_tickets_221
    ----------------------------------------------------------------------------
    RAISE NOTICE 'Verifying internal_storno_tickets_221...';
    
    SELECT prosecdef INTO rec
    FROM pg_proc 
    WHERE proname = 'internal_storno_tickets_221';

    IF rec THEN
        RAISE EXCEPTION 'internal_storno_tickets_221 MUST be SECURITY INVOKER (prosecdef=false)';
    END IF;
    RAISE NOTICE '✅ internal_storno_tickets_221 is INVOKER.';

END $$;

ROLLBACK;
