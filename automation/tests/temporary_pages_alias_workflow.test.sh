#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
WORKFLOW="$ROOT/.github/workflows/temporary-pages-alias.yml"

grep -Fq 'festivalslunovrat) echo "alias=slunovrat.festapp.net"' "$WORKFLOW"
grep -Fq 'farnostopava) echo "alias=farnostopava.festapp.net"' "$WORKFLOW"
grep -Fq 'git show "origin/prod/${TENANT}:automation/project.conf"' "$WORKFLOW"
grep -Fq 'export CLOUDFLARE_MANAGE_DNS=true' "$WORKFLOW"
grep -Fq 'unset CLOUDFLARE_LEGACY_DNS_TYPE CLOUDFLARE_LEGACY_DNS_TARGET' "$WORKFLOW"
grep -Fq 'node automation/verify_web_deployment.mjs' "$WORKFLOW"

echo 'Temporary Pages alias workflow contract passed.'
