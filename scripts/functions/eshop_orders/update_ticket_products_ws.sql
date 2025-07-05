CREATE OR REPLACE FUNCTION public.update_ticket_products_wsv2(
  p_ticket_id    bigint,
  p_products     jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER AS
$$
DECLARE
  v_order_id         bigint;
  v_occasion_id      bigint;
  v_payment_info_id  bigint;
  v_currency_code    char(3);
  v_state            text;
  v_old_data         jsonb;
  v_new_data         jsonb;
  v_sum_old          numeric := 0;
  v_sum_new          numeric := 0;
  v_diff             numeric;
  v_products_json    jsonb;
  v_old_products     jsonb;
  v_old_ids          bigint[];
  v_new_ids          bigint[];
  v_paid             numeric;
  v_price            numeric;
  v_new_state        text;
  v_occasion_features jsonb;
  v_form_settings     jsonb;
  v_deadline_duration_seconds bigint;
  v_new_deadline      timestamptz;
  v_current_products_for_compare jsonb;
BEGIN
  /* 0) Lookup & permission */
  SELECT opt."order", o.occasion, o.payment_info, o.currency_code, o.data, o.state, occ.features
    INTO v_order_id, v_occasion_id, v_payment_info_id, v_currency_code, v_old_data, v_state, v_occasion_features
  FROM eshop.order_product_ticket AS opt
  JOIN eshop.orders              AS o   ON o.id = opt."order"
  JOIN public.occasions          AS occ ON occ.id = o.occasion
  WHERE opt.ticket = p_ticket_id
  LIMIT 1;
  IF NOT FOUND THEN
    RETURN jsonb_build_object('code',404,'message','Ticket not linked to any order');
  END IF;
  IF NOT get_is_editor_order_on_occasion(v_occasion_id) THEN
    RETURN jsonb_build_object('code',403,'message','Not authorized');
  END IF;

  /* NEW: Check for negative prices in the input */
  IF EXISTS (
    SELECT 1
    FROM jsonb_array_elements(p_products) AS p
    WHERE (p.value->>'price')::numeric < 0
  ) THEN
    RETURN jsonb_build_object('code', 400, 'message', 'Product prices cannot be negative.');
  END IF;

  /* get old products for the ticket */
  SELECT jsonb_path_query_first(v_old_data, '$.tickets[*] ? (@.id == $tid).products', jsonb_build_object('tid', p_ticket_id))
  INTO v_old_products;
  v_old_products := COALESCE(v_old_products, '[]'::jsonb);

  /* compute old/new ID arrays and check for changes */
  SELECT array_agg((p->>'id')::bigint) INTO v_old_ids FROM jsonb_array_elements(v_old_products) p;
  SELECT array_agg((p->>'id')::bigint) INTO v_new_ids FROM jsonb_array_elements(p_products) p;

  -- Create a comparable representation of products (id and price)
  SELECT COALESCE(jsonb_agg(jsonb_build_object('id', p->'id', 'price', p->'price') ORDER BY (p->>'id')::int), '[]'::jsonb)
  INTO v_current_products_for_compare
  FROM jsonb_array_elements(v_old_products) p;

  -- If product sets (ID and price) are identical, bail early.
  IF v_current_products_for_compare = (
    SELECT COALESCE(jsonb_agg(jsonb_build_object('id', p->'id', 'price', p->'price') ORDER BY (p->>'id')::int), '[]'::jsonb)
    FROM jsonb_array_elements(p_products) p
  ) THEN
    RETURN jsonb_build_object('code',200,'data',v_old_data, 'message', 'No changes detected.');
  END IF;

  /* 1) old subtotal */
  SELECT COALESCE(SUM((p->>'price')::numeric), 0)
  INTO v_sum_old
  FROM jsonb_array_elements(v_old_products) AS p;

  /* 2) new products JSON + subtotal */
  SELECT
    jsonb_agg(jsonb_build_object(
      'id',            p_info.id,
      'type',          pt.type,
      'price',         (p_new.data->>'price')::numeric, -- Use price from input
      'title',         p_info.title,
      'type_title',    pt.title,
      'currency_code', p_info.currency_code
    )),
    COALESCE(SUM((p_new.data->>'price')::numeric), 0)
  INTO v_products_json, v_sum_new
  FROM jsonb_array_elements(p_products) AS p_new(data)
  JOIN eshop.products           AS p_info ON p_info.id = (p_new.data->>'id')::bigint
  LEFT JOIN eshop.product_types AS pt     ON pt.id = p_info.product_type
  WHERE p_info.occasion = v_occasion_id;

  v_products_json := COALESCE(v_products_json, '[]'::jsonb);

  /* 3) rewrite just that ticket’s products array in orders.data */
  SELECT jsonb_set(
    v_old_data,
    '{tickets}',
    (
      SELECT jsonb_agg(
        CASE WHEN (tckt->>'id')::bigint = p_ticket_id
             THEN jsonb_set(tckt, '{products}', v_products_json)
             ELSE tckt
        END
      )
      FROM jsonb_array_elements(v_old_data->'tickets') AS tckt
    )
  ) INTO v_new_data;

  UPDATE eshop.orders
     SET data = v_new_data
   WHERE id = v_order_id;

  /* 4) granularly update the link‐table rows */
  v_old_ids := COALESCE(v_old_ids, ARRAY[]::bigint[]);
  v_new_ids := COALESCE(v_new_ids, ARRAY[]::bigint[]);

  -- MODIFIED BLOCK START
  -- Before deleting order_product_ticket rows, nullify the reference in eshop.spots to de-allocate the spot.
  UPDATE eshop.spots s
     SET order_product_ticket = NULL
  WHERE s.order_product_ticket IN (
      SELECT opt.id
      FROM eshop.order_product_ticket opt
      WHERE opt.ticket = p_ticket_id
        AND opt.product IN (SELECT unnest FROM unnest(v_old_ids) EXCEPT SELECT unnest FROM unnest(v_new_ids))
  );

  -- Delete link-table rows for products that were removed.
  DELETE FROM eshop.order_product_ticket
  WHERE ticket = p_ticket_id
    AND product IN (SELECT unnest FROM unnest(v_old_ids) EXCEPT SELECT unnest FROM unnest(v_new_ids));

  -- Insert new link-table rows for products that were added.
  INSERT INTO eshop.order_product_ticket ("order", ticket, product)
  SELECT v_order_id, p_ticket_id, new_pid
    FROM (SELECT unnest FROM unnest(v_new_ids) EXCEPT SELECT unnest FROM unnest(v_old_ids)) AS t(new_pid)
  ON CONFLICT DO NOTHING;
  -- MODIFIED BLOCK END

  /* 5) adjust payment_info.amount and order.price by the delta */
  v_diff := v_sum_new - v_sum_old;
  IF v_diff <> 0 THEN
      UPDATE eshop.payment_info
         SET amount = amount + v_diff
       WHERE id = v_payment_info_id;
      UPDATE eshop.orders
         SET price      = COALESCE(price,0) + v_diff,
             updated_at = now()
       WHERE id = v_order_id;
  END IF;

  /* 5a) decide new state based on money received */
  SELECT COALESCE(pi.paid,0), o.price
    INTO v_paid, v_price
    FROM eshop.orders o
    LEFT JOIN eshop.payment_info pi ON o.payment_info = pi.id
   WHERE o.id = v_order_id;

  v_new_state := CASE
                   WHEN v_paid >= v_price AND v_price > 0 THEN 'paid'
                   WHEN v_price <= 0 THEN 'paid' -- Handle free orders
                   ELSE 'ordered'
                 END;

  IF v_new_state = 'paid' THEN
    IF NOT EXISTS (
      SELECT 1 FROM eshop.tickets t
      JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
      WHERE opt."order" = v_order_id AND t.state <> 'sent'
    ) THEN
      v_new_state := 'sent';
    END IF;
  END IF;

  UPDATE eshop.orders
     SET state      = v_new_state,
         updated_at = now()
   WHERE id = v_order_id;

  IF v_new_state = 'ordered' AND v_state <> 'ordered' THEN
    SELECT elem INTO v_form_settings
    FROM jsonb_array_elements(v_occasion_features) AS elem
    WHERE elem->>'code' = 'form';

    v_deadline_duration_seconds := COALESCE(
        (v_form_settings->>'deadline_duration_seconds')::bigint,
        604800
    );

    v_new_deadline := now() + make_interval(secs => v_deadline_duration_seconds);
    PERFORM public.set_payment_deadline(v_payment_info_id, v_new_deadline);
  END IF;

  /* 6) append history */
  INSERT INTO eshop.orders_history("order", data, state, price, currency_code)
  VALUES (
    v_order_id,
    v_new_data,
    v_new_state,
    (SELECT price FROM eshop.orders WHERE id = v_order_id),
    v_currency_code
  );

  RETURN jsonb_build_object('code',200,'data',v_new_data);

EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object('code',500,'message',SQLERRM);
END;
$$;