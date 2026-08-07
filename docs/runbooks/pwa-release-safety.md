# PWA release safety verification

Run this process before a direct Cloudflare release that changes the app shell,
service worker, startup, routing, or browser storage.

## Deterministic contract gate

```bash
./automation/test_all.sh web flutter automation
npm --prefix web_client run build
fvm flutter build web --release --base-href / --no-web-resources-cdn
```

The automation group includes the shared manifest/budget contract, worker VM
matrix, both client version adapters, aggregate-only browser bridge, recovery
readiness and offline cold-start-after-prune behavior. A failure blocks release.

## Two-version browser drill

Use `automation/tests/pwa_browser_fixture_server.mjs` on localhost and a fresh,
task-specific browser session. The drill must verify:

1. two tabs start on version 1 and report it;
2. version 2 installs atomically and one tab cuts over;
3. the still-open version-1 tab remains functional offline and its shell stays;
4. inspect is read-only and font/non-shell caches are untouched;
5. after the old tab closes, version 1 becomes the only deletion candidate;
6. prune removes only that candidate;
7. the version-2 tab cold-reloads offline;
8. unknown client, missing live cache, API rejection and timeout fixtures all
   produce no non-allowlisted deletion.

The browser drill is exploratory evidence, not a replacement for committed VM
tests. Use a fresh localhost origin/session and close it afterward. Never attach
the drill to a real user profile or production origin.
