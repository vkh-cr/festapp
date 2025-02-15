CREATE OR REPLACE FUNCTION get_all_occasions(unit_id bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  occasion_data jsonb;
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = unit_id) THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Unit not found'
    );
  END IF;

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
      'place', o.place,
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
  WHERE o.unit = unit_id
    AND o.is_hidden = false;

  IF occasion_data IS NULL THEN
    occasion_data := '[]'::jsonb;
  END IF;

  RETURN jsonb_build_object(
    'code', 200,
    'data', occasion_data
  );
END;
$$ LANGUAGE plpgsql;
