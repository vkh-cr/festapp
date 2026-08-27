#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"
readonly READER_ROLE="festapp_stage_reader"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_REHEARSAL_ACK:-}" == "prepare-read-only-foreign-staging-bridge" ]] ||
  fail "set FESTAPP_REHEARSAL_ACK=prepare-read-only-foreign-staging-bridge"
[[ "$(id -u)" == "0" ]] || fail "run as root on rehearsal host"
[[ "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "refusing unexpected host"
cd "$COMPOSE_DIR"
docker compose config -q

psql_db() { local database="$1"; shift; docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d "$database" "$@"; }

readonly MAIN_STATE="$(psql_db postgres -Atqc "SELECT concat_ws('|', split_part(current_setting('server_version'),'.',1), (SELECT count(*) FROM auth.users), (SELECT count(*) FROM storage.objects), (SELECT count(*) FROM festapp_merge.import_runs), to_regnamespace('festapp_stage_default_public') IS NULL, (SELECT count(*) FROM pg_roles WHERE rolname='$READER_ROLE'), (SELECT count(*) FROM pg_foreign_server WHERE srvname LIKE 'festapp_stage_%'))")"
[[ "$MAIN_STATE" == "17|0|0|0|t|0|0" ]] || fail "canonical target is not approved empty bridge state ($MAIN_STATE)"
readonly DEFAULT_STATE="$(psql_db festapp_stage_default -Atqc "SELECT concat_ws('|', (SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname IN ('public','eshop') AND c.relkind IN ('r','p')), (SELECT count(*) FROM festapp_managed_source.rows))")"
readonly A_STATE="$(psql_db festapp_stage_a -Atqc "SELECT concat_ws('|', (SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname IN ('public','eshop') AND c.relkind IN ('r','p')), (SELECT count(*) FROM festapp_managed_source.rows))")"
[[ "$DEFAULT_STATE" == "70|55317" ]] || fail "default staging state mismatch ($DEFAULT_STATE)"
[[ "$A_STATE" == "100|802012" ]] || fail "a staging state mismatch ($A_STATE)"

readonly READER_PASSWORD="$(openssl rand -base64 36 | tr -d '\n')"
psql_db postgres <<SQL
CREATE ROLE $READER_ROLE LOGIN PASSWORD '$READER_PASSWORD'
  VALID UNTIL '$(date -u -d '+24 hours' '+%Y-%m-%d %H:%M:%S+00')'
  NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS;
SQL

for database in festapp_stage_default festapp_stage_a; do
  psql_db "$database" <<SQL
GRANT CONNECT ON DATABASE $database TO $READER_ROLE;
GRANT USAGE ON SCHEMA public, eshop, festapp_managed_source TO $READER_ROLE;
GRANT SELECT ON ALL TABLES IN SCHEMA public, eshop, festapp_managed_source TO $READER_ROLE;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public, eshop, festapp_managed_source TO $READER_ROLE;
SQL
done

psql_db postgres <<SQL
CREATE EXTENSION postgres_fdw WITH SCHEMA extensions;

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
  OPTIONS (host '127.0.0.1', port '5432', dbname 'festapp_stage_default');
CREATE SERVER festapp_stage_a FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (host '127.0.0.1', port '5432', dbname 'festapp_stage_a');
CREATE USER MAPPING FOR postgres SERVER festapp_stage_default
  OPTIONS (user '$READER_ROLE', password '$READER_PASSWORD');
CREATE USER MAPPING FOR postgres SERVER festapp_stage_a
  OPTIONS (user '$READER_ROLE', password '$READER_PASSWORD');

IMPORT FOREIGN SCHEMA public FROM SERVER festapp_stage_default INTO festapp_stage_default_public;
IMPORT FOREIGN SCHEMA eshop FROM SERVER festapp_stage_default INTO festapp_stage_default_eshop;
IMPORT FOREIGN SCHEMA festapp_managed_source LIMIT TO (rows) FROM SERVER festapp_stage_default INTO festapp_stage_default_managed;
IMPORT FOREIGN SCHEMA public FROM SERVER festapp_stage_a INTO festapp_stage_a_public;
IMPORT FOREIGN SCHEMA eshop FROM SERVER festapp_stage_a INTO festapp_stage_a_eshop;
IMPORT FOREIGN SCHEMA festapp_managed_source LIMIT TO (rows) FROM SERVER festapp_stage_a INTO festapp_stage_a_managed;
SQL

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/foreign-staging-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"
psql_db postgres -Atqc "SELECT jsonb_build_object(
  'foreign_tables', (SELECT count(*) FROM pg_foreign_table ft JOIN pg_class c ON c.oid=ft.ftrelid JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname LIKE 'festapp_stage_%'),
  'default_managed_rows', (SELECT count(*) FROM festapp_stage_default_managed.rows),
  'a_managed_rows', (SELECT count(*) FROM festapp_stage_a_managed.rows),
  'reader_login', (SELECT rolcanlogin FROM pg_roles WHERE rolname='$READER_ROLE'),
  'reader_bypass_rls', (SELECT rolbypassrls FROM pg_roles WHERE rolname='$READER_ROLE')
)" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Read-only local FDW staging bridge prepared."
echo "Evidence: $RUN_DIR"
