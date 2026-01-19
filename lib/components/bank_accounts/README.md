# Bank Accounts Component

This component manages the banking infrastructure for units, supporting
multi-currency payments, automated FIO syncing, and hierarchical account
prioritization.

## 1. Core Architecture

The system uses a **Decoupled Architecture** where Bank Accounts
(`eshop.bank_accounts`) are independent entities from Units (`public.units`).
They are connected via a Many-to-Many link table (`eshop.unit_bank_accounts`).

- **Reusability:** A single "Mother Account" can be linked to multiple units
  (events), allowing centralized treasury management.
- **Isolation:** While the account is shared, the **Priority** (`priority`) is
  scoped to the _Link_ (Unit), meaning the same account can be "Primary" in one
  unit and "Backup" in another.

## 2. Security & RBAC Model

The component implements a **Dual-Layer Authorization** model:

- **Layer A: Unit Context (Unit Manager)**
  - **Scope:** The _Link_.
  - **Capabilities:** Link existing accounts, Unlink accounts, Reorder (Change
    Priority).
  - **Check:** `check_is_manager_on_unit(unit_id)`

- **Layer B: Account Context (Bank Account Admin)**
  - **Scope:** The _Data_ (IBAN, Token, Title).
  - **Capabilities:** Edit IBAN, Update API Token, Manage User Access
    (Add/Remove other admins).
  - **Check:** `eshop.bank_account_users` table.

_> **Note:** When a Unit Manager creates a **New** account, they are
automatically granted **Bank Account Admin** status on that new entity._

## 3. Key Features

### A. Currency Routing (Primary vs Backup)

The system currently supports logic to determine the "Active" account for a
given currency.

- **Logic:** The list is sorted by `priority` (ASC). The **First** account in
  the list that supports a given currency (e.g., 'EUR') is designated as the
  **Primary** account for that currency.
- **UI:** Displayed with a Green Badge/Star.
- **Fallback:** Subsequent accounts matching the currency are marked as
  **Backup** (Gray).

### B. Secrets Management (FIO Tokens)

- **Storage:** API tokens are stored in a separate `eshop.secrets` table.
- **Write-Only:** The frontend **never** receives the raw token. It receives a
  `token_masked` (last 4 chars) or `NULL`.
- **Update Flow:** `update_bank_account_token` updates the secret and optionally
  resets the `token_expiry_date` timestamp.

### C. Human Readable Formatting

- **Attribute:** `account_number_human_readable`.
- **Purpose:** Stores a formatted version (e.g., `1234 5678 / 0100`) for invoice
  PDFs and UI display, while the raw `account_number` (`12345678/0100`) is used
  for strict matching and API calls.

## 4. Component Structure

### Files

- **`bank_account_model.dart`**: Immutable data class. Parsing logic handles
  flat JSON from RPCs.
- **`db_bank_accounts.dart`**: Service layer. Wraps Supabase RPC calls.
- **`views/unit_bank_accounts_screen.dart`**: The main management UI. Handles
  the complex "Link vs Create" flow.

### Database Schema

- **`eshop.bank_accounts`**: Core entity (IBAN, Title, Type).
- **`eshop.unit_bank_accounts`**: Link table (Unit ID, Account ID, Priority).
- **`eshop.bank_account_users`**: Permissions table (User ID, Account ID,
  `is_admin`, `is_support`).
- **`eshop.secrets`**: Secure token storage.

## 5. Implementation Details / "Gotchas"

- **Unlink != Delete:** The "Delete" button in the Unit UI actually performs an
  **Unlink** (`link_bank_account_to_unit(..., null)`). The account data remains
  in the DB for other units or historical records.
- **Link Existing Flow:** The UI allows linking an account you already manage.
  It queries `get_my_admin_bank_accounts` to find candidates.
- **Priority Persistence:** Reordering triggers a batch update where every item
  in the list is updated with its new index.
