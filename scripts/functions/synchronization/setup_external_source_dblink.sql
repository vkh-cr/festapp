-- Function B: SETUP (Using pgp_sym_encrypt and graceful unschedule)
CREATE OR REPLACE FUNCTION public.setup_external_source_dblink(
    p_source_name TEXT,
    p_host TEXT,
    p_user TEXT,
    p_password TEXT,
    p_port INTEGER DEFAULT 5432,
    p_db TEXT DEFAULT 'postgres',
    p_cron_schedule TEXT DEFAULT '*/5 * * * *'
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_job_name TEXT := 'sync_job_' || p_source_name;
    v_enc_key TEXT := 'festapp_internal_sync_key'; -- Internal Key
    v_encrypted_pass TEXT;
BEGIN
    -- Security Check
    IF auth.role() <> 'service_role' AND session_user <> 'postgres' THEN
        RAISE EXCEPTION 'Access Denied: Service role required.';
    END IF;

    -- Encrypt Password
    v_encrypted_pass := pgp_sym_encrypt(p_password, v_enc_key);

    INSERT INTO public.external_sync_sources (source_name, src_host, src_user, src_port, src_db, encrypted_password, cron_schedule)
    VALUES (p_source_name, p_host, p_user, p_port, p_db, v_encrypted_pass, p_cron_schedule)
    ON CONFLICT (source_name) DO UPDATE SET
        src_host = EXCLUDED.src_host,
        src_user = EXCLUDED.src_user,
        src_port = EXCLUDED.src_port,
        src_db = EXCLUDED.src_db,
        encrypted_password = EXCLUDED.encrypted_password,
        cron_schedule = EXCLUDED.cron_schedule;

    -- Gracefully Unschedule if exists
    BEGIN
        PERFORM cron.unschedule(v_job_name);
    EXCEPTION WHEN OTHERS THEN
        NULL; -- Ignore if job doesn't exist
    END;

    PERFORM cron.schedule(
        v_job_name,
        p_cron_schedule,
        format('SELECT public.sync_source_via_dblink(%L)', p_source_name)
    );

    RETURN format('Source "%s" configured with %s schedule.', p_source_name, p_cron_schedule);
END;
$$;

-- Security Hardening for setup_external_source_dblink
REVOKE EXECUTE ON FUNCTION public.setup_external_source_dblink(text, text, text, text, integer, text, text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.setup_external_source_dblink(text, text, text, text, integer, text, text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.setup_external_source_dblink(text, text, text, text, integer, text, text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.setup_external_source_dblink(text, text, text, text, integer, text, text) TO service_role;
