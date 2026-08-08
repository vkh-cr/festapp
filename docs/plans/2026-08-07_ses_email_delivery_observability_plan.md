# Canonical SES email delivery and per-user observability

Date: 2026-08-07
Last hardened: 2026-08-08
Status: Ready for implementation; production cutover blocked by B1-B3
Verification: standard

## Outcome

Festapp sends every application-owned outbound email through one Amazon SES v2
transport boundary. Before the external send it creates a durable delivery
record; after the send and asynchronously received SES events it exposes an
honest timeline: queued/submitting, accepted by SES, delivered to the recipient
mail server, delayed, bounced, rejected, complained about as spam, or locally
failed/unknown. Emails explicitly linked to a user and the current occasion are
visible from the Users admin page as a compact latest-status column and a
paginated detail history.

Completion is a canonical cutover, not an SMTP coexistence period: Nodemailer,
all `SMTP_*` configuration, `log_emails`, and the `occasion_users.data` delivery
flags are removed. `queue_emails` remains only as the existing upstream domain
scheduler for order/reminder work; it is not a transport or a second delivery
ledger.

The UI must not claim that an individual message reached the Inbox or Spam
folder. SES `Delivery` proves handoff to the recipient's mail server, while
`Complaint` means the recipient or provider reported the message as spam.
Amazon's Virtual Deliverability Manager offers aggregate/message diagnostics,
but not a trustworthy per-message Inbox-vs-Spam fact for this product UI.

## Scope

### In scope

- All current callers of `supabase/functions/_shared/emailDelivery.ts`:
  registration, admin sign-in codes, CSM app links, password reset, account
  deletion request/completion, custom editor email, order email, and ticket PDF
  email.
- Amazon SES v2 API submission with a configuration set and non-PII message
  tags, plus durable ingestion of SES sending events through SNS and SQS.
- A canonical delivery ledger, append-only normalized provider events,
  a separate ledger of provider submission attempts, local suppression
  projection, idempotent event reduction, retry/ambiguous-outcome semantics,
  worker health, and scoped admin reads.
- Per-user, per-occasion status summary and history on the Flutter Users page.
- A compact occasion-level delivery-health/rate summary on the same page, so a
  stale event consumer cannot masquerade as a stream of merely `accepted`
  messages.
- Removal/migration of old SMTP configuration, `log_emails`, `is_invited`,
  `app_links_sent`, and tests/docs that present those flags as delivery proof.
- AWS/Supabase operational setup, rollout gates, monitoring, rollback limits,
  and a privacy-minimized retention job.

### Out of scope

- `lib/services/mailer_send_helper.dart` and feedback `mailto:` links, which hand
  composition to the user's local mail client and are not Festapp outbound
  delivery. `bank-mail-parser` is inbound bank mail and remains a separate SNS
  consumer. Neither is an alternate application email transport.
- Supabase Auth's hosted SMTP templates: current Festapp registration and reset
  flows use application Edge Functions; `generateLink` in reception QR login
  deliberately does not send an email. If a future direct Auth email caller is
  introduced, it must use the same SES identity/configuration set or be treated
  as a separately approved external boundary.
- Marketing campaigns, subscription preferences, bulk campaign tooling, and
  click-redirect tracking.
- Inferring user identity by matching an address. Shared mailboxes,
  `email_delivery`, and `+N` account aliases make that unsafe.
- Backfilling historical per-user truth from legacy booleans. Old rows do not
  contain SES IDs or timestamps and cannot be upgraded into evidence.
- Applying database migrations, changing AWS resources, setting production
  secrets, deploying Edge Functions, or enabling paid VDM features during plan
  execution without separate production authority.

## Constraints

- All SQL functions stay in `public`; every `SECURITY DEFINER` function uses
  `SET search_path = public, extensions`, performs an explicit rights/service
  check, and receives least privilege grants. No application trigger is added.
- The configured live project is resolved from `SUPABASE_URL` in
  `automation/project.conf` and must contain `FORCE_OCCASION_LINK` before any
  production action.
- The Users editor already loads a complete roster and its bundle is fragile.
  Delivery history must not be nested into every user or queried per row.
- `user_info.email_readonly` remains account identity;
  `get_user_delivery_email` remains the account-message address resolver.
  The delivery ledger stores the actual address snapshot and an explicit user
  UUID when the producer knows it.
- Security emails can contain one-time codes or reset/deletion links. The ledger
  and provider-event store must never persist rendered bodies, substitutions,
  attachments, codes, tokens, or raw provider payloads.
- Sender address is server-owned and SES-verified. Clients may select only an
  allowed display name/template and validated Reply-To; they cannot provide an
  arbitrary envelope `From`, raw template body, or unrestricted substitutions.
- SES has no `ClientToken` on `SendEmail`. A connection loss after SES accepts a
  request is ambiguous. Automatic blind resend would risk duplicates and is
  forbidden; a later tagged SES event may reconcile it.
- One delivery record has exactly one recipient. This keeps event correlation,
  user attribution, bounce/complaint handling, and retry decisions unambiguous.
- Existing unrelated working-tree changes are not part of this work.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| The shared helper is SMTP-only. | `supabase/functions/_shared/emailDelivery.ts`: Nodemailer transport reads `SMTP_HOSTNAME`, `SMTP_USER_NAME`, `SMTP_USER_PASSWORD`, `SMTP_PORT`, and `SMTP_SECURE`. | Replace the transport inside the existing shared seam; do not add a parallel SES helper that callers may bypass. |
| Current evidence means only transport acceptance. | `emailDelivery.ts`: `sendMail()` completes, then a row is inserted into `log_emails`; its result is logged as “accepted by transport”. | Existing data cannot answer delivery, bounce, delay, complaint, or spam questions. |
| Logging can fail after the side effect. | `emailDelivery.ts`: a `log_emails` insert failure returns `logged: false` so a retry does not duplicate SMTP delivery. | The new delivery intent must be durable before SES is called; an audit-write failure must fail closed before the external side effect. |
| The old log has no provider/user/status identity. | `database/tables/tables.sql`: `log_emails(id, created_at, to, template, from, organization, occasion, unit)`. | Migrate it only as `legacy_accepted` history, never manufacture delivered/user-linked status. |
| Application email producers already converge on one helper. | Imports of `_shared/emailDelivery.ts` in `register`, `send-sign-in-code`, `send-app-links`, `send-reset-password-link`, `request-account-deletion`, `confirm-account-deletion`, `send-custom-email`, `send-email`, and `send-tickets`. | A direct cutover is practical; every producer still needs explicit metadata and user attribution. |
| Order/reminder work already has a durable upstream queue. | `database/tables/tables.sql`: `queue_emails`; `database/functions/seed/crons.sql`: minutely `send-email` invocation; `send-email/index.ts`: claim/release/remove. | Retain this domain scheduler, link its attempts to the canonical ledger, and do not confuse deleting its task with delivery evidence. |
| Two user JSON flags impersonate delivery state. | `send-sign-in-code/index.ts` writes `is_invited`; `mark_app_links_sent.sql` writes `app_links_sent`; `users_tab_helper.dart` uses them to confirm resend. | Replace their UI/business use with canonical delivery history and delete both flags/functions/tests. |
| Order history has a second accepted-send marker. | `add_sent_to_customer_flag.sql` and `get_order_details_for_email.sql` use `is_sent_to_customer`. | Point order diff/reference lookup to accepted canonical deliveries linked by source history ID, then remove the duplicate marker/function. |
| Reminder state has a distinct scheduling purpose. | `mark_payment_reminder_sent.sql` prevents repeated reminders for the current payment version. | Retain it as domain scheduling state, but write it only after SES returns `MessageId`; it is not shown as delivery evidence. |
| User identity and delivery address differ intentionally. | `lib/components/users/README.md` and `get_user_delivery_email.sql`. | Store both explicit `recipient_user` and the actual normalized recipient snapshot; never join history by address. |
| The Users page is a full-roster grid. | `get_occasion_users_for_edit.sql`, `DbUsers.getOccasionEditorDataBundle`, `UsersTab`, and the Users README performance warning. | Load one set-based status map beside the roster and paginate detail on demand; no correlated SQL or N+1 calls. |
| Occasion deletion explicitly removes email artifacts. | `database/functions/others/delete_occasion.sql`. | Add the new FK/lifecycle behavior and delete the old `log_emails` cleanup branch. |
| Password reset persists a raw bearer token. | `supabase/functions/send-reset-password-link/index.ts` inserts the UUID token into `user_reset_token`; Flutter and `web_client/src/services/auth_service.js` later pass it to `set_user_password_token`. | Replace this security contract with hashed, expiring, single-use requests and deliberately invalidate outstanding raw links at cutover. |
| Sign-in-code UI retries can rotate and resend. | `send-sign-in-code` mutates the credential; `UsersTabHelper.processInvites` retries without a stable command ID. | Generate one command UUID outside the retry loop and transactionally couple credential rotation with delivery intent. |
| Runtime/deploy reachability is broader than the Edge imports. | `synchronize-orders` calls `send-tickets`; `instance_install_page.dart` hard-codes Edge deployment; `supabase/config.toml` controls gateway auth; `automation/check_client_sync_registry.mjs` tracks external effects. | Update and test every registry/caller, not only `_shared/emailDelivery.ts` imports. |
| Custom email currently crosses a mutable-content trust boundary. | `send-custom-email` accepts a client template/substitutions/address and the shared helper accepts caller-controlled sender formatting. | Server-resolve template, address and verified sender; isolate any privileged template-test flow. |
| Mendelio has a proven transferable shape. | `/Users/miakh/source/roman_seznamka/supabase/functions/_shared/ses.ts`, `tutoring-notification-provider-events/provider-events.ts`, `packages/communications/src/server/deliveryAnalytics.ts`, and `DeliveryAnalyticsSection.tsx`. | Reuse the SES v2/SigV4, configuration-set tags, idempotent provider event, and precise admin-label ideas; adapt authorization/data ownership to Festapp. |
| SES supports configuration-set event publishing and tags. | [AWS event publishing](https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html) and [specifying configuration sets/tags](https://docs.aws.amazon.com/ses/latest/dg/event-publishing-send-email.html). | Every send includes the canonical configuration set and a `delivery_id` tag used for correlation. |
| `SendEmail` returns a provider Message ID. | [AWS SES v2 SendEmail](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html). | Persist the returned ID as provider acceptance evidence and secondary correlation key. |
| Delivery is mail-server handoff, not Inbox placement. | [AWS event definitions](https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html) and [Delivery event contents](https://docs.aws.amazon.com/ses/latest/dg/event-publishing-retrieving-sns-contents.html). | UI copy must say “Doručeno serveru příjemce”, not “V doručené poště”. |
| SES exposes delays, bounces, complaints, reject, open, and other events. | [AWS event publishing](https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html). | Normalize and retain a complete event timeline; do not compress every outcome into sent/not-sent. |
| Complaint evidence is incomplete for some providers. | [AWS account-level suppression list](https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html) notes that Gmail does not provide complaint data to SES. | Absence of `complaint` can never be rendered as “not spam”. |
| Durable event buffering is available. | [AWS SES SNS destination](https://docs.aws.amazon.com/ses/latest/dg/event-publishing-add-event-destination-sns.html) and [SNS/SQS DLQ guidance](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html). | Use SNS to SQS with redrive/DLQ rather than depending on a best-effort direct app webhook. |

### Representative current flow

An Edge Function resolves a template/wrapper, substitutes and sanitizes HTML,
calls Nodemailer synchronously, inserts a small `log_emails` row, and then
optionally updates a producer-specific flag or deletes a `queue_emails` task.
The Users grid sees only `is_invited`/`app_links_sent`; no provider identifier or
later event can change that claim.

## Target architecture and invariants

### Canonical owner and contract

The canonical application owner remains
`supabase/functions/_shared/emailDelivery.ts`, backed by one SES v2 sender module
and database commands in `database/functions/emails/`. Its application-facing
contract is:

```text
deliverEmail({
  idempotencyKey,
  commandId,
  recipient: { email, userId? },
  templateCode,
  templateId?,
  context: { organization, occasion?, unit? },
  source: { kind, id? },
  deliveryContext: essential | transactional,
  substitutions,
  fromDisplayName?,
  replyTo,
  attachments?
}) -> {
  deliveryId,
  status: accepted,
  providerMessageId
}
```

`deliverEmail` server-resolves the stored template and effective delivery
address, renders in memory, claims exactly one submission attempt through a
service-only database command, calls SES v2 `SendEmail`, and completes that
attempt with the SES Message ID. It returns success only after that ID is
durably recorded. The same `commandId`/idempotency key reused by transport
retries returns the existing accepted result and never submits again; an
intentional resend gets a new command ID.

The ledger distinguishes a logical message from provider submissions:

- `public.email_deliveries` is the immutable business intent and current
  projection, unique on `(organization, idempotency_key)`. It holds explicit
  scope/source/user attribution, an exact recipient snapshot plus a normalized
  lookup value, timestamps for material facts, and safe error codes.
- `public.email_delivery_attempts` has one row per provider submission claim:
  ordinal, claim token/lease, `prepared|submitting|accepted|known_failed|
  submission_unknown`, request-transmitted marker, nullable unique SES Message
  ID, and start/completion timestamps. SES tags contain both `delivery_id` and
  `attempt_id`; neither contains PII.
- `public.email_delivery_events` is append-only normalized evidence attached to
  both the delivery and attempt. Its stable ID is derived from SES Message ID,
  event type, provider feedback ID/timestamp, normalized recipient, and attempt
  tag. SNS Message ID and SQS receipt handle are transport diagnostics, never
  event identity.
- `public.email_suppressions` is the operational projection of active AWS
  bounce/complaint suppression, keyed by normalized address and the selected
  AWS tenant/account+region scope. It stores only safe reason/source/timestamps
  and the exact SES-reported address needed for reconciliation.
- `public.email_delivery_runtime_state` records poller heartbeat, last success,
  queue/event freshness, unmatched count and last safe error. It never stores a
  queue payload.

The database commands use row locks and an unguessable claim token. Concurrent
`begin/claim` calls for the same key yield one owner; all others return
`should_send = false`. A stale lease is reclaimable only when the database proves
that no request bytes were transmitted. A stale `submitting` claim becomes
`submission_unknown`, not a resend. Known failure is retryable only before
transmission or after a definitive SES response without a Message ID. An
operator-authorized resend of an unknown outcome creates a new logical delivery
linked by `supersedes_delivery_id`; it never reuses the unresolved attempt.

No universal numeric `status_rank` is used. A tested transition matrix reduces
independent delivery facts under row lock: complaint and hard bounce remain
visible after any earlier delivery; delivery clears an active delay but not
adverse feedback; reject/render/local failure applies only before acceptance;
engagement never changes delivery state. Event-before-accept and duplicate/
out-of-order races converge. Open/click tracking is disabled in this cutover
pending separate privacy approval.

Before SES submission the canonical command checks `email_suppressions`. An
active entry produces `suppressed` without contacting SES. AWS remains the
enforcement source; a reconciliation command/runbook compares AWS suppression
with the local projection and alerts on drift. Removal is a privileged audited
two-stage operation (fix/confirm address, remove in AWS, then release locally),
never a side effect of opening or resending from Users.

The provider ingress is a new `ses-email-events` Edge Function. A minutely cron
invokes its authenticated `/poll` mode; it reads the SQS queue, unwraps SNS,
validates a strict size/schema allowlist, derives a stable provider event ID,
records each recipient event idempotently, and deletes the SQS message only
after all normalized events commit. Partial batches delete only committed
messages. Correlation uses `attempt_id`, then `delivery_id`, then SES Message ID.
Unmatched events are retained only as bounded non-PII diagnostics and alert
operators. SQS uses encryption at rest, TLS-only topic/queue policies, a
visibility timeout longer than the poller, bounded retention/redrive, long
polling, and no payload logging; SNS envelope mode is fixed and fixture-tested.

### Status vocabulary shown to admins

| Canonical status | Czech UI meaning |
|---|---|
| `prepared` / `submitting` | Připraveno / odesílá se |
| `prepared_abandoned` | Připraveno, ale odeslání nebylo zahájeno; vyžaduje nové vystavení tajného údaje |
| `accepted` | Přijato SES; doručení zatím nepotvrzeno |
| `delayed` | Dočasně zdrženo u doručování |
| `delivered` | Předáno serveru příjemce; Inbox není potvrzen |
| `soft_bounce` | Nedoručeno po vyčerpání dočasných pokusů |
| `hard_bounce` | Trvale nedoručitelné |
| `complaint` | Označeno jako spam / stížnost |
| `rejected` / `rendering_failed` | SES zprávu neodeslalo |
| `failed` | Festapp nedokázal zprávu předat SES |
| `suppressed` | Neodesláno: adresa je na aktivním seznamu potlačení |
| `submission_unknown` | Výsledek předání SES není znám; neposílat slepě znovu |
| `legacy_accepted` | Historicky zaznamenané odeslání bez SES důkazu |

### Invariants

1. No application-owned email reaches an external transport without a durable
   `email_deliveries` intent created first.
2. Every SES request contains one recipient, the configuration set, delivery
   and attempt UUID tags, and non-PII scope/type tags.
3. A successful call means SES returned a Message ID and Festapp persisted it;
   it does not mean recipient delivery.
4. Event ingestion is at-least-once and idempotent; repeated/out-of-order events
   cannot regress the current projection or duplicate counters.
5. User history is linked only by `recipient_user` written by the producer.
6. Occasion readers see only deliveries for that occasion and users in it;
   organization-only self-service security activity is not leaked to event
   editors.
7. Delivery records contain no body, subject, substitutions, attachments,
   token, password/code, raw SNS/SES payload, IP address, or user agent.
8. A hard bounce or complaint is visible immediately and additionally reflected
   in SES suppression configuration; the UI never labels missing feedback as
   “not spam”.
9. Producer-specific scheduling/domain state changes only after `accepted` is
   persisted, and it references the canonical delivery ID where useful.
10. No SMTP transport, fallback, dual write, or old delivery flag remains after
    cutover.
11. Credential/account mutation and delivery-intent creation are transactionally
    coupled; no plaintext password, code or reset/deletion token is stored in the
    delivery system. Password-reset tokens are hashed, expiring and single-use.
12. Current-address suppression and historical message evidence are separate:
    changing an address does not erase history or permanently poison the user.

### Entry points and forbidden bypasses

- All nine current producer groups call only `deliverEmail`.
- `ses-email-events` is the only provider-event ingress and calls only the
  service-only event-record command.
- Flutter reads only `get_occasion_email_delivery_summary`,
  `get_user_email_delivery_history`, and `get_email_delivery_health`; tables
  have RLS enabled and no direct `anon`/`authenticated` DML grants. Summary
  status follows roster visibility; address snapshots, provider reasons/IDs,
  history detail and health require manage-users rights.
- Forbidden: direct `fetch` to SES from producers, Nodemailer/SMTP, direct inserts
  from clients, matching users by email, writing old JSON flags, raw event/body
  persistence, and silent resend from `submission_unknown`.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** Use SES v2 JSON API, not SES SMTP. It provides an explicit Message ID,
  configuration set, tags, and a testable HTTP/SigV4 boundary.
- **D2:** Use one canonical transport/audit owner with two upstream invocation
  styles: immediate security/account sends and the existing durable order task
  queue. This is one delivery implementation, not two transports.
- **D3:** Send one recipient per SES call and require explicit `recipient_user`
  whenever a producer operates on a user. No address-based attribution.
- **D4:** SNS -> standard SQS -> redrive DLQ is the event buffer. EventBridge's
  documented direct SES delivery is best effort and is not sufficient as the
  sole audit path.
- **D5:** Start audit before the external call and fail closed if that write
  fails. Ambiguous network outcomes stop in `submission_unknown`.
- **D6:** Keep a normalized event timeline plus current projection. A single
  mutable status would lose evidence and mishandle late complaint events.
- **D7:** Keep `mark_payment_reminder_sent` as scheduling state. Replace the
  invitation/app-links/order-history evidence flags with canonical delivery
  queries.
- **D8:** Users grid receives one set-based summary request and lazy paginated
  history; do not enlarge the existing roster payload or add per-user queries.
- **D9:** Surface exact provider meaning and limitations in tooltips. Aggregate
  reputation/inbox-placement analysis belongs in SES VDM/operations, not a
  fabricated per-user field.
- **D10:** Enable SES suppression for `BOUNCE` and `COMPLAINT`, project it
  locally, and preserve normalized evidence. The production preflight must
  prove either one Festapp tenant per AWS account or configure SES tenant-level
  suppression per organization; silently sharing account-level suppression
  across independent organizations is forbidden.
- **D11:** Preserve user-attributable evidence for 180 days by default. At expiry,
  delete provider events and direct security-email rows; for order/domain rows
  still required by the owning entity's retention, null recipient user/address,
  sender/reply-to and provider IDs and retain only delivery UUID, kind, scope,
  source reference, accepted timestamp and non-PII state/aggregate. The exact
  production duration and source-record retention are rollout decisions recorded
  in config/runbook, not hard-coded throughout code.
  Active suppression projections are not deleted on this timer: retain them only
  while the matching AWS suppression is active, then preserve a minimal audited
  release fact under the approved privacy policy. Account deletion explicitly
  reconciles local identity/address data and the chosen AWS retention/removal
  rule instead of assuming third-party state vanished.
- **D12:** Do not enable SES Open/Click tracking in the initial cutover. Its
  privacy and accuracy trade-offs require a separately approved follow-up.
- **D13:** Keep the client-facing Users summary privacy-minimal: latest delivery
  plus latest still-actionable issue for the user's current effective address.
  Full address snapshots/provider details require manage-users rights.
- **D14:** Replace the raw password-reset-token path as part of this cutover.
  Existing raw reset links are deliberately invalidated at contraction; there
  is no compatibility fallback for a credential-bearing legacy contract.

### Assumptions

- **A1:** `DEFAULT_EMAIL` is or will be under an SES-verified Festapp identity in
  one chosen AWS region. If false, production cutover stops before traffic.
- **A2:** Product/legal accepts the default 180-day user-attributable evidence
  window and the owning order/account retention rules define how long an
  anonymized source receipt survives. If either differs, change the retention
  config/test/runbook before rollout; schema and UI do not depend on the exact
  duration.
- **A3:** Legacy `queue_emails` scheduling semantics remain in scope only where
  needed to link/delete a task after canonical SES acceptance. A broader outbox
  redesign is not necessary for the SES cutover.

### Blockers

- **B1:** Production AWS account/region, SES production access, verified sender
  identity, DKIM/SPF/DMARC/custom MAIL FROM choice, IAM credentials/workload,
  configuration set, SNS topic, SQS queue/DLQ, queue policies, suppression
  settings, alarms, and optional VDM incur external changes and require separate
  authority.
- **B2:** Applying the forward migration, setting Supabase secrets, installing
  cron, deploying functions/app, sending canaries, switching traffic, and
  deleting production SMTP secrets require a separately authorized release.
- **B3:** Production activation is blocked until ownership proves the chosen
  AWS account/region and suppression scope, and product/legal records the
  retention/anonymization rule. The implementation may use configurable
  180-day defaults, but the release cannot silently assume either decision.

## Deletion ledger

| Artifact | Current role | Final action | Removal proof |
|---|---|---|---|
| Nodemailer import/transport in `_shared/emailDelivery.ts` | SMTP transport | Replace with the canonical SES sender; delete dependency/import/config branches. | `rg -i 'nodemailer|createTransport|sendMail' supabase/functions` has no transport matches. |
| `SMTP_HOSTNAME`, `SMTP_USER_NAME`, `SMTP_USER_PASSWORD`, `SMTP_PORT`, `SMTP_SECURE` | SMTP configuration | Remove from code, setup docs, deployed secrets after SES rollback gate closes. | Repository search plus production secrets inventory. |
| `public.log_emails` | Accepted-only log | Copy to `email_deliveries` as unlinked `legacy_accepted`, compare counts, then drop table/sequence/FKs/grants/cleanup references. | Migration assertions and `rg 'log_emails'` limited to applied history/explicit migration commentary. |
| `occasion_users.data.is_invited` | Invite accepted flag | Replace resend warning/column with delivery history; remove writes/read/model key and strip key from rows. | SQL assertion plus `rg 'is_invited|data_isInvited'` absence outside applied history. |
| `occasion_users.data.app_links_sent` and `mark_app_links_sent` | App-link accepted flag | Replace with canonical accepted delivery query; drop function/tests/model key and strip JSON key. | SQL/catalog assertion and focused search. |
| `orders_history.data.is_sent_to_customer` and `add_sent_to_customer_flag` | Previous emailed-order snapshot marker | Link delivery to `order_history` source and query latest accepted source; strip key/drop function after caller migration. | Order email tests and focused search. |
| Old `EmailLog`, `logEmail`, and `{templateId, logged}` contract | Best-effort post-send logging | Replace with required delivery ID/status/provider ID result. | Deno contract tests and TypeScript search. |
| SMTP-specific stable RFC `messageId` assumption | Duplicate mitigation | Replace with delivery idempotency key + SES tag/provider ID; do not claim SES preserves the supplied RFC ID. | Send request test asserts configuration set/tags and no legacy field. |
| Raw `user_reset_token`, direct insert/delete, and legacy reset RPC contract | Reusable plaintext password-reset bearer token with no canonical delivery coupling | Replace with a hashed, expiring, single-use reset-request command transactionally linked to a delivery; invalidate outstanding raw links and drop old table/functions/tests/docs. | Migration/SQL/Deno security tests and catalog/search absence. |
| `set_account_deletion_email_state` as separate email truth | Account-deletion request boolean/state updated after send | Store canonical `email_delivery_id` on the request and derive accepted evidence from that row; remove duplicate email-state command while retaining the domain workflow. | Account-deletion integration tests and catalog search. |
| Client-provided custom email template/body/`from` | Mutable content crosses the trust boundary | Send template ID/code and allowlisted substitutions; server resolves content/address and restricts sender. A separate privileged template-test contract may send only under documented limits. | Deno auth/content validation tests and caller search. |
| Broad grants on `queue_emails` and queue RPCs | Upstream scheduling surface | Revoke `PUBLIC`/`anon`/`authenticated`; service-only claim/release/dead-letter operations with explicit checks, stable delivery ID and retry timing. | Grant/catalog assertions. |
| UI `INVITED` / `APP_LINKS_SENT` columns and resend logic | Boolean evidence | Replace with latest delivery status/history. | Flutter widget/model tests and search. |
| Docs saying “email sent” after SMTP acceptance | Misleading behavior | Rewrite Edge Function, Users, setup, database, and runbook docs with SES semantics. | Focused docs search. |

Intentional survivors:

- `queue_emails`, its claim/release functions, and minutely order scheduler remain
  an upstream work scheduler. Its task is removed only after canonical SES
  acceptance is persisted; it contains no alternate transport or final evidence.
  The queue is hardened with stable command/idempotency ID, `next_attempt_at`,
  bounded exponential backoff, attempt cap/dead state, last safe error and
  canonical delivery link. Post-actions are idempotent, so a retry after SES
  acceptance reuses the receipt and cannot duplicate mail.
- `mark_payment_reminder_sent` remains a domain anti-repeat marker, not a
  deliverability claim, and is called after canonical `accepted`.
- Applied migration history keeps factual old strings; absence proof excludes
  immutable historical migrations while requiring current source/baseline/docs
  to use the new contract.

## Implementation waves

### Wave 1 — SES/AWS contract and runbook are reproducible

**Goal**

Define the exact external boundary before application traffic depends on it.

**Changes**

- Add `docs/runbooks/ses-email-delivery.md` with AWS region/account ownership,
  sender identity, DKIM/SPF/DMARC/custom MAIL FROM checks, sandbox/production
  status, configuration-set event types, SNS/SQS/DLQ topology, redrive policy,
  account/tenant suppression decision, local reconciliation/removal procedure,
  CloudWatch alarms, canary addresses, rollback gate, privacy/retention matrix,
  and secret rotation/removal.
- Define task-scoped secrets: `AWS_SES_REGION`, `AWS_SES_ACCESS_KEY_ID`,
  `AWS_SES_SECRET_ACCESS_KEY`, `SES_CONFIGURATION_SET`,
  `SES_EVENT_QUEUE_URL`, and a poller auth mechanism. Keep them out of
  `automation/project.conf` and logs.
- IAM sender policy grants only the required SES v2 send action on the verified
  identity/configuration set; event consumer policy grants only SQS receive,
  delete, and queue-attribute actions on the one queue. Separate credentials if
  deployment topology permits.
- Configure events `Send`, `Delivery`, `DeliveryDelay`, `Bounce`, `Complaint`,
  `Reject`, and `RenderingFailure`. Do not configure `Open` or `Click` in this
  cutover.
- Pin identity, custom MAIL FROM, configuration set, SNS topic, queues and
  credentials to the same named AWS region. Enforce TLS and encryption at rest;
  allow only the SNS topic to enqueue; set visibility timeout above the poller
  runtime, bounded source/DLQ retention and max receives; document whether raw
  SNS delivery is disabled and test that exact envelope.

**Migration/deletion**

- None locally. Production resource creation remains a separately authorized
  action.

**Failure and compatibility**

- Do not point the SES configuration set at production traffic yet. SQS keeps
  events during deploy/restarts; DLQ and age alarms make consumer failure
  visible.

**Validation**

- Read-only AWS CLI inventory in the authorized account verifies identity,
  DKIM, production access, configuration set/event destination, queue/DLQ,
  policies, suppression settings, and alarms. Do not send a paid/prod canary yet.

**Exit condition**

- The runbook names every resource/secret and a read-only preflight can prove
  that the target topology is complete without exposing secret values.

### Wave 2 — Canonical delivery ledger and secure commands exist

**Goal**

Gain durable, permissioned evidence before introducing SES side effects.

**Changes**

- Add a forward migration under `supabase/migrations/` and mirror current schema
  in `database/tables/tables.sql` for `email_deliveries`,
  `email_delivery_attempts`, `email_delivery_events`, `email_suppressions`, and
  `email_delivery_runtime_state`, with checks/indexes/FKs/RLS/grants and unique
  delivery/idempotency, attempt/provider and event identities.
- Add explicit functions under `database/functions/emails/`:
  `email_delivery_begin`, `email_delivery_claim_attempt`,
  `email_delivery_accept_attempt`, `email_delivery_fail_attempt`,
  `email_delivery_record_event`, suppression/reconciliation projection commands,
  runtime heartbeat, user-anonymization and retention commands.
  Service commands verify `auth.role() = 'service_role'`; read commands introduced
  later use occasion rights.
- Implement claim leases and the explicit transition matrix in SQL with row
  locking so concurrent begin/send, accepted completion and provider events
  converge. An event correlated by attempt/delivery tag may fill a Message ID
  and reconcile `submission_unknown`.
- Index `(occasion, recipient_user, created_at desc, id desc)`,
  provider Message ID, attempt claims, suppression lookup, event uniqueness,
  health and retention timestamps. Never add a per-row trigger.
- Add `database/tests/emails/email_delivery_contract_test.sql` covering service
  authorization, two concurrent claims, stale leases, safe/unsafe retries,
  idempotent begin/accept/event, event-before-accept and explicit out-of-order
  transitions, suppression, multi-recipient rejection, unmatched events,
  tenant/occasion scope, anonymization and retention minimization.

**Migration/deletion**

- Expansion creates only new structures. Do not copy `log_emails` yet: SMTP
  remains live until the atomic producer cutover, so an early snapshot would
  miss later rows. The one idempotent legacy copy occurs in Wave 6 after the
  last SMTP send and keys rows by unique `legacy_log_id`.

**Failure and compatibility**

- Schema expansion is deployable before any sender. RLS plus revoked direct
  grants keeps addresses/events private.
- Event metadata is an allowlist (bounce type/subtype, diagnostic category,
  remote response code where safe), capped in length. No raw JSON column.

**Validation**

- `node web_client/scripts/run_db_tests.js database/tests/emails/email_delivery_contract_test.sql`
  proves state, concurrency/idempotency, authorization, suppression and privacy
  contracts in a disposable/targeted database. Legacy-copy counts are tested
  with the Wave 6 contraction migration.

**Exit condition**

- A database-only test can create a delivery, apply duplicate and out-of-order
  events, and observe one correct current state with a complete event timeline.

### Wave 3 — Build the SES boundary and event ingress without activating it

**Goal**

Build and test the new internals without exposing a second runtime transport.
This wave is not deployed as an outbound sender; activation and deletion happen
atomically with all callers in Wave 4.

**Changes**

- Add `_shared/awsSigV4.ts`/`sesTransport.ts` (or the smallest equivalent) based
  on the Mendelio implementation, but with Festapp-specific secret names,
  single-recipient enforcement, configuration set, tags, attachments, Reply-To,
  text+HTML bodies, response-size limits, timeout classification, and redacted
  errors.
- Add the internal renderer/claim/send/accept composition behind injected
  dependencies, but do not register it as an alternate exported transport.
  Validate allowed sender identity/display name, Reply-To/header injection,
  exact single recipient, body/substitution and attachment count/per-file/
  aggregate limits before the audit/send boundary.
- Add `ses-email-events/{index.ts,events.ts,sqs.ts}`. Parse SNS-wrapped
  configuration-set events, all recipient variants, tags, timestamps, bounce
  types/subtypes, complaint, delay, delivery, reject/render failure, and local
  suppression projection. Enforce body/count limits and safe logging.
- Extend `database/functions/seed/crons.sql` with a separately named minutely
  poller invocation using the established expiring request-secret pattern; make
  `setup_crons` replacement idempotent and document reinstallation.
- Add Deno tests for SigV4 request shape (without real AWS), Message ID handling,
  audit-before-send, audit failure, known rejection, ambiguous timeout,
  no-blind-retry, duplicate/out-of-order SNS/SQS events, malformed payloads,
  multi-recipient expansion, and delete-after-commit.

**Migration/deletion**

- No legacy deletion occurs while producers still use the old contract. The SES
  sender module may exist unused, but there is never a runtime selector,
  `USE_SES`, fallback, dual send or dual write. Wave 3 and Wave 4 outbound changes
  are released as one unit.

**Failure and compatibility**

- Before rollout, local tests inject fake SES/SQS and database dependencies; no
  paid/provider call occurs.
- If SES accepts but database completion fails, leave `submission_unknown`; tags
  let a later provider event reconcile. Never retry automatically merely because
  the caller received 5xx.

**Validation**

- `deno test --allow-env --allow-net --allow-read` on the focused shared
  delivery and `ses-email-events` test files proves request/event contracts
  without contacting AWS.

**Exit condition**

- The unregistered composition proves a fake SES Message ID and fake SQS event
  produce one accepted attempt then delivered evidence. Production reachability
  still points only to SMTP until the Wave 4 atomic cutover.

### Wave 4 — Every producer supplies canonical identity and source metadata

**Goal**

Move all producers without losing authorization, security, attachments, or
domain post-actions.

**Changes**

- Every intentional UI/web action creates one UUID `commandId` outside its
  transport retry loop and reuses it on retries; a deliberate resend creates a
  new UUID. Update Flutter and web callers, including
  `UsersTabHelper.processInvites`, so their existing retry loops cannot rotate a
  credential or submit multiple SES messages.
- `register`: replace the create-then-send seam with one SQL command that creates
  the user and delivery intent transactionally, returns the explicit user and
  delivery IDs, and never persists the plaintext code/substitutions.
- `send-sign-in-code`: add a locked SQL issuance command that performs the
  permission check, credential rotation and delivery-intent creation in one
  transaction; link user+occasion and record `SIGN_IN_CODE`. If the Edge process
  dies before submission, mark the intent `prepared_abandoned`; because the
  plaintext code is not persisted, recovery is an intentional new issuance,
  never an automatic send. Stop mutating `is_invited`.
- `send-app-links`: link user+occasion and record `APP_LINKS`; remove `markSent`.
- `send-reset-password-link`: replace direct raw `user_reset_token` insert/delete
  with an opaque request row containing only a token hash, expiry, consumed time,
  command ID and delivery ID. Create request+intent transactionally. The reset
  RPC hashes the presented token and atomically consumes it while changing the
  password. Invalidate outstanding raw-token links at cutover and remove the old
  table/functions from Flutter/web/server callers.
- Account-deletion request: attach canonical `email_delivery_id` to the existing
  hashed request and derive accepted evidence from it instead of
  `set_account_deletion_email_state`. Completion mail prepares its recipient
  snapshot/source before destructive cleanup and uses nullable
  `recipient_user`; it is not exposed in occasion Users history. User deletion
  explicitly nulls/anonymizes delivery identity without breaking FKs, and the
  runbook records how AWS suppression personal data is retained or removed.
- `send-custom-email`: accept template ID/code, command ID, target user/address
  and allowlisted substitutions only. Re-resolve the stored template/wrapper and
  effective user address server-side after authorization. Address-only sends are
  separately audited with `recipient_user = null`. If unsaved-template testing
  is required, expose a distinct privileged `TEMPLATE_TEST` contract with
  caller/recipient, sender, content and size restrictions; never smuggle it
  through the user-send contract.
- `send-email`: link order/history/payment source IDs and any exact user known
  from ticket/order ownership. After `accepted`, delete/release the upstream task
  and update reminder scheduling. Query canonical accepted deliveries instead
  of `is_sent_to_customer` when building update diffs.
- `send-tickets`: link order and exact user only where ownership is explicit;
  preserve PDF attachment behavior and do not infer a user from request email.
- Harden `queue_emails` and its RPC grants to service-only. Store stable command/
  delivery ID, next attempt time, bounded backoff, attempt cap/dead state and
  safe last error. A retry after accepted SES reuses the canonical receipt, then
  retries only idempotent post-actions/task deletion.
- Atomically switch `_shared/emailDelivery.ts` and every producer to the new
  contract, then delete Nodemailer and all SMTP branches/dependencies in the same
  release unit. There is no deployable intermediate caller/owner mismatch.
- Update producer tests for canonical input/result and post-action ordering.

**Migration/deletion**

- Remove `mark_app_links_sent`, `add_sent_to_customer_flag`, all writes to the two
  user JSON flags, and the order-history email marker once all readers move.
- Remove raw reset-token and duplicate account-deletion-email-state contracts,
  old custom-email body/From inputs, and broad queue grants.
- Strip `is_invited`, `app_links_sent`, and `is_sent_to_customer` keys in the
  forward migration's contraction step; do not create synthetic delivery rows.

**Failure and compatibility**

- Credential mutation and delivery intent commit together. A post-commit process
  failure has an explicit `prepared_abandoned`/reissue path and returns a stable
  non-enumerating error; an ambiguous SES outcome never rotates credentials or
  triggers an automatic duplicate.
- Queue tasks are removed only after canonical `accepted` commits. A later
  bounce/complaint updates evidence but does not replay the domain task.

**Validation**

- Focused Deno producer suites plus order email SQL tests prove all callers pass
  user/source/idempotency metadata, post-actions happen after acceptance, and no
  caller imports/constructs SES directly.

**Exit condition**

- A reachability search lists every application producer under `deliverEmail`,
  each produced row has the expected source/scope, and old flags/functions have
  no live reader/writer.

### Wave 5 — Users admin exposes accurate summary and history

**Goal**

Make delivery evidence useful without destabilizing the roster bundle.

**Changes**

- Add `get_occasion_email_delivery_summary(p_occasion)` returning, per visible
  user, the latest delivery plus the latest still-actionable issue for the
  current effective delivery address (active suppression, complaint, hard
  bounce, unresolved unknown/failure/delay), last accepted/delivered timestamps
  and compact status counts. A new successful mail must not hide an unresolved
  prior problem. Resolve the current address server-side; do not add it to the
  roster payload. Use one set-based query, never N+1.
- Add `get_user_email_delivery_history(p_occasion, p_user, p_before_at,
  p_before_id, p_limit)` with keyset pagination, strict limit, membership/scope
  checks. Existing roster viewers receive safe status only; full actual address
  snapshot, safe provider reason and Message ID require the existing
  manage-users right. Order-view-only rights do not expose user email detail.
- Add `get_email_delivery_health(p_occasion)` for manage-users admins: occasion
  accepted/delivered/bounce/complaint/suppressed counts and rates, oldest
  prepared/submitting/unknown item, queue dead/backlog count, poller heartbeat,
  event freshness and unmatched count. This is a compact Users-page health
  banner, not a second analytics system; AWS/VDM remains the reputation console.
- Add a small Dart delivery-summary/history model and DbUsers methods. Load the
  summary once alongside/after the roster and map by UUID; do not change the
  roster SQL/client-sync projection.
- Add `UserColumns.EMAIL_DELIVERY_STATUS` as read-only with localized semantic
  label, icon/tone, timestamp tooltip, and an accessible detail action. Detail
  lists kind, attempt/provider status timeline, current-address suppression,
  safe reason, and SES Message ID only for authorized diagnostics.
- Replace invitation/app-link resend warnings with queries against matching
  accepted/delivered canonical kinds. A complaint/bounce is visible before an
  intentional resend; no automatic suppression override is offered.
- Add Czech/English strings through the repository's string pattern. Tooltips
  explicitly distinguish SES acceptance, recipient-server delivery, Inbox
  uncertainty, complaint evidence, Gmail complaint blind spot, suppression and
  event-pipeline health. There is no open/read indicator in this cutover.
- Add Flutter tests for status mapping, unknown/legacy states, accessible detail,
  pagination command, scope, and refreshed status after an admin send. Test
  semantic state, not localized prose.

**Migration/deletion**

- Remove `INVITED`, `APP_LINKS_SENT`, model serialization, grid fields, helper
  checks, translation keys, and obsolete tests.

**Failure and compatibility**

- A summary/history/health RPC failure must show “stav nedostupný”, not
  “neodesláno”. A stale heartbeat marks the email system degraded and prevents
  `accepted` rows from being presented as if provider feedback were current.
  The roster itself remains usable.
- Users with no user-linked deliveries show “bez záznamu”; address-only or
  organization-only events are intentionally absent.

**Validation**

- Targeted SQL read-contract tests and
  `fvm flutter test test/components/users/occasion_user_grid_test.dart` plus new
  delivery-status widget/model tests prove permissions, set-based mapping,
  truthful states, and lazy history.

**Exit condition**

- For a fixture user, duplicate/out-of-order SES events produce one latest grid
  state and a complete ordered history; another occasion's editor cannot read it.

### Wave 6 — Production cutover, evidence, and contract contraction

**Goal**

Activate SES, prove real event flow, and remove every obsolete alternative.

**Changes**

- Resolve the live Supabase project from `automation/project.conf`; verify the
  configured occasion before any write/deploy.
- Apply schema expansion and functions, deploy event ingress, install/reinstall
  cron, set task-scoped AWS/SES secrets, and verify event consumer health before
  deploying producers/UI.
- Register `ses-email-events` consistently in `supabase/config.toml` and the
  hard-coded deploy list in
  `lib/components/app_management/instance_install_page.dart`. Choose one explicit
  HTTP auth contract: if gateway JWT verification is disabled for the internal
  poller, require and constant-time-verify the established expiring request
  secret before any SQS/AWS action. Update/re-test
  `automation/check_client_sync_registry.mjs` because `deliverEmail` remains a
  registered external-effect boundary.
- Send authorized SES mailbox-simulator canaries for success, bounce, complaint,
  and out-of-office/delay where supported. Confirm delivery UUID tag, Message ID,
  SQS consumption, idempotent event rows, current projection, UI state, DLQ zero,
  and no sensitive logs.
- Deploy all producer functions in one bounded cutover, then Flutter/web admin.
  Observe SES send/delivery/bounce/complaint, SQS age/DLQ, unmatched events,
  `submission_unknown`, local failure, and queue backlog.
- After the observation gate, run the contraction migration: copy each
  `log_emails` row exactly once as `legacy_accepted` using unique
  `legacy_log_id`, assert source/target counts in the same transaction, then
  drop `log_emails`; strip old JSON markers; invalidate/drop raw reset tokens;
  drop old functions,
  grants, sequence/FKs; update `delete_occasion`; regenerate/refresh baseline as
  required by repository practice.
- Remove SMTP production secrets only after the SES rollback gate closes. Update
  `docs/backend/edge_functions.md`, `docs/architecture/database.md`, Users README,
  `docs/setup/howto.md`, `supabase/functions/_shared/README.md`,
  `lib/components/email_templates/README.md`, and the SES runbook. Keep local
  Supabase Auth/Inbucket config and inbound `bank-mail-parser` explicitly named
  as intentional non-application-email boundaries.

**Migration/deletion**

- Complete every deletion-ledger item. No rollback path re-enables SMTP or
  recreates old flags/logs.

**Failure and compatibility**

- Before producer activation, rollback means leave schema/events idle and deploy
  the prior application. After real SES sends start, rollback may disable new
  sends and keep consuming events, but must not restore SMTP dual-send or drop
  evidence. Fix-forward the sender while preserving the ledger.
- If event ingress fails, SES sending may continue only within a short, monitored
  SQS retention window; queue-age/DLQ alarms trigger stop-the-line before events
  expire.

**Validation**

- Repository standard targeted batch: database email/user/order tests, focused
  Deno delivery/provider/producer tests, focused Flutter Users tests, and static
  absence searches.
- Include a production-baseline migration test covering one-time legacy-copy
  counts, old-token invalidation, account/occasion deletion FKs/anonymization,
  grants and the final catalog. Exercise both Flutter and
  `web_client/src/services/auth_service.js` password-reset callers, custom email,
  orders/tickets, `synchronize-orders`, cron and deploy registries.
- Authorized production observation: SES/SQS/DB/UI canary matrix, queue age/DLQ,
  unmatched-event count, and sender reputation/suppression settings.

**Exit condition**

- Every current producer creates a canonical row and uses SES; canaries traverse
  provider events into the Users UI; all deletion-ledger searches/catalog checks
  pass; SMTP secrets and transport are gone; operational state is recorded as
  applied rather than merely planned.

## Rollout and rollback

1. Provision and read-only verify AWS resources without routing traffic.
2. Deploy database expansion and event consumer; enable event destination and
   prove queue polling with no production send dependency.
3. Deploy canonical SES sender and all producers in one release window. There is
   no transport feature flag or dual write.
4. Run simulator/canary matrix and observe at least one full event-consumer
   interval plus alarms/queue health before enabling ordinary operator sends.
5. Deploy Users UI and verify scoped status/history.
6. Contract old data/functions/config after the observation gate; then remove
   SMTP secrets.

Rollback before step 3 can deploy previous code because no production email used
SES. Rollback after step 3 stops affected sends and deploys a fixed SES version;
the event consumer and ledger remain live. Restoring SMTP, dual sending, or old
boolean/log evidence is explicitly forbidden because it would recreate split
truth and can duplicate messages.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Service-only writes and scoped reads | SQL contract tests | `node web_client/scripts/run_db_tests.js database/tests/emails/email_delivery_contract_test.sql` |
| Monotonic idempotent event reduction | SQL duplicate/out-of-order fixtures | Same targeted SQL test, including complaint after delivery and event before accept completion. |
| SES request contract without paid call | Injected Deno transport tests | Focused `deno test --allow-env --allow-net --allow-read ...` paths. |
| Event buffering/parser safety | SNS/SQS fixture tests | Duplicate, malformed, oversized, multi-recipient, retry, and delete-after-commit cases. |
| All producers use the owner | Static reachability + producer unit tests | `rg` imports/SES/SMTP plus focused producer suites. |
| User attribution and no cross-occasion leak | SQL summary/history tests | Authorized current occasion, forbidden other occasion, address-sharing fixtures. |
| Grid performance and behavior | Flutter model/widget tests | Focused Users grid/detail tests; assert one summary call and lazy history. |
| Real provider flow | Authorized simulator canaries | Success/bounce/complaint outcomes correlate by delivery UUID and Message ID; SQS/DLQ healthy. |
| Legacy absence | Catalog and repository search | No current `log_emails`, SMTP, Nodemailer, invite/app-link/order email marker, fallback, or dual-send references. |
| Privacy minimization | Fixture/log inspection | No body, subject, code/token, attachment, raw event, IP/user-agent in DB or function logs. |

Do not run the full release suite while implementing individual waves. At the
final standard gate, batch only the owning SQL, Deno, Flutter, and automation
checks; production canaries and deployment remain separately authorized.

## Definition of complete

- [ ] Every intended email producer reaches `deliverEmail`, and only its SES v2
      transport can make an outbound email side effect.
- [ ] Every send has durable pre-send intent, a stable idempotency key, one
      recipient, explicit scope/source, and explicit user attribution when known.
- [ ] SES configuration set/tags, SNS/SQS/DLQ, poller, normalized events,
      suppression, alarms, and retention are applied and observed.
- [ ] Prepared/abandoned, accepted, delivered, delay, exhausted bounce, hard
      bounce, complaint, suppression, reject/render failure, local failure and
      ambiguous outcome are idempotently represented with truthful UI semantics;
      Open/Click tracking is absent from the initial cutover.
- [ ] Users grid loads one compact scoped summary and lazy paginated history
      without altering the fragile roster bundle or adding N+1 calls.
- [ ] Delivery tables and commands enforce service writes and occasion-scoped
      reads; no address-based identity inference or sensitive content persists.
- [ ] `log_emails`, SMTP/Nodemailer/config, user delivery flags, duplicate order
      marker/function, obsolete tests/docs, and compatibility branches are gone.
- [ ] `queue_emails` and reminder state survive only in their documented upstream
      scheduling roles and reference canonical acceptance where required.
- [ ] Targeted standard validation passes and production migration/deploy state
      is explicitly recorded.
- [ ] No UI or documentation claims exact Inbox/Spam placement from absent SES
      evidence.

## Residual risks

- Recipient mail servers can accept a message and still filter it; no ordinary
  per-message provider event proves Inbox placement. VDM and reputation metrics
  are operational signals, not a substitute for the UI contract.
- Gmail does not return normal complaint feedback to SES, so complaint absence is
  not proof that a Gmail message avoided spam.
- SES `SendEmail` has an irreducible ambiguous timeout window. Delivery tags and
  event reconciliation reduce uncertainty; avoiding blind retry prevents a
  worse duplicate-send failure.
- Provider events are asynchronous. The grid may show `accepted` until SQS is
  consumed; queue-age and DLQ alarms bound that uncertainty.
- Historical SMTP rows/booleans cannot be reconstructed into provider truth and
  will remain visibly labeled legacy or absent after the documented migration.
