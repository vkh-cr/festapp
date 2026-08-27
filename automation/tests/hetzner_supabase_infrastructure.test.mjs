import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '../..');
const terraformDir = path.join(root, 'automation/hetzner-supabase/terraform');

function read(name) {
  return fs.readFileSync(path.join(terraformDir, name), 'utf8');
}

test('Hetzner rehearsal module pins stable Terraform/provider and protected low-cost compute', () => {
  const versions = read('versions.tf');
  const variables = read('variables.tf');
  const server = read('server.tf');
  const pins = JSON.parse(fs.readFileSync(path.join(root, 'automation/hetzner-supabase/runtime/pins.json')));

  assert.match(versions, /required_version\s*=\s*"~> 1\.16\.0"/);
  assert.match(versions, /version\s*=\s*"= 1\.68\.0"/);
  assert.match(variables, /default\s*=\s*"cax11"/);
  assert.match(variables, /default\s*=\s*"nbg1"/);
  assert.equal(pins.architecture, 'linux/arm64');
  assert.equal(pins.supabase.registryEvidence.platform, pins.architecture);
  assert.match(server, /delete_protection\s*=\s*true/);
  assert.match(server, /rebuild_protection\s*=\s*true/);
  assert.match(server, /backups\s*=\s*var\.enable_backups/);
  assert.match(variables, /variable "enable_backups"[\s\S]*default\s*=\s*false/);
});

test('Hetzner firewall never exposes PostgreSQL and restricts SSH to approved CIDRs', () => {
  const firewall = read('firewall.tf');
  assert.doesNotMatch(firewall, /port\s*=\s*"5432"/);
  assert.match(firewall, /port\s*=\s*"22"[\s\S]*source_ips\s*=\s*var\.admin_cidrs/);
  assert.match(firewall, /port\s*=\s*"80"/);
  assert.match(firewall, /port\s*=\s*"443"/);
});

test('Hetzner provisioning refuses an unrestricted SSH allowlist', () => {
  const variables = read('variables.tf');
  assert.match(variables, /admin_cidrs must contain explicit IPv4 or IPv6 CIDRs/);
  assert.match(variables, /0\.0\.0\.0\/0/);
  assert.match(variables, /::\/0/);
});

test('rehearsal runtime is immutable, loopback-only and non-destructive', () => {
  const runtime = path.join(root, 'automation/hetzner-supabase/runtime');
  const deploy = fs.readFileSync(path.join(runtime, 'deploy-rehearsal.sh'), 'utf8');
  const compose = fs.readFileSync(path.join(runtime, 'docker-compose.festapp.yml'), 'utf8');
  assert.match(deploy, /241bb11c0627f2981746d37033f57dbfa81d29b0/);
  assert.match(deploy, /refusing to overwrite/);
  assert.doesNotMatch(deploy, /rm\s|down\s+-v|prune/);
  assert.match(compose, /127\.0\.0\.1:8000:8000/);
  assert.doesNotMatch(compose, /5432:5432/);
  assert.equal((compose.match(/@sha256:/g) ?? []).length, 11);
  const verifier = fs.readFileSync(path.join(runtime, 'verify-pins.mjs'), 'utf8');
  assert.match(verifier, /assert\.ok\(arm64, `\$\{name\} has no linux\/arm64 registry manifest`\)/);
  assert.doesNotMatch(verifier, /\?\? manifests\[0\]/);
});

test('rehearsal environment remains valid when sourced by a shell', () => {
  const runtime = path.join(root, 'automation/hetzner-supabase/runtime');
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'festapp-rehearsal-env-'));
  fs.writeFileSync(
    path.join(tempDir, '.env'),
    'STUDIO_DEFAULT_ORGANIZATION=Default Organization\nSTUDIO_DEFAULT_PROJECT=Default Project\n',
  );

  const configured = spawnSync('python3', [path.join(runtime, 'configure-rehearsal-env.py')], {
    cwd: tempDir,
    encoding: 'utf8',
  });
  assert.equal(configured.status, 0, configured.stderr);
  const envText = fs.readFileSync(path.join(tempDir, '.env'), 'utf8');
  assert.match(envText, /STUDIO_DEFAULT_ORGANIZATION='Festapp Rehearsal'/);
  assert.match(envText, /STUDIO_DEFAULT_PROJECT='Canonical Merge Rehearsal'/);

  const sourced = spawnSync('bash', ['-c', 'set -a; source "$1"', 'bash', path.join(tempDir, '.env')], {
    encoding: 'utf8',
  });
  assert.equal(sourced.status, 0, sourced.stderr);
});
