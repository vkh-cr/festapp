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
  cat > "$FASTFILE" <<'EOF'
default_platform(:ios)

platform :ios do
  lane :publish_ipa do
    api_key = app_store_connect_api_key(
      key_id: ENV["APP_STORE_CONNECT_KEY_ID"],
      issuer_id: ENV["APP_STORE_CONNECT_ISSUER_ID"],
      key_filepath: File.expand_path("~/.appstoreconnect/private_keys/AuthKey_#{ENV["APP_STORE_CONNECT_KEY_ID"]}.p8")
    )

    app_version = get_version_number(
      xcodeproj: "../ios/Runner.xcodeproj",
      target: "Runner"
    )

    upload_to_app_store(
      api_key: api_key,
      ipa: File.expand_path("../../build/ios/ipa/#{ENV["IPA_FILENAME"]}", __dir__),
      skip_metadata: true,
      skip_screenshots: true,
      run_precheck_before_submit: false,
      submit_for_review: false,
      automatic_release: false,
      force: true
    )

    require 'spaceship'
    # ✅ This is the hash version needed by `deliver`
    api_key_hash = app_store_connect_api_key(
      key_id: ENV["APP_STORE_CONNECT_KEY_ID"],
      issuer_id: ENV["APP_STORE_CONNECT_ISSUER_ID"],
      key_filepath: File.expand_path("~/.appstoreconnect/private_keys/AuthKey_#{ENV["APP_STORE_CONNECT_KEY_ID"]}.p8")
    )

    # ✅ This is the JWT token object needed by `Spaceship`
    require 'spaceship'
    token = Spaceship::ConnectAPI::Token.create(
      key_id: ENV["APP_STORE_CONNECT_KEY_ID"],
      issuer_id: ENV["APP_STORE_CONNECT_ISSUER_ID"],
      key: File.read(File.expand_path("~/.appstoreconnect/private_keys/AuthKey_#{ENV["APP_STORE_CONNECT_KEY_ID"]}.p8"))
    )
    Spaceship::ConnectAPI.token = token

    app_id = Spaceship::ConnectAPI::App.find(ENV['FASTLANE_APP_IDENTIFIER']).id
    app = Spaceship::ConnectAPI::App.get(app_id: app_id)
    version = app.get_edit_app_store_version(includes: 'appStoreVersionLocalizations')

    version.get_app_store_version_localizations(limit: 100).each do |localization|
      UI.message("Updating release notes for #{localization.locale}")
      localization.update(attributes: {
        whatsNew: ENV["RELEASE_NOTES"] || "No notes provided"
      })
    end

    deliver(
      api_key: api_key_hash,
      app_identifier: ENV['FASTLANE_APP_IDENTIFIER'],
      submit_for_review: true,
      skip_binary_upload: true,
      skip_metadata: true,
      skip_screenshots: true,
      automatic_release: true,
      force: true,
      precheck_include_in_app_purchases: false,
      run_precheck_before_submit: false
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
