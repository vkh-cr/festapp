---
name: project-workflows
description: Official Festapp workflows. How to run tests, manage secrets, sync translations, and commit changes safely.
allowed-tools: Read, Run Command
---

# Project Workflows

> **Official project procedures. See
> [CONTRIBUTING.md](../../../../../CONTRIBUTING.md) for full details.**

## 0. Context & Architecture (CRITICAL)

Before starting complex tasks, read: **`docs/architecture/ai_context.md`**

It explains:

- **Split Brain Logic** (SQL vs Dart).
- **Directory Structure** (Where features live).
- **Key Patterns** (Permissions, Navigation).

## 1. Security Workflow (RPCs)

When writing PostgreSQL functions (`database/functions/`):

1. **Search Path**: ALWAYS use `SET search_path = public, eshop, extensions`.
2. **Permissions**: ALWAYS check permissions (e.g. `check_is_admin...`).
3. **References**: Do not assume RLS protects `SECURITY DEFINER` functions.

## 2. Testing Workflow

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

### Run Integration Tests

System-level tests (requires Supabase connection).

```bash
node tests/integration/bank_import.js --existing-token "..."
```

## 2.5 Database Deployment via MCP

To deploy/update SQL functions remotely:

1. **Identify**: `mcp_supabase-mcp-server_list_projects` to get the
   `project_id`.
2. **Read**: `view_file` the local SQL file.
3. **Execute**: `mcp_supabase-mcp-server_execute_sql` with the `project_id` and
   `query` (file content).

## 2.6 Deno Edge Function Deployment via MCP

To deploy/update Edge Functions:

1. **Upload**: `mcp_supabase-mcp-server_deploy_edge_function`.
   - `files`: Read content of `index.ts`, `deno.json` etc. first.
2. **Note**: Always `list_dir` and `view_file` to get the latest content.

## 3. Flutter Workflow

### Code Generation (Build Runner)

Run this after modifying **Models**, **Routes**, or **Services** (Refit):

```bash
fvm dart run build_runner build --delete-conflicting-outputs
```

## 4. Commit Workflow

Before committing, run this checklist:

1. **Configuration Check**: `./automation/apply_config.sh` (Ensures
   version/theme sync).
2. **Cleanup**: Remove `analysis.txt`, `test_results.txt`, `temp_*.sql`.
3. **Verify**:
   - Run `./automation/test_all.sh` (Web + DB + Integration).
   - Run `fvm flutter analyze`.
4. **Sync Translations**:
   - `node web_client/scripts/unify_translations.js` (Flutter <-> Web)
   - `node web_client/scripts/reorder_cs_like_en.js` (CS Structure)
5. **Stage Only (NEVER COMMIT)**:
   - `git add .`
   - **STOP**. Do not run `git commit`. The user will perform the commit.

## 5. Codebase Cleanup Workflow

Run this checklist when performing a codebase-wide cleanup (e.g. comments,
logs).

### Checklist Structure

Ensure you sweep these areas:

1. **Documentation & Config**: `.gitignore`, `README.md`, `project.conf`.
2. **Database**: Functions, Tables, Tests, Migrations.
3. **Flutter**: Components, Services, Models.
4. **Web Client**: Components, Scripts, Tests.
5. **Automation**: Scripts (TS/JS).

### What to Look For

- **Conversational Comments**: Remove "I think", "maybe", "check this", "TODO".
- **Redundant Comments**: Remove comments that blindly state the code (e.g.
  `// returns true` above `return true;`).
- **Debugging Artifacts**: Remove `console.log`, `print()`, commented-out code
  blocks.

### Systematic Audit Strategy

For complex cross-cutting concerns (leaks, API changes):

1. **Identify**: Run a search (e.g., `grep`) to find all candidate files.
2. **List**: Create a comprehensive checklist in your `task.md` artifact.
3. **Iterate**: Go through the list one by one. Do not skip.
4. **Verify**: Check off items only after verification.

## 6. Secret Management

- **Local**: Keys in `.env.local` (NOT committed).
- **Web Client**: Public keys in `web_client/src/app_config.js`.
- **Database**: `DATABASE_URL` required for test runner.

---

> **Rule:** Never commit changes automatically. Always leave them staged for the
> user.
