#!/usr/bin/env node

const API_ROOT = 'https://api.cloudflare.com/client/v4';

function required(name, value) {
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function assertSlug(name, value) {
  if (!/^[a-z0-9][a-z0-9-]{0,57}[a-z0-9]$/.test(value)) {
    throw new Error(`${name} is not a valid Cloudflare Pages project name`);
  }
  return value;
}

function assertBranch(value) {
  if (!/^prod\/[a-z0-9][a-z0-9-]*$/.test(value)) {
    throw new Error('BRANCH must be a prod/* branch');
  }
  return value;
}

function assertDomain(value) {
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(value)) {
    throw new Error('DOMAIN must be a DNS hostname');
  }
  return value;
}

async function api(fetchImpl, token, accountId, path, options = {}) {
  const response = await fetchImpl(`${API_ROOT}/accounts/${accountId}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  const body = await response.json().catch(() => ({}));
  return { response, body };
}

function publicRuntimeEnv(config) {
  return {
    SUPABASE_URL: { type: 'plain_text', value: config.runtimeSupabaseUrl },
    SUPABASE_ANON_KEY: { type: 'plain_text', value: config.runtimeSupabaseAnonKey },
    ORGANIZATION_ID: { type: 'plain_text', value: config.runtimeOrganizationId },
  };
}

function requireSuccess(label, call) {
  if (!call.response.ok || call.body.success !== true) {
    const details = (call.body.errors || []).map((error) => error.message).filter(Boolean).join('; ');
    throw new Error(`${label} failed (${call.response.status})${details ? `: ${details}` : ''}`);
  }
  return call.body.result;
}

export async function ensurePagesProject(config, fetchImpl = fetch) {
  const projectPath = `/pages/projects/${encodeURIComponent(config.project)}`;
  const current = await api(fetchImpl, config.token, config.accountId, projectPath);
  let project;
  let created = false;

  if (current.response.status === 404) {
    project = requireSuccess('Cloudflare Pages project creation', await api(
      fetchImpl,
      config.token,
      config.accountId,
      '/pages/projects',
      {
        method: 'POST',
        body: JSON.stringify({ name: config.project, production_branch: config.branch }),
      },
    ));
    created = true;
  } else {
    project = requireSuccess('Cloudflare Pages project lookup', current);
  }

  // Cloudflare PATCH treats env-var keys as individual mutations; omitted keys
  // are retained and only an explicit null deletes one. Sending back masked
  // secret values from the GET response could otherwise corrupt unrelated
  // bindings, so update only the three public values owned by this bundle.
  const envVars = publicRuntimeEnv(config);
  project = requireSuccess('Cloudflare Pages project configuration', await api(
    fetchImpl,
    config.token,
    config.accountId,
    projectPath,
    {
      method: 'PATCH',
      body: JSON.stringify({
        production_branch: config.branch,
        deployment_configs: { production: { env_vars: envVars } },
      }),
    },
  ));

  const domainPath = `${projectPath}/domains/${encodeURIComponent(config.domain)}`;
  const domainLookup = await api(fetchImpl, config.token, config.accountId, domainPath);
  let domain;
  let domainAdded = false;
  if (domainLookup.response.status === 404) {
    domain = requireSuccess('Cloudflare Pages custom-domain creation', await api(
      fetchImpl,
      config.token,
      config.accountId,
      `${projectPath}/domains`,
      { method: 'POST', body: JSON.stringify({ name: config.domain }) },
    ));
    domainAdded = true;
  } else {
    domain = requireSuccess('Cloudflare Pages custom-domain lookup', domainLookup);
  }

  return {
    project: project.name || config.project,
    productionBranch: project.production_branch || config.branch,
    created,
    domain: domain.name || config.domain,
    domainStatus: domain.status || 'initializing',
    domainAdded,
  };
}

export function configFromEnvironment(env = process.env) {
  const activationFields = [
    'BACKEND_ACTIVATION_TENANT_ID',
    'BACKEND_ACTIVATION_PHASE',
    'BACKEND_ACTIVATION_CANONICAL_SUPABASE_URL',
    'BACKEND_ACTIVATION_CANONICAL_SUPABASE_ANON_KEY',
    'BACKEND_ACTIVATION_CANONICAL_ORGANIZATION_ID',
  ];
  const populatedActivationFields = activationFields.filter((name) => Boolean(env[name]));
  let phase = env.BACKEND_ACTIVATION_PHASE || '';
  if (!phase && populatedActivationFields.length === 0) {
    phase = 'legacy';
  } else if (!phase || populatedActivationFields.length !== activationFields.length) {
    throw new Error('backend activation profile must be fully populated or fully disabled');
  }
  if (!['legacy', 'canonical'].includes(phase)) {
    throw new Error('BACKEND_ACTIVATION_PHASE must be legacy or canonical');
  }
  const urlName = phase === 'canonical'
    ? 'BACKEND_ACTIVATION_CANONICAL_SUPABASE_URL' : 'SUPABASE_URL';
  const keyName = phase === 'canonical'
    ? 'BACKEND_ACTIVATION_CANONICAL_SUPABASE_ANON_KEY' : 'SUPABASE_ANON_KEY';
  const organizationName = phase === 'canonical'
    ? 'BACKEND_ACTIVATION_CANONICAL_ORGANIZATION_ID' : 'ORGANIZATION_ID';
  const supabaseUrl = new URL(required(urlName, env[urlName]));
  if (supabaseUrl.protocol !== 'https:' || supabaseUrl.pathname !== '/') {
    throw new Error(`${urlName} must be an HTTPS origin`);
  }
  const organizationId = required(organizationName, env[organizationName]);
  if (!/^[1-9][0-9]*$/.test(organizationId)) throw new Error('ORGANIZATION_ID must be positive');
  return {
    token: required('CF_API_TOKEN', env.CF_API_TOKEN),
    accountId: required('CF_ACCOUNT_ID', env.CF_ACCOUNT_ID),
    project: assertSlug('CF_PROJECT', required('CF_PROJECT', env.CF_PROJECT)),
    branch: assertBranch(required('BRANCH', env.BRANCH)),
    domain: assertDomain(required('DOMAIN', env.DOMAIN)),
    phase,
    runtimeSupabaseUrl: supabaseUrl.origin,
    runtimeSupabaseAnonKey: required(keyName, env[keyName]),
    runtimeOrganizationId: organizationId,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  ensurePagesProject(configFromEnvironment())
    .then((result) => console.log(JSON.stringify(result)))
    .catch((error) => {
      console.error(`ERROR: ${error.message}`);
      process.exitCode = 1;
    });
}
