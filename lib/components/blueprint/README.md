# Blueprint Feature

**Purpose**: Provides a visual interface for seat selection and reservation in
the Eshop.

## Key Components

### 1. Visualizer (`BlueprintPage`)

- **Location**: `lib/components/blueprint/ui/blueprint_page.dart`
- **Function**: Renders the SVG map or seat grid.
- **Interaction**: Handles zooming, panning, and tapping on seats.
- **Performance**: Uses `BlueprintPainter` (CustomPainter) for high-performance
  rendering of thousands of seats.

### 2. Data Model (`BlueprintModel`)

- **Location**: `lib/components/blueprint/blueprint_model.dart`
- **Source**: Parsed from a complex JSON structure (Objects, Groups, Spots).
- **Key Methods**:
  - `findObject`: Locates an object by ID.
  - Complex logic for parsing seat coordinates and linking them to "Product"
    IDs.

### 3. Seat Selection Logic ("Split Brain")

**CRITICAL**: The selection state is managed _optimistically_ in Dart but
_authoritatively_ in SQL.

- **Dart Side**: `SeatReservationWidget` (and checking `SeatState`).
- **SQL Side**: `select_spot` (RPC: `select_spot`)
  - **File**: `scripts/functions/eshop/select_spot.sql`
  - **Logic**:
    1. **Validation**: Checks if Blueprint/Form exists.
    2. **Availability**: Checks `order_product_ticket IS NULL` (not already
       sold).
    3. **Locking**: If selecting, sets `secret` and `secret_expiration_time`
       (+15 mins).
    4. **Unlocking**: If deselecting, **verifies the secret matches** before
       clearing.
  - **Note**: This function handles the "temporary hold" logic entirely. Dart
    just updates the UI color.

## Data Flow & RPCs

1. **Initialization**: `BlueprintModel` loaded via `get_form_by_link` (see
   Forms).
2. **Selection**:
   `DbOrders.selectSpot(context, formDataKey, secret, spotID, isSelect)` calls
   `select_spot`.
3. **Order Creation**: See [Eshop README](../eshop/README.md) for how selected
   spots are converted to orders.

## Critical Implementation Details

- **SVG & Coordinates**: The blueprint system relies on coordinate mapping. Do
  not change `BlueprintModel` parsing logic without verifying the SVG export
  format.
- **Optimistic UI**: The UI assumes the selection will succeed. If the RPC fails
  (e.g., spot taken), the UI must be rolled back (handled in `_handleSeatTap`).
