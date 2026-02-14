-- Function A: SYNC (Using pgp_sym_decrypt)
CREATE OR REPLACE FUNCTION public.sync_source_via_dblink(p_target_source_name TEXT DEFAULT NULL)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
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
    v_synced_ids BIGINT[]; -- Track processed IDs for deletion
BEGIN
    -- Security Check
    IF auth.role() <> 'service_role' AND session_user <> 'postgres' THEN
        RAISE EXCEPTION 'Access Denied: Service role required.';
    END IF;

    FOR r_source IN 
        SELECT * FROM public.external_sync_sources 
        WHERE (p_target_source_name IS NULL OR source_name = p_target_source_name)
    LOOP
        v_synced_ids := ARRAY[]::BIGINT[]; -- Reset for this source

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
             v_query := 'SELECT o.id, o.link, o.title, o.description, o.data, o.start_time, o.end_time, o.is_open, o.is_hidden, o.is_promoted, o.features, o.created_at, (SELECT f.link FROM public.forms f WHERE f.occasion = o.id ORDER BY f.is_open DESC, f.id LIMIT 1) as form_link FROM public.occasions o WHERE o.is_open = true AND o.is_hidden = false AND o.is_promoted = true';
             IF r_map.remote_org_id IS NOT NULL THEN
                 v_query := v_query || ' AND o.organization = ' || r_map.remote_org_id;
             END IF;
             IF r_map.remote_unit_id IS NOT NULL THEN
                 v_query := v_query || ' AND o.unit = ' || r_map.remote_unit_id;
             END IF;
             
             FOR r_occ IN 
                SELECT * FROM dblink(v_conn_str, v_query) 
                AS remote_data(
                    id bigint, 
                    link text, title text, description text, data jsonb, 
                    start_time timestamptz, end_time timestamptz, 
                    is_open boolean, is_hidden boolean, is_promoted boolean, 
                    features jsonb, created_at timestamptz,
                    form_link text 
                )
             LOOP
                 v_synced_ids := array_append(v_synced_ids, r_occ.id); -- Track ID
                 v_remaining_places := (r_occ.data->>'remaining_places')::INTEGER;
                 
                 -- CACHE UPDATE: Use source_name + external_id (r_occ.id)
                 INSERT INTO public.external_occasions_cache (external_id, link, remaining_places, raw_data, last_synced_at, source_name)
                 VALUES (r_occ.id, r_occ.link, v_remaining_places, row_to_json(r_occ)::jsonb, NOW(), r_source.source_name)
                 ON CONFLICT (source_name, external_id) DO UPDATE SET
                    link = EXCLUDED.link,
                    remaining_places = EXCLUDED.remaining_places,
                    raw_data = EXCLUDED.raw_data,
                    last_synced_at = NOW();

                 -- Preserve Features
                 SELECT COALESCE(jsonb_agg(elem), '[]'::jsonb) INTO v_features
                 FROM jsonb_array_elements(r_occ.features) elem
                 WHERE elem->>'code' <> 'form';

                 -- Find existing form feature
                 SELECT elem INTO v_local_data 
                 FROM jsonb_array_elements(r_occ.features) elem
                 WHERE elem->>'code' = 'form'
                 LIMIT 1;

                 -- Determine Link
                 IF (v_local_data->>'use_external_form')::boolean = true OR 
                    (v_local_data->>'formUseExternal')::boolean = true OR
                    (v_local_data->'data'->>'use_external_form')::boolean = true OR
                    (v_local_data->'data'->>'formUseExternal')::boolean = true 
                 THEN
                     v_external_link := COALESCE(
                        v_local_data->>'external_form_link', 
                        v_local_data->>'formExternalLink',
                        v_local_data->'data'->>'external_form_link',
                        v_local_data->'data'->>'formExternalLink'
                     );
                 ELSE
                     v_external_link := r_map.remote_link_base || '/form/' || COALESCE(r_occ.form_link, r_occ.link);
                 END IF;
                 
                 -- Append enforced Form feature
                 v_features := v_features || jsonb_build_array(jsonb_build_object(
                    'code', 'form', 
                    'is_enabled', true, 
                    'data', jsonb_build_object(
                        'use_external_form', true, 
                        'external_form_link', v_external_link
                    )
                 ));

                 v_local_data := r_occ.data;
                 IF v_local_data IS NULL THEN v_local_data := '{}'::jsonb; END IF;
                 IF v_remaining_places IS NOT NULL THEN
                    v_local_data := jsonb_set(v_local_data, '{remaining_places}', to_jsonb(v_remaining_places));
                 END IF;
                 
                 -- OCCASION UPDATE: Use external_source + external_id
                 INSERT INTO public.occasions (
                    link, title, description, data, start_time, end_time, 
                    is_open, is_hidden, is_promoted, 
                    organization, unit, features, 
                    created_at, updated_at,
                    external_source, external_id
                 )
                 VALUES (
                    r_occ.link, r_occ.title, r_occ.description, v_local_data, 
                    r_occ.start_time, r_occ.end_time,
                    r_occ.is_open, r_occ.is_hidden, r_occ.is_promoted,
                    r_map.target_org_id, r_map.target_unit_id, v_features,
                    r_occ.created_at, NOW(),
                    r_source.source_name, r_occ.id
                 )
                 ON CONFLICT (external_source, external_id) DO UPDATE SET
                    link = EXCLUDED.link, 
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

        -- DELETION LOGIC (Per Source)
        -- Delete any occasions for this source that were NOT present in the synced batch
        IF array_length(v_synced_ids, 1) > 0 THEN
             DELETE FROM public.occasions 
             WHERE external_source = r_source.source_name 
               AND NOT (external_id = ANY(v_synced_ids));
             
             DELETE FROM public.external_occasions_cache
             WHERE source_name = r_source.source_name
               AND NOT (external_id = ANY(v_synced_ids));
        ELSE
             -- If no IDs were synced (e.g. source is empty or everything was filtered out),
             -- delete all local copies for this source to reflect that state.
             DELETE FROM public.occasions WHERE external_source = r_source.source_name;
             DELETE FROM public.external_occasions_cache WHERE source_name = r_source.source_name;
        END IF;

    END LOOP;
    RETURN format('Synced %s occasions from %s.', v_count, COALESCE(p_target_source_name, 'ALL Sources'));
EXCEPTION WHEN OTHERS THEN
    RETURN format('Error: %s', SQLERRM);
END;
$$;

-- Security Hardening
REVOKE EXECUTE ON FUNCTION public.sync_source_via_dblink(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.sync_source_via_dblink(text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.sync_source_via_dblink(text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.sync_source_via_dblink(text) TO service_role;
