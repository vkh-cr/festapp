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
    returned_revenue NUMERIC;
    remaining_balance NUMERIC;

    -- Variables for product type counts
    rec_product_type RECORD;
    current_product_type TEXT := '';
    product_type_section TEXT := E'===========\nPočet zaplacených produktů podle typu:\n';
BEGIN
    -- Calculate the total number of spots, booked spots, and free spots
    SELECT
        COUNT(*) AS total_spots,
        COUNT(*) FILTER (WHERE order_product_ticket IS NOT NULL) AS booked_spots,
        COUNT(*) FILTER (WHERE order_product_ticket IS NULL) AS free_spots
    INTO
        total_spots, booked_spots, free_spots
    FROM
        eshop.spots
    WHERE
        occasion = occasion_id;

    -- Calculate the total number of tickets in various states
    SELECT
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'ordered') AS total_tickets_ordered,
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'paid') AS total_tickets_paid,
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'sent') AS total_tickets_sent,
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'used') AS total_tickets_used,
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'storno') AS total_tickets_canceled
    INTO
        total_tickets_ordered, total_tickets_paid, total_tickets_sent, total_tickets_used, total_tickets_canceled
    FROM
        eshop.tickets t
    JOIN
        eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE
        t.occasion = occasion_id;

    -- Calculate the total number of orders and their states
    SELECT
        COUNT(*) AS total_orders,
        COUNT(*) FILTER (WHERE state = 'ordered') AS ordered_orders,
        COUNT(*) FILTER (WHERE state = 'paid') AS paid_orders,
        COUNT(*) FILTER (WHERE state = 'sent') AS sent_orders,
        COUNT(*) FILTER (WHERE state = 'storno') AS canceled_orders
    INTO
        total_orders, ordered_orders, paid_orders, sent_orders, canceled_orders
    FROM
        eshop.orders
    WHERE
        occasion = occasion_id;

    -- Calculate revenue-related sums
    SELECT
        COALESCE(SUM(o.price), 0) AS total_revenue,
        COALESCE(SUM(pi.paid), 0) AS paid_revenue,
        COALESCE(SUM(pi.returned), 0) AS returned_revenue
    INTO
        total_revenue, paid_revenue, returned_revenue
    FROM
        eshop.orders o
    LEFT JOIN
        eshop.payment_info pi ON pi.id = o.payment_info
    WHERE
        o.occasion = occasion_id;

    -- Calculate the remaining balance
    remaining_balance := total_revenue - paid_revenue;

    -- Calculate the count of ordered products grouped by product type and product title,
    -- excluding orders with state 'storno' and 'ordered'
    FOR rec_product_type IN
        SELECT
            pt.title AS product_type,
            p.title AS product_title,
            COUNT(opt.product) AS ordered_count
        FROM
            eshop.order_product_ticket opt
        JOIN
            eshop.products p ON opt.product = p.id
        JOIN
            eshop.product_types pt ON p.product_type = pt.id
        JOIN
            eshop.orders o ON o.id = opt."order"
        WHERE
            p.occasion = occasion_id
            AND o.state NOT IN ('storno', 'ordered')
        GROUP BY
            pt.title, p.title
        ORDER BY
            pt.title, p.title
    LOOP
        IF rec_product_type.product_type <> current_product_type THEN
            -- If we have moved to a new product type, update the current_product_type
            current_product_type := rec_product_type.product_type;
            product_type_section := product_type_section || E' - ' || current_product_type || E':\n';
        END IF;

        -- Append the product and its count under the current product type
        product_type_section := product_type_section ||
            E'   -- ' || rec_product_type.product_title || E': ' || rec_product_type.ordered_count || E'\n';
    END LOOP;

    -- If no products are ordered, indicate that in the report
    IF product_type_section = E'===========\nPočet zaplacených produktů podle typu:\n' THEN
        product_type_section := product_type_section || E' - Žádné zaplacené produkty.\n';
    END IF;

    -- Format and return the report
    RETURN E'===========\n' ||
           E'Počet míst celkem: ' || to_char(total_spots, 'FM9999') || E'\n' ||
           E'Počet volných: ' || to_char(free_spots, 'FM9999') || E'\n' ||
           E'Počet obsazených: ' || to_char(booked_spots, 'FM9999') || E'\n' ||
           E'Počet objednaných: ' || to_char(total_tickets_ordered, 'FM9999') || E'\n' ||
           E'Počet zaplacených: ' || to_char(total_tickets_paid, 'FM9999') || E'\n' ||
           E'Počet odeslaných: ' || to_char(total_tickets_sent, 'FM9999') || E'\n' ||
           E'Počet využitých: ' || to_char(total_tickets_used, 'FM9999') || E'\n' ||
           E'Počet storno: ' || to_char(total_tickets_canceled, 'FM9999') || E'\n' ||
           E'===========\n' ||
           E'Počet objednávek celkem: ' || to_char(total_orders, 'FM9999') || E'\n' ||
           E'Počet objednávek objednáno: ' || to_char(ordered_orders, 'FM9999') || E'\n' ||
           E'Počet objednávek zaplaceno: ' || to_char(paid_orders, 'FM9999') || E'\n' ||
           E'Počet objednávek odesláno: ' || to_char(sent_orders, 'FM9999') || E'\n' ||
           E'Počet objednávek storno: ' || to_char(canceled_orders, 'FM9999') || E'\n' ||
           product_type_section ||
           E'===========\n' ||
           E'Suma všech objednávek: ' || to_char(total_revenue, 'FM99999990.00') || E'\n' ||
           E'Suma zaplacených částek: ' || to_char(paid_revenue, 'FM99999990.00') || E'\n' ||
           E'Suma vrácených částek: ' || to_char(returned_revenue, 'FM99999990.00') || E'\n' ||
           E'Zbývající částka: ' || to_char(remaining_balance, 'FM99999990.00') || E'\n' ||
           E'===========';
EXCEPTION
    WHEN OTHERS THEN
        -- Handle any exceptions gracefully
        RETURN E'An unexpected error occurred: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;