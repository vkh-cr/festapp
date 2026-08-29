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

for tenant in festapp festapptickets absolventskyvelehrad cavfotofest csmostrava2026 festivalslunovrat hvezdamorska; do
  root="$TMP_ROOT/$tenant"
  copy_worktree "$root"
  config="$PROJECT_ROOT/automation/tests/fixtures/tenants/$tenant.conf"
  (cd "$root" && bash automation/apply_config.sh "$config" >/dev/null)
  hash_generated "$root" > "$TMP_ROOT/$tenant.first.sha256"
  (cd "$root" && bash automation/apply_config.sh "$config" >/dev/null)
  hash_generated "$root" > "$TMP_ROOT/$tenant.second.sha256"
  cmp "$TMP_ROOT/$tenant.first.sha256" "$TMP_ROOT/$tenant.second.sha256"
done

grep -qE 'fixturecsm' "$TMP_ROOT/csmostrava2026/lib/app_config.dart"
grep -qE 'fixtureav' "$TMP_ROOT/absolventskyvelehrad/lib/app_config.dart"
grep -qE 'organization = 5' "$TMP_ROOT/absolventskyvelehrad/web_client/src/app_config.js"
grep -qF "static const String appName = 'Absolventský Velehrad';" "$TMP_ROOT/absolventskyvelehrad/lib/app_config.dart"
grep -qF '<meta name="apple-mobile-web-app-title" content="AV">' "$TMP_ROOT/absolventskyvelehrad/web/index.html"
grep -qF 'Mobilní aplikace pro Absolventský Velehrad.' "$TMP_ROOT/absolventskyvelehrad/web/site.webmanifest"
grep -qF "imageApiUrl = 'https://image-api.festapp.net'" "$TMP_ROOT/absolventskyvelehrad/web_client/src/app_config.js"
grep -qF "backendActivationTenantId = '';" "$TMP_ROOT/absolventskyvelehrad/lib/app_config.dart"
grep -qF 'backendActivationCanonicalOrganizationId = 0' "$TMP_ROOT/absolventskyvelehrad/web_client/src/app_config.js"
grep -qE 'fixturecav' "$TMP_ROOT/cavfotofest/lib/app_config.dart"
grep -qE 'fixturehm' "$TMP_ROOT/hvezdamorska/lib/app_config.dart"
grep -qF "supabaseUrl = 'https://fixtureslunovrat.supabase.co'" "$TMP_ROOT/festivalslunovrat/lib/app_config.dart"
grep -qE 'organization = 5' "$TMP_ROOT/festivalslunovrat/web_client/src/app_config.js"
grep -qF "backendActivationTenantId = 'festivalslunovrat'" "$TMP_ROOT/festivalslunovrat/lib/app_config.dart"
grep -qF "backendActivationCanonicalSupabaseUrl = 'https://api.festapp.net'" "$TMP_ROOT/festivalslunovrat/web_client/src/app_config.js"
grep -qF 'backendActivationCanonicalOrganizationId = 19' "$TMP_ROOT/festivalslunovrat/web_client/src/app_config.js"
! grep -qF "backendActivationCanonicalSupabaseUrl = 'https://fixtureslunovrat.supabase.co'" "$TMP_ROOT/festivalslunovrat/web_client/src/app_config.js"
cmp "$TMP_ROOT/festivalslunovrat/web/backend-activation.json" \
  "$TMP_ROOT/festivalslunovrat/web_client/public/backend-activation.json"
grep -qF '"generation":0,"backend":"legacy"' \
  "$TMP_ROOT/festivalslunovrat/web/backend-activation.json"
grep -qE "supportedLanguages = \['cs', 'en', 'pl'\]" "$TMP_ROOT/festivalslunovrat/web_client/src/app_config.js"
grep -qE 'organization = 4' "$TMP_ROOT/hvezdamorska/web_client/src/app_config.js"
grep -qE 'organization = 3' "$TMP_ROOT/cavfotofest/web_client/src/app_config.js"
grep -qE 'organization = 3' "$TMP_ROOT/festapptickets/web_client/src/app_config.js"
grep -qE 'static const bool isAppSupported = false;' "$TMP_ROOT/festapptickets/lib/app_config.dart"
grep -qF "backendActivationTenantId = 'cavfotofest'" "$TMP_ROOT/cavfotofest/lib/app_config.dart"
grep -qF 'backendActivationCanonicalOrganizationId = 6' "$TMP_ROOT/cavfotofest/web_client/src/app_config.js"
grep -qE 'static const bool isAllUnit = true;' "$TMP_ROOT/hvezdamorska/lib/app_config.dart"
grep -qE "supportedLanguages = \['cs', 'en'\]" "$TMP_ROOT/hvezdamorska/web_client/src/app_config.js"
grep -qE 'CSM Fixture' "$TMP_ROOT/csmostrava2026/web/delete-account/index.html"
grep -qE 'fixturecsm.supabase.co/functions/v1/confirm-account-deletion' "$TMP_ROOT/csmostrava2026/web/delete-account/index.html"
grep -qE 'HM Fixture' "$TMP_ROOT/hvezdamorska/web/delete-account/index.html"
grep -qE 'fixturehm.supabase.co/functions/v1/confirm-account-deletion' "$TMP_ROOT/hvezdamorska/web/delete-account/index.html"
! grep -qE 'fixturecsm|csmostrava2026|fixture_csm|CSM Fixture' "$TMP_ROOT/hvezdamorska/lib/app_config.dart" "$TMP_ROOT/hvezdamorska/web_client/src/app_config.js" "$TMP_ROOT/hvezdamorska/web/index.html" "$TMP_ROOT/hvezdamorska/web/delete-account/index.html"
! grep -qE 'fixturehm|fixture_hm|HM Fixture' "$TMP_ROOT/csmostrava2026/lib/app_config.dart" "$TMP_ROOT/csmostrava2026/web_client/src/app_config.js" "$TMP_ROOT/csmostrava2026/web/index.html" "$TMP_ROOT/csmostrava2026/web/delete-account/index.html"
! grep -qE 'fixturecsm|fixturehm|fixture_csm|fixture_hm|CSM Fixture|HM Fixture' "$TMP_ROOT/cavfotofest/lib/app_config.dart" "$TMP_ROOT/cavfotofest/web_client/src/app_config.js" "$TMP_ROOT/cavfotofest/web/index.html" "$TMP_ROOT/cavfotofest/web/delete-account/index.html"
! grep -qE 'fixturecsm|fixturehm|fixture_csm|fixture_hm|CSM Fixture|HM Fixture' "$TMP_ROOT/festivalslunovrat/lib/app_config.dart" "$TMP_ROOT/festivalslunovrat/web_client/src/app_config.js" "$TMP_ROOT/festivalslunovrat/web/index.html" "$TMP_ROOT/festivalslunovrat/web/delete-account/index.html"

echo "Tenant config matrix passed"
