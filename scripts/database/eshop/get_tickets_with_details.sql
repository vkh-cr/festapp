CREATE OR REPLACE FUNCTION get_tickets_with_details(order_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    tickets JSONB;
BEGIN
    SELECT jsonb_agg(DISTINCT t)
    INTO tickets
    FROM (
        SELECT
            t.id,
            t.ticket_symbol,
            t.occasion,
            t.note,
            (
                SELECT jsonb_agg(DISTINCT opt)
                FROM (
                    SELECT
                        opt.id,
                        opt.product
                    FROM eshop.order_product_ticket opt
                    WHERE opt.ticket = t.id
                ) opt
            ) AS order_product_ticket
        FROM eshop.tickets t
        INNER JOIN eshop.order_product_ticket opt ON t.id = opt.ticket
        WHERE opt."order" = order_id
        GROUP BY t.id, t.ticket_symbol, t.occasion, t.note
    ) t;

    RETURN tickets;
END;
$$;
