#!/bin/bash

# Exit if any command fails
set -e

# Step 0: Load environment variables from helper script (must be in same dir as this script)
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
ENV_SCRIPT="$SCRIPT_DIR/.set_appstore_env.sh"

if [ -f "$ENV_SCRIPT" ]; then
  echo "🔄 Loading App Store Connect environment variables..."
  source "$ENV_SCRIPT"
else
  echo "⚠️  Warning: Environment script not found: $ENV_SCRIPT"
fi

# Step 1: Build the IPA using FVM
echo "📦 Building IPA with FVM..."
cd .. # go to project root from release_scripts/
#fvm flutter build ipa --release

# Step 2: Determine IPA name from Info.plist
INFO_PLIST="ios/Runner/Info.plist"
if [ ! -f "$INFO_PLIST" ]; then
  echo "❌ Info.plist not found at $INFO_PLIST"
  exit 1
fi

# Extract CFBundleName directly from plist
APP_NAME=$(plutil -extract CFBundleName xml1 -o - "$INFO_PLIST" | grep -oE '<string>.*</string>' | sed -E 's/<\/?string>//g')
APP_NAME=${APP_NAME:-Runner} # fallback to Runner if empty

# Construct expected IPA path
IPA_PATH="build/ios/ipa/${APP_NAME}.ipa"

if [ ! -f "$IPA_PATH" ]; then
  echo "❌ IPA file not found at expected location: $IPA_PATH"
  echo "🔍 Searching for other IPA files..."
  IPA_FILES=(build/ios/ipa/*.ipa)

  if [ ${#IPA_FILES[@]} -eq 0 ]; then
    echo "❌ No IPA files found."
    exit 1
  fi

  echo "✅ Found ${#IPA_FILES[@]} IPA file(s):"
  select IPA_PATH in "${IPA_FILES[@]}"; do
    if [ -n "$IPA_PATH" ]; then
      echo "📁 Selected IPA: $IPA_PATH"
      break
    else
      echo "❌ Invalid selection. Try again."
    fi
  done
else
  echo "✅ Using IPA: $IPA_PATH"
fi

# Step 3: Automatically upload to App Store Connect using API key
# Requires environment variables: APP_STORE_CONNECT_KEY_ID and APP_STORE_CONNECT_ISSUER_ID
if [[ -z "$APP_STORE_CONNECT_KEY_ID" || -z "$APP_STORE_CONNECT_ISSUER_ID" ]]; then
  echo "❌ Missing APP_STORE_CONNECT_KEY_ID or APP_STORE_CONNECT_ISSUER_ID environment variable."
  exit 1
fi

# Copy private key to expected location if not already present
TARGET_KEY_DIR="$HOME/.appstoreconnect/private_keys"
mkdir -p "$TARGET_KEY_DIR"
PRIVATE_KEY_NAME="AuthKey_${APP_STORE_CONNECT_KEY_ID}.p8"
SOURCE_KEY_PATH="$SCRIPT_DIR/$PRIVATE_KEY_NAME"
TARGET_KEY_PATH="$TARGET_KEY_DIR/$PRIVATE_KEY_NAME"

if [ ! -f "$SOURCE_KEY_PATH" ]; then
  echo "❌ Private key not found at expected source location: $SOURCE_KEY_PATH"
  exit 1
fi

if [ ! -f "$TARGET_KEY_PATH" ]; then
  echo "📁 Copying private key to App Store Connect keychain location..."
  cp "$SOURCE_KEY_PATH" "$TARGET_KEY_PATH"
else
  echo "✅ Private key already exists at expected location: $TARGET_KEY_PATH"
fi

# Upload using altool (which looks for key only in system locations)
echo "🚀 Uploading IPA to App Store Connect using API key..."
xcrun altool --upload-app \
  --type ios \
  --file "$IPA_PATH" \
  --apiKey "$APP_STORE_CONNECT_KEY_ID" \
  --apiIssuer "$APP_STORE_CONNECT_ISSUER_ID" \
  --verbose
