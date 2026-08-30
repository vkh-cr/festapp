import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';

import {
  parseProjectConfig,
  releaseLaneContractErrors,
} from '../release/release_lane_preflight.mjs';

const repoRoot = '/public/festapp';
const config = parseProjectConfig([
  'BACKEND_ACTIVATION_TENANT_ID=hvezdamorska',
  'IOS_BUNDLE_ID=festapp.hvezdamorska',
  'ANDROID_APPLICATION_ID=fstapp.hvezdamorska',
].join('\n'));
const manifest = {
  schemaVersion: 2,
  bundleId: 'festapp.hvezdamorska',
  androidPackage: 'fstapp.hvezdamorska',
  releaseBranch: 'prod/hvezdamorska',
  backend: {
    releaseIntent: 'canonical-cutover',
    activation: { tenantId: 'hvezdamorska' },
  },
};

test('one external schema-2 manifest may own both web and mobile release lanes', () => {
  for (const mode of ['web', 'mobile']) {
    assert.deepEqual(releaseLaneContractErrors({
      manifest,
      config,
      manifestPath: '/private/festappseed/release/store-listings/hvezdamorska/config.json',
      mode,
      repoRoot,
    }), []);
  }
});

test('mobile lane fails closed on wrong identities, branch and repository-local manifest', () => {
  const errors = releaseLaneContractErrors({
    manifest: {
      ...manifest,
      schemaVersion: 1,
      bundleId: 'invented.bundle',
      androidPackage: '',
      releaseBranch: 'main',
      backend: { releaseIntent: 'backend-transition', activation: { tenantId: 'festapp' } },
    },
    config,
    manifestPath: path.join(repoRoot, 'release.json'),
    mode: 'mobile',
    repoRoot,
  });
  assert.ok(errors.some((error) => error.includes('schemaVersion 2')));
  assert.ok(errors.some((error) => error.includes('activation tenant')));
  assert.ok(errors.some((error) => error.includes('canonical-cutover')));
  assert.ok(errors.some((error) => error.includes('outside the public Festapp repository')));
  assert.ok(errors.some((error) => error.includes('bundleId')));
  assert.ok(errors.some((error) => error.includes('androidPackage')));
  assert.ok(errors.some((error) => error.includes('releaseBranch')));
});

