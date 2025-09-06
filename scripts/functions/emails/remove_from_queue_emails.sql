CREATE OR REPLACE FUNCTION remove_from_queue_emails(task_id bigint)
RETURNS void AS $$
BEGIN
  DELETE FROM public.queue_emails
  WHERE id = task_id;
END;
$$ LANGUAGE plpgsql;