#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"
readonly DECISIONS_FILE="${FESTAPP_A_IDENTITY_DECISIONS_FILE:-/var/lib/festapp-rehearsal-evidence/identity-decisions-v4.json}"
readonly EXPECTED_FILE_SHA256="474795575e9d4bd585a553cc8555e16abfc639995c23fff7727fc6951924c7b3"
readonly EXPECTED_DECISION_SHA256="df6793daa2f9d7a715668d7adfc3e40688d0d4897f53852ad97e19a8b9932275"
readonly SOURCE_REF="lwfpdjxsdmkfyrzqbrlk"
readonly SOURCE_FINGERPRINT="d660dd0ff521640a34034ea57acf368241a556806fbd171f0f4366f5c68a5f3e"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_REHEARSAL_ACK:-}" == "prepare-a-deterministic-id-mappings" ]] ||
  fail "set FESTAPP_REHEARSAL_ACK=prepare-a-deterministic-id-mappings"
[[ "$(id -u)" == "0" ]] || fail "run as root on rehearsal host"
[[ "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "refusing unexpected host"
[[ -f "$DECISIONS_FILE" ]] || fail "private identity decision file is unavailable"
[[ "$(stat -c '%a' "$DECISIONS_FILE")" == "600" ]] || fail "private identity decision file must be mode 0600"
[[ "$(sha256sum "$DECISIONS_FILE" | awk '{print $1}')" == "$EXPECTED_FILE_SHA256" ]] || fail "identity decision file checksum mismatch"
[[ "$(jq -r '.decision_sha256' "$DECISIONS_FILE")" == "$EXPECTED_DECISION_SHA256" ]] || fail "identity decision content checksum mismatch"
[[ "$(jq -r '[.validation.status,.validation.resolved,.validation.unresolved]|join("|")' "$DECISIONS_FILE")" == "pass|13|0" ]] ||
  fail "identity decisions are not approved and complete"
cd "$COMPOSE_DIR"
docker compose config -q

psql_main() { docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d postgres "$@"; }
readonly STATE="$(psql_main -Atqc "SELECT concat_ws('|',split_part(current_setting('server_version'),'.',1),
  (SELECT count(*) FROM festapp_merge.import_runs WHERE source_alias='default' AND status='blocked'),
  (SELECT count(*) FROM festapp_merge.import_runs WHERE source_alias='a'),
  (SELECT count(*) FROM information_schema.foreign_tables WHERE foreign_table_schema IN ('festapp_stage_a_public','festapp_stage_a_eshop')),
  (SELECT count(*) FROM festapp_stage_a_managed.rows WHERE source_schema='auth' AND source_table='users'),
  (SELECT count(*) FROM auth.users),(SELECT count(*) FROM storage.objects))")"
[[ "$STATE" == "17|1|0|100|6980|231|264" ]] || fail "target is not approved a-mapping state ($STATE)"

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/a-id-mappings-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"
readonly RUN_ID="$(psql_main -Atqc 'SELECT gen_random_uuid()')"
[[ "$RUN_ID" =~ ^[0-9a-f-]{36}$ ]] || fail "could not allocate import run ID"

{
  printf '%s\n' "BEGIN;" \
    "SET LOCAL statement_timeout = 0;" \
    "INSERT INTO festapp_merge.import_runs(run_id,source_alias,source_project_ref,snapshot_at,source_schema_fingerprint,transformation_version,status)" \
    "VALUES ('$RUN_ID','a','$SOURCE_REF','2026-08-27T18:31:26.639Z','$SOURCE_FINGERPRINT','a-id-map-2026-08-27.1','prepared');" \
    "DO \$mapping\$" \
    "DECLARE relation record; base_id bigint;" \
    "BEGIN" \
    " FOR relation IN" \
    "  SELECT n.nspname target_schema,c.relname table_name,a.attname pk_column" \
    "  FROM pg_constraint con JOIN pg_class c ON c.oid=con.conrelid JOIN pg_namespace n ON n.oid=c.relnamespace" \
    "  JOIN LATERAL unnest(con.conkey) k(attnum) ON true JOIN pg_attribute a ON a.attrelid=c.oid AND a.attnum=k.attnum" \
    "  WHERE con.contype='p' AND cardinality(con.conkey)=1 AND n.nspname IN ('public','eshop')" \
    "    AND a.atttypid IN ('int2'::regtype,'int4'::regtype,'int8'::regtype)" \
    "    AND EXISTS (SELECT 1 FROM information_schema.foreign_tables f WHERE f.foreign_table_schema='festapp_stage_a_'||n.nspname AND f.foreign_table_name=c.relname)" \
    "  ORDER BY n.nspname,c.relname" \
    " LOOP" \
    "  EXECUTE format('SELECT coalesce(max(%I)::bigint,0) FROM %I.%I',relation.pk_column,relation.target_schema,relation.table_name) INTO base_id;" \
    "  EXECUTE format('INSERT INTO festapp_merge.id_mappings(run_id,source_table,source_id,target_id) SELECT %L,%L,s.%I::text,(%s+row_number() OVER (ORDER BY s.%I))::bigint::text FROM festapp_stage_a_%I.%I s'," \
    "    '$RUN_ID',relation.target_schema||'.'||relation.table_name,relation.pk_column,base_id,relation.pk_column,relation.target_schema,relation.table_name);" \
    " END LOOP;" \
    "END" \
    "\$mapping\$;" \
    "COPY festapp_merge.id_mappings(run_id,source_table,source_id,target_id) FROM STDIN WITH (FORMAT csv,DELIMITER E'\\t');"
  jq -r --arg run "$RUN_ID" '.decisions[] | [$run,"auth.users",.source_user_id,.target_user_id] | @tsv' "$DECISIONS_FILE"
  printf '%s\n' '\.' \
    "INSERT INTO festapp_merge.id_mappings(run_id,source_table,source_id,target_id)" \
    "SELECT run_id,'public.user_info',source_id,target_id FROM festapp_merge.id_mappings WHERE run_id='$RUN_ID' AND source_table='auth.users';" \
    "DO \$validate\$" \
    "DECLARE numeric_mappings bigint; auth_mappings bigint; profile_mappings bigint; verified_pairs bigint;" \
    "BEGIN" \
    " SELECT count(*) FILTER (WHERE source_table NOT IN ('auth.users','public.user_info'))," \
    "   count(*) FILTER (WHERE source_table='auth.users'),count(*) FILTER (WHERE source_table='public.user_info')" \
    " INTO numeric_mappings,auth_mappings,profile_mappings FROM festapp_merge.id_mappings WHERE run_id='$RUN_ID';" \
    " WITH source_users AS MATERIALIZED (" \
    "  SELECT (row_data->>'id')::uuid source_id,lower(row_data->>'email') email FROM festapp_stage_a_managed.rows" \
    "  WHERE source_schema='auth' AND source_table='users'" \
    " ) SELECT count(*) INTO verified_pairs FROM festapp_merge.id_mappings m" \
    " JOIN source_users s ON s.source_id=m.source_id::uuid JOIN auth.users t ON t.id=m.target_id::uuid AND lower(t.email)=s.email" \
    " WHERE m.run_id='$RUN_ID' AND m.source_table='auth.users' AND m.source_id<>m.target_id;" \
    " IF numeric_mappings=0 OR auth_mappings<>13 OR profile_mappings<>13 OR verified_pairs<>13 THEN" \
    "  RAISE EXCEPTION 'a mapping assertion failed: numeric %, auth %, profile %, verified %',numeric_mappings,auth_mappings,profile_mappings,verified_pairs;" \
    " END IF;" \
    " INSERT INTO festapp_merge.validation_results(run_id,check_name,status,observed) VALUES ('$RUN_ID','a-id-mapping-preparation','pass',jsonb_build_object(" \
    "  'numeric_mappings',numeric_mappings,'identity_mappings',auth_mappings,'profile_mappings',profile_mappings," \
    "  'identity_decision_sha256','$EXPECTED_DECISION_SHA256','managed_snapshot_at','2026-08-27T19:28:28.282Z'));" \
    "END" \
    "\$validate\$;" \
    "COMMIT;"
} | psql_main

psql_main -Atqc "SELECT jsonb_build_object(
  'run_id',run_id,'status',status,
  'mappings',(SELECT count(*) FROM festapp_merge.id_mappings WHERE run_id=import_runs.run_id),
  'mapping_relations',(SELECT count(DISTINCT source_table) FROM festapp_merge.id_mappings WHERE run_id=import_runs.run_id),
  'validation',(SELECT observed FROM festapp_merge.validation_results WHERE run_id=import_runs.run_id AND check_name='a-id-mapping-preparation')
) FROM festapp_merge.import_runs WHERE run_id='$RUN_ID'" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Source a deterministic ID mappings prepared with private identity decisions."
echo "Evidence: $RUN_DIR"
