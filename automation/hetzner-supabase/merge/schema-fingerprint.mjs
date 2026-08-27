#!/usr/bin/env node
import fs from 'node:fs';
import { SOURCES, sha256, stableJson } from './lib.mjs';

function readInventory(filePath) {
  const value = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (SOURCES[value.source?.alias] !== value.source?.project_ref) {
    throw new Error(`${filePath}: unapproved source identity`);
  }
  return value;
}

function keyed(values, keys) {
  return new Map(values.map((value) => [keys.map((key) => value[key]).join('|'), value]));
}

function differences(leftValues, rightValues, keys) {
  const left = keyed(leftValues, keys);
  const right = keyed(rightValues, keys);
  const names = [...new Set([...left.keys(), ...right.keys()])].sort();
  return names.flatMap((name) => {
    const leftValue = left.get(name);
    const rightValue = right.get(name);
    if (leftValue && rightValue && stableJson(leftValue) === stableJson(rightValue)) return [];
    return [{ key: name, default: leftValue ?? null, a: rightValue ?? null }];
  });
}

const [defaultPath, aPath] = process.argv.slice(2);
if (!defaultPath || !aPath) {
  throw new Error('usage: schema-fingerprint.mjs DEFAULT_INVENTORY A_INVENTORY');
}
const defaultInventory = readInventory(defaultPath);
const aInventory = readInventory(aPath);
if (defaultInventory.source.alias !== 'default' || aInventory.source.alias !== 'a') {
  throw new Error('inventories must be ordered as default then a');
}

const report = {
  report_version: 1,
  generated_at: new Date().toISOString(),
  source_fingerprints: {
    default: defaultInventory.schema_fingerprint_sha256,
    a: aInventory.schema_fingerprint_sha256,
  },
  postgres: {
    default: defaultInventory.catalog.postgres_version,
    a: aInventory.catalog.postgres_version,
    same_major: String(defaultInventory.catalog.postgres_version_num).slice(0, 2) ===
      String(aInventory.catalog.postgres_version_num).slice(0, 2),
  },
  differences: {
    relations: differences(defaultInventory.catalog.relations, aInventory.catalog.relations, ['schema_name', 'table_name']),
    columns: differences(defaultInventory.catalog.columns, aInventory.catalog.columns, ['schema_name', 'table_name', 'column_name']),
    constraints: differences(defaultInventory.catalog.constraints, aInventory.catalog.constraints, ['schema_name', 'table_name', 'constraint_name']),
    routines: differences(defaultInventory.catalog.routines, aInventory.catalog.routines, ['schema_name', 'routine_name', 'identity_arguments']),
    policies: differences(defaultInventory.catalog.policies, aInventory.catalog.policies, ['schema_name', 'table_name', 'policy_name']),
    extensions: differences(defaultInventory.catalog.extensions, aInventory.catalog.extensions, ['name']),
  },
};
report.unresolved_schema_drift = Object.values(report.differences).reduce((sum, values) => sum + values.length, 0);
report.report_sha256 = sha256(stableJson(report));
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
