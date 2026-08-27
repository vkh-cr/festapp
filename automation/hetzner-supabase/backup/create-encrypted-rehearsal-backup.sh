#!/usr/bin/env bash
set -euo pipefail

readonly PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
readonly SSH_TARGET="${FESTAPP_REHEARSAL_SSH_TARGET:-root@46.224.187.4}"
readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly COMPOSE_DIR="/opt/festapp-supabase/docker"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_BACKUP_ACK:-}" == "create-encrypted-append-only-rehearsal-backup" ]] ||
  fail "set FESTAPP_BACKUP_ACK=create-encrypted-append-only-rehearsal-backup"
[[ -n "${FESTAPP_BACKUP_OUTPUT_DIR:-}" && "$FESTAPP_BACKUP_OUTPUT_DIR" == /* ]] ||
  fail "FESTAPP_BACKUP_OUTPUT_DIR must be an absolute path outside the repository"
[[ -f "${FESTAPP_BACKUP_RECIPIENT_FILE:-}" ]] || fail "FESTAPP_BACKUP_RECIPIENT_FILE is required"
case "$FESTAPP_BACKUP_OUTPUT_DIR/" in "$PROJECT_ROOT/"*) fail "backup output must be outside the repository";; esac
command -v age >/dev/null || fail "age is required"
command -v jq >/dev/null || fail "jq is required"
[[ "$(ssh -o BatchMode=yes "$SSH_TARGET" hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "unexpected rehearsal host"

readonly RUN_ID="$(date -u +%Y%m%dT%H%M%SZ)"
readonly RUN_DIR="$FESTAPP_BACKUP_OUTPUT_DIR/$RUN_ID"
[[ ! -e "$RUN_DIR" ]] || fail "refusing to overwrite backup $RUN_DIR"
install -d -m 0700 "$RUN_DIR"

stream_remote() {
  local output="$1" remote_command="$2"
  ssh -o BatchMode=yes "$SSH_TARGET" "$remote_command" |
    age -R "$FESTAPP_BACKUP_RECIPIENT_FILE" -o "$output"
  [[ -s "$output" ]] || fail "empty encrypted artifact: $output"
  chmod 0600 "$output"
}

stream_remote "$RUN_DIR/postgres.dump.age" \
  "cd $COMPOSE_DIR && docker compose exec -T db pg_dump -U postgres -d postgres -Fc --no-owner --no-acl"
stream_remote "$RUN_DIR/globals.sql.age" \
  "cd $COMPOSE_DIR && docker compose exec -T db pg_dumpall -U postgres --globals-only"
stream_remote "$RUN_DIR/storage.tar.age" \
  "tar -C $COMPOSE_DIR/volumes/storage -cf - ."
stream_remote "$RUN_DIR/runtime.tar.age" \
  "tar -C /opt/festapp-supabase -cf - docker/.env docker/docker-compose.yml docker/docker-compose.festapp.yml docker/volumes/functions docker/volumes/proxy"

readonly REMOTE_STATE="$(ssh -o BatchMode=yes "$SSH_TARGET" "cd $COMPOSE_DIR &&
  docker compose exec -T db psql -X -U postgres -d postgres -Atqc \"SELECT jsonb_build_object(
    'database_bytes',pg_database_size(current_database()),
    'auth_users',(SELECT count(*) FROM auth.users),
    'storage_objects',(SELECT count(*) FROM storage.objects),
    'public_scopes',(SELECT count(*) FROM public.client_sync_scopes),
    'validated_imports',(SELECT count(*) FROM festapp_merge.import_runs WHERE status='validated'))\" | tr -d '\\n';
  find volumes/storage -type f -printf '%s\\n' | awk '{bytes+=\$1; count+=1} END {printf \"|%d|%d\\n\",count,bytes}'")"
readonly DB_JSON="${REMOTE_STATE%%|*}"
readonly STORAGE_FILE_COUNT="$(cut -d'|' -f2 <<<"$REMOTE_STATE")"
readonly STORAGE_BYTES="$(cut -d'|' -f3 <<<"$REMOTE_STATE")"

jq -n \
  --arg runId "$RUN_ID" --arg sourceHost "$EXPECTED_HOSTNAME" --arg createdAt "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --argjson database "$DB_JSON" --argjson storageFiles "$STORAGE_FILE_COUNT" --argjson storageBytes "$STORAGE_BYTES" \
  --arg postgresSha "$(shasum -a 256 "$RUN_DIR/postgres.dump.age" | awk '{print $1}')" \
  --arg globalsSha "$(shasum -a 256 "$RUN_DIR/globals.sql.age" | awk '{print $1}')" \
  --arg storageSha "$(shasum -a 256 "$RUN_DIR/storage.tar.age" | awk '{print $1}')" \
  --arg runtimeSha "$(shasum -a 256 "$RUN_DIR/runtime.tar.age" | awk '{print $1}')" \
  '{version:1,run_id:$runId,created_at:$createdAt,source_host:$sourceHost,
    encrypted:true,plaintext_artifacts_written:false,cloud_sources_mutated:false,
    database:$database,storage:{files:$storageFiles,bytes:$storageBytes},
    artifacts:{postgres_dump:{file:"postgres.dump.age",sha256:$postgresSha},globals:{file:"globals.sql.age",sha256:$globalsSha},storage:{file:"storage.tar.age",sha256:$storageSha},runtime:{file:"runtime.tar.age",sha256:$runtimeSha}}}' \
  >"$RUN_DIR/manifest.json"
chmod 0600 "$RUN_DIR/manifest.json"

echo "Encrypted append-only rehearsal backup created: $RUN_DIR"
