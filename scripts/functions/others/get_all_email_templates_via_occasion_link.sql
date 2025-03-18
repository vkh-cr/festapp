CREATE OR REPLACE FUNCTION public.get_all_email_templates_via_occasion_link(occasion_link text)
RETURNS jsonb
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
    occasion_id   bigint;
    v_unit        bigint;
    v_org         bigint;
    email_data    jsonb;
    context       jsonb;
    occasion_data jsonb;
    unit_data     jsonb;
    org_data      jsonb;
    final_result  jsonb;
BEGIN
    -- Retrieve the occasion ID from the forms table using the provided form link.
    SELECT f.id
      INTO occasion_id
      FROM public.occasions f
      WHERE f.link = occasion_link;

    IF occasion_id IS NULL THEN
        RAISE EXCEPTION 'Occasion not found or no associated occasion.';
    END IF;

    -- Retrieve unit and organization IDs from the occasion.
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

    -- Call the updated function with the context parameter to retrieve templates.
    email_data := public.get_all_email_templates(context);

    -- Retrieve occasion details (id and title).
    SELECT jsonb_build_object('id', o.id, 'title', o.title)
      INTO occasion_data
      FROM public.occasions o
      WHERE o.id = occasion_id;

    -- Retrieve unit details (id and title).
    SELECT jsonb_build_object('id', u.id, 'title', u.title)
      INTO unit_data
      FROM public.units u
      WHERE u.id = v_unit;

    -- Retrieve organization details (id and title).
    SELECT jsonb_build_object('id', org.id, 'title', org.title)
      INTO org_data
      FROM public.organizations org
      WHERE org.id = v_org;

    -- Build final result JSON object containing the separate objects.
    final_result := jsonb_build_object(
                      'occasion',     occasion_data,
                      'unit',         unit_data,
                      'organization', org_data,
                      'templates',    email_data
                    );

    RETURN final_result;
END;
$$;
