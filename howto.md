# Festapp Setup Guide

> **This is an early file _how to_.** In need of support, contact [michael.bujnovsky@festapp.net](mailto:michael.bujnovsky@festapp.net), so we can fix possible errors.

---

## Backend Setup

##### Create a New Supabase Project
- Visit [supabase.com](https://supabase.com) and start a new project.

##### Supabase / Database Setup
1. Launch the installation tool on [live.festapp.net/#/instanceInstall](https://live.festapp.net/#/instanceInstall) (or build your own and run on localhost with Flutter Web).
2. Fill in the correct reference links and connection string with your Database password (It can be obtained via Supabase - Project Settings - Database - Database password).
3. Copy composed supabase functions from installation tool and deploy them to Supabase via CLI. For deployment is needed:
    - Docker
    - Supabase CLI
4. Run each section - this will get SQL scripts from the GitHub and seed them to your Database. Follow the order:

       1. Tables  
       2. Functions  
       3. Policies  
       4. Seed (you can create new admin account here)

##### Notifications
- Visit [OneSignal Dashboard](https://dashboard.onesignal.com/)
- For all platforms follow the [OneSignal Flutter SDK Setup](https://documentation.onesignal.com/docs/flutter-sdk-setup).
- Android can be setup once for each app.
- Apple/iOS needs additional setup and it must be setup for each app individually:
    - Get App ID and set up in `appConfig`.
    - Upload Apple P8 file.
    - Update Group ID.
    - Add to the same app group with OneSignal.

##### Email Setup (SMTP)
- Get a SMTP server (e.g. AWS) with SMTP variables (see below).
- Edit and seed the password reset template.

##### Environment Variables
- Fill `.env` file as following:
```
SMTP_HOSTNAME=
SMTP_USER_NAME=
SMTP_USER_PASSWORD=
# default sender email address
DEFAULT_EMAIL=
# url in format https://kjdpmixlnhntmxjedpxh.supabase.co
PROJECT_URL=
```
- Set `.env` to your project:
```
supabase secrets set --env-file ./supabase/.env --project-ref yoursupabaseid
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
- If you make changes to Pages, run:
```
fvm dart run build_runner build
```

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
fvm dart run flutter_launcher_icons
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
    - Feature Graphic: 1024×500 px
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
- Upload 3 screenshots for iPhone and iPad.
- Complete privacy settings.

##### Screenshots
- Use [App Mockup Studio](https://studio.app-mockup.com/).
- Devices (Simulator and Mockup Studio):
    - iPhone 16 Pro Max
    - iPad Pro 12.9
