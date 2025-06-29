CREATE OR REPLACE FUNCTION get_reservations(
    p_occasion_link TEXT,
    p_form_link TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_occasion_id BIGINT;
    v_form_key UUID;
    spotsData JSONB;
    productsData JSONB;
    productTypesData JSONB;
    ticketsData JSONB;
    ordersData JSONB;
    orderProductTicketsData JSONB;
    paymentInfoData JSONB;
    formsData JSONB;
BEGIN
    -- 1. Input Validation: Ensure at least one link is provided.
    IF p_occasion_link IS NULL AND p_form_link IS NULL THEN
        RETURN jsonb_build_object('code', 400, 'message', 'Either occasion_link or form_link must be provided');
    END IF;

    -- 2. Determine occasion_id based on the provided link.
    -- occasion_link has priority.
    IF p_occasion_link IS NOT NULL THEN
        SELECT id
        INTO v_occasion_id
        FROM public.occasions
        WHERE link = p_occasion_link;
    ELSE -- If occasion_link is NULL, use form_link
        SELECT occasion, key
        INTO v_occasion_id, v_form_key
        FROM public.forms
        WHERE link = p_form_link;
    END IF;

    -- 3. Check if a valid occasion was found.
    IF v_occasion_id IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'The provided link is invalid or not linked to any occasion');
    END IF;

    -- 4. Authorization check.
    IF (SELECT get_is_editor_order_view_on_occasion(v_occasion_id)) <> TRUE THEN
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
    WHERE s.occasion = v_occasion_id
      AND s.order_product_ticket IS NOT NULL;

    -- Fetch all products linked to the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', p.id,
        'title', p.title,
        'price', p.price,
        'currency_code', p.currency_code,
        'type', pt.type,
        'description', pt.description
    ))
    INTO productsData
    FROM eshop.products p
    JOIN eshop.product_types pt ON pt.id = p.product_type
    WHERE pt.occasion = v_occasion_id;

    -- Fetch product types for the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', pt.id,
        'type', pt.type,
        'title', pt.title,
        'description', pt.description
    ))
    INTO productTypesData
    FROM eshop.product_types pt
    WHERE pt.occasion = v_occasion_id;

    -- Fetch tickets linked to the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', t.id,
        'created_at', t.created_at,
        'ticket_symbol', t.ticket_symbol,
        'state', t.state,
        'note', t.note,
        'note_hidden', t.note_hidden
    ))
    INTO ticketsData
    FROM eshop.tickets t
    WHERE t.occasion = v_occasion_id;

    -- Fetch forms linked to the occasion
    SELECT jsonb_agg(jsonb_build_object(
        'id', f.id,
        'created_at', f.created_at,
        'data', f.data,
        'key', f.key,
        'occasion', f.occasion,
        'type', f.type,
        'deadline_duration_seconds', f.deadline_duration_seconds,
        'is_open', f.is_open,
        'link', f.link,
        'blueprint', f.blueprint,
        'header', f.header,
        'header_off', f.header_off,
        'updated_at', f.updated_at
    ))
    INTO formsData
    FROM public.forms f
    WHERE f.occasion = v_occasion_id;

    -- Fetch orders - this is the conditional part.
    -- If v_form_key is not NULL, it means we are filtering by form.
    IF v_form_key IS NOT NULL THEN
        SELECT jsonb_agg(jsonb_build_object(
            'id', o.id,
            'created_at', o.created_at,
            'updated_at', o.updated_at,
            'price', o.price,
            'state', o.state,
            'currency_code', o.currency_code,
            'data', o.data,
            'payment_info', o.payment_info,
            'note_hidden', o.note_hidden
        ))
        INTO ordersData
        FROM eshop.orders o
        WHERE o.occasion = v_occasion_id
          AND o.data->>'form' = v_form_key::TEXT; -- Filter by the form's key
    ELSE
        -- Original query if not filtering by form
        SELECT jsonb_agg(jsonb_build_object(
            'id', o.id,
            'created_at', o.created_at,
            'updated_at', o.updated_at,
            'price', o.price,
            'state', o.state,
            'currency_code', o.currency_code,
            'data', o.data,
            'payment_info', o.payment_info,
            'note_hidden', o.note_hidden
        ))
        INTO ordersData
        FROM eshop.orders o
        WHERE o.occasion = v_occasion_id;
    END IF;

    -- Extract order IDs from the (potentially filtered) ordersData JSONB
    WITH order_ids AS (
        SELECT (order_obj->>'id')::BIGINT AS id
        FROM jsonb_array_elements(COALESCE(ordersData, '[]'::jsonb)) order_obj
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
        'returned', pi.returned,
        'deadline', pi.deadline,
        'currency_code', pi.currency_code
    ))
    INTO paymentInfoData
    FROM eshop.payment_info pi
    WHERE pi.id IN (
        SELECT DISTINCT (order_obj->>'payment_info')::BIGINT
        FROM jsonb_array_elements(COALESCE(ordersData, '[]'::jsonb)) order_obj
        WHERE order_obj->>'payment_info' IS NOT NULL
    );

    -- Return combined data
    RETURN jsonb_build_object(
        'code', 200,
        'data', jsonb_build_object(
            'spots', COALESCE(spotsData, '[]'::jsonb),
            'products', COALESCE(productsData, '[]'::jsonb),
            'product_types', COALESCE(productTypesData, '[]'::jsonb),
            'tickets', COALESCE(ticketsData, '[]'::jsonb),
            'orders', COALESCE(ordersData, '[]'::jsonb),
            'order_product_ticket', COALESCE(orderProductTicketsData, '[]'::jsonb),
            'payment_info', COALESCE(paymentInfoData, '[]'::jsonb),
            'forms', COALESCE(formsData, '[]'::jsonb)
        )
    );
END;
$$;