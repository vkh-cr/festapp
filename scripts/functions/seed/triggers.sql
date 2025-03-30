CREATE OR REPLACE FUNCTION setup_triggers(p_project_url TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $func$
BEGIN
  -- events
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON events';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON events
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- icons
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON icons';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON icons
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- information
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON information';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON information
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- news
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON news';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- occasions
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON occasions';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON occasions
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- places
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON places';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON places
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- user_info
  EXECUTE 'DROP TRIGGER IF EXISTS handle_updated_at ON user_info';
  EXECUTE '
    CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON user_info
    FOR EACH ROW
    EXECUTE FUNCTION moddatetime(''updated_at'')
  ';

  -- log_notifications HTTP trigger
  EXECUTE 'DROP TRIGGER IF EXISTS push_log_notifications ON log_notifications';
  EXECUTE format($trg$
    CREATE TRIGGER push_log_notifications
    AFTER INSERT ON log_notifications
    FOR EACH ROW
    EXECUTE FUNCTION supabase_functions.http_request(
      '%s/functions/v1/notify',
      'POST',
      '{"Content-type": "application/json"}',
      '{}',
      '1000'
    )
  $trg$, p_project_url);

END;
$func$;
