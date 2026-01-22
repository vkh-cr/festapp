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

## 2. Secrets & Configuration

- **Local**: Keys in `.env.local` (NOT committed).
- **Web Client**: Public keys in `web_client/src/app_config.js`.
- **Database**: `DATABASE_URL` required for test runner.

## 3. Commit Workflow

Follow this checklist **before** every commit:

### Step 1: Cleanup and Hygiene

Ensure the codebase is clean:

- **Remove Temporary Files**: `rm database/tests/temp_*.sql`,
  `rm web_client/scripts/temp_*.js`, `rm analysis.txt test_results.txt`.
- **Remove Dead Code**: Delete unused files/comments.
- **Remove Debug Logs**: No `console.log` in production code.

### Step 2: Verify Integrity

Run the full test suite.

```bash
node web_client/scripts/run_db_tests.js database/tests
```

> All tests must PASS.

### Step 3: Synchronize Translations

If you modified `en.json` or `cs.json`:

1. **Unify** (Flutter <-> Web):
   ```bash
   node web_client/scripts/unify_translations.js
   ```
2. **Reorder** (CS structure matches EN):
   ```bash
   node web_client/scripts/reorder_cs_like_en.js
   ```

### Step 4: Stage and Commit

Review status, stage, and commit.

```bash
git status
git add .
git commit -m "feat: description of changes"
```
