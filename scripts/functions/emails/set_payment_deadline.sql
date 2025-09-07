CREATE OR REPLACE FUNCTION public.set_payment_deadline(
    p_payment_info_id BIGINT,
    p_new_deadline TIMESTAMPTZ
)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
  order_details RECORD;
  v_interval INTERVAL;
  v_form_settings JSONB;
  reminder_interval_seconds BIGINT;
BEGIN
  -- This function now handles the entire process of rescheduling a payment deadline.

  -- 1. Find the order and related details (occasion, organization, unit, features)
  --    associated with the given payment_info ID.
  SELECT o.id, o.occasion, occ.organization, occ.unit, occ.features
  INTO order_details
  FROM eshop.orders o
  JOIN public.occasions occ ON o.occasion = occ.id
  WHERE o.payment_info = p_payment_info_id;

  -- If no corresponding order is found, exit the function.
  IF NOT FOUND THEN
    RETURN;
  END IF;

  -- 2. Delete any pre-existing 'TICKET_ORDER_REMINDER' for this specific order
  --    to prevent sending multiple or outdated reminders.
  DELETE FROM public.queue_emails
  WHERE code = 'TICKET_ORDER_REMINDER' AND (data->>'order_id')::bigint = order_details.id;

  -- 3. Update the payment_info record with the new deadline and reset the
  --    'current_version_reminded' flag to false. This makes the order
  --    eligible for a new reminder.
  UPDATE eshop.payment_info
  SET
    deadline = p_new_deadline,
    data = COALESCE(data, '{}'::jsonb) || '{"current_version_reminded": false}'::jsonb
  WHERE
    id = p_payment_info_id;

  -- 4. Check occasion features to see if reminders are enabled and get the timing.
  IF order_details.features IS NOT NULL THEN
    -- Find the 'form' object within the features JSON array.
    SELECT elem INTO v_form_settings
    FROM jsonb_array_elements(order_details.features) AS elem
    WHERE elem->>'code' = 'form';

    -- If the form feature is configured, reminder is enabled, and has an interval, extract it.
    IF v_form_settings IS NOT NULL AND
       (v_form_settings->>'reminder_is_enabled')::boolean IS TRUE AND
       v_form_settings->>'reminder_interval_seconds' IS NOT NULL
    THEN
        reminder_interval_seconds := (v_form_settings->>'reminder_interval_seconds')::bigint;
    END IF;
  END IF;

  -- 5. If the new deadline is in the future AND reminders are enabled (reminder_interval_seconds is set),
  --    create a new reminder email in the queue with the updated target time.
  IF p_new_deadline > NOW() AND reminder_interval_seconds IS NOT NULL THEN
    v_interval := make_interval(secs => reminder_interval_seconds);

    INSERT INTO public.queue_emails (
      target_time,
      code,
      data,
      organization,
      occasion,
      unit
    )
    VALUES (
      p_new_deadline - v_interval,
      'TICKET_ORDER_REMINDER',
      jsonb_build_object('order_id', order_details.id),
      order_details.organization,
      order_details.occasion,
      order_details.unit
    );
  END IF;

END;
$$;
