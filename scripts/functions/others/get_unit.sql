CREATE OR REPLACE FUNCTION get_unit(unit_id bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  unit_data jsonb;
BEGIN
  -- Check if the unit exists
  IF NOT EXISTS (SELECT 1 FROM public.units WHERE id = unit_id) THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Unit not found'
    );
  END IF;

  SELECT jsonb_build_object(
    'id', u.id,
    'created_at', u.created_at,
    'title', u.title,
    'organization', u.organization,
    'data', u.data,
    'features', u.features,
    'occasions', (
       SELECT COALESCE(
         jsonb_agg(
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
             'form', (
                SELECT row_to_json(f)
                FROM public.forms f
                WHERE f.occasion = o.id
                ORDER BY f.id
                LIMIT 1
             )
           )
           ORDER BY o.start_time DESC
         ),
         '[]'::jsonb
       )
       FROM public.occasions o
       WHERE o.unit = u.id
         AND o.is_hidden = false
    )
  )
  INTO unit_data
  FROM public.units u
  WHERE u.id = unit_id;

  RETURN jsonb_build_object(
    'code', 200,
    'data', unit_data
  );
END;
$$ LANGUAGE plpgsql;
