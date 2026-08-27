#!/usr/bin/env bash
set -euo pipefail

readonly SSH_TARGET="${FESTAPP_REHEARSAL_SSH_TARGET:-root@46.224.187.4}"
readonly EXPECTED_HOSTNAME="festapp-supabase-rehearsal-01"
readonly COMPOSE_DIR="/opt/festapp-supabase/docker"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "${FESTAPP_RESTORE_ACK:-}" == "restore-encrypted-backup-into-new-isolated-target" ]] ||
  fail "set FESTAPP_RESTORE_ACK=restore-encrypted-backup-into-new-isolated-target"
[[ -d "${FESTAPP_BACKUP_RUN_DIR:-}" ]] || fail "FESTAPP_BACKUP_RUN_DIR is required"
[[ -f "${FESTAPP_BACKUP_IDENTITY_FILE:-}" ]] || fail "FESTAPP_BACKUP_IDENTITY_FILE is required"
command -v age >/dev/null || fail "age is required"
command -v jq >/dev/null || fail "jq is required"
[[ "$(ssh -o BatchMode=yes "$SSH_TARGET" hostname -s)" == "$EXPECTED_HOSTNAME" ]] || fail "unexpected rehearsal host"

readonly MANIFEST="$FESTAPP_BACKUP_RUN_DIR/manifest.json"
[[ -f "$MANIFEST" ]] || fail "backup manifest is missing"
for artifact in postgres.dump.age globals.sql.age storage.tar.age runtime.tar.age; do
  [[ -f "$FESTAPP_BACKUP_RUN_DIR/$artifact" ]] || fail "missing $artifact"
done
for item in postgres_dump globals storage runtime; do
  readonly_file="$(jq -r ".artifacts.$item.file" "$MANIFEST")"
  expected="$(jq -r ".artifacts.$item.sha256" "$MANIFEST")"
  observed="$(shasum -a 256 "$FESTAPP_BACKUP_RUN_DIR/$readonly_file" | awk '{print $1}')"
  [[ "$observed" == "$expected" ]] || fail "encrypted artifact checksum mismatch: $readonly_file"
done

readonly RUN_ID="$(jq -r .run_id "$MANIFEST")"
[[ "$RUN_ID" =~ ^[0-9]{8}T[0-9]{6}Z$ ]] || fail "invalid backup run id"
readonly ATTEMPT_ID="$RUN_ID-$(date -u +%Y%m%dT%H%M%SZ)"
readonly TARGET_DB="festapp_restore_${ATTEMPT_ID//[^0-9]/}"
readonly REMOTE_ROOT="/var/lib/festapp-restore-drills/$ATTEMPT_ID"
readonly EVIDENCE_ROOT="/var/lib/festapp-rehearsal-evidence/restore-drill-$ATTEMPT_ID"
readonly RESTORE_LIST="$FESTAPP_BACKUP_RUN_DIR/restore-$ATTEMPT_ID.list"
[[ ! -e "$RESTORE_LIST" ]] || fail "restore list already exists"

# pg_cron is intentionally installed only in the live `postgres` database on
# this cluster. An isolated drill database cannot create it; exclude only the
# extension and its comment from the otherwise complete archive list.
pg_restore --list < <(age -d -i "$FESTAPP_BACKUP_IDENTITY_FILE" "$FESTAPP_BACKUP_RUN_DIR/postgres.dump.age") |
  awk '/EXTENSION - pg_cron|COMMENT - EXTENSION pg_cron|TABLE DATA cron |SEQUENCE SET cron |FUNCTION extensions grant_pg_cron_access|COMMENT extensions FUNCTION grant_pg_cron_access|EVENT TRIGGER - issue_pg_cron_access/{print ";" $0; next} {print}' >"$RESTORE_LIST"
chmod 0600 "$RESTORE_LIST"

readonly EXISTS="$(ssh -o BatchMode=yes "$SSH_TARGET" "cd $COMPOSE_DIR && docker compose exec -T db psql -X -U postgres -d postgres -Atqc \"SELECT count(*) FROM pg_database WHERE datname='$TARGET_DB'\"")"
[[ "$EXISTS" == "0" ]] || fail "restore target database already exists"
ssh -o BatchMode=yes "$SSH_TARGET" "test ! -e '$REMOTE_ROOT' && install -d -o root -g root -m 0700 '$REMOTE_ROOT/storage' '$EVIDENCE_ROOT'"
ssh -o BatchMode=yes "$SSH_TARGET" "cd $COMPOSE_DIR && docker compose exec -T db createdb -U supabase_admin -O supabase_admin '$TARGET_DB'"
ssh -o BatchMode=yes "$SSH_TARGET" "cd $COMPOSE_DIR && docker compose exec -T db sh -c 'umask 077; tee /tmp/$TARGET_DB.restore.list >/dev/null'" <"$RESTORE_LIST"

age -d -i "$FESTAPP_BACKUP_IDENTITY_FILE" "$FESTAPP_BACKUP_RUN_DIR/postgres.dump.age" |
  ssh -o BatchMode=yes "$SSH_TARGET" "cd $COMPOSE_DIR && docker compose exec -T db pg_restore -U supabase_admin -d '$TARGET_DB' --exit-on-error -L /tmp/$TARGET_DB.restore.list"
age -d -i "$FESTAPP_BACKUP_IDENTITY_FILE" "$FESTAPP_BACKUP_RUN_DIR/storage.tar.age" |
  ssh -o BatchMode=yes "$SSH_TARGET" "tar -C '$REMOTE_ROOT/storage' -xf -"

readonly OBSERVED="$(ssh -o BatchMode=yes "$SSH_TARGET" "cd $COMPOSE_DIR &&
  docker compose exec -T db psql -X -U postgres -d '$TARGET_DB' -Atqc \"SELECT jsonb_build_object(
    'database_bytes',pg_database_size(current_database()),
    'auth_users',(SELECT count(*) FROM auth.users),
    'storage_objects',(SELECT count(*) FROM storage.objects),
    'public_scopes',(SELECT count(*) FROM public.client_sync_scopes),
    'validated_imports',(SELECT count(*) FROM festapp_merge.import_runs WHERE status='validated'))\" | tr -d '\\n';
  find '$REMOTE_ROOT/storage' -type f -printf '%s\\n' | awk '{bytes+=\$1; count+=1} END {printf \"|%d|%d\\n\",count,bytes}'")"
readonly OBSERVED_DB="${OBSERVED%%|*}"
readonly OBSERVED_FILES="$(cut -d'|' -f2 <<<"$OBSERVED")"
readonly OBSERVED_BYTES="$(cut -d'|' -f3 <<<"$OBSERVED")"

for key in auth_users storage_objects public_scopes validated_imports; do
  [[ "$(jq -r ".$key" <<<"$OBSERVED_DB")" == "$(jq -r ".database.$key" "$MANIFEST")" ]] || fail "restore mismatch: $key"
done
[[ "$OBSERVED_FILES" == "$(jq -r .storage.files "$MANIFEST")" ]] || fail "restored Storage file-count mismatch"
[[ "$OBSERVED_BYTES" == "$(jq -r .storage.bytes "$MANIFEST")" ]] || fail "restored Storage byte-count mismatch"

jq -n --arg runId "$RUN_ID" --arg attemptId "$ATTEMPT_ID" --arg targetDatabase "$TARGET_DB" --arg storagePath "$REMOTE_ROOT/storage" \
  --argjson database "$OBSERVED_DB" --argjson storageFiles "$OBSERVED_FILES" --argjson storageBytes "$OBSERVED_BYTES" \
  '{version:1,run_id:$runId,attempt_id:$attemptId,status:"pass",target_database:$targetDatabase,storage_path:$storagePath,
    database:$database,storage:{files:$storageFiles,bytes:$storageBytes},production_target_mutated:false,
    cluster_extension_exceptions:["pg_cron extension-owned objects are confined to the live postgres database"],cloud_sources_mutated:false,deleted_paths:[]}' |
  ssh -o BatchMode=yes "$SSH_TARGET" "umask 077; tee '$EVIDENCE_ROOT/result.json' >/dev/null"

echo "Encrypted restore drill passed: database=$TARGET_DB storage=$REMOTE_ROOT/storage"
