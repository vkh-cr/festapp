/**
 * Bank Account Import Integration Test
 *
 * Tests the process_email_transaction RPC end-to-end:
 *   1. Creates a test bank account, payment_info, and order
 *   2. Calls process_email_transaction RPC with matching VS
 *   3. Verifies the transaction was created and order marked as paid
 *   4. Cleans up all test data
 *
 * Environment (reads from ../../../../.env.local or env vars):
 *   DATABASE_URL  — Direct PostgreSQL connection string
 */
import { describe, it, expect, afterAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// ─── Config ──────────────────────────────────────────────────────

function loadEnvLocal(): Record<string, string> {
  const vars: Record<string, string> = {};
  try {
    const envPath = resolve(__dirname, '../../../../.env.local');
    const content = readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) continue;
      vars[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
    }
  } catch {
    // .env.local not found — rely on env vars
  }
  return vars;
}

const envLocal = loadEnvLocal();
const env = (key: string) => process.env[key] || envLocal[key] || '';

const DATABASE_URL = env('DATABASE_URL');
const skip = !DATABASE_URL;

// ─── Lazy pg ─────────────────────────────────────────────────────

async function getPool() {
  const { default: pg } = await import('pg');
  return new pg.Pool({ connectionString: DATABASE_URL, max: 2 });
}

// ─── Test ────────────────────────────────────────────────────────

describe.skipIf(skip)('Bank Import: process_email_transaction RPC', () => {
  const rnd = Math.floor(Math.random() * 1000000);
  const testVS = (90000000 + rnd).toString();
  const testAmount = 100.0;

  let pool: any;
  let bankAccountId: number | null = null;
  let createdBankAccount = false;
  let paymentInfoId: number | null = null;
  let orderId: number | null = null;
  let organizationId: number | null = null;
  let unitId: number | null = null;
  let occasionId: number | null = null;
  const transactionIds: number[] = [];

  afterAll(async () => {
    if (!pool) return;
    try {
      if (transactionIds.length > 0) {
        await pool.query('DELETE FROM eshop.transactions WHERE id = ANY($1)', [transactionIds]);
      }
      if (orderId) {
        await pool.query('DELETE FROM eshop.orders WHERE id = $1', [orderId]);
      }
      if (paymentInfoId) {
        await pool.query('DELETE FROM eshop.payment_info WHERE id = $1', [paymentInfoId]);
      }
      if (occasionId) {
        await pool.query('DELETE FROM public.occasions WHERE id = $1', [occasionId]);
      }
      if (unitId) {
        await pool.query('DELETE FROM public.units WHERE id = $1', [unitId]);
      }
      if (organizationId) {
        await pool.query('DELETE FROM public.organizations WHERE id = $1', [organizationId]);
      }
      if (createdBankAccount && bankAccountId) {
        await pool.query('DELETE FROM eshop.bank_accounts WHERE id = $1', [bankAccountId]);
      }
    } catch (err) {
      console.error('Cleanup error:', err);
    }
    await pool.end();
  });

  it('sets up test data (bank account, order, payment_info)', async () => {
    pool = await getPool();

    const { rows: organizationRows } = await pool.query(
      `INSERT INTO public.organizations (title)
       VALUES ($1) RETURNING id`,
      [`Bank import integration ${rnd}`]
    );
    organizationId = organizationRows[0].id;

    const { rows: unitRows } = await pool.query(
      `INSERT INTO public.units (title, organization)
       VALUES ($1, $2) RETURNING id`,
      [`Bank import integration ${rnd}`, organizationId]
    );
    unitId = unitRows[0].id;

    const { rows: occasionRows } = await pool.query(
      `INSERT INTO public.occasions
         (title, link, start_time, end_time, organization, unit)
       VALUES ($1, $2, now(), now() + interval '1 day', $3, $4)
       RETURNING id`,
      [`Bank import integration ${rnd}`, `bank-import-integration-${rnd}`, organizationId, unitId]
    );
    occasionId = occasionRows[0].id;

    const { rows: baRows } = await pool.query('SELECT id FROM eshop.bank_accounts LIMIT 1');
    if (baRows.length > 0) {
      bankAccountId = baRows[0].id;
    } else {
      const { rows } = await pool.query(
        `INSERT INTO eshop.bank_accounts (title, type, supported_currencies, account_number)
         VALUES ('Test Bank', 'Generic', ARRAY['CZK'], '987654321/2010') RETURNING id`
      );
      bankAccountId = rows[0].id;
      createdBankAccount = true;
    }

    const { rows: piRows } = await pool.query(
      `INSERT INTO eshop.payment_info (amount, currency_code, variable_symbol, paid, bank_account)
       VALUES ($1, 'CZK', $2, 0, $3) RETURNING id`,
      [testAmount, parseInt(testVS), bankAccountId]
    );
    paymentInfoId = piRows[0].id;

    const { rows: oRows } = await pool.query(
      `INSERT INTO eshop.orders (payment_info, price, currency_code, state, occasion)
       VALUES ($1, $2, 'CZK', 'ordered', $3) RETURNING id`,
      [paymentInfoId, testAmount, occasionId]
    );
    orderId = oRows[0].id;

    expect(orderId).toBeTruthy();
    expect(paymentInfoId).toBeTruthy();
  });

  it('pairs transaction via RPC and returns inserted status', async () => {
    const payload = {
      bank_account_id: Number(bankAccountId),
      external_id: 'TEST-EMAIL-' + Date.now(),
      amount: testAmount,
      currency: 'CZK',
      counter_account: '123/0100',
      vs: testVS,
      ks: '0308',
      ss: null,
      message: 'Test Email Pairing',
      date: new Date().toISOString(),
      transaction_id: Date.now(),
      sender_name: 'Test Sender',
    };

    const { rows } = await pool.query(
      'SELECT public.process_email_transaction($1) as data',
      [JSON.stringify(payload)]
    );
    const result = rows[0].data;

    expect(result.id).toBeTruthy();
    expect(result.status).toBe('inserted');
    expect(result.paired).toBe(true);

    transactionIds.push(result.id);
  });

  it('marks order as paid after pairing', async () => {
    const { rows } = await pool.query('SELECT state FROM eshop.orders WHERE id = $1', [orderId]);
    expect(rows[0].state).toBe('paid');
  });
});
