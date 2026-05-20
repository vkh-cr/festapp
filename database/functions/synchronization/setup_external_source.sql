-- Setup an external sync source via HTTP (replaces dblink version).
-- Only needs the Supabase URL and public anon key — no database password.
CREATE OR REPLACE FUNCTION public.setup_external_source(
    p_source_name TEXT,
    p_supabase_url TEXT,
    p_anon_key TEXT,
    p_cron_schedule TEXT DEFAULT '*/5 * * * *'
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_job_name TEXT := 'sync_job_' || p_source_name;
BEGIN
    -- Security Check
    IF auth.role() <> 'service_role' AND session_user <> 'postgres' THEN
        RAISE EXCEPTION 'Access Denied: Service role required.';
    END IF;

    INSERT INTO public.external_sync_sources (source_name, supabase_url, anon_key, cron_schedule)
    VALUES (p_source_name, p_supabase_url, p_anon_key, p_cron_schedule)
    ON CONFLICT (source_name) DO UPDATE SET
        supabase_url = EXCLUDED.supabase_url,
        anon_key = EXCLUDED.anon_key,
        cron_schedule = EXCLUDED.cron_schedule;

    -- Gracefully unschedule if exists
    BEGIN
        PERFORM cron.unschedule(v_job_name);
    EXCEPTION WHEN OTHERS THEN
        NULL;
    END;

    PERFORM cron.schedule(
        v_job_name,
        p_cron_schedule,
        format('SELECT public.sync_source_via_http(%L)', p_source_name)
    );

    RETURN format('Source "%s" configured with %s schedule.', p_source_name, p_cron_schedule);
END;
$$;

-- Security Hardening
REVOKE EXECUTE ON FUNCTION public.setup_external_source(text, text, text, text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.setup_external_source(text, text, text, text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.setup_external_source(text, text, text, text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.setup_external_source(text, text, text, text) TO service_role;
