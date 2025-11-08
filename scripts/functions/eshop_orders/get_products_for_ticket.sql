CREATE OR REPLACE FUNCTION public.get_products_for_ticket(
  ticket_id bigint
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER AS $$
DECLARE
  v_occasion_id bigint;
  v_order_json jsonb;
  v_payment_info_json jsonb;
  v_ticket jsonb;
  v_latest_sent_at timestamptz;
  v_is_newer_available boolean := FALSE;
  v_order_id bigint;
  latest_history_data jsonb;
  reference_history_data jsonb;
BEGIN
  -- Find the order containing the ticket and LEFT JOIN its associated payment_info.
  SELECT
    o.id,
    o.occasion,
    to_jsonb(o),
    to_jsonb(pi)
  INTO
    v_order_id,
    v_occasion_id,
    v_order_json,
    v_payment_info_json
  FROM eshop.orders AS o
  LEFT JOIN eshop.payment_info AS pi ON o.payment_info = pi.id
  WHERE EXISTS (
    SELECT 1
    FROM   jsonb_array_elements(o.data->'tickets') AS t
    WHERE  (t->>'id')::bigint = ticket_id
  );

  -- Check if the order was found.
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'code',    404,
      'message', 'Ticket not found'
    );
  END IF;

  -- Permission check.
  IF NOT get_is_editor_order_view_on_occasion(v_occasion_id) THEN
    RETURN jsonb_build_object(
      'code',    403,
      'message', 'Not authorized to view this ticket'
    );
  END IF;

  -- Extract the full JSON object for the specified ticket from the order's data.
  SELECT t
  INTO   v_ticket
  FROM   jsonb_array_elements(v_order_json->'data'->'tickets') AS t
  WHERE  (t->>'id')::bigint = ticket_id;

  -- Get the data of the latest history entry
  SELECT data INTO latest_history_data
  FROM eshop.orders_history
  WHERE "order" = v_order_id
  ORDER BY created_at DESC LIMIT 1;

  -- Get the data and timestamp of the latest SENT history entry
  SELECT
    jsonb_build_object(
        'data', oh.data,
        'state', oh.state,
        'price', oh.price,
        'currency_code', oh.currency_code
    ),
    oh.created_at
  INTO reference_history_data, v_latest_sent_at
  FROM eshop.orders_history AS oh
  WHERE oh.order = v_order_id AND (oh.data->>'is_sent_to_customer')::boolean IS TRUE
  ORDER BY oh.created_at DESC LIMIT 1;

  -- If no sent record was found, get the oldest record as the reference
  IF NOT FOUND THEN
      SELECT jsonb_build_object(
        'data', oh.data,
        'state', oh.state,
        'price', oh.price,
        'currency_code', oh.currency_code
      )
      INTO reference_history_data
      FROM eshop.orders_history AS oh
      WHERE oh.order = v_order_id
      ORDER BY oh.created_at ASC LIMIT 1;
  END IF;

  -- Compare product IDs and prices between the latest and reference history entries
  IF latest_history_data IS NOT NULL AND reference_history_data IS NOT NULL THEN
      v_is_newer_available :=
          -- Use the new function to compare product sets including prices.
          -- This will return true if either the products or their prices have changed.
          extract_history_products_with_price(latest_history_data) <> extract_history_products_with_price(reference_history_data->'data');
  END IF;


  -- Build the simplified and comprehensive JSONB response object.
  RETURN jsonb_build_object(
    'code', 200,
    'data', jsonb_build_object(
      'ticket', v_ticket,
      'order', v_order_json,
      'payment_info', v_payment_info_json,
      'order_history', jsonb_build_object(
          'latest_sent_at', v_latest_sent_at,
          'is_newer_version_available', v_is_newer_available
      ),
      'reference_order_data', reference_history_data
    )
  );
EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object(
    'code',    500,
    'message', SQLERRM
  );
END;
$$;
