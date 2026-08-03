# Recovery snapshots

Files in this directory are historical, idempotent recovery snapshots captured
from deployed databases after source loss. They are useful for forensics and
disaster recovery, but they are not the canonical source for ongoing changes
and are not a migration stream.

Recovered objects must also have a canonical definition under
`database/tables/`, `database/functions/`, or `database/policies/` before they
are changed by normal development. In particular, the event feedback schema and
RPCs recovered in `2026-06_csmostrava_lost_backend.sql` now live in:

- `database/tables/event_feedback.sql`
- `database/functions/events/*event_feedback*.sql`

Do not edit the historical snapshot to introduce a new behavior. Update the
canonical object and add a normal migration during the implementing release.
