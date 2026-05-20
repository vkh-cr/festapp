# Synchronization Functions & Lifecycle

This directory contains the core logic for the **External Occasion Sync** system
(HTTP-based, no database passwords needed).

## Core Functions

1. **`setup_external_source(source_name, supabase_url, anon_key, cron_schedule)`**
   - **Purpose:** Registers a new external source and **starts the sync job**.
   - **Action:** Stores the Supabase URL and public anon key, creates a `pg_cron`
     job named `sync_job_<source_name>`.
   - **Schedule:** Default is `*/5 * * * *` (Every 5 minutes).

2. **`sync_source_via_http(source_name)`**
   - **Purpose:** The actual sync logic. Calls the remote's `get_sync_occasions`
     RPC via HTTP, upserts local records, and deletes orphans.
   - **Usage:** Called automatically by the cron job. Can be triggered manually
     for debugging.

3. **`get_sync_occasions(p_organization_id, p_unit_id)`**
   - **Purpose:** Public RPC deployed on every source instance. Returns occasion
     data as JSONB for cross-instance synchronization.
   - **Security:** Anon-callable — only exposes already-public data.

4. **`stop_external_source_sync(source_name)`**
   - **Purpose:** Stops the automated sync for a specific source.
   - **Action:** Removes the `pg_cron` job `sync_job_<source_name>`.
   - **Usage:** `SELECT public.stop_external_source_sync('vstupenky_remote');`

5. **`add_sync_map(...)`**
   - **Purpose:** Configures _which_ remote organizations/units to map to
     _which_ local counterparts.

## Lifecycle Management

### Starting a Sync

The sync starts automatically when you call `setup_external_source`.

### Stopping a Sync

To stop the background job (but keep the config):

```sql
SELECT public.stop_external_source_sync('my_source_name');
```

### Restarting/Updating

To change the schedule or anon key, just run `setup_external_source`
again. It gracefully unschedules the old job and schedules the new one.
