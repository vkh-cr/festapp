# Deploying festapp-image-worker

Step-by-step guide to deploy the Cloudflare Worker that serves images from R2.

## Prerequisites

- Node.js 18+
- Cloudflare account with:
  - R2 storage enabled
  - Workers enabled
  - `festapp.net` DNS zone in the same account
- Supabase project credentials

## Quick Deploy (Automated)

```bash
cd workers/image-worker
npm install
chmod +x deploy.sh
./deploy.sh
```

The script handles authentication, bucket creation, deployment, and secret configuration interactively.

For redeployment (code changes only, buckets and secrets already configured):

```bash
./deploy.sh --redeploy
```

## Manual Step-by-Step

### 1. Authenticate with Cloudflare

```bash
cd workers/image-worker
npx wrangler login
npx wrangler whoami  # Verify: should show your account
```

### 2. Create R2 Buckets

```bash
npx wrangler r2 bucket create festapp-images
npx wrangler r2 bucket create festapp-images-temp
npx wrangler r2 bucket list  # Verify: both buckets listed
```

### 3. Deploy the Worker

```bash
npx wrangler deploy
```

This deploys the Worker and configures the custom domain `img.festapp.net` via the `routes` in `wrangler.toml`.

**If custom domain fails:** Verify that `festapp.net` DNS zone is in the same Cloudflare account as your R2 buckets. The custom domain routing requires the zone to be active in the same account.

### 4. Configure Worker Secrets

Each secret is set individually. The command prompts for the value interactively.

```bash
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
npx wrangler secret put R2_ACCESS_KEY_ID
npx wrangler secret put R2_SECRET_ACCESS_KEY
npx wrangler secret put CF_ACCOUNT_ID
```

**Where to find each value:**

| Secret | Source |
|--------|--------|
| `SUPABASE_URL` | Supabase Dashboard > Settings > API > Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard > Settings > API > service_role key (secret) |
| `R2_ACCESS_KEY_ID` | Cloudflare Dashboard > R2 > Manage R2 API Tokens > Create API Token > Access Key ID |
| `R2_SECRET_ACCESS_KEY` | Cloudflare Dashboard > R2 > Manage R2 API Tokens > Create API Token > Secret Access Key |
| `CF_ACCOUNT_ID` | Cloudflare Dashboard > any page > Account ID in right sidebar |

**R2 API Token permissions:** When creating the R2 API token, grant **Object Read & Write** permission scoped to the `festapp-images` bucket.

### 5. Verify Deployment

```bash
# Worker should respond (404 = working, no files uploaded yet)
curl -s -o /dev/null -w "%{http_code}" https://img.festapp.net/
# Expected: 404

# Unauthenticated upload should be rejected
curl -s -o /dev/null -w "%{http_code}" -X POST https://img.festapp.net/upload
# Expected: 401

# Unauthenticated private access should be rejected
curl -s -o /dev/null -w "%{http_code}" https://img.festapp.net/private/test.jpg
# Expected: 401

# CORS preflight should work
curl -s -o /dev/null -w "%{http_code}" -X OPTIONS https://img.festapp.net/
# Expected: 204
```

### 6. Test Full Upload (Optional)

To test with a real JWT token from your Supabase project:

```bash
# Get a JWT by logging into your app, then:
curl -X POST https://img.festapp.net/upload \
  -H "Authorization: Bearer YOUR_SUPABASE_JWT" \
  -F "file=@test-image.jpg" \
  -F "occasionId=1"
# Expected: 200 with JSON { url: "...", key: "..." }
```

## Troubleshooting

### "Custom domain not found" or routing errors

The `festapp.net` DNS zone must be in the same Cloudflare account where the Worker is deployed. Check: Cloudflare Dashboard > Websites > festapp.net should show an active zone.

### "R2 bucket not found" errors

Verify bucket names match exactly. Run `npx wrangler r2 bucket list` to see all buckets.

### Secrets not working

After setting secrets, the Worker redeploys automatically. If issues persist, redeploy manually:

```bash
npx wrangler deploy
```

### DNS propagation delay

After first deployment, `img.festapp.net` may take up to a few minutes to resolve. If `curl` returns connection errors, wait and retry.

## Architecture

```
Client -> img.festapp.net -> Cloudflare Worker -> R2 (festapp-images)
                                |
                                +-> Supabase (JWT verification, permission checks)
```

- **Public files:** `GET img.festapp.net/{key}` - served directly from R2 with 1-year immutable cache
- **Private files:** `GET img.festapp.net/private/{key}` - requires valid JWT + editor permission
- **Upload:** `POST img.festapp.net/upload` - requires valid JWT + editor permission, compresses via Images Binding
- **Presigned URLs:** `POST img.festapp.net/presign` - generates time-limited S3-compatible signed URLs
