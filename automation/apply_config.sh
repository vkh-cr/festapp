#!/bin/bash
# ==============================================================================
# APPLY CONFIGURATION
# Purpose: Reads configuration from project.conf and applies it to:
#          - web_client/src/app_config.js (Web Client)
#          - lib/app_config.dart (Flutter App)
#          - web_client/index.html (Meta tags)
#          - web_client/public/CNAME (Domain)
# Usage: ./automation/apply_config.sh
# ==============================================================================
set -e

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

echo "Detailed Configuration:"
echo "  - Domain: $DOMAIN"
echo "  - Supabase URL: $SUPABASE_URL"
echo "  - Organization ID: $ORGANIZATION_ID"



# 2. Update index.html meta tags (Domain)
INDEX_FILE="$PROJECT_ROOT/web_client/index.html"
if [ -f "$INDEX_FILE" ]; then
    echo "Updating $INDEX_FILE..."
    # Replace content="https://<anything>/" with content="https://$DOMAIN/" in meta tags
    sed -i '' "s|content=\"https://[^/]*|content=\"https://$DOMAIN|g" "$INDEX_FILE"
    echo "✔ Updated meta tags"
else
    echo "Warning: $INDEX_FILE not found."
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
        sed -i '' "s|static supabaseUrl = '.*';|static supabaseUrl = '$SUPABASE_URL';|g" "$APP_CONFIG"
    fi
    
    # Update Anon Key
    if [ ! -z "$SUPABASE_ANON_KEY" ]; then
        sed -i '' "s|static anonKey = '.*';|static anonKey = '$SUPABASE_ANON_KEY';|g" "$APP_CONFIG"
    fi

    # Update Organization
    if [ ! -z "$ORGANIZATION_ID" ]; then
        sed -i '' "s|static organization = .*;|static organization = $ORGANIZATION_ID;|g" "$APP_CONFIG"
    fi
    
    # Update Flutter App URL
    if [ ! -z "${FLUTTER_APP_URL+x}" ]; then
         sed -i '' "s|static flutterAppUrl = '.*';|static flutterAppUrl = '$FLUTTER_APP_URL';|g" "$APP_CONFIG"
    fi

    # Update Is App Supported
    if [ ! -z "$IS_APP_SUPPORTED" ]; then
        sed -i '' "s|static isAppSupported = .*;|static isAppSupported = $IS_APP_SUPPORTED;|g" "$APP_CONFIG"
    fi

    # Update Web Link
    if [ ! -z "$WEB_LINK" ]; then
        sed -i '' "s|static webLink = \".*\";|static webLink = \"$WEB_LINK\";|g" "$APP_CONFIG"
    fi

    echo "✔ Updated app_config.js (Url, Key, Org, FlutterUrl, IsAppSupported, WebLink)"
else
    echo "Warning: $APP_CONFIG not found."
fi



# 6. Update lib/app_config.dart (Flutter App)
FLUTTER_CONFIG="$PROJECT_ROOT/lib/app_config.dart"
if [ -f "$FLUTTER_CONFIG" ]; then
    echo "Updating $FLUTTER_CONFIG..."

    # Update Supabase URL
    if [ ! -z "$SUPABASE_URL" ]; then
        sed -i '' "s|static const String supabaseUrl = '.*';|static const String supabaseUrl = '$SUPABASE_URL';|g" "$FLUTTER_CONFIG"
    fi

    # Update Anon Key
    if [ ! -z "$SUPABASE_ANON_KEY" ]; then
        sed -i '' "s|static const String anonKey = '.*';|static const String anonKey = '$SUPABASE_ANON_KEY';|g" "$FLUTTER_CONFIG"
    fi

    # Update Organization
    if [ ! -z "$ORGANIZATION_ID" ]; then
        sed -i '' "s|static const int organization = .*;|static const int organization = $ORGANIZATION_ID;|g" "$FLUTTER_CONFIG"
    fi

    # Update Is App Supported
    if [ ! -z "$IS_APP_SUPPORTED" ]; then
        sed -i '' "s|static const bool isAppSupported = .*;|static const bool isAppSupported = $IS_APP_SUPPORTED;|g" "$FLUTTER_CONFIG"
    fi

    # Update Web Link
    if [ ! -z "$WEB_LINK" ]; then
        sed -i '' "s|static const String webLink = \".*\";|static const String webLink = \"$WEB_LINK\";|g" "$FLUTTER_CONFIG"
    fi

    # Theme Configuration for Flutter
    # Convert #RRGGBB to 0xFFRRGGBB
    if [ ! -z "$THEME_SEED_1" ]; then
        VAL="0xFF${THEME_SEED_1:1}"
        sed -i '' "s|static Color seed1 = const Color(.*);|static Color seed1 = const Color($VAL);|g" "$FLUTTER_CONFIG"
    fi
    if [ ! -z "$THEME_SEED_2" ]; then
        VAL="0xFF${THEME_SEED_2:1}"
        sed -i '' "s|static Color seed2 = const Color(.*);|static Color seed2 = const Color($VAL);|g" "$FLUTTER_CONFIG"
    fi
    if [ ! -z "$THEME_SEED_3" ]; then
        VAL="0xFF${THEME_SEED_3:1}"
        sed -i '' "s|static Color seed3 = const Color(.*);|static Color seed3 = const Color($VAL);|g" "$FLUTTER_CONFIG"
    fi
     if [ ! -z "$THEME_SEED_4" ]; then
        VAL="0xFF${THEME_SEED_4:1}"
        sed -i '' "s|static Color seed4 = const Color(.*);|static Color seed4 = const Color($VAL);|g" "$FLUTTER_CONFIG"
    fi

    echo "✔ Updated lib/app_config.dart (and theme colors)"
else
    echo "Warning: $FLUTTER_CONFIG not found."
fi

# 7. Update web_client/src/theme_config.css (Web Client Theme)
WEB_THEME="$PROJECT_ROOT/web_client/src/theme_config.css"
if [ -f "$WEB_THEME" ]; then
    echo "Updating $WEB_THEME..."

    if [ ! -z "$THEME_SEED_1" ]; then
        sed -i '' "s|--seed-1: .*;|--seed-1: $THEME_SEED_1;|g" "$WEB_THEME"
    fi
    if [ ! -z "$THEME_SEED_2" ]; then
        sed -i '' "s|--seed-2: .*;|--seed-2: $THEME_SEED_2;|g" "$WEB_THEME"
    fi
    if [ ! -z "$THEME_SEED_3" ]; then
        sed -i '' "s|--seed-3: .*;|--seed-3: $THEME_SEED_3;|g" "$WEB_THEME"
    fi
    
    echo "✔ Updated web_client/src/theme_config.css"
else
    echo "Warning: $WEB_THEME not found."
fi

echo "Project configuration applied successfully."

# 8. Font Configuration
if [ ! -z "$FONT_FAMILY_BASE" ]; then
    echo "Updating Font Configuration to: $FONT_FAMILY_BASE"
    
    # 8.1 Update lib/theme_config.dart
    if [ -f "$FLUTTER_CONFIG" ]; then
        sed -i '' "s|static final fontFamily = \".*\";|static final fontFamily = \"$FONT_FAMILY_BASE\";|g" "$FLUTTER_CONFIG"
        echo "✔ Updated font family in lib/theme_config.dart"
    fi

    # 8.2 Update web_client/src/theme_config.css
    if [ -f "$WEB_THEME" ]; then
        # Update @font-face definitions and body style
        sed -i '' "s|font-family: '[^']*'|font-family: '$FONT_FAMILY_BASE'|g" "$WEB_THEME"
        echo "✔ Updated font family in web_client/src/theme_config.css"
    fi

    # 8.3 Update pubspec.yaml
    PUBSPEC_FILE="$PROJECT_ROOT/pubspec.yaml"
    if [ -f "$PUBSPEC_FILE" ]; then
        # Assumes standard indentation for font family
        sed -i '' "s|    - family: .*|    - family: $FONT_FAMILY_BASE|g" "$PUBSPEC_FILE"
        echo "✔ Updated font family in pubspec.yaml"
    fi
fi

# 8. Font Configuration (Handled by configure_fonts.js)
# We invoke the helper script to handle dynamic file detection and rewrites
NODE_SCRIPT="$PROJECT_ROOT/automation/configure_fonts.js"

if [ -f "$NODE_SCRIPT" ] && [ -d "$PROJECT_ROOT/automation/fonts" ]; then
    echo "Running Dynamic Font Configuration..."
    node "$NODE_SCRIPT" "$PROJECT_ROOT" "$FONT_FAMILY_BASE"
else
    echo "Skipping Font Configuration (Script or Fonts dir missing)"
fi
