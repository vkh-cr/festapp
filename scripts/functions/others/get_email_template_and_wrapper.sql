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
  -- Extract context values from the JSON parameter
  v_occ := CASE
             WHEN p_context ? 'occasion' AND (p_context->>'occasion') IS NOT NULL
             THEN (p_context->>'occasion')::bigint
             ELSE NULL
           END;
  v_unit := CASE
              WHEN p_context ? 'unit' AND (p_context->>'unit') IS NOT NULL
              THEN (p_context->>'unit')::bigint
              ELSE NULL
            END;
  v_org  := CASE
              WHEN p_context ? 'organization' AND (p_context->>'organization') IS NOT NULL
              THEN (p_context->>'organization')::bigint
              ELSE NULL
            END;

  -- Retrieve the email template based on the provided context
  SELECT to_jsonb(t)
    INTO email_template
  FROM (
    SELECT et.id,
           et.html,
           et.occasion,
           et.subject,
           et.organization,
           et.code,
           et.unit
    FROM public.email_templates et
    WHERE et.code = p_code
      AND (
           (v_occ IS NOT NULL AND et.occasion = v_occ)
        OR (v_unit IS NOT NULL AND et.unit = v_unit AND et.occasion IS NULL)
        OR (v_org  IS NOT NULL AND et.organization = v_org AND et.unit IS NULL AND et.occasion IS NULL)
        OR (et.organization IS NULL AND et.unit IS NULL AND et.occasion IS NULL)
      )
    ORDER BY
         CASE
           WHEN (v_occ IS NOT NULL AND et.occasion = v_occ) THEN 1
           WHEN (v_unit IS NOT NULL AND et.unit = v_unit AND et.occasion IS NULL) THEN 2
           WHEN (v_org  IS NOT NULL AND et.organization = v_org AND et.unit IS NULL AND et.occasion IS NULL) THEN 3
           WHEN (et.organization IS NULL AND et.unit IS NULL AND et.occasion IS NULL) THEN 4
           ELSE 5
         END,
         et.id
    LIMIT 1
  ) t;

  -- Retrieve the email wrapper based on the provided context
  SELECT to_jsonb(t)
    INTO email_wrapper
  FROM (
    SELECT ew.id,
           ew.title,
           ew.organization,
           ew.unit,
           ew.html,
           ew.created_at
    FROM public.email_wrappers ew
    ORDER BY
         CASE
           WHEN (v_unit IS NOT NULL AND ew.unit = v_unit) THEN 1
           WHEN (v_org IS NOT NULL AND ew.organization = v_org AND ew.unit IS NULL) THEN 2
           WHEN (ew.organization IS NULL AND ew.unit IS NULL) THEN 3
           ELSE 4
         END,
         ew.id
    LIMIT 1
  ) t;

  result := jsonb_build_object(
              'template', COALESCE(email_template, 'null'::jsonb),
              'wrapper',  COALESCE(email_wrapper, 'null'::jsonb)
            );
  RETURN result;
END;
$$;
