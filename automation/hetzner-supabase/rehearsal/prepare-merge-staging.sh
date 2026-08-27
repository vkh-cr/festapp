#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly EXPECTED_POSTGRES_MAJOR="17"
readonly EXPECTED_MIGRATION_COUNT="101"
readonly COMPOSE_DIR="${FESTAPP_REHEARSAL_COMPOSE_DIR:-/opt/festapp-supabase/docker}"
readonly EVIDENCE_ROOT="${FESTAPP_REHEARSAL_EVIDENCE_ROOT:-/var/lib/festapp-rehearsal-evidence}"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

[[ "${FESTAPP_REHEARSAL_ACK:-}" == "prepare-empty-private-merge-staging" ]] ||
  fail "set FESTAPP_REHEARSAL_ACK=prepare-empty-private-merge-staging"
[[ "$(id -u)" == "0" ]] || fail "run as root on the isolated rehearsal host"
[[ "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] ||
  fail "refusing host $(hostname -s); expected $EXPECTED_HOSTNAME"
[[ -f "$COMPOSE_DIR/docker-compose.yml" ]] || fail "missing pinned Supabase Compose runtime"
[[ -f "$COMPOSE_DIR/docker-compose.festapp.yml" ]] || fail "missing Festapp Compose override"

cd "$COMPOSE_DIR"
docker compose config -q
[[ "$(docker compose ps --status running --services | grep -x 'db' || true)" == "db" ]] ||
  fail "database service is not running"

psql_rehearsal() {
  docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d postgres "$@"
}

readonly PRECONDITION="$(psql_rehearsal -Atqc "SELECT concat_ws('|',
  split_part(current_setting('server_version'), '.', 1),
  (SELECT count(*) FROM supabase_migrations.schema_migrations),
  (SELECT count(*) FROM auth.users),
  (SELECT count(*) FROM storage.objects),
  to_regclass('public.organizations') IS NOT NULL,
  to_regnamespace('festapp_merge') IS NULL
)")"
[[ "$PRECONDITION" == "$EXPECTED_POSTGRES_MAJOR|$EXPECTED_MIGRATION_COUNT|0|0|t|t" ]] ||
  fail "target is not the approved empty canonical rehearsal state ($PRECONDITION)"

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
readonly RUN_ID="merge-staging-$(date -u +%Y%m%dT%H%M%SZ)"
readonly RUN_DIR="$EVIDENCE_ROOT/$RUN_ID"
install -d -o root -g root -m 0700 "$RUN_DIR"

docker compose exec -T db pg_dump -U postgres -d postgres --schema-only --no-owner \
  >"$RUN_DIR/pre-apply-schema.sql"
chmod 0600 "$RUN_DIR/pre-apply-schema.sql"

psql_rehearsal <<'SQL'
BEGIN;

CREATE SCHEMA festapp_merge AUTHORIZATION postgres;
REVOKE ALL ON SCHEMA festapp_merge FROM PUBLIC, anon, authenticated, service_role;

CREATE TABLE festapp_merge.import_runs (
  run_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_alias text NOT NULL CHECK (source_alias IN ('default', 'a')),
  source_project_ref text NOT NULL,
  snapshot_at timestamptz NOT NULL,
  source_schema_fingerprint text NOT NULL CHECK (source_schema_fingerprint ~ '^[0-9a-f]{64}$'),
  transformation_version text NOT NULL,
  status text NOT NULL DEFAULT 'prepared'
    CHECK (status IN ('prepared', 'staged', 'blocked', 'validated')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (source_alias, snapshot_at)
);

CREATE TABLE festapp_merge.id_mappings (
  run_id uuid NOT NULL REFERENCES festapp_merge.import_runs(run_id),
  source_table text NOT NULL,
  source_id text NOT NULL,
  target_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (run_id, source_table, source_id),
  UNIQUE (run_id, source_table, target_id)
);

CREATE TABLE festapp_merge.quarantined_rows (
  quarantine_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  run_id uuid NOT NULL REFERENCES festapp_merge.import_runs(run_id),
  source_table text NOT NULL,
  source_primary_key jsonb NOT NULL,
  source_row jsonb NOT NULL,
  reason text NOT NULL,
  decision text CHECK (decision IN ('repair', 'omit-with-ledger')),
  decision_evidence_sha256 text CHECK (
    decision_evidence_sha256 IS NULL OR decision_evidence_sha256 ~ '^[0-9a-f]{64}$'
  ),
  quarantined_at timestamptz NOT NULL DEFAULT now(),
  decided_at timestamptz,
  CHECK (
    (decision IS NULL AND decision_evidence_sha256 IS NULL AND decided_at IS NULL)
    OR
    (decision IS NOT NULL AND decision_evidence_sha256 IS NOT NULL AND decided_at IS NOT NULL)
  )
);

CREATE TABLE festapp_merge.validation_results (
  run_id uuid NOT NULL REFERENCES festapp_merge.import_runs(run_id),
  check_name text NOT NULL,
  status text NOT NULL CHECK (status IN ('pass', 'fail', 'blocked')),
  observed jsonb NOT NULL,
  checked_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (run_id, check_name)
);

REVOKE ALL ON ALL TABLES IN SCHEMA festapp_merge FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA festapp_merge FROM PUBLIC, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA festapp_merge
  REVOKE ALL ON TABLES FROM PUBLIC, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA festapp_merge
  REVOKE ALL ON SEQUENCES FROM PUBLIC, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA festapp_merge
  REVOKE ALL ON FUNCTIONS FROM PUBLIC, anon, authenticated, service_role;

COMMIT;
SQL

psql_rehearsal -Atqc "SELECT jsonb_build_object(
  'schema', 'festapp_merge',
  'tables', (SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname='festapp_merge' AND c.relkind IN ('r','p')),
  'rows', (SELECT (SELECT count(*) FROM festapp_merge.import_runs) +
                  (SELECT count(*) FROM festapp_merge.id_mappings) +
                  (SELECT count(*) FROM festapp_merge.quarantined_rows) +
                  (SELECT count(*) FROM festapp_merge.validation_results)),
  'auth_users', (SELECT count(*) FROM auth.users),
  'storage_objects', (SELECT count(*) FROM storage.objects),
  'anon_schema_usage', has_schema_privilege('anon', 'festapp_merge', 'USAGE'),
  'authenticated_schema_usage', has_schema_privilege('authenticated', 'festapp_merge', 'USAGE'),
  'service_role_schema_usage', has_schema_privilege('service_role', 'festapp_merge', 'USAGE')
)" >"$RUN_DIR/result.json"
chmod 0600 "$RUN_DIR/result.json"

echo "Private empty merge staging prepared; no source rows imported."
echo "Evidence: $RUN_DIR"
