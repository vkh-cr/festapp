CREATE OR REPLACE FUNCTION delete_service_item(
  oc BIGINT,
  type TEXT,
  code TEXT,
  force BOOLEAN DEFAULT false
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
  in_use BOOLEAN;
BEGIN
  IF (SELECT get_is_manager_on_occasion(oc)) <> TRUE THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Check if the code is in use in occasion_users for the same occasion and type
  SELECT EXISTS(
    SELECT 1
    FROM public.occasion_users
    WHERE occasion_users.occasion = oc
      AND occasion_users.services->type @> jsonb_build_array(jsonb_build_object('code', code))
  ) INTO in_use;

  -- If the code is in use and force is not true, return an error response
  IF in_use AND NOT force THEN
    RETURN jsonb_build_object(
      'code', 400,
      'message', 'Service item is in use and cannot be deleted without force'
    );
  END IF;

  -- If force is true, remove the same code from any matching occasion_user records
  IF force AND in_use THEN
    UPDATE public.occasion_users
    SET services = jsonb_set(
      services,
      ARRAY[type],
      (SELECT jsonb_agg(item)
       FROM jsonb_array_elements(services->type) AS item
       WHERE item->>'code' IS DISTINCT FROM code)
    )
    WHERE occasion_users.occasion = oc
      AND occasion_users.services->type @> jsonb_build_array(jsonb_build_object('code', code));
  END IF;

  -- Remove the item from the occasions.services->type array
  UPDATE public.occasions
  SET services = jsonb_set(
    services,
    ARRAY[type],
    (SELECT jsonb_agg(item)
     FROM jsonb_array_elements(services->type) AS item
     WHERE item->>'code' IS DISTINCT FROM code),
    true
  )
  WHERE id = oc;

  -- Return success response
  RETURN jsonb_build_object(
    'code', 200,
    'message', 'Service item deleted successfully'
  );
END;
$$;
