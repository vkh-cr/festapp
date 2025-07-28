CREATE OR REPLACE FUNCTION public.get_email_template_and_wrapper(p_code text, p_context jsonb)
RETURNS jsonb
LANGUAGE plpgsql
AS $$
DECLARE
  result jsonb;
  email_template jsonb;
  email_wrapper jsonb;
  v_occ bigint;
  v_unit bigint;
  v_org bigint;
BEGIN
  -- Extract context values. The ->> operator handles missing keys by returning SQL NULL.
  v_occ := (p_context->>'occasion')::bigint;
  v_unit := (p_context->>'unit')::bigint;
  v_org  := (p_context->>'organization')::bigint;

  -- Retrieve the most specific email template.
  WITH candidates AS (
    SELECT
      et.id,
      et.html,
      et.occasion,
      et.subject,
      et.organization,
      et.code,
      et.unit
    FROM public.email_templates et
    WHERE et.code = p_code
      -- This pattern finds all potential matches. A template is a valid candidate if,
      -- for each parameter, its value either matches the context or is NULL (generic fallback).
      -- If a context variable (e.g. v_unit) is NULL, it acts as a wildcard for that parameter.
      AND (v_occ IS NULL OR et.occasion IS NOT DISTINCT FROM v_occ OR et.occasion IS NULL)
      AND (v_unit IS NULL OR et.unit IS NOT DISTINCT FROM v_unit OR et.unit IS NULL)
      AND (v_org IS NULL OR et.organization IS NOT DISTINCT FROM v_org OR et.organization IS NULL)
  )
  SELECT to_jsonb(t)
  INTO email_template
  FROM (
    SELECT * FROM candidates
    ORDER BY
      -- Ranks candidates by specificity. A direct match (value 0) is better than a generic fallback (value 1).
      -- `IS NOT DISTINCT FROM` is used for NULL-safe equality comparison.
      CASE WHEN occasion IS NOT DISTINCT FROM v_occ THEN 0 ELSE 1 END,
      CASE WHEN unit IS NOT DISTINCT FROM v_unit THEN 0 ELSE 1 END,
      CASE WHEN organization IS NOT DISTINCT FROM v_org THEN 0 ELSE 1 END,
      id -- Stable tie-breaker
    LIMIT 1
  ) t;

  -- Retrieve the most specific email wrapper using the same logic.
  SELECT to_jsonb(t)
  INTO email_wrapper
  FROM (
    SELECT
      ew.id,
      ew.title,
      ew.organization,
      ew.unit,
      ew.html,
      ew.created_at
    FROM public.email_wrappers ew
    WHERE (v_unit IS NULL OR ew.unit IS NOT DISTINCT FROM v_unit OR ew.unit IS NULL)
      AND (v_org IS NULL OR ew.organization IS NOT DISTINCT FROM v_org OR ew.organization IS NULL)
    ORDER BY
         CASE WHEN ew.unit IS NOT DISTINCT FROM v_unit THEN 0 ELSE 1 END,
         CASE WHEN ew.organization IS NOT DISTINCT FROM v_org THEN 0 ELSE 1 END,
         ew.id
    LIMIT 1
  ) t;

  -- Build the final result object, ensuring JSON nulls are used for missing records.
  result := jsonb_build_object(
              'template', COALESCE(email_template, 'null'::jsonb),
              'wrapper',  COALESCE(email_wrapper, 'null'::jsonb)
            );
  RETURN result;
END;
$$;