# Schedule Component (Public Program)

**Purpose**: The core **Festival Program** viewed by attendees. Handles events,
workshops, concerts, and user sign-ups. **Distinction**: This is NOT for
volunteer tasks (see `lib/components/activities`).

## Core Concepts

display, signing in/out, and offline synchronization.

## Vs. Activities Component

- **Activities (`lib/components/activities`)**: The "Editor" side. Used by
  admins to _plan_ the schedule. Writes to `activities` table.
- **Schedule (`lib/components/schedule`)**: The "Client" side. Used by attendees
  to _view_ the program. Reads from `events` table (which is populated/synced
  from `activities`).

## Core Concepts

### 1. Events (`EventModel`)

The atomic unit of the schedule.

- **Fetching**: `DbEvents.getAllEvents` -> `get_events` RPC.
- **Optimization**: This RPC performs massive joins (places, roles, signups) to
  return a "ready-to-render" object to the Flutter client.

### 2. Sign In / Sign Out

Users can "sign up" for workshops, etc. This is **strictly** controlled by SQL
to prevent race conditions (overbooking).

- **RPC**: `sign_user_to_event`
  (`scripts/functions/schedule/sign_user_to_event.sql` - _example path_)
- **Error Codes**: The Dart code handles specific integer codes returned by the
  RPC:
  - `100`: Event over.
  - `101`: Full capacity.
  - `102`/`103`: Already signed in (or mutual exclusivity conflict).
  - `104`: Registration not open yet.
  - `105`/`106`: Gender balancing limits (men/women).

### 3. "My Schedule" & Offline Sync

The app allows users to "star" events (My Schedule) works offline.

- **Logic**: `DbEvents.synchronizeMySchedule`
- **Hybrid Flow**:
  1. **Local**: Saves `eventIds` to `OfflineDataService`.
  2. **Remote**: Calls `synchronize_my_schedule` RPC to merge local IDs with
     server-side saved items.

## Critical Implementation Details

- **Error handling**: The `sign_user_to_event` RPC is the "Source of Truth" for
  business rules. If a user complains they can't sign in, check the logic in
  that SQL function first.
