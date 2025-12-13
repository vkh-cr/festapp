# AI Context & Documentation

This document is designed to help AI assistants understand the **Festapp**
codebase structure, architecture, and common development patterns.

## Project Overview

Festapp is a customized event management application built with:

- **Frontend**: Flutter (Mobile & Web)
- **Backend**: Supabase (PostgreSQL, Edge Functions, Auth)
- **Database Logic**: Heavy usage of SQL functions defined in
  `scripts/functions`.

## Data Hierarchy (Mental Model)

Understanding this hierarchy is crucial for navigating the codebase:

1. **Organization**: Domain Level (e.g. `vstupenky.online`). Distinct from
   specific non-profits or units.

2. **Unit**: The **Real-world Organization** (e.g. "Youth Group"). Named "Unit"
   because "Organization" was reserved for the domain level.
3. **Occasion**: A specific event instance (e.g., "Summer Camp 2024").
   - Occasions belong to Units.

- Features (Map, Schedule) are configured per Occasion.

## Directory Structure

### `/lib` (Flutter App)

The main application code.

- `main.dart`: Entry point. Initializes Supabase, Services, and Localization.
- `app_router.dart`: Routing configuration using `auto_route`.
- `app_config.dart` & `theme_config.dart`: App-wide configuration and theming.
- `components/`: **Core of the Application**. Contains Feature folders.
  - `[feature_name]/`: Groups UI, Views, and Logic for a feature (e.g., `eshop`,
    `inventory`, `blueprint`).
  - `features/`: Logic definitions for abstract features (feature
    flags/configuration).
  - `forms/`: Dynamic form builder and rendering.
- `services/`: Helper classes (Time, Toast, Notification, Mailer).
- `data_services/`: Database interaction and "Business Logic" for data.
  - `RightsService`: **CRITICAL**. Handles current user permissions, current
    occasion/unit context.
  - `OfflineDataService`: Handles local caching logic.
  - `SynchroService`: Syncs data between local and remote.

### `/scripts` (Database Logic)

Contains SQL scripts that define the database schema and business logic. **This
is where most "backend" logic lives.**

- `functions/`: SQL functions (Stored Procedures). Organized by domain.
  - `eshop_orders/`: Logic for creating and managing orders.
  - `users/`: User management logic.
  - `user_permissions/`: RBAC logic.
- `migrations/`: Database schema changes.

### `/supabase` (Edge Functions)

Supabase configuration and TypeScript Edge Functions.

- `functions/`: TypeScript code for server-side logic that requires external
  APIs or complex processing not suitable for SQL.

## Key Patterns & Architecture

### 1. Navigation (AutoRoute)

- We use `auto_route` for navigation.
- Routes are defined in `app_router.dart`.
- `app_router.gr.dart` is generated. **Do not edit manually.**
- Navigation often depends on `RightsService.currentLink` or `currentUnit` to
  construct URLs (e.g., `/:occasionLink/...`).

### 2. Localization (EasyLocalization)

- We use `easy_localization`.
- Translations are in `assets/translations/`.
- **Preferred Pattern**: Use `*Strings.dart` files (e.g., `CommonStrings`,
  `FormStrings`) to define static getters for translation keys.
- Usage: `CommonStrings.save` instead of `"Save".tr()`.
- Old way (avoid if possible): `"StringKey".tr()`.

### 3. Permissions & Context

- `RightsService` is the central singleton for checking what the user can do.
- It determines the "Current Occasion" or "Current Unit".

## Feature Documentation (See Local READMEs)

For detailed instructions on specific features, refer to their local
documentation:

- **[Blueprint](lib/components/blueprint/README.md)**: Visual seat reservation &
  editor.
- **[Forms](lib/components/forms/README.md)**: Dynamic form engine.
- **[Eshop](lib/components/eshop/README.md)**: Orders, payments, and "Split
  Brain" SQL logic.
- **[Inventory](lib/components/inventory/README.md)**: Capacity pools and
  contexts.
- **[Users](lib/components/users/README.md)**: Multi-tenancy and User/Occasion
  linking.
- **[Activities](lib/components/activities/README.md)**: **Volunteer
  Management**. Staff tasks, shifts, and assignments (NOT the public program).
- **[Occasion](lib/components/occasion/README.md)**: Core Event definition,
  duplication, and settings.
- **[Schedule](lib/components/schedule/README.md)**: **Public Program**. Events,
  workshops, sign-ups, and offline sync.
- **[Groups](lib/components/groups/README.md)**: User grouping and specialized
  Game Team logic.
- **[Features](lib/components/features/README.md)**: Configuration
  system/Feature flags (configured per Occasion).
- **[Information](lib/components/information/README.md)**: CMS pages, Game
  logic, and Songbook (lyrics/chords).
- **[Map](lib/components/map/README.md)**: Dual-mode rendering (Online/Offline
  MBTiles) and Path Groups.
- **[News](lib/components/news/README.md)**: Announcements and Notification
  integration.
- **[Email Templates](lib/components/email_templates/README.md)**: Template
  management and Edge Function delivery.

### 4. Supabase Interactions

- **Data Fetching**: Often done via `Supabase.instance.client` in
  `data_services`.
- **Complex Logic**: Often wrapped in Postgres Functions (RPC calls) rather than
  raw CRUD from the client, especially for critical flows like Order Creation.
  Look in `scripts/functions` for the implementation of these RPCs.

### 5. Error Handling (`ExceptionHandler`)

- **Pattern**: Use `ExceptionHandler.guard()` instead of `try-catch` blocks in
  UI code.
- **Behavior**: Automatically catches errors, parses Supabase/Postgrest
  exceptions, and shows a user-friendly Dialog or Toast.


## Context

**Context**: This document is a technical companion to the main
**[README.md](README.md)**. While the main README covers features and setup,
this file explains the _internal architecture_ for developers and AI assistants.

---

## Critical Implementation Details

- **Database Changes**: If you change logical flows (like ordering or
  permissions), check if a SQL function in `scripts/` needs updating.
- **Generated Code**: Run
  `fvm dart run build_runner build --delete-conflicting-outputs` after changing
  Refit services, JSON models, or AutoRoute definitions.
- **FVM**: The project uses **FVM** (Flutter Version Management). Always prefix
  flutter/dart commands with `fvm` (e.g., `fvm flutter run`, `fvm dart run`).
- **Web Support**: The app runs on Web. Be mindful of web-specific constraints
  or imports (avoid `dart:io` in shared UI code).
- **Split Brain Logic**: A lot of business logic (e.g.,
  `confirm_blueprint_order_change`) lives in **SQL Functions**
  (`scripts/functions/`).
  - **Risk**: AI might modify Dart logic without realizing the "real work" is
    happening in a stored procedure it didn't check.
  - **Mitigation**: Always check `scripts/functions/` when modifying data flows.

## Recommended Architecture (Existing Pattern)

The project follows a **Feature-Oriented** structure within `lib/components/`.

- **Directory**: `lib/components/[feature_name]/`
- **Goal**: Keep related UI, Models, and Views together.
- **Structure**:
  ```
  lib/components/my_feature/
  ├── views/            # Full screen pages and other ui views
  ├── models/           # Data models specific to this feature (if not shared)
  └── sub_feature/      # Nested sub-feature with its own structure
  ```
- **Action for AI**: When adding or modifying features, respect this
  encapsulation. Look for existing features in `lib/components/` before creating
  global pages. Avoid creating generic `widgets/` folders unless absolutely
  necessary; prefer `views/` or sub-features.
