# Supabase Storage → Cloudflare R2 Migration

Scripts for migrating image files from Supabase Storage to Cloudflare R2 and rewriting all database URLs.

## Architecture

```
Supabase Storage (public-files bucket)
  ↓ migrate-files.js (download via HTTP, upload via wrangler CLI)
Cloudflare R2 (festapp-images bucket)
  ↓ served by
Cloudflare Worker (festapp-image-worker)
  → https://festapp-image-worker.festapp.workers.dev/  (interim)
  → https://img.festapp.net/                           (final, after DNS)
```

## Scripts

| Script | Purpose | Destructive? |
|--------|---------|:---:|
| `migrate-files.js` | Download files from Supabase, upload to R2 | No (additive) |
| `rewrite-urls.js` | Rewrite all Supabase URLs in database to R2 URLs | **Yes** |
| `verify.js` | Check zero Supabase URLs remain in database | No (read-only) |
| `find-orphans.js` | List R2 objects not referenced in database | No (read-only) |

## Setup

```bash
cd automation/image-migration
cp .env.example .env    # Fill in credentials
npm install
```

## Usage

### Step 1: Migrate files to R2

```bash
# Preview what will be migrated
node migrate-files.js --dry-run

# Run migration (uploads to R2 via wrangler CLI)
node migrate-files.js

# Increase parallelism (default: 3)
node migrate-files.js --concurrency 5
```

**Prerequisites:**
- `wrangler` authenticated (`npx wrangler login`)
- R2 bucket `festapp-images` exists
- `DATABASE_URL` set in `.env`

**How it works:**
1. Queries database for all distinct Supabase Storage URLs across 18+ columns
2. Filters to only this project's Supabase instance (`kjdpmixlnhntmxjedpxh`)
3. Downloads each file via public HTTP (no service role key needed)
4. Uploads to R2 via `wrangler r2 object put --remote`
5. Skips files already in R2 (idempotent)

### Step 2: Verify Worker serves files

Before rewriting URLs, verify the Worker is serving files:

```bash
curl -I https://festapp-image-worker.festapp.workers.dev/images/SOME_FILE.jpg
# Should return HTTP 200
```

### Step 3: Rewrite database URLs

```bash
# Preview changes (no writes)
node rewrite-urls.js --dry-run

# Apply URL rewrites
node rewrite-urls.js
```

**What it rewrites:**

| Table | Column | Type |
|-------|--------|------|
| `images` | `link` | Plain text |
| `icons` | `link` | Plain text |
| `occasions` | `data->image`, `data->email_banner`, `data->logo` | JSONB |
| `occasions` | `data->map_layer->layer_link`, `data->map_layer->logo` | JSONB |
| `occasions` | `features` (background URLs in array) | JSONB |
| `units` | `data->email_banner` | JSONB |
| `organizations` | `data->email_banner` | JSONB |
| `information` | `description` | HTML |
| `events` | `description` | HTML |
| `news` | `message` | HTML |
| `places` | `description` | HTML |
| `user_group_info` | `description` | HTML |
| `email_wrappers` | `html` | HTML |
| `email_templates` | `html` | HTML |
| `forms` | `header`, `header_off` | HTML |

**URL patterns handled:**
- `public-files/` bucket URLs → direct path mapping
- `custom-files/` bucket URLs → direct path mapping
- Signed `editor-files/` URLs (with `?token=...`) → `editor/` prefix

### Step 4: Verify migration

```bash
node verify.js
```

Checks:
1. Zero Supabase Storage URLs remaining in all columns
2. File count parity between Supabase and R2 (if credentials provided)
3. Dual-write period status

### Step 5: Find orphan images (optional)

```bash
# Human-readable output
node find-orphans.js

# JSON output
node find-orphans.js --json

# Write to file
node find-orphans.js --output orphans.json
```

Requires R2 API credentials in `.env`.

## Rollback

If something goes wrong after URL rewrite, reverse it with SQL:

```sql
-- Replace R2 prefix with original Supabase prefix
-- Adjust the R2 prefix to match what was used (workers.dev or img.festapp.net)
UPDATE images SET link = REPLACE(link,
  'https://festapp-image-worker.festapp.workers.dev/',
  'https://kjdpmixlnhntmxjedpxh.supabase.co/storage/v1/object/public/public-files/')
WHERE link LIKE '%festapp-image-worker.festapp.workers.dev%';

-- Repeat for HTML columns, JSONB fields etc.
-- Or simply rerun rewrite-urls.js after swapping R2_PREFIX back to Supabase prefix
```

## Configuration

The R2 target URL is configured in `lib/url-rewriter.js`:

```javascript
export const R2_PREFIX = 'https://festapp-image-worker.festapp.workers.dev/';
```

When `img.festapp.net` DNS is configured, update this to:

```javascript
export const R2_PREFIX = 'https://img.festapp.net/';
```

Then rerun `node rewrite-urls.js` to update all database URLs.

## Migration Log

### 2026-02-18: Initial migration (workers.dev)

- **Files migrated:** 231 (230 initial + 1 retry)
- **Failed (missing in Supabase):** 4 files no longer exist in source bucket
- **Failed (editor-files):** 3 files in private bucket, need service role key
- **URL rewrites:** 362 rows (336 first pass + 26 second pass after html-rewriter fix)
- **Remaining:** 24 rows from hvezdamorska project (`lwfpdjxsdmkfyrzqbrlk`) — separate migration
- **Target URL:** `festapp-image-worker.festapp.workers.dev` (interim, pending DNS)

### Pending

- [ ] Set CNAME: `img` → `festapp-image-worker.festapp.workers.dev` (proxied)
- [ ] Rerun `rewrite-urls.js` with `R2_PREFIX = 'https://img.festapp.net/'`
- [ ] Uncomment custom domain in `workers/image-worker/wrangler.toml`
- [ ] Enable Cloudflare Image Transformations in dashboard
- [ ] Migrate hvezdamorska (`lwfpdjxsdmkfyrzqbrlk`) URLs in separate run
- [ ] Migrate 3 `editor-files` (need Supabase service role key or manual download)
