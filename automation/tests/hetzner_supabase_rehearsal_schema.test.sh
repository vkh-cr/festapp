#!/usr/bin/env bash
set -euo pipefail

readonly PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
readonly SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/build-canonical-schema.sh"
readonly STAGING_SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/prepare-merge-staging.sh"

[[ -x "$SCRIPT" ]] || { echo "rehearsal schema builder must be executable" >&2; exit 1; }
[[ -x "$STAGING_SCRIPT" ]] || { echo "merge staging builder must be executable" >&2; exit 1; }

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

echo "Rehearsal canonical-schema safety contract passed."
