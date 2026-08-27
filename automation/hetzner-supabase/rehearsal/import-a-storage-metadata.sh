#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_REHEARSAL_ACK:-}" == "import-a-storage-metadata-preserve-runtime-ledger" ]] ||
  fail "set FESTAPP_REHEARSAL_ACK=import-a-storage-metadata-preserve-runtime-ledger"
[[ "$(id -u)" == "0" ]] || fail "run as root on rehearsal host"
[[ "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "refusing unexpected host"
cd "$COMPOSE_DIR"
docker compose config -q

psql_main() { docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d postgres "$@"; }
readonly STATE="$(psql_main -Atqc "SELECT concat_ws('|',split_part(current_setting('server_version'),'.',1),
  (SELECT count(*) FROM festapp_merge.import_runs WHERE source_alias='a' AND status='blocked'),
  (SELECT count(*) FROM festapp_merge.validation_results v JOIN festapp_merge.import_runs r USING(run_id) WHERE r.source_alias='a' AND v.check_name='a-auth-import' AND v.status='pass'),
  (SELECT count(*) FROM storage.buckets),(SELECT count(*) FROM storage.objects),(SELECT count(*) FROM storage.migrations),
  (SELECT count(*) FROM festapp_stage_a_managed.rows WHERE source_schema='storage' AND source_table='buckets'),
  (SELECT count(*) FROM festapp_stage_a_managed.rows WHERE source_schema='storage' AND source_table='objects'))")"
[[ "$STATE" == "17|1|1|5|264|61|4|935" ]] || fail "target is not approved a-Storage metadata state ($STATE)"

readonly BUCKET_OVERLAP="$(psql_main -Atqc "WITH source_buckets AS MATERIALIZED (
  SELECT row_data FROM festapp_stage_a_managed.rows WHERE source_schema='storage' AND source_table='buckets'
) SELECT concat_ws('|',count(*),count(*) FILTER(WHERE s.row_data-'created_at'-'updated_at'-'versioning_status'=to_jsonb(t)-'created_at'-'updated_at'-'versioning_status'))
FROM source_buckets s JOIN storage.buckets t ON t.id=s.row_data->>'id'")"
[[ "$BUCKET_OVERLAP" == "3|3" ]] || fail "Storage bucket overlap is not semantically identical ($BUCKET_OVERLAP)"

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/a-storage-metadata-import-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"

psql_main <<'SQL'
BEGIN;
SET LOCAL session_replication_role = replica;
SET LOCAL statement_timeout = 0;

DO $import$
DECLARE
  import_run uuid;
  column_record record;
  column_list text := '';
  select_list text := '';
  expression text;
  inserted_rows bigint;
  orphan_rows bigint;
BEGIN
  SELECT run_id INTO STRICT import_run FROM festapp_merge.import_runs WHERE source_alias='a' AND status='blocked';

  INSERT INTO storage.buckets OVERRIDING SYSTEM VALUE
  SELECT (jsonb_populate_record(NULL::storage.buckets,s.row_data)).*
  FROM festapp_stage_a_managed.rows s
  WHERE s.source_schema='storage' AND s.source_table='buckets'
    AND NOT EXISTS (SELECT 1 FROM storage.buckets target WHERE target.id=s.row_data->>'id');
  GET DIAGNOSTICS inserted_rows=ROW_COUNT;
  IF inserted_rows<>1 THEN RAISE EXCEPTION 'expected one source-only Storage bucket, inserted %',inserted_rows; END IF;

  FOR column_record IN
    SELECT c.column_name,c.ordinal_position,format_type(a.atttypid,a.atttypmod) sql_type
    FROM information_schema.columns c
    JOIN pg_class pc ON pc.relname=c.table_name JOIN pg_namespace pn ON pn.oid=pc.relnamespace AND pn.nspname=c.table_schema
    JOIN pg_attribute a ON a.attrelid=pc.oid AND a.attname=c.column_name
    WHERE c.table_schema='storage' AND c.table_name='objects' AND c.is_generated='NEVER'
    ORDER BY c.ordinal_position
  LOOP
    IF column_record.column_name IN ('owner','owner_id') THEN
      expression:=format('coalesce((SELECT m.target_id::%s FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=s.row_data->>%L),(jsonb_populate_record(NULL::storage.objects,s.row_data)).%I)',
        column_record.sql_type,import_run,column_record.column_name,column_record.column_name);
    ELSE
      expression:=format('(jsonb_populate_record(NULL::storage.objects,s.row_data)).%I',column_record.column_name);
    END IF;
    column_list:=column_list||CASE WHEN column_list='' THEN '' ELSE ', ' END||format('%I',column_record.column_name);
    select_list:=select_list||CASE WHEN select_list='' THEN '' ELSE ', ' END||expression;
  END LOOP;
  EXECUTE format('INSERT INTO storage.objects (%s) OVERRIDING SYSTEM VALUE SELECT %s FROM festapp_stage_a_managed.rows s WHERE s.source_schema=''storage'' AND s.source_table=''objects''',column_list,select_list);
  GET DIAGNOSTICS inserted_rows=ROW_COUNT;
  IF inserted_rows<>935 THEN RAISE EXCEPTION 'expected 935 Storage object metadata rows, inserted %',inserted_rows; END IF;

  SELECT count(*) INTO orphan_rows FROM storage.objects o WHERE NOT EXISTS (SELECT 1 FROM storage.buckets b WHERE b.id=o.bucket_id);
  IF orphan_rows<>0 THEN RAISE EXCEPTION 'Storage object metadata has % missing buckets',orphan_rows; END IF;
  IF (SELECT count(*) FROM storage.buckets)<>6 OR (SELECT count(*) FROM storage.objects)<>1199 OR (SELECT count(*) FROM storage.migrations)<>61 THEN
    RAISE EXCEPTION 'final Storage metadata or runtime ledger count mismatch';
  END IF;

  INSERT INTO festapp_merge.validation_results(run_id,check_name,status,observed) VALUES
    (import_run,'a-storage-metadata-import','pass',jsonb_build_object('source_buckets',4,'merged_buckets',3,'inserted_buckets',1,'inserted_objects',935,'mapped_owner_rows',36,'runtime_migration_ledger_rows',61)),
    (import_run,'a-storage-object-payloads','blocked',jsonb_build_object('metadata_rows',935,'payload_bytes',436768281,'copied_payloads',0));
  UPDATE festapp_merge.validation_results SET observed=jsonb_build_object('auth_imported',true,'auth_users',(SELECT count(*) FROM auth.users),'storage_metadata_imported',true,'storage_objects',(SELECT count(*) FROM storage.objects),'storage_payloads_imported',false)
  WHERE run_id=import_run AND check_name='a-auth-and-storage-import';
END
$import$;

COMMIT;
SQL

psql_main -Atqc "SELECT jsonb_build_object(
  'storage_buckets',(SELECT count(*) FROM storage.buckets),'storage_objects',(SELECT count(*) FROM storage.objects),
  'storage_migration_rows',(SELECT count(*) FROM storage.migrations),
  'payload_gate',(SELECT status FROM festapp_merge.validation_results WHERE run_id=import_runs.run_id AND check_name='a-storage-object-payloads')
) FROM festapp_merge.import_runs WHERE source_alias='a'" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Source a Storage metadata imported; payload copy remains blocked."
echo "Evidence: $RUN_DIR"
