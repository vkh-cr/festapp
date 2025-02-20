CREATE OR REPLACE FUNCTION update_order_data_to_sent(order_id bigint)
RETURNS jsonb AS $$
BEGIN
    -- Update the data field's is_sent to true for the specified order
    UPDATE eshop.orders
    SET data = jsonb_set(data, '{is_sent}', 'true')
    WHERE id = order_id;

    -- Check if any rows were updated
    IF NOT FOUND THEN
        -- Return a failure message if no orders were updated
        RETURN jsonb_build_object('code', 404, 'message', 'Order not found');
    ELSE
        -- Return a success message with a status code 200
        RETURN jsonb_build_object('code', 200, 'message', 'Data updated to sent successfully');
    END IF;
EXCEPTION WHEN OTHERS THEN
    -- Rollback is automatic on exception
    RETURN jsonb_build_object(
        'code', 500,
        'message', SQLERRM,
        'detail', coalesce(SQLERRM, 'An unexpected error occurred')
    );
END;
$$ LANGUAGE plpgsql;
