#!/bin/bash
set -e

# Usage: ./scripts/configure_project.sh [optional_config_path]

# 1. Load Configuration
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
CONFIG_FILE="${1:-$PROJECT_ROOT/scripts/project.conf}"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: Configuration file not found at $CONFIG_FILE"
    exit 1
fi

# Source the config (DOMAIN, FLUTTER_ENTRY_POINT)
source "$CONFIG_FILE"

if [ -z "$DOMAIN" ] || [ -z "$FLUTTER_ENTRY_POINT" ]; then
    echo "Error: DOMAIN and FLUTTER_ENTRY_POINT must be defined in $CONFIG_FILE"
    exit 1
fi

echo "Detailed Configuration:"
echo "  - Domain: $DOMAIN"
echo "  - app_entry: $FLUTTER_ENTRY_POINT"


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
    # Update flutterAppUrl
    # We use a flexible regex to capture whatever was there
    sed -i '' "s|static flutterAppUrl = '.*';|static flutterAppUrl = '$FLUTTER_ENTRY_POINT';|g" "$APP_CONFIG"
    echo "✔ Updated flutterAppUrl"
else
     echo "Warning: $APP_CONFIG not found."
fi

# 5. Update router_service.js (Entry Point Fallback)
ROUTER_SERVICE="$PROJECT_ROOT/web_client/src/services/router_service.js"
if [ -f "$ROUTER_SERVICE" ]; then
    echo "Updating $ROUTER_SERVICE..."
    
    # Update hardcoded redirects to flutter.html
    # We replace `/flutter.html` string with the configured entry point (if different)
    # Since we can't easily rely on valid previous state, we assume standard structure.
    # To be safe, we'll replace the known variable strings.
    
    # Ideally, we should use a CONSTANT in the file, but for now we replace the string literals.
    # This might fail if the file content drifts, but it's consistent with current method.
    
    # Replace strings like `window.location.href = '/flutter.html`
    # We use a generic replacement for "/flutter.html" -> "$FLUTTER_ENTRY_POINT"
    # But wait, if they are already the same, no change.
    
    # To ensure it adheres to config, we can define FLUTTER_BASE_URL class property if it exists,
    # or just sed replace the specific lines we added.
    
    # Let's target the window.location.href lines and includes check.
    # Note: escape special chars in FLUTTER_ENTRY_POINT for sed (like /)
    SAFE_ENTRY=$(echo "$FLUTTER_ENTRY_POINT" | sed 's/\//\\\//g')
    
    # Update: if (path.includes('/flutter.html'))
    sed -i '' "s/path.includes('.*')/path.includes('$SAFE_ENTRY')/" "$ROUTER_SERVICE"
    
    # Update: window.location.href = `/flutter.html#${path}`;
    sed -i '' "s/window.location.href = \`.*#\${path}\`;/window.location.href = \`$SAFE_ENTRY#\${path}\`;/" "$ROUTER_SERVICE"

    echo "✔ Updated router fallback"
else
     echo "Warning: $ROUTER_SERVICE not found."
fi

echo "Project configuration applied successfully."
