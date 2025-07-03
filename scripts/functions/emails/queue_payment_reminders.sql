CREATE OR REPLACE FUNCTION public.queue_payment_reminders(p_occasion_id BIGINT, p_seconds_before_deadline BIGINT)
RETURNS VOID AS $$
DECLARE
  v_interval INTERVAL;
BEGIN
  -- First, delete any existing reminders of this type for the given occasion
  -- to avoid duplicates and to ensure a clean slate before inserting new ones.
  DELETE FROM public.queue_emails
  WHERE occasion = p_occasion_id AND code = 'TICKET_ORDER_REMINDER';

  -- Convert the seconds into an INTERVAL type for cleaner date arithmetic.
  v_interval := make_interval(secs => p_seconds_before_deadline);

  -- This statement finds all relevant payment_info records and inserts corresponding
  -- reminder emails into the public.queue_emails table.
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
    public.occasions occ ON o.occasion = occ.id -- Join to get organization and unit info.
  WHERE
    o.occasion = p_occasion_id                -- Filter for the specific occasion.
    AND o.state = 'ordered'                   -- Only include orders that are awaiting payment.
    AND pi.deadline IS NOT NULL               -- Ensure there is a deadline to calculate from.
    -- Only queue a reminder if the 'current_version_reminded' flag in the JSONB data
    -- is not explicitly set to true. This correctly handles cases where the flag is
    -- false, null, or the key does not exist.
    AND (pi.data->>'current_version_reminded')::boolean IS NOT TRUE;

END;
$$ LANGUAGE plpgsql;
