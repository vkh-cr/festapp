#!/usr/bin/env node
import fs from 'node:fs';
import {
  SOURCES,
  assertNewEvidencePaths,
  assertPrivateOutput,
  sha256,
  stableJson,
} from './lib.mjs';

const dimensions = {
  relations: ['schema_name', 'table_name'],
  columns: ['schema_name', 'table_name', 'column_name'],
  constraints: ['schema_name', 'table_name', 'constraint_name'],
  routines: ['schema_name', 'routine_name', 'identity_arguments'],
  policies: ['schema_name', 'table_name', 'policy_name'],
  grants: ['schema_name', 'table_name', 'grantee', 'privilege_type'],
  extensions: ['name'],
  publications: ['name'],
  roles: ['name'],
  collations: ['schema_name', 'name'],
};

function structural(dimension, value) {
  if (dimension !== 'relations') return value;
  const { total_bytes, estimated_rows, ...result } = value;
  return result;
}

function keyed(dimension, values) {
  const keys = dimensions[dimension];
  return new Map((values ?? []).map((raw) => {
    const value = structural(dimension, raw);
    return [keys.map((key) => value[key]).join('|'), value];
  }));
}

function compareDimension(dimension, sourceValues, targetValues) {
  const source = keyed(dimension, sourceValues);
  const target = keyed(dimension, targetValues);
  const names = [...new Set([...source.keys(), ...target.keys()])].sort();
  return names.flatMap((key) => {
    const sourceValue = source.get(key) ?? null;
    const targetValue = target.get(key) ?? null;
    if (sourceValue && targetValue && stableJson(sourceValue) === stableJson(targetValue)) return [];
    return [{ key, source: sourceValue, target: targetValue }];
  });
}

function scopeCounts(differences) {
  let application = 0;
  let platform = 0;
  for (const values of Object.values(differences)) {
    for (const difference of values) {
      const schemaName = difference.target?.schema_name ?? difference.source?.schema_name ?? null;
      if (schemaName === 'public' || schemaName === 'eshop') application += 1;
      else platform += 1;
    }
  }
  return { application, platform };
}

export function buildCanonicalDriftReport({ defaultInventory, aInventory, targetCatalog }) {
  if (defaultInventory.source?.project_ref !== SOURCES.default || defaultInventory.source?.alias !== 'default') {
    throw new Error('invalid default source identity');
  }
  if (aInventory.source?.project_ref !== SOURCES.a || aInventory.source?.alias !== 'a') {
    throw new Error('invalid a source identity');
  }
  if (!Array.isArray(targetCatalog.relations) || !String(targetCatalog.postgres_version ?? '').startsWith('17.')) {
    throw new Error('invalid canonical PG17 target catalog');
  }

  const comparisons = {};
  for (const source of ['default', 'a']) {
    const inventory = source === 'default' ? defaultInventory : aInventory;
    const differences = Object.fromEntries(Object.keys(dimensions).map((dimension) => [
      dimension,
      compareDimension(dimension, inventory.catalog[dimension], targetCatalog[dimension]),
    ]));
    comparisons[source] = {
      source_fingerprint_sha256: inventory.schema_fingerprint_sha256,
      differences,
      scope_counts: scopeCounts(differences),
      unresolved_catalog_differences: Object.values(differences).reduce((sum, values) => sum + values.length, 0),
    };
  }

  const fingerprintInput = Object.fromEntries([
    ['postgres_version_num', targetCatalog.postgres_version_num],
    ...Object.keys(dimensions).map((dimension) => [
      dimension,
      (targetCatalog[dimension] ?? []).map((value) => structural(dimension, value)),
    ]),
  ]);
  const report = {
    report_version: 1,
    generated_at: new Date().toISOString(),
    target: {
      kind: 'isolated-self-hosted-canonical-rehearsal',
      postgres_version: targetCatalog.postgres_version,
      schema_fingerprint_sha256: sha256(stableJson(fingerprintInput)),
    },
    comparisons,
    validation: {
      status: 'blocked',
      production_mutations_performed: false,
      blocker: 'every catalog difference requires an explicit migration disposition before source-row import',
    },
  };
  report.report_sha256 = sha256(stableJson(report));
  return report;
}

function main() {
  const [defaultPath, aPath, targetPath, outputPath] = process.argv.slice(2);
  if (!defaultPath || !aPath || !targetPath || !outputPath) {
    throw new Error('usage: canonical-drift.mjs DEFAULT.json A.json TARGET-CATALOG.json OUTPUT.json');
  }
  const output = assertPrivateOutput(outputPath);
  assertNewEvidencePaths([output]);
  const report = buildCanonicalDriftReport({
    defaultInventory: JSON.parse(fs.readFileSync(defaultPath, 'utf8')),
    aInventory: JSON.parse(fs.readFileSync(aPath, 'utf8')),
    targetCatalog: JSON.parse(fs.readFileSync(targetPath, 'utf8')),
  });
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
  process.stdout.write(`canonical drift: default=${report.comparisons.default.unresolved_catalog_differences} a=${report.comparisons.a.unresolved_catalog_differences} target=${report.target.schema_fingerprint_sha256}\n`);
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}
