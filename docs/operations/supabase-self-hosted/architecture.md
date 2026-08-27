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

The proposed write seam is the existing typed `client_sync_v1` command module.
A Flutter call reaches one explicit domain RPC. Before hybrid activation, that
RPC seam must perform authorization, durable business DML, idempotency receipt,
audit commit and the temporary migration journal append in one PostgreSQL
transaction. Compared with the legacy direct PostgREST sequences this normally
removes round trips and partial-write states.
The migration still requires a rehearsal load test before enabling hybrid mode;
the architecture decision is not a substitute for measured p95/p99 latency.

Cloudflare does not own relational writes. It fronts the public endpoint and
continues to own the existing image/R2 adapter, where globally distributed
object delivery provides actual leverage. A Worker/Hyperdrive database adapter
would be a shallow second interface over the same regional PostgreSQL and could
not make an R2/object write atomic with a relational transaction. Object
storage remains a separately reconciled side effect with checksums and receipts.

Production cloud projects remain read-only for the approved retention period.
Deleting them always requires a separate explicit approval.
