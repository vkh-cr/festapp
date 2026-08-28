#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  REPOSITORY_ROOT,
  SOURCES,
  accessToken,
  assertCanonicalDefaultTarget,
  assertNewEvidencePaths,
  assertPrivateOutput,
  managementQuery,
  sha256,
  stableJson,
} from './lib.mjs';

const MIGRATIONS_DIRECTORY = path.join(REPOSITORY_ROOT, 'supabase/migrations');
const CLIENT_SYNC_EXPANSION = '20260802234000';
const SEARCH_PATH_HARDENING = '20260827120000';
const MIGRATION_FILE = /^(\d{14})_([a-z0-9_]+)\.sql$/;

export function repositoryMigrationInventory(directory = MIGRATIONS_DIRECTORY) {
  const migrations = fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.sql'))
    .map((entry) => {
      const match = entry.name.match(MIGRATION_FILE);
      if (!match) throw new Error(`unsupported migration filename: ${entry.name}`);
      const contents = fs.readFileSync(path.join(directory, entry.name));
      return {
        version: match[1],
        name: match[2],
        file: entry.name,
        sha256: sha256(contents),
      };
    })
    .sort((left, right) => left.file.localeCompare(right.file));
  const versions = migrations.map((entry) => entry.version);
  if (new Set(versions).size !== versions.length) {
    throw new Error('repository migration versions must be unique');
  }
  return migrations;
}

function sourceComparison(history, repository) {
  const recorded = new Map(history.map((entry) => [String(entry.version), entry]));
  if (recorded.size !== history.length) {
    throw new Error('source migration history contains duplicate versions');
  }
  const expected = new Map(repository.map((entry) => [entry.version, entry]));
  const nameMismatches = history.flatMap((entry) => {
    const repositoryEntry = expected.get(String(entry.version));
    if (!repositoryEntry || !entry.name || entry.name === repositoryEntry.name) return [];
    return [{
      version: String(entry.version),
      repository_name: repositoryEntry.name,
      recorded_name: entry.name,
    }];
  });
  return {
    recorded_count: history.length,
    first_recorded_version: [...recorded.keys()].sort()[0] ?? null,
    latest_recorded_version: [...recorded.keys()].sort().at(-1) ?? null,
    repository_versions_not_recorded: repository
      .filter((entry) => !recorded.has(entry.version))
      .map((entry) => entry.version),
    recorded_versions_not_in_repository: [...recorded.keys()]
      .filter((version) => !expected.has(version))
      .sort(),
    recorded_name_mismatches: nameMismatches,
    client_sync_expansion_recorded: recorded.has(CLIENT_SYNC_EXPANSION),
    search_path_hardening_recorded: recorded.has(SEARCH_PATH_HARDENING),
  };
}

export function buildMigrationHistoryReport({ repository, sources }) {
  const compared = {
    default: sourceComparison(sources.default, repository),
    a: sourceComparison(sources.a, repository),
  };
  const blockers = [];
  if (!compared.default.client_sync_expansion_recorded) {
    blockers.push('default does not record the client-sync expansion migration');
  }
  if (!compared.a.client_sync_expansion_recorded) {
    blockers.push('source a does not record the client-sync expansion migration');
  }
  for (const alias of ['default', 'a']) {
    const source = compared[alias];
    if (source.recorded_versions_not_in_repository.length > 0) {
      blockers.push(`${alias} records migrations absent from the repository`);
    }
    if (source.recorded_name_mismatches.length > 0) {
      blockers.push(`${alias} records migration names that differ from the repository`);
    }
  }
  blockers.push('recorded history does not prove SQL effects; catalog reconciliation and rehearsal remain required');
  return {
    report_version: 1,
    scope: 'read-only-migration-history-comparison',
    repository: {
      migration_count: repository.length,
      first_version: repository[0]?.version ?? null,
      latest_version: repository.at(-1)?.version ?? null,
      history_sha256: sha256(stableJson(repository)),
      client_sync_expansion_version: CLIENT_SYNC_EXPANSION,
      search_path_hardening_version: SEARCH_PATH_HARDENING,
    },
    sources: compared,
    validation: {
      status: 'blocked',
      blockers,
      deployment_authorized: false,
      production_mutations_performed: false,
    },
  };
}

async function inspectSourceHistory({ alias, token }) {
  if (alias === 'default') await assertCanonicalDefaultTarget({ token });
  const projectRef = SOURCES[alias];
  const table = await managementQuery({
    projectRef,
    token,
    query: `SELECT to_regclass('supabase_migrations.schema_migrations')::text AS table_name`,
  });
  if (table[0]?.table_name !== 'supabase_migrations.schema_migrations') {
    throw new Error(`${alias}: supabase migration history table is unavailable`);
  }
  return managementQuery({
    projectRef,
    token,
    query: `SELECT version::text AS version,
        NULLIF(to_jsonb(m)->>'name', '') AS name
      FROM supabase_migrations.schema_migrations AS m
      ORDER BY version::text`,
  });
}

async function main() {
  const outputIndex = process.argv.indexOf('--output');
  if (outputIndex < 0 || !process.argv[outputIndex + 1]) {
    throw new Error('usage: migration-history-inventory.mjs --output /private/path/migration-history.json');
  }
  const output = assertPrivateOutput(process.argv[outputIndex + 1]);
  assertNewEvidencePaths([output]);
  const token = accessToken();
  const repository = repositoryMigrationInventory();
  const [defaultHistory, aHistory] = await Promise.all([
    inspectSourceHistory({ alias: 'default', token }),
    inspectSourceHistory({ alias: 'a', token }),
  ]);
  const report = buildMigrationHistoryReport({
    repository,
    sources: { default: defaultHistory, a: aHistory },
  });
  report.generated_at = new Date().toISOString();
  report.source_projects = SOURCES;
  report.report_sha256 = sha256(stableJson(report));
  fs.mkdirSync(path.dirname(output), { recursive: true, mode: 0o700 });
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
  process.stdout.write(
    `migration history: status=${report.validation.status}, repository=${repository.length}, ` +
    `default_recorded=${defaultHistory.length}, a_recorded=${aHistory.length}, ` +
    `sha256=${report.report_sha256}\n`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
