CREATE OR REPLACE FUNCTION get_tickets_with_details(ticket_ids BIGINT[])
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    tickets JSONB;
BEGIN
    SELECT jsonb_agg(t)
    INTO tickets
    FROM (
        SELECT
            t.id,
            t.ticket_symbol,
            t.occasion,
            t.note,
            (
                SELECT jsonb_agg(opt)
                FROM (
                    SELECT
                        opt.id,
                        opt.product
                    FROM eshop.order_product_ticket opt
                    WHERE opt.ticket = t.id
                ) opt
            ) AS order_product_ticket
        FROM eshop.tickets t
        WHERE t.id = ANY(ticket_ids)
    ) t;

    RETURN tickets;
END;
$$;