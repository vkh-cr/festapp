# Festapp Setup Guide

> **This is an early file _how to_.** In need of support, contact [michael.bujnovsky@festapp.net](mailto:michael.bujnovsky@festapp.net), so we can fix possible errors.

---

## Backend Setup

##### Create a New Supabase Project
- Visit [supabase.com](https://supabase.com) and start a new project.

##### Supabase / Database Setup
- Start a new organization/project.
- Use the installation tool on [live.festapp.net/#/instanceInstall](https://live.festapp.net/#/instanceInstall) (or your localhost).
- Fill in the correct reference links and connection string with the Database password.
- Copy generated supabase functions from installation tool and and deploy them to Supabase.
    - For that you need:
        - Docker
        - Supabase CLI
- In installation tool run:
    - Tables
    - Functions
    - Policies
    - Seed basic values


##### Notifications
- Visit [OneSignal Dashboard](https://dashboard.onesignal.com/)
- Get FCM key for Android (can be the same as others).
- Get App ID and set up in `appConfig`.
- Follow the [Flutter SDK Setup](https://documentation.onesignal.com/docs/flutter-sdk-setup).
- Upload Apple P8 file.
- Update Group ID.
- Add to the same app group with OneSignal.

##### Email Setup (SMTP)
- Edit and seed the password reset template.
- Seed `.env` variables for smtp:
```
    supabase secrets set --env-file ./supabase/.env --project-ref kjdpmixlnhntmxjedpxh
```
---

## Frontend Setup

##### General Configuration
- Rename **appName** in `AppConfig`.
- Set up colors in `ThemeConfig.dart`.
- Configure fonts.
- Remove unused localizations:
    - In `appConfig`
    - In iOS `plist`

##### Logos & Icons
- Use SVG inside the app.
- Fix incompatible SVGs using [SVGOMG](https://svgomg.net/).

##### Web Configuration
- Use [RealFaviconGenerator](https://realfavicongenerator.net/) for web favicons.
- Add SVG icon to web loading.
- Rename titles in `index.html`.
- Rename `site.webmanifest`.

##### Android Configuration
- Add PNG icon to `assets`.
- Run:
```
fvm flutter pub run flutter_launcher_icon
```
- Set label (short name, max 30 chars).
- Set App ID in 3 places.

##### iOS Configuration
- Change `CFBundleName`, `CFBundleDisplayName`.
- Replace launch image inside Xcode.
- Set bundle identifier inside Xcode.

---

## Publishing

##### Web Deployment
- Set up Netlify from branch.
- Example Netlify setup for domain `app.festapp.net`:
  Type: A  
  Name: app  
  Value: 75.2.60.5

##### Android Deployment
- Create a new app.
- Upload the App Bundle.
- Complete declarations.
- Example privacy policy links:
    - [Privacy Policy](https://raw.githack.com/vkh-cr/festapp/prod/festapp/PrivacyPolicy.html)
    - [Request Privacy Policy](https://raw.githack.com/vkh-cr/festapp/prod/festapp/PrivacyPolicy.html#request)
- Import data types as CSV from Festapp standard csv file or fill them.
- Upload assets:
    - Icon: 512×512 px
    - Feature Graphic: 1,024×500 px
- Fill in:
    - Short description
    - Long description
    - Category: Event/Travel
    - Screenshots:
        - 2 phone screenshots
        - 2 tablet screenshots
- Add countries.
- Release the app.

##### iOS Deployment
- Create a new app on App Store Connect.
- Upload 3 types of screenshots.
- Complete privacy settings.

##### Screenshots
- Use [App Mockup Studio](https://studio.app-mockup.com/).
- Devices:
    - iPhone 11 Pro Max
    - iPad Pro 12.9 (6th Gen)
- Recommended Resolutions:
    - 1320×2868 px, 2868×1320 px
    - 1290×2796 px, 2796×1290 px
    - 1242×2688 px, 2688×1242 px
    - 1284×2778 px, 2778×1284 px
~~~~markdown
