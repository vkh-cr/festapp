# Automation & Scripts

This directory contains the central automation logic for the Festapp project. It
is the command center for configuration management, deployment, testing, and AI
integration.

## Central Configuration (`project.conf`)

The `project.conf` file is the **Single Source of Truth** for the project. It
defines:

- Deployment domains.
- Supabase credentials.
- Theme colors.
- Version numbers.

### Applying Configuration

To propagate changes from `project.conf` to all parts of the app (Flutter, Web,
Scripts), run:

```bash
./automation/apply_config.sh
```

## Key Scripts

- **`test_all.sh`**: The master test runner. Executes both Web Client unit tests
  and Database regression tests.
- **`sync_db.js`**: Synchronizes local and remote database schemas.
- **`apply_sql.js`**: Applies a single SQL file to the database. Usage:
  `node automation/apply_sql.js path/to/file.sql`.
