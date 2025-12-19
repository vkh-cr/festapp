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

# 3. Apply Project Configuration (Universal Config)
echo ""
echo ">>> Applying Project Configuration..."
# The configure_project.sh script will read from scripts/project.conf
if [ -f "$SCRIPT_DIR/configure_project.sh" ]; then
    "$SCRIPT_DIR/configure_project.sh"
else
    echo "Error: scripts/configure_project.sh not found."
    exit 1
fi

echo ""
echo "=================================================="
echo "SUCCESS: Ready for commit!"
echo "=================================================="
