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

# 3. Rename Flutter index.html so Web Client index.html sits at root.
#    Cloudflare Pages strips ".html" from URLs (/foo.html -> /foo), which would
#    create a redirect loop with our "/* -> /flutter.html 200" rewrite. Use an
#    extension-less filename and serve it as text/html via _headers below.
mv build/web/index.html build/web/flutter

# 4. Build Web Client
echo "Building Web Client..."
cd web_client
npm install
npm run build

# 5. Merge Web Client dist into Flutter build/web
cp -r dist/* ../build/web/

cd ..

# 6. Cloudflare-specific overrides (overwrite files copied from web_client/public/)
cat > build/web/_redirects <<'REDIRECTS'
# Cloudflare Pages routing (overrides web_client/public/_redirects)
# Web Client routes (SPA)
/form/*  /index.html  200
/        /index.html  200

# Flutter SPA routes — rewrite to /flutter (extension-less file with text/html via _headers)
/login    /flutter  200
/admin    /flutter  200
/transfer /flutter  200

# Fallback: everything else goes to Flutter
/*        /flutter  200
REDIRECTS

cat > build/web/_headers <<'HEADERS'
# Force HTML mime type on the extension-less Flutter entry point
/flutter
  Content-Type: text/html; charset=utf-8
HEADERS

echo "Build complete. Output in build/web"
ls -la build/web | head -25
