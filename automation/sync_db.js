/**
 * @file automation/sync_db.js
 * @description A fault-tolerant database migration applicator.
 * 
 * Purpose:
 * Syncs the local `supabase/migrations` folder to a remote database that might contain legacy schema.
 * 
 * Features:
 * 1. Iterates through all `.sql` migration files.
 * 2. Checks `supabase_migrations` table to skip already-applied files.
 * 3. Try-Catches execution: If a migration fails with "relation already exists" (common when syncing 
 *    new migrations to an old, untracked DB), it swallows the error and marks the migration as APPLIED.
 * 4. Ensures the database schema is brought up to date without manual intervention.
 */
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
// Try to load dotenv, but don't fail if missing/env is already set
try {
    require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
} catch (e) {
    // ignore
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error("❌ DATABASE_URL is not defined in environment or .env.local");
    process.exit(1);
}

const MIGRATIONS_DIR = path.join(__dirname, '../supabase/migrations');

async function sync() {
    const client = new Client({ connectionString });
    
    try {
        await client.connect();
        console.log(`Connected to DB: ${client.connectionParameters.host || 'unknown host'}`);

        // 1. Ensure migrations table exists
        await client.query(`
            CREATE TABLE IF NOT EXISTS supabase_migrations (
                version text PRIMARY KEY,
                statements text,
                name text
            );
        `);

        // 2. Get applied versions
        const res = await client.query('SELECT version FROM supabase_migrations');
        const applied = new Set(res.rows.map(r => r.version));

        // 3. Read local files
        const files = fs.readdirSync(MIGRATIONS_DIR)
            .filter(f => f.endsWith('.sql'))
            .sort();

        // 4. Apply missing
        for (const file of files) {
            const version = file.split('_')[0];
            
            if (applied.has(version)) {
                // console.log(`Skipping ${file} (Already recorded)`);
                continue;
            }

            console.log(`Processing ${file}...`);
            const sql = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf8');
            
            // We use a savepoint or just try/catch block if we assume single transaction per file? 
            // Better to try the whole file.
            
            try {
                // await client.query('BEGIN'); // We can't wrap everything in one transaction if we want to survive errors?
                // Actually, if we fail, we ROLLBACK, then record as done IF it was "already exists".
                // But we can't rollback "already exists" because it was already there.
                // So we try to apply.
                
                await client.query(sql);
                await client.query('INSERT INTO supabase_migrations (version, name, statements) VALUES ($1, $2, $3)', [version, file, null]);
                console.log(`✅ Applied ${file}`);

            } catch (err) {
                // Check if error is "already exists"
                // Postgres error codes for "duplicate_table" (42P07), "duplicate_column" (42701), "duplicate_function" (42723), "duplicate_object" (42710)
                // Or checking message content.
                const msg = err.message.toLowerCase();
                const isAlreadyExists = msg.includes('already exists') || msg.includes('constraint') && msg.includes('exists'); // Loose check
                
                if (isAlreadyExists) {
                    console.log(`⚠️  ${file} failed with "already exists". Marking as APPLIED.`);
                    try {
                        await client.query('INSERT INTO supabase_migrations (version, name, statements) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING', [version, file, null]);
                    } catch (loggingErr) {
                         console.error("Failed to mark as applied:", loggingErr);
                    }
                } else {
                    console.error(`❌ Failed ${file}:`, err.message);
                    // process.exit(1); 
                    // Should we stop? Yes, unrelated errors are dangerous.
                    process.exit(1);
                }
            }
        }

        console.log("All migrations synced.");

    } catch (e) {
        console.error("Connection Error:", e);
    } finally {
        await client.end();
    }
}

sync();
