CREATE OR REPLACE FUNCTION setup_crons(p_project_url TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $func$
BEGIN
  -- Security Check
  IF auth.role() <> 'service_role' AND session_user <> 'postgres' THEN
      RAISE EXCEPTION 'Access Denied: Service role required.';
  END IF;

  -- Schedule the apply_planned_changes cron job (runs every minute)
  PERFORM cron.schedule(
    'apply_planned_changes',
    '*/1 * * * *',
    'SELECT apply_planned_changes()'
  );

  -- Schedule the synchronize_orders cron job (runs every 10 minutes)
  PERFORM cron.schedule(
      'synchronize_orders',
      '*/10 * * * *',
      format($$
        SELECT net.http_post(
          url := '%s/functions/v1/synchronize-orders'::text,
          body := jsonb_build_object('requestSecret', public.generate_request_secret(3600))
        );
      $$, p_project_url)
  );

  -- Schedule the process_email_queue cron job (runs every minute, if tasks exist)
  PERFORM cron.schedule(
      'process_email_queue',
      '*/1 * * * *',
      format(
        $$
          -- This query will only execute the http_post if the get_due_queue_emails() function
          -- returns a JSON array with one or more items.
          -- This is a more explicit check than 'IS NOT NULL' and directly verifies
          -- that there are emails to process.
          SELECT net.http_post(
            url := '%s/functions/v1/send-email',
            body := jsonb_build_object('processQueue', true, 'requestSecret', public.generate_request_secret(3600))
          )
          WHERE jsonb_array_length(public.get_due_queue_emails()) > 0;
        $$,
        p_project_url
      )
    );
END;
$func$;
