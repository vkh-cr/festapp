#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly EXPECTED_POSTGRES_MAJOR="17"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"
readonly DATABASES=(festapp_stage_default festapp_stage_a)

fail() { echo "ERROR: $*" >&2; exit 1; }

readonly ACK="${FESTAPP_REHEARSAL_ACK:-}"
[[ "$ACK" == "prepare-empty-source-staging-databases" || "$ACK" == "resume-after-vault-schema-fix" ]] ||
  fail "set FESTAPP_REHEARSAL_ACK=prepare-empty-source-staging-databases"
[[ "$(id -u)" == "0" ]] || fail "run as root on the isolated rehearsal host"
[[ "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "refusing unexpected host"
[[ -f "$COMPOSE_DIR/docker-compose.yml" ]] || fail "missing pinned Supabase runtime"
cd "$COMPOSE_DIR"
docker compose config -q

psql_main() { docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d postgres "$@"; }
readonly STATE="$(psql_main -Atqc "SELECT concat_ws('|', split_part(current_setting('server_version'),'.',1), (SELECT count(*) FROM pg_database WHERE datname IN ('festapp_stage_default','festapp_stage_a')), to_regnamespace('festapp_merge') IS NOT NULL, (SELECT count(*) FROM auth.users), (SELECT count(*) FROM storage.objects))")"
if [[ "$ACK" == "prepare-empty-source-staging-databases" ]]; then
  [[ "$STATE" == "$EXPECTED_POSTGRES_MAJOR|0|t|0|0" ]] || fail "target is not approved staging foundation ($STATE)"
else
  [[ "$STATE" == "$EXPECTED_POSTGRES_MAJOR|1|t|0|0" ]] || fail "target is not approved vault-schema resume state ($STATE)"
  readonly RESUME_DATABASES="$(psql_main -Atqc "SELECT string_agg(datname, ',' ORDER BY datname) FROM pg_database WHERE datname IN ('festapp_stage_default','festapp_stage_a')")"
  readonly RESUME_EXTENSIONS="$(docker compose exec -T db psql -X -Atqc "SELECT string_agg(extname, ',' ORDER BY extname) FROM pg_extension" -U postgres -d festapp_stage_default)"
  [[ "$RESUME_DATABASES" == "festapp_stage_default" ]] || fail "unexpected resume database set"
  [[ "$RESUME_EXTENSIONS" == "http,moddatetime,pg_net,pg_stat_statements,pg_trgm,pgaudit,pgcrypto,pgjwt,plpgsql,unaccent,uuid-ossp" ]] ||
    fail "unexpected resume extension set"
fi

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_DIR="$EVIDENCE_ROOT/source-staging-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$RUN_DIR"

for database in "${DATABASES[@]}"; do
  database_exists="$(psql_main -Atqc "SELECT count(*) FROM pg_database WHERE datname = '$database'")"
  if [[ "$database_exists" == "0" ]]; then
  psql_main -v database="$database" <<'SQL'
SELECT format('CREATE DATABASE %I TEMPLATE template0', :'database') \gexec
SELECT format('REVOKE CONNECT ON DATABASE %I FROM PUBLIC, anon, authenticated, service_role', :'database') \gexec
SQL
  fi
  docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d "$database" <<'SQL'
CREATE SCHEMA IF NOT EXISTS extensions AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS vault AUTHORIZATION postgres;
CREATE EXTENSION IF NOT EXISTS http WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS moddatetime WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pgaudit WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pgjwt WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS supabase_vault WITH SCHEMA vault;
SELECT format('REVOKE ALL ON DATABASE %I FROM anon, authenticated, service_role', current_database()) \gexec
REVOKE ALL ON SCHEMA public, extensions, vault FROM PUBLIC, anon, authenticated, service_role;
SQL
done

psql_main -Atqc "SELECT jsonb_agg(jsonb_build_object('database', datname, 'allow_connections', datallowconn) ORDER BY datname) FROM pg_database WHERE datname IN ('festapp_stage_default','festapp_stage_a')" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"
echo "Two locked empty source staging databases prepared."
echo "Evidence: $RUN_DIR"
