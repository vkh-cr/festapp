CREATE OR REPLACE FUNCTION public.update_ticket_products_ws(
  p_ticket_id    bigint,
  p_product_ids  bigint[]
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
  v_old_ids          bigint[];
  v_new_ids          bigint[];

  -- for state logic
  v_paid             numeric;
  v_price            numeric;
  v_new_state        text;
BEGIN
  /* 0) Lookup & permission */
  SELECT opt."order", o.occasion, o.payment_info, o.currency_code, o.data, o.state
    INTO v_order_id, v_occasion_id, v_payment_info_id, v_currency_code, v_old_data, v_state
  FROM eshop.order_product_ticket AS opt
  JOIN eshop.orders              AS o   ON o.id = opt."order"
  WHERE opt.ticket = p_ticket_id
  LIMIT 1;
  IF NOT FOUND THEN
    RETURN jsonb_build_object('code',404,'message','Ticket not linked to any order');
  END IF;
  IF NOT get_is_editor_order_on_occasion(v_occasion_id) THEN
    RETURN jsonb_build_object('code',403,'message','Not authorized');
  END IF;

  /* compute old/new ID arrays and bail early if identical */
  -- CORRECTED: Guard against non-array jsonb values for 'tickets' and 'products'
  SELECT array_agg((product_obj->>'id')::bigint ORDER BY (product_obj->>'id')::bigint)
    INTO v_old_ids
  FROM jsonb_array_elements(
         CASE WHEN jsonb_typeof(v_old_data->'tickets') = 'array'
              THEN v_old_data->'tickets'
              ELSE '[]'::jsonb END
       ) AS ticket(ticket_obj)
  CROSS JOIN LATERAL jsonb_array_elements(
         CASE WHEN jsonb_typeof(ticket.ticket_obj->'products') = 'array'
              THEN ticket.ticket_obj->'products'
              ELSE '[]'::jsonb END
       ) AS prod(product_obj)
  WHERE (ticket.ticket_obj->>'id')::bigint = p_ticket_id;

  SELECT array_agg(pid ORDER BY pid)
    INTO v_new_ids
  FROM unnest(p_product_ids) AS pid;

  IF v_old_ids IS NOT DISTINCT FROM v_new_ids THEN
    RETURN jsonb_build_object('code',200,'data',v_old_data);
  END IF;

  /* 1) old subtotal */
  -- CORRECTED: Guard against non-array jsonb values to prevent "scalar" error.
  SELECT COALESCE(SUM((product_obj->>'price')::numeric),0)
    INTO v_sum_old
  FROM jsonb_array_elements(
         CASE WHEN jsonb_typeof(v_old_data->'tickets') = 'array'
              THEN v_old_data->'tickets'
              ELSE '[]'::jsonb END
       ) AS ticket(ticket_obj)
  CROSS JOIN LATERAL jsonb_array_elements(
         CASE WHEN jsonb_typeof(ticket.ticket_obj->'products') = 'array'
              THEN ticket.ticket_obj->'products'
              ELSE '[]'::jsonb END
       ) AS prod(product_obj)
  WHERE (ticket.ticket_obj->>'id')::bigint = p_ticket_id;

  /* 2) new products JSON + subtotal */
  SELECT
    jsonb_agg(jsonb_build_object(
      'id',            p.id,
      'type',          pt.type,
      'price',         p.price,
      'title',         p.title,
      'type_title',    pt.title,
      'currency_code', p.currency_code
    )),
    COALESCE(SUM(p.price),0)
  INTO v_products_json, v_sum_new
  FROM unnest(p_product_ids) AS pid
  JOIN eshop.products           AS p  ON p.id = pid
  LEFT JOIN eshop.product_types AS pt ON pt.id = p.product_type
  WHERE p.occasion = v_occasion_id;

  /* 3) rewrite just that ticket’s products array in orders.data */
  -- CORRECTED: Guard 'tickets' array and ensure new products list is '[]', not null.
  SELECT jsonb_set(
    v_old_data,
    '{tickets}',
    COALESCE(
      (
        SELECT jsonb_agg(
          CASE WHEN (tckt->>'id')::bigint = p_ticket_id
               THEN tckt || jsonb_build_object('products', COALESCE(v_products_json, '[]'::jsonb))
               ELSE tckt
          END
        )
        FROM jsonb_array_elements(
               CASE WHEN jsonb_typeof(v_old_data->'tickets') = 'array'
                    THEN v_old_data->'tickets'
                    ELSE '[]'::jsonb END
             ) AS tckt
      ),
      '[]'::jsonb
    )
  ) INTO v_new_data;

  UPDATE eshop.orders
     SET data = v_new_data
   WHERE id = v_order_id;

  /* 4) replace the link‐table rows, but keep one with product=NULL if empty */
  DELETE FROM eshop.order_product_ticket WHERE ticket = p_ticket_id;
  IF cardinality(p_product_ids) = 0 THEN
    INSERT INTO eshop.order_product_ticket("order", ticket, product)
    VALUES (v_order_id, p_ticket_id, NULL);
  ELSE
    INSERT INTO eshop.order_product_ticket("order", ticket, product)
      SELECT v_order_id, p_ticket_id, pid
        FROM unnest(p_product_ids) AS pid;
  END IF;

  /* 5) adjust payment_info.amount and order.price by the delta */
  v_diff := v_sum_new - v_sum_old;
  UPDATE eshop.payment_info
     SET amount = amount + v_diff
   WHERE id = v_payment_info_id;
  UPDATE eshop.orders
     SET price      = COALESCE(price,0) + v_diff,
         updated_at = now()
   WHERE id = v_order_id;

  /* 5a) decide new state based on money received */
  SELECT COALESCE(paid,0) INTO v_paid
    FROM eshop.payment_info
   WHERE id = v_payment_info_id;
  SELECT price INTO v_price
    FROM eshop.orders
   WHERE id = v_order_id;

  v_new_state := CASE
                   WHEN v_paid >= v_price THEN 'paid'
                   ELSE 'ordered'
                 END;

  -- if setting to paid but every ticket is already in 'sent', downgrade to 'sent'
  IF v_new_state = 'paid' THEN
    IF NOT EXISTS (
      SELECT 1 FROM eshop.tickets t
      JOIN eshop.order_product_ticket opt ON opt.ticket = t.id
      WHERE opt."order" = v_order_id AND t.state <> 'sent'
    ) THEN
      v_new_state := 'sent';
    END IF;
  END IF;

  -- apply the new state
  UPDATE eshop.orders
     SET state      = v_new_state,
         updated_at = now()
   WHERE id = v_order_id;

  -- if we just rolled a formerly‐paid/sent order back into 'ordered' because price increased,
  -- push the payment deadline out by 7 days
  IF v_new_state = 'ordered'
     AND v_diff    > 0
  THEN
    UPDATE eshop.payment_info
       SET deadline   = now() + INTERVAL '7 days'
     WHERE id = v_payment_info_id;
  END IF;

  /* 6) append history */
  INSERT INTO eshop.orders_history("order", data, state, price, currency_code)
  VALUES (
    v_order_id,
    v_new_data,
    (SELECT state FROM eshop.orders WHERE id = v_order_id),
    v_price,
    v_currency_code
  );

  RETURN jsonb_build_object('code',200,'data',v_new_data);

EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object('code',500,'message',SQLERRM);
END;
$$;
