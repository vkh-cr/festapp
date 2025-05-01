CREATE OR REPLACE FUNCTION public.get_products_and_types_for_occasion(form_link text)
RETURNS json LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  product_types json;
  products json;
  occ_id bigint;
BEGIN
  PERFORM check_is_editor_order_view_via_form_link(form_link);

  SELECT f.occasion
    INTO occ_id
  FROM public.forms f
  WHERE f.link = form_link;

  SELECT json_agg(
           json_build_object(
             'id', pt.id,
             'type', pt.type,
             'title', pt.title
           )
         )
    INTO product_types
  FROM eshop.product_types pt
  WHERE pt.occasion = occ_id;

  SELECT json_agg(
           json_build_object(
             'id', p.id,
             'title', p.title,
             'description', p.description,
             'title_short', p.title_short,
             'product_type', p.product_type,
             'data', p.data,
             'price', p.price,
             'currency_code', p.currency_code,
             'is_hidden', p.is_hidden,
             'order', p."order",
             'maximum', p.maximum,
             'ordered_count', (
               SELECT count(*)
               FROM eshop.order_product_ticket opt
               WHERE opt.product = p.id
             ),
             'paid_count', (
               SELECT count(*)
               FROM eshop.order_product_ticket opt
               JOIN eshop.orders o ON o.id = opt.order
               WHERE opt.product = p.id
                 AND o.state = 'paid'
             ),
             'sent_count', (
               SELECT count(*)
               FROM eshop.order_product_ticket opt
               JOIN eshop.orders o ON o.id = opt.order
               WHERE opt.product = p.id
                 AND o.state = 'sent'
             )
           )
         )
    INTO products
  FROM eshop.products p
  WHERE p.product_type IN (
    SELECT pt.id
    FROM eshop.product_types pt
    WHERE pt.occasion = occ_id
  );

  RETURN json_build_object(
    'product_types', COALESCE(product_types, '[]'::json),
    'products', COALESCE(products, '[]'::json)
  );
END;
$$;
