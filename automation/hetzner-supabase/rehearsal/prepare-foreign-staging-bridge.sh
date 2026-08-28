#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"
readonly TARGET_DATABASE="${FESTAPP_REHEARSAL_DATABASE:-postgres}"
readonly STAGE_SUFFIX="${FESTAPP_STAGE_DATABASE_SUFFIX:-}"
readonly DEFAULT_STAGE_DATABASE="festapp_stage_default${STAGE_SUFFIX:+_$STAGE_SUFFIX}"
readonly A_STAGE_DATABASE="festapp_stage_a${STAGE_SUFFIX:+_$STAGE_SUFFIX}"
readonly READER_ROLE="festapp_stage_reader${STAGE_SUFFIX:+_$STAGE_SUFFIX}"
readonly EXPECTED_DEFAULT_MANAGED_ROWS="${FESTAPP_EXPECTED_DEFAULT_MANAGED_ROWS:-}"
readonly EXPECTED_A_MANAGED_ROWS="${FESTAPP_EXPECTED_A_MANAGED_ROWS:-}"

fail() { echo "ERROR: $*" >&2; exit 1; }
readonly ACK="${FESTAPP_REHEARSAL_ACK:-}"
[[ "$TARGET_DATABASE" == "postgres" || "$TARGET_DATABASE" =~ ^festapp_rehearsal_[0-9]{14}$ ]] || fail "invalid isolated rehearsal database name"
[[ -z "$STAGE_SUFFIX" || "$STAGE_SUFFIX" =~ ^[0-9]{14}$ ]] || fail "invalid staging database suffix"
[[ "$EXPECTED_DEFAULT_MANAGED_ROWS" =~ ^[1-9][0-9]*$ && "$EXPECTED_A_MANAGED_ROWS" =~ ^[1-9][0-9]*$ ]] ||
  fail "set expected managed row counts from the verified export manifests"
[[ "$ACK" == "prepare-read-only-foreign-staging-bridge" ||
   "$ACK" == "resume-after-existing-postgres-fdw" ||
   "$ACK" == "resume-through-internal-supavisor" ]] ||
  fail "set FESTAPP_REHEARSAL_ACK=prepare-read-only-foreign-staging-bridge"
[[ "$(id -u)" == "0" ]] || fail "run as root on rehearsal host"
[[ "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "refusing unexpected host"
cd "$COMPOSE_DIR"
docker compose config -q

psql_db() { local database="$1"; shift; docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d "$database" "$@"; }

readonly MAIN_STATE="$(psql_db "$TARGET_DATABASE" -Atqc "SELECT concat_ws('|', split_part(current_setting('server_version'),'.',1), (SELECT count(*) FROM auth.users), (SELECT count(*) FROM storage.objects), (SELECT count(*) FROM festapp_merge.import_runs), to_regnamespace('festapp_stage_default_public') IS NULL, (SELECT count(*) FROM pg_roles WHERE rolname='$READER_ROLE'), (SELECT count(*) FROM pg_foreign_server WHERE srvname LIKE 'festapp_stage_%'))")"
if [[ "$ACK" == "prepare-read-only-foreign-staging-bridge" ]]; then
  [[ "$MAIN_STATE" == "17|0|0|0|t|0|0" ]] || fail "canonical target is not approved empty bridge state ($MAIN_STATE)"
elif [[ "$ACK" == "resume-after-existing-postgres-fdw" ]]; then
  [[ "$MAIN_STATE" == "17|0|0|0|t|1|0" ]] || fail "canonical target is not approved existing-FDW resume state ($MAIN_STATE)"
  readonly READER_STATE="$(psql_db "$TARGET_DATABASE" -Atqc "SELECT concat_ws('|',rolcanlogin,rolsuper,rolcreatedb,rolcreaterole,rolinherit,rolreplication,rolbypassrls) FROM pg_roles WHERE rolname='$READER_ROLE'")"
  [[ "$READER_STATE" == "t|f|f|f|f|f|f" ]] || fail "staging reader security attributes are not approved ($READER_STATE)"
else
  [[ "$MAIN_STATE" == "17|0|0|0|f|1|2" ]] || fail "canonical target is not approved FDW resume state ($MAIN_STATE)"
  readonly RESUME_STATE="$(psql_db "$TARGET_DATABASE" -Atqc "SELECT concat_ws('|', (SELECT count(*) FROM pg_foreign_table), (SELECT count(*) FROM pg_user_mappings WHERE srvname IN ('festapp_stage_default','festapp_stage_a')), (SELECT count(*) FROM pg_namespace WHERE nspname LIKE 'festapp_stage_%'))")"
  [[ "$RESUME_STATE" == "0|2|6" ]] || fail "unexpected partial FDW state ($RESUME_STATE)"
fi
readonly DEFAULT_STATE="$(psql_db "$DEFAULT_STAGE_DATABASE" -Atqc "SELECT concat_ws('|', (SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname IN ('public','eshop') AND c.relkind IN ('r','p')), (SELECT count(*) FROM festapp_managed_source.rows))")"
readonly A_STATE="$(psql_db "$A_STAGE_DATABASE" -Atqc "SELECT concat_ws('|', (SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname IN ('public','eshop') AND c.relkind IN ('r','p')), (SELECT count(*) FROM festapp_managed_source.rows))")"
[[ "$DEFAULT_STATE" == "70|$EXPECTED_DEFAULT_MANAGED_ROWS" ]] || fail "default staging state mismatch ($DEFAULT_STATE)"
[[ "$A_STATE" == "100|$EXPECTED_A_MANAGED_ROWS" ]] || fail "a staging state mismatch ($A_STATE)"

if [[ "$ACK" == "prepare-read-only-foreign-staging-bridge" || "$ACK" == "resume-after-existing-postgres-fdw" ]]; then
readonly READER_PASSWORD="$(openssl rand -base64 36 | tr -d '\n')"
if [[ "$ACK" == "prepare-read-only-foreign-staging-bridge" ]]; then
psql_db "$TARGET_DATABASE" <<SQL
CREATE ROLE $READER_ROLE LOGIN PASSWORD '$READER_PASSWORD'
  VALID UNTIL '$(date -u -d '+24 hours' '+%Y-%m-%d %H:%M:%S+00')'
  NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS;
SQL
else
psql_db "$TARGET_DATABASE" <<SQL
ALTER ROLE $READER_ROLE WITH LOGIN PASSWORD '$READER_PASSWORD'
  VALID UNTIL '$(date -u -d '+24 hours' '+%Y-%m-%d %H:%M:%S+00')';
SQL
fi

for database in "$DEFAULT_STAGE_DATABASE" "$A_STAGE_DATABASE"; do
  psql_db "$database" <<SQL
GRANT CONNECT ON DATABASE $database TO $READER_ROLE;
GRANT USAGE ON SCHEMA public, eshop, festapp_managed_source TO $READER_ROLE;
GRANT SELECT ON ALL TABLES IN SCHEMA public, eshop, festapp_managed_source TO $READER_ROLE;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public, eshop, festapp_managed_source TO $READER_ROLE;
SQL
done

psql_db "$TARGET_DATABASE" <<SQL
CREATE EXTENSION IF NOT EXISTS postgres_fdw WITH SCHEMA extensions;

CREATE SCHEMA festapp_stage_default_public AUTHORIZATION postgres;
CREATE SCHEMA festapp_stage_default_eshop AUTHORIZATION postgres;
CREATE SCHEMA festapp_stage_default_managed AUTHORIZATION postgres;
CREATE SCHEMA festapp_stage_a_public AUTHORIZATION postgres;
CREATE SCHEMA festapp_stage_a_eshop AUTHORIZATION postgres;
CREATE SCHEMA festapp_stage_a_managed AUTHORIZATION postgres;

REVOKE ALL ON SCHEMA festapp_stage_default_public, festapp_stage_default_eshop,
  festapp_stage_default_managed, festapp_stage_a_public, festapp_stage_a_eshop,
  festapp_stage_a_managed FROM PUBLIC, anon, authenticated, service_role;

CREATE SERVER festapp_stage_default FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (host 'supavisor', port '5432', dbname '$DEFAULT_STAGE_DATABASE');
CREATE SERVER festapp_stage_a FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (host 'supavisor', port '5432', dbname '$A_STAGE_DATABASE');
CREATE USER MAPPING FOR postgres SERVER festapp_stage_default
  OPTIONS (user '$READER_ROLE.your-tenant-id', password '$READER_PASSWORD');
CREATE USER MAPPING FOR postgres SERVER festapp_stage_a
  OPTIONS (user '$READER_ROLE.your-tenant-id', password '$READER_PASSWORD');
SQL
else
psql_db "$TARGET_DATABASE" <<SQL
ALTER SERVER festapp_stage_default OPTIONS (SET host 'supavisor');
ALTER SERVER festapp_stage_a OPTIONS (SET host 'supavisor');
ALTER USER MAPPING FOR postgres SERVER festapp_stage_default
  OPTIONS (SET user '${READER_ROLE}.your-tenant-id');
ALTER USER MAPPING FOR postgres SERVER festapp_stage_a
  OPTIONS (SET user '${READER_ROLE}.your-tenant-id');
SQL
fi

psql_db "$TARGET_DATABASE" <<'SQL'
IMPORT FOREIGN SCHEMA public FROM SERVER festapp_stage_default INTO festapp_stage_default_public;
IMPORT FOREIGN SCHEMA eshop FROM SERVER festapp_stage_default INTO festapp_stage_default_eshop;
IMPORT FOREIGN SCHEMA festapp_managed_source LIMIT TO (rows,provenance) FROM SERVER festapp_stage_default INTO festapp_stage_default_managed;
IMPORT FOREIGN SCHEMA public FROM SERVER festapp_stage_a INTO festapp_stage_a_public;
IMPORT FOREIGN SCHEMA eshop FROM SERVER festapp_stage_a INTO festapp_stage_a_eshop;
IMPORT FOREIGN SCHEMA festapp_managed_source LIMIT TO (rows,provenance) FROM SERVER festapp_stage_a INTO festapp_stage_a_managed;
SQL

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/foreign-staging-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"
psql_db "$TARGET_DATABASE" -Atqc "SELECT jsonb_build_object(
  'foreign_tables', (SELECT count(*) FROM pg_foreign_table ft JOIN pg_class c ON c.oid=ft.ftrelid JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname LIKE 'festapp_stage_%'),
  'default_managed_rows', (SELECT count(*) FROM festapp_stage_default_managed.rows),
  'a_managed_rows', (SELECT count(*) FROM festapp_stage_a_managed.rows),
  'reader_login', (SELECT rolcanlogin FROM pg_roles WHERE rolname='$READER_ROLE'),
  'reader_bypass_rls', (SELECT rolbypassrls FROM pg_roles WHERE rolname='$READER_ROLE')
)" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Read-only local FDW staging bridge prepared."
echo "Evidence: $RUN_DIR"
