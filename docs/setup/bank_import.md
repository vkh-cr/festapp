# Bank Account Email Import System

This feature allows the system to automatically import bank transactions by
parsing incoming emails from banks (e.g., Fio, AirBank).

## Documentation Map

- **Architecture**: `AI_README.md` (See "Split Brain Logic" and "Supabase
  Interactions").
- **Database**: `database/README.md`.
- **Automation**: `automation/README.md`.

## Setup Guide

### 1. AWS Configuration (SES & SNS)

We use a script to automate the AWS setup. **Prerequisites:** AWS CLI installed
and configured.

**IMPORTANT:** We use a **Subdomain** (`bank.festapp.net`) to avoid breaking
your main email.

1. Run the setup script:
   ```bash
   ../../automation/setup_aws_ses.sh
   ```
2. If prompted (or if emails don't arrive), verify the subdomain:
   ```bash
   aws ses verify-domain-identity --domain bank.festapp.net --region eu-central-1
   ```
3. Ensure your DNS **MX Record** for `bank` points to AWS (not your root
   domain).

### 2. DNS Verification

Run the helper script for the subdomain:

```bash
../../automation/check_dns_setup.sh bank.festapp.net
```

### 3. Supabase Deployment

**Database:**

- **New Instances**: Managed by `instance-install`.
- **Existing Instances**: Run
  `supabase/migrations/20260124000000_email_sync_columns.sql`.

**Edge Function:**

```bash
supabase functions deploy bank-mail-parser --project-ref <PROJECT_REF> --no-verify-jwt
```

### 4. Verification Check (Critical)

New SNS subscriptions start in **PendingConfirmation**. They must be confirmed
before AWS sends any emails.

1. Check Status:
   ```bash
   aws sns list-subscriptions-by-topic --topic-arn "arn:aws:sns:eu-central-1:274371802740:festapp-bank-emails" --region eu-central-1
   ```
2. **If "PendingConfirmation"**:
   - Go to **AWS Console > SNS > Subscriptions**.
   - Select the subscription and click **Request confirmation**.
   - Check **Supabase Edge Function Logs**. The function auto-confirms if it
     receives the request.
   - If it stays pending: Copy the URL from the logs
     (`Confirming subscription: ...`) and visit it in your browser.

## Testing

### Locations

- **Integration Tests**: `tests/integration/`
- **Test Data**: `tests/integration/fixtures/`

### Test with Personal Email (Simulation)

You can simulate an incoming email using your own text file.

1. Create a file `my_email.txt` with the raw email content.
2. Run the test:
   ```bash
   export SUPABASE_URL=...
   export SUPABASE_SERVICE_ROLE_KEY=...
   node tests/integration/bank_import.js --email-file tests/integration/fixtures/fio-sample.txt --token "00000000-0000-0000-0000-00000000TEST"
   ```
   _Replace the file path with your own if needed._

### Test with REAL Email (End-to-End)

This script sends an actual email via AWS SES and waits for it to appear in the
DB.

```bash
node tests/integration/bank_import_real.js --existing-token "YOUR_TOKEN" --from "info@festapp.net"
```

- Requires `aws configure` to be set up.
- `--from` must be a verified sender in your AWS SES.
