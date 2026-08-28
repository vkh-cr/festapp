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
[[ "${FESTAPP_REHEARSAL_ACK:-}" == "extend-private-merge-source-registry-additively" ||
   "${FESTAPP_REHEARSAL_ACK:-}" == "validate-extended-private-merge-source-registry" ]] || fail "set the additive merge-registry acknowledgement"
[[ "$TARGET_DATABASE" =~ ^festapp_rehearsal_[0-9]{14}$ ]] || fail "registry extension is restricted to a timestamped rehearsal database"
[[ "$SOURCE_ALIAS" =~ ^[a-z][a-z0-9_]{0,19}$ ]] || fail "invalid source alias"
[[ -f "$REGISTRY_FILE" && "$(jq -r --arg source "$SOURCE_ALIAS" '.sources[]|select(.alias==$source)|.role' "$REGISTRY_FILE")" == "merge-source" ]] || fail "source is not a registered merge source"
[[ "$(id -u)" == "0" && "$(hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "run as root on the approved rehearsal host"

mapfile -t REGISTRY_SOURCES < <(jq -r '.sources[].alias' "$REGISTRY_FILE")
expected_old="$(for source in "${REGISTRY_SOURCES[@]}"; do [[ "$source" == "$SOURCE_ALIAS" ]] || echo "$source"; done | sort | paste -sd, -)"
readonly EXPECTED_PREDECESSOR_RUNS="$((${#REGISTRY_SOURCES[@]} - 1))"
new_csv="$(printf '%s\n' "${REGISTRY_SOURCES[@]}" | paste -sd, -)"
old_array="$(for source in "${REGISTRY_SOURCES[@]}"; do [[ "$source" == "$SOURCE_ALIAS" ]] || printf "'%s'::text, " "$source"; done)"
readonly EXPECTED_OLD_CONSTRAINT="CHECK ((source_alias = ANY (ARRAY[${old_array%, }])))"
readonly EXPECTED_NEW_CONSTRAINT="CHECK ((source_alias = ANY (string_to_array('$new_csv'::text, ','::text))))"

cd "$COMPOSE_DIR"
docker compose config -q
psql_main() { docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d "$TARGET_DATABASE" "$@"; }
readonly RUN_STATE="$(psql_main -Atqc "SELECT concat_ws('|',(SELECT string_agg(source_alias,',' ORDER BY source_alias) FROM festapp_merge.import_runs),(SELECT count(*) FROM festapp_merge.import_runs WHERE status<>'validated'),(SELECT count(*) FROM festapp_merge.import_runs WHERE source_alias='$SOURCE_ALIAS'))")"
[[ "$RUN_STATE" == "$expected_old|0|0" ]] || fail "merge runs are not the exact additive predecessor state ($RUN_STATE)"
readonly CONSTRAINT_BEFORE="$(psql_main -Atqc "SELECT pg_get_constraintdef(oid) FROM pg_constraint WHERE conrelid='festapp_merge.import_runs'::regclass AND conname='import_runs_source_alias_check'")"
if [[ "${FESTAPP_REHEARSAL_ACK}" == "extend-private-merge-source-registry-additively" ]]; then
  [[ "$CONSTRAINT_BEFORE" == "$EXPECTED_OLD_CONSTRAINT" ]] || fail "merge registry constraint is not the exact predecessor contract ($CONSTRAINT_BEFORE)"
else
  [[ "$CONSTRAINT_BEFORE" == "$EXPECTED_NEW_CONSTRAINT" ]] || fail "merge registry resume constraint is not the exact extended contract ($CONSTRAINT_BEFORE)"
fi

install -d -o root -g root -m 0700 "$EVIDENCE_ROOT"
run_dir="$EVIDENCE_ROOT/merge-source-registry-$(date -u +%Y%m%dT%H%M%SZ)"
install -d -o root -g root -m 0700 "$run_dir"
if [[ "${FESTAPP_REHEARSAL_ACK}" == "extend-private-merge-source-registry-additively" ]]; then
psql_main -v source_aliases="$new_csv" <<'SQL'
BEGIN;
ALTER TABLE festapp_merge.import_runs
  ADD CONSTRAINT import_runs_source_alias_registry_v2_check
  CHECK (source_alias = ANY (string_to_array(:'source_aliases', ','))) NOT VALID;
ALTER TABLE festapp_merge.import_runs VALIDATE CONSTRAINT import_runs_source_alias_registry_v2_check;
ALTER TABLE festapp_merge.import_runs DROP CONSTRAINT import_runs_source_alias_check;
ALTER TABLE festapp_merge.import_runs RENAME CONSTRAINT import_runs_source_alias_registry_v2_check TO import_runs_source_alias_check;
COMMIT;
SQL
fi

post_state="$(psql_main -Atqc "SELECT concat_ws('|',(SELECT pg_get_constraintdef(oid) FROM pg_constraint WHERE conrelid='festapp_merge.import_runs'::regclass AND conname='import_runs_source_alias_check'),(SELECT count(*) FROM festapp_merge.import_runs),(SELECT count(*) FROM festapp_merge.import_runs WHERE status<>'validated'))")"
expected_new_sorted="$(printf '%s\n' "${REGISTRY_SOURCES[@]}" | sort | paste -sd, -)"
[[ "$post_state" == "$EXPECTED_NEW_CONSTRAINT|$EXPECTED_PREDECESSOR_RUNS|0" ]] || fail "merge registry extension postcondition failed ($post_state)"
jq -n --arg source "$SOURCE_ALIAS" --arg registry_sha256 "$(sha256sum "$REGISTRY_FILE" | awk '{print $1}')" --arg before "$expected_old" --arg after "$expected_new_sorted" '{source:$source,registry_sha256:$registry_sha256,allowed_before:($before|split(",")),allowed_after:($after|split(",")),rows_changed:0,rows_deleted:0}' >"$run_dir/result.json"
chmod 0600 "$run_dir/result.json"
echo "Private merge source registry extended additively: $SOURCE_ALIAS"
echo "Evidence: $run_dir"
