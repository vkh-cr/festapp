# Cloudflare Pages Deployment

Universal, conf-driven deploy used by `.github/workflows/deploy.yml`. To add a
new project, create a `prod/<name>` branch and set two keys in
`automation/project.conf` on that branch:

```ini
DEPLOY_TARGET=cloudflare
CLOUDFLARE_PROJECT_NAME=<exact CF Pages project name>
```

Push to `prod/<name>` triggers the workflow, which PATCHes the CF Pages
project's production branch to match, then deploys.

## One-time Cloudflare Pages dashboard setup

For each `prod/*` branch you want to deploy on Cloudflare:

1. **Create project** → "Direct Upload" (no Git integration needed; the deploy
   pushes builds via Wrangler). Project name must match
   `CLOUDFLARE_PROJECT_NAME` in `automation/project.conf` on that branch.
2. **Production branch** is set automatically by the workflow on every deploy;
   no manual step.
3. **Environment variables** (Production + Preview):
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `ORGANIZATION_ID`
   These are read by `_worker.js` at runtime for the dynamic `/sitemap.xml` and
   the `/form/<slug>` OG inject. Without them the worker falls back to a
   minimal sitemap and uses default meta tags.
4. **Custom domain**: add the production hostname (e.g. `csmostrava.festapp.net`).
5. **Repo secrets** (one-time, GitHub repo or org level):
   - `CLOUDFLARE_API_TOKEN` — token with `Cloudflare Pages:Edit` for the account.
   - `CLOUDFLARE_ACCOUNT_ID`.

## How routing works (`_worker.js`)

`automation/cloudflare_build.sh` generates `build/web/_worker.js`. This single
worker owns all routing. CF Pages Functions (`functions/...`) are NOT deployed
when `_worker.js` is present, so anything route-related lives in the worker.

Three HTML entry-points are renamed to extension-less names during build:

| Source                              | Renamed to (in build/web) | Why                                                   |
|--                                  |--                          |--                                                     |
| Flutter `web/index.html`            | `flutter`                  | CF auto-strips `.html`; extension-less avoids the 308 |
| Web client `web_client/dist/index.html` | `webclient`            | Same                                                  |
| `web_client/public/auth_bridge.html`| `auth_bridge`              | Same; RouterService still posts to `/auth_bridge.html`, worker accepts both spellings |

Worker routes:

| Path                                    | Behavior                                                                                       |
|--                                      |--                                                                                              |
| `/sitemap.xml`                          | RPC `get_available_occasions` -> generated XML; fallback to minimal sitemap on error           |
| `/form/<slug>`                          | Fetches `/webclient`, RPC `get_occasion_seo_data`, rewrites `<title>` + OG/twitter/canonical   |
| `/`                                     | Serves `/webclient` as `text/html`                                                             |
| `/auth_bridge` and `/auth_bridge.html`  | Serves `/auth_bridge` as `text/html`                                                           |
| `/flutter` and `/flutter.html`          | Serves `/flutter` as `text/html`                                                               |
| `/login`, `/admin`, `/transfer` (+sub)  | Serves `/flutter` as `text/html`                                                               |
| Real static asset                       | Passed through (`ASSETS.fetch`)                                                                |
| Anything else                           | Fallback to `/flutter` so the Flutter SPA router can handle deep links (e.g. `/csmostrava2026`) |

Why a worker (instead of `_redirects` + Pages Functions):

* CF Pages applies `_redirects` BEFORE static assets, so a catch-all
  `/* /flutter 200` would hijack `/favicon.ico`, `/web-assets/*`,
  `/main.dart.js`, etc.
* CF strips `.html` from URLs (308) before serving. `/index.html` would 308 to
  `/`, which a `_redirects` rule then sends back to `/flutter` — a loop.
* Pages Functions and `_worker.js` are mutually exclusive, so we cannot mix.

## Build flow (`cloudflare_build.sh`)

1. Install Flutter ${HOME}/flutter if missing (no-op in GitHub Actions, which
   already has Flutter via `subosito/flutter-action`).
2. Run `automation/apply_config.sh` — propagates `project.conf` into Flutter
   `lib/app_config.dart`, web client `app_config.js`, `web/index.html` title /
   `apple-mobile-web-app-title`, CNAME, theme, fonts, version.
3. `flutter build web --release --base-href /`.
4. Rename `build/web/index.html` -> `build/web/flutter`.
5. `npm run build` in `web_client/`, copy `dist/*` over `build/web/`.
6. Rename merged `build/web/index.html` -> `build/web/webclient`.
7. Rename `build/web/auth_bridge.html` -> `build/web/auth_bridge`.
8. Remove any `_redirects` / `_headers` shipped from `web_client/public/`.
9. Emit `build/web/_worker.js` (see above).

## Adding a new CF Pages project

1. Branch off main: `git checkout -b prod/<name>`.
2. Edit `automation/project.conf` on that branch:
   ```ini
   DEPLOY_TARGET=cloudflare
   CLOUDFLARE_PROJECT_NAME=<name>
   APP_NAME="Display Name"
   APP_TITLE_SHORT="Short"
   DOMAIN=<host>
   SUPABASE_URL=https://<ref>.supabase.co
   SUPABASE_ANON_KEY=...
   ORGANIZATION_ID=<n>
   FORCE_OCCASION_LINK=<slug>
   ...
   ```
3. Create the CF Pages project in dashboard (`<name>`), set env vars + custom domain.
4. `git push origin prod/<name>` — `deploy.yml` builds and deploys.
