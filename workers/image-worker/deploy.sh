#!/usr/bin/env bash
#
# deploy.sh - Deploy festapp-image-worker to Cloudflare
#
# Prerequisites:
#   - Node.js 18+ installed
#   - npm dependencies installed (cd workers/image-worker && npm install)
#   - Cloudflare account with R2 and Workers enabled
#   - Domain festapp.net DNS zone in the same Cloudflare account
#
# Usage:
#   cd workers/image-worker
#   ./deploy.sh
#
# For first-time setup, this script will:
#   1. Authenticate with Cloudflare (opens browser)
#   2. Create R2 buckets
#   3. Deploy the Worker
#   4. Set Worker secrets (prompts for values)
#   5. Verify deployment
#
# For redeployment (buckets + secrets already exist):
#   ./deploy.sh --redeploy
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
error() { echo -e "${RED}[ERROR]${NC} $*"; }

REDEPLOY=false
if [[ "${1:-}" == "--redeploy" ]]; then
  REDEPLOY=true
fi

# ─── Step 1: Check authentication ───────────────────────────────────────────
info "Checking Cloudflare authentication..."
if ! npx wrangler whoami 2>/dev/null | grep -q "Account ID"; then
  warn "Not authenticated with Cloudflare. Opening browser for login..."
  npx wrangler login
  if ! npx wrangler whoami 2>/dev/null | grep -q "Account ID"; then
    error "Authentication failed. Please run 'npx wrangler login' manually."
    exit 1
  fi
fi
info "Authenticated with Cloudflare."

# ─── Step 2: Create R2 buckets (skip on redeploy) ───────────────────────────
if [[ "$REDEPLOY" == false ]]; then
  info "Creating R2 buckets..."

  # festapp-images (primary storage)
  if npx wrangler r2 bucket list 2>/dev/null | grep -q "festapp-images"; then
    info "Bucket 'festapp-images' already exists, skipping."
  else
    npx wrangler r2 bucket create festapp-images
    info "Created bucket 'festapp-images'."
  fi

  # festapp-images-temp (temporary uploads)
  if npx wrangler r2 bucket list 2>/dev/null | grep -q "festapp-images-temp"; then
    info "Bucket 'festapp-images-temp' already exists, skipping."
  else
    npx wrangler r2 bucket create festapp-images-temp
    info "Created bucket 'festapp-images-temp'."
  fi

  # Verify buckets
  info "Verifying R2 buckets..."
  BUCKET_LIST=$(npx wrangler r2 bucket list 2>/dev/null)
  if echo "$BUCKET_LIST" | grep -q "festapp-images" && echo "$BUCKET_LIST" | grep -q "festapp-images-temp"; then
    info "Both R2 buckets verified."
  else
    error "Bucket verification failed. Current buckets:"
    echo "$BUCKET_LIST"
    exit 1
  fi
else
  info "Skipping bucket creation (--redeploy mode)."
fi

# ─── Step 3: Deploy the Worker ───────────────────────────────────────────────
info "Deploying Worker..."
npx wrangler deploy
info "Worker deployed."

# ─── Step 4: Set Worker secrets (skip on redeploy) ──────────────────────────
if [[ "$REDEPLOY" == false ]]; then
  info "Setting Worker secrets..."
  echo ""
  echo "You will be prompted for each secret value."
  echo "See DEPLOY.md for where to find each value."
  echo ""

  SECRETS=(
    "SUPABASE_URL"
    "SUPABASE_SERVICE_ROLE_KEY"
    "R2_ACCESS_KEY_ID"
    "R2_SECRET_ACCESS_KEY"
    "CF_ACCOUNT_ID"
  )

  for SECRET in "${SECRETS[@]}"; do
    info "Setting secret: $SECRET"
    npx wrangler secret put "$SECRET"
  done

  info "All secrets configured."
else
  info "Skipping secret configuration (--redeploy mode)."
fi

# ─── Step 5: Verify deployment ──────────────────────────────────────────────
info "Verifying deployment..."
echo ""

# Give DNS/deployment a moment to propagate
sleep 3

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://img.festapp.net/ 2>/dev/null || echo "000")

if [[ "$HTTP_CODE" == "000" ]]; then
  warn "Could not reach https://img.festapp.net/ - DNS may need time to propagate."
  warn "Try again in a few minutes: curl -s -o /dev/null -w '%{http_code}' https://img.festapp.net/"
elif [[ "$HTTP_CODE" == "404" ]]; then
  info "Worker is live! Got expected 404 (no files uploaded yet)."
else
  info "Worker responded with HTTP $HTTP_CODE."
fi

# Test auth rejection
AUTH_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST https://img.festapp.net/upload 2>/dev/null || echo "000")
if [[ "$AUTH_CODE" == "401" ]]; then
  info "Auth rejection working: POST /upload returns 401."
else
  warn "POST /upload returned $AUTH_CODE (expected 401)."
fi

echo ""
info "Deployment complete! See DEPLOY.md for verification steps."
