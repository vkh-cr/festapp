#!/usr/bin/env bash
set -euo pipefail

readonly PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
readonly SCRIPT="$PROJECT_ROOT/automation/hetzner-supabase/rehearsal/build-canonical-schema.sh"

[[ -x "$SCRIPT" ]] || { echo "rehearsal schema builder must be executable" >&2; exit 1; }

for required in \
  'FESTAPP_REHEARSAL_ACK' \
  'resume-after-baseline-ledger-fix' \
  '0|0|0|true|true|true|113|38' \
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

echo "Rehearsal canonical-schema safety contract passed."
