CREATE OR REPLACE FUNCTION public.get_all_email_templates(p_context jsonb)
RETURNS jsonb
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
  email_data jsonb;
  v_occ  bigint;
  v_unit bigint;
  v_org  bigint;
BEGIN
  -- Extract context values from the JSON parameter
  v_occ  := CASE
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

  -- If an occasion is provided, perform the permission check.
  IF v_occ IS NOT NULL THEN
    PERFORM public.check_is_editor_view_on_occasion(v_occ);
  END IF;

  -- Retrieve email templates while ensuring only one template per code is returned.
  SELECT jsonb_agg(result)
    INTO email_data
  FROM (
    SELECT DISTINCT ON (et.code)
           et.id,
           et.html,
           et.occasion,
           et.subject,
           et.organization,
           et.code,
           et.unit
    FROM public.email_templates et
    WHERE (v_occ IS NOT NULL AND et.occasion = v_occ)
       OR (v_unit IS NOT NULL AND et.unit = v_unit AND et.occasion IS NULL)
       OR (v_org IS NOT NULL  AND et.organization = v_org AND et.unit IS NULL AND et.occasion IS NULL)
       OR (et.organization IS NULL AND et.unit IS NULL AND et.occasion IS NULL)
    ORDER BY et.code,
             CASE
               WHEN (v_occ IS NOT NULL AND et.occasion = v_occ) THEN 1
               WHEN (v_unit IS NOT NULL AND et.unit = v_unit AND et.occasion IS NULL) THEN 2
               WHEN (v_org IS NOT NULL  AND et.organization = v_org AND et.unit IS NULL AND et.occasion IS NULL) THEN 3
               WHEN (et.organization IS NULL AND et.unit IS NULL AND et.occasion IS NULL) THEN 4
               ELSE 5
             END,
             et.id
  ) result;

  IF email_data IS NULL THEN
    email_data := '[]'::jsonb;
  END IF;

  RETURN email_data;
END;
$$;
