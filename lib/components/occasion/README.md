# Occasion Component

**Purpose**: The Core definition of an "Event" (Occasion). Manages settings,
services, and lifecycle (Duplication/Deletion).

## Core Concepts

### 1. Services (`ServiceItemModel`)

- **Purpose**: Manages "sub-services" like Food or Accommodation available at
  the event.
- **Logic**: Simple CRUD via RPCs (`create_service_item`,
  `update_service_item`).

### 2. Game Settings

- **Purpose**: Manages the "Game" feature enabled for an occasion.
- **Storage**: Stored inside the `data` JSONb column of the `occasions` table.
- **RPC**: `game_update_settings`.

## Complex Flows

### 1. Duplication (`duplicateOccasion`)

**Hybrid Logic**:

1. **SQL**: Calls `duplicate_occasion` RPC to copy the database row and related
   tables.
2. **Dart**: `DbOccasions.duplicateOccasion` then handles **Image Copying**.
   - It manually fetches the ticket background and occasion image.
   - Calls `DbImages.createCopyOfImage` (which likely involves storage bucket
     operations) to deep-copy the assets.

### 2. Deletion (`deleteOccasion`)

**Hybrid Logic**:

1. **SQL**: Calls `delete_occasion` RPC to remove the database records.
2. **Dart**: Manually scans for "Orphan Images" (images with `occasion IS NULL`
   after the delete) and removes them from Supabase Storage.

## Critical Implementation Details

- **Hybrid Operations**: Unlike pure SQL features, Occasion management often
  involves significant Dart-side orchestration, especially for **Files/Images**.
  Do not assume the SQL RPC does everything (it doesn't copy the binary files).
