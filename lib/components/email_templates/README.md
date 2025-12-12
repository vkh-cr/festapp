# Email Templates Feature

**Purpose**: Manages customizable email templates sent to users (e.g., Ticket
confirmation, Registration info).

## Architecture

### 1. Templates (`EmailTemplateModel`)

- **Storage**: Stored in the database.
- **Context**: Templates are fetched relative to an `occasion`.
- **RPC**: `get_all_email_templates` (`params: { "p_context": ... }`).

### 2. Sending Emails (`send-custom-email`)

**Edge Function**: This feature relies entirely on a Supabase Edge Function for
the actual delivery.

- **Dart**: `DbEmailTemplates.sendCustomEmail`
- **RPC**: `functions.invoke('send-custom-email')`
- **Payload**:
  - `template`: The JSON model of the template.
  - `subs`: A Map<String, String> of substitutions (e.g., `{{name}}` -> "John").
  - `email`: Recipient address.

## Data Flow

1. User edits template in Admin UI.
2. `update_email_template` RPC saves changes.
3. When an action occurs (e.g., Order Paid), the app (or often another SQL
   trigger/Edge function) invokes the `send` logic.

## Critical Implementation Details

- **Substitutions**: The templates use handlebar-style syntax (e.g., `{{var}}`).
  The valid keys depend on the inputs passed to `sendCustomEmail`.
- **Edge Function**: If debugging delivery failure, the issue is likely in
  `supabase/functions/send-custom-email`, not in the Dart code.
