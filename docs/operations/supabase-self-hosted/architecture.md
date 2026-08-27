# Canonical self-hosted Supabase architecture

The final production authority is one pinned Supabase stack, one PostgreSQL/Auth/
Storage authority and one public endpoint: `https://api.festapp.net`.

`default` (`kjdpmixlnhntmxjedpxh`) is the canonical data base. Source `a`
(`lwfpdjxsdmkfyrzqbrlk`) is imported only through staging and versioned mapping
rules. An organization is identified by `(source_project, organization_id)`.

During a bounded hybrid phase, `default` tenants write only to the canonical
target and uncut `a` tenants write only to cloud `a`. Every `a` mutation must use
an explicit RPC that appends to the same-transaction journal. A host-local
forwarder may replay durable state into effect-free, idempotent target RPCs.
Client dual-write, reverse sync and persistent application triggers are forbidden.

Production cloud projects remain read-only for the approved retention period.
Deleting them always requires a separate explicit approval.
