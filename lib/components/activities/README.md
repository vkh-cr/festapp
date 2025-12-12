# Activities Component (Volunteer Management)

**Purpose**: A system for managing **Volunteers and Staff Tasks**. It is
distinct from the public "Schedule".

- **Schedule**: What attendees see (Concerts, Workshops).
- **Activities**: What volunteers do (Guarding, Cleaning, Preparing).

## Core Concepts

### 1. Activity vs. Assignment

- **Activity**: A generic category of work (e.g., "Gate Security", "Cleaning
  Crew").
- **Assignment**: A specific shift or task instance assigned to a user (e.g.,
  "John Doe at Gate A, 14:00-16:00").

### 2. The "Draft & Publish" Workflow

(Same as before: Uses `save_activity_history` and `update_activities`...)

### 3. `ActivityModel`

- **Structure**: Contains basic metadata (title, description) and a list of
  `assignments`.
- **Data Field**: Uses a generic `data` JSONb field for flexible properties.

## Architecture: "Draft & Publish"

The Activities feature uses a robust **Version History** system, unlike simple
CRUD features.

### 1. Autosave

- **Trigger**: The editor autosaves changes periodically.
- **Logic**: `DbActivities.autosaveActivities` -> `save_activity_history` (RPC).
- **Type**: `AUTOSAVE`.
- **Storage**: Stored in a separate history table (or distinct rows in
  `activity_history`), not affecting the live schedule.

### 2. Publish

- **Trigger**: User clicks "Publish".
- **Logic**: `DbActivities.saveActivitiesForEdit`
  1. **Save History**: Calls `save_activity_history` with type `PUBLISH`.
  2. **Apply to Live**: Calls `update_activities` (RPC) to overwrite the actual
     `activities`, `assignments`, etc., tables with the new state.
- **Result**: The live app (Read Mode) sees the changes only _after_ this step.

## SQL & RPCs

- `get_activities_for_edit`: Fetches the entire graph (Activities + Places +
  Assignments) for the editor.
- `save_activity_history`: Inserts a JSON snapshot of the `EditDataBundle` into
  the history.
- `update_activities`: The "Commit" function that applies the JSON snapshot to
  the relational tables.

## Critical Implementation Details

- **Ids in JSON**: The `EditDataBundle` often uses temporary or specific IDs.
  When parsing or modifying, ensure you preserve the structure.
- **Assignments**: These are complex join objects. An assignment links an
  Activity to potentially _multiple_ places and events.
