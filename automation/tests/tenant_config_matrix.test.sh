#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
TMP_ROOT=$(mktemp -d /tmp/festapp-config-matrix.XXXXXX)
trap 'rm -rf "$TMP_ROOT"' EXIT

copy_worktree() {
  local target=$1
  mkdir -p "$target"
  (cd "$PROJECT_ROOT" && while IFS= read -r -d '' path; do
    [[ -e "$path" || -L "$path" ]] && printf '%s\0' "$path"
  done < <(git ls-files -co --exclude-standard -z)) |
    (cd "$PROJECT_ROOT" && tar --null -T - -cf -) |
    tar -xf - -C "$target"
}

hash_generated() {
  local root=$1 path
  while IFS= read -r path; do
    [[ -z "$path" || "$path" == \#* ]] && continue
    if [[ -f "$root/$path" ]]; then
      shasum -a 256 "$root/$path"
    else
      printf 'missing  %s\n' "$path"
    fi
  done < "$PROJECT_ROOT/automation/tenant-overlays/generated.paths"
}

for tenant in festapp csmostrava2026 hvezdamorska; do
  root="$TMP_ROOT/$tenant"
  copy_worktree "$root"
  config="$PROJECT_ROOT/automation/tests/fixtures/tenants/$tenant.conf"
  (cd "$root" && bash automation/apply_config.sh "$config" >/dev/null)
  hash_generated "$root" > "$TMP_ROOT/$tenant.first.sha256"
  (cd "$root" && bash automation/apply_config.sh "$config" >/dev/null)
  hash_generated "$root" > "$TMP_ROOT/$tenant.second.sha256"
  cmp "$TMP_ROOT/$tenant.first.sha256" "$TMP_ROOT/$tenant.second.sha256"
done

rg -q 'fixturecsm' "$TMP_ROOT/csmostrava2026/lib/app_config.dart"
rg -q 'fixturehm' "$TMP_ROOT/hvezdamorska/lib/app_config.dart"
rg -q 'organization = 4' "$TMP_ROOT/hvezdamorska/web_client/src/app_config.js"
rg -q "supportedLanguages = \['cs', 'en'\]" "$TMP_ROOT/hvezdamorska/web_client/src/app_config.js"
! rg -q 'fixturecsm|csmostrava2026|fixture_csm' "$TMP_ROOT/hvezdamorska/lib/app_config.dart" "$TMP_ROOT/hvezdamorska/web_client/src/app_config.js" "$TMP_ROOT/hvezdamorska/web/index.html"
! rg -q 'fixturehm|fixture_hm' "$TMP_ROOT/csmostrava2026/lib/app_config.dart" "$TMP_ROOT/csmostrava2026/web_client/src/app_config.js" "$TMP_ROOT/csmostrava2026/web/index.html"

echo "Tenant config matrix passed"
