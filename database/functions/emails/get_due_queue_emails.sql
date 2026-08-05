CREATE OR REPLACE FUNCTION public.get_due_queue_emails()
RETURNS jsonb
SET search_path = public, extensions AS $$
DECLARE
  v_result JSONB;
  -- Reminder grace period: TICKET_ORDER_REMINDER entries with target_time older
  -- than this are treated as stale and dropped during validation. Prevents email
  -- bursts after extended cron downtime (e.g. send-email auth failure backlog).
  c_reminder_grace_period CONSTANT INTERVAL := INTERVAL '7 days';
BEGIN
  -- This function uses Common Table Expressions (CTEs) to first identify all due emails,
  -- then validate them, delete the ones that are no longer valid, and finally return
  -- the ones that are valid and ready to be sent.

  WITH due_emails AS (
    -- 1. Get all emails that have reached their target_time.
    SELECT *
    FROM public.queue_emails
    WHERE target_time <= NOW()
      AND (processing_at IS NULL OR processing_at < NOW() - INTERVAL '10 minutes')
  ),
  validated_emails AS (
    -- 2. For each due email, check if it's still valid.
    SELECT
      de.id,
      CASE
        -- For ticket reminders, re-check the original conditions plus feature flags and the form-specific setting.
        WHEN de.code = 'TICKET_ORDER_REMINDER' THEN
          CASE
            -- Grace period: drop reminder entries whose target_time is older than
            -- c_reminder_grace_period (declared above). Without this, months-old
            -- backlog entries would fire all at once for events that already ended.
            WHEN de.target_time < NOW() - c_reminder_grace_period THEN FALSE
            -- Deposit reminder (has is_deposit_reminder flag)
            WHEN (de.data->>'is_deposit_reminder')::boolean IS TRUE THEN
              (
                o_dr.state = 'paid'
                AND pi_dr.deposit_amount IS NOT NULL
                AND pi_dr.paid < pi_dr.amount
                AND (deposit_feature.feature->>'is_enabled')::boolean IS TRUE
                AND (deposit_feature.feature->>'deposit_deadline') IS DISTINCT FROM 'on_site'
                AND (form_settings_dr.feature->>'is_enabled')::boolean IS TRUE
                AND (form_settings_dr.feature->>'reminder_is_enabled')::boolean IS TRUE
                AND (f_dr.id IS NULL OR COALESCE((f_dr.data->>'is_reminder_enabled')::boolean, TRUE) IS TRUE)
              )
            -- Regular payment reminder
            ELSE
              (
                o.state = 'ordered'
                AND pi.deadline IS NOT NULL
                AND COALESCE((pi.data->>'current_version_reminded')::boolean, false) IS FALSE
                AND (form_settings.feature->>'is_enabled')::boolean IS TRUE
                AND (form_settings.feature->>'reminder_is_enabled')::boolean IS TRUE
                AND (f.id IS NULL OR COALESCE((f.data->>'is_reminder_enabled')::boolean, false) IS TRUE)
              )
          END
        -- Paid emails are immediate sends, just validate order exists.
        WHEN de.code = 'TICKET_ORDER_PAYMENT_DONE' THEN
          TRUE
        -- All other email types are considered valid by default.
        ELSE
          TRUE
      END AS is_valid
    FROM due_emails de
    -- JOINs for regular TICKET_ORDER_REMINDER validation
    LEFT JOIN eshop.orders o ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS NOT TRUE AND o.id = (de.data->>'order_id')::bigint
    LEFT JOIN eshop.payment_info pi ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS NOT TRUE AND pi.id = o.payment_info
    LEFT JOIN public.occasions occ ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS NOT TRUE AND occ.id = o.occasion
    LEFT JOIN LATERAL (
        SELECT elem AS feature
        FROM jsonb_array_elements(occ.features) elem
        WHERE elem->>'code' = 'form'
    ) form_settings ON TRUE
    LEFT JOIN public.forms f ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS NOT TRUE AND f.id = o.form
    -- JOINs for deposit reminder validation (TICKET_ORDER_REMINDER with is_deposit_reminder flag)
    LEFT JOIN eshop.orders o_dr ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS TRUE AND o_dr.id = (de.data->>'order_id')::bigint
    LEFT JOIN eshop.payment_info pi_dr ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS TRUE AND pi_dr.id = o_dr.payment_info
    LEFT JOIN public.occasions occ_dr ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS TRUE AND occ_dr.id = o_dr.occasion
    LEFT JOIN LATERAL (
        SELECT elem AS feature
        FROM jsonb_array_elements(occ_dr.features) elem
        WHERE elem->>'code' = 'deposit'
    ) deposit_feature ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS TRUE
    LEFT JOIN LATERAL (
        SELECT elem AS feature
        FROM jsonb_array_elements(occ_dr.features) elem
        WHERE elem->>'code' = 'form'
    ) form_settings_dr ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS TRUE
    LEFT JOIN public.forms f_dr ON de.code = 'TICKET_ORDER_REMINDER' AND (de.data->>'is_deposit_reminder')::boolean IS TRUE AND f_dr.id = o_dr.form
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
