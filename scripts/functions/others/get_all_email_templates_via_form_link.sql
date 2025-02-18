CREATE OR REPLACE FUNCTION public.get_all_email_templates_via_form_link(form_link text)
RETURNS jsonb
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
    occasion_id bigint;
    v_unit bigint;
    v_org  bigint;
    email_data jsonb;
    context jsonb;
BEGIN
    -- Retrieve the occasion ID from the forms table using the provided form link.
    SELECT f.occasion
      INTO occasion_id
      FROM public.forms f
      WHERE f.link = form_link;

    IF occasion_id IS NULL THEN
        RAISE EXCEPTION 'Form not found or no associated occasion.';
    END IF;

    -- Retrieve unit and organization from the occasion.
    SELECT o.unit, o.organization
      INTO v_unit, v_org
      FROM public.occasions o
      WHERE o.id = occasion_id;

    -- Build a JSON context with the occasion, unit, and organization.
    context := jsonb_build_object(
                  'occasion', occasion_id,
                  'unit', v_unit,
                  'organization', v_org
               );

    -- Call the updated function with the context parameter.
    email_data := public.get_all_email_templates(context);

    -- Enrich each email template with the current occasion, unit, and organization.
    email_data := (
      SELECT jsonb_agg(
        t || jsonb_build_object(
          'occasion', occasion_id,
          'unit', v_unit,
          'organization', v_org
        )
      )
      FROM jsonb_array_elements(email_data) AS t
    );

    RETURN email_data;
END;
$$;
