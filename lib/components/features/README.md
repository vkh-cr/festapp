# Features Component

**Purpose**: The Configuration System. Controls which modules are active for an
event (`Occasion`) or organization (`Unit`).

## Architecture

The app is "Feature-Flag Driven". The UI checks `FeatureService` before
rendering major tabs or buttons.

- **Storage**: Stored as a JSON array in the `occasions` table (`features`
  column). **Each Occasion has its own isolated feature configuration.**
- **Parsing**: handled by `FeatureService.getFeatureDetails`.

## Feature Logic

- **Hierarchy**: `Feature` is the base class. Subclasses like `TicketFeature` or
  `MapFeature` contain extra JSON fields (e.g., colors, default coordinates).
- **Defaults**: `getDefaultFeatures` defines what a fresh event looks like.
- **Overrides**: `AppConfig.isAppSupported` toggles which features are _allowed_
  to be enabled (e.g., Workshops are only for the "Full App").

## Critical Implementation Details

- **Debugging**: If a tab (e.g., "Schedule") is missing, check the `features`
  JSON in the database for that `occasion_id`.
- **Extending**: To add a new feature, you must add it to `FeatureConstants`,
  create a `Feature` subclass, and add it to
  `FeatureService.appSupportedFeatures`.
