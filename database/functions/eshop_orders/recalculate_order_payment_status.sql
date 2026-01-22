CREATE OR REPLACE FUNCTION public.recalculate_order_payment_status(p_order_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_paid numeric;
    v_price numeric;
    v_payment_info_id bigint;
BEGIN
    SELECT 
        o.price, 
        o.payment_info,
        pi.paid
    INTO 
        v_price, 
        v_payment_info_id,
        v_paid
    FROM eshop.orders o
    LEFT JOIN eshop.payment_info pi ON o.payment_info = pi.id
    WHERE o.id = p_order_id;

    -- Treat NULL paid as 0
    IF COALESCE(v_paid, 0) >= v_price THEN
        -- Fully paid
        PERFORM public.update_order_and_tickets_to_paid(p_order_id);
    END IF;
END;
$$;
