#!/bin/bash
# ==============================================================================
# APPLY CONFIGURATION
# Purpose: Reads configuration from project.conf and applies it to:
#          - web_client/src/app_config.js (Web Client)
#          - lib/app_config.dart (Flutter App)
#          - web_client/index.html (Meta tags)
#          - web/index.html (Flutter web template title + iOS app title)
#          - web_client/public/CNAME (Domain)
# Usage: ./automation/apply_config.sh
# ==============================================================================
set -e

# Portable in-place sed (GNU on Linux CI, BSD on macOS dev).
if sed --version >/dev/null 2>&1; then
    sed_inplace() { sed -i "$@"; }
else
    sed_inplace() { sed -i '' "$@"; }
fi

# Usage: ./scripts/configure_project.sh [optional_config_path]

# 1. Load Configuration
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
CONFIG_FILE="${1:-$PROJECT_ROOT/automation/project.conf}"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: Configuration file not found at $CONFIG_FILE"
    exit 1
fi

# Source the config (DOMAIN)
source "$CONFIG_FILE"

for required_key in DOMAIN APP_NAME APP_TITLE_SHORT APP_DESCRIPTION \
    ANDROID_APPLICATION_ID IOS_BUNDLE_ID IOS_DEVELOPMENT_TEAM \
    IOS_ONESIGNAL_APP_GROUP IOS_ASSOCIATED_DOMAIN LOGO_ASSET DARK_LOGO_ASSET \
    PROGRAM_LOGO_ASSET WEB_LOADING_LOGO_ASSET WEB_IS_ALL_UNIT \
    WEB_SUPPORTED_LANGUAGES; do
    if [ -z "${!required_key}" ]; then
        echo "Error: $required_key must be defined in $CONFIG_FILE"
        exit 1
    fi
done

echo "Detailed Configuration:"
echo "  - Domain: $DOMAIN"
echo "  - Supabase URL: $SUPABASE_URL"
echo "  - Organization ID: $ORGANIZATION_ID"
echo "  - Android application ID: $ANDROID_APPLICATION_ID"
echo "  - iOS bundle ID: $IOS_BUNDLE_ID"



# 2. Update index.html meta tags (Domain)
INDEX_FILE="$PROJECT_ROOT/web_client/index.html"
if [ -f "$INDEX_FILE" ]; then
    echo "Updating $INDEX_FILE..."
    # Replace content="https://<anything>/" with content="https://$DOMAIN/" in meta tags
    sed_inplace "s|content=\"https://[^/]*|content=\"https://$DOMAIN|g" "$INDEX_FILE"
    echo "✔ Updated meta tags"
else
    echo "Warning: $INDEX_FILE not found."
fi

# 2b. Update Flutter web template (web/index.html): <title> and the
#     iOS apple-mobile-web-app-title meta tag. Two app-title metas may exist;
#     only the second (override, self-closing /> variant) is rewritten so the
#     upstream Flutter default stays put.
FLUTTER_INDEX="$PROJECT_ROOT/web/index.html"
if [ -f "$FLUTTER_INDEX" ]; then
    if [ ! -z "$APP_NAME" ]; then
        echo "Updating $FLUTTER_INDEX title to '$APP_NAME'..."
        sed_inplace "s|<title>.*</title>|<title>$APP_NAME</title>|" "$FLUTTER_INDEX"
    fi
    if [ ! -z "$APP_TITLE_SHORT" ]; then
        # Match both `<meta ... content="X">` and `<meta ... content="X" />`.
        sed_inplace "s|<meta name=\"apple-mobile-web-app-title\" content=\"[^\"]*\"[[:space:]]*/\{0,1\}>|<meta name=\"apple-mobile-web-app-title\" content=\"$APP_TITLE_SHORT\">|g" "$FLUTTER_INDEX"
    fi
    python3 - "$FLUTTER_INDEX" "${ONESIGNAL_WEB_APP_ID:-}" \
        "${ONESIGNAL_SAFARI_WEB_ID:-}" "${PUSH_APP_GENERATION:-}" \
        "${FORCE_OCCASION_LINK:-}" <<'PY'
import re
import sys

path, app_id, safari_id, generation, occasion = sys.argv[1:]
source = open(path, encoding="utf-8").read()
source = re.sub(r'appId: "[^"]*"', f'appId: "{app_id}"', source)
source = re.sub(r'safari_web_id: "[^"]*"', f'safari_web_id: "{safari_id}"', source)
source = re.sub(r"app_generation: '[^']*'", f"app_generation: '{generation}'", source)
source = re.sub(r"occasion: '[^']*'", f"occasion: '{occasion}'", source)
open(path, "w", encoding="utf-8").write(source)
PY
    sed_inplace "s|<img class=\"initial-logo\" src=\"[^\"]*\"|<img class=\"initial-logo\" src=\"$WEB_LOADING_LOGO_ASSET\"|" "$FLUTTER_INDEX"
    echo "✔ Updated web/index.html"
else
    echo "Warning: $FLUTTER_INDEX not found."
fi

# 3. Update CNAME file (Domain)
# Generate the installable PWA identity from the same brand source.
for PWA_MANIFEST in "$PROJECT_ROOT/web/site.webmanifest" "$PROJECT_ROOT/web_client/public/site.webmanifest"; do
    if [ -f "$PWA_MANIFEST" ] && [ -n "$APP_NAME" ] && [ -n "$APP_DESCRIPTION" ]; then
        node -e 'const fs=require("fs");const p=process.argv[1];const m=JSON.parse(fs.readFileSync(p,"utf8"));const slug=process.argv[5].replace(/^\/+|\/+$/g,"");const start=slug?"/"+slug+"/":"/";m.name=process.argv[2];m.short_name=process.argv[3];m.description=process.argv[4];m.id="/";m.start_url=start;m.scope="/";fs.writeFileSync(p,JSON.stringify(m,null,2)+"\n")' "$PWA_MANIFEST" "$APP_NAME" "$APP_TITLE_SHORT" "$APP_DESCRIPTION" "$FORCE_OCCASION_LINK"
        echo "✔ Updated PWA manifest: $PWA_MANIFEST"
    fi
done

# 3. Update CNAME file (Domain)
CNAME_FILE="$PROJECT_ROOT/web_client/public/CNAME"
mkdir -p "$(dirname "$CNAME_FILE")"
echo "$DOMAIN" > "$CNAME_FILE"
echo "✔ Updated CNAME"


# 4. Update app_config.js (Entry Point)
APP_CONFIG="$PROJECT_ROOT/web_client/src/app_config.js"
if [ -f "$APP_CONFIG" ]; then
    echo "Updating $APP_CONFIG..."

    # Update Supabase URL
    if [ ! -z "$SUPABASE_URL" ]; then
        sed_inplace "s|static supabaseUrl = '.*';|static supabaseUrl = '$SUPABASE_URL';|g" "$APP_CONFIG"

        SUPABASE_PROJECT_REF="$(printf '%s' "$SUPABASE_URL" | sed -E 's|^https://([a-z0-9]+)\.supabase\.co/?$|\1|')"
        if [ -z "$SUPABASE_PROJECT_REF" ] || [ "$SUPABASE_PROJECT_REF" = "$SUPABASE_URL" ]; then
            echo "Error: SUPABASE_URL must use https://<project-ref>.supabase.co"
            exit 1
        fi
        SUPABASE_AUTH_STORAGE_KEY="sb-$SUPABASE_PROJECT_REF-auth-token"
        sed_inplace "s|auth: 'sb-[^']*-auth-token'|auth: '$SUPABASE_AUTH_STORAGE_KEY'|g" "$APP_CONFIG"

        AUTH_BRIDGE="$PROJECT_ROOT/web_client/public/auth_bridge.html"
        if [ -f "$AUTH_BRIDGE" ]; then
            sed_inplace "s|const SUPABASE_KEY = 'sb-[^']*-auth-token';|const SUPABASE_KEY = '$SUPABASE_AUTH_STORAGE_KEY';|g" "$AUTH_BRIDGE"
        fi
    fi
    
    # Update Anon Key
    if [ ! -z "$SUPABASE_ANON_KEY" ]; then
        sed_inplace "s|static anonKey = '.*';|static anonKey = '$SUPABASE_ANON_KEY';|g" "$APP_CONFIG"
    fi

    # Update Organization
    if [ ! -z "$ORGANIZATION_ID" ]; then
        sed_inplace "s|static organization = .*;|static organization = $ORGANIZATION_ID;|g" "$APP_CONFIG"
    fi
    
    # Update Flutter App URL
    if [ ! -z "${FLUTTER_APP_URL+x}" ]; then
         sed_inplace "s|static flutterAppUrl = '.*';|static flutterAppUrl = '$FLUTTER_APP_URL';|g" "$APP_CONFIG"
    fi

    # Update Is App Supported
    if [ ! -z "$IS_APP_SUPPORTED" ]; then
        sed_inplace "s|static isAppSupported = .*;|static isAppSupported = $IS_APP_SUPPORTED;|g" "$APP_CONFIG"
    fi

    # Update tenant-specific web behavior from the canonical configuration.
    python3 - "$APP_CONFIG" "$WEB_IS_ALL_UNIT" "$WEB_SUPPORTED_LANGUAGES" <<'PY'
import re
import sys

path, is_all_unit, supported_languages = sys.argv[1:]
if is_all_unit not in {"true", "false"}:
    raise SystemExit("WEB_IS_ALL_UNIT must be true or false")
languages = supported_languages.split(",")
if not languages or any(not re.fullmatch(r"[a-z]{2}", language) for language in languages):
    raise SystemExit("WEB_SUPPORTED_LANGUAGES must be comma-separated ISO 639-1 codes")
source = open(path, encoding="utf-8").read()
source = re.sub(r"static isAllUnit = .*;", f"static isAllUnit = {is_all_unit};", source)
language_list = ", ".join(repr(language) for language in languages)
source = re.sub(r"static supportedLanguages = .*;", f"static supportedLanguages = [{language_list}];", source)
open(path, "w", encoding="utf-8").write(source)
PY

    # Update Web Link
    if [ ! -z "$WEB_LINK" ]; then
        sed_inplace "s|static webLink = \".*\";|static webLink = \"$WEB_LINK\";|g" "$APP_CONFIG"
    fi

    # Update Force Occasion Link (empty value -> null)
    if [ -z "$FORCE_OCCASION_LINK" ]; then
        sed_inplace "s|static forceOccasionLink = .*;|static forceOccasionLink = null;|g" "$APP_CONFIG"
    else
        sed_inplace "s|static forceOccasionLink = .*;|static forceOccasionLink = \"$FORCE_OCCASION_LINK\";|g" "$APP_CONFIG"
    fi

    echo "✔ Updated app_config.js (tenant identity, behavior, and endpoints)"
else
    echo "Warning: $APP_CONFIG not found."
fi



# 5. Update lib/app_config.dart (Flutter App)
FLUTTER_CONFIG="$PROJECT_ROOT/lib/app_config.dart"
if [ -f "$FLUTTER_CONFIG" ]; then
    echo "Updating $FLUTTER_CONFIG..."

    # Update Supabase URL
    if [ ! -z "$SUPABASE_URL" ]; then
        sed_inplace "s|static const String supabaseUrl = '.*';|static const String supabaseUrl = '$SUPABASE_URL';|g" "$FLUTTER_CONFIG"
    fi

    # Update Anon Key. Keep this multiline-safe because dart format wraps the
    # long JWT after `=`; a line-based sed silently left the previous tenant's
    # key in production.
    if [ ! -z "$SUPABASE_ANON_KEY" ]; then
        python3 - "$FLUTTER_CONFIG" "$SUPABASE_ANON_KEY" <<'PY'
import pathlib
import re
import sys

path, anon_key = sys.argv[1:]
source = pathlib.Path(path).read_text(encoding="utf-8")
source, count = re.subn(
    r"static const String anonKey\s*=\s*'[^']*';",
    f"static const String anonKey = '{anon_key}';",
    source,
    count=1,
)
if count != 1:
    raise SystemExit("Could not update Flutter anonKey")
pathlib.Path(path).write_text(source, encoding="utf-8")
PY
    fi

    # Update App Name (used as the app title / OccasionHomePage.homePageTitle)
    if [ ! -z "$APP_NAME" ]; then
        sed_inplace "s|static const String appName = '.*';|static const String appName = '$APP_NAME';|g" "$FLUTTER_CONFIG"
    fi

    sed_inplace "s|static const String oneSignalAppId = '.*';|static const String oneSignalAppId = '${ONESIGNAL_NATIVE_APP_ID:-}';|g" "$FLUTTER_CONFIG"
    sed_inplace "s|static const String pushAppGeneration = '.*';|static const String pushAppGeneration = '${PUSH_APP_GENERATION:-}';|g" "$FLUTTER_CONFIG"
    sed_inplace "s|static const String logoAsset = '.*';|static const String logoAsset = '$LOGO_ASSET';|g" "$FLUTTER_CONFIG"
    sed_inplace "s|static const String darkLogoAsset = '.*';|static const String darkLogoAsset = '$DARK_LOGO_ASSET';|g" "$FLUTTER_CONFIG"
    sed_inplace "s|static const String programLogoAsset = '.*';|static const String programLogoAsset = '$PROGRAM_LOGO_ASSET';|g" "$FLUTTER_CONFIG"

    # Update Organization
    if [ ! -z "$ORGANIZATION_ID" ]; then
        sed_inplace "s|static const int organization = .*;|static const int organization = $ORGANIZATION_ID;|g" "$FLUTTER_CONFIG"
    fi

    # Update Is App Supported
    if [ ! -z "$IS_APP_SUPPORTED" ]; then
        sed_inplace "s|static const bool isAppSupported = .*;|static const bool isAppSupported = $IS_APP_SUPPORTED;|g" "$FLUTTER_CONFIG"
    fi

    # Update Web Link
    if [ ! -z "$WEB_LINK" ]; then
        sed_inplace "s|static const String webLink = \".*\";|static const String webLink = \"$WEB_LINK\";|g" "$FLUTTER_CONFIG"
    fi

    sed_inplace "s|static const String syncHeadOrigin = \".*\";|static const String syncHeadOrigin = \"${SYNC_HEAD_ORIGIN:-}\";|g" "$FLUTTER_CONFIG"
    sed_inplace "s|static const String syncAssetOrigin = \".*\";|static const String syncAssetOrigin = \"${SYNC_ASSET_ORIGIN:-}\";|g" "$FLUTTER_CONFIG"

    # Update Force Occasion Link (empty value -> null)
    if [ -z "$FORCE_OCCASION_LINK" ]; then
        sed_inplace "s|static const String? forceOccasionLink = .*;|static const String? forceOccasionLink = null;|g" "$FLUTTER_CONFIG"
    else
        sed_inplace "s|static const String? forceOccasionLink = .*;|static const String? forceOccasionLink = \"$FORCE_OCCASION_LINK\";|g" "$FLUTTER_CONFIG"
    fi

    echo "✔ Updated lib/app_config.dart"
else
    echo "Warning: $FLUTTER_CONFIG not found."
fi

# 5a. Generate native tenant identity from project.conf. Source paths are
# deliberately stable; Java/Kotlin packages do not need to mirror directories.
ANDROID_GRADLE="$PROJECT_ROOT/android/app/build.gradle"
ANDROID_MANIFEST="$PROJECT_ROOT/android/app/src/main/AndroidManifest.xml"
IOS_PROJECT_FILE="$PROJECT_ROOT/ios/Runner.xcodeproj/project.pbxproj"
python3 - "$ANDROID_GRADLE" "$ANDROID_MANIFEST" "$PROJECT_ROOT/android/app/src/main/kotlin" \
    "$IOS_PROJECT_FILE" "$ANDROID_APPLICATION_ID" "$IOS_BUNDLE_ID" \
    "$IOS_DEVELOPMENT_TEAM" "${IOS_PROVISIONING_PROFILE:-}" \
    "${IOS_ONESIGNAL_PROVISIONING_PROFILE:-}" "$APP_NAME" <<'PY'
import pathlib
import re
import sys

(gradle_path, manifest_path, kotlin_root, pbx_path, android_id, ios_id,
 team_id, app_profile, extension_profile, app_name) = sys.argv[1:]

gradle = pathlib.Path(gradle_path)
if gradle.exists():
    source = gradle.read_text(encoding="utf-8")
    source = re.sub(r'namespace = "[^"]+"', f'namespace = "{android_id}"', source)
    source = re.sub(r'applicationId = "[^"]+"', f'applicationId = "{android_id}"', source)
    gradle.write_text(source, encoding="utf-8")

manifest = pathlib.Path(manifest_path)
if manifest.exists():
    source = manifest.read_text(encoding="utf-8")
    source = re.sub(r'android:label="[^"]*"', f'android:label="{app_name}"', source, count=1)
    manifest.write_text(source, encoding="utf-8")

for activity in pathlib.Path(kotlin_root).glob("**/MainActivity.kt"):
    source = activity.read_text(encoding="utf-8")
    source = re.sub(r'^package\s+\S+', f'package {android_id}', source, count=1, flags=re.M)
    activity.write_text(source, encoding="utf-8")

pbx = pathlib.Path(pbx_path)
if pbx.exists():
    source = pbx.read_text(encoding="utf-8")
    source = re.sub(r'DEVELOPMENT_TEAM = [^;]+;', f'DEVELOPMENT_TEAM = {team_id};', source)
    source = re.sub(r'INFOPLIST_KEY_CFBundleDisplayName = (?:"[^"]*"|[^;]+);',
                    f'INFOPLIST_KEY_CFBundleDisplayName = "{app_name}";', source)

    def identity(match):
        value = match.group(1)
        if value.endswith('.RunnerTests'):
            return match.group(0)
        if value.endswith('.OneSignalNotificationServiceExtension'):
            return f'PRODUCT_BUNDLE_IDENTIFIER = {ios_id}.OneSignalNotificationServiceExtension;'
        return f'PRODUCT_BUNDLE_IDENTIFIER = {ios_id};'

    source = re.sub(r'PRODUCT_BUNDLE_IDENTIFIER = ([^;]+);', identity, source)

    def signing(block_match):
        block = block_match.group(0)
        is_extension = f'{ios_id}.OneSignalNotificationServiceExtension;' in block
        is_app = f'PRODUCT_BUNDLE_IDENTIFIER = {ios_id};' in block
        if not (is_extension or is_app):
            return block
        profile = extension_profile if is_extension else app_profile
        block = re.sub(r'^\s*PROVISIONING_PROFILE_SPECIFIER = .*\n', '', block, flags=re.M)
        if profile:
            block = re.sub(r'CODE_SIGN_STYLE = \w+;', 'CODE_SIGN_STYLE = Manual;', block)
            line = f'\n\t\t\t\tPROVISIONING_PROFILE_SPECIFIER = "{profile}";'
            block = re.sub(r'(PRODUCT_BUNDLE_IDENTIFIER = [^;]+;)', r'\1' + line, block, count=1)
        else:
            block = re.sub(r'CODE_SIGN_STYLE = Manual;', 'CODE_SIGN_STYLE = Automatic;', block)
            block = re.sub(r'^\s*"CODE_SIGN_IDENTITY\[sdk=iphoneos\*\]" = .*\n', '', block, flags=re.M)
        return block

    source = re.sub(r'buildSettings = \{[\s\S]*?\n\s*\};', signing, source)
    pbx.write_text(source, encoding="utf-8")
PY

# Public associated-domain and OneSignal app-group files are generated too.
python3 - "$PROJECT_ROOT" "$IOS_DEVELOPMENT_TEAM" "$IOS_BUNDLE_ID" \
    "$IOS_ONESIGNAL_APP_GROUP" "$IOS_ASSOCIATED_DOMAIN" <<'PY'
import json
import pathlib
import plistlib
import sys

root, team, bundle, app_group, associated_domain = sys.argv[1:]
root = pathlib.Path(root)
for relative in ('web/apple-app-site-association', 'web/.well-known/apple-app-site-association'):
    path = root / relative
    if not path.exists():
        continue
    data = json.loads(path.read_text(encoding='utf-8'))
    def replace_identifiers(value, key=None):
        if isinstance(value, dict):
            return {child_key: replace_identifiers(item, child_key) for child_key, item in value.items()}
        if isinstance(value, list):
            if key in {'appIDs', 'apps'}:
                return [f'{team}.{bundle}']
            return [replace_identifiers(item) for item in value]
        if isinstance(value, str) and key == 'appID':
            return f'{team}.{bundle}'
        return value
    data = replace_identifiers(data)
    path.write_text(json.dumps(data, indent=2) + '\n', encoding='utf-8')

for relative in (
    'ios/Runner/Info.plist',
    'ios/Runner/Runner.entitlements',
    'ios/OneSignalNotificationServiceExtension/Info.plist',
    'ios/OneSignalNotificationServiceExtension/OneSignalNotificationServiceExtensionRelease.entitlements',
):
    path = root / relative
    if not path.exists():
        continue
    with path.open('rb') as source:
        data = plistlib.load(source)
    if 'OneSignal_app_groups_key' in data:
        data['OneSignal_app_groups_key'] = app_group
    if 'com.apple.security.application-groups' in data:
        data['com.apple.security.application-groups'] = [app_group]
    if 'com.apple.developer.associated-domains' in data:
        data['com.apple.developer.associated-domains'] = [f'applinks:{associated_domain}']
    with path.open('wb') as destination:
        plistlib.dump(data, destination, sort_keys=False)
PY

# 5b. Update lib/theme_config.dart (Flutter Theme — seed colors live here, not in app_config.dart).
# Generate visible/internal iOS names while preserving the bundle ID.
IOS_INFO_PLIST="$PROJECT_ROOT/ios/Runner/Info.plist"
if [ -f "$IOS_INFO_PLIST" ] && [ -n "$APP_NAME" ] && [ -n "$IOS_BUNDLE_NAME" ]; then
    python3 - "$IOS_INFO_PLIST" "$APP_NAME" "$IOS_BUNDLE_NAME" <<'PY'
import plistlib
import sys

path, display_name, bundle_name = sys.argv[1:]
with open(path, "rb") as source:
    plist = plistlib.load(source)
plist["CFBundleDisplayName"] = display_name
plist["CFBundleName"] = bundle_name
with open(path, "wb") as destination:
    plistlib.dump(plist, destination, sort_keys=False)
PY
    echo "✔ Updated iOS display and bundle names"
fi

# 5b. Update lib/theme_config.dart (Flutter Theme — seed colors live here, not in app_config.dart).
FLUTTER_THEME="$PROJECT_ROOT/lib/theme_config.dart"
if [ -f "$FLUTTER_THEME" ]; then
    echo "Updating $FLUTTER_THEME..."
    # Convert #RRGGBB to 0xFFRRGGBB
    if [ ! -z "$THEME_SEED_1" ]; then
        VAL="0xFF${THEME_SEED_1:1}"
        sed_inplace "s|static Color seed1 = const Color(.*);|static Color seed1 = const Color($VAL);|g" "$FLUTTER_THEME"
    fi
    if [ ! -z "$THEME_SEED_2" ]; then
        VAL="0xFF${THEME_SEED_2:1}"
        sed_inplace "s|static Color seed2 = const Color(.*);|static Color seed2 = const Color($VAL);|g" "$FLUTTER_THEME"
    fi
    if [ ! -z "$THEME_SEED_3" ]; then
        VAL="0xFF${THEME_SEED_3:1}"
        sed_inplace "s|static Color seed3 = const Color(.*);|static Color seed3 = const Color($VAL);|g" "$FLUTTER_THEME"
    fi
    if [ ! -z "$THEME_SEED_4" ]; then
        VAL="0xFF${THEME_SEED_4:1}"
        sed_inplace "s|static Color seed4 = const Color(.*);|static Color seed4 = const Color($VAL);|g" "$FLUTTER_THEME"
    fi
    echo "✔ Updated lib/theme_config.dart seed colors"
else
    echo "Warning: $FLUTTER_THEME not found."
fi

# 6. Update web_client/src/theme_config.css (Web Client Theme)
WEB_THEME="$PROJECT_ROOT/web_client/src/theme_config.css"
if [ -f "$WEB_THEME" ]; then
    echo "Updating $WEB_THEME..."

    if [ ! -z "$THEME_SEED_1" ]; then
        sed_inplace "s|--seed-1: .*;|--seed-1: $THEME_SEED_1;|g" "$WEB_THEME"
    fi
    if [ ! -z "$THEME_SEED_2" ]; then
        sed_inplace "s|--seed-2: .*;|--seed-2: $THEME_SEED_2;|g" "$WEB_THEME"
    fi
    if [ ! -z "$THEME_SEED_3" ]; then
        sed_inplace "s|--seed-3: .*;|--seed-3: $THEME_SEED_3;|g" "$WEB_THEME"
    fi

    if [ ! -z "$FORM_FONT_SCALE" ]; then
        sed_inplace "s|--font-scale: .*;|--font-scale: $FORM_FONT_SCALE;|g" "$WEB_THEME"
    fi

    echo "✔ Updated web_client/src/theme_config.css"
else
    echo "Warning: $WEB_THEME not found."
fi

echo "Project configuration applied successfully."

# 7. Font Configuration (Handled by configure_fonts.js)
# We invoke the helper script to handle dynamic file detection and rewrites
NODE_SCRIPT="$PROJECT_ROOT/automation/configure_fonts.js"

if [ -f "$NODE_SCRIPT" ] && [ -d "$PROJECT_ROOT/automation/fonts" ]; then
    echo "Running Dynamic Font Configuration..."
    node "$NODE_SCRIPT" "$PROJECT_ROOT" "$FONT_FAMILY_BASE"
else
    echo "Skipping Font Configuration (Script or fonts/ dir missing)"
fi

# 8. Version Configuration (Handled by configure_version.js)
VERSION_SCRIPT="$PROJECT_ROOT/automation/configure_version.js"
if [ -f "$VERSION_SCRIPT" ] && [ -n "$VERSION" ]; then
    echo "Running Version Configuration ($VERSION)..."
    node "$VERSION_SCRIPT" "$VERSION"
else
    echo "Skipping Version Configuration (Script missing or VERSION not set)"
fi
