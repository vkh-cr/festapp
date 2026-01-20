
/**
 * @file scripts/trigger_sync.js
 * @description A utility to manually trigger an external database sync using `dblink`.
 * 
 * Purpose:
 * Connects to the local database configured in `.env.local` and invokes the PostgreSQL function
 * `public.sync_source_via_dblink('vstupenky_remote')`.
 * 
 * Use Case:
 * Use this to force-refresh data from the 'vstupenky_remote' source without waiting for a scheduled cron job.
 * Useful during development or immediately after updating external source configuration.
 */
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

// 1. Load .env.local
const envPath = path.resolve(__dirname, '../.env.local');
let envContent = '';
try {
    envContent = fs.readFileSync(envPath, 'utf8');
} catch (e) {
    console.warn("Could not read .env.local", e.message);
}

const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        let value = match[2].trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        envVars[match[1].trim()] = value;
    }
});

const DB_URL = envVars['DATABASE_URL'] || envVars['POSTGRES_URL'] || 'postgresql://postgres:postgres@localhost:54322/postgres';

console.log(`Connecting to ${DB_URL.split('@')[1] || 'localhost'}...`);

const client = new Client({
    connectionString: DB_URL,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        await client.connect();
        console.log("Triggering Sync for 'vstupenky_remote'...");
        
        const res = await client.query("SELECT public.sync_source_via_dblink('vstupenky_remote')");
        console.log("Result:", res.rows[0].sync_source_via_dblink);

    } catch (e) {
        console.error("Error syncing:", e);
    } finally {
        await client.end();
    }
}

run();
