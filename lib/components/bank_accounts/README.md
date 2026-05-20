# Bank Accounts

## Architecture (Non-Obvious)

Accounts (`eshop.bank_accounts`) link to units via many-to-many (`eshop.unit_bank_accounts`). A single account can serve multiple units. Priority is scoped to the link, not the account.

## Dual Security Model

- **Unit Context** (Unit Manager): Link/unlink accounts, reorder priority. Check: `check_is_manager_on_unit(unit_id)`.
- **Account Context** (Bank Account Admin): Edit IBAN, tokens, manage access. Check: `eshop.bank_account_users` table.

Creating a new account auto-grants Bank Account Admin rights to the creator.

## Gotchas

- **Unlink != Delete**: "Delete" in Unit UI only unlinks. Account persists for other units/history.
- **Currency Routing**: Sorted by priority ASC. First account matching a currency = Primary (green badge), rest = Backup (gray).
- **Two account number fields**: `account_number_human_readable` for invoices/UI, `account_number` for matching/API calls.
- **Secrets**: API tokens in `eshop.secrets`. Frontend only sees masked last 4 chars. Write-only via `update_bank_account_token`.
- **Priority reorder**: Triggers batch update of ALL link items with new indices.

## Schema

- `eshop.bank_accounts` -- core entity (IBAN, Title, Type)
- `eshop.unit_bank_accounts` -- link table (Unit ID, Account ID, Priority)
- `eshop.bank_account_users` -- permissions (User ID, Account ID, `is_admin`, `is_support`)
- `eshop.secrets` -- secure token storage
