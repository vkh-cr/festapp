# Rehearsal public origin — verified 2026-08-28

`https://rehearsal-api.festapp.net` is the isolated public compatibility endpoint
for the merged rehearsal database. It is not the production cutover hostname.

## Deployed path

```text
client
  -> Cloudflare proxied DNS/WAF (hostname-specific TLS Strict rule)
  -> Hetzner firewall (official Cloudflare IPv4/IPv6 ranges only)
  -> Caddy 2.11.4, pinned image digest
  -> 127.0.0.1:8000 Supabase gateway
```

Cloudflare Workers, Hyperdrive and D1 are not in the relational request or write
path. The rehearsal endpoint therefore adds no per-request Worker billing and no
second database interface. It uses the existing Cloudflare Free zone and the
existing EUR 7.8529/month Hetzner server.

The firewall retains the existing restricted SSH rule and ICMP diagnostics. It
accepts ports 80 and 443 only from the 15 IPv4 and seven IPv6 ranges published at
`https://www.cloudflare.com/ips-v4` and `https://www.cloudflare.com/ips-v6`,
checked on 2026-08-28. PostgreSQL, Studio, Supavisor and the gateway have no
public host binding. The gateway remains on `127.0.0.1:8000` and
`127.0.0.1:8443`.

Caddy obtained a publicly trusted Let's Encrypt certificate for the exact
rehearsal hostname. The Cloudflare configuration rule
`Rehearsal Supabase strict origin TLS` matches only
`rehearsal-api.festapp.net` and enforces `Strict`; the zone-wide mode and other
Festapp origins were not changed.

## Runtime evidence

After activation:

- all 11 Supabase services were healthy and `festapp-caddy` was running;
- Auth health and settings returned HTTP 200 with the rehearsal anon key;
- representative public REST tables returned HTTP 200;
- Realtime completed an HTTP 101 WebSocket upgrade;
- a real public Storage object returned HTTP 200 with 124,228 bytes;
- a direct `--resolve` connection to `46.224.187.4:443` from a non-Cloudflare
  source timed out, proving the origin bypass was closed;
- the presented origin certificate matched `rehearsal-api.festapp.net`, was
  issued by Let's Encrypt, and expires 2026-11-25.

The target generated a new anon key and signing secret. Password hashes are
preserved, but existing access-token continuity is not implied; login,
refresh-token and release adoption remain explicit cutover gates.

## Remaining production gates

1. Build and test web/Android/iOS against this rehearsal hostname and key.
2. Exercise password, refresh-token, rights, Functions and write canaries.
3. Prepare `api.festapp.net` with the same firewall, Caddy and strict-TLS
   contract, but do not activate it before the final freeze/journal gate.
4. Rewrite the four retained legacy Storage URLs only when the canonical
   production hostname is live and verified.

Client release tooling now accepts a custom HTTPS Supabase origin, preserves an
explicit browser auth-storage namespace across the hostname change, refreshes a
stored web session before the first rights query, and requires a non-empty
installation generation for self-hosted releases. Android and iOS builders run
the same fail-closed client preflight. These are readiness mechanisms, not proof
that a release has been built or adopted; the gate above remains open until the
actual web bundle and store artifacts pass against this endpoint.

The rehearsal runtime keeps Auth `SITE_URL` invalid and its redirect allowlist
empty by default. An auth-enabled client rehearsal must explicitly provide
`FESTAPP_AUTH_SITE_URL` and same-origin `FESTAPP_AUTH_REDIRECT_URLS` when
configuring the runtime. Cross-origin callbacks are rejected, and the approved
browser callback/password flow must pass before production activation.

No cloud project, backup, restore database, Storage object or other retained
artifact was deleted during this activation.
