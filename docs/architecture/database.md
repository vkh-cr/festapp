# Database Documentation

This directory contains the source code for the PostgreSQL database schema,
logic, and security policies.

## Structure

- **`functions/`**: Programmable logic (Stored Procedures/RPCs). This is where
  the core backend business logic resides (e.g., Order creation, User
  management).
  - **Naming Convention**: `verb_noun` (e.g., `scan_ticket`, `calculate_price`).
  - **Security**: Most functions use `SECURITY DEFINER` to run with owner
    privileges, bypassing RLS for complex multi-table operations.
- **`policies/`**: Row Level Security (RLS) policies defining who can see/edit
  what data.
- **`seed/`**: Initial data for setting up a fresh environment.
- **`tests/`**: SQL regression tests.
- **`tables/`**: Table definitions (though often managed via migrations).

## Architecture Patterns

### Split Brain Logic

A significant portion of the application's business logic resides here in SQL,
not in the client (Flutter/Web).

- **Write Operations**: Complex writes (like creating an order) are atomic SQL
  functions.
- **Read Operations**: Often use specialized views or RPCs to return "Frontend
  Ready" JSON.

## Testing

Database logic is tested using a dedicated runner that executes SQL test files
in a transaction and rolls them back.

Run tests via the root automation script:

```bash
./automation/test_all.sh
```

Or specific DB tests:

```bash
node web_client/scripts/run_db_tests.js database/tests/my_test.sql
```

See [database_testing Knowledge Item] for detailed patterns.
