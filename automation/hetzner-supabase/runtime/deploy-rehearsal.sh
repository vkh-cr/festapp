#!/usr/bin/env bash
set -euo pipefail

readonly REVISION=241bb11c0627f2981746d37033f57dbfa81d29b0
readonly ROOT=/opt/festapp-supabase
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

[[ "$(id -u)" == "0" ]] || { echo "deploy-rehearsal must run as root" >&2; exit 1; }
[[ ! -e "$ROOT" ]] || { echo "$ROOT already exists; refusing to overwrite" >&2; exit 1; }

git clone --filter=blob:none --no-checkout https://github.com/supabase/supabase.git "$ROOT"
git -C "$ROOT" fetch --depth 1 origin "$REVISION"
git -C "$ROOT" checkout --detach "$REVISION"

cd "$ROOT/docker"
cp .env.example .env
chmod 0600 .env
sh utils/generate-keys.sh --update-env >/dev/null
install -o root -g root -m 0644 "$SCRIPT_DIR/docker-compose.festapp.yml" docker-compose.festapp.yml
install -o root -g root -m 0700 "$SCRIPT_DIR/configure-rehearsal-env.py" configure-rehearsal-env.py
./configure-rehearsal-env.py

docker compose config -q
docker compose pull
docker compose up -d
docker compose ps
