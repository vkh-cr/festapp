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

# 1b. Apply project.conf to source files (title, app_config.js, app_config.dart, theme, fonts, version).
echo "Applying project configuration..."
./automation/apply_config.sh

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

# 5b. Rename Web Client index.html to extension-less /webclient.
#     Same reason as /flutter: Cloudflare strips .html and the worker fetch
#     for /index.html would receive a 308 redirect, breaking the worker route.
mv build/web/index.html build/web/webclient

# 6. Cloudflare-specific routing via Pages Function (_worker.js).
#    Reason: Cloudflare Pages applies _redirects BEFORE static assets, so a
#    "/* /flutter 200" fallback rewrites every URL (including /favicon.ico,
#    /web-assets/..., /assets/main.dart.js, etc.) and the site collapses to
#    the Flutter HTML for every request. A worker gives us explicit control:
#    1) /, /form/*  -> web_client index.html
#    2) Flutter SPA prefixes -> /flutter (with text/html)
#    3) Static assets pass through ASSETS
#    4) 404 -> Flutter SPA fallback
#
#    Remove _redirects/_headers copied from web_client/public/ so they don't
#    shadow the worker.
rm -f build/web/_redirects build/web/_headers

cat > build/web/_worker.js <<'WORKER'
// Both entry-points are stored extension-less so Cloudflare's .html-strip
// does not turn the worker's ASSETS.fetch into a 308 redirect.
const WEB_CLIENT_INDEX = "/webclient";
const FLUTTER_ENTRY = "/flutter";

// Routes handled by the web_client SPA.
const WEB_CLIENT_PREFIXES = ["/form/"];
const WEB_CLIENT_EXACT = new Set(["/"]);

// Routes handled by the Flutter SPA.
const FLUTTER_PREFIXES = ["/login", "/admin", "/transfer"];

function htmlResponse(assetResponse) {
  const headers = new Headers(assetResponse.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.delete("location");
  return new Response(assetResponse.body, {
    status: 200,
    headers,
  });
}

async function serveAsset(env, request, path) {
  const url = new URL(request.url);
  url.pathname = path;
  url.search = "";
  return env.ASSETS.fetch(new Request(url.toString(), { method: "GET" }));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (WEB_CLIENT_EXACT.has(path) || WEB_CLIENT_PREFIXES.some(p => path.startsWith(p))) {
      const res = await serveAsset(env, request, WEB_CLIENT_INDEX);
      return htmlResponse(res);
    }

    if (FLUTTER_PREFIXES.some(p => path === p || path.startsWith(p + "/"))) {
      const res = await serveAsset(env, request, FLUTTER_ENTRY);
      return htmlResponse(res);
    }

    // Direct hit on the extension-less Flutter entry -> set html content-type.
    if (path === FLUTTER_ENTRY) {
      const res = await env.ASSETS.fetch(request);
      return htmlResponse(res);
    }

    // Try real static asset.
    const assetRes = await env.ASSETS.fetch(request);
    if (assetRes.status !== 404) {
      return assetRes;
    }

    // Unknown path -> Flutter SPA fallback (lets Flutter router handle it).
    const fallback = await serveAsset(env, request, FLUTTER_ENTRY);
    return htmlResponse(fallback);
  },
};
WORKER

echo "Build complete. Output in build/web"
ls -la build/web | head -25
