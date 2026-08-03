#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
if ! command -v fastlane >/dev/null 2>&1; then
  echo "Fastlane is required. Install it with the repository-approved package manager."
  exit 1
fi
if [ ! -f "$SCRIPT_DIR/fastlane/Fastfile" ] || [ ! -f "$SCRIPT_DIR/app_store_cutover.json" ]; then
  echo "Canonical Fastfile or cutover manifest is missing."
  exit 1
fi
echo "Canonical gated Fastlane configuration is present."
