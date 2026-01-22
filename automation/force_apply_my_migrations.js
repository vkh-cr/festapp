const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Try to load dotenv
try {
    require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
} catch (e) {}

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    console.error("No DATABASE_URL");
    process.exit(1);
}

const FILES_TO_APPLY = [
    '20260122160000_manual_transactions_consolidated.sql'
];

const MIGRATIONS_DIR = path.join(__dirname, '../supabase/migrations');

async function run() {
    const client = new Client({ connectionString });
    await client.connect();
    console.log("Connected to DB.");

    for (const file of FILES_TO_APPLY) {
        console.log(`Applying ${file}...`);
        const sql = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf8');
        try {
            await client.query(sql);
            // We optionally update the migrations table, but key is to get code running.
            // Let's Insert if not exists to be nice to future syncs
             const version = file.split('_')[0];
             await client.query('INSERT INTO supabase_migrations (version, name, statements) VALUES ($1, $2, $3) ON CONFLICT (version) DO NOTHING', [version, file, null]);
             
            console.log(`✅ Applied ${file}`);
        } catch (e) {
            console.error(`❌ Failed ${file}: ${e.message}`);
            // If it fails, we mostly stop, but maybe we can continue if it's "already exists"?
            // But these are replacements usually.
             process.exit(1);
        }
    }
    await client.end();
}

run();
