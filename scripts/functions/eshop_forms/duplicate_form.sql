CREATE OR REPLACE FUNCTION duplicate_form(p_old_form_id bigint)
RETURNS bigint
LANGUAGE plpgsql
AS $$
DECLARE
  new_form_id bigint;
  rec record;
  new_bp_id bigint;
BEGIN
  ------------------------------------------------------------------
  -- 1. Duplicate the main form record for the new occasion.
  --    - The link and key are regenerated to ensure they are unique.
  --    - The title is modified to indicate it's a copy.
  --    - Blueprint relationships are preserved if they exist in the original.
  ------------------------------------------------------------------
  SELECT * INTO rec
  FROM public.forms
  WHERE id = p_old_form_id;

  -- This assumes that if a blueprint is duplicated, the mapping is handled by the calling function.
  -- For a standalone duplication, the blueprint might be null or copied directly.
  -- In the context of duplicate_occasion, the blueprint ID is resolved outside.
  -- For simplicity here, we will assume blueprint is copied directly if not provided.
  -- However, the call from duplicate_occasion will handle this correctly.

  INSERT INTO public.forms
    (created_at, data, key, occasion, type, bank_account, deadline_duration_seconds, is_open, link, blueprint, header, header_off, updated_at, title)
  VALUES (
    now(),
    rec.data,
    uuid_generate_v4(),
    rec.occasion,
    rec.type,
    rec.bank_account,
    rec.deadline_duration_seconds,
    rec.is_open,
    rec.link || '-copy-' || substring(md5(random()::text) from 1 for 8), -- New unique link
    rec.blueprint,
    rec.header,
    rec.header_off,
    now(),
    rec.title || ' (Copy)'
  )
  RETURNING id INTO new_form_id;


  ------------------------------------------------------------------
  -- 2. Duplicate all associated form fields.
  --    - The 'form' foreign key is updated to point to the new_form_id.
  --    - The 'product_type' foreign key is copied directly, as product types
  --      are tied to the occasion, which is already correctly set.
  ------------------------------------------------------------------
  INSERT INTO public.form_fields
    (created_at, title, description, data, type, is_required, form, is_hidden, "order", product_type, is_ticket_field)
  SELECT
    now(),
    title,
    description,
    data,
    type,
    is_required,
    new_form_id,
    is_hidden,
    "order",
    product_type,
    is_ticket_field
  FROM public.form_fields
  WHERE form = p_old_form_id;

  RETURN new_form_id;
END;
$$;