#!/bin/bash
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
         # We allow empty string, so we need careful check. 
         # But usually we just want to replace whatever is there.
         # If FLUTTER_APP_URL is defined (even empty), we use it.
         # But bash -z checks for empty string.
         # Let's say if variable is set.
         # Actually, simplifies: just replace if pattern matches.
         # But we need to handle empty string correctly in regex replacement.
         # Using a placeholder for empty? No, just use value.
         sed -i '' "s|static flutterAppUrl = '.*';|static flutterAppUrl = '$FLUTTER_APP_URL';|g" "$APP_CONFIG"
    fi

    echo "✔ Updated app_config.js (Url, Key, Org, FlutterUrl)"
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

    echo "✔ Updated lib/app_config.dart"
else
    echo "Warning: $FLUTTER_CONFIG not found."
fi

echo "Project configuration applied successfully."
