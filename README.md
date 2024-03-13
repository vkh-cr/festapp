# Festapp

Mobile solution for your festival, conference or event. 
- Try now on [live.festapp.net](https://live.festapp.net)
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
  - Available Offline (Timeline, Event detail, Timetable, My Schedule, News, Map, Info, Songs, User profile).
  - Languages: English, Czech, Slovak, Polish, German, Ukrainan.
 
---
## Technical details
Solution is based on Flutter framework with language dart. As a backend is used serverless service Supabase.

---
## Currently in production

- [Absolventský Velehrad](https://av23.cz)
- [Člověk a Víra](https://ff23.cz)
- [BISCUP](https://biscup23.app)

Links to Appstore/Play Store versions are usually saved in info section.

---
## Latest development

**2024.01**
- Full support for offline display mode (if connection is not available, data from cache will be used). Simply open the application once and data will be loaded in the background.
- Timetable display of the program (scrollable page with a time axis and locations).
- Creation of my program using the + button (even without the need to log in).
- Full support for URLs (ability to link to pages in the web version of the application).
- Ukrainian language added among the languages.
- Minor bug fixes.

---
## Credits
The app was originally developed by a team of volunteers for [Absolventský Velehrad](https://absolventskyvelehrad.cz) event in 2023.





