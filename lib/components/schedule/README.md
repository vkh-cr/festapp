# Schedule (Public Program)

Attendee-facing festival program. NOT volunteer tasks (that's `lib/components/activities/`).

- **Activities** writes to `activities` table (admin editor)
- **Schedule** reads from `events` table (populated/synced from activities)

## Sign In/Out Error Codes (CRITICAL)

`sign_user_to_event` RPC enforces all business rules server-side. Error codes:
- `100` = event over
- `101` = full
- `102` = exclusive event already taken
- `103` = already signed in
- `104` = too early
- `105`/`106` = gender limits reached (male/female)
- `107` = conflicting event schedule
- `108` = workshop registration not enabled

These map to localized messages in Dart.

## My Schedule & Offline Sync

Dual storage: remote `event_users_saved` table + local `OfflineDataService`. Sync merges via `synchronize_my_schedule` RPC.

## Exclusive Groups

`exclusive_groups` and `exclusive_events` tables enforce mutual exclusivity (e.g., parallel workshops -- can only attend one).

## SQL RPCs

- `get_events` -- all events with places, groups, roles, counts in one payload
- `sign_user_to_event` -- sign-in with full validation (capacity, timing, exclusivity, gender)
- `sign_user_out_of_event` -- sign-out with validation
- `synchronize_my_schedule` -- merges local and remote saved event IDs
- `get_my_events_and_activities` -- user's events + volunteer activities
