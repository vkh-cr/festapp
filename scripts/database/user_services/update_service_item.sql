CREATE OR REPLACE FUNCTION update_service_item(
  oc BIGINT,
  type TEXT,
  code TEXT,
  new_title TEXT,
  new_reference BIGINT
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
  updated_services JSONB;
BEGIN

  IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Check if the code exists within the specified type
  IF NOT EXISTS (
    SELECT 1
    FROM public.occasions,
         jsonb_array_elements(occasions.services->type) AS item
    WHERE occasions.id = oc
      AND (item->>'code') = code
  ) THEN
    -- If code does not exist, return an error response
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Service item not found'
    );
  END IF;

  -- Update the specified service item
  updated_services := (
    SELECT jsonb_agg(
      CASE
        WHEN (item->>'code') = code THEN
          item || jsonb_build_object('title', new_title, 'reference', new_reference)
        ELSE
          item
      END
    )
    FROM public.occasions,
         jsonb_array_elements(occasions.services->type) AS item
    WHERE occasions.id = oc
  );

  -- Apply the updated services JSON to the specified type
  UPDATE public.occasions
  SET services = jsonb_set(
    services,
    ARRAY[type],
    updated_services,
    true
  )
  WHERE id = oc;

  -- Return success response
  RETURN jsonb_build_object(
    'code', 200,
    'message', 'Service item updated successfully'
  );
END;
$$;
