# Shared Functions (`_shared`)

Utility modules shared across Supabase Edge Functions.

## Modules

### `auth.ts`
Request authorization via shared secret (system/admin) or user token + editor role check. Exports `authorizeRequest` and `AuthError`.

### `emailDelivery.ts`
Canonical email delivery module. `deliverEmail` resolves the stored template and wrapper, applies substitutions, sends through `nodemailer`, and records accepted delivery in `log_emails`. Editor-provided template snapshots use the same path and still receive the centrally resolved wrapper.

### `supabaseUtil.ts`
`supabaseAdmin` (service-role client), `createUserClient` (RLS-scoped client from a Bearer token), `getSupabaseUser`, `isUserEditor`, `isUserEditorOrder`, `getEmailTemplateAndWrapper` (resolves templates via Occasion > Unit > Organization hierarchy).

### `utilities.ts`
`formatCurrency`, `formatDatetime`, `formatIBAN` -- number/string/date formatting helpers.

### `orderOverview.ts`
`generateFullOrder` -- HTML summary of ordered items for confirmation emails.

### `qrCodePayment.ts`
`generateQrCode` -- SPAYD QR codes for Czech bank payments.

### `changeOverview.ts`
Order change diff/summary helpers (used in `TICKET_ORDER_UPDATE` emails).

### `generateTicket.ts`
Standard PDF ticket generation using `pdf-lib`, `fontkit`, and `qrcode`. Exports `fetchTicketResources` (downloads background, font, and product data) and `generateTicketImage` (renders the PDF).

### `generateNamedTicket.ts`
Personalized/named PDF ticket generation using `pdf-lib`, `fontkit`, and `qrcode`. Exports `fetchNamedTicketResources` (downloads occasion logo, font) and `generateNamedTicketImage` (renders a mobile-sized ticket with attendee name, event details, and QR code).

### `translatePlatformLinks.ts`
Converts `{platform, link}` objects to localized HTML anchors for emails (Czech/English).

### `translations/`
Localized strings for backend-generated content. Contains `translations.ts` (aggregator that re-exports all), `translations.cs.ts` (Czech), `translations.en.ts` (English), and `payment-details.helpers.ts` (shared HTML builders for payment detail blocks, spacing, and bold helpers).
