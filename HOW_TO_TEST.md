# How to Run Tests & Manage Secrets

## 1. Running Tests

### A. The "One-Click" Way (Recommended)

This runs **both** Web Client (JavaScript) and Database (SQL) tests.

```bash
./automation/test_all.sh
```

### B. Running Only Database Tests

You can run the specific database test runner directly. This connects to your
remote database (defined in `.env.local` or environment variables) and runs the
SQL verification scripts.

**Run All DB Tests:**

```bash
node web_client/scripts/run_db_tests.js
```

**Run a Single DB Test:**

```bash
node web_client/scripts/run_db_tests.js scripts/tests/others/get_occasion_seo_data_test.sql
```

## 2. Secrets & Configuration

To run database tests successfully against the **Remote Supabase**, the runner
needs credentials.

### Where are the keys?

The runner looks for a `.env.local` file in the project root.

**File:** `.env.local`

```bash
DATABASE_URL="postgres://postgres:[YOUR-PASSWORD]@db.kjdpmixlnhntmxjedpxh.supabase.co:5432/postgres"
```

- **Note**: The password is NOT stored in the repo. You must know it (or reset
  it via Supabase Dashboard).

### Client-Side Keys (Public)

The Web Client itself uses public keys found in: `web_client/src/app_config.js`

- `supabaseUrl`
- `anonKey` These are used for public API access but **cannot** run
  administrative DB tests.

## 3. Troubleshooting "Function does not exist"

If a DB test fails saying a function (like `get_occasion_seo_data`) does not
exist:

1. **Check Sync**: Your local migrations might not be pushed.
   ```bash
   supabase db push
   ```
2. **Repair History**: If `push` complains about history mismatch:
   ```bash
   supabase migration repair --status applied <MIGRATION_TIMESTAMP>
   ```
