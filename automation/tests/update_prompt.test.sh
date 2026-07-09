#!/bin/bash
# ==============================================================================
# Auto-update build wiring smoke test
#
# Covers the build-time half of the "automatická vylepšená aktualizace":
#   1. configure_version.js stamps window.__FESTAPP_BUILD_VERSION__ into
#      web/index.html.
#   2. emit_version_manifest.sh writes festapp-version.json + a version-stamped
#      main.dart copy into a built web dir.
#
# Strategy: run both against a temp tree seeded from the real repo files, so a
# regression in the regex / filename munging is caught without Flutter or npm.
#
# Usage: ./automation/tests/update_prompt.test.sh
# Exits non-zero on the first failure.
# ==============================================================================
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

TMP_ROOT="$(mktemp -d)"
trap 'rm -rf "$TMP_ROOT"' EXIT
echo "Temp project root: $TMP_ROOT"

fail=0
assert_contains() {
    local file="$1" needle="$2"
    if grep -F -q "$needle" "$file"; then
        echo "  ok: $(basename "$file") contains '$needle'"
    else
        echo "  FAIL: $(basename "$file") missing '$needle'"
        fail=1
    fi
}
assert_file() {
    if [ -f "$1" ]; then
        echo "  ok: $(basename "$1") exists"
    else
        echo "  FAIL: expected file missing: $1"
        fail=1
    fi
}

# ---------------------------------------------------------------------------
# 1. configure_version.js stamps web/index.html
# ---------------------------------------------------------------------------
echo
echo "--- configure_version.js stamps __FESTAPP_BUILD_VERSION__ ---"

mkdir -p "$TMP_ROOT/automation" "$TMP_ROOT/web" "$TMP_ROOT/web_client/src"
cp "$PROJECT_ROOT/automation/configure_version.js" "$TMP_ROOT/automation/configure_version.js"
cp "$PROJECT_ROOT/web/index.html"                  "$TMP_ROOT/web/index.html"
# Minimal pubspec + package.json so the earlier steps of the script do not warn-fail.
printf 'name: festapp\nversion: 0.0.0+1\n' > "$TMP_ROOT/pubspec.yaml"
printf '{\n  "name": "web_client",\n  "version": "0.0.0"\n}\n' > "$TMP_ROOT/web_client/package.json"

( cd "$TMP_ROOT" && node automation/configure_version.js 1.2.3+456 > configure.log 2>&1 ) || {
    echo "  FAIL: configure_version.js exited non-zero. Log:"; cat "$TMP_ROOT/configure.log"; fail=1;
}
assert_contains "$TMP_ROOT/web/index.html" 'window.__FESTAPP_BUILD_VERSION__ = "1.2.3+456";'
# Idempotent second run should keep the same value.
( cd "$TMP_ROOT" && node automation/configure_version.js 1.2.3+456 >> configure.log 2>&1 ) || fail=1
assert_contains "$TMP_ROOT/web/index.html" 'window.__FESTAPP_BUILD_VERSION__ = "1.2.3+456";'

# ---------------------------------------------------------------------------
# 2. emit_version_manifest.sh writes the manifest + stamped main.dart copy
# ---------------------------------------------------------------------------
echo
echo "--- emit_version_manifest.sh writes festapp-version.json + stamped main ---"

BUILD_DIR="$TMP_ROOT/build/web"
mkdir -p "$BUILD_DIR"
printf '// fake compiled app\n' > "$BUILD_DIR/main.dart.js"
cp "$PROJECT_ROOT/automation/emit_version_manifest.sh" "$TMP_ROOT/automation/emit_version_manifest.sh"
chmod +x "$TMP_ROOT/automation/emit_version_manifest.sh"

"$TMP_ROOT/automation/emit_version_manifest.sh" "$BUILD_DIR" "1.2.3+456" > "$TMP_ROOT/emit.log" 2>&1 || {
    echo "  FAIL: emit_version_manifest.sh exited non-zero. Log:"; cat "$TMP_ROOT/emit.log"; fail=1;
}
assert_file    "$BUILD_DIR/festapp-version.json"
assert_file    "$BUILD_DIR/main.dart.1.2.3-456.js"   # '+' becomes '-' in the filename
assert_contains "$BUILD_DIR/festapp-version.json" '"version":"1.2.3+456"'
assert_contains "$BUILD_DIR/festapp-version.json" '"main":"main.dart.1.2.3-456.js"'

# The stamped copy must be byte-identical to the entrypoint it mirrors.
if cmp -s "$BUILD_DIR/main.dart.js" "$BUILD_DIR/main.dart.1.2.3-456.js"; then
    echo "  ok: stamped main.dart copy matches main.dart.js"
else
    echo "  FAIL: stamped main.dart copy differs from main.dart.js"; fail=1
fi

# Missing main.dart.js must fail loudly rather than emit a dangling manifest.
echo
echo "--- emit_version_manifest.sh fails when main.dart.js is absent ---"
EMPTY_DIR="$TMP_ROOT/build/empty"
mkdir -p "$EMPTY_DIR"
if "$TMP_ROOT/automation/emit_version_manifest.sh" "$EMPTY_DIR" "1.2.3+456" > /dev/null 2>&1; then
    echo "  FAIL: expected non-zero exit when main.dart.js is missing"; fail=1
else
    echo "  ok: exits non-zero when main.dart.js is missing"
fi

echo
if [ $fail -ne 0 ]; then
    echo "❌ update_prompt build wiring test FAILED"
    exit 1
fi
echo "✅ update_prompt build wiring test passed"
