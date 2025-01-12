CREATE OR REPLACE FUNCTION get_tickets_with_details(order_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    tickets JSONB;
BEGIN
    SELECT jsonb_agg(ticket_detail)
    INTO tickets
    FROM (
        SELECT DISTINCT ON (t.id)
            t.id,
            t.ticket_symbol,
            t.occasion,
            t.note,
            t.state,
            b.title AS table_title,
            (
                SELECT jsonb_agg(ticket_prod)
                FROM (
                    SELECT
                        opt2.id,
                        opt2.product,
                        s.title AS spot_title,
                        (
                            SELECT g.value->>'title'
                            FROM jsonb_array_elements(bp.groups) AS g(value)
                            WHERE (g.value->>'id')::bigint = (
                                SELECT (o2.value->>'group')::bigint
                                FROM jsonb_array_elements(bp.objects) AS o2(value)
                                WHERE (o2.value->>'id')::bigint = s.id
                                  AND o2.value->>'type' = 'spot'
                                LIMIT 1
                            )
                            LIMIT 1
                        ) AS spot_group_title
                    FROM eshop.order_product_ticket opt2
                    LEFT JOIN eshop.spots s
                        ON s.order_product_ticket = opt2.id
                    LEFT JOIN eshop.blueprints bp
                        ON bp.id = s.blueprint
                    WHERE opt2.ticket = t.id
                ) ticket_prod
            ) AS order_product_ticket
        FROM eshop.order_product_ticket opt
        JOIN eshop.tickets t
            ON t.id = opt.ticket
        LEFT JOIN public.occasions o
            ON o.id = t.occasion
        LEFT JOIN eshop.blueprints b
            ON b.occasion = o.id
        WHERE opt."order" = order_id
        ORDER BY t.id
    ) ticket_detail;

    RETURN tickets;
END;
$$;