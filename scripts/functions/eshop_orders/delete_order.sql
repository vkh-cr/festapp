CREATE OR REPLACE FUNCTION delete_order(order_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  payment_info_id BIGINT;
  order_product_ticket_ids BIGINT[];
  ticket_ids BIGINT[];
  order_oc BIGINT;
  unit_id BIGINT;
  is_manager BOOLEAN;
BEGIN
  -- Retrieve the order's occasion and payment_info.
  SELECT occasion, payment_info
    INTO order_oc, payment_info_id
    FROM eshop.orders
   WHERE id = order_id;

  IF order_oc IS NULL THEN
    RAISE EXCEPTION 'Order not found.';
  END IF;

  -- Check if the current user is a manager on the order's occasion.
  SELECT unit
  INTO unit_id
  FROM public.occasions
  WHERE id = order_oc;

  PERFORM check_is_manager_on_unit(unit_id);

  -- Collect all order_product_ticket IDs for the order.
  SELECT ARRAY(SELECT id FROM eshop.order_product_ticket WHERE "order" = order_id)
    INTO order_product_ticket_ids;

  -- Collect all ticket IDs from the order_product_ticket rows.
  SELECT ARRAY(SELECT ticket
                 FROM eshop.order_product_ticket
                WHERE "order" = order_id
                  AND ticket IS NOT NULL)
    INTO ticket_ids;

  -- Free any spots that reference these order_product_ticket rows:
  -- set order_product_ticket, secret, and secret_expiration_time to NULL.
  UPDATE eshop.spots
     SET order_product_ticket      = NULL,
         secret                  = NULL,
         secret_expiration_time  = NULL,
         updated_at              = NOW()
   WHERE order_product_ticket = ANY(order_product_ticket_ids);

  -- Delete the related order_product_ticket entries.
  DELETE FROM eshop.order_product_ticket WHERE "order" = order_id;

  -- Delete the related tickets.
  DELETE FROM eshop.tickets WHERE id = ANY(ticket_ids);

  -- Delete order history rows.
  DELETE FROM eshop.orders_history WHERE "order" = order_id;

  -- If a payment_info row exists, first free it from the order reference, then delete it.
  IF payment_info_id IS NOT NULL THEN
    UPDATE eshop.orders
       SET payment_info = NULL
     WHERE id = order_id;

    DELETE FROM eshop.payment_info WHERE id = payment_info_id;
  END IF;

  -- Finally, delete the order record.
  DELETE FROM eshop.orders WHERE id = order_id;

  -- Return success response.
  RETURN JSONB_BUILD_OBJECT('code', 200, 'message', 'Order successfully deleted.');

EXCEPTION WHEN OTHERS THEN
  -- In case of any error, return an error JSON and rollback.
  RETURN JSONB_BUILD_OBJECT('code', 500, 'message', SQLERRM);
END;
$$;
