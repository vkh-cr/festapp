-- Function A: SYNC (Using pgp_sym_decrypt)
CREATE OR REPLACE FUNCTION public.sync_source_via_dblink(p_target_source_name TEXT DEFAULT NULL)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    r_source RECORD;
    r_map RECORD;
    v_password TEXT;
    v_conn_str TEXT;
    v_query TEXT;
    r_occ RECORD;
    v_external_link TEXT;
    v_features JSONB;
    v_local_data JSONB;
    v_remaining_places INTEGER;
    v_count INTEGER := 0;
    v_enc_key TEXT := 'festapp_internal_sync_key'; -- Internal Key
BEGIN
    -- Security Check
    IF auth.role() <> 'service_role' AND session_user <> 'postgres' THEN
        RAISE EXCEPTION 'Access Denied: Service role required.';
    END IF;

    FOR r_source IN 
        SELECT * FROM public.external_sync_sources 
        WHERE (p_target_source_name IS NULL OR source_name = p_target_source_name)
    LOOP
        -- Decrypt Password
        BEGIN
            v_password := pgp_sym_decrypt(r_source.encrypted_password::bytea, v_enc_key);
        EXCEPTION WHEN OTHERS THEN
            RAISE NOTICE 'Failed to decrypt password for source %', r_source.source_name;
            CONTINUE;
        END;
        
        v_conn_str := format('host=%s port=%s dbname=%s user=%s password=%s', 
                             r_source.src_host, r_source.src_port, r_source.src_db, r_source.src_user, v_password);

        FOR r_map IN SELECT * FROM public.external_sync_maps WHERE source_name = r_source.source_name
        LOOP
             -- Subquery to get Form Link
             v_query := 'SELECT o.link, o.title, o.description, o.data, o.start_time, o.end_time, o.is_open, o.is_hidden, o.is_promoted, o.features, o.created_at, (SELECT f.link FROM public.forms f WHERE f.occasion = o.id ORDER BY f.is_open DESC, f.id LIMIT 1) as form_link FROM public.occasions o WHERE o.is_open = true AND o.is_hidden = false';
             IF r_map.remote_org_id IS NOT NULL THEN
                 v_query := v_query || ' AND o.organization = ' || r_map.remote_org_id;
             END IF;
             IF r_map.remote_unit_id IS NOT NULL THEN
                 v_query := v_query || ' AND o.unit = ' || r_map.remote_unit_id;
             END IF;
             
             FOR r_occ IN 
                SELECT * FROM dblink(v_conn_str, v_query) 
                AS remote_data(
                    link text, title text, description text, data jsonb, 
                    start_time timestamptz, end_time timestamptz, 
                    is_open boolean, is_hidden boolean, is_promoted boolean, 
                    features jsonb, created_at timestamptz,
                    form_link text 
                )
             LOOP
                 v_remaining_places := (r_occ.data->>'remaining_places')::INTEGER;
                 INSERT INTO public.external_occasions_cache (link, remaining_places, raw_data, last_synced_at, source_name)
                 VALUES (r_occ.link, v_remaining_places, row_to_json(r_occ)::jsonb, NOW(), r_source.source_name)
                 ON CONFLICT (link) DO UPDATE SET
                    remaining_places = EXCLUDED.remaining_places,
                    raw_data = EXCLUDED.raw_data,
                    last_synced_at = NOW();

                 -- Use Form Link specifically
                 v_external_link := r_map.remote_link_base || '/form/' || COALESCE(r_occ.form_link, r_occ.link);
                 v_features := jsonb_build_array(jsonb_build_object(
                    'code', 'form', 
                    'is_enabled', true, 
                    'data', jsonb_build_object(
                        'formUseExternal', true, 
                        'formExternalLink', v_external_link
                    )
                 ));

                 v_local_data := r_occ.data;
                 IF v_local_data IS NULL THEN v_local_data := '{}'::jsonb; END IF;
                 IF v_remaining_places IS NOT NULL THEN
                    v_local_data := jsonb_set(v_local_data, '{remaining_places}', to_jsonb(v_remaining_places));
                 END IF;
                 
                 INSERT INTO public.occasions (
                    link, title, description, data, start_time, end_time, 
                    is_open, is_hidden, is_promoted, 
                    organization, unit, features, 
                    created_at, updated_at
                 )
                 VALUES (
                    r_occ.link, r_occ.title, r_occ.description, v_local_data, 
                    r_occ.start_time, r_occ.end_time,
                    r_occ.is_open, r_occ.is_hidden, r_occ.is_promoted,
                    r_map.target_org_id, r_map.target_unit_id, v_features,
                    r_occ.created_at, NOW()
                 )
                 ON CONFLICT (link) DO UPDATE SET
                    title = EXCLUDED.title,
                    description = EXCLUDED.description,
                    data = EXCLUDED.data,
                    start_time = EXCLUDED.start_time,
                    end_time = EXCLUDED.end_time,
                    is_open = EXCLUDED.is_open,
                    is_hidden = EXCLUDED.is_hidden,
                    features = EXCLUDED.features,
                    organization = EXCLUDED.organization,
                    unit = EXCLUDED.unit,
                    updated_at = NOW();
                 v_count := v_count + 1;
             END LOOP;
        END LOOP;
    END LOOP;
    RETURN format('Synced %s occasions from %s.', v_count, COALESCE(p_target_source_name, 'ALL Sources'));
EXCEPTION WHEN OTHERS THEN
    RETURN format('Error: %s', SQLERRM);
END;
$$;

-- Security Hardening for sync_source_via_dblink
REVOKE EXECUTE ON FUNCTION public.sync_source_via_dblink(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.sync_source_via_dblink(text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.sync_source_via_dblink(text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.sync_source_via_dblink(text) TO service_role;
