#!/bin/bash
# ==============================================================================
# CI BUILD
# Purpose: specialized build script for CI/CD environments (e.g. Netlify/GitHub).
#          - Installs Flutter (if missing)
#          - Builds Flutter App (release)
#          - Builds Web Client
#          - Merges Web Client into Flutter build output
# Usage: ./automation/ci_build.sh
# ==============================================================================
set -e

echo "Starting Unified Build Process..."

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FLUTTER_VERSION=$(node "$PROJECT_ROOT/automation/flutter_version.mjs")

# 1. Build Flutter App
echo "Building Flutter App..."
# Ensure flutter is in path (Netlify specific)
export PATH="$PATH:/opt/buildhome/flutter/bin"

if ! command -v flutter &> /dev/null; then
    echo "Flutter not found. Installing ${FLUTTER_VERSION}..."
    curl -L "https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz" | tar -xJf - -C /opt/buildhome
    export PATH="/opt/buildhome/flutter/bin:$PATH"
fi

ACTUAL_FLUTTER_VERSION=$(flutter --version --machine | node -e 'let input=""; process.stdin.on("data", chunk => input += chunk); process.stdin.on("end", () => process.stdout.write(JSON.parse(input).frameworkVersion));')
if [ "$ACTUAL_FLUTTER_VERSION" != "$FLUTTER_VERSION" ]; then
    echo "Flutter ${FLUTTER_VERSION} required by .fvmrc, found ${ACTUAL_FLUTTER_VERSION}." >&2
    exit 1
fi

flutter precache
flutter build web --release --base-href / --no-web-resources-cdn --no-wasm-dry-run

# 2. Prepare Flutter Build for Merge
echo "Preparing Flutter build..."
# Rename index.html to flutter.html so it doesn't conflict with Web Client
mv build/web/index.html build/web/flutter.html

# 3. Build Web Client
echo "Building Web Client..."
cd web_client
npm install
npm run build

# 4. Merge Builds
echo "Merging Web Client into Flutter build..."
# Copy all Web Client dist files to build/web
# This will place index.html (Web Client) at root, and _redirects
cp -r dist/* ../build/web/

cd ..

rm -f build/web/flutter_service_worker.js
node automation/generate_pwa_service_worker.mjs \
  build/web \
  "$(grep -m1 '^VERSION=' automation/project.conf | cut -d= -f2 | tr -d '[:space:]')" \
  "$(grep -m1 '^FORCE_OCCASION_LINK=' automation/project.conf | cut -d= -f2- | tr -d '\"' | tr -d "'" | tr -d '[:space:]')"

echo "Build Complete. Output in build/web"
ls -la build/web
