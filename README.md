# Festapp

Festapp is a cross-platform mobile and web app for festivals, conferences, and events. It provides organizers and attendees with powerful tools like schedules, maps, notifications, tickets, forms, and much more.

- Try now on [live.festapp.net](https://live.festapp.net) or install to your phone [here](https://live.festapp.net/#/install).
- Visit us on website: [festapp.net](https://festapp.net)</br></br>
![Alt text](repo-data/festapp-showcase.png?raw=true "Showcase")

---
## Features

- Available on Android, iOS, and Web.
- Event is available for offline use (Android, iOS).
- Dark and light modes are available.

---
- Schedule
  - Timeline – Schedule overview by time and day.
  - Event detail – Includes: Time, Place (with link), Content, Subevents, Sign In/Sign Out button.
  - Timetable – View event entries on the axes of Time and Place.
  - My schedule – Attendee can add event entries to their own list.

<p align="center">
  <img src="repo-data/screenshots/schedule2.png?raw=true" alt="schedule2" title="schedule2" width="200" />
  <img src="repo-data/screenshots/schedule1.png?raw=true" alt="schedule1" title="schedule1" width="200" />
  <img src="repo-data/screenshots/schedule5.png?raw=true" alt="schedule5" title="schedule5" width="200" />
  <img src="repo-data/screenshots/schedule3.png?raw=true" alt="schedule3" title="schedule3" width="200" />
</p>

- Map
  - Map with current user location, places, and paths with custom icons and descriptions. It is also possible to set up an offline map (Android, iOS).

<p align="center">
  <img src="repo-data/screenshots/map1.png?raw=true" alt="map1" title="map1" width="220" />
  <img src="repo-data/screenshots/map2.png?raw=true" alt="map2" title="map2" width="220" />
  <img src="repo-data/screenshots/map4.png?raw=true" alt="map4" title="map4" width="220" />
</p>

- News/Notifications
  - Receive news and push notifications relevant to the event.
  - Push notifications are supported on all platforms – Android, iOS, and Web.

<p align="center">
  <img src="repo-data/screenshots/news3.png?raw=true" alt="news3" title="news3" width="220" />
  <img src="repo-data/screenshots/news2.png?raw=true" alt="news2" title="news2" width="220" />
</p>
  
- Info/Songbook/Game
  - Various information about the event, a Songbook with font-size increase/decrease, and a groups-based code-guessing game.

- Administration/Feature settings
  - Overview of all event data, map, groups, users, rights, and other settings.
  - Setup of multiple events.

- User/Companions/Workshops
  - User profile with personal data.
  - Ability to import users from a table.
  - Creation of events with limited capacity (workshops) and creation of companions.
  - QR code for workshop entry verification.

<p align="center">
  <img src="repo-data/screenshots/user1.png?raw=true" alt="user1" title="user1" width="200" />
  <img src="repo-data/screenshots/user3.png?raw=true" alt="user3" title="user3" width="200" />
  <img src="repo-data/screenshots/user4.png?raw=true" alt="user4" title="user4" width="200" />
  <img src="repo-data/screenshots/user5.png?raw=true" alt="user5" title="user5" width="200" />
</p>

- Ticket/Form/Seat reservation
  - Support for creation of custom forms (similar to Google Forms) with priced products.
  - Creation of custom tickets with custom graphics.
  - Creation of a seat reservation component.

<p align="center">
  <img src="repo-data/screenshots/form1.png?raw=true" alt="form1" title="form1" width="200" />
  <img src="repo-data/screenshots/form3.png?raw=true" alt="form3" title="form3" width="200" />
  <img src="repo-data/screenshots/form4.png?raw=true" alt="form4" title="form4" width="200" />
  <img src="repo-data/screenshots/form5.png?raw=true" alt="form5" title="form5" width="200" />
</p>

- Orders/Transactions
  - Order management, bank payment synchronization, automated sending, and creation of paid tickets.

- Email Templates
  - Customization of all email templates.

<p align="center">
  <img src="repo-data/screenshots/email1.png?raw=true" alt="email1" title="email1" width="220" />
  <img src="repo-data/screenshots/email2.png?raw=true" alt="email2" title="email2" width="220" />
  <img src="repo-data/screenshots/email3.png?raw=true" alt="email3" title="email3" width="220" />
</p>

- Ticket scanning
  - QR-code-based ticket verification.

---
## Architecture

This project is built using the [Flutter](https://github.com/flutter/flutter) framework and the Dart programming language.

For the backend, it uses [Supabase](https://github.com/supabase/supabase), a serverless platform. It includes:

- Deno functions written in TypeScript  
- PostgreSQL scripts for database operations

---
## Setup
For a helpful step-by-step guide on creating your own app, see [howto.md](./howto.md).

---
## Currently in production

- [Absolventský Velehrad](https://app.absolventskyvelehrad.cz)
- [Člověk a Víra](https://clovekavira.netlify.app)
- [BISCUP](https://biscup.netlify.app)
- [Celostátní setkání animátorů 2024](https://aksmcz.netlify.app)
- [Festival Slunovrat](https://app.festivalslunovrat.cz)
- [Hvězda mořská](https://hvezdamorska.netlify.app)

Under similar names usually available in AppStore and Google Play Store.

---
## Latest development

**2024.11**
- Cyber Space game added to the app, enabling group gameplay and submission of codes found in the real world.
- Schedule event editing page introduced, along with a new quick add button for the schedule.
- Songbook now supports a changeable dark/light theme and adjustable text size.
- Food support added, including information about user's choice.
- Accommodation support added with links to places on the map.
- Invitation based system implemented using invitation codes.
- Progress dialog in DataGrids now indicates success or error, with the option to cancel mid-action.
- Update prompt now allows setting a minimum version requirement for each platform.
- Launch event logging includes app version and platform details.
- Install screen updated with enhancements and instructions.
- Profile button moved to the bottom app bar.
- Admin page refined with sub-tabs, preparing for dynamic configuration features.

**2024.10**
- Support for multi-organizations.
- New bottom app bar.
- Dark/light mode, styles, and colors refactoring (e.g., clickable links are in different colors now).

**2024.09**
- Refactoring and support for multiple events.
- Support for linking multiple events.

**2024.08**
- Admin dashboard to support multiple events.
- Better support of linking of anything inside the app.
- Optimized loading for information.
- Compression for large images and automatically converting links, emails, and phone numbers to clickable hypertext.
- Colorful emoji for web.

**2024.07**
- Full support for offline display mode on web (and pwa app).
- Notifications support for web (and pwa app).
- Settings page (enable notifications, language).
- Install page with links to install app on phone or PC (example: [https://live.festapp.net/#/install](https://live.festapp.net/#/install) ).

**2024.06**
- Optimized data usage for events and information.
- Enabled custom icons for map places.
- Zooming in/out for Timetable.
- Displaying current time in Timetable and Time Travel component.
- Generated QR code for users and companions.
- Approver page for checking QR codes and workshop attendees.

**2024.05**
- User registration flow and sign-up page.
- Companion feature: Users can create a limited number of companions and assign them to workshops.

**2024.04**
- Reset password flow.
- Enabled event type and hiding.

**2024.03**
- Specialized page for song lyrics.
- Database and URL support for multiple events.

**2024.01**
- Full support for offline display mode (if connection is not available, data from cache will be used). Simply open the application once and data will be loaded in the background.
- Timetable display of the program (scrollable page with a time axis and locations).
- Creation of my program using the + button (even without the need to log in).
- Full support for URLs (ability to link to pages in the web version of the application).
- Ukrainian language added among the languages.

---
## About
The app was originally developed by a team of volunteers for [Absolventský Velehrad](https://absolventskyvelehrad.cz) event in 2023.





