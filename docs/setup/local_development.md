# Local Development with Supabase

## First-Time Setup

1. Ensure Docker Desktop is running
2. Start local Supabase stack:
   ```bash
   supabase start
   ```
   This will:
   - Pull Docker images (first time only, ~2-3 minutes)
   - Apply all migrations from `supabase/migrations/` (37 files)
   - Create storage buckets (public-files, editor-files, images-temp)
   - Run seed data from `supabase/seed.sql` (creates test org + user t@t.com)

3. Verify services are running:
   ```bash
   supabase status
   ```
   All services should show as "running"

4. Access local services:
   - API: http://localhost:54321
   - DB: postgresql://postgres:postgres@localhost:54322/postgres
   - Studio UI: http://localhost:54323
   - Inbucket (email testing): http://localhost:54324

## Stopping/Restarting

- Stop: `supabase stop` (preserves data in Docker volumes)
- Reset: `supabase db reset` (WARNING: deletes all local data, reapplies migrations + seed)

---

# Local Testing Environment

## Default Test Behavior

All tests run against **local Supabase** by default. This ensures:
- Zero risk to production data
- Fast test execution
- No network dependencies
- Identical results across all developers

## Running Tests

```bash
# All tests (requires local Supabase running)
./automation/test_all.sh

# Database tests only
node web_client/scripts/run_db_tests.js

# Specific database test file
node web_client/scripts/run_db_tests.js database/tests/bank_accounts_test.sql

# Deno edge function tests
source .env.development
deno test --allow-env --allow-net --allow-read supabase/functions/**/*test*.ts

# Flutter tests (unit tests only, no database dependency)
fvm flutter test
```

## Testing Against Production (Advanced)

**Warning: Use with caution.** Only needed for verifying production schema parity or debugging production-specific issues.

Database tests against production:
```bash
DATABASE_URL=<your-production-url> ./automation/test_all.sh
```

Edge function tests against production:
```bash
TEST_ENV=production ./automation/test_all.sh
```

**Safety:** Test runner will prompt for confirmation before executing against production.

## Troubleshooting

**"Local Supabase is not running"**
- Start Supabase: `supabase start`
- Verify status: `supabase status`

**"No DATABASE_URL found"**
- Ensure local Supabase is running
- Default URL is set automatically when not specified

**Database tests fail with "function does not exist"**
- Schema may be out of sync with migrations
- Reset local database: `supabase db reset` (WARNING: deletes local data)
- Restart Supabase: `supabase stop && supabase start`

**Deno tests can't access SUPABASE_URL**
- Load environment: `source .env.development`
- Verify: `echo $SUPABASE_URL` (should show http://localhost:54321)

**Edge function tests timeout**
- Check if function is served: `supabase functions serve <function-name>`
- Verify port 54321 is accessible: `curl http://localhost:54321/functions/v1/<function-name>`

## Migration Parity Verification

Verify local schema matches production:
```bash
supabase db diff --linked
```

**Expected output:** "No schema differences detected"

If differences found:
1. Pull latest migrations from production: `supabase db pull`
2. Review generated migration file
3. Apply to local: `supabase db reset`
