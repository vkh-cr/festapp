# Email Templates Feature

**Purpose**: Manages customizable email templates sent to users (e.g., Ticket
confirmation, Registration info), including **inheritance logic** and
**banners**.

## Architecture

### 1. Inheritance Hierarchy

Templates and settings follow a strict 3-level inheritance model. The system
always looks for the most specific definition first:

1. **Occasion** (Specific Event)
2. **Unit** (Organizer Group)
3. **Organization** (System/Domain Level)

If a template or banner is not defined at the Occasion level, it falls back to
the Unit, and then the Organization.

### 2. Templates & Data (`get_entity_email_templates`)

- **Storage**: `email_templates` table.
- **Fetching**:
  - `get_entity_email_templates` (Unified): Returns the templates applicable to
    the given `unit` or `occasion`.
  - It builds a context object (`occasion`, `unit`, `organization`) to resolve
    inheritance.

### 3. Wrappers & Banners

To separate "design" from "content", we use **Email Wrappers**.

- **Table**: `email_wrappers`.
- **Logic**:
  - Wrappers contain the HTML frame (header, footer, logo).
  - The `{{content}}` placeholder is replaced by the specific template's body.
- **Banners**:
  - Stored in the `data->>'email_banner'` field of the `units` or `occasions`
    table.
  - When a banner is uploaded, a wrapper is automatically created/updated via
    `update_entity_email_banner.sql`.
  - **Inheritance**: Banners also respect the hierarchy. An Occasion without a
    banner will use the Unit's banner wrapper.

### 4. Sending Emails (`send-custom-email`)

**Edge Function**: This feature relies entirely on a Supabase Edge Function for
the actual delivery.

- **Dart**: `DbEmailTemplates.sendCustomEmail`
- **SQL**: `get_email_template_and_wrapper(code, context)`
  - This critical function resolves **both** the specific Template and the
    specific Wrapper based on the priority (Occasion > Unit > Org).
- **RPC**: `functions.invoke('send-custom-email')`
- **Payload**:
  - `template`: The JSON model of the template.
  - `subs`: A `Map<String, String>` of substitutions (e.g., `{{name}}` ->
    "John").
  - `email`: Recipient address.

## Data Flow

1. User edits template in Admin UI (`EmailTemplateSettingsPage`).
2. `update_email_template` RPC saves changes.
3. User uploads a banner in Admin UI (`EmailBannerSettingsCard`).
4. `update_entity_email_banner` RPC updates the `data` JSON and generates the
   `email_wrapper` HTML.
5. When an action occurs (e.g., Order Paid), the app triggers the `send` logic.

## Critical Implementation Details

- **Split Brain**: The "Content" (Subject, Body) is in `email_templates`. The
  "Look & Feel" (Banner, Layout) is in `email_wrappers`.
- **Substitutions**: The templates use handlebar-style syntax (e.g., `{{var}}`).
  Valid keys depend on the inputs passed to `sendCustomEmail`.
- **Edge Function**: If debugging delivery failure, the issue is likely in
  `supabase/functions/send-custom-email`, not in the Dart code.
