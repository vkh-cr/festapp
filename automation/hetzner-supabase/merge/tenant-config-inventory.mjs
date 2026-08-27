#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  REPOSITORY_ROOT,
  SOURCES,
  assertNewEvidencePaths,
  assertPrivateOutput,
  sha256,
  stableJson,
} from './lib.mjs';

const PUBLIC_FIELDS = Object.freeze([
  'DEPLOY_TARGET',
  'DOMAIN',
  'FORCE_OCCASION_LINK',
  'IMAGE_PROJECT_ID',
  'ORGANIZATION_ID',
  'SUPABASE_URL',
]);

export function parseTenantConfig(text, branch) {
  const values = new Map();
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const separator = line.indexOf('=');
    if (separator < 1) continue;
    const key = line.slice(0, separator).trim();
    if (!PUBLIC_FIELDS.includes(key)) continue;
    let value = line.slice(separator + 1).trim();
    if (value.length >= 2 && ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))) value = value.slice(1, -1);
    values.set(key, value);
  }
  const url = values.get('SUPABASE_URL') ?? '';
  const projectRef = url.match(/^https:\/\/([a-z0-9]+)\.supabase\.co$/)?.[1] ?? null;
  const sourceAlias = Object.entries(SOURCES).find(([, ref]) => ref === projectRef)?.[0] ?? null;
  const organizationId = Number(values.get('ORGANIZATION_ID'));
  const occasionLink = values.get('FORCE_OCCASION_LINK') || null;
  return {
    branch,
    source_alias: sourceAlias,
    project_ref: projectRef,
    organization_id: Number.isSafeInteger(organizationId) ? organizationId : null,
    occasion_link: occasionLink,
    reachability: occasionLink ? 'forced-occasion' : 'all-visible-occasions',
    image_project_id: values.get('IMAGE_PROJECT_ID') || null,
    deploy_target: values.get('DEPLOY_TARGET') || null,
    domain: values.get('DOMAIN') || null,
  };
}

function git(args) {
  return execFileSync('git', args, {
    cwd: REPOSITORY_ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
}

export function discoverProductionTenantConfigs() {
  const refs = git([
    'for-each-ref',
    '--format=%(refname:short)',
    'refs/remotes/origin/prod/',
  ]).split(/\r?\n/).filter(Boolean).sort();
  const entries = [];
  for (const ref of refs) {
    let text;
    try {
      text = git(['show', `${ref}:automation/project.conf`]);
    } catch {
      entries.push({ branch: ref, status: 'missing-project-conf' });
      continue;
    }
    entries.push({ ...parseTenantConfig(text, ref), status: 'discovered' });
  }
  return entries;
}

export function buildTenantConfigInventory(entries) {
  const unknown = entries.filter((entry) =>
    entry.status !== 'discovered' || entry.source_alias === null || entry.organization_id === null);
  const sourceA = entries.filter((entry) => entry.source_alias === 'a');
  const broadSourceA = sourceA.filter((entry) => entry.reachability === 'all-visible-occasions');
  return {
    inventory_version: 1,
    entries,
    counts: {
      production_configs: entries.length,
      default: entries.filter((entry) => entry.source_alias === 'default').length,
      a: sourceA.length,
      unknown: unknown.length,
      a_broad_reachability: broadSourceA.length,
    },
    validation: {
      status: unknown.length === 0 ? 'blocked' : 'fail',
      blockers: [
        ...unknown.map((entry) => `${entry.branch}: invalid or unknown project configuration`),
        ...broadSourceA.map((entry) =>
          `${entry.branch}: dynamic source-a entrypoint requires all visible occasions to adopt RPC writes or be proven unreachable`),
      ],
      notes: [
        'branch configuration proves configured reachability, not deployed version or traffic',
        'secrets and anon keys are deliberately excluded',
      ],
    },
  };
}

async function main() {
  const outputIndex = process.argv.indexOf('--output');
  if (outputIndex < 0 || !process.argv[outputIndex + 1]) {
    throw new Error('usage: tenant-config-inventory.mjs --output /private/path/tenant-configs.json');
  }
  const output = assertPrivateOutput(process.argv[outputIndex + 1]);
  assertNewEvidencePaths([output]);
  const report = buildTenantConfigInventory(discoverProductionTenantConfigs());
  report.generated_at = new Date().toISOString();
  report.inventory_sha256 = sha256(stableJson(report));
  fs.mkdirSync(path.dirname(output), { recursive: true, mode: 0o700 });
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
  process.stdout.write(`tenant config inventory: configs=${report.counts.production_configs}, a=${report.counts.a}, broad_a=${report.counts.a_broad_reachability}, status=${report.validation.status}, sha256=${report.inventory_sha256}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
