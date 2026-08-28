#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly REGISTRY_FILE="${FESTAPP_SOURCE_REGISTRY:-$SCRIPT_DIR/../merge/source-registry.json}"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"
readonly TARGET_DATABASE="${FESTAPP_REHEARSAL_DATABASE:-postgres}"
readonly SOURCE_ALIAS="${FESTAPP_MERGE_SOURCE_ALIAS:-}"
readonly DECISIONS_FILE="${FESTAPP_IDENTITY_DECISIONS_FILE:-}"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_REHEARSAL_ACK:-}" == "prepare-merge-source-deterministic-id-mappings" ]] || fail "set the merge-source ID-mapping acknowledgement"
[[ "$TARGET_DATABASE" == "postgres" || "$TARGET_DATABASE" =~ ^festapp_rehearsal_[0-9]{14}$ ]] || fail "invalid isolated rehearsal database name"
[[ "$SOURCE_ALIAS" =~ ^[a-z][a-z0-9_]{0,19}$ ]] || fail "invalid merge source alias"
[[ -f "$REGISTRY_FILE" && "$(jq -r --arg source "$SOURCE_ALIAS" '.sources[]|select(.alias==$source)|.role' "$REGISTRY_FILE")" == "merge-source" ]] || fail "source is not a registered merge source"
readonly SOURCE_REF="$(jq -r --arg source "$SOURCE_ALIAS" '.sources[]|select(.alias==$source)|.project_ref' "$REGISTRY_FILE")"
[[ -f "$DECISIONS_FILE" && "$(stat -c '%a' "$DECISIONS_FILE")" == "600" ]] || fail "private identity decisions must exist with mode 0600"
readonly DECISION_SHA256="$(jq -r '.decision_sha256 // empty' "$DECISIONS_FILE")"
readonly COMPUTED_DECISION_SHA256="$(jq -cS 'del(.decision_sha256)' "$DECISIONS_FILE" | tr -d '\n' | sha256sum | awk '{print $1}')"
[[ "$DECISION_SHA256" =~ ^[0-9a-f]{64}$ && "$COMPUTED_DECISION_SHA256" == "$DECISION_SHA256" ]] || fail "identity decision checksum mismatch"
readonly DECISION_COUNT="$(jq -r --arg source "$SOURCE_ALIAS" 'if .source_alias==$source and .validation.status=="pass" and .validation.resolved==(.decisions|length) and .validation.unresolved==0 and all(.decisions[];.source_project==$source and .status=="approved-by-execution-rule") then (.decisions|length) else -1 end' "$DECISIONS_FILE")"
[[ "$DECISION_COUNT" =~ ^[0-9]+$ ]] || fail "identity decisions are not complete for this source"
[[ "$(id -u)" == "0" && "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "run as root on the approved rehearsal host"

cd "$COMPOSE_DIR"
docker compose config -q
psql_main() { docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d "$TARGET_DATABASE" "$@"; }
readonly STAGE_PUBLIC="festapp_stage_${SOURCE_ALIAS}_public"
readonly STAGE_ESHOP="festapp_stage_${SOURCE_ALIAS}_eshop"
readonly STAGE_MANAGED="festapp_stage_${SOURCE_ALIAS}_managed"

mapfile -t REGISTRY_SOURCES < <(jq -r '.sources[].alias' "$REGISTRY_FILE")
expected_predecessors="$(for source in "${REGISTRY_SOURCES[@]}"; do [[ "$source" == "$SOURCE_ALIAS" ]] || echo "$source:validated:1"; done | sort | paste -sd, -)"
actual_predecessors="$(psql_main -Atqc "SELECT coalesce(string_agg(source_alias||':'||status||':'||runs,',' ORDER BY source_alias),'') FROM (SELECT source_alias,status,count(*) runs FROM festapp_merge.import_runs GROUP BY source_alias,status) x")"
[[ "$actual_predecessors" == "$expected_predecessors" ]] || fail "canonical predecessor import set mismatch ($actual_predecessors)"
readonly STATE="$(psql_main -Atqc "SELECT concat_ws('|',split_part(current_setting('server_version'),'.',1),(SELECT count(*) FROM festapp_merge.import_runs WHERE source_alias='$SOURCE_ALIAS'),(SELECT count(*) FROM information_schema.foreign_tables WHERE foreign_table_schema IN ('$STAGE_PUBLIC','$STAGE_ESHOP')),(SELECT count(*)>0 FROM $STAGE_MANAGED.rows WHERE source_schema='auth' AND source_table='users'),(SELECT count(*) FROM $STAGE_MANAGED.provenance WHERE source_alias='$SOURCE_ALIAS' AND source_project_ref='$SOURCE_REF'),(SELECT managed_rows=(SELECT count(*) FROM $STAGE_MANAGED.rows) FROM $STAGE_MANAGED.provenance))")"
[[ "$STATE" =~ ^17\|0\|[1-9][0-9]*\|t\|1\|t$ ]] || fail "target is not an approved merge-source mapping state ($STATE)"

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/$SOURCE_ALIAS-id-mappings-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"
readonly RUN_ID="$(psql_main -Atqc 'SELECT gen_random_uuid()')"
[[ "$RUN_ID" =~ ^[0-9a-f-]{36}$ ]] || fail "could not allocate import run ID"

{
  printf '%s\n' "BEGIN;" "SET LOCAL statement_timeout=0;" \
    "INSERT INTO festapp_merge.import_runs(run_id,source_alias,source_project_ref,snapshot_at,source_schema_fingerprint,transformation_version,status)" \
    "SELECT '$RUN_ID','$SOURCE_ALIAS',source_project_ref,raw_snapshot_at,raw_schema_sha256,'merge-source-id-map-2026-08-28.1','prepared' FROM $STAGE_MANAGED.provenance;" \
    "DO \$mapping\$" \
    "DECLARE relation record; base_id bigint;" \
    "BEGIN" \
    " FOR relation IN SELECT n.nspname target_schema,c.relname table_name,a.attname pk_column" \
    "  FROM pg_constraint con JOIN pg_class c ON c.oid=con.conrelid JOIN pg_namespace n ON n.oid=c.relnamespace" \
    "  JOIN LATERAL unnest(con.conkey) k(attnum) ON true JOIN pg_attribute a ON a.attrelid=c.oid AND a.attnum=k.attnum" \
    "  WHERE con.contype='p' AND cardinality(con.conkey)=1 AND n.nspname IN ('public','eshop')" \
    "    AND a.atttypid IN ('int2'::regtype,'int4'::regtype,'int8'::regtype)" \
    "    AND EXISTS (SELECT 1 FROM information_schema.foreign_tables f WHERE f.foreign_table_schema='festapp_stage_${SOURCE_ALIAS}_'||n.nspname AND f.foreign_table_name=c.relname)" \
    "  ORDER BY n.nspname,c.relname LOOP" \
    "   EXECUTE format('SELECT coalesce(max(%I)::bigint,0) FROM %I.%I',relation.pk_column,relation.target_schema,relation.table_name) INTO base_id;" \
    "   EXECUTE format('INSERT INTO festapp_merge.id_mappings(run_id,source_table,source_id,target_id) SELECT %L,%L,s.%I::text,(%s+row_number() OVER (ORDER BY s.%I))::bigint::text FROM festapp_stage_${SOURCE_ALIAS}_%I.%I s','$RUN_ID',relation.target_schema||'.'||relation.table_name,relation.pk_column,base_id,relation.pk_column,relation.target_schema,relation.table_name);" \
    "  END LOOP;" "END" "\$mapping\$;" \
    "COPY festapp_merge.id_mappings(run_id,source_table,source_id,target_id) FROM STDIN WITH (FORMAT csv,DELIMITER E'\\t');"
  jq -r --arg run "$RUN_ID" '.decisions[]|[$run,"auth.users",.source_user_id,.target_user_id]|@tsv' "$DECISIONS_FILE"
  printf '%s\n' '\.' \
    "INSERT INTO festapp_merge.id_mappings(run_id,source_table,source_id,target_id) SELECT run_id,'public.user_info',source_id,target_id FROM festapp_merge.id_mappings WHERE run_id='$RUN_ID' AND source_table='auth.users';" \
    "DO \$validate\$" \
    "DECLARE numeric_mappings bigint; auth_mappings bigint; profile_mappings bigint; collision_pairs bigint; missing_pairs bigint; stale_pairs bigint;" \
    "BEGIN" \
    " SELECT count(*) FILTER (WHERE source_table NOT IN ('auth.users','public.user_info')),count(*) FILTER (WHERE source_table='auth.users'),count(*) FILTER (WHERE source_table='public.user_info') INTO numeric_mappings,auth_mappings,profile_mappings FROM festapp_merge.id_mappings WHERE run_id='$RUN_ID';" \
    " WITH collisions AS (SELECT s.row_data->>'id' source_id,t.id::text target_id FROM $STAGE_MANAGED.rows s JOIN auth.users t ON lower(t.email)=lower(s.row_data->>'email') AND t.id::text<>s.row_data->>'id' WHERE s.source_schema='auth' AND s.source_table='users')" \
    " SELECT count(*),count(*) FILTER (WHERE m.source_id IS NULL) INTO collision_pairs,missing_pairs FROM collisions c LEFT JOIN festapp_merge.id_mappings m ON m.run_id='$RUN_ID' AND m.source_table='auth.users' AND m.source_id=c.source_id AND m.target_id=c.target_id;" \
    " SELECT count(*) INTO stale_pairs FROM festapp_merge.id_mappings m WHERE m.run_id='$RUN_ID' AND m.source_table='auth.users' AND NOT EXISTS (SELECT 1 FROM $STAGE_MANAGED.rows s JOIN auth.users t ON lower(t.email)=lower(s.row_data->>'email') AND t.id::text<>s.row_data->>'id' WHERE s.source_schema='auth' AND s.source_table='users' AND s.row_data->>'id'=m.source_id AND t.id::text=m.target_id);" \
    " IF numeric_mappings=0 OR collision_pairs<>$DECISION_COUNT OR auth_mappings<>collision_pairs OR profile_mappings<>collision_pairs OR missing_pairs<>0 OR stale_pairs<>0 THEN RAISE EXCEPTION 'merge-source mapping assertion failed: numeric %, collisions %, auth %, profile %, missing %, stale %',numeric_mappings,collision_pairs,auth_mappings,profile_mappings,missing_pairs,stale_pairs; END IF;" \
    " INSERT INTO festapp_merge.validation_results(run_id,check_name,status,observed) VALUES ('$RUN_ID','$SOURCE_ALIAS-id-mapping-preparation','pass',jsonb_build_object('numeric_mappings',numeric_mappings,'identity_mappings',auth_mappings,'profile_mappings',profile_mappings,'identity_decision_sha256','$DECISION_SHA256','raw_artifact_sha256',(SELECT raw_artifact_sha256 FROM $STAGE_MANAGED.provenance),'raw_manifest_sha256',(SELECT raw_manifest_sha256 FROM $STAGE_MANAGED.provenance),'managed_artifact_sha256',(SELECT managed_artifact_sha256 FROM $STAGE_MANAGED.provenance),'managed_manifest_sha256',(SELECT managed_manifest_sha256 FROM $STAGE_MANAGED.provenance)));" \
    "END" "\$validate\$;" "COMMIT;"
} | psql_main

psql_main -Atqc "SELECT jsonb_build_object('run_id',run_id,'status',status,'source_alias',source_alias,'mappings',(SELECT count(*) FROM festapp_merge.id_mappings WHERE run_id=import_runs.run_id),'validation',(SELECT observed FROM festapp_merge.validation_results WHERE run_id=import_runs.run_id AND check_name='$SOURCE_ALIAS-id-mapping-preparation')) FROM festapp_merge.import_runs WHERE run_id='$RUN_ID'" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Merge-source deterministic ID mappings prepared: $SOURCE_ALIAS"
echo "Evidence: $RUN_DIR"
