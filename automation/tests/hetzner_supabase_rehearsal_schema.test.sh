#!/usr/bin/env bash
set -euo pipefail

readonly PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
readonly SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/build-canonical-schema.sh"
readonly STAGING_SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/prepare-merge-staging.sh"
readonly SOURCE_DATABASE_SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/prepare-source-staging-databases.sh"
readonly FOREIGN_BRIDGE_SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/prepare-foreign-staging-bridge.sh"
readonly DEFAULT_IMPORT_SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/import-default-canonical.sh"

[[ -x "$SCRIPT" ]] || { echo "rehearsal schema builder must be executable" >&2; exit 1; }
[[ -x "$STAGING_SCRIPT" ]] || { echo "merge staging builder must be executable" >&2; exit 1; }
[[ -x "$SOURCE_DATABASE_SCRIPT" ]] || { echo "source staging database builder must be executable" >&2; exit 1; }
[[ -x "$FOREIGN_BRIDGE_SCRIPT" ]] || { echo "foreign staging bridge builder must be executable" >&2; exit 1; }
[[ -x "$DEFAULT_IMPORT_SCRIPT" ]] || { echo "default canonical importer must be executable" >&2; exit 1; }

for required in \
  'FESTAPP_REHEARSAL_ACK' \
  'resume-after-baseline-ledger-fix' \
  '0|0|0|t|t|t|113|38' \
  'festapp-supabase-rehearsal-01' \
  'EXPECTED_POSTGRES_MAJOR="17"' \
  'target is not an empty business-schema foundation' \
  'pg_dump -U postgres -d postgres --schema-only' \
  'auth_users' \
  'storage_objects'; do
  rg -Fq "$required" "$SCRIPT" || { echo "missing safety contract: $required" >&2; exit 1; }
done

if rg -n 'DROP (DATABASE|SCHEMA|TABLE)|TRUNCATE|DELETE FROM' "$SCRIPT"; then
  echo "rehearsal schema builder contains a destructive statement" >&2
  exit 1
fi

for required in \
  'prepare-empty-private-merge-staging' \
  'festapp-supabase-rehearsal-01' \
  'EXPECTED_POSTGRES_MAJOR="17"' \
  'EXPECTED_MIGRATION_COUNT="101"' \
  "to_regnamespace('festapp_merge') IS NULL" \
  'CREATE SCHEMA festapp_merge AUTHORIZATION postgres' \
  'CREATE TABLE festapp_merge.quarantined_rows' \
  "decision IN ('repair', 'omit-with-ledger')" \
  'REVOKE ALL ON SCHEMA festapp_merge FROM PUBLIC, anon, authenticated, service_role' \
  "'rows'" \
  "'auth_users'" \
  "'storage_objects'"; do
  rg -Fq "$required" "$STAGING_SCRIPT" || { echo "missing staging safety contract: $required" >&2; exit 1; }
done

if rg -n 'DROP (DATABASE|SCHEMA|TABLE)|TRUNCATE|DELETE FROM' "$STAGING_SCRIPT"; then
  echo "merge staging builder contains a destructive statement" >&2
  exit 1
fi

for required in \
  'prepare-empty-source-staging-databases' \
  'resume-after-vault-schema-fix' \
  'festapp-supabase-rehearsal-01' \
  'festapp_stage_default' \
  'festapp_stage_a' \
  'CREATE DATABASE %I TEMPLATE template0' \
  'REVOKE CONNECT ON DATABASE %I FROM PUBLIC, anon, authenticated, service_role' \
  'CREATE SCHEMA IF NOT EXISTS vault AUTHORIZATION postgres' \
  'FROM auth.users' \
  'FROM storage.objects'; do
  rg -Fq "$required" "$SOURCE_DATABASE_SCRIPT" || { echo "missing source staging safety contract: $required" >&2; exit 1; }
done

if rg -n 'DROP (DATABASE|SCHEMA|TABLE)|TRUNCATE|DELETE FROM' "$SOURCE_DATABASE_SCRIPT"; then
  echo "source staging database builder contains a destructive statement" >&2
  exit 1
fi

for required in \
  'prepare-read-only-foreign-staging-bridge' \
  'resume-through-internal-supavisor' \
  'festapp_stage_reader' \
  'VALID UNTIL' \
  'NOBYPASSRLS' \
  'GRANT SELECT ON ALL TABLES IN SCHEMA public, eshop, festapp_managed_source' \
  'CREATE EXTENSION postgres_fdw WITH SCHEMA extensions' \
  "OPTIONS (host 'supavisor', port '5432'" \
  "SET user 'festapp_stage_reader.your-tenant-id'" \
  'IMPORT FOREIGN SCHEMA public FROM SERVER festapp_stage_default' \
  'IMPORT FOREIGN SCHEMA public FROM SERVER festapp_stage_a' \
  'reader_bypass_rls'; do
  rg -Fq "$required" "$FOREIGN_BRIDGE_SCRIPT" || { echo "missing foreign bridge safety contract: $required" >&2; exit 1; }
done

if rg -n 'DROP (DATABASE|SCHEMA|TABLE)|TRUNCATE|DELETE FROM' "$FOREIGN_BRIDGE_SCRIPT"; then
  echo "foreign staging bridge contains a destructive statement" >&2
  exit 1
fi

for required in \
  'import-default-with-two-quarantined-companions' \
  'session_replication_role = replica' \
  'OVERRIDING SYSTEM VALUE' \
  'zero-common-occasion-legacy-orphan' \
  'imported_companions <> 1' \
  'quarantined_companions <> 2' \
  "SET status='blocked'" \
  "'auth-and-storage-import', 'blocked'"; do
  rg -Fq "$required" "$DEFAULT_IMPORT_SCRIPT" || { echo "missing default import safety contract: $required" >&2; exit 1; }
done

if rg -n 'DROP (DATABASE|SCHEMA|TABLE)|TRUNCATE|DELETE FROM' "$DEFAULT_IMPORT_SCRIPT"; then
  echo "default canonical importer contains a destructive statement" >&2
  exit 1
fi

echo "Rehearsal canonical-schema safety contract passed."
