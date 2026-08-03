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

if [ -z "$DOMAIN" ]; then
    echo "Error: DOMAIN must be defined in $CONFIG_FILE"
    exit 1
fi

EXPECTED_IOS_BUNDLE_ID="festapp.jm2025"
IOS_PROJECT_FILE="$PROJECT_ROOT/ios/Runner.xcodeproj/project.pbxproj"
if [ -f "$IOS_PROJECT_FILE" ] && ! grep -q "PRODUCT_BUNDLE_IDENTIFIER = $EXPECTED_IOS_BUNDLE_ID;" "$IOS_PROJECT_FILE"; then
    echo "Error: immutable iOS bundle identifier is not $EXPECTED_IOS_BUNDLE_ID"
    exit 1
fi

echo "Detailed Configuration:"
echo "  - Domain: $DOMAIN"
echo "  - Supabase URL: $SUPABASE_URL"
echo "  - Organization ID: $ORGANIZATION_ID"



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
    echo "✔ Updated web/index.html"
else
    echo "Warning: $FLUTTER_INDEX not found."
fi

# 3. Update CNAME file (Domain)
# Generate the installable PWA identity from the same brand source.
PWA_MANIFEST="$PROJECT_ROOT/web/site.webmanifest"
if [ -f "$PWA_MANIFEST" ] && [ -n "$APP_NAME" ] && [ -n "$APP_DESCRIPTION" ]; then
    node -e 'const fs=require("fs");const p=process.argv[1];const m=JSON.parse(fs.readFileSync(p,"utf8"));m.name=process.argv[2];m.short_name=process.argv[3];m.description=process.argv[4];fs.writeFileSync(p,JSON.stringify(m,null,2)+"\n")' "$PWA_MANIFEST" "$APP_NAME" "$APP_TITLE_SHORT" "$APP_DESCRIPTION"
    echo "✔ Updated PWA manifest"
fi

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

    echo "✔ Updated app_config.js (Url, Key, Org, FlutterUrl, IsAppSupported, WebLink, ForceOccasionLink)"
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

    # Update Anon Key
    if [ ! -z "$SUPABASE_ANON_KEY" ]; then
        sed_inplace "s|static const String anonKey = '.*';|static const String anonKey = '$SUPABASE_ANON_KEY';|g" "$FLUTTER_CONFIG"
    fi

    # Update App Name (used as the app title / OccasionHomePage.homePageTitle)
    if [ ! -z "$APP_NAME" ]; then
        sed_inplace "s|static const String appName = '.*';|static const String appName = '$APP_NAME';|g" "$FLUTTER_CONFIG"
    fi

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

    if [ ! -z "$SYNC_HEAD_ORIGIN" ]; then
        sed_inplace "s|static const String syncHeadOrigin = \".*\";|static const String syncHeadOrigin = \"$SYNC_HEAD_ORIGIN\";|g" "$FLUTTER_CONFIG"
    fi

    if [ ! -z "$SYNC_ASSET_ORIGIN" ]; then
        sed_inplace "s|static const String syncAssetOrigin = \".*\";|static const String syncAssetOrigin = \"$SYNC_ASSET_ORIGIN\";|g" "$FLUTTER_CONFIG"
    fi

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

# 5b. Update lib/theme_config.dart (Flutter Theme — seed colors live here, not in app_config.dart).
# Generate visible/internal iOS names while preserving the bundle ID.
IOS_INFO_PLIST="$PROJECT_ROOT/ios/Runner/Info.plist"
if [ -f "$IOS_INFO_PLIST" ] && [ -n "$APP_NAME" ] && [ -n "$IOS_BUNDLE_NAME" ]; then
    /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName $APP_NAME" "$IOS_INFO_PLIST"
    /usr/libexec/PlistBuddy -c "Set :CFBundleName $IOS_BUNDLE_NAME" "$IOS_INFO_PLIST"
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
