CREATE OR REPLACE FUNCTION get_all_occasions_for_edit(unit_id bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  occasion_data jsonb;
BEGIN
  -- Step 1: Verify that the unit exists
  IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = unit_id) THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Unit not found'
    );
  END IF;

  -- Step 2: Check if the caller is a manager or editor of the unit
  IF NOT EXISTS (
      SELECT 1 FROM public.unit_users
      WHERE "user" = auth.uid()
        AND unit = unit_id
        AND (is_manager = true OR is_editor = true OR is_editor_view = true)
  ) THEN
    RETURN jsonb_build_object('code', 403);
  END IF;

  -- Step 3: Aggregate occasions for the unit including the first form for each occasion.
  SELECT jsonb_agg(
    jsonb_build_object(
      'id', o.id,
      'title', o.title,
      'created_at', o.created_at,
      'updated_at', o.updated_at,
      'data', o.data,
      'description', o.description,
      'is_hidden', o.is_hidden,
      'is_open', o.is_open,
      'start_time', o.start_time,
      'end_time', o.end_time,
      'link', o.link,
      'organization', o.organization,
      'services', o.services,
      'unit', o.unit,
      'features', o.features,
      -- Subquery to fetch the first form for the occasion (if any)
      'form', (
         SELECT row_to_json(f)
         FROM public.forms f
         WHERE f.occasion = o.id
         ORDER BY f.id
         LIMIT 1
      )
    )
  )
  INTO occasion_data
  FROM public.occasions o
  WHERE o.unit = unit_id;

  -- Step 4: If no occasions were found, return an empty array.
  IF occasion_data IS NULL THEN
    occasion_data := '[]'::jsonb;
  END IF;

  -- Step 5: Return the aggregated JSON response with a 200 code.
  RETURN jsonb_build_object(
    'code', 200,
    'data', occasion_data
  );
END;
$$ LANGUAGE plpgsql;
