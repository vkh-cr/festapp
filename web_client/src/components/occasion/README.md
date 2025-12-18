# Occasion Component (Web Client)

**Purpose**: Handles the display and selection of "Events" (Occasions).

## Core Files

- `occasion_model.js`: Data model for an event.
- `occasion_card.js`: UI component for displaying an event in a list.
- `occasion_detail_dialog.js`: Modal showing detailed info about an event.
- `db_occasions.js`: Fetches occasions from the database (public RPCs).

## Difference from Mobile App

Unlike the Flutter app which includes Administration features (creating,
duplicating, deleting occasions), the Web Client primarily focuses on the
**Public View**:

- Listing available events.
- Showing event details.
- Allowing user entry (routing to Forms/Eshop).

## Data Flow

1. **Fetch**: `DbOccasions` calls public RPCs to get visible events.
2. **Display**: Events are rendered as cards.
3. **Select**: Clicking an event opens the detail dialog or navigates to the
   event's specific pages.
