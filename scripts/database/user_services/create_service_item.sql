CREATE OR REPLACE FUNCTION create_service_item(
  oc BIGINT,
  type TEXT,
  code TEXT,
  title TEXT,
  reference BIGINT
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
  existing_codes JSONB;
  new_service_item JSONB;
BEGIN

  IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Check if the code already exists within the specified type
  SELECT jsonb_agg(item)
  INTO existing_codes
  FROM public.occasions,
       jsonb_array_elements(COALESCE(occasions.services->type, '[]'::jsonb)) AS item
  WHERE occasions.id = oc
    AND (item->>'code') = code;

  IF existing_codes IS NOT NULL THEN
    -- If code exists, return an error response
    RETURN jsonb_build_object(
      'code', 400,
      'message', 'Code must be unique within the specified type'
    );
  END IF;

  -- Build the new service item JSON
  new_service_item := jsonb_build_object(
    'code', code,
    'title', title,
    'reference', reference
  );

  -- Update the occasion to add the new item to the specified type array in services
  UPDATE public.occasions
  SET services = jsonb_set(
    COALESCE(services, '{}'::jsonb),                    -- Ensure services is an empty JSON if NULL
    ARRAY[type],
    COALESCE(services->type, '[]'::jsonb) || new_service_item,
    true
  )
  WHERE id = oc;

  -- Return success response
  RETURN jsonb_build_object(
    'code', 200,
    'message', 'Service item created successfully'
  );
END;
$$;
