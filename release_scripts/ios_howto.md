# 📦 iOS Release Upload Guide (App Store Connect)

This guide explains how to configure and use the `release_scripts/` automation to build and upload your Flutter iOS app to App Store Connect.

---

## 🧷 Prerequisites

- macOS with Xcode installed
- Transporter or `altool` available (comes with Xcode)
- Flutter installed and set up with FVM
- Your project must be correctly signed with provisioning profiles

---

## 🔐 Step 1: Create an API Key for App Store Connect

1. Go to [https://appstoreconnect.apple.com/access/integrations/api](https://appstoreconnect.apple.com/access/integrations/api)
2. Click the ➕ button to create a new API key
3. Name it (e.g., `Release Upload Key`)
4. Set **Access**: App Manager
5. Download the `.p8` file (e.g. `AuthKey_ABCD123456.p8`)

---

## 🗝 Step 2: Setup Local Authentication Script

1. Open `.set_appstore_env.sh` in the root or `release_scripts/` folder
2. Fill in your credentials:

```bash
export APP_STORE_CONNECT_KEY_ID="ABCD123456"
export APP_STORE_CONNECT_ISSUER_ID="01234567-89ab-cdef-0123-456789abcdef"
```

✅ Do **NOT** commit this file with real credentials.

---

## 📁 Step 3: Place the Private Key

Place your downloaded `.p8` file (e.g. `AuthKey_ABCD123456.p8`) **inside the `release_scripts/` folder**.  
The script will automatically copy it to the expected location:
```
~/.appstoreconnect/private_keys/
```

---

## 🚀 Step 4: Build and Upload IPA

```bash
source release_scripts/.set_appstore_env.sh
./release_scripts/build_and_upload.sh
```

This will:

1. Build the IPA with FVM
2. Extract app name from `Info.plist`
3. Locate or select the `.ipa` file
4. Upload it using `xcrun altool` and the App Store Connect API key

---

## 📌 Troubleshooting

### "Failed to load AuthKey file"

Make sure:

- The `.p8` file is placed correctly next to the script
- The key ID and issuer ID match the `.p8` file
- The file has not been renamed

---

## ✅ Example Folder Structure

```
my_project/
├── ios/
│   └── Runner/
│       └── Info.plist
├── release_scripts/
│   ├── build_and_upload.sh
│   ├── .set_appstore_env.sh
│   ├── ios_howto.md
│   └── AuthKey_ABCD123456.p8
└── pubspec.yaml
```

---
