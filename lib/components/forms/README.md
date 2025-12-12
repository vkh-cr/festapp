# Forms Feature

**Purpose**: The central engine for data collection, ticket ordering, and
registration. It is highly dynamic and data-driven.

## Directory Structure

- **`models/`**: Data classes like `FormModel` and `FormFieldModel` that define
  the structure of the form.
- **`views/`**: Top-level pages.
  - `form_page.dart`: The _User-Facing_ page where people fill out the form.
  - `form_edit_page.dart`: The _Admin-Facing_ page builder.
- **`widgets_view/`**: Components used in the **Run-Time** (User) experience.
  - _Example_: `text_field_builder.dart` renders the actual input box the user
    types into.
  - _Example_: `countdown_widget.dart` shows the timer during an order.
- **`widgets_editor/`**: Components used in the **Design-Time** (Admin)
  experience.
  - _Example_: `form_fields_generator.dart` is the drag-and-drop UI for adding
    new fields to a form.
  - _Example_: `product_type_editor.dart` allows admins to configure product
    prices and limits.

## Core Concepts

### 1. Dynamic Definition (`FormModel`)

- **Location**: `lib/components/forms/models/form_model.dart`
- **Nature**: Forms are not hardcoded. They are defined in JSON stored in the
  DB.
- **Fields**: `FormFieldModel` defines inputs (Text, Checkbox, ProductSelection
  using `ProductType`).

### 2. The "Form" Bundle (SQL)

**CRITICAL**: The "Form" is not just UI config; it's a massive data bundle
fetched via `get_form_by_link`.

- **RPC**: `get_form_by_link`
  (`scripts/functions/eshop_forms/get_form_by_link.sql`)
- **Payload**:
  - **Form Metadata**: Title, header, open/close status.
  - **Fields**: All definitions.
  - **Products**: Nested under fields. _Includes dynamic availability checks_
    (`is_product_dynamically_available`).
  - **Secret**: Generates a session `secret` UUID used for locking spots (see
    Blueprint).

### 3. Rendering Engine (`FormPage`)

- **Location**: `lib/components/forms/views/form_page.dart`
- **Process**:
  1. Calls `DbForms.loadFormByLink`.
  2. Iterates through `form.fields`.
  3. Selects widget based on `field.type` (e.g., `FormHelper.fieldTypeTicket` ->
     `TicketSelectWidget`).
  4. Collects data into `FormHolder`.

## Data Flow

1. **Load**: `FormPage` -> `get_form_by_link` (SQL) -> `FormModel`.
2. **Interact**: User fills fields. Blueprint selection talks to `select_spot`.
3. **Submit**:
   - **Registration**: `DbForms.saveUserRegistration` -> `create_form_ws` (RPC).
   - **Ticket Order**: `DbOrders.sendTicketOrder` -> Calls Edge Function
     `send-ticket-order` (which validates and calls `create_ticket_order` SQL).

## Critical Implementation Details

- **Do Not Hardcode Fields**: Never look for specific field IDs (e.g., "name
  field is ID 5"). Always find fields by `type` or `data` attributes.
- **Product Availability**: Availability logic is often hidden in the SQL
  (`is_product_dynamically_available`). If a product isn't showing, it's likely
  filtered out there.
