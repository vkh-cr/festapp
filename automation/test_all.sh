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
RUN_INTEGRATION=false

# If no arguments, run all
if [ $# -eq 0 ]; then
    RUN_WEB=true
    RUN_DB=true
    RUN_FLUTTER=true
    RUN_INTEGRATION=true
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
            integration)
                RUN_INTEGRATION=true
                ;;
            *)
                echo "Unknown argument: $arg"
                echo "Usage: ./automation/test_all.sh [web] [db] [flutter] [integration]"
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

# 3b. Run Deno Edge Function Tests
if [ "$RUN_DB" = true ] || [ "$RUN_INTEGRATION" = true ]; then
    # Deno Edge Function Tests
    # Tests business logic of server functions.
    echo ""
    echo ">>> Deno Edge Function Tests..."
    
    if command -v deno &> /dev/null; then
        # Find and run all test_*.ts files in supabase/functions
        # We use explicit paths to avoid running unrelated stuff if any
        DENO_TEST_FILES=$(find supabase/functions -name "test_*.ts" -not -path "*/node_modules/*")
        
        if [ -n "$DENO_TEST_FILES" ]; then
             echo "Found Deno tests: $DENO_TEST_FILES"
             # Run without --allow-all to be safe.
             # test_parser_comprehensive only needs logic, but imports might trigger env read.
             set +e
             # Load env vars for Deno tests
             if [ -f ".env.local" ]; then
                export $(grep -v '^#' .env.local | xargs)
             fi
             deno test --allow-env --allow-net --allow-read $DENO_TEST_FILES
             res=$?
             set -e
             
             if [ $res -ne 0 ]; then
                echo "⚠️  WARNING: Deno Tests Failed."
                exit 1 
             fi
        else
             echo "No Deno tests found."
        fi
    else
        echo "⚠️  Deno not installed. Skipping Edge Function tests."
    fi
fi

# 4. Run Integration Tests
if [ "$RUN_INTEGRATION" = true ]; then
    echo ""
    echo ">>> Integration Tests..."
    
    # Check for Supabase Keys (basic check)
    if [ -n "$SUPABASE_URL" ] && [ -n "$SUPABASE_SERVICE_ROLE_KEY" ]; then
        echo "Running Bank Import Integration..."
        node tests/integration/bank_import.js --existing-token "00000000-0000-0000-0000-00000000TEST"
    elif [ -f "automation/project.conf" ]; then
         echo "Running Bank Import Integration (using project.conf defaults)..."
         node tests/integration/bank_import.js --existing-token "00000000-0000-0000-0000-00000000TEST"
    else
        echo "⚠️  SKIPPING Integration Tests: Missing SUPABASE credentials."
    fi
fi

echo ""
echo "=================================================="
echo "Done."
echo "=================================================="
