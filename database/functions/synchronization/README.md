# Synchronization Functions & Lifecycle

This directory contains the core logic for the **External Occasion Sync** system
(Postgres-Native).

## Core Functions

1. **`setup_external_source_dblink(source_name, ...)`** (Function B)
   - **Purpose:** Registers a new external source and **starts the sync job**.
   - **Action:** Stores credentials (encrypted) and creates a `pg_cron` job
     named `sync_job_<source_name>`.
   - **Schedule:** Default is `*/5 * * * *` (Every 5 minutes).

2. **`sync_source_via_dblink(source_name)`** (Function A)
   - **Purpose:** The actual sync logic. Connects via dblink, fetches data,
     upserts local records, and deletes orphans.
   - **Usage:** Called automatically by the cron job. Can be triggered manually
     for debugging.

3. **`stop_external_source_sync(source_name)`** (New)
   - **Purpose:** Stops the automated sync for a specific source.
   - **Action:** Removes the `pg_cron` job `sync_job_<source_name>`.
   - **Usage:** `SELECT public.stop_external_source_sync('vstupenky_remote');`

4. **`add_sync_map(...)`**
   - **Purpose:** Configures _which_ remote organizations/units to map to
     _which_ local counterparts.

## Lifecycle Management

### Starting a Sync

The sync starts automatically when you call `setup_external_source_dblink`
(usually via `register_sync_source.js`). It effectively "Ensures State" (Upserts
config + Schedules job).

### Stopping a Sync

To stop the background job (but keep the config):

```sql
SELECT public.stop_external_source_sync('my_source_name');
```

### Restarting/Updating

To change the schedule or password, just run `setup_external_source_dblink`
again. It gracefully unschedules the old job and schedules the new one.
