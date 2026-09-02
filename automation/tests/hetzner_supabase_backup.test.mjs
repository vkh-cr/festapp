import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const backup = path.join(root, 'automation/hetzner-supabase/backup');

test('scheduled backup is encrypted, bounded, off-host and never authorizes cutover', () => {
  const create = fs.readFileSync(path.join(backup, 'create-online-encrypted-backup.sh'), 'utf8');
  assert.match(create, /plaintext_artifacts_written:false/);
  assert.match(create, /online-operational-backup-not-promotion-rpo0/);
  assert.match(create, /production_cutover_authorized:false/);
  assert.match(create, /festapp-supabase-backups/);
  assert.match(create, /rclone.+--immutable/);
  assert.match(create, /rclone.+check/);
  assert.match(create, /--min-age/);
  assert.doesNotMatch(create, /docker compose (?:stop|down|restart|up)/);
  assert.doesNotMatch(create, /ALTER |DELETE FROM|DROP DATABASE/);
});

test('backup shell and systemd contracts are syntactically valid', () => {
  for (const name of ['create-online-encrypted-backup.sh', 'install-online-backup.sh']) {
    const result = spawnSync('bash', ['-n', path.join(backup, name)], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
  }
  const service = fs.readFileSync(path.join(backup, 'festapp-supabase-backup.service'), 'utf8');
  const timer = fs.readFileSync(path.join(backup, 'festapp-supabase-backup.timer'), 'utf8');
  assert.match(service, /ProtectSystem=strict/);
  assert.match(service, /ReadWritePaths=\/var\/backups\/festapp-supabase/);
  assert.match(timer, /Persistent=true/);
});
