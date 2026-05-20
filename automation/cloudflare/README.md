# Cloudflare Pages Deployment

Used for the `csmostrava2026` branch; other `prod/*` branches stay on Netlify.

## One-time Cloudflare Pages dashboard setup

1. **Create project** → Connect Git → repo `vkh-cr/festapp` → production branch `prod/csmostrava2026`
2. **Build settings:**
   - Framework preset: `None`
   - Build command: `./automation/cloudflare_build.sh`
   - Build output directory: `build/web`
   - Root directory: `/`
3. **Environment variables** (Production + Preview):
   - `SUPABASE_URL` = `https://lwfpdjxsdmkfyrzqbrlk.supabase.co`
   - `SUPABASE_ANON_KEY` = (jubileum/csm shared anon key)
   - `ORGANIZATION_ID` = `9`
4. **Custom domain:** add `csmostrava.festapp.net` or your custom domain.

## How routing works

- `_redirects` at root of build output (already present in `web_client/public/_redirects`) → SPA fallback to `index.html` (web client) or `flutter.html` (Flutter app).
- `functions/sitemap.xml.js` → handles `/sitemap.xml` (replaces Netlify edge function).
- `functions/form/[[link]].js` → handles `/form/<slug>` and injects OG meta tags (replaces Netlify edge function).

Pages Functions take precedence over `_redirects` for the same path.

## What stayed on Netlify

`netlify.toml` and `netlify/edge-functions/` are still in the repo so other branches can deploy to Netlify. Cloudflare ignores them.
