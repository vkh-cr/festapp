# Map Component

**Purpose**: Renders the interactive festival map, supporting both online tiles
and offline vector maps.

## Core Concepts

### 1. Dual Rendering Modes

The map switches between two modes based on connectivity and configuration
(`MapFeature`):

1. **Online**: Uses `flutter_map_cancellable_tile_provider` to fetch standard
   raster tiles (e.g., OpenStreetMap).
2. **Offline**: Uses `vector_map_tiles` + `mbtiles` to render vector data stored
   locally on the device.
   - **Logic**: `OfflineMapHelper` manages downloading, caching, and validating
     the `.mbtiles` package and its style JSON.

### 2. Places & Icons

- **Places**: Points of Interest (POIs) stored in the `places` table.
- **Icons**: Custom markers defined in the `icons` table.
  `DbPlaces.getAllIcons()` fetches these to ensure the map uses the correct
  festival branding.

### 3. Path Groups (`PathGroupsModel`)

A feature to draw lines (routes, borders) on the map.

- **Storage**: Points are stored directly in the `path_data` JSON column of the
  `path_groups` table.
- **UI**: Users can toggle visibility of these groups (e.g., "Show Hiking
  Route", "Show VIP Area") via the map interface.

## Critical Implementation Details

- **Offline Sync**: The offline mode is _critical_ for festivals with poor
  signal. It downloads a large binary package (`.mbtiles`).
- **Edit Mode**: The `MapPage` enables admin users to drag-and-drop markers to
  update their position. This writes back to `DbPlaces.saveLocation`.
