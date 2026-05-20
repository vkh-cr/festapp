#!/bin/bash
# ==============================================================================
# CLOUDFLARE PAGES BUILD
# Purpose: build script for Cloudflare Pages — installs Flutter to ${HOME},
#          builds Flutter web + Web Client, and merges them into build/web.
# Usage: configured in Cloudflare Pages dashboard:
#          Build command:       ./automation/cloudflare_build.sh
#          Build output dir:    build/web
# ==============================================================================
set -e

echo "Cloudflare Pages build starting..."

FLUTTER_VERSION="3.38.7"
FLUTTER_INSTALL_DIR="${HOME}/flutter"

# 1. Install Flutter to ${HOME} (Cloudflare Pages writable area)
if ! command -v flutter &> /dev/null; then
    if [ ! -d "${FLUTTER_INSTALL_DIR}" ]; then
        echo "Installing Flutter ${FLUTTER_VERSION}..."
        curl -L "https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz" \
            | tar -xJf - -C "${HOME}"
    fi
    export PATH="${FLUTTER_INSTALL_DIR}/bin:${PATH}"
fi

flutter --version

# 2. Build Flutter Web
echo "Building Flutter App..."
flutter precache --web
flutter build web --release --base-href /

# 3. Rename Flutter index.html to flutter.html so Web Client index.html sits at root
mv build/web/index.html build/web/flutter.html

# 4. Build Web Client
echo "Building Web Client..."
cd web_client
npm install
npm run build

# 5. Merge Web Client dist into Flutter build/web
cp -r dist/* ../build/web/

cd ..

echo "Build complete. Output in build/web"
ls -la build/web | head -25
