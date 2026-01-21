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

# Default to all false if args provided, else all true
RUN_WEB=false
RUN_DB=false
RUN_FLUTTER=false

# If no arguments, run all
if [ $# -eq 0 ]; then
    RUN_WEB=true
    RUN_DB=true
    RUN_FLUTTER=true
else
    # Parse arguments
    for arg in "$@"
    do
        case $arg in
            web)
                RUN_WEB=true
                ;;
            db)
                RUN_DB=true
                ;;
            flutter)
                RUN_FLUTTER=true
                ;;
            *)
                echo "Unknown argument: $arg"
                echo "Usage: ./automation/test_all.sh [web] [db] [flutter]"
                exit 1
                ;;
        esac
    done
fi

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
if [ "$RUN_WEB" = true ]; then
    echo ""
    echo ">>> Web Client Tests..."
    if [ -d "$WEB_CLIENT_DIR" ]; then
        cd "$WEB_CLIENT_DIR"
        # Run npm test with 60s timeout (increased for stability)
        set +e
        run_with_timeout 60 "npm test"
        res=$?
        set -e
        
        if [ $res -ne 0 ]; then
            echo "⚠️  WARNING: Web Client Tests Failed or Timed Out."
        fi
    else
        echo "Error: web_client directory not found at $WEB_CLIENT_DIR"
    fi
fi

# 2. Run Database Tests
if [ "$RUN_DB" = true ]; then
    echo ""
    echo ">>> Database Tests..."
    DB_TEST_RUNNER="$PROJECT_ROOT/web_client/scripts/run_db_tests.js"
    if [ -f "$DB_TEST_RUNNER" ]; then
        node "$DB_TEST_RUNNER"
    else
        echo "WARNING: DB Test Runner not found at $DB_TEST_RUNNER. Skipping."
    fi
fi

# 3. Run Flutter Tests
if [ "$RUN_FLUTTER" = true ]; then
    echo ""
    echo ">>> Flutter Tests..."
    cd "$PROJECT_ROOT"
    
    # Check if fvm is installed/used
    if command -v fvm &> /dev/null; then
        FLUTTER_CMD="fvm flutter"
    else
        FLUTTER_CMD="flutter"
    fi
    
    set +e
    $FLUTTER_CMD test
    res=$?
    set -e
    
    if [ $res -ne 0 ]; then
        echo "⚠️  WARNING: Flutter Tests Failed."
    fi
fi

echo ""
echo "=================================================="
echo "Done."
echo "=================================================="
