#!/bin/bash

# Exit on error
set -e

# Get the absolute path to the directory containing this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
WEB_CLIENT_SCRIPTS="$PROJECT_ROOT/web_client/scripts"

echo "=================================================="
echo "PREPARING COMMIT: Syncing Version and Translations"
echo "=================================================="

# 1. Sync Application Version (Flutter -> package.json & version.js)
echo ""
echo ">>> Syncing Version..."
if [ -f "$WEB_CLIENT_SCRIPTS/sync_version.js" ]; then
    node "$WEB_CLIENT_SCRIPTS/sync_version.js"
else
    echo "Error: sync_version.js not found at $WEB_CLIENT_SCRIPTS/sync_version.js"
    exit 1
fi

# 2. Unify Translations (Flutter <-> Web Client)
echo ""
echo ">>> Unifying Translations..."
if [ -f "$WEB_CLIENT_SCRIPTS/unify_translations.js" ]; then
    node "$WEB_CLIENT_SCRIPTS/unify_translations.js"
else
    echo "Error: unify_translations.js not found at $WEB_CLIENT_SCRIPTS/unify_translations.js"
    exit 1
fi

# 3. Auto-configure Domain (based on branch)
echo ""
echo ">>> Checking Channel Configuration..."
CURRENT_BRANCH=$(git branch --show-current)

if [[ "$CURRENT_BRANCH" == "prod/festapp" ]]; then
    echo "Branch is prod/festapp. Setting domain to live.festapp.net..."
    "$SCRIPT_DIR/set_domain.sh" "live.festapp.net"
elif [[ "$CURRENT_BRANCH" == "prod/ticketonline" ]]; then
    echo "Branch is prod/ticketonline. Setting domain to vstupenky.online..."
    "$SCRIPT_DIR/set_domain.sh" "vstupenky.online"
else
    echo "Skipping domain auto-configuration for branch $CURRENT_BRANCH"
fi

echo ""
echo "=================================================="
echo "SUCCESS: Ready for commit!"
echo "=================================================="
