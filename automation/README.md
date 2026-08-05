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
- Version numbers.

### Applying Configuration

To propagate changes from `project.conf` to all parts of the app (Flutter, Web,
Scripts), run:

```bash
./automation/apply_config.sh
```

## Deploy targets

`automation/project.conf` selects the deploy target on each `prod/*` branch via
the `DEPLOY_TARGET` key. `.github/workflows/deploy.yml` is a router: it reads
`DEPLOY_TARGET` and runs the matching job. Branches without a target are
ignored, so legacy branches keep using their own workflow until they opt in.

| `DEPLOY_TARGET` | Job                         | Extra `project.conf` keys                       |
|--               |--                           |--                                               |
| `cloudflare`    | Build + Wrangler Pages deploy | `CLOUDFLARE_PROJECT_NAME=<cf-project>`        |
| `netlify`       | (CI placeholder — still manual via `netlify_deploy_deno_vars.sh`) | — |
| `gh-pages`      | (CI placeholder — `web.yml` still owns `prod/festapp`) | —                            |
| unset / `skip`  | No-op                       | —                                               |

See `automation/cloudflare/README.md` for the Cloudflare pipeline (worker
routing, build steps, env vars).

## Key Scripts

- **`apply_config.sh`**: Propagates `project.conf` into Flutter, web client,
  `web/index.html` title, CNAME, theme, fonts and version. Portable across
  GNU sed (Linux CI) and BSD sed (macOS dev).
- **`cloudflare_build.sh`**: Shared build script for Cloudflare Pages. Invoked
  by `deploy.yml`. Emits `build/web/_worker.js` (single routing source).
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
