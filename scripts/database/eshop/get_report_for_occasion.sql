CREATE OR REPLACE FUNCTION get_report_for_occasion(occasion_id bigint)
RETURNS TEXT AS $$
DECLARE
    total_spots INT;
    booked_spots INT;
    free_spots INT;
    total_tickets_ordered INT;
    total_tickets_paid INT;
    total_tickets_sent INT;
    total_tickets_used INT;
    total_tickets_canceled INT;
    total_orders INT;
    ordered_orders INT;
    paid_orders INT;
    sent_orders INT;
    canceled_orders INT;
    total_revenue NUMERIC;
    paid_revenue NUMERIC;
    remaining_balance NUMERIC;
BEGIN
    -- Calculate the total number of spots
    SELECT COUNT(*) INTO total_spots FROM eshop.spots WHERE occasion = occasion_id;

    -- Calculate the number of free spots
    SELECT COUNT(*) INTO booked_spots
    FROM eshop.spots s
    WHERE s.occasion = occasion_id
    AND s.order_product_ticket IS NOT NULL;

    -- Calculate the number of free spots
    SELECT COUNT(*) INTO free_spots
    FROM eshop.spots s
    WHERE s.occasion = occasion_id
    AND s.order_product_ticket IS NULL;

    -- Calculate the total number of tickets in various states
    SELECT COUNT(DISTINCT t.id) INTO total_tickets_ordered
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE t.state = 'ordered' AND t.occasion = occasion_id;

    SELECT COUNT(DISTINCT t.id) INTO total_tickets_paid
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE t.state = 'paid' AND t.occasion = occasion_id;

    SELECT COUNT(DISTINCT t.id) INTO total_tickets_sent
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE t.state = 'sent' AND t.occasion = occasion_id;

    SELECT COUNT(DISTINCT t.id) INTO total_tickets_used
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE t.state = 'used' AND t.occasion = occasion_id;

    SELECT COUNT(DISTINCT t.id) INTO total_tickets_canceled
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE t.state = 'storno' AND t.occasion = occasion_id;

    -- Calculate the total number of orders
    SELECT COUNT(*) INTO total_orders FROM eshop.orders WHERE occasion = occasion_id;

    -- Calculate the number of ordered orders
    SELECT COUNT(*) INTO ordered_orders
    FROM eshop.orders
    WHERE occasion = occasion_id AND state = 'ordered';

    -- Calculate the number of paid orders
    SELECT COUNT(*) INTO paid_orders
    FROM eshop.orders
    WHERE occasion = occasion_id AND state = 'paid';

    -- Calculate the number of sent orders
    SELECT COUNT(*) INTO sent_orders
    FROM eshop.orders
    WHERE occasion = occasion_id AND state = 'sent';

    -- Calculate the number of canceled orders
    SELECT COUNT(*) INTO canceled_orders
    FROM eshop.orders
    WHERE occasion = occasion_id AND state = 'storno';

    -- Calculate the total revenue
    SELECT SUM(price) INTO total_revenue FROM eshop.orders WHERE occasion = occasion_id;

    -- Calculate the total paid revenue
    SELECT SUM(pi.paid) INTO paid_revenue
    FROM eshop.payment_info pi
    JOIN eshop.orders o ON pi.id = o.payment_info
    WHERE o.occasion = occasion_id;

    -- Calculate the remaining balance
    SELECT (SUM(price) - SUM(pi.paid)) INTO remaining_balance
    FROM eshop.payment_info pi
    JOIN eshop.orders o ON pi.id = o.payment_info
    WHERE o.occasion = occasion_id;

    -- Format and return the report in the specified format
    RETURN E'===========\n' ||
           E'Počet míst celkem: ' || to_char(total_spots, '9999') || E'\n' ||
           E'Počet volných: ' || to_char(free_spots, '9999') || E'\n' ||
           E'Počet obsazených: ' || to_char(booked_spots, '9999') || E'\n' ||
           E'Počet objednaných: ' || to_char(total_tickets_ordered, '9999') || E'\n' ||
           E'Počet zaplacených: ' || to_char(total_tickets_paid, '9999') || E'\n' ||
           E'Počet odeslaných: ' || to_char(total_tickets_sent, '9999') || E'\n' ||
           E'Počet storno: ' || to_char(total_tickets_canceled, '9999') || E'\n' ||
           E'===========\n' ||
           E'Počet objednávek celkem: ' || to_char(total_orders, '9999') || E'\n' ||
           E'Počet objednávek objednáno: ' || to_char(ordered_orders, '9999') || E'\n' ||
           E'Počet objednávek zaplaceno: ' || to_char(paid_orders, '9999') || E'\n' ||
           E'Počet objednávek odesláno: ' || to_char(sent_orders, '9999') || E'\n' ||
           E'Počet objednávek storno: ' || to_char(canceled_orders, '9999') || E'\n' ||
           E'===========\n' ||
           E'Suma všech objednávek: ' || to_char(total_revenue, '99999999.99') || E'\n' ||
           E'Suma zaplacených částek: ' || to_char(paid_revenue, '99999999.99') || E'\n' ||
           E'Zbývající částka: ' || to_char(remaining_balance, '99999999.99') || E'\n' ||
           E'===========';
EXCEPTION WHEN OTHERS THEN
    -- Handle any exceptions
    RETURN E'An unexpected error occurred: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;