CREATE OR REPLACE FUNCTION get_form_from_link_for_edit(form_link TEXT)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    allData JSON;
BEGIN

    PERFORM check_is_editor_order_view_via_form_link(form_link);

    SELECT jsonb_build_object(
        'code', 200,
        'data', jsonb_build_object(
            'id', f.id,
            'key', f.key,
            'is_open', f.is_open,
            'created_at', f.created_at,
            'data', f.data,
            'type', f.type,
            'header', f.header,
            'header_off', f.header_off,
            'occasion', f.occasion,
            'blueprint', f.blueprint,
            'link', f.link,
            -- Return full bank_account details as JSON instead of just the id:
            'bank_account', jsonb_build_object(
                                'account_number', ba.account_number,
                                'account_number_human_readable', ba.account_number_human_readable,
                                'title', ba.title,
                                'supported_currencies', ba.supported_currencies
                            ),
            'deadline_duration_seconds', f.deadline_duration_seconds,
            -- Optionally, if you want to keep the account_number separately, you can leave it:
            'account_number', ba.account_number,
            'available_bank_accounts', (
                SELECT jsonb_agg(
                    jsonb_build_object(
                        'account_number', ba_inner.account_number,
                        'account_number_human_readable', ba_inner.account_number_human_readable,
                        'title', ba_inner.title,
                        'supported_currencies', ba_inner.supported_currencies
                    )
                )
                FROM eshop.unit_bank_accounts uba
                JOIN eshop.bank_accounts ba_inner ON uba.bank_account = ba_inner.id
                WHERE uba.unit = (
                    SELECT o.unit
                    FROM public.occasions o
                    WHERE o.id = f.occasion
                )
            ),
            'fields', (
                SELECT jsonb_agg(
                    jsonb_build_object(
                        'id', ff.id,
                        'title', ff.title,
                        'description', ff.description,
                        'data', ff.data,
                        'type', ff.type,
                        'is_required', ff.is_required,
                        'is_hidden', ff.is_hidden,
                        'is_ticket_field', ff.is_ticket_field,
                        'order', ff."order",
                        'product_type_data', (
                            CASE
                                WHEN ff.product_type IS NOT NULL THEN
                                    jsonb_build_object(
                                        'id', pt.id,
                                        'title', pt.title,
                                        'description', pt.description,
                                        'type', pt.type,
                                        'data', pt.data,
                                        'occasion', pt.occasion,
                                        'products', (
                                            SELECT jsonb_agg(
                                                jsonb_build_object(
                                                    'id', p.id,
                                                    'occasion', p.occasion,
                                                    'title', p.title,
                                                    'description', p.description,
                                                    'price', p.price,
                                                    'currency_code', p.currency_code,
                                                    'is_hidden', p.is_hidden,
                                                    'order', p."order",
                                                    'ordered_count', (
                                                        SELECT count(*)
                                                        FROM eshop.order_product_ticket opt
                                                        WHERE opt.product = p.id
                                                    ),
                                                    'maximum', p.maximum
                                                ) ORDER BY COALESCE(p."order", 0)
                                            )
                                            FROM eshop.products p
                                            WHERE p.product_type = pt.id
                                        )
                                    )
                                ELSE NULL
                            END
                        )
                    ) ORDER BY COALESCE(ff."order", 0)
                )
                FROM public.form_fields ff
                LEFT JOIN eshop.product_types pt ON ff.product_type = pt.id
                WHERE ff.form = f.id
            )
        )
    )
    INTO allData
    FROM public.forms f
    LEFT JOIN eshop.bank_accounts ba ON f.bank_account = ba.id
    WHERE f.link = form_link;

    RETURN allData;
END;
$$;
