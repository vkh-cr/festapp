# Inventory Feature

**Purpose**: Capacity and stock management for Resources (Accommodations,
Goods).

## Concept Hierarchy

1. **Inventory Pool**: A category of generic resources (e.g., "Tent Spot").
   - _Capacity_: Defined by `Resources`.
2. **Resource**: A distinct physical/logical unit (e.g., "Tent Area A").
   - _Slots_: `ResourceSlots` define specific units inside a resource (e.g.,
     "Bed 1").
3. **Inventory Context**: A specific instance/time-slice of a pool (e.g., "Tent
   Spot - Friday Night").
   - _Link_: Connects an `InventoryPool` to a `Product`.
4. **Product**: The sellable item in the Eshop.

## Data Flow: The "Pool Bundle"

The entire inventory state for a pool is fetched in one massive SQL call to
minimize round-trips.

- **RPC**: `get_inventory_pool_bundle`
  (`scripts/functions/inventory/get_inventory_pool_bundle.sql`)
- **Returns**:
  - `pool`: The metadata.
  - `resources` (with nested `slots`): The physical capacity.
  - `contexts`: The logical time-slices.
  - **`products`**: All products linked to these contexts (Recent Addition).
  - `product_inventory_contexts`: The join table logic.

## Critical Implementation Details

- **Linking**: Products are linked to _Contexts_, not directly to Pools. This
  allows "One Pool (Capacity)" to serve "Multiple Products (Time/Variations)".
- **Aggregation**: If you need to add data to the inventory screen, add it to
  the `get_inventory_pool_bundle` SQL function, not a separate Dart fetch.
