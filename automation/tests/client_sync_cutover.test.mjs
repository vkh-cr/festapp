#!/usr/bin/env node

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  activationMissingConfirmations,
  buildActivateSql,
  buildDisableSql,
  buildPreparePublicationSql,
  buildPreflightSql,
  executeDisableLifecycle,
  executeEnableLifecycle,
} from '../release/client_sync_cutover.mjs';

const target = { organization: 9, occasionLink: 'occasion-under-test' };

test('activation derives revocations from the latest canonical registry', () => {
  const sql = buildActivateSql(target);
  assert.match(sql, /SELECT DISTINCT source_relation/);
  assert.match(sql, /REVOKE INSERT, UPDATE, DELETE/);
  assert.match(sql, /SET cutover_ready=true/);
  assert.match(sql, /get_app_config_v219/);
  assert.match(sql, /another occasion already has client_sync_v1 enabled/);
  assert.doesNotMatch(sql, /occasion_id\s*=\s*643/i);
});

test('publication preparation enqueues one canonical full build without enabling the flag', () => {
  const sql = buildPreparePublicationSql(target);
  assert.match(sql, /client_sync\.cutover\.enable/);
  assert.match(sql, /client_projection_dirty_keys/);
  assert.match(sql, /live_public/);
  assert.doesNotMatch(sql, /'true'::jsonb/);
});

test('preflight is read-only and reports the two activation gates', () => {
  const sql = buildPreflightSql(target);
  assert.match(sql, /ordinaryDmlTables/);
  assert.match(sql, /pgauditRolesConfigured/);
  assert.doesNotMatch(
    sql,
    /(?:^|;)\s*(?:UPDATE|DELETE|INSERT|REVOKE)\b/im,
  );
});

test('kill switch only disables the target capability', () => {
  const sql = buildDisableSql(target);
  assert.match(sql, /'false'::jsonb/);
  assert.match(sql, /expected one target occasion/);
  assert.doesNotMatch(sql, /cutover_ready\s*=\s*false/i);
});

test('activation accepts an explicit audit-retention risk decision', () => {
  expectMissing(
    [
      '--audit-risk-accepted',
      '--legacy-writer-gate-confirmed',
      '--confirm=occasion-under-test',
    ],
    [],
  );
});

test('enable publishes and verifies the head before changing the flag', async () => {
  const calls = [];
  await executeEnableLifecycle({
    preflight: async () => calls.push('preflight'),
    preparePublication: async () => calls.push('prepare'),
    publishInitialHead: async () => calls.push('publish'),
    verifyPublishedHead: async () => calls.push('verify'),
    setEnabledFlag: async () => calls.push('flag'),
  });
  assert.deepEqual(calls, ['preflight','prepare','publish','verify','flag']);
});

test('disable leaves the flag enabled until exact head deletion is verified', async () => {
  const calls = [];
  await executeDisableLifecycle({
    preflight: async () => calls.push('preflight'),
    deletePublicHead: async () => calls.push('delete'),
    verifyNotPublished: async () => calls.push('verify404'),
    setDisabledFlag: async () => calls.push('flag'),
  });
  assert.deepEqual(calls, ['preflight','delete','verify404','flag']);
});

test('disable failure before verification never changes the flag', async () => {
  const calls = [];
  await assert.rejects(executeDisableLifecycle({
    preflight: async () => calls.push('preflight'),
    deletePublicHead: async () => { calls.push('delete'); throw new Error('R2 unavailable'); },
    verifyNotPublished: async () => calls.push('verify404'),
    setDisabledFlag: async () => calls.push('flag'),
  }), /R2 unavailable/);
  assert.deepEqual(calls, ['preflight','delete']);
});

function expectMissing(args, expected) {
  assert.deepEqual(
    activationMissingConfirmations(args, target.occasionLink),
    expected,
  );
}
