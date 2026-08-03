#!/usr/bin/env node

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildActivateSql,
  buildDisableSql,
  buildPreflightSql,
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
