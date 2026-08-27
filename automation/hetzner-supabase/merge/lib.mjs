import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SOURCES = Object.freeze({
  default: 'kjdpmixlnhntmxjedpxh',
  a: 'lwfpdjxsdmkfyrzqbrlk',
});

export const REPOSITORY_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
);

export function parseKeyValueFile(filePath) {
  const values = new Map();
  if (!fs.existsSync(filePath)) return values;
  for (const rawLine of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const separator = line.indexOf('=');
    if (separator < 1) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.length >= 2 && ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))) {
      value = value.slice(1, -1);
    }
    values.set(key, value);
  }
  return values;
}

export function accessToken() {
  const local = parseKeyValueFile(path.join(REPOSITORY_ROOT, '.env.local'));
  const token = process.env.SUPABASE_ACCESS_TOKEN || local.get('SUPABASE_ACCESS_TOKEN');
  if (!token) throw new Error('SUPABASE_ACCESS_TOKEN is required');
  return token;
}

export function assertPrivateOutput(outputPath) {
  const absolute = path.resolve(outputPath);
  const relative = path.relative(REPOSITORY_ROOT, absolute);
  if (relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..')) {
    throw new Error('production inventory output must be outside the repository');
  }
  return absolute;
}

export function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) =>
      `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

export function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

export function buildInventoryManifest({ inventory, inventoryChecksum }) {
  const counts = inventory.exact_row_counts;
  return {
    manifest_version: 1,
    run_id: `inventory-${inventory.source.alias}-${inventory.generated_at.replaceAll(/[^0-9]/g, '')}`,
    phase: 'inventory',
    sources: [{
      alias: inventory.source.alias,
      project_ref: inventory.source.project_ref,
      schema_fingerprint: inventory.schema_fingerprint_sha256,
      snapshot_at: inventory.generated_at,
      journal_position: null,
    }],
    transformation_version: 'inventory-only-2026-08-27.1',
    counts: {
      relations: inventory.catalog.relations.length,
      counted_tables: Object.keys(counts).length,
      rows: Object.values(counts).reduce((sum, value) => sum + value, 0),
      edge_functions: inventory.edge_functions.functions.length,
      storage_objects: Number(inventory.supplemental?.storage?.object_count ?? 0),
      storage_bytes: Number(inventory.supplemental?.storage?.object_bytes ?? 0),
      auth_users: Number(inventory.supplemental?.auth?.users ?? 0),
    },
    checksums: {
      schema: inventory.schema_fingerprint_sha256,
      inventory: inventoryChecksum,
    },
    validation: {
      status: 'blocked',
      unresolved_conflicts: null,
      orphan_foreign_keys: null,
      journal_lag: null,
      notes: inventory.limitations,
    },
    created_at: inventory.generated_at,
    signature: null,
  };
}

export async function managementQuery({ projectRef, token, query }) {
  if (!Object.values(SOURCES).includes(projectRef)) {
    throw new Error(`unapproved source project: ${projectRef}`);
  }
  const normalized = query.replace(/--.*$/gm, '').trimStart().toLowerCase();
  if (!normalized.startsWith('select') && !normalized.startsWith('with')) {
    throw new Error('inventory permits SELECT/CTE statements only');
  }
  const response = await fetch(
    `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    },
  );
  if (!response.ok) {
    const detail = (await response.text()).replaceAll(token, '<redacted>').slice(0, 1200);
    throw new Error(`management query failed for ${projectRef}: HTTP ${response.status}: ${detail}`);
  }
  const body = await response.json();
  return Array.isArray(body) ? body : (body.result ?? body.data ?? []);
}

export function quoteIdentifier(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}
