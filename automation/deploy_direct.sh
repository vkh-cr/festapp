#!/bin/bash
# ==============================================================================
# DIRECT CLOUDFLARE PAGES DEPLOY (no git push)
#
# Builds the site locally (automation/cloudflare_build.sh: Flutter web +
# Web Client + _worker.js) and uploads it straight to the Cloudflare Pages
# project via Wrangler. This is the canonical production web deployment path.
#
# Requirements:
#   - CLOUDFLARE_API_TOKEN in the environment, OR pass --env-file <path> to a
#     dotenv file that defines it (e.g. ~/source/roman_seznamka/.env).
#   - CLOUDFLARE_ACCOUNT_ID (defaults to the festapp account below).
#   - Run from a checkout/worktree of the branch you want to deploy. The Pages
#     project name is read from automation/project.conf (CLOUDFLARE_PROJECT_NAME).
#
# The deploy is tagged with --branch = the current git branch so that, when it
# equals the project's production branch (prod/<instance>), Cloudflare promotes
# it to the production custom domain.
# ==============================================================================
set -euo pipefail

ACCOUNT_ID_DEFAULT="84b32318ac235bf6738bdf1c8caa0795"
ENV_FILE=""
SKIP_BUILD=0

while [ $# -gt 0 ]; do
  case "$1" in
    --env-file) ENV_FILE="$2"; shift 2 ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    *) echo "Unknown arg: $1" >&2; exit 2 ;;
  esac
done

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

# Load the CF token from a dotenv file if requested.
if [ -n "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  CLOUDFLARE_API_TOKEN="$(grep -E '^CLOUDFLARE_API_TOKEN=' "$ENV_FILE" | head -1 | sed 's/^CLOUDFLARE_API_TOKEN=//' | tr -d '"'"'"'\r ')"
  export CLOUDFLARE_API_TOKEN
fi

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "ERROR: CLOUDFLARE_API_TOKEN not set (use --env-file or export it)." >&2
  exit 1
fi
export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-$ACCOUNT_ID_DEFAULT}"

# Read the target Pages project from project.conf.
# shellcheck disable=SC1091
PROJECT_NAME="$(grep -E '^CLOUDFLARE_PROJECT_NAME=' automation/project.conf | head -1 | sed 's/^CLOUDFLARE_PROJECT_NAME=//' | tr -d '"'"'"'\r ')"
if [ -z "$PROJECT_NAME" ]; then
  echo "ERROR: CLOUDFLARE_PROJECT_NAME missing in automation/project.conf." >&2
  exit 1
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo prod/${PROJECT_NAME})"
if [ "$BRANCH" = "HEAD" ]; then
  # Detached (e.g. deploying from a worktree) — fall back to the prod branch name.
  BRANCH="prod/${PROJECT_NAME}"
fi

echo "Project: ${PROJECT_NAME} | Branch tag: ${BRANCH} | Account: ${CLOUDFLARE_ACCOUNT_ID}"

if [ "$SKIP_BUILD" -eq 0 ]; then
  echo "Building (automation/cloudflare_build.sh)..."
  bash automation/cloudflare_build.sh
else
  echo "Skipping build (--skip-build); using existing build/web."
fi

if [ ! -f build/web/_worker.js ]; then
  echo "ERROR: build/web/_worker.js missing — build did not complete." >&2
  exit 1
fi

echo "Deploying build/web to Cloudflare Pages project '${PROJECT_NAME}'..."
npx --yes wrangler@latest pages deploy build/web \
  --project-name "${PROJECT_NAME}" \
  --branch "${BRANCH}" \
  --commit-dirty=true

DOMAIN="$(grep -E '^DOMAIN=' automation/project.conf | head -1 | sed 's/^DOMAIN=//' | tr -d '"'"'"'\r ')"
VERSION="$(grep -E '^VERSION=' automation/project.conf | head -1 | sed 's/^VERSION=//' | tr -d '"'"'"'\r ')"
echo "Verifying coherent production release at https://${DOMAIN}..."
node automation/verify_web_deployment.mjs "https://${DOMAIN}" "${VERSION}"
