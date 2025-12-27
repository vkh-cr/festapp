#!/bin/bash
# ==============================================================================
# TEST ALL
# Purpose: Runs all tests for the project.
#          Currently runs Web Client unit tests (npm test).
# Usage: ./automation/test_all.sh
# ==============================================================================

# Exit on error
set -e

# Get the absolute path to the directory containing this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
WEB_CLIENT_DIR="$PROJECT_ROOT/web_client"

echo "=================================================="
echo "RUNNING TESTS"
echo "=================================================="

# 1. Run Web Client Tests
echo ""
echo ">>> Web Client Tests..."
if [ -d "$WEB_CLIENT_DIR" ]; then
    cd "$WEB_CLIENT_DIR"
    # Ensure dependencies are installed if needed? 
    # Usually we assume dev env is set up, but could run npm install. 
    # For a quick test script, just running existing npm test is better.
    npm test
else
    echo "Error: web_client directory not found at $WEB_CLIENT_DIR"
    exit 1
fi

echo ""
echo "=================================================="
echo "SUCCESS: All tests passed!"
echo "=================================================="
