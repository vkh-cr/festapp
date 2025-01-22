CREATE OR REPLACE FUNCTION get_order_history(order_id bigint)
RETURNS jsonb SECURITY DEFINER AS $$
DECLARE
    occasion_id bigint;
    orderHistoryData jsonb;
BEGIN
    -- Retrieve the occasion associated with the order
    SELECT occasion INTO occasion_id FROM eshop.orders WHERE id = order_id;

    -- Check if the order exists and has an associated occasion
    IF occasion_id IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'Order not found or no associated occasion');
    END IF;

    -- Verify if the current user is an editor on the occasion
    IF NOT get_is_editor_on_occasion(occasion_id) THEN
        RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to view this order history');
    END IF;

    -- Fetch history items for the order and order them by created_at
    SELECT jsonb_agg(
        jsonb_build_object(
            'id', oh.id,
            'created_at', oh.created_at,
            'data', oh.data,
            'order', oh."order",
            'state', oh.state,
            'price', oh.price,
            'currency_code', oh.currency_code
        )
        ORDER BY oh.created_at -- Order inside the aggregation
    )
    INTO orderHistoryData
    FROM eshop.orders_history oh
    WHERE oh."order" = order_id;

    -- Check if no history was found
    IF orderHistoryData IS NULL THEN
        RETURN jsonb_build_object('code', 404, 'message', 'No history found for the specified order');
    END IF;

    -- Return the order history data
    RETURN jsonb_build_object(
        'code', 200,
        'data', orderHistoryData
    );
EXCEPTION WHEN OTHERS THEN
    -- Handle any exceptions
    RETURN jsonb_build_object(
        'code', 500,
        'message', SQLERRM,
        'detail', coalesce(SQLERRM, 'An unexpected error occurred')
    );
END;
$$ LANGUAGE plpgsql;
