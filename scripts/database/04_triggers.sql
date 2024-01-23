--03 enable webhooks in supabase dashboard

--https://supabase.com/partners/integrations/onesignal
create trigger push_notification_records
after insert on notification_records for each row
execute function supabase_functions.http_request (
'https://kjdpmixlnhntmxjedpxh.supabase.co/functions/v1/notify',
'POST',
'{"Content-type":"application/json"}',
'{}',
'1000'
);