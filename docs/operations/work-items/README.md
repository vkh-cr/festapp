# Operational work items

This directory is the canonical cross-session registry for work that is approved
or already started but is not operationally complete.

Use it for releases, production migrations, infrastructure cutovers, external
account actions, observation windows and cleanup that must survive a handoff.
Ordinary implementation ideas and unapproved backlog belong in the issue
tracker; architectural and implementation design belongs in `docs/plans`.

## Structure

- `open/` — active, blocked, in-progress or verification-stage work.
- `completed/` — closed operational receipts retained for audit/history.
- [`TEMPLATE.md`](TEMPLATE.md) — required structure for a new work item.

Each work item links to its authoritative plan and evidence instead of copying
their architecture. It owns only live state: fixed point, completed mutations,
next action, blockers, authority gates, rollback identifiers and closure proof.

## Status model

- `ready` — the next bounded action can run immediately.
- `in-progress` — an identified command or rollout is currently running.
- `blocked` — external state or separate authority is required.
- `verification` — implementation is live and only an observation gate remains.
- `completed` — every closure condition is proven; move the file to
  `completed/` and update this index in the same commit.

Do not mark an item complete because code was merged. Production state,
installed-client adoption, legacy contraction and required observation must be
proven when they are part of the outcome.

## Open items

| Work item | Status | Fixed point | Next action |
|---|---|---|---|
| [Image delivery cost cutover](open/image-delivery-cost-cutover-2026-08-24.md) | blocked | `prod/csmostrava2026` at `cbb3fa7425b7c33b2cab1bba4e2ffe8765f5b6cc`, version `0.19.90+440` | Wake the production Windows workstation and let command `1026` produce the signed Android AAB without a Play mutation. |

## Maintenance rules

1. Create an item as soon as approved work gains an external action, production
   mutation, separate authority gate or cross-session blocker.
2. Update the item immediately after every material state change; record IDs and
   hashes, never secrets.
3. Keep exactly one next action. Later steps remain ordered but are not presented
   as concurrently executable.
4. Never use a work item to authorize its own production mutation. Record the
   required authority and the receipt after it is granted and executed.
5. On closure, update authoritative evidence, move the item to `completed/`, and
   remove its row from the open table in one commit.

