CREATE OR REPLACE FUNCTION public.get_occasion_users_for_editor(
    p_occasion_id BIGINT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    users_data JSONB;
    forms_data JSONB;
BEGIN
    -- Authorization check: Ensure the user has editor rights for the occasion.
    IF (SELECT get_is_editor_view_on_occasion(p_occasion_id)) <> TRUE AND (SELECT get_is_editor_order_view_on_occasion(p_occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to view this occasion''s data');
    END IF;

    -- 1. Get all users associated with the occasion.
    -- This query merges the full user_info and occasion_users rows into a single JSON object
    -- for each user, and then adds the form_id and order_created_at from the corresponding order.
    SELECT jsonb_agg(
        to_jsonb(ui) || to_jsonb(ou) ||
        jsonb_build_object(
            'form_id', order_info.form_id,
            'order_created_at', order_info.created_at -- Added order creation date
        )
    )
    INTO users_data
    FROM public.occasion_users ou
    JOIN public.user_info ui ON ou."user" = ui.id
    LEFT JOIN eshop.tickets t ON ou.ticket = t.id
    LEFT JOIN LATERAL (
        SELECT
            o.data->>'form' AS form_id,
            o.created_at AS created_at -- Selecting the order's creation date
        FROM eshop.order_product_ticket opt
        JOIN eshop.orders o ON opt."order" = o.id
        WHERE opt.ticket = t.id
        LIMIT 1
    ) AS order_info ON true
    WHERE ou.occasion = p_occasion_id;

    -- 2. Get all forms associated with the occasion, selecting only the specified fields.
    SELECT jsonb_agg(
        jsonb_build_object(
            'key', f.key,
            'type', f.type,
            'id', f.id,
            'title', f.title
            'link', f.link
        )
    )
    INTO forms_data
    FROM public.forms f
    WHERE f.occasion = p_occasion_id;

    -- Assemble the final JSONB object.
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Occasion users and forms retrieved successfully.',
        'data', jsonb_build_object(
            'occasion_users', COALESCE(users_data, '[]'::jsonb),
            'forms',          COALESCE(forms_data, '[]'::jsonb)
        )
    );
END;
$$;