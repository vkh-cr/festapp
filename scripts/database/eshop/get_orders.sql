CREATE OR REPLACE FUNCTION get_orders(
    form_link TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    blueprint_id BIGINT;
    occasion_id BIGINT;
    spotsData JSONB;
    productsData JSONB;
    ticketsData JSONB;
    ordersData JSONB;
    orderProductTicketsData JSONB;
    paymentInfoData JSONB;
BEGIN
    -- Resolve blueprint_id using form_link
    SELECT blueprint
    INTO blueprint_id
    FROM public.forms
    WHERE link = form_link;

    -- Check if form_link is valid
    IF blueprint_id IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'Form key does not exist or is not linked to a blueprint');
    END IF;

    -- Fetch occasion_id for the blueprint
    SELECT occasion
    INTO occasion_id
    FROM eshop.blueprints
    WHERE id = blueprint_id;

    -- Authorization check
    IF (SELECT get_is_editor_on_occasion(occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to access this occasion');
    END IF;

    -- Fetch spots where order_product_ticket is not NULL
    SELECT jsonb_agg(jsonb_build_object(
        'id', s.id,
        'title', s.title,
        'product', s.product,
        'order_product_ticket', s.order_product_ticket,
        'state', CASE
            WHEN s.order_product_ticket IS NOT NULL THEN 'ordered'
            WHEN s.secret IS NOT NULL AND s.secret_expiration_time > now() THEN 'selected'
            ELSE 'available'
        END
    ))
    INTO spotsData
    FROM eshop.spots s
    WHERE s.occasion = occasion_id
      AND s.order_product_ticket IS NOT NULL;

    -- Fetch all products linked to the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', p.id,
        'title', p.title,
        'price', p.price,
        'type', pt.type,
        'description', pt.description
    ))
    INTO productsData
    FROM eshop.products p
    JOIN eshop.product_types pt ON pt.id = p.product_type
    WHERE pt.occasion = occasion_id;

    -- Fetch tickets linked to the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', t.id,
        'created_at', t.created_at,
        'ticket_symbol', t.ticket_symbol,
        'state', t.state,
        'note', t.note
    ))
    INTO ticketsData
    FROM eshop.tickets t
    WHERE t.occasion = occasion_id;

    -- Fetch orders linked to the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', o.id,
        'created_at', o.created_at,
        'updated_at', o.updated_at,
        'price', o.price,
        'state', o.state,
        'currency_code', o.currency_code,
        'data', o.data,
        'payment_info', o.payment_info
    ))
    INTO ordersData
    FROM eshop.orders o
    WHERE o.occasion = occasion_id;

    -- Extract order IDs from ordersData JSONB
    WITH order_ids AS (
        SELECT (order_obj->>'id')::BIGINT AS id
        FROM jsonb_array_elements(ordersData) order_obj
    )
    -- Fetch relevant order-product-ticket data based on extracted order IDs
    SELECT jsonb_agg(jsonb_build_object(
        'id', opt.id,
        'order', opt."order",
        'product', opt.product,
        'ticket', opt.ticket,
        'created_at', opt.created_at
    ))
    INTO orderProductTicketsData
    FROM eshop.order_product_ticket opt
    WHERE opt."order" IN (SELECT id FROM order_ids);

    -- Fetch payment information linked to the orders
    SELECT jsonb_agg(jsonb_build_object(
        'id', pi.id,
        'created_at', pi.created_at,
        'bank_account', pi.bank_account,
        'variable_symbol', pi.variable_symbol,
        'amount', pi.amount,
        'paid', pi.paid,
        'deadline', pi.deadline,
        'currency_code', pi.currency_code
    ))
    INTO paymentInfoData
    FROM eshop.payment_info pi
    WHERE pi.id IN (
        SELECT DISTINCT (order_obj->>'payment_info')::BIGINT
        FROM jsonb_array_elements(ordersData) order_obj
    );

    -- Return combined data
    RETURN jsonb_build_object(
        'code', 200,
        'data', jsonb_build_object(
            'spots', COALESCE(spotsData, '[]'::jsonb),
            'products', COALESCE(productsData, '[]'::jsonb),
            'tickets', COALESCE(ticketsData, '[]'::jsonb),
            'orders', COALESCE(ordersData, '[]'::jsonb),
            'order_product_ticket', COALESCE(orderProductTicketsData, '[]'::jsonb),
            'payment_info', COALESCE(paymentInfoData, '[]'::jsonb)
        )
    );
END;
$$;
