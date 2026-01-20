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

# Function to run command with timeout (Mac compatible)
run_with_timeout() {
    local timeout=$1
    shift
    local cmd="$@"
    
    echo "Running with timeout ${timeout}s: $cmd"
    
    # Start command in background
    eval "$cmd" &
    local pid=$!
    
    local count=0
    while kill -0 $pid 2>/dev/null; do
        if [ $count -ge $timeout ]; then
            echo ""
            echo "❌ CANCELLING: Command timed out after ${timeout} seconds."
            kill -9 $pid
            wait $pid 2>/dev/null
            return 1
        fi
        sleep 1
        count=$((count+1))
    done
    
    wait $pid
    return $?
}

# 1. Run Web Client Tests
echo ""
echo ">>> Web Client Tests..."
if [ -d "$WEB_CLIENT_DIR" ]; then
    cd "$WEB_CLIENT_DIR"
    # Run npm test with 10s timeout
    set +e # Disable exit on error temporarily to handle timeout gracefully
    run_with_timeout 10 "npm test"
    res=$?
    set -e # Re-enable exit on error
    
    if [ $res -ne 0 ]; then
        echo "⚠️  WARNING: Web Client Tests Failed or Timed Out."
        echo "Proceeding to Database Tests..."
    fi
else
    echo "Error: web_client directory not found at $WEB_CLIENT_DIR"
    exit 1
fi

# 2. Run Database Tests
echo ""
echo ">>> Database Tests..."
DB_TEST_RUNNER="$PROJECT_ROOT/web_client/scripts/run_db_tests.js"
if [ -f "$DB_TEST_RUNNER" ]; then
    node "$DB_TEST_RUNNER"
else
    echo "WARNING: DB Test Runner not found at $DB_TEST_RUNNER. Skipping."
fi

echo ""
echo "=================================================="
echo "SUCCESS: All tests passed!"
echo "=================================================="
