# Unit Component

The **Unit** represents a real-world organization or group (e.g., a specific
Youth Group, a non-profit branch). This is distinct from the
[Organization](../organization/README.md) which represents the tenant/domain.

## Key Concepts

- **Unit**: The primary entity that users belong to.
- **Organization**: The parent tenant.
- **Occasion**: Events belong to a Unit.

## Data Model

Defined in `unit_model.dart`.

- `title`: Name of the unit.
- `data`: JSONB bag for configuration.
- `features`: Enabled features for this unit.
- `occasions`: List of events managed by this unit.

## Views

Located in `views/`. Contains UI for unit management, creation, and
configuration.
