#!/bin/bash
# ==============================================================================
# apply_config.sh smoke test
#
# Strategy: copy the real templates that apply_config.sh modifies into a temp
# tree, then run apply_config.sh against the fixture project.conf and assert
# the expected substitutions landed.
#
# Goal: catch regressions in the sed patterns and the portable sed wrapper,
# without spinning up Flutter or npm.
#
# Usage:
#   ./automation/tests/apply_config.test.sh
# Exits non-zero on the first failure.
# ==============================================================================
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
FIXTURE_CONF="$SCRIPT_DIR/fixtures/project.conf"

if [ ! -f "$FIXTURE_CONF" ]; then
    echo "Fixture missing: $FIXTURE_CONF"
    exit 1
fi

TMP_ROOT="$(mktemp -d)"
trap 'rm -rf "$TMP_ROOT"' EXIT

echo "Temp project root: $TMP_ROOT"

# 1. Stage the files apply_config.sh writes to. Use the real ones in the repo
#    as the starting state — that way we test against actual templates.
mkdir -p "$TMP_ROOT/automation" \
         "$TMP_ROOT/android/app/src/main/kotlin/fstapp/example" \
         "$TMP_ROOT/android/app/src/main" \
         "$TMP_ROOT/ios/Runner.xcodeproj" \
         "$TMP_ROOT/ios/Runner" \
         "$TMP_ROOT/ios/OneSignalNotificationServiceExtension" \
         "$TMP_ROOT/web/.well-known" \
         "$TMP_ROOT/web" \
         "$TMP_ROOT/web_client/src" \
         "$TMP_ROOT/web_client/public" \
         "$TMP_ROOT/lib" \
         "$TMP_ROOT/assets/icons"

cp "$PROJECT_ROOT/automation/apply_config.sh" "$TMP_ROOT/automation/apply_config.sh"
cp "$FIXTURE_CONF" "$TMP_ROOT/automation/project.conf"

# Snapshot real templates the script edits.
cp "$PROJECT_ROOT/web/index.html"            "$TMP_ROOT/web/index.html"
cp "$PROJECT_ROOT/web/site.webmanifest"      "$TMP_ROOT/web/site.webmanifest"
cp "$PROJECT_ROOT/web_client/index.html"     "$TMP_ROOT/web_client/index.html"
cp "$PROJECT_ROOT/web_client/public/site.webmanifest" "$TMP_ROOT/web_client/public/site.webmanifest"
cp "$PROJECT_ROOT/web_client/src/app_config.js" "$TMP_ROOT/web_client/src/app_config.js"
cp "$PROJECT_ROOT/web_client/public/auth_bridge.html" "$TMP_ROOT/web_client/public/auth_bridge.html"
cp "$PROJECT_ROOT/lib/app_config.dart"       "$TMP_ROOT/lib/app_config.dart"
cp "$PROJECT_ROOT/lib/theme_config.dart"     "$TMP_ROOT/lib/theme_config.dart"
cp "$PROJECT_ROOT/android/app/build.gradle" "$TMP_ROOT/android/app/build.gradle"
cp "$PROJECT_ROOT/android/app/src/main/AndroidManifest.xml" "$TMP_ROOT/android/app/src/main/AndroidManifest.xml"
cp "$PROJECT_ROOT/android/app/src/main/kotlin/fstapp/MainActivity.kt" "$TMP_ROOT/android/app/src/main/kotlin/fstapp/example/MainActivity.kt"
cp "$PROJECT_ROOT/ios/Runner.xcodeproj/project.pbxproj" "$TMP_ROOT/ios/Runner.xcodeproj/project.pbxproj"
cp "$PROJECT_ROOT/ios/Runner/Info.plist" "$TMP_ROOT/ios/Runner/Info.plist"
cp "$PROJECT_ROOT/ios/Runner/Runner.entitlements" "$TMP_ROOT/ios/Runner/Runner.entitlements"
cp "$PROJECT_ROOT/ios/OneSignalNotificationServiceExtension/Info.plist" "$TMP_ROOT/ios/OneSignalNotificationServiceExtension/Info.plist"
cp "$PROJECT_ROOT/ios/OneSignalNotificationServiceExtension/OneSignalNotificationServiceExtensionRelease.entitlements" "$TMP_ROOT/ios/OneSignalNotificationServiceExtension/OneSignalNotificationServiceExtensionRelease.entitlements"
cp "$PROJECT_ROOT/web/apple-app-site-association" "$TMP_ROOT/web/apple-app-site-association"
cp "$PROJECT_ROOT/web/.well-known/apple-app-site-association" "$TMP_ROOT/web/.well-known/apple-app-site-association"
cp "$PROJECT_ROOT/assets/icons/fstapplogo.svg" "$TMP_ROOT/assets/icons/fstapplogo.svg"
cp "$PROJECT_ROOT/assets/icons/fstapplogo.dark.svg" "$TMP_ROOT/assets/icons/fstapplogo.dark.svg"
cp "$PROJECT_ROOT/web/android-chrome-192x192.png" "$TMP_ROOT/web/android-chrome-192x192.png"

# theme_config.css is optional but typically present.
if [ -f "$PROJECT_ROOT/web_client/src/theme_config.css" ]; then
    cp "$PROJECT_ROOT/web_client/src/theme_config.css" "$TMP_ROOT/web_client/src/theme_config.css"
fi

# Skip the optional helper scripts apply_config.sh calls at the end (fonts,
# version) — they require Node and a fonts/ tree we are not staging.
# apply_config.sh only invokes them if the files exist, so leaving them out
# keeps the test focused.

# 2. Run apply_config.sh in the temp tree.
cd "$TMP_ROOT"
chmod +x automation/apply_config.sh
./automation/apply_config.sh > apply_config.log 2>&1 || {
    echo "apply_config.sh exited non-zero. Log:"
    cat apply_config.log
    exit 1
}

# 3. Assertions.
fail=0
assert_contains() {
    local file="$1" needle="$2"
    if grep -F -q "$needle" "$file"; then
        echo "  ok: $file contains '$needle'"
    else
        echo "  FAIL: $file missing '$needle'"
        fail=1
    fi
}
assert_missing() {
    local file="$1" needle="$2"
    if grep -F -q "$needle" "$file"; then
        echo "  FAIL: $file should not contain '$needle' anymore"
        fail=1
    else
        echo "  ok: $file does not contain '$needle'"
    fi
}

echo
echo "--- web/index.html (Flutter template) ---"
assert_contains "$TMP_ROOT/web/index.html" "<title>Test App Name</title>"
assert_contains "$TMP_ROOT/web/index.html" '<meta name="apple-mobile-web-app-title" content="TST">'
assert_contains "$TMP_ROOT/web/index.html" 'appId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"'
assert_contains "$TMP_ROOT/web/index.html" 'safari_web_id: "web.onesignal.auto.test"'
assert_contains "$TMP_ROOT/web/index.html" "app_generation: 'test_generation_v1'"
assert_contains "$TMP_ROOT/web/index.html" "occasion: 'test-occasion'"
if grep -F -q '<svg class="initial-logo"' "$PROJECT_ROOT/web/index.html"; then
    assert_contains "$TMP_ROOT/web/index.html" '<svg class="initial-logo"'
    assert_missing "$TMP_ROOT/web/index.html" '<img class="initial-logo"'
else
    assert_contains "$TMP_ROOT/web/index.html" '<img class="initial-logo" src="android-chrome-192x192.png"'
fi

echo
echo "--- installable PWA manifests ---"
for manifest in "$TMP_ROOT/web/site.webmanifest" "$TMP_ROOT/web_client/public/site.webmanifest"; do
    assert_contains "$manifest" '"name": "Test App Name"'
    # Preserve the historical root identity so existing installations update
    # instead of becoming a competing nested PWA after an occasion cutover.
    assert_contains "$manifest" '"id": "/"'
    assert_contains "$manifest" '"start_url": "/test-occasion/"'
    assert_contains "$manifest" '"scope": "/"'
done

echo
echo "--- installable PWA manifests ---"
for manifest in "$TMP_ROOT/web/site.webmanifest" "$TMP_ROOT/web_client/public/site.webmanifest"; do
    assert_contains "$manifest" '"name": "Test App Name"'
    # Preserve the historical root identity so existing installations update
    # instead of becoming a competing nested PWA after an occasion cutover.
    assert_contains "$manifest" '"id": "/"'
    assert_contains "$manifest" '"start_url": "/test-occasion/"'
    assert_contains "$manifest" '"scope": "/"'
done

echo
echo "--- web_client/index.html ---"
assert_contains "$TMP_ROOT/web_client/index.html" "https://test.example.com/"

echo
echo "--- web_client/src/app_config.js ---"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" "static supabaseUrl = 'https://test.supabase.co';"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" "static anonKey = 'test-anon-key-fixture';"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" "auth: 'sb-test-auth-token'"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" "static organization = 42;"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" "static isAllUnit = true;"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" "static supportedLanguages = ['cs', 'en'];"
assert_contains "$TMP_ROOT/web_client/src/app_config.js" 'static webLink = "https://test.example.com";'
assert_contains "$TMP_ROOT/web_client/src/app_config.js" 'static forceOccasionLink = "test-occasion";'

echo
echo "--- web_client/public/auth_bridge.html ---"
assert_contains "$TMP_ROOT/web_client/public/auth_bridge.html" "const SUPABASE_KEY = 'sb-test-auth-token';"

echo
echo "--- lib/app_config.dart ---"
assert_contains "$TMP_ROOT/lib/app_config.dart" "static const String supabaseUrl = 'https://test.supabase.co';"
assert_contains "$TMP_ROOT/lib/app_config.dart" "'test-anon-key-fixture';"
assert_contains "$TMP_ROOT/lib/app_config.dart" "static const int organization = 42;"
assert_contains "$TMP_ROOT/lib/app_config.dart" 'static const String webLink = "https://test.example.com";'
assert_contains "$TMP_ROOT/lib/app_config.dart" 'static const String? forceOccasionLink = "test-occasion";'
assert_contains "$TMP_ROOT/lib/app_config.dart" "static const String oneSignalAppId = '11111111-2222-3333-4444-555555555555';"
assert_contains "$TMP_ROOT/lib/app_config.dart" "static const String pushAppGeneration = 'test_generation_v1';"
assert_contains "$TMP_ROOT/lib/app_config.dart" "static const String programLogoAsset = 'assets/icons/fstapplogo.svg';"

echo
echo "--- native tenant identity ---"
assert_contains "$TMP_ROOT/android/app/build.gradle" 'namespace = "example.testapp"'
assert_contains "$TMP_ROOT/android/app/build.gradle" 'applicationId = "example.testapp"'
assert_contains "$TMP_ROOT/android/app/src/main/AndroidManifest.xml" 'android:label="Test App Name"'
assert_contains "$TMP_ROOT/android/app/src/main/kotlin/fstapp/example/MainActivity.kt" 'package example.testapp'
assert_contains "$TMP_ROOT/ios/Runner.xcodeproj/project.pbxproj" 'PRODUCT_BUNDLE_IDENTIFIER = example.testapp;'
assert_contains "$TMP_ROOT/ios/Runner.xcodeproj/project.pbxproj" 'PRODUCT_BUNDLE_IDENTIFIER = example.testapp.OneSignalNotificationServiceExtension;'
assert_contains "$TMP_ROOT/ios/Runner.xcodeproj/project.pbxproj" 'DEVELOPMENT_TEAM = TESTTEAM01;'
assert_contains "$TMP_ROOT/ios/Runner.xcodeproj/project.pbxproj" 'PROVISIONING_PROFILE_SPECIFIER = "Test AppStore";'
assert_contains "$TMP_ROOT/ios/Runner.xcodeproj/project.pbxproj" 'PROVISIONING_PROFILE_SPECIFIER = "Test OneSignal AppStore";'
assert_contains "$TMP_ROOT/ios/Runner/Runner.entitlements" '<string>group.example.testapp.onesignal</string>'
assert_contains "$TMP_ROOT/ios/Runner/Runner.entitlements" '<string>applinks:test.example.com</string>'
assert_contains "$TMP_ROOT/ios/OneSignalNotificationServiceExtension/Info.plist" '<string>group.example.testapp.onesignal</string>'
assert_contains "$TMP_ROOT/web/apple-app-site-association" 'TESTTEAM01.example.testapp'
assert_contains "$TMP_ROOT/web/.well-known/apple-app-site-association" 'TESTTEAM01.example.testapp'

echo
echo "--- lib/theme_config.dart (seed colors) ---"
assert_contains "$TMP_ROOT/lib/theme_config.dart" "static Color seed1 = const Color(0xFF112233);"
assert_contains "$TMP_ROOT/lib/theme_config.dart" "static Color seed4 = const Color(0xFFAABBCC);"

echo
echo "--- web_client/public/CNAME ---"
assert_contains "$TMP_ROOT/web_client/public/CNAME" "test.example.com"

# 4. Verify the seed Color() change happens in upper-case as the script writes
#    it. We assert lowercase is NOT present because BSD sed and GNU sed differ
#    in how they handle replacement strings on rare flags.
if grep -F -q "static Color seed1 = const Color(0xff112233);" "$TMP_ROOT/lib/theme_config.dart"; then
    echo "  FAIL: lib/theme_config.dart kept lowercase 0xff which the script does not write"
    fail=1
fi

echo
if [ $fail -ne 0 ]; then
    echo "❌ apply_config.sh test FAILED"
    exit 1
fi
echo "✅ apply_config.sh test passed"
