CREATE OR REPLACE FUNCTION public.get_due_queue_emails()
RETURNS jsonb AS $$
DECLARE
  v_result JSONB;
BEGIN
  -- This function uses Common Table Expressions (CTEs) to first identify all due emails,
  -- then validate them, delete the ones that are no longer valid, and finally return
  -- the ones that are valid and ready to be sent.

  WITH due_emails AS (
    -- 1. Get all emails that have reached their target_time.
    SELECT *
    FROM public.queue_emails
    WHERE target_time <= NOW()
  ),
  validated_emails AS (
    -- 2. For each due email, check if it's still valid.
    SELECT
      de.id,
      CASE
        -- For ticket reminders, re-check the original conditions plus feature flags and the form-specific setting.
        WHEN de.code = 'TICKET_ORDER_REMINDER' THEN
          (
            o.state = 'ordered'
            AND pi.deadline IS NOT NULL
            AND COALESCE((pi.data->>'current_version_reminded')::boolean, false) IS FALSE
            AND (form_settings.feature->>'is_enabled')::boolean IS TRUE
            AND (form_settings.feature->>'reminder_is_enabled')::boolean IS TRUE
            AND (f.id IS NULL OR COALESCE((f.data->>'is_reminder_enabled')::boolean, false) IS TRUE) -- Check form-level reminder setting, default to TRUE if form not found
          )
        -- All other email types are considered valid by default.
        ELSE
          TRUE
      END AS is_valid
    FROM due_emails de
    -- LEFT JOINs are used so that if any related record has been deleted,
    -- the validation will correctly fail.
    LEFT JOIN eshop.orders o ON de.code = 'TICKET_ORDER_REMINDER' AND o.id = (de.data->>'order_id')::bigint
    LEFT JOIN eshop.payment_info pi ON de.code = 'TICKET_ORDER_REMINDER' AND pi.id = o.payment_info
    LEFT JOIN public.occasions occ ON de.code = 'TICKET_ORDER_REMINDER' AND occ.id = o.occasion
    -- This lateral join efficiently finds the 'form' feature object from the JSON array in the occasion.
    LEFT JOIN LATERAL (
        SELECT elem AS feature
        FROM jsonb_array_elements(occ.features) elem
        WHERE elem->>'code' = 'form'
    ) form_settings ON TRUE
    -- Join the forms table based on the key stored in the order's data.
    LEFT JOIN public.forms f ON de.code = 'TICKET_ORDER_REMINDER' AND f.key = (o.data->>'form')
  ),
  deleted_emails AS (
    -- 3. Delete all emails that failed the validation check.
    --    The RETURNING clause gets the IDs of the deleted rows.
    DELETE FROM public.queue_emails
    WHERE id IN (SELECT id FROM validated_emails WHERE is_valid IS NOT TRUE)
    RETURNING id
  )
  -- 4. Select from the original set of due emails, but exclude the ones that were
  --    just deleted. Aggregate the final valid list into a JSONB array.
  SELECT jsonb_agg(de ORDER BY de.target_time ASC)
  INTO v_result
  FROM due_emails de
  WHERE de.id NOT IN (SELECT id FROM deleted_emails);

  RETURN v_result;

END;
$$ LANGUAGE plpgsql;
