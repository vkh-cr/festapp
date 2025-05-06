#!/bin/bash

set -e

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
FASTLANE_DIR="$SCRIPT_DIR/fastlane"
FASTFILE="$FASTLANE_DIR/Fastfile"
APPFILE="$FASTLANE_DIR/Appfile"

echo "🚀 Setting up Fastlane..."

# Step 1: Install Fastlane if missing
if ! command -v fastlane &> /dev/null; then
  echo "📦 Fastlane not found. Installing via Homebrew..."
  brew install fastlane
else
  echo "✅ Fastlane is already installed."
fi

# Step 2: Create fastlane folder
mkdir -p "$FASTLANE_DIR"

# Step 3: Create Fastfile only if missing
if [ ! -f "$FASTFILE" ]; then
  echo "📝 Creating Fastfile..."
  cat > "$FASTFILE" <<EOF
default_platform(:ios)

platform :ios do
  lane :publish_ipa do
    api_key = app_store_connect_api_key(
      key_id: ENV["APP_STORE_CONNECT_KEY_ID"],
      issuer_id: ENV["APP_STORE_CONNECT_ISSUER_ID"],
      key_filepath: File.expand_path("~/.appstoreconnect/private_keys/AuthKey_\#{ENV["APP_STORE_CONNECT_KEY_ID"]}.p8")
    )

    upload_to_app_store(
      api_key: api_key,
      ipa: "build/ios/ipa/\#{ENV["IPA_FILENAME"]}",
      skip_metadata: true,
      skip_screenshots: true,
      release_notes: ENV["RELEASE_NOTES"] || "No notes provided"
    )

    submit_for_review(
      api_key: api_key,
      automatic_release: true
    )
  end
end
EOF
  echo "✅ Fastfile created at $FASTFILE"
else
  echo "✅ Fastfile already exists at $FASTFILE — leaving it unchanged."
fi

# Step 4: Create optional Appfile
if [ ! -f "$APPFILE" ]; then
  echo "# Optional: Appfile (not required in this setup)" > "$APPFILE"
  echo "📝 Created placeholder Appfile."
fi

echo "✅ Fastlane setup is complete in: $FASTLANE_DIR"
echo "👉 You can now run: ./build_and_upload.sh"
