# AI Context — Festapp

Festapp is an event management platform: Flutter (mobile+web) + Supabase (PostgreSQL, Edge Functions, Auth) + vanilla JS web client for public forms/eshop.

## Critical: Split Brain Logic

Business logic is split between **SQL functions** (`database/functions/`) and Dart/JS. Before modifying any data flow, check if the logic lives in SQL.

- Search for `supabase.rpc('...')` in Dart/JS to find which SQL function handles the operation
- **In SQL**: Order creation, permissions, payments, ticket scanning, sign-ups, inventory
- **In Dart/JS**: UI, navigation, file operations (image upload/copy)
- **Hybrid**: Occasion duplication/deletion — SQL copies DB rows, Dart copies images from Storage

Key SQL directories: `eshop_orders/` (orders), `eshop_forms/` (form→order), `user_permissions/` (RBAC), `events/` (schedule), `inventory/` (capacity).

## Critical: Security Rules

All functions MUST be created in the `public` schema. Never create functions in other schemas.

Every `SECURITY DEFINER` function MUST:
1. Set `search_path = public, extensions` — always use explicit `eshop.tablename` for eshop schema tables, never rely on search_path to resolve them
2. Check permissions explicitly (`check_is_editor_order_on_occasion`, `check_is_manager_on_unit`, etc.)
3. Use parameterized queries, never `EXECUTE` with raw strings

Permission patterns: `check_is_*` raises exception (for writes), `get_is_*` returns boolean (for reads).

## Data Hierarchy

Organization (tenant/domain) > Unit (real-world org) > Occasion (event instance). Features configured per Occasion. "Unit" is used because "Organization" was reserved for the domain level.

## Code Patterns

- **FVM**: Always prefix flutter/dart commands with `fvm`
- **Error handling**: Prefer `ExceptionHandler.guard()` over try-catch in UI code
- **Localization**: `*_strings.dart` files with static getters (`CommonStrings.save`) not `"key".tr()`
- **Routing**: `auto_route`, `app_router.gr.dart` is generated — don't edit
- **Permissions**: Check `RightsService` before showing admin/editor UI
- **No `dart:io`** in shared UI code (breaks web). Exception: `map/` uses it for platform-specific offline maps
- **Config**: `automation/project.conf` → `apply_config.sh` propagates to all targets
- **Web client**: Page components extend `base/component.js` with `init()`/`render()`/`clear()` lifecycle; smaller widgets (dialogs, fabs) don't

## Directory Structure

- `lib/components/[feature]/` — Feature-oriented Flutter (views/, models/, sub-features)
- `lib/data_services/` — DB interaction. Key singletons: `RightsService` (context + permissions), `OfflineDataService` (cache), `SynchroService` (sync)
- `database/functions/` — SQL functions organized by domain. `database/tests/` for SQL tests (auto-rollback)
- `supabase/functions/` — Deno Edge Functions (email, tickets, payments). See `docs/backend/edge_functions.md`
- `web_client/src/` — Vanilla JS (Vite). Components + services (supabase, router, auth, theme, i18n)
- `automation/` — `project.conf` (single source of truth), `apply_config.sh`, `test_all.sh`

## Feature READMEs (Complex Components Only)

These components have non-obvious architecture worth reading before modifying:

- **[Eshop](../../lib/components/eshop/README.md)**: Orders, payments, Split Brain SQL
- **[Blueprint](../../lib/components/blueprint/README.md)**: Seat reservation with SQL locking
- **[Forms](../../lib/components/forms/README.md)**: Dynamic form engine, massive data bundles
- **[Schedule](../../lib/components/schedule/README.md)**: Sign-ups with SQL error codes, offline sync
- **[Users](../../lib/components/users/README.md)**: Bundle re-stitching, multi-tenancy
- **[Inventory](../../lib/components/inventory/README.md)**: Pool/Resource/Context hierarchy
- **[Activities](../../lib/components/activities/README.md)**: Draft & Publish with version history
- **[Email Templates](../../lib/components/email_templates/README.md)**: 3-level inheritance
- **[Bank Accounts](../../lib/components/bank_accounts/README.md)**: Dual-layer auth, eshop schema
