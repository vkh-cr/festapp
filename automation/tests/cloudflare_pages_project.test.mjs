import assert from 'node:assert/strict';
import test from 'node:test';
import {
  configFromEnvironment,
  ensurePagesProject,
} from '../cloudflare/ensure-pages-project.mjs';

const config = {
  token: 'token', accountId: 'account', project: 'hvezdamorska',
  branch: 'prod/hvezdamorska', domain: 'hvezdamorska.festapp.net',
  phase: 'legacy', runtimeSupabaseUrl: 'https://legacy.supabase.co',
  runtimeSupabaseAnonKey: 'public-anon', runtimeOrganizationId: '4',
};

function response(status, result, success = status >= 200 && status < 300) {
  return { status, ok: success, json: async () => ({ success, result, errors: [] }) };
}

test('creates a missing project, configures public worker env, and adds domain', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url, options, body: options.body ? JSON.parse(options.body) : undefined });
    if (calls.length === 1) return response(404, null, false);
    if (calls.length === 2) return response(200, { name: config.project });
    if (calls.length === 3) return response(200, {
      name: config.project, production_branch: config.branch,
    });
    if (calls.length === 4) return response(404, null, false);
    return response(200, { name: config.domain, status: 'initializing' });
  };

  const result = await ensurePagesProject(config, fetchImpl);
  assert.equal(result.created, true);
  assert.equal(result.domainAdded, true);
  assert.equal(calls[1].options.method, 'POST');
  assert.deepEqual(calls[1].body, { name: config.project, production_branch: config.branch });
  assert.equal(calls[2].body.deployment_configs.production.env_vars.SUPABASE_URL.value,
    config.runtimeSupabaseUrl);
  assert.equal(calls[2].body.deployment_configs.production.env_vars.ORGANIZATION_ID.value, '4');
  assert.equal(calls[4].body.name, config.domain);
});

test('updates only owned environment-variable keys on an existing project', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url, options, body: options.body ? JSON.parse(options.body) : undefined });
    if (calls.length === 1) return response(200, {
      name: config.project,
      deployment_configs: { production: { env_vars: {
        KEEP_ME: { type: 'plain_text', value: 'yes' },
      } } },
    });
    if (calls.length === 2) return response(200, {
      name: config.project, production_branch: config.branch,
    });
    return response(200, { name: config.domain, status: 'active' });
  };

  const result = await ensurePagesProject(config, fetchImpl);
  assert.equal(result.created, false);
  assert.equal(result.domainAdded, false);
  assert.deepEqual(Object.keys(calls[1].body.deployment_configs.production.env_vars).sort(),
    ['ORGANIZATION_ID', 'SUPABASE_ANON_KEY', 'SUPABASE_URL']);
});

test('rejects unsafe deployment configuration before network access', () => {
  assert.throws(() => configFromEnvironment({
    CF_API_TOKEN: 'x', CF_ACCOUNT_ID: 'a', CF_PROJECT: 'bad/project',
    BRANCH: 'main', DOMAIN: 'https://bad.example', SUPABASE_URL: 'http://bad.example',
    SUPABASE_ANON_KEY: 'anon', ORGANIZATION_ID: '0', BACKEND_ACTIVATION_PHASE: 'legacy',
  }));
});

test('selects the complete canonical Worker profile only in canonical phase', () => {
  const resolved = configFromEnvironment({
    CF_API_TOKEN: 'x', CF_ACCOUNT_ID: 'a', CF_PROJECT: 'hvezdamorska',
    BRANCH: 'prod/hvezdamorska', DOMAIN: 'hvezdamorska.festapp.net',
    SUPABASE_URL: 'https://legacy.supabase.co', SUPABASE_ANON_KEY: 'legacy-anon',
    ORGANIZATION_ID: '4', BACKEND_ACTIVATION_PHASE: 'canonical',
    BACKEND_ACTIVATION_TENANT_ID: 'hvezdamorska',
    BACKEND_ACTIVATION_CANONICAL_SUPABASE_URL: 'https://api.festapp.net',
    BACKEND_ACTIVATION_CANONICAL_SUPABASE_ANON_KEY: 'canonical-anon',
    BACKEND_ACTIVATION_CANONICAL_ORGANIZATION_ID: '7',
  });
  assert.equal(resolved.runtimeSupabaseUrl, 'https://api.festapp.net');
  assert.equal(resolved.runtimeSupabaseAnonKey, 'canonical-anon');
  assert.equal(resolved.runtimeOrganizationId, '7');
});

test('a fully disabled activation profile remains a backward-compatible legacy deploy', () => {
  const resolved = configFromEnvironment({
    CF_API_TOKEN: 'x', CF_ACCOUNT_ID: 'a', CF_PROJECT: 'festapp-web',
    BRANCH: 'prod/festapp-web', DOMAIN: 'web.festapp.net',
    SUPABASE_URL: 'https://legacy.supabase.co', SUPABASE_ANON_KEY: 'legacy-anon',
    ORGANIZATION_ID: '2',
  });
  assert.equal(resolved.phase, 'legacy');
  assert.equal(resolved.runtimeSupabaseUrl, 'https://legacy.supabase.co');
});

test('a partially populated activation profile fails closed', () => {
  assert.throws(() => configFromEnvironment({
    CF_API_TOKEN: 'x', CF_ACCOUNT_ID: 'a', CF_PROJECT: 'festapp-web',
    BRANCH: 'prod/festapp-web', DOMAIN: 'web.festapp.net',
    SUPABASE_URL: 'https://legacy.supabase.co', SUPABASE_ANON_KEY: 'legacy-anon',
    ORGANIZATION_ID: '2', BACKEND_ACTIVATION_PHASE: 'legacy',
  }), /fully populated or fully disabled/);
});
