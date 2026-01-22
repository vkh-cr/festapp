# Contributing to Festapp

> **Single Source of Truth** for workflows, testing, and committing.

## 0. Developer Setup (First Time)

To enable Agent Skills (optional but recommended):

```bash
# Clone standard skills
git clone https://github.com/sickn33/antigravity-awesome-skills.git .agent/skills

# Restore project custom skills (already in repo)
# (Happens automatically via git checkout as they are tracked files)
```

## 1. Testing Workflow

### A. The "One-Click" Way (Recommended)

Runs both Web Client (JavaScript) and Database (SQL) tests.

```bash
./automation/test_all.sh
```

### B. Running Only Database Tests

Use when modifying SQL functions or migrations.

```bash
# Run all DB tests
node web_client/scripts/run_db_tests.js

# Run specific test file
node web_client/scripts/run_db_tests.js database/tests/path/to/test.sql
```

**Key concept:** Tests run in a transaction and auto-rollback. Any data inserted
during a test is undone automatically.

### C. Troubleshooting

If a test fails saying "function does not exist":

1. Check if local migrations are pushed: `supabase db push`
2. Run schema check tests if available.

### D. Testing via Supabase MCP (Recommended for Agents/No-Docker)

1. **Run SQL/RPCs**: Use `mcp_supabase-mcp-server_execute_sql` or
   `apply_migration`.
2. **Run Tests**:
   - Read the content of a test file (e.g.,
     `database/tests/bank_account_sync_test.sql`).
   - Execute that content using `mcp_supabase-mcp-server_execute_sql`.
   - _Note_: This runs tests in the target environment (local or remote). Ensure
     you are targeting the correct Project ID.

## 2. Secrets & Configuration

- **Local**: Keys in `.env.local` (NOT committed). This file is automatically
  loaded by local scripts and Next.js. **Put all secrets here.**
- **Web Client**: Public keys in `web_client/src/app_config.js`.
- **Database**: `DATABASE_URL` required for test runner.

## 3. Security Audit (Before Commit)

**CRITICAL**: Every time you write a new PostgreSQL function (RPC), especially
with `SECURITY DEFINER`, you MUST verify:

1. **Search Path**: Always include `SET search_path = public, eshop, extensions`
   (or relevant schemas).
   - _Why?_ Prevents search_path hijacking where malicious users create objects
     in public schema.
2. **Permissions Check**: If the function modifies data or returns sensitive
   info, it MUST check permissions.
   - Example: `PERFORM public.check_is_admin_for_bank_account(p_account_id);`
   - _Why?_ `SECURITY DEFINER` runs with superuser-like (or owner) privileges,
     bypassing RLS. explicit checks are mandatory.
3. **Input sanitization**: Avoid `EXECUTE` with raw strings. Use `format()` or
   parameter binding.

## 4. Commit Workflow

Follow this checklist **before** every commit:

### Step 1: Configuration Check

Ensure your local configuration is applied to the code:

```bash
./automation/apply_config.sh
```

### Step 2: Cleanup and Hygiene

Ensure the codebase is clean:

- **Remove Temporary Files**: `rm database/tests/temp_*.sql`,
  `rm web_client/scripts/temp_*.js`, `rm analysis.txt test_results.txt`.
- **Remove Dead Code**: Delete unused files/comments.
- **Remove Debug Logs**: No `console.log` in production code.

### Step 2.5: Dealing with Complex Refactors (Checklist Strategy)

If you are dealing with a complex issue (e.g., data leaks, wide-spread API
changes):

1. **Search**: Use `grep` or `find_by_name` to identify all affected files.
   - Example: `grep -l "CREATE OR REPLACE FUNCTION" database/tests/**/*.sql`
2. **List**: Create a checklist in `task.md` or a temporary artifact.
3. **Execute**: systematically go through each file in the list.
4. **Mark and Verify**: Check off each item as you fix it. Verify after each
   batch.

### Step 3: Verify Integrity

Run the full test suite.

```bash
node web_client/scripts/run_db_tests.js database/tests
```

> All tests must PASS.

### Step 4: Synchronize Translations

If you modified `en.json` or `cs.json`:

1. **Unify** (Flutter <-> Web):
   ```bash
   node web_client/scripts/unify_translations.js
   ```
2. **Reorder** (CS structure matches EN):
   ```bash
   node web_client/scripts/reorder_cs_like_en.js
   ```

### Step 5: Stage and Commit

Review status, stage, and commit.

> **AGENT RULE**: **NEVER** automatically commit changes. You MUST Always stop
> after `git add` and ask the user for confirmation before committing.
>
> 1. Run `git add .` (if appropriate).
> 2. Show `git status`.
> 3. **STOP** and ask "Ready to commit?"

```bash
git status
git add .
# User must approve the following:
git commit -m "feat: description of changes"
```
