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

    ipa_path = File.expand_path("../../build/ios/ipa/#{ENV["IPA_FILENAME"]}", __dir__)

    upload_to_app_store(
      api_key: api_key,
      ipa: ipa_path,
      skip_metadata: true,
      skip_screenshots: true,
      run_precheck_before_submit: false,
      submit_for_review: false,
      automatic_release: false,
      force: true
    )

    require 'spaceship'
    token = Spaceship::ConnectAPI::Token.create(
      key_id: ENV["APP_STORE_CONNECT_KEY_ID"],
      issuer_id: ENV["APP_STORE_CONNECT_ISSUER_ID"],
      key: File.read(File.expand_path("~/.appstoreconnect/private_keys/AuthKey_#{ENV["APP_STORE_CONNECT_KEY_ID"]}.p8"))
    )
    Spaceship::ConnectAPI.token = token

    app = Spaceship::ConnectAPI::App.find(ENV['FASTLANE_APP_IDENTIFIER'])

    uploaded_version = ENV["IPA_VERSION"]
    uploaded_build_number = ENV["IPA_BUILD_NUMBER"]

    UI.message("⏳ Waiting for App Store Connect to process build #{uploaded_version} (#{uploaded_build_number})...")

    build = nil
    max_attempts = 40
    attempt = 0

    until build
      attempt += 1

      all_builds = app.get_builds(
        includes: "preReleaseVersion"
      ).sort_by(&:uploaded_date).reverse

      UI.message("🔍 Attempt #{attempt}: Found #{all_builds.size} builds total")
      all_builds.each do |b|
        app_version = b.pre_release_version&.version || "N/A"
        UI.message("   ↳ Build #{app_version} (#{b.version}) → #{b.processing_state}")
      end

      matching_builds = all_builds.select do |b|
        b.pre_release_version&.version == uploaded_version && b.version == uploaded_build_number
      end

      if matching_builds.empty?
        UI.important("⚠️ No build matches version=#{uploaded_version}, build=#{uploaded_build_number} yet")
      else
        build = matching_builds.find { |b| b.processing_state == "VALID" }

        if build
          UI.success("✅ Build #{build.pre_release_version.version} (#{build.version}) is processed and valid!")
          break
        else
          UI.message("⌛ Matching build found, but not VALID yet: #{matching_builds.first.processing_state}")
        end
      end

      if attempt >= max_attempts
        UI.user_error!("❌ Timeout: Build #{uploaded_version} (#{uploaded_build_number}) did not become VALID.")
      end

      sleep(15)
    end

    # Proceed with setting release notes and submitting for review
    app_id = app.id
    app = Spaceship::ConnectAPI::App.get(app_id: app_id)
    version = app.get_edit_app_store_version(includes: 'appStoreVersionLocalizations')

    version.get_app_store_version_localizations(limit: 100).each do |localization|
      UI.message("📝 Updating release notes for #{localization.locale}")
      localization.update(attributes: {
        whatsNew: ENV["RELEASE_NOTES"] || "No notes provided"
      })
    end

    deliver(
      api_key: api_key,
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
