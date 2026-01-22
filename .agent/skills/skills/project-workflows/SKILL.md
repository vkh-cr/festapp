---
name: project-workflows
description: Official Festapp workflows. How to run tests, manage secrets, sync translations, and commit changes safely.
allowed-tools: Read, Run Command
---

# Project Workflows

> **Official project procedures. See
> [CONTRIBUTING.md](../../../../../CONTRIBUTING.md) for full details.**

## 1. Testing Workflow

### Run All Tests (Recommended)

Runs both Web Client and Database tests.

```bash
./automation/test_all.sh
```

### Run Database Tests Only

Use when modifying SQL functions or migrations.

```bash
# All DB tests
node web_client/scripts/run_db_tests.js

# Specific file
node web_client/scripts/run_db_tests.js database/tests/path/to/test.sql
```

## 2. Commit Workflow

Before committing, run this checklist:

1. **Cleanup**: Remove `analysis.txt`, `test_results.txt`, `temp_*.sql`.
2. **Verify**: Run `./automation/test_all.sh` or at least
   `node web_client/scripts/run_db_tests.js`.
3. **Sync Translations**:
   - `node web_client/scripts/unify_translations.js` (Flutter <-> Web)
   - `node web_client/scripts/reorder_cs_like_en.js` (CS Structure)
4. **Stage Only (NEVER COMMIT)**:
   - `git add .`
   - **STOP**. Do not run `git commit`. The user will perform the commit.

## 3. Secret Management

- **Local**: Keys in `.env.local` (NOT committed).
- **Web Client**: Public keys in `web_client/src/app_config.js`.
- **Database**: `DATABASE_URL` required for test runner.

---

> **Rule:** Never commit changes automatically. Always leave them staged for the
> user.
