CREATE OR REPLACE FUNCTION public.update_email_template(p_data jsonb)
RETURNS void
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
DECLARE
  v_occ   bigint;
  v_unit  bigint;
  v_org   bigint;
  v_code  text;
  v_existing_id bigint;
BEGIN
  -- Extract values from input JSON.
  v_occ  := CASE WHEN p_data ? 'occasion' THEN (p_data ->> 'occasion')::bigint ELSE NULL END;
  v_unit := CASE WHEN p_data ? 'unit' THEN (p_data ->> 'unit')::bigint ELSE NULL END;
  -- If no organization is provided, default to 1.
  v_org  := CASE WHEN p_data ? 'organization' THEN (p_data ->> 'organization')::bigint ELSE 1 END;
  v_code := p_data ->> 'code';

  -- Check if the current user is allowed to view/edit this occasion.
  IF (SELECT get_is_editor_on_occasion(oc)) <> TRUE AND (SELECT get_is_editor_order_on_occasion(oc)) <> TRUE THEN
     RAISE EXCEPTION 'User is not editor view.';
  END IF;

  -- Try to find an existing email template matching the given context and code.
  SELECT id
    INTO v_existing_id
  FROM public.email_templates
  WHERE
    ((occasion = v_occ) OR (occasion IS NULL AND v_occ IS NULL))
    AND ((unit = v_unit) OR (unit IS NULL AND v_unit IS NULL))
    AND ((organization = v_org) OR (organization IS NULL AND v_org IS NULL))
    AND code = v_code
  LIMIT 1;

  IF FOUND THEN
    -- Update the existing record.
    UPDATE public.email_templates
    SET
      html    = p_data ->> 'html',
      subject = p_data ->> 'subject',
      title   = p_data ->> 'title'
    WHERE id = v_existing_id;
  ELSE
    -- Insert a new record.
    INSERT INTO public.email_templates (
      html,
      occasion,
      subject,
      organization,
      code,
      unit,
      title
    )
    VALUES (
      p_data ->> 'html',
      v_occ,
      p_data ->> 'subject',
      v_org,
      v_code,
      v_unit,
      p_data ->> 'title'
    );
  END IF;
END;
$$;
