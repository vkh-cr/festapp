import pg from 'pg';
const { Client } = pg;
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default location for assertions helper
const PROJECT_ROOT = path.resolve(__dirname, '../../');
const ASSERTIONS_FILE = path.join(PROJECT_ROOT, 'database/tests/helpers/assertions.sql');
const TESTS_DIR = path.join(PROJECT_ROOT, 'database/tests');

// Load environment variables if .env.local exists (for local running)
const envLocalPath = path.join(PROJECT_ROOT, '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envConfig = fs.readFileSync(envLocalPath, 'utf8');
  envConfig.split('\n').forEach((line) => {
    const [key, val] = line.split('=');
    if (key && val && !process.env[key]) {
      process.env[key.trim()] = val.trim();
    }
  });
}

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("Error: DATABASE_URL is not set.");
  process.exit(1);
}

// Filter tests based on CLI arguments
const args = process.argv.slice(2);
const filters = args.filter(arg => !arg.startsWith('-'));

const allTestFiles = globSync(path.join(TESTS_DIR, '**/*_test.sql'));
const testFiles = allTestFiles.filter((file) => {
  if (filters.length === 0) return true;
  return filters.some(filter => file.includes(filter));
});

if (testFiles.length === 0) {
  console.log("No test files found matching criteria.");
  process.exit(0);
}

console.log(`Found ${testFiles.length} test file(s) to execute.`);

async function runTest(file) {
  const client = new Client({
    connectionString: DATABASE_URL,
    // Add SSL support if targeting remote Supabase
    ssl: DATABASE_URL.includes('supabase.com') ? { rejectUnauthorized: false } : false
  });

  const relativePath = path.relative(PROJECT_ROOT, file);
  console.log(`\n▶ Running: ${relativePath}`);

  try {
    await client.connect();
    
    // Listen for notices (RAISE NOTICE)
    client.on('notice', (msg) => console.log(`  [NOTICE] ${msg.message}`));

    // Start Transaction
    await client.query('BEGIN');

    // Reset Sequences to match max(id)
    // This prevents "messed up" IDs where tests expect low numbers but sequences are high.
    // We do this INSIDE the transaction so it applies to the test run, but rolls back (setval is non-transactional though! Warning)
    // Actually setval IS NOT transactional. The changes persist. 
    // BUT that is exactly what we want: "reset ... to max current record". 
    // Since the database state (max id) behaves transactionally (we see only committed rows), 
    // resetting to max(id)+1 of the *current* data is correct for this test run.
    await resetSequences(client);

    // Inject Assertions
    if (fs.existsSync(ASSERTIONS_FILE)) {
        const assertionsSql = fs.readFileSync(ASSERTIONS_FILE, 'utf8');
        await client.query(assertionsSql);
    } else {
        console.warn("  WARNING: assertions.sql not found. Some tests may fail.");
    }

    // Read and Execute Test File
    const testSql = fs.readFileSync(file, 'utf8');
    await client.query(testSql);

    // Rollback (Always clean up)
    await client.query('ROLLBACK');
    console.log(`  ✔ PASSED`);
    return true;

  } catch (err) {
    // Attempt rollback regardless of error
    try { await client.query('ROLLBACK'); } catch (e) {}
    
    console.error(`  ❌ FAILED`);
    console.error(`  Error: ${err.message}`);
    if (err.context) console.error(`  Context: ${err.context}`);
    if (err.detail) console.error(`  Detail: ${err.detail}`);
    // Check for PostgreSQL error codes (e.g. 23505)
    if (err.code) console.error(`  Code: ${err.code}`);
    
    return false;
  } finally {
    await client.end();
  }
}

async function runAll() {
  let successCount = 0;
  let failureCount = 0;

  for (const file of testFiles) {
    const success = await runTest(file);
    if (success) successCount++;
    else failureCount++;
  }

  console.log('\n==================================================');
  console.log(`SUMMARY: ${successCount} Passed, ${failureCount} Failed`);
  console.log('==================================================');

  if (failureCount > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}



async function resetSequences(client) {
  try {
    // 1. Get List of Sequences
    const sequencesRes = await client.query(`
      SELECT 
        table_schema, 
        table_name, 
        column_name,
        pg_get_serial_sequence('"' || table_schema || '"."' || table_name || '"', column_name) AS seq
      FROM information_schema.columns
      WHERE table_schema IN ('public', 'eshop') 
        AND (column_default LIKE 'nextval%' OR is_identity = 'YES')
        AND pg_get_serial_sequence('"' || table_schema || '"."' || table_name || '"', column_name) IS NOT NULL;
    `);

    for (const row of sequencesRes.rows) {
      if (!row.seq) continue;
      
      // 2. Generate Safe Update for each
      // We read current sequence value directly from the sequence relation
      // And we prevent rewinding by using GREATEST found ID vs Current Sequence
      const seq = row.seq;
      const table = `"${row.table_schema}"."${row.table_name}"`;
      const col = `"${row.column_name}"`;

      const sql = `
        DO $$
        DECLARE
            v_seq_val bigint;
            v_max_id bigint;
        BEGIN
            -- Get Sequence Value
            EXECUTE 'SELECT last_value FROM ' || '${seq}' INTO v_seq_val;
            
            -- Get Max ID
            EXECUTE 'SELECT COALESCE(MAX(${col}), 0) FROM ${table}' INTO v_max_id;
            
            -- Only advance, never rewind (Safe)
            IF v_max_id >= v_seq_val THEN
                PERFORM setval('${seq}', v_max_id + 1, false);
            END IF;
        END $$;
      `;
      
      await client.query(sql);
    }
  } catch (err) {
    console.warn(`  [WARN] Failed to reset sequences: ${err.message}`);
  }
}

runAll();
