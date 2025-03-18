CREATE OR REPLACE FUNCTION public.get_products_and_types(p_occasion_id bigint)
RETURNS json AS $$
DECLARE
  product_types json;
  products json;
BEGIN
  -- Fetch product types filtered by occasion.
  SELECT json_agg(
           json_build_object(
             'id', pt.id,
             'type', pt.type
           )
         )
    INTO product_types
  FROM eshop.product_types pt
  WHERE pt.occasion = p_occasion_id;

  -- Fetch products whose product_type is in the filtered product types.
  SELECT json_agg(
           json_build_object(
             'id', p.id,
             'title', p.title,
             'title_short', p.title_short,
             'product_type', p.product_type,
             'data', p.data
           )
         )
    INTO products
  FROM eshop.products p
  WHERE p.product_type IN (
    SELECT pt.id
    FROM eshop.product_types pt
    WHERE pt.occasion = p_occasion_id
  );

  RETURN json_build_object(
    'product_types', COALESCE(product_types, '[]'::json),
    'products', COALESCE(products, '[]'::json)
  );
END;
$$ LANGUAGE plpgsql;
