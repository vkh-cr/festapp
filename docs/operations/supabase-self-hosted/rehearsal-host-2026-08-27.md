# Hetzner rehearsal host — verified state on 2026-08-27

The first real Festapp self-hosted Supabase rehearsal host is online in the same
Hetzner project/account used by Mendelio. This is an isolated target for restore
and merge rehearsals, not the production cutover.

## Provisioned foundation

| Item | Verified value |
|---|---|
| Host | `festapp-supabase-rehearsal-01` |
| Hetzner class | CAX11 ARM, 2 shared vCPU, 4 GB RAM, 40 GB local disk |
| Location / OS | NBG1 / Ubuntu 26.04.1 LTS, `aarch64` |
| Protection | Hetzner delete + rebuild protection; Terraform `prevent_destroy` |
| Runtime | Docker 29.7.2, Compose 5.5.0 |
| Supabase | pinned `self-hosted/v0.8.0` commit and 11 ARM64 image digests |
| PostgreSQL | 17.6 |
| Network | SSH restricted to the approved administrator CIDR; gateway only on loopback; no public PostgreSQL |
| Application state | all 11 Compose services healthy; Auth health endpoint answered |

The host successfully pulled and runs each of the 11 declared service digests
on `aarch64`. The separate authenticated Docker Hub registry recheck was blocked
by the anonymous pull limit and therefore remains an explicit pre-production
gate; it is not recorded as passed.

No DNS was changed, no production data or identities were imported, and neither
existing Supabase cloud source was mutated or deleted. Storage remains in the
Supabase architecture for this phase; the existing R2 image-delivery path stays
separate.

## Monthly operating price

The live pricing API in this same Hetzner account returned, including 21% VAT:

- CAX11 server: EUR 7.2479/month
- primary IPv4: EUR 0.605/month
- current rehearsal total: **EUR 7.8529/month**
- optional Hetzner server backup: 20% of server price; total would become
  **EUR 9.30248/month**

Paid Hetzner backups are currently disabled. That is acceptable only for the
empty rehearsal foundation; encrypted off-host PostgreSQL and Storage backups
are mandatory before production data is admitted.

## Capacity interpretation

Immediately after the stack settled, Linux reported 3.7 GiB total RAM, 1.7 GiB
used and approximately 2.0 GiB **available**. Much of the remainder was useful
buffer/cache. There was no swap and the kernel journal contained no OOM kill.
Memory PSI was low at this idle snapshot. Disk usage was 14/38 GiB after image
pulls, leaving 23 GiB.

The `used` column is not a sizing gate. CAX11 remains a rehearsal candidate until
two realistic restore/merge runs measure `MemAvailable`, memory and CPU PSI,
OOM events, load average/run queue, peak connections, p95/p99 latency, WAL growth
and disk headroom. The steady-state acceptance window after each run requires no
OOM kill, at least 15% `MemAvailable`, CPU PSI `some avg60` below 10%, no run
queue above both vCPUs for five continuous minutes, and 15-minute load average
below 2.0. Restore-batch spikes are recorded separately rather than confused
with steady traffic. If those or the application latency/disk gates fail, the
next reviewed option is CAX21; idle cache occupancy alone is not a reason to
resize.

## Next gate

The canonical schema baseline is built from commit `f87dbf47e`: PostgreSQL 17.6,
101 recorded repository migrations, zero Auth users and zero Storage objects.
See `canonical-schema-rehearsal-2026-08-27.md`.

The next step is to inventory this canonical target, reconcile the 2,231 source
catalog differences against it, and prepare the first logical PG15-to-PG17
staging import. Production DNS, credentials and writes remain unchanged until
two successful rehearsals and an explicit cutover approval.
