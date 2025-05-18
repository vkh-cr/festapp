# 📦 iOS Release Upload Guide (App Store Connect)

This guide explains how to configure and use the `release_scripts/` automation to build, upload, and submit your Flutter iOS app to App Store Connect.

---

## 🧷 Prerequisites

- macOS with Xcode installed
- Flutter installed and set up with FVM
- Fastlane installed (or let the script install it for you)
- Your project must be correctly signed with provisioning profiles

---

## 🔐 Step 1: Create an API Key for App Store Connect

1. Go to [https://appstoreconnect.apple.com/access/integrations/api](https://appstoreconnect.apple.com/access/integrations/api)
2. Click the ➕ button to create a new API key
3. Name it (e.g., `Release Upload Key`)
4. Set **Access**: **App Manager** or **Admin** (❗ required for submitting builds)
5. Download the `.p8` file (e.g. `AuthKey_ABCD123456.p8`)

---

## 🗝 Step 2: Set Up Local Authentication Script

1. Open `.set_appstore_env.sh` in the `release_scripts/` folder
2. Fill in your credentials:

```bash
export APP_STORE_CONNECT_KEY_ID="ABCD123456"
export APP_STORE_CONNECT_ISSUER_ID="01234567-89ab-cdef-0123-456789abcdef"
```

✅ Do **NOT** commit this file with real credentials.

---

## 📁 Step 3: Place the Private Key

Place your downloaded `.p8` file (e.g. `AuthKey_ABCD123456.p8`) **inside the `release_scripts/` folder**.  
The script will automatically copy it to the required location:
```
~/.appstoreconnect/private_keys/
```

---

## ⚙️ Step 4: Initialize Fastlane (only once)

Run the setup script to install Fastlane (if needed) and create `Fastfile`:

```bash
./release_scripts/fastlane_setup.sh
```

---

## 🚀 Step 5: Build, Upload & Submit

```bash
source release_scripts/.set_appstore_env.sh
./release_scripts/build_and_upload.sh
```

You’ll be prompted to enter **release notes**. The script will:

1. Build the IPA with FVM
2. Extract the app name from `Info.plist`
3. Locate or select the `.ipa` file
4. Upload the build
5. Submit it for review via Fastlane

---

## 📝 How to Customize the Release Message

You’ll be prompted like this:

```
📝 Enter release notes (press ENTER to finish):
```

Whatever you type will be used as the "What's New" description for that version.

---

## 📌 Troubleshooting

### "Private key not found"

Make sure:

- The `.p8` file is placed correctly in `release_scripts/`
- The filename follows `AuthKey_<KEY_ID>.p8`
- The key ID in your env file matches the actual file name

---

## ✅ Example Folder Structure

```
my_project/
├── ios/
│   └── Runner/
│       └── Info.plist
├── release_scripts/
│   ├── build_and_upload.sh
│   ├── fastlane_setup.sh
│   ├── .set_appstore_env.sh
│   ├── ios_howto.md
│   ├── AuthKey_ABCD123456.p8
│   └── fastlane/
│       └── Fastfile
└── pubspec.yaml
```

---
