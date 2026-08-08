# Execute: canonical SES email delivery and per-user observability

Work in `/Users/miakh/source/festapp`.

Use all applicable repository instructions and `verification: standard` because
this changes production email, authentication-adjacent messages, external
credentials, database contracts, and user-visible operational evidence.

Implement the entire authoritative plan:

`docs/plans/2026-08-07_ses_email_delivery_observability_plan.md`

Read it in full before editing. The outcome is one Amazon SES v2 transport and
one durable logical-delivery/attempt/event ledger, local AWS-suppression
projection and runtime-health signal, with truthful per-user/per-occasion status
and history in the Users admin page. Completion requires both working SES/event
behavior and removal of SMTP/Nodemailer, `log_emails`, raw password-reset-token
storage, duplicate account-deletion email truth, delivery JSON flags, duplicate
order email evidence, obsolete config/tests/docs, and every other item in the
plan's deletion ledger.

Execute waves in dependency order. Do not leave placeholders, SMTP fallbacks,
dual sends/writes, feature flags, address-based user matching, raw email/provider
payload storage, blind retries after ambiguous SES submission, or claims that
`Delivery` proves Inbox placement. Retain `queue_emails` only as the documented
upstream domain scheduler and `mark_payment_reminder_sent` only as anti-repeat
domain state. Treat the Wave 3 SES sender as unregistered internal code until the
Wave 4 atomic caller/owner cutover; never deploy an intermediate contract that
breaks producers or leaves two reachable transports.

The hardening requirements are mandatory: distinguish logical messages from
provider attempts; use locked claim leases and stable command IDs to close
concurrent/retry duplication; transactionally couple credential/reset/account
mutation with delivery intent; hash, expire and single-use reset tokens; enforce
server-owned templates/sender identity; project/reconcile suppression; surface
latest actionable current-address problems and event-pipeline health on Users;
and use the explicit event transition matrix rather than a numeric status rank.
Open/Click tracking is not part of this cutover.

If current repository or AWS evidence invalidates a factual premise, update the
authoritative plan with that evidence and adapt the affected wave without
silently changing the outcome. Run only the validation required by the plan and
repository rules; do not start an independent review or subagent audit unless
explicitly requested.

Do not copy `log_emails` in expansion. Copy it exactly once, idempotently by
legacy row ID, after the last SMTP send and before dropping it in contraction.
Update all reachability/deployment/auth registries named in the plan, including
Flutter and web reset callers, `synchronize-orders`, `supabase/config.toml`, the
instance installer and external-effect registry.

Do not apply production migrations, create/change AWS resources, set/rotate
secrets, install production cron, deploy, send provider canaries, remove live
SMTP secrets, commit, or push without separate authority. At handoff report the
canonical contract, all migrated producers/data/runtime registrations, deleted
legacy artifacts, exact validation results, AWS/Supabase rollout state, and any
remaining blocker or intentional boundary.
