# Shared Functions (`_shared`)

This directory contains utility modules and shared code used across multiple
Supabase Edge Functions.

## Modules

### `auth.ts`

Handles request authorization.

- `authorizeRequest`: Verifies request validity using either a shared secret
  (system/admin access) or a user's authorization header + editor role check.
- `AuthError`: Custom error class for auth failures.

### `emailClient.ts`

Provides email sending capabilities using `nodemailer`.

- `sendEmail`: Sends a raw email.
- `sendEmailWithSubs`: Sends an email by replacing placeholders in the subject
  and content with provided substitutions. Also supports wrapping content in a
  "wrapper" (e.g. for banners).

### `supabaseUtil.ts`

Supabase-specific helpers.

- `supabaseAdmin`: A Supabase client instance with `service_role` key for
  administrative operations.
- `getSupabaseUser`: Retrieves the user object from an auth token.
- `isUserEditorOrder`: Checks if a user has editor permissions for a specific
  occasion.
- `getEmailTemplateAndWrapper`: Fetches the correct email template and wrapper
  based on the inheritance hierarchy (Occasion > Unit > Organization).

### `translations/`

Contains localized strings for emails and other backend-generated content.

- `translations.ts`: Aggregates all language files.
- `translations.cs.ts`, `translations.en.ts`: Language-specific definitions.
- `payment-details.helpers.ts`: Helpers for formatting payment information
  tables and other common UI elements.

### `utilities.ts`

General utility functions.

- `formatCurrency`: Formats numbers as currency strings.
- `formatIBAN`: Formats IBAN strings for better readability.

### `orderOverview.ts`

Helpers for generating order summaries (e.g. for confirmation emails).

- `generateFullOrder`: Creates an HTML summary of ordered items.

### `qrCodePayment.ts`

- `generateQrCode`: Generates a SPAYD (Short Payment Descriptor) QR code for
  Czech bank payments.

### `changeOverview.ts`

Helpers for generating diffs or summaries of changes in an order (used in
`TICKET_ORDER_UPDATE`).
