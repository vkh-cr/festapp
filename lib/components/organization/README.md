# Organization Component

This component manages the top-level **Organization** domain settings. In the
data hierarchy, an Organization represents the tenant (e.g., `vstupenky.online`)
and holds global configuration.

## Key Concepts

- **Organization**: The data entity representing the tenant.
- **Admin Guard**: Logic to restrict access to organization-level settings
  (`organization_admin_guard.dart`).

## Data Model

Defined in `organization_model.dart`. Key fields:

- `id`: unique identifier.
- `name`: Display name.
- `logo`: URL to logo image.
- `paymentInfo`: default payment instructions.
- `theme`: Global color theme settings.

## Views

Located in `views/`. Contains screens for editing organization details and
managing organization-wide settings.
