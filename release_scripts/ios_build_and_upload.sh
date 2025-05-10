#!/bin/bash

# Exit if any command fails
set -e

# Step 0: Load environment variables
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
ENV_SCRIPT="$SCRIPT_DIR/.set_appstore_env.sh"

if [ -f "$ENV_SCRIPT" ]; then
  echo "🔄 Loading App Store Connect environment variables..."
  source "$ENV_SCRIPT"
else
  echo "⚠️  Warning: Environment script not found: $ENV_SCRIPT"
  exit 1
fi

# Step 1: Prompt for release notes (before build)
echo "📝 What’s new in this version? (release notes):"
read -r RELEASE_NOTES
export RELEASE_NOTES

# Step 2: Build IPA using FVM
echo "📦 Building IPA with FVM..."
cd .. # Go to project root

fvm flutter build ipa --release

# Step 3: Determine IPA name and app identifier from Info.plist
INFO_PLIST="ios/Runner/Info.plist"
if [ ! -f "$INFO_PLIST" ]; then
  echo "❌ Info.plist not found at $INFO_PLIST"
  exit 1
fi

# Get bundle name for IPA filename
APP_NAME=$(plutil -extract CFBundleName xml1 -o - "$INFO_PLIST" | grep -oE '<string>.*</string>' | sed -E 's/<\/?string>//g')
APP_NAME=${APP_NAME:-Runner}

# Get bundle identifier for FASTLANE
APP_IDENTIFIER=$(plutil -extract CFBundleIdentifier xml1 -o - "$INFO_PLIST" | grep -oE '<string>.*</string>' | sed -E 's/<\/?string>//g')
export FASTLANE_APP_IDENTIFIER="$APP_IDENTIFIER"
echo "📱 App Identifier: $FASTLANE_APP_IDENTIFIER"

# Construct expected IPA path
IPA_PATH="build/ios/ipa/${APP_NAME}.ipa"

# If IPA not found, let user select one
if [ ! -f "$IPA_PATH" ]; then
  echo "❌ IPA not found at expected path: $IPA_PATH"
  echo "🔍 Searching for IPA files..."
  IPA_FILES=(build/ios/ipa/*.ipa)

  if [ ${#IPA_FILES[@]} -eq 0 ]; then
    echo "❌ No IPA files found."
    exit 1
  fi

  echo "✅ Found IPA files:"
  select IPA_PATH in "${IPA_FILES[@]}"; do
    if [ -n "$IPA_PATH" ]; then
      echo "📁 Selected: $IPA_PATH"
      break
    fi
  done
else
  echo "✅ Using IPA: $IPA_PATH"
fi

# Step 4: Copy API key to expected location
TARGET_KEY_DIR="$HOME/.appstoreconnect/private_keys"
PRIVATE_KEY_NAME="AuthKey_${APP_STORE_CONNECT_KEY_ID}.p8"
SOURCE_KEY_PATH="$SCRIPT_DIR/$PRIVATE_KEY_NAME"
TARGET_KEY_PATH="$TARGET_KEY_DIR/$PRIVATE_KEY_NAME"

mkdir -p "$TARGET_KEY_DIR"

if [ ! -f "$SOURCE_KEY_PATH" ]; then
  echo "❌ Private key missing: $SOURCE_KEY_PATH"
  exit 1
fi

if [ ! -f "$TARGET_KEY_PATH" ]; then
  echo "📁 Copying private key to $TARGET_KEY_PATH..."
  cp "$SOURCE_KEY_PATH" "$TARGET_KEY_PATH"
else
  echo "✅ Private key already exists."
fi

# Step 5: Prepare and run Fastlane
export IPA_FILENAME="$(basename "$IPA_PATH")"
FASTLANE_DIR="$SCRIPT_DIR/fastlane"

if command -v fastlane &> /dev/null; then
  if [ ! -f "$FASTLANE_DIR/Fastfile" ]; then
    echo "❌ Fastfile not found at: $FASTLANE_DIR/Fastfile"
    exit 1
  fi

  echo "🚀 Running Fastlane to publish IPA..."
  (
    cd "$FASTLANE_DIR"
    FASTLANE_SKIP_UPDATE_CHECK=1 \
    FASTLANE_SKIP_INIT=true \
    fastlane publish_ipa
  )
else
  echo "❌ Fastlane not installed. Please run ./fastlane_setup.sh"
  exit 1
fi



