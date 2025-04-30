CREATE OR REPLACE FUNCTION get_report_for_occasion(occasion_id bigint)
RETURNS TEXT AS $$
DECLARE
    total_spots             INT;
    booked_spots            INT;
    free_spots              INT;
    total_tickets_ordered   INT;
    total_tickets_paid      INT;
    total_tickets_sent      INT;
    total_tickets_used      INT;
    total_tickets_canceled  INT;
    total_orders            INT;
    ordered_orders          INT;
    paid_orders             INT;
    sent_orders             INT;
    canceled_orders         INT;

    -- For per-currency revenue
    rec_rev     RECORD;
    currency_count INT;
    single_cc    TEXT;
    total_revenue     NUMERIC;
    paid_revenue      NUMERIC;
    returned_revenue  NUMERIC;
    result_revenue    NUMERIC;
    remaining_balance NUMERIC;
    revenue_section   TEXT;

    -- Variables for product type counts
    rec_product_type     RECORD;
    current_product_type TEXT := '';
    product_type_section TEXT := E'===========\nPočet zaplacených produktů podle typu:\n';
BEGIN
    -- 1) Spots
    SELECT
        COUNT(*),
        COUNT(*) FILTER (WHERE order_product_ticket IS NOT NULL),
        COUNT(*) FILTER (WHERE order_product_ticket IS NULL)
    INTO
        total_spots, booked_spots, free_spots
    FROM eshop.spots
    WHERE occasion = occasion_id;

    -- 2) Tickets
    SELECT
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'ordered'),
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'paid'),
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'sent'),
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'used'),
        COUNT(DISTINCT t.id) FILTER (WHERE t.state = 'storno')
    INTO
        total_tickets_ordered,
        total_tickets_paid,
        total_tickets_sent,
        total_tickets_used,
        total_tickets_canceled
    FROM eshop.tickets t
    JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
    WHERE t.occasion = occasion_id;

    -- 3) Orders
    SELECT
        COUNT(*),
        COUNT(*) FILTER (WHERE state = 'ordered'),
        COUNT(*) FILTER (WHERE state = 'paid'),
        COUNT(*) FILTER (WHERE state = 'sent'),
        COUNT(*) FILTER (WHERE state = 'storno')
    INTO
        total_orders, ordered_orders, paid_orders, sent_orders, canceled_orders
    FROM eshop.orders
    WHERE occasion = occasion_id;

    -- 4) Count distinct currencies
    SELECT
        COUNT(DISTINCT o.currency_code)
    INTO
        currency_count
    FROM eshop.orders o
    WHERE o.occasion = occasion_id;

    IF currency_count = 1 THEN
        -- Single currency: compute sums directly
        SELECT
            o.currency_code,
            COALESCE(SUM(o.price),   0),
            COALESCE(SUM(pi.paid),   0),
            COALESCE(SUM(pi.returned),0)
        INTO
            single_cc,
            total_revenue,
            paid_revenue,
            returned_revenue
        FROM eshop.orders o
        LEFT JOIN eshop.payment_info pi ON pi.id = o.payment_info
        WHERE o.occasion = occasion_id
        GROUP BY o.currency_code;

        result_revenue    := paid_revenue + returned_revenue;
        remaining_balance := total_revenue - paid_revenue;

        revenue_section := E'===========\nPřehled tržeb:\n' ||
            E'    • Suma všech objednávek: '   || to_char(total_revenue,     'FM99999990.00') || ' ' || single_cc || E'\n' ||
            E'    • Suma přijatých částek: '  || to_char(paid_revenue,      'FM99999990.00') || ' ' || single_cc || E'\n' ||
            E'    • Suma vrácených částek: '  || to_char(returned_revenue,  'FM99999990.00') || ' ' || single_cc || E'\n' ||
            E'    • Výsledná částka: '         || to_char(result_revenue,    'FM99999990.00') || ' ' || single_cc || E'\n' ||
            E'    • Zbývající částka: '       || to_char(remaining_balance,'FM99999990.00') || ' ' || single_cc || E'\n';
    ELSE
        -- Multiple currencies: loop per currency
        revenue_section := E'===========\nPřehled tržeb podle měny:\n';
        FOR rec_rev IN
            SELECT
                o.currency_code,
                COALESCE(SUM(o.price),   0) AS total_revenue,
                COALESCE(SUM(pi.paid),   0) AS paid_revenue,
                COALESCE(SUM(pi.returned),0) AS returned_revenue
            FROM eshop.orders o
            LEFT JOIN eshop.payment_info pi ON pi.id = o.payment_info
            WHERE o.occasion = occasion_id
            GROUP BY o.currency_code
            ORDER BY o.currency_code
        LOOP
            result_revenue    := rec_rev.paid_revenue + rec_rev.returned_revenue;
            remaining_balance := rec_rev.total_revenue - rec_rev.paid_revenue;
            revenue_section := revenue_section ||
                E' - ' || rec_rev.currency_code || E':\n' ||
                E'    • Suma všech objednávek: '   || to_char(rec_rev.total_revenue,    'FM99999990.00') || ' ' || rec_rev.currency_code || E'\n' ||
                E'    • Suma přijatých částek: '  || to_char(rec_rev.paid_revenue,     'FM99999990.00') || ' ' || rec_rev.currency_code || E'\n' ||
                E'    • Suma vrácených částek: '  || to_char(rec_rev.returned_revenue, 'FM99999990.00') || ' ' || rec_rev.currency_code || E'\n' ||
                E'    • Výsledná částka: '         || to_char(result_revenue,           'FM99999990.00') || ' ' || rec_rev.currency_code || E'\n' ||
                E'    • Zbývající částka: '       || to_char(remaining_balance,       'FM99999990.00') || ' ' || rec_rev.currency_code || E'\n';
        END LOOP;
    END IF;

    -- 5) Products by type
    FOR rec_product_type IN
        SELECT
            pt.title   AS product_type,
            p.title    AS product_title,
            COUNT(opt.product) AS ordered_count
        FROM eshop.order_product_ticket opt
        JOIN eshop.products p          ON opt.product      = p.id
        JOIN eshop.product_types pt    ON p.product_type   = pt.id
        JOIN eshop.orders o            ON o.id             = opt."order"
        WHERE p.occasion = occasion_id
          AND o.state NOT IN ('storno','ordered')
        GROUP BY pt.title, p.title
        ORDER BY pt.title, p.title
    LOOP
        IF rec_product_type.product_type <> current_product_type THEN
            current_product_type := rec_product_type.product_type;
            product_type_section := product_type_section || E' - ' || current_product_type || E':\n';
        END IF;
        product_type_section := product_type_section ||
            E'    • ' || rec_product_type.product_title || E': ' || rec_product_type.ordered_count || E'\n';
    END LOOP;
    IF product_type_section = E'===========\nPočet zaplacených produktů podle typu:\n' THEN
        product_type_section := product_type_section || E' - Žádné zaplacené produkty.\n';
    END IF;

    -- 6) Assemble final report
    RETURN
        E'===========\n' ||
        E'Počet míst celkem: '     || to_char(total_spots,              'FM9999') || E'\n' ||
        E'Počet volných: '          || to_char(free_spots,               'FM9999') || E'\n' ||
        E'Počet obsazených: '       || to_char(booked_spots,             'FM9999') || E'\n' ||
        E'Počet objednaných: '      || to_char(total_tickets_ordered,    'FM9999') || E'\n' ||
        E'Počet zaplacených: '      || to_char(total_tickets_paid,       'FM9999') || E'\n' ||
        E'Počet odeslaných: '       || to_char(total_tickets_sent,       'FM9999') || E'\n' ||
        E'Počet využitých: '        || to_char(total_tickets_used,       'FM9999') || E'\n' ||
        E'Počet storno: '           || to_char(total_tickets_canceled,   'FM9999') || E'\n' ||
        E'===========\n' ||
        E'Počet objednávek celkem: '|| to_char(total_orders,             'FM9999') || E'\n' ||
        E'Objednáno: '              || to_char(ordered_orders,           'FM9999') || E'\n' ||
        E'Zaplaceno: '              || to_char(paid_orders,              'FM9999') || E'\n' ||
        E'Odesláno: '               || to_char(sent_orders,              'FM9999') || E'\n' ||
        E'Storno: '                 || to_char(canceled_orders,          'FM9999') || E'\n' ||
        product_type_section ||
        revenue_section ||
        E'===========';
EXCEPTION
    WHEN OTHERS THEN
        RETURN E'An unexpected error occurred: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;
