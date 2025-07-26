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
  -- Extract context values from the JSON parameter.
  -- Using `->>` and casting handles JSON nulls correctly, resulting in SQL NULL.
  v_occ := (p_context->>'occasion')::bigint;
  v_unit := (p_context->>'unit')::bigint;
  v_org  := (p_context->>'organization')::bigint;

  -- Retrieve the most specific email template based on a fallback strategy.
  -- The single query below finds all possible candidates and then sorts them by
  -- specificity to pick the best one, which is more efficient than running
  -- multiple separate queries.
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
      -- A template is a candidate if its context fields match the provided
      -- context OR if the template's field is NULL (making it a fallback).
      -- `IS NOT DISTINCT FROM` is used to correctly handle cases where context values are NULL.
      AND (et.occasion IS NOT DISTINCT FROM v_occ OR et.occasion IS NULL)
      AND (et.unit IS NOT DISTINCT FROM v_unit OR et.unit IS NULL)
      AND (et.organization IS NOT DISTINCT FROM v_org OR et.organization IS NULL)
  )
  SELECT to_jsonb(t)
  INTO email_template
  FROM (
    SELECT * FROM candidates
    ORDER BY
      -- The ORDER BY clause implements the fallback logic you described.
      -- A lower number in the CASE statement means a higher priority.

      -- 1. Prioritize templates that match the specific 'occasion'.
      --    A direct match (value 0) is better than a generic/NULL occasion (value 1).
      CASE WHEN occasion IS NOT DISTINCT FROM v_occ THEN 0 ELSE 1 END,

      -- 2. If occasions are equally specific (e.g., two templates match the occasion),
      --    prioritize the one that matches the specific 'unit'.
      CASE WHEN unit IS NOT DISTINCT FROM v_unit THEN 0 ELSE 1 END,

      -- 3. Finally, prioritize templates that match the specific 'organization'.
      CASE WHEN organization IS NOT DISTINCT FROM v_org THEN 0 ELSE 1 END,

      -- This sorting correctly implements the following fallback search path:
      --   - Best match for (occ, unit, org)
      --   - Fallback to best match for (occ, unit, NULL)
      --   - ...and so on, until it checks for:
      --   - (NULL, unit, org)  -- "just via unit and organization"
      --   - ...and then:
      --   - (NULL, NULL, org)  -- "just via organization"
      --   - ...and finally:
      --   - (NULL, NULL, NULL) -- "all are nulls"

      id -- Use ID as a stable tie-breaker if all else is equal
    LIMIT 1
  ) t;

  -- The logic for the email wrapper is similar but simpler.
  -- Retrieve the most specific email wrapper based on the provided context.
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
    -- A wrapper is a candidate if its context fields match or are NULL.
    WHERE (ew.unit IS NOT DISTINCT FROM v_unit OR ew.unit IS NULL)
      AND (ew.organization IS NOT DISTINCT FROM v_org OR ew.organization IS NULL)
    ORDER BY
         -- Order by specificity: a match on 'unit' is highest priority.
         CASE WHEN ew.unit IS NOT DISTINCT FROM v_unit THEN 0 ELSE 1 END,
         -- Then, a match on 'organization'.
         CASE WHEN ew.organization IS NOT DISTINCT FROM v_org THEN 0 ELSE 1 END,
         ew.id -- Tie-breaker
    LIMIT 1
  ) t;

  -- Build the final result object
  result := jsonb_build_object(
              'template', COALESCE(email_template, 'null'::jsonb),
              'wrapper',  COALESCE(email_wrapper, 'null'::jsonb)
            );
  RETURN result;
END;
$$;