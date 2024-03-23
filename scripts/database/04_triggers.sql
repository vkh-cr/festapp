--03 enable webhooks in supabase dashboard

--https://supabase.com/partners/integrations/onesignal
--correct address
create trigger push_log_notifications
after insert on log_notifications for each row
execute function supabase_functions.http_request (
'https://kjdpmixlnhntmxjedpxh.supabase.co/functions/v1/notify',
'POST',
'{"Content-type":"application/json"}',
'{}',
'1000'
);