#!/bin/bash
set -e

echo "Starting Unified Build Process..."

# 1. Build Flutter App
echo "Building Flutter App..."
# Ensure flutter is in path (Netlify specific)
export PATH="$PATH:/opt/buildhome/flutter/bin"

# Get Flutter (if not present in custom image, but usually handled by netlify.toml command)
# However, for this script to be self-contained in the 'command', we assume environment is ready 
# OR we do the install here if we replace the entire command.
# The user's original command did: curl flutter | tar ...
# We should probably replicate that setup if we are replacing the command entirely.

if ! command -v flutter &> /dev/null; then
    echo "Flutter not found. Installing..."
    curl -L https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.38.5-stable.tar.xz | tar -xJf - -C /opt/buildhome
    export PATH="/opt/buildhome/flutter/bin:$PATH"
fi

flutter precache
flutter build web --release

# 2. Prepare Flutter Build for Merge
echo "Preparing Flutter build..."
# Rename index.html to flutter.html so it doesn't conflict with Web Client
mv build/web/index.html build/web/flutter.html

# 3. Build Web Client
echo "Building Web Client..."
cd web_client
npm install
npm run build

# 4. Merge Builds
echo "Merging Web Client into Flutter build..."
# Copy all Web Client dist files to build/web
# This will place index.html (Web Client) at root, and _redirects
cp -r dist/* ../build/web/

cd ..

echo "Build Complete. Output in build/web"
ls -la build/web
