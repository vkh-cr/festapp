#!/bin/bash
# ==============================================================================
# CLOUDFLARE PAGES BUILD
# Purpose: shared build script for Cloudflare Pages — runs project.conf
#          propagation, installs Flutter (if missing), builds Flutter web +
#          Web Client, merges them, and emits a single _worker.js that owns
#          all routing (web client, Flutter SPA, /sitemap.xml, /form/<slug>
#          OG inject, auth_bridge, static fallback).
#
# Used by:
#   - .github/workflows/deploy.yml (CI deploy via wrangler-action)
#   - Cloudflare Pages dashboard "Build command" for direct-git projects
#
# Required env vars on the CF Pages project (Production + Preview) for the
# dynamic sitemap and OG inject to work at runtime:
#   - SUPABASE_URL
#   - SUPABASE_ANON_KEY
#   - ORGANIZATION_ID
# ==============================================================================
set -e

echo "Cloudflare Pages build starting..."

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_WEB_DIR="$PROJECT_ROOT/build/web"
WEB_CLIENT_DIST_DIR="$PROJECT_ROOT/web_client/dist"

# Both Flutter and Vite leave content-hashed assets from older builds in place.
# A merged PWA must start from empty generated output or its service worker will
# precache obsolete tenant bundles and retain them in browser storage.
rm -rf -- "$BUILD_WEB_DIR" "$WEB_CLIENT_DIST_DIR"

FLUTTER_VERSION="3.38.7"
FLUTTER_INSTALL_DIR="${HOME}/flutter"

# 1. Resolve Flutter command. Preference order:
#      1. `flutter` already on PATH (CF Pages CI runs subosito or our prior install).
#      2. `fvm flutter` (macOS dev box; works on any host with fvm).
#      3. Download Linux Flutter into ${HOME} (CF Pages Linux build container).
FLUTTER_CMD=""
if command -v flutter &> /dev/null; then
    FLUTTER_CMD="flutter"
elif command -v fvm &> /dev/null; then
    FLUTTER_CMD="fvm flutter"
else
    if [ ! -d "${FLUTTER_INSTALL_DIR}" ]; then
        echo "Installing Flutter ${FLUTTER_VERSION} (linux)..."
        curl -L "https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz" \
            | tar -xJf - -C "${HOME}"
    fi
    export PATH="${FLUTTER_INSTALL_DIR}/bin:${PATH}"
    FLUTTER_CMD="flutter"
fi

$FLUTTER_CMD --version

# 1b. Apply project.conf to source files (title, app_config.js, app_config.dart,
#     theme, fonts, version). Portable sed in apply_config.sh handles Linux/macOS.
echo "Applying project configuration..."
./automation/apply_config.sh

# 2. Build Flutter Web
echo "Building Flutter App..."
$FLUTTER_CMD precache --web
$FLUTTER_CMD build web --release --base-href / --no-web-resources-cdn --no-wasm-dry-run \
  --dart-define=FLUTTER_WEB_CANVASKIT_FORCE_MULTI_SURFACE_RASTERIZER=true

# 2b. Emit the automatic-update manifest (festapp-version.json + stamped
#     main.dart copy) that powers web/festapp_update_prompt.js. Split into its
#     own script so it can be unit tested without a Flutter build.
./automation/emit_version_manifest.sh build/web

# 3. Rename Flutter index.html so the Web Client index.html sits at root.
#    Cloudflare strips ".html" from URLs (/foo.html -> 308 /foo). We keep the
#    Flutter entry extension-less so worker fetches don't bounce through a
#    redirect (which would lose body + corrupt query). Same trick for
#    auth_bridge and the web client index below.
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
mv build/web/index.html build/web/webclient

# 5c. Rename auth_bridge.html to extension-less /auth_bridge.
if [ -f build/web/auth_bridge.html ]; then
    mv build/web/auth_bridge.html build/web/auth_bridge
fi

# 5d. Replace Flutter's deprecated self-unregistering worker with a versioned,
#     complete app-shell cache after both frontends have been merged.
rm -f build/web/flutter_service_worker.js
node automation/generate_pwa_service_worker.mjs \
  build/web \
  "$(grep -m1 '^VERSION=' automation/project.conf | cut -d= -f2 | tr -d '[:space:]')" \
  "$(grep -m1 '^FORCE_OCCASION_LINK=' automation/project.conf | cut -d= -f2- | tr -d '\"' | tr -d "'" | tr -d '[:space:]')"
node automation/check_pwa_shell_budget.mjs build/web automation/project.conf

# 6. Cloudflare-specific routing via Pages Function (_worker.js).
#    Cloudflare Pages applies _redirects BEFORE static assets, so a catch-all
#    "/* /flutter 200" rewrite would hijack every URL (favicon, JS chunks,
#    canvaskit/...) and serve the Flutter HTML for everything. A worker gives
#    us explicit routing AND lets us host the dynamic sitemap and OG inject
#    (the old functions/ Pages Functions are mutually exclusive with
#    _worker.js, so they would not be deployed alongside it).
rm -f build/web/_redirects build/web/_headers

cat > build/web/_worker.js <<'WORKER'
// =============================================================================
// Cloudflare Pages worker — single routing source for the Festapp deployment.
//
// Required env vars on the Pages project (Production + Preview):
//   SUPABASE_URL, SUPABASE_ANON_KEY, ORGANIZATION_ID
//
// All HTML entry-points are kept extension-less so Cloudflare's .html-strip
// does not turn ASSETS.fetch into a 308 redirect (which would corrupt the
// response body and query string).
// =============================================================================

const WEB_CLIENT_INDEX = "/webclient";
const FLUTTER_ENTRY = "/flutter";
const AUTH_BRIDGE = "/auth_bridge";
const FORCED_OCCASION_PATH = null; // replaced from project.conf after generation

// Web client SPA routes (form list handled by /form/<slug> below).
const WEB_CLIENT_EXACT = new Set(["/"]);

// Flutter SPA routes (login / admin / handover).
const FLUTTER_PREFIXES = ["/login", "/admin", "/transfer"];

// auth_bridge.html alias — RouterService still posts to /auth_bridge.html.
const AUTH_BRIDGE_PATHS = new Set(["/auth_bridge", "/auth_bridge.html"]);

// Internal asset names (extension-less HTML entry points). Cloudflare serves
// these as application/octet-stream to direct hits, which triggers a browser
// download. They must never be reachable as a user-facing URL — redirect to /.
const INTERNAL_ASSET_PATHS = new Set(["/flutter", "/webclient"]);

// Flutter's entry/runtime files use stable, unversioned names that change on
// every deploy (main.dart.js, its main.dart.js_<n>.part.js deferred chunks,
// the bootstrap/loader, and the canvaskit/skwasm wasm runtime). These must be
// revalidated on every load so a client never mixes assets from two builds.
const MUTABLE_RUNTIME_ASSET = /(?:^|\/)(?:festapp-version\.json|main\.dart\.js(?:_\d+\.part\.js)?|main\.dart\.mjs|flutter_bootstrap\.js|flutter\.js|flutter_service_worker\.js|festapp_service_worker\.js|festapp_update_prompt\.js|(?:canvaskit|skwasm)[\w.]*\.(?:js|mjs|wasm))$/;

function htmlResponse(body, originHeaders) {
  const headers = new Headers(originHeaders || {});
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "no-cache, must-revalidate");
  headers.delete("location");
  headers.delete("content-length");
  headers.delete("content-range");
  headers.delete("accept-ranges");
  return new Response(body, { status: 200, headers });
}

async function serveAsset(env, request, path) {
  const url = new URL(request.url);
  url.pathname = path;
  // Preserve original query so downstream HTML scripts can read it.
  return env.ASSETS.fetch(new Request(url.toString(), { method: "GET" }));
}

// ---------------------------------------------------------------------------
// /sitemap.xml — dynamic from Supabase get_available_occasions
// ---------------------------------------------------------------------------
async function handleSitemap(request, env) {
  const url = new URL(request.url);
  const baseUrl = url.origin;
  const today = new Date().toISOString().split("T")[0];
  const xmlHeaders = { "content-type": "application/xml", "cache-control": "public, max-age=0, s-maxage=3600" };

  const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;

  try {
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;
    const orgId = env.ORGANIZATION_ID || 1;
    if (!supabaseUrl || !supabaseKey) return new Response(fallback, { headers: xmlHeaders });

    const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/get_available_occasions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: supabaseKey,
        authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ p_organization_id: orgId, p_unit_id: null }),
    });
    if (!rpc.ok) return new Response(fallback, { headers: xmlHeaders });

    const data = await rpc.json();
    let occasions = [];
    if (Array.isArray(data)) occasions = data;
    else if (data && Array.isArray(data.occasions)) occasions = data.occasions;
    else if (data && data.data && Array.isArray(data.data.occasions)) occasions = data.data.occasions;
    if (occasions.length === 0) return new Response(fallback, { headers: xmlHeaders });

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>1.0</priority>\n  </url>\n`;
    for (const occ of occasions) {
      const link = (occ && occ.link || "").trim();
      if (!link) continue;
      xml += `  <url>\n    <loc>${baseUrl}/form/${link}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n  </url>\n`;
    }
    xml += `</urlset>`;
    return new Response(xml, { headers: xmlHeaders });
  } catch (e) {
    console.error("sitemap error", e);
    return new Response(fallback, { headers: xmlHeaders });
  }
}

// ---------------------------------------------------------------------------
// /form/<slug> — web client HTML with OG / twitter / canonical meta injected
// ---------------------------------------------------------------------------
async function handleForm(request, env, path) {
  // Fetch base HTML (web client index) so the rest of the SPA works as usual.
  const baseRes = await serveAsset(env, request, WEB_CLIENT_INDEX);
  const baseHtml = await baseRes.text();
  const baseHeaders = baseRes.headers;

  try {
    const url = new URL(request.url);
    const slug = path.replace(/^\/form\//, "").split("/")[0];
    if (!slug) return htmlResponse(baseHtml, baseHeaders);

    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) return htmlResponse(baseHtml, baseHeaders);

    const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/get_occasion_seo_data`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: supabaseKey,
        authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ p_link_slug: slug }),
    });
    if (!rpc.ok) return htmlResponse(baseHtml, baseHeaders);
    const seo = await rpc.json();
    if (!seo) return htmlResponse(baseHtml, baseHeaders);

    const unitTitle = seo.unit_title;
    const orgTitle = seo.org_title || "Festapp";
    const title = seo.title || "Event";
    let description = seo.form_description || seo.description ||
      "Rychlé a jednoduché založení události, prodej vstupenek a registrace.";
    description = description.replace(/<[^>]+>/gm, " ").replace(/\s+/g, " ").trim();
    const imagePath = (seo.data && seo.data.image) || seo.image;
    let imageUrl;
    if (imagePath && imagePath.startsWith("http")) imageUrl = imagePath;
    else if (imagePath) imageUrl = `https://img.festapp.net/${imagePath}`;
    else imageUrl = `${url.origin}/og_image.jpg`;
    const fullTitle = `${title} - ${unitTitle || orgTitle}`;

    let page = baseHtml;
    page = page.replace(/<title[^>]*>.*?<\/title>/i, `<title>${fullTitle}</title>`);

    const replaceMeta = (attr, name, content) => {
      const re = new RegExp(`(<meta[^>]*${attr}=["']${name}["'][^>]*content=["'])([^"']*)(["'][^>]*>)`, "gi");
      if (re.test(page)) {
        page = page.replace(re, `$1${content}$3`);
      } else {
        const tagRe = new RegExp(`<meta[^>]*${attr}=["']${name}["'][^>]*>`, "gi");
        page = page.replace(tagRe, (m) => m.replace(/content=["'][^"']*["']/i, `content="${content}"`));
      }
    };

    replaceMeta("property", "og:title", fullTitle);
    replaceMeta("property", "twitter:title", fullTitle);
    replaceMeta("name", "description", description);
    replaceMeta("property", "og:description", description);
    replaceMeta("property", "twitter:description", description);
    replaceMeta("property", "og:image", imageUrl);
    replaceMeta("property", "twitter:image", imageUrl);
    replaceMeta("property", "og:url", url.href);
    replaceMeta("property", "twitter:url", url.href);
    page = page.replace(
      /<link[^>]*rel=["']canonical["'][^>]*href=["'][^"']*["'][^>]*>/i,
      `<link rel="canonical" href="${url.href}">`
    );

    return htmlResponse(page, baseHeaders);
  } catch (e) {
    console.error("form OG inject error", e);
    return htmlResponse(baseHtml, baseHeaders);
  }
}

// ---------------------------------------------------------------------------
// Entry-point
// ---------------------------------------------------------------------------
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/sitemap.xml") return handleSitemap(request, env);

    if (path === "/" && FORCED_OCCASION_PATH) {
      return Response.redirect(new URL(FORCED_OCCASION_PATH, url).toString(), 302);
    }

    if (INTERNAL_ASSET_PATHS.has(path)) {
      if (url.searchParams.get("pwa-cache") === "1") {
        const res = await serveAsset(env, request, path);
        return htmlResponse(res.body, res.headers);
      }
      return Response.redirect(new URL("/", url).toString(), 301);
    }

    if (path.startsWith("/form/")) return handleForm(request, env, path);

    if (WEB_CLIENT_EXACT.has(path)) {
      const res = await serveAsset(env, request, WEB_CLIENT_INDEX);
      return htmlResponse(res.body, res.headers);
    }

    if (AUTH_BRIDGE_PATHS.has(path)) {
      const res = await serveAsset(env, request, AUTH_BRIDGE);
      return htmlResponse(res.body, res.headers);
    }

    if (FLUTTER_PREFIXES.some(p => path === p || path.startsWith(p + "/"))) {
      const res = await serveAsset(env, request, FLUTTER_ENTRY);
      return htmlResponse(res.body, res.headers);
    }

    // Real static asset (favicon, web-assets/*, canvaskit/*, main.dart.js, ...).
    const assetRes = await env.ASSETS.fetch(request);
    if (assetRes.status !== 404) {
      // Flutter ships main.dart.js, its deferred *.part.js chunks and the wasm
      // runtime under STABLE, unversioned filenames that are overwritten on every
      // deploy. Cloudflare Pages serves them with max-age=14400, so after a deploy
      // a browser can hold e.g. a fresh main.dart.js next to a stale .part.js from
      // the previous build — an incompatible mix that crashes the app in a
      // render/paint loop. Force these runtime files to revalidate on every load
      // (index.html is already no-cache) so the whole JS/wasm graph always matches.
      if (MUTABLE_RUNTIME_ASSET.test(path)) {
        const headers = new Headers(assetRes.headers);
        headers.set("cache-control", "no-cache, must-revalidate");
        return new Response(assetRes.body, {
          status: assetRes.status,
          statusText: assetRes.statusText,
          headers,
        });
      }
      return assetRes;
    }

    // Unknown path -> Flutter SPA fallback (lets Flutter router handle it).
    const fallback = await serveAsset(env, request, FLUTTER_ENTRY);
    return htmlResponse(fallback.body, fallback.headers);
  },
};
WORKER

python3 - build/web/_worker.js automation/project.conf <<'PY'
import json
import pathlib
import re
import sys

worker_path, config_path = sys.argv[1:]
source = pathlib.Path(worker_path).read_text(encoding="utf-8")
config = pathlib.Path(config_path).read_text(encoding="utf-8")
match = re.search(r"^FORCE_OCCASION_LINK=(.*)$", config, re.MULTILINE)
occasion_link = match.group(1).strip().strip('"').strip("'") if match else ""
occasion_link = occasion_link.strip().strip("/")
replacement = json.dumps(f"/{occasion_link}" if occasion_link else None)
source, count = re.subn(
    r"const FORCED_OCCASION_PATH = null;",
    f"const FORCED_OCCASION_PATH = {replacement};",
    source,
    count=1,
)
if count != 1:
    raise SystemExit("Could not stamp FORCE_OCCASION_LINK into _worker.js")
pathlib.Path(worker_path).write_text(source, encoding="utf-8")
PY

node automation/verify_web_build.mjs build/web \
  "$(grep -m1 '^VERSION=' automation/project.conf | cut -d= -f2 | tr -d '[:space:]')" \
  automation/project.conf

echo "Build complete. Output in build/web"
ls -la build/web | head -25
