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
const ASSERTIONS_FILE = path.join(PROJECT_ROOT, 'scripts/tests/helpers/assertions.sql');
const TESTS_DIR = path.join(PROJECT_ROOT, 'scripts/tests');

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

runAll();
