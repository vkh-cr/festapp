# Automation & Scripts

This directory contains the central automation logic for the Festapp project. It
is the command center for configuration management, deployment, testing, and AI
integration.

## Central Configuration (`project.conf`)

The `project.conf` file is the **Single Source of Truth** for the project. It
defines:

- Deployment domains.
- Supabase credentials.
- Theme colors.
- Android/iOS application identity and OneSignal public IDs.
- Brand asset paths and optional installation-generation cutover marker.
- Version numbers.

### Applying Configuration

To propagate changes from `project.conf` to all parts of the app (Flutter, Web,
Scripts), run:

```bash
./automation/apply_config.sh
```

## Web deployment

`automation/deploy_direct.sh` is the canonical production web deployment path.
It reads `CLOUDFLARE_PROJECT_NAME`, `DOMAIN`, and `VERSION` from
`automation/project.conf`, runs the shared build, uploads `build/web` directly
with Wrangler, and verifies that the custom domain repeatedly serves one
coherent release generation.

See `automation/cloudflare/README.md` for the Cloudflare pipeline (worker
routing, build steps, env vars).

## Key Scripts

- **`apply_config.sh`**: Propagates `project.conf` into Flutter, web client,
  `web/index.html` title, CNAME, theme, fonts and version. Portable across
  GNU sed (Linux CI) and BSD sed (macOS dev).
- **`cloudflare_build.sh`**: Shared build script for Cloudflare Pages. Invoked
  by `deploy_direct.sh`. Emits `build/web/_worker.js` (single routing source).
- **`deploy_direct.sh`**: Builds, uploads, and verifies the configured
  Cloudflare Pages production release without a git push.
- **`test_all.sh`**: The master test runner. Executes Web Client unit tests,
  Database regression tests, and automation/scripts tests.
- **`bootstrap_local_db.sh`**: Rebuilds the isolated local PostgreSQL test
  instance from the versioned production-compatible schema baseline, records
  the baseline migration cutoff, applies newer forward migrations, and seeds
  test data. It never connects to or changes production.
- **`tests/apply_config.test.sh`**: Smoke test for `apply_config.sh` — runs
  against a fixture `project.conf` and asserts the substitutions land in the
  expected files.
- **`sync_db.js`**: Synchronizes local and remote database schemas.
- **`apply_sql.js`**: Applies a single SQL file to the database. Usage:
  `node automation/apply_sql.js path/to/file.sql`.
