# Features Component (Web Client)

**Purpose**: The Configuration System. Controls which modules are active for an
event (`Occasion`).

## Core Files

- `feature_service.js`: Helper class to parse and check enabled features.
- `feature_constants.js`: String constants defining available feature keys (e.g.
  `FeatureConstants.eshop`).

## Architecture

The app is "Feature-Flag Driven". The UI checks `FeatureService` before
rendering major sections.

- **Storage**: Stored as a JSON array in the `occasions` table (`features`
  column).
- **Usage**:
  ```javascript
  if (FeatureService.isEnabled(events.features, FeatureConstants.eshop)) {
    // Render Eshop related UI
  }
  ```

## Critical Implementation Details

- **Debugging**: If a section is missing, check the `features` JSON in the
  database for that `occasion_id` or ensure the `FeatureService` is parsing the
  `features` array correctly.
