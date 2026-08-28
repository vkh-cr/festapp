#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly REGISTRY_FILE="${FESTAPP_SOURCE_REGISTRY:-$SCRIPT_DIR/../merge/source-registry.json}"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"
readonly TARGET_DATABASE="${FESTAPP_REHEARSAL_DATABASE:-postgres}"
readonly SOURCE_ALIAS="${FESTAPP_MERGE_SOURCE_ALIAS:-}"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_REHEARSAL_ACK:-}" == "import-merge-source-auth-preserve-passwords-revoke-merged-sessions" ]] || fail "set the merge-source Auth import acknowledgement"
[[ "$TARGET_DATABASE" == "postgres" || "$TARGET_DATABASE" =~ ^festapp_rehearsal_[0-9]{14}$ ]] || fail "invalid isolated rehearsal database name"
[[ "$SOURCE_ALIAS" =~ ^[a-z][a-z0-9_]{0,19}$ ]] || fail "invalid merge source alias"
[[ -f "$REGISTRY_FILE" && "$(jq -r --arg source "$SOURCE_ALIAS" '.sources[]|select(.alias==$source)|.role' "$REGISTRY_FILE")" == "merge-source" ]] || fail "source is not a registered merge source"
[[ "$(id -u)" == "0" && "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "run as root on the approved rehearsal host"

readonly STAGE_MANAGED="festapp_stage_${SOURCE_ALIAS}_managed"
cd "$COMPOSE_DIR"
docker compose config -q
psql_main() { docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d "$TARGET_DATABASE" "$@"; }
readonly STATE="$(psql_main -Atqc "SELECT concat_ws('|',split_part(current_setting('server_version'),'.',1),(SELECT count(*) FROM festapp_merge.import_runs WHERE source_alias='$SOURCE_ALIAS' AND status='blocked'),(SELECT count(*)>0 FROM festapp_merge.id_mappings m JOIN festapp_merge.import_runs r USING(run_id) WHERE r.source_alias='$SOURCE_ALIAS'),(SELECT count(*) FROM festapp_merge.validation_results v JOIN festapp_merge.import_runs r USING(run_id) WHERE r.source_alias='$SOURCE_ALIAS' AND v.check_name='$SOURCE_ALIAS-relational-import' AND v.status='pass'),(SELECT count(*) FROM festapp_merge.validation_results v JOIN festapp_merge.import_runs r USING(run_id) WHERE r.source_alias='$SOURCE_ALIAS' AND v.check_name='$SOURCE_ALIAS-auth-import'),(SELECT count(*) FROM $STAGE_MANAGED.provenance WHERE source_alias='$SOURCE_ALIAS'))")"
[[ "$STATE" == "17|1|t|1|0|1" ]] || fail "target is not an approved merge-source Auth state ($STATE)"
readonly AUDIT_DUPLICATES="$(psql_main -Atqc "WITH duplicate_keys AS (SELECT row_data->>'id' id,count(*) rows,count(DISTINCT row_data) variants FROM $STAGE_MANAGED.rows WHERE source_schema='auth' AND source_table='audit_log_entries' GROUP BY row_data->>'id' HAVING count(*)>1) SELECT concat_ws('|',count(*),coalesce(sum(rows-1),0),count(*) FILTER (WHERE variants>1)) FROM duplicate_keys")"
[[ "$AUDIT_DUPLICATES" =~ ^[0-9]+\|[0-9]+\|0$ ]] || fail "source audit log has conflicting duplicate IDs ($AUDIT_DUPLICATES)"

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/$SOURCE_ALIAS-auth-import-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"

psql_main -v source_alias="$SOURCE_ALIAS" -v stage_managed="$STAGE_MANAGED" <<'SQL'
BEGIN;
SET LOCAL session_replication_role=replica;
SET LOCAL statement_timeout=0;
SELECT set_config('festapp.merge_source_alias',:'source_alias',true);
SELECT set_config('festapp.merge_stage_managed',:'stage_managed',true);
CREATE TEMP TABLE merge_source_canonical_passwords(user_id uuid PRIMARY KEY,password_digest text NOT NULL);

DO $import$
DECLARE
  import_run uuid; refresh_base bigint; relation record; target_column record; column_list text; select_list text;
  expression text; source_filter text; source_rows bigint; expected_rows bigint; before_rows bigint; after_rows bigint;
  inserted_rows bigint; changed_hashes bigint; missing_users bigint; foreign_key record; child_not_null text;
  join_expression text; orphan_rows bigint; refresh_mapping_count bigint; collision_users bigint;
  audit_duplicate_rows bigint; omitted_identities bigint:=0; omitted_sessions bigint:=0; omitted_refresh_tokens bigint:=0;
  omitted_amr_claims bigint:=0; migration_digest_before text; migration_digest_after text;
  staged_user_rows bigint;
  v_source_alias text:=current_setting('festapp.merge_source_alias'); stage_managed text:=current_setting('festapp.merge_stage_managed');
BEGIN
  SELECT run_id INTO STRICT import_run FROM festapp_merge.import_runs r WHERE r.source_alias=v_source_alias AND status='blocked';
  SELECT count(*) INTO collision_users FROM festapp_merge.id_mappings WHERE run_id=import_run AND source_table='auth.users';
  EXECUTE format('SELECT count(*) FROM %I.rows WHERE source_schema=''auth'' AND source_table=''users''',stage_managed) INTO staged_user_rows;
  INSERT INTO merge_source_canonical_passwords
    SELECT t.id,encode(digest(coalesce(t.encrypted_password,''),'sha256'),'hex') FROM festapp_merge.id_mappings m JOIN auth.users t ON t.id=m.target_id::uuid
    WHERE m.run_id=import_run AND m.source_table='auth.users';
  IF (SELECT count(*) FROM merge_source_canonical_passwords)<>collision_users THEN RAISE EXCEPTION 'canonical collision password baseline mismatch'; END IF;
  SELECT encode(digest(coalesce(string_agg(to_jsonb(m)::text,'' ORDER BY version),''),'sha256'),'hex') INTO migration_digest_before FROM auth.schema_migrations m;

  EXECUTE format('SELECT count(*) FROM %I.rows s WHERE s.source_schema=''auth'' AND s.source_table=''refresh_tokens'' AND NOT EXISTS (SELECT 1 FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=s.row_data->>''user_id'')',stage_managed,import_run) INTO refresh_mapping_count;
  SELECT coalesce(max(id),0) INTO refresh_base FROM auth.refresh_tokens;
  EXECUTE format('INSERT INTO festapp_merge.id_mappings(run_id,source_table,source_id,target_id) SELECT %L,''auth.refresh_tokens'',s.row_data->>''id'',(%s+row_number() OVER (ORDER BY (s.row_data->>''id'')::bigint))::bigint::text FROM %I.rows s WHERE s.source_schema=''auth'' AND s.source_table=''refresh_tokens'' AND NOT EXISTS (SELECT 1 FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=s.row_data->>''user_id'')',import_run,refresh_base,stage_managed,import_run);
  IF (SELECT count(*) FROM festapp_merge.id_mappings WHERE run_id=import_run AND source_table='auth.refresh_tokens')<>refresh_mapping_count THEN RAISE EXCEPTION 'refresh-token mapping count mismatch'; END IF;

  FOR relation IN EXECUTE format('SELECT source_table table_name,count(*) source_rows FROM %I.rows WHERE source_schema=''auth'' AND source_table<>''schema_migrations'' GROUP BY source_table ORDER BY source_table',stage_managed)
  LOOP
    source_filter:='';
    IF relation.table_name IN ('identities','sessions','refresh_tokens') THEN
      source_filter:=format(' AND NOT EXISTS (SELECT 1 FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=s.row_data->>''user_id'')',import_run);
    ELSIF relation.table_name='mfa_amr_claims' THEN
      source_filter:=format(' AND NOT EXISTS (SELECT 1 FROM %I.rows session JOIN festapp_merge.id_mappings m ON m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=session.row_data->>''user_id'' WHERE session.source_schema=''auth'' AND session.source_table=''sessions'' AND session.row_data->>''id''=s.row_data->>''session_id'')',stage_managed,import_run);
    END IF;
    EXECUTE format('SELECT count(*) FROM %I.rows s WHERE s.source_schema=''auth'' AND s.source_table=%L%s',stage_managed,relation.table_name,source_filter) INTO expected_rows;
    IF relation.table_name='audit_log_entries' THEN
      EXECUTE format('SELECT count(DISTINCT row_data->>''id'') FROM %I.rows WHERE source_schema=''auth'' AND source_table=''audit_log_entries''',stage_managed) INTO expected_rows;
      audit_duplicate_rows:=relation.source_rows-expected_rows;
    ELSIF relation.table_name='identities' THEN omitted_identities:=relation.source_rows-expected_rows;
    ELSIF relation.table_name='sessions' THEN omitted_sessions:=relation.source_rows-expected_rows;
    ELSIF relation.table_name='refresh_tokens' THEN omitted_refresh_tokens:=relation.source_rows-expected_rows;
    ELSIF relation.table_name='mfa_amr_claims' THEN omitted_amr_claims:=relation.source_rows-expected_rows;
    END IF;
    EXECUTE format('SELECT count(*) FROM auth.%I',relation.table_name) INTO before_rows;
    column_list:=''; select_list:='';
    FOR target_column IN SELECT c.column_name,c.ordinal_position,format_type(a.atttypid,a.atttypmod) sql_type FROM information_schema.columns c JOIN pg_class pc ON pc.relname=c.table_name JOIN pg_namespace pn ON pn.oid=pc.relnamespace AND pn.nspname=c.table_schema JOIN pg_attribute a ON a.attrelid=pc.oid AND a.attname=c.column_name WHERE c.table_schema='auth' AND c.table_name=relation.table_name AND c.is_generated='NEVER' ORDER BY c.ordinal_position
    LOOP
      IF relation.table_name='refresh_tokens' AND target_column.column_name='id' THEN expression:=format('(SELECT m.target_id::%s FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.refresh_tokens'' AND m.source_id=s.row_data->>%L)',target_column.sql_type,import_run,target_column.column_name);
      ELSIF relation.table_name<>'users' AND target_column.column_name='user_id' THEN expression:=format('coalesce((SELECT m.target_id::%s FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=s.row_data->>%L),(jsonb_populate_record(NULL::auth.%I,s.row_data)).%I)',target_column.sql_type,import_run,target_column.column_name,relation.table_name,target_column.column_name);
      ELSE expression:=format('(jsonb_populate_record(NULL::auth.%I,s.row_data)).%I',relation.table_name,target_column.column_name); END IF;
      column_list:=column_list||CASE WHEN column_list='' THEN '' ELSE ', ' END||format('%I',target_column.column_name);
      select_list:=select_list||CASE WHEN select_list='' THEN '' ELSE ', ' END||expression;
    END LOOP;
    IF relation.table_name='users' THEN
      EXECUTE format('INSERT INTO auth.users (%s) OVERRIDING SYSTEM VALUE SELECT %s FROM %I.rows s WHERE s.source_schema=''auth'' AND s.source_table=''users'' AND NOT EXISTS (SELECT 1 FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=s.row_data->>''id'')',column_list,select_list,stage_managed,import_run);
      expected_rows:=relation.source_rows-collision_users;
    ELSIF relation.table_name='audit_log_entries' THEN
      EXECUTE format('INSERT INTO auth.audit_log_entries (%s) OVERRIDING SYSTEM VALUE SELECT %s FROM (SELECT DISTINCT ON (row_data->>''id'') row_data FROM %I.rows WHERE source_schema=''auth'' AND source_table=''audit_log_entries'' ORDER BY row_data->>''id'',row_id) s',column_list,select_list,stage_managed);
    ELSE
      EXECUTE format('INSERT INTO auth.%I (%s) OVERRIDING SYSTEM VALUE SELECT %s FROM %I.rows s WHERE s.source_schema=''auth'' AND s.source_table=%L%s',relation.table_name,column_list,select_list,stage_managed,relation.table_name,source_filter);
    END IF;
    GET DIAGNOSTICS inserted_rows=ROW_COUNT;
    EXECUTE format('SELECT count(*) FROM auth.%I',relation.table_name) INTO after_rows;
    IF inserted_rows<>expected_rows OR after_rows-before_rows<>expected_rows THEN RAISE EXCEPTION 'merge-source Auth row mismatch for %: expected %, inserted %, delta %',relation.table_name,expected_rows,inserted_rows,after_rows-before_rows; END IF;
  END LOOP;

  EXECUTE format('WITH source_users AS (SELECT row_data FROM %I.rows WHERE source_schema=''auth'' AND source_table=''users'') SELECT count(*) FILTER (WHERE target.id IS NULL),count(*) FILTER (WHERE source.row_data->>''encrypted_password'' IS DISTINCT FROM target.encrypted_password) FROM source_users source LEFT JOIN auth.users target ON target.id=(source.row_data->>''id'')::uuid WHERE NOT EXISTS (SELECT 1 FROM festapp_merge.id_mappings m WHERE m.run_id=%L AND m.source_table=''auth.users'' AND m.source_id=source.row_data->>''id'')',stage_managed,import_run) INTO missing_users,changed_hashes;
  IF missing_users<>0 OR changed_hashes<>0 THEN RAISE EXCEPTION 'non-collision password continuity failed: missing %, changed %',missing_users,changed_hashes; END IF;
  SELECT count(*) INTO changed_hashes FROM merge_source_canonical_passwords b JOIN auth.users t ON t.id=b.user_id WHERE b.password_digest<>encode(digest(coalesce(t.encrypted_password,''),'sha256'),'hex');
  IF changed_hashes<>0 THEN RAISE EXCEPTION 'canonical collision password hashes changed'; END IF;

  FOR foreign_key IN SELECT con.conname,child_ns.nspname child_schema,child.relname child_table,parent_ns.nspname parent_schema,parent.relname parent_table,con.conkey,con.confkey FROM pg_constraint con JOIN pg_class child ON child.oid=con.conrelid JOIN pg_namespace child_ns ON child_ns.oid=child.relnamespace JOIN pg_class parent ON parent.oid=con.confrelid JOIN pg_namespace parent_ns ON parent_ns.oid=parent.relnamespace WHERE con.contype='f' AND child_ns.nspname IN ('auth','public','eshop') AND parent_ns.nspname='auth'
  LOOP
    SELECT string_agg(format('c.%I IS NOT NULL',child_col.attname),' AND ' ORDER BY key_pair.ord),string_agg(format('c.%I=p.%I',child_col.attname,parent_col.attname),' AND ' ORDER BY key_pair.ord) INTO child_not_null,join_expression FROM unnest(foreign_key.conkey,foreign_key.confkey) WITH ORDINALITY key_pair(child_attnum,parent_attnum,ord) JOIN pg_attribute child_col ON child_col.attrelid=(format('%I.%I',foreign_key.child_schema,foreign_key.child_table))::regclass AND child_col.attnum=key_pair.child_attnum JOIN pg_attribute parent_col ON parent_col.attrelid=(format('%I.%I',foreign_key.parent_schema,foreign_key.parent_table))::regclass AND parent_col.attnum=key_pair.parent_attnum;
    EXECUTE format('SELECT count(*) FROM %I.%I c WHERE %s AND NOT EXISTS (SELECT 1 FROM %I.%I p WHERE %s)',foreign_key.child_schema,foreign_key.child_table,child_not_null,foreign_key.parent_schema,foreign_key.parent_table,join_expression) INTO orphan_rows;
    IF orphan_rows<>0 THEN RAISE EXCEPTION 'Auth foreign key % has % orphan rows',foreign_key.conname,orphan_rows; END IF;
  END LOOP;
  SELECT encode(digest(coalesce(string_agg(to_jsonb(m)::text,'' ORDER BY version),''),'sha256'),'hex') INTO migration_digest_after FROM auth.schema_migrations m;
  IF migration_digest_after<>migration_digest_before THEN RAISE EXCEPTION 'Auth runtime migration ledger changed'; END IF;
  PERFORM setval(pg_get_serial_sequence('auth.refresh_tokens','id'),(SELECT max(id) FROM auth.refresh_tokens),true);
  INSERT INTO festapp_merge.validation_results(run_id,check_name,status,observed) VALUES
    (import_run,v_source_alias||'-auth-import','pass',jsonb_build_object('source_users',staged_user_rows,'merged_users',collision_users,'inserted_users',staged_user_rows-collision_users,'changed_noncollision_password_hashes',0,'changed_canonical_password_hashes',0,'foreign_key_orphans',0,'refresh_token_id_mappings',refresh_mapping_count,'identical_audit_duplicates_deduplicated',audit_duplicate_rows,'merged_identity_active_credentials_omitted',jsonb_build_object('identities',omitted_identities,'sessions',omitted_sessions,'refresh_tokens',omitted_refresh_tokens,'mfa_amr_claims',omitted_amr_claims),'merged_identity_session_policy','require-reset-no-source-session-continuity','auth_migration_ledger_unchanged',true));
  UPDATE festapp_merge.validation_results SET observed=jsonb_build_object('auth_imported',true,'auth_users',(SELECT count(*) FROM auth.users),'storage_imported',false,'storage_objects',(SELECT count(*) FROM storage.objects)) WHERE run_id=import_run AND check_name=v_source_alias||'-auth-and-storage-import';
END
$import$;
COMMIT;
SQL

psql_main -Atqc "SELECT jsonb_build_object('source_alias',source_alias,'auth_users',(SELECT count(*) FROM auth.users),'auth_identities',(SELECT count(*) FROM auth.identities),'auth_sessions',(SELECT count(*) FROM auth.sessions),'auth_refresh_tokens',(SELECT count(*) FROM auth.refresh_tokens),'auth_migration_rows',(SELECT count(*) FROM auth.schema_migrations),'validation',(SELECT observed FROM festapp_merge.validation_results WHERE run_id=import_runs.run_id AND check_name='$SOURCE_ALIAS-auth-import')) FROM festapp_merge.import_runs WHERE source_alias='$SOURCE_ALIAS'" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Merge-source Auth imported with password continuity and merged-session revocation: $SOURCE_ALIAS"
echo "Evidence: $RUN_DIR"
