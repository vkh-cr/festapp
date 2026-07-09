CREATE OR REPLACE FUNCTION get_is_speakers_enabled_on_occasion(p_occasion BIGINT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.occasions o
    CROSS JOIN LATERAL jsonb_array_elements(COALESCE(o.features, '[]'::jsonb)) feature
    WHERE o.id = p_occasion
      AND feature->>'code' = 'speakers'
      AND LOWER(COALESCE(feature->>'is_enabled', 'false')) = 'true'
  );
$$;
