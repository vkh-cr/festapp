# Eshop Feature

**Purpose**: Manages Orders, Tickets, Payments, and the checkout flow.

## Core Models

- `OrderModel`: The central entity. Wraps customer info, price, and state.
- `TicketModel`: Represents a sold item linked to a `Product`.
- `OrderProductTicketModel`: The join table/entity linking Orders, Products, and
  Tickets.

## Split Brain Logic (CRITICAL)

**Warning**: Dart code handles the _view_ and _fetching_, but **write logic** is
often in SQL.

### 1. Order Creation & Storno (`confirm_blueprint_order_change`)

This SQL function (scripts/functions/eshop/confirm_blueprint_order_change.sql)
is the "heavy lifter" for modifying orders or creating new ones from blueprint
selections.

- **Scenario**: User selects new seats and "Claims" them, potentially
  effectively cancelling (Storno) old tickets if this is a modification.
- **Logic**:
  1. **Analyze**: Calls `analyze_new_order_spots` to see if spots are occupied.
  2. **Storno**: If occupied, it **cancels the old tickets**
     (`storno_tickets_bulk`).
  3. **Unlock**: Clears secrets on spots.
  4. **Prepare**: Finds an open form and constructs a JSON payload for the _new_
     order.
  5. **Output**: Returns `orderDetails` JSON.
- **Next Step**: Dart code takes this `orderDetails` and sends it to the **Edge
  Function** (`send-ticket-order`), which actually creates the new order record.
- **Risk**: If you modify the Dart "Claim" button, you MUST check this SQL. It
  handles the _atomic_ switch from Old Order -> New Order.

### 2. State Managment

- **Paid**: `update_order_and_tickets_to_paid` (SQL).
- **Scanning**: `scan_ticket` (SQL) handles validation and strict state
  transitions (e.g., checking entrance limits).

## Database Layers

1. **Dart (`DbOrders`)**: Thin wrapper. mostly calls RPCs.
2. **Supabase (`scripts/functions`)**: The actual business logic.
3. **Edge Functions**: Used for emailing and complex integrations (like
   Stripe/Comgate).

## Critical Implementation Details

- **Transactions**: We rely on Postgres functions to ensure atomicity. Do not
  try to replicate "multi-step" logic (e.g., "delete old, create new") in Dart
  client-side code. It will cause race conditions.
- **Stringly Typed**: `OrderModel` fields are often mapped manually from `Tb`
  class strings. Be careful with renames.
