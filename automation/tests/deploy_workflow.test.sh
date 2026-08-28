#!/bin/bash
# ==============================================================================
# deploy.yml smoke test
#
# Cheap sanity checks that don't require actionlint to be installed:
#   1. YAML parses (via python).
#   2. Required top-level keys exist (on, jobs).
#   3. Each deploy target has an `if:` so only one branch ever runs.
#   4. The Cloudflare job references the secrets and conf keys we expect.
#   5. The Cloudflare job's wrangler command uses the conf-driven project name.
# ==============================================================================
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
WORKFLOW="$PROJECT_ROOT/.github/workflows/deploy.yml"

if [ ! -f "$WORKFLOW" ]; then
    echo "Workflow not found: $WORKFLOW"
    exit 1
fi

fail=0

# 1. YAML parse when the optional PyYAML parser is available. The structural
# checks below remain the dependency-free fallback.
if ! command -v python3 >/dev/null 2>&1; then
    echo "  skip: python3 not available, using structural checks"
elif ! python3 -c "import yaml" 2>/dev/null; then
    echo "  skip: PyYAML not available, using structural checks"
elif ! python3 -c "import yaml; yaml.safe_load(open('$WORKFLOW'))" 2>/dev/null; then
        echo "  FAIL: deploy.yml is not valid YAML"
        python3 -c "import yaml; yaml.safe_load(open('$WORKFLOW'))" || true
        fail=1
else
    echo "  ok: deploy.yml parses as YAML"
fi

# 2. Required top-level keys.
for needle in 'on:' 'jobs:' 'tenant-drift:' 'legal-contract:' 'detect:' 'cloudflare:' 'netlify:' 'gh-pages:' 'skipped:'; do
    if grep -F -q "$needle" "$WORKFLOW"; then
        echo "  ok: workflow has '$needle'"
    else
        echo "  FAIL: workflow missing '$needle'"
        fail=1
    fi
done

# The config-backed legal pages are a prerequisite of target detection, so a
# production branch cannot silently deploy an SPA fallback at store URLs.
for needle in 'needs: [tenant-drift, legal-contract]' 'render_legal_pages.mjs --validate' 'render_legal_pages.mjs --check'; do
    if grep -F -q "$needle" "$WORKFLOW"; then
        echo "  ok: legal contract contains '$needle'"
    else
        echo "  FAIL: legal contract missing '$needle'"
        fail=1
    fi
done

# 3. Each target job has if:.
for job in cloudflare netlify gh-pages skipped; do
    # Match `<job>:` block start and look for `if:` within ~10 lines.
    if awk -v job="$job:" '$0 ~ "^  "job {found=1; n=0} found {n++; if($0 ~ "if:") {print "ok"; exit} if(n>15){exit}}' "$WORKFLOW" | grep -q ok; then
        echo "  ok: $job job has if:"
    else
        echo "  FAIL: $job job missing if:"
        fail=1
    fi
done

# 4. Cloudflare job references the right secrets / conf keys. Each production
# tenant must materialize its own private release manifest before the shared
# build preflight runs; one cross-tenant manifest would fail closed.
for needle in \
    'CLOUDFLARE_API_TOKEN' \
    'CLOUDFLARE_ACCOUNT_ID' \
    'CLOUDFLARE_PROJECT_NAME' \
    'FESTAPP_RELEASE_MANIFEST_CSMOSTRAVA2026' \
    'FESTAPP_RELEASE_MANIFEST_HVEZDAMORSKA' \
    'FESTAPP_RELEASE_MANIFEST_CAVFOTOFEST' \
    'FESTAPP_RELEASE_MANIFEST=$RELEASE_MANIFEST_PATH' \
    'ensure-pages-project.mjs'; do
    if grep -F -q "$needle" "$WORKFLOW"; then
        echo "  ok: cloudflare job references '$needle'"
    else
        echo "  FAIL: cloudflare job missing reference to '$needle'"
        fail=1
    fi
done

# 5. Wrangler command uses the conf-driven project name (not a hardcoded slug).
if grep -F -q "pages deploy build/web --project-name=\${{ needs.detect.outputs.cf_project }}" "$WORKFLOW"; then
    echo "  ok: wrangler deploy uses needs.detect.outputs.cf_project"
else
    echo "  FAIL: wrangler deploy must use needs.detect.outputs.cf_project (no hardcoded project name)"
    fail=1
fi

# 6. cloudflare_build.sh exists and is executable — deploy.yml depends on it.
BUILD_SH="$PROJECT_ROOT/automation/cloudflare_build.sh"
if [ -x "$BUILD_SH" ]; then
    echo "  ok: $BUILD_SH is executable"
else
    echo "  FAIL: $BUILD_SH missing or not executable"
    fail=1
fi

# Netlify production branches deploy through their Git integration. CI must
# remain pending until the configured release is actually served and verified.
for needle in 'Wait for Git-triggered Netlify production deploy' 'festapp-version.json?deploy-sha=' 'Netlify did not publish'; do
    if grep -F -q "$needle" "$WORKFLOW"; then
        echo "  ok: netlify job contains '$needle'"
    else
        echo "  FAIL: netlify job missing '$needle'"
        fail=1
    fi
done
if grep -F -q 'Not implemented in CI' "$WORKFLOW"; then
    echo "  FAIL: netlify job is still a no-op placeholder"
    fail=1
else
    echo "  ok: netlify job is not a no-op placeholder"
fi

# 7. _worker.js heredoc covers sitemap + form OG inject + extension-less entries.
for needle in '/sitemap.xml' '/form/' 'WEB_CLIENT_INDEX' 'FLUTTER_ENTRY' 'AUTH_BRIDGE' 'FORCED_OCCASION_PATH' 'FORCE_OCCASION_LINK' 'get_available_occasions' 'get_occasion_seo_data'; do
    if grep -F -q "$needle" "$BUILD_SH"; then
        echo "  ok: cloudflare_build.sh worker covers '$needle'"
    else
        echo "  FAIL: cloudflare_build.sh worker missing '$needle'"
        fail=1
    fi
done

# 8. A deploy is not successful until the custom domain repeatedly serves one
# coherent HTML/manifest/main/service-worker generation.
for needle in 'verify_web_deployment.mjs' '"https://${DOMAIN}" "${VERSION}"'; do
    if grep -F -q "$needle" "$WORKFLOW"; then
        echo "  ok: deploy workflow contains release gate '$needle'"
    else
        echo "  FAIL: deploy workflow missing release gate '$needle'"
        fail=1
    fi
done

# 9. Unified production branches replay main-owned drift/schema policy and the
# tenant identity matrix before any target-specific deploy job can run.
for needle in 'tenant-drift:' 'check_tenant_branch_drift.sh' 'tenant-overlay.schema.json' 'tenant_config_matrix.test.sh'; do
    if grep -F -q "$needle" "$WORKFLOW" "$PROJECT_ROOT/automation/check_tenant_branch_drift.sh"; then
        echo "  ok: tenant gate contains '$needle'"
    else
        echo "  FAIL: tenant gate missing '$needle'"
        fail=1
    fi
done

for branch_mapping in \
    'prod/cavfotofest) TENANT_ID=cavfotofest' \
    'prod/csmostrava2026) TENANT_ID=csmostrava2026' \
    'prod/hvezdamorska) TENANT_ID=hvezdamorska'; do
    if grep -F -q "$branch_mapping" "$WORKFLOW"; then
        echo "  ok: tenant gate routes '$branch_mapping'"
    else
        echo "  FAIL: tenant gate missing '$branch_mapping'"
        fail=1
    fi
done

echo
if [ $fail -ne 0 ]; then
    echo "❌ deploy workflow test FAILED"
    exit 1
fi
echo "✅ deploy workflow test passed"
