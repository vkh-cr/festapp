# Festapp

Mobile solution for your festival, conference or event. 
- Try now on [live.festapp.net](https://live.festapp.net) or install to your phone [here](https://live.festapp.net/#/install).
- Visit us on website: [festapp.net](https://festapp.net)</br></br>
![Alt text](repo-data/festapp-showcase.png?raw=true "Showcase")

---
## Features

- Everybody sees:
  - Timeline - Schedule overview by time and day.
  - Event detail - Includes: Time, Place (with link), Content, Subevents, Sign In/Out button.
  - Timetable - View on event entries by the axis Time and Place.
  - My schedule - Attendee can add event entries into his own list.
  - News/Notifications - Receive news/notifications relevant to event.
  - Map - Map with current user location and places with custom icons and description.
  - Info - Various information supporting clickable phone numbers, e-mails or other hypertext.
  - Songs - Page with list of Songs with possibility to increase font size.
- Signed in user sees:
  - User profile - Name, e-mail, sex, role, accommodation (with link).
  - Limited capacity events.
  - Groups (discuss groups).
  - Synchronized "My schedule".
- Admin sees:
  - Admin dashboard with possibility to change: Information, Events, Places, Groups, Exclusivity, Users.
  - User import from CSV table.
  - Send News/Notifications.
  - Change or delete content of Event, Information or News via included Text Editor.
- Other features
  - Available on Android, iOS and Web.
  - Available Offline: Timeline, Event detail, Timetable, My Schedule, News, Map, Info, Songs, User profile.
  - Languages: English, Czech, Slovak, Polish, German, Ukrainan.
 
---
## Architecture
The solution is based on the [Flutter](https://github.com/flutter/flutter) framework with the Dart language.
As a backend, the serverless service [Supabase](https://github.com/supabase/supabase) is used. 
Both technologies were chosen to speed up development, and they have effectively met this requirement.

---
## Currently in production

- [Absolventský Velehrad](https://av23.cz)
- [Člověk a Víra](https://ff23.cz)
- [BISCUP](https://biscup.netlify.app)
- [Celostátní setkání animátorů 2024](https://aksmcz.netlify.app)
- [Festival Slunovrat](https://app.festivalslunovrat.cz)

Links to phone install are usually saved in info section.

---
## Latest development

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





