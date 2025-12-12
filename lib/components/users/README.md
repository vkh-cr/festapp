# Users Feature

**Purpose**: Manages User accounts, Multi-tenancy (Unit/Occasion context), and
User Bundles.

## Key Models

- `OccasionUserModel`: Represents a user in the context of an event (Occasion).
- `UnitUserModel`: Represents a user in the context of a permanent group (Unit).
- `UserInfoModel`: The core user profile data.

## The "User Bundle"

User management relies on fetching a massive graph of related data to display
the "Table of Participants".

- **RPC**: `get_users_from_occasion_with_orders`
  (`scripts/functions/users/get_users_from_occasion_with_orders.sql`)
- **Logic**:
  1. **Fetch Users**: Gets all `occasion_users` for the event.
  2. **Filtering**: **Crucial**: Joins `organization_users` to filter out
     `is_hidden` users (e.g., system admins or test accounts).
  3. **Graph Traversal**:
     - Gets `tickets` for these users.
     - Gets `orders` for these tickets.
     - Gets `forms` for these orders.
  4. **Result**: Returns 5 separate maps (Dictionary style) to avoid data
     duplication in the JSON response.
- **Dart Side**: `DbUsers.getOccasionUsersWithOrdersBundle` re-stitches this
  graph by resolving IDs (e.g., `user.ticket = tickets[user.ticketId]`).

## Risky Areas

- **Parsing**: The re-stitching logic in Dart (`db_users.dart`) is manual. If
  the SQL schema changes (e.g., renaming `ticket` to `ticket_id` in JSON), this
  breaks.
- **Hidden Users**: If a user is "missing" from the list, check the
  `organization_users.is_hidden` flag and the SQL filtering logic.

## Critical Implementation Details

- **Flattening**: We often "flatten" the data for the DataGrid.
  `OccasionUserModel` might technically be just a link, but in the UI it "is"
  the user.
- **Form Data**: User profile data often comes from _User Registration Forms_.
  The parsing logic in `db_users.dart` (lines 149+) specifically hunts for
  "BirthDate" and "GroupFeature" fields in the dynamic form data.
