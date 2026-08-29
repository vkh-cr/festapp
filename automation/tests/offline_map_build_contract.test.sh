#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
BUILD="$ROOT/automation/offline-map/build.sh"
PREVIEW="$ROOT/automation/offline-map/preview.sh"

help="$($BUILD --help)"
grep -Fq -- '[--occasion-link LINK]' <<<"$help"
grep -Fq 'MAP_NAME="map-z${MIN_ZOOM}-${MAX_ZOOM}"' "$BUILD"
grep -Fq '.sprite = $base_url + "sprites/sprites"' "$BUILD"
grep -Fq '.glyphs = $base_url + "glyphs/{fontstack}/{range}.pbf"' "$BUILD"
grep -Fq '/rest/v1/occasions?select=id&link=eq.$OCCASION_LINK' "$BUILD"

if grep -Fq '/rpc/get_occasion_by_link' "$BUILD"; then
  echo "offline map build must not depend on a tenant-specific RPC migration" >&2
  exit 1
fi

if grep -Eq 'MBTILES_NAME="ostrava-|PMTILES_NAME="ostrava-' "$BUILD"; then
  echo "offline map artifact names must be tenant-neutral" >&2
  exit 1
fi

grep -Fq 'BUNDLE_DIR="$SCRIPT_DIR/out/$1/$2"' "$PREVIEW"
grep -Fq '"$BUNDLE_DIR/style.json"' "$PREVIEW"
grep -Fq '"$BUNDLE_DIR/sprites/"*' "$PREVIEW"
if grep -Fq '"$SCRIPT_DIR/style/' "$PREVIEW"; then
  echo "offline map preview must use the selected tenant bundle" >&2
  exit 1
fi

echo "Offline map build contract passed."
