CREATE OR REPLACE FUNCTION public.queue_payment_reminders(p_occasion_id BIGINT, p_seconds_before_deadline BIGINT)
RETURNS VOID
SET search_path = public, extensions AS $$
DECLARE
  v_interval INTERVAL;
BEGIN
  -- First, delete any existing reminders of this type for the given occasion
  -- to avoid duplicates and to ensure a clean slate before inserting new ones.
  DELETE FROM public.queue_emails
  WHERE occasion = p_occasion_id AND code = 'TICKET_ORDER_REMINDER';

  -- Convert the seconds into an INTERVAL type for cleaner date arithmetic.
  v_interval := make_interval(secs => p_seconds_before_deadline);

  -- This statement finds all relevant payment_info records that meet all validation
  -- criteria (including form settings) and inserts corresponding reminder emails
  -- into the public.queue_emails table.
  INSERT INTO public.queue_emails (
    target_time,
    code,
    data,
    organization,
    occasion,
    unit
  )
  SELECT
    pi.deadline - v_interval, -- Calculate the exact time the reminder should be sent.
    'TICKET_ORDER_REMINDER',  -- The code for the ticket order reminder email template.
    jsonb_build_object(       -- A JSON payload with relevant IDs for the email template.
      'order_id', o.id
    ),
    occ.organization,         -- The organization associated with the occasion.
    o.occasion,               -- The ID of the occasion for the order.
    occ.unit                  -- The unit associated with the occasion.
  FROM
    eshop.payment_info pi
  JOIN
    eshop.orders o ON pi.id = o.payment_info -- Join to access order state and occasion.
  JOIN
    public.occasions occ ON o.occasion = occ.id -- Join to get organization, unit, and features.
  -- This lateral join efficiently finds the 'form' feature object from the JSON array in the occasion.
  -- It's a LEFT JOIN so that if the feature doesn't exist, the validation will correctly fail.
  LEFT JOIN LATERAL (
      SELECT elem AS feature
      FROM jsonb_array_elements(occ.features) elem
      WHERE elem->>'code' = 'form'
  ) form_settings ON TRUE
  -- LEFT JOIN to forms to check the form-specific reminder setting.
  -- The join might not find a match if the form key in the order is invalid or null.
  LEFT JOIN public.forms f ON f.key = (o.data->>'form')::uuid
  WHERE
    o.occasion = p_occasion_id                -- Filter for the specific occasion.
    AND o.state = 'ordered'                   -- Only include orders that are awaiting payment.
    AND pi.deadline IS NOT NULL               -- Ensure there is a deadline to calculate from.
    -- Only queue a reminder if the 'current_version_reminded' flag in the JSONB data
    -- is not explicitly set to true. This correctly handles cases where the flag is
    -- false, null, or the key does not exist.
    AND (pi.data->>'current_version_reminded')::boolean IS NOT TRUE
    -- START: New validation conditions for forms
    -- 1. The 'form' feature must be enabled on the occasion.
    AND (form_settings.feature->>'is_enabled')::boolean IS TRUE
    -- 2. The reminder setting for the 'form' feature must be enabled on the occasion.
    AND (form_settings.feature->>'reminder_is_enabled')::boolean IS TRUE
    -- 3. The reminder must be enabled on the specific form itself.
    --    COALESCE defaults to TRUE if the setting is missing on the form, allowing reminders by default.
    AND COALESCE((f.data->>'is_reminder_enabled')::boolean, TRUE) IS TRUE;
    -- END: New validation conditions for forms

  -- =========================================================================
  -- DEPOSIT REMINDERS
  -- For orders already paid with deposit (state='paid'), where remaining
  -- balance is still due. These get is_deposit_reminder flag in data.
  -- Target time = (occasion start_time - deposit_deadline_days) - reminder_interval
  -- =========================================================================
  INSERT INTO public.queue_emails (
    target_time,
    code,
    data,
    organization,
    occasion,
    unit
  )
  SELECT
    (occ.start_time - make_interval(days => (deposit_settings.feature->>'deposit_deadline_days')::int)) - v_interval,
    'TICKET_ORDER_REMINDER',
    jsonb_build_object(
      'order_id', o.id,
      'is_deposit_reminder', true
    ),
    occ.organization,
    o.occasion,
    occ.unit
  FROM
    eshop.payment_info pi
  JOIN
    eshop.orders o ON pi.id = o.payment_info
  JOIN
    public.occasions occ ON o.occasion = occ.id
  -- Find the 'deposit' feature from the occasion
  LEFT JOIN LATERAL (
      SELECT elem AS feature
      FROM jsonb_array_elements(occ.features) elem
      WHERE elem->>'code' = 'deposit'
  ) deposit_settings ON TRUE
  -- Find the 'form' feature for reminder settings
  LEFT JOIN LATERAL (
      SELECT elem AS feature
      FROM jsonb_array_elements(occ.features) elem
      WHERE elem->>'code' = 'form'
  ) form_settings ON TRUE
  LEFT JOIN public.forms f ON f.key = (o.data->>'form')::uuid
  WHERE
    o.occasion = p_occasion_id
    AND o.state = 'paid'                           -- Deposit was paid, order is in 'paid' state
    AND pi.deposit_amount IS NOT NULL              -- Order has a deposit
    AND pi.paid < pi.amount                        -- Remaining balance is still due
    -- Deposit feature must be enabled
    AND (deposit_settings.feature->>'is_enabled')::boolean IS TRUE
    -- Deadline type must not be on_site (on_site = pay at venue, no reminder needed)
    AND (deposit_settings.feature->>'deposit_deadline') IS DISTINCT FROM 'on_site'
    -- deposit_deadline_days must be set
    AND (deposit_settings.feature->>'deposit_deadline_days') IS NOT NULL
    -- occasion must have a start_time for deadline calculation
    AND occ.start_time IS NOT NULL
    -- Form feature validations (same as regular reminders)
    AND (form_settings.feature->>'is_enabled')::boolean IS TRUE
    AND (form_settings.feature->>'reminder_is_enabled')::boolean IS TRUE
    AND COALESCE((f.data->>'is_reminder_enabled')::boolean, TRUE) IS TRUE;

END;
$$ LANGUAGE plpgsql;
