# Supabase Edge Functions Reference

## Overview

Deno-based edge functions for privileged operations, external API calls, and email delivery. All deployed with `--no-verify-jwt`; each function handles its own authorization.

## Function Inventory

| Function | Purpose |
|----------|---------|
| `notify` | Push notifications via OneSignal, triggered by DB webhook. Supports targeted and broadcast sends. |
| `register` | User registration: creates user via RPC, sends welcome email with sign-in code and platform links. |
| `send-email` | Transactional emails for ticket orders. Supports single sends and batch queue. Template codes: `TICKET_ORDER_STORNO`, `TICKET_ORDER_UPDATE`, `TICKET_ORDER_REMINDER`. Strategy Pattern for data gathering. |
| `send-custom-email` | Editor-initiated custom email. Validates editor role, then sends with provided template/substitutions. |
| `send-sign-in-code` | Resets password and sends sign-in code through the delivery resolver (`email_delivery`, otherwise `email_readonly`). Used by admins/editors to invite users. |
| `send-reset-password-link` | Self-service "Forgot Password" flow. Looks up by `email_readonly` and uses the same delivery resolver. |
| `send-ticket-order` | Creates/replaces an order through one receipted RPC; confirmation effects are queued transactionally. |
| `send-tickets` | Generates and emails PDF tickets (standard or named) for an order. |
| `download-ticket` | Returns a single ticket PDF as Base64 JSON for in-app download. |
| `fetch-transactions` | Syncs bank transactions from FIO API for an occasion. |
| `synchronize-orders` | Batch-syncs transactions across all fetchable accounts (cron). Matches to orders and triggers confirmation emails. |
| `instance-install` | Runs SQL scripts from GitHub for setup/migrations (tables, functions, policies, seeds). |
| `fetch-http-data` | Proxies HTTP requests, returns Base64. Used to bypass CORS. |
| `bank-mail-parser` | Receives AWS SNS bank confirmation emails, parses transaction details, inserts into DB. |
| `generate-hvezdamorska-agreement` | Domain-specific: generates PDF travel agreement using `pdf-lib`. |

## Auth Patterns

### `authorizeRequest` (`_shared/auth.ts`)

Dual-path authorization:

```
Path 1: Request Secret (System/Cron)
  - `requestSecret` in body, validated via `check_request_secret` RPC
  - Returns { user: null }
  - Used by: cron jobs, inter-function calls

Path 2: User Token + Editor Check
  - Authorization header + occasionId
  - Token validated, then editor role checked
  - Returns { user: supabaseUser }
  - Used by: editor-initiated actions
```

`AuthError` carries an HTTP status (401, 403); functions catch it and return the appropriate code.

### Direct Auth

`send-sign-in-code` creates a user-scoped Supabase client from the `Authorization` header and calls RPCs through it, relying on RLS enforcement.

`send-custom-email` validates the user token via `getSupabaseUser`, then explicitly checks editor role via `isUserEditor`/`isUserEditorOrder` using the admin client (no RLS).

### Webhook-triggered (No Auth)

`notify` is triggered by DB webhooks; `bank-mail-parser` is triggered by AWS SNS. Neither performs user auth. Both use the service-role admin client.

## Deployment

```bash
supabase functions deploy <function-name> --no-verify-jwt --project-ref <ref>
```

Cron-invoked functions (`synchronize-orders`, `send-email` with `processQueue`) use `requestSecret` auth. The secret is generated via `generate_request_secret` RPC with a TTL.

Ticket-order confirmation, Fakturoid and contract attachment work runs through
`queue_emails`. The order command inserts the queue row in its DB transaction;
`send-email` claims rows with `FOR UPDATE SKIP LOCKED`, retains failed rows for
retry, and uses the command UUID as the stable SMTP Message-ID and Fakturoid
`custom_id`.

## CORS Pattern

Most functions share this pattern (exceptions: `notify` and `bank-mail-parser`, which have no CORS handling):

```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
```

- `OPTIONS` preflight returns `200` immediately.
- Every response (success or error) includes CORS headers.
- `AuthError` instances return their status code; all others return `500`.
# Account deletion

`request-account-deletion` accepts only authenticated `POST {}` requests, derives the identity from the JWT, stores a SHA-256 token hash and sends `ACCOUNT_DELETION_CONFIRM` through the shared template/wrapper delivery boundary. `confirm-account-deletion` permits side-effect-free `GET` inspection and performs deletion only on explicit `POST {token}`. It owns Supabase Admin hard-delete and OneSignal Delete User by `external_id`; transient vendor failures stay in the durable `processing` state.

Required secrets/config: the existing Supabase URL/anon/service-role and SMTP values, `ACCOUNT_DELETION_ORGANIZATION_ID=9`, optional `ACCOUNT_DELETION_CONFIRMATION_URL`, and organization-held `ONESIGNAL_APP_ID` / `ONESIGNAL_REST_API_KEY`. Never log tokens, UUIDs or email addresses.
