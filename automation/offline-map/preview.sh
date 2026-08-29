#!/usr/bin/env bash

set -euo pipefail

if [[ $# -ne 3 ]]; then
  echo "Usage: $0 OCCASION VERSION MBTILES_FILENAME" >&2
  exit 2
fi
if ! command -v versatiles >/dev/null 2>&1; then
  echo "Required tool is missing: versatiles" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND="$SCRIPT_DIR/out/frontend.br.tar.gz"
BUNDLE_DIR="$SCRIPT_DIR/out/$1/$2"
MBTILES="$BUNDLE_DIR/$3"
NAMED_MBTILES="$SCRIPT_DIR/out/versatiles-shortbread.mbtiles"
PREVIEW_DIR="$SCRIPT_DIR/out/preview"

if [[ ! -f "$FRONTEND" || ! -f "$MBTILES" ||
      ! -f "$BUNDLE_DIR/style.json" || ! -d "$BUNDLE_DIR/sprites" ]]; then
  echo "Run build.sh before starting the preview" >&2
  exit 1
fi

mkdir -p "$PREVIEW_DIR/sprites"
cp "$SCRIPT_DIR/preview/index.html" "$PREVIEW_DIR/index.html"
cp "$BUNDLE_DIR/sprites/"* "$PREVIEW_DIR/sprites/"
jq '
  .sources["versatiles-shortbread"].tiles = ["http://localhost:8080/tiles/versatiles-shortbread/{z}/{x}/{y}"] |
  .sprite = "http://localhost:8080/sprites/sprites"
' "$BUNDLE_DIR/style.json" > "$PREVIEW_DIR/preview-style.json"

ln -sfn "$MBTILES" "$NAMED_MBTILES"
exec versatiles serve -i 127.0.0.1 -s "$PREVIEW_DIR" -s "$FRONTEND" "$NAMED_MBTILES"
