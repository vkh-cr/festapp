CREATE OR REPLACE FUNCTION setup_triggers(p_supabase_id TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
  -- Create "handle_updated_at" triggers on tables that need to update the "updated_at" column.
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON events
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';
  
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON icons
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';
  
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON information
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';
  
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';
  
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON occasions
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';
  
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON places
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';
  
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON user_info
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')';

  -- Create push_log_notifications trigger using the provided Supabase ID.
  EXECUTE format($$
    CREATE TRIGGER push_log_notifications
    AFTER INSERT ON log_notifications
    FOR EACH ROW
    EXECUTE FUNCTION supabase_functions.http_request(
      'https://%s.supabase.co/functions/v1/notify',
      'POST',
      '{"Content-type": "application/json"}',
      '{}',
      '1000'
    )
  $$, p_supabase_id);
END;
$$;
